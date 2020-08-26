using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tx;
using Serilog;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class have <see cref="Block{T}"/>s, <see cref="Transaction{T}"/>s, and the chain
    /// information.
    /// </summary>
    /// <remarks>This object is guaranteed that it has at least one block, since it takes a genesis
    /// block when it's instantiated.</remarks>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    /// <seealso cref="IAction"/>
    /// <seealso cref="Block{T}"/>
    /// <seealso cref="Transaction{T}"/>
    public class BlockChain<T>
        where T : IAction, new()
    {
        // FIXME: The _rwlock field should be private.
        [SuppressMessage(
            "StyleCop.CSharp.OrderingRules",
            "SA1401:FieldsMustBePrivate",
            Justification = "Temporary visibility.")]
        internal readonly ReaderWriterLockSlim _rwlock;
        private readonly object _txLock;
        private readonly ILogger _logger;

        /// <summary>
        /// All <see cref="Block{T}"/>s in the <see cref="BlockChain{T}"/>
        /// storage, including orphan <see cref="Block{T}"/>s.
        /// Keys are <see cref="Block{T}.Hash"/>es and values are
        /// their corresponding <see cref="Block{T}"/>s.
        /// </summary>
        private IDictionary<HashDigest<SHA256>, Block<T>> _blocks;

        /// <summary>
        /// All <see cref="Transaction{T}"/>s in the <see cref="BlockChain{T}"/>
        /// storage, including orphan <see cref="Transaction{T}"/>s.
        /// Keys are <see cref="Transaction{T}.Id"/>s and values are
        /// their corresponding <see cref="Transaction{T}"/>s.
        /// </summary>
        private IDictionary<TxId, Transaction<T>> _transactions;

        /// <summary>
        /// Initializes a new instance of the <see cref="BlockChain{T}"/> class.
        /// </summary>
        /// <param name="policy"><see cref="IBlockPolicy{T}"/> to use in the
        /// <see cref="BlockChain{T}"/>.</param>
        /// <param name="store"><see cref="IStore"/> to store <see cref="Block{T}"/>s,
        /// <see cref="Transaction{T}"/>s, and <see cref="BlockChain{T}"/> information.</param>
        /// <param name="genesisBlock">The genesis <see cref="Block{T}"/> of
        /// the <see cref="BlockChain{T}"/>, which is a part of the consensus.
        /// If the given <paramref name="store"/> already contains the genesis block
        /// it checks if the existing genesis block and this argument is the same.
        /// If the <paramref name="store"/> has no genesis block yet this argument will
        /// be used for that.</param>
        /// <param name="render">Defines whether to render actions on this
        /// <see cref="BlockChain{T}"/>.  Turned on by default.</param>
        /// <param name="stateStore"><see cref="IStateStore"/> to store states.</param>
        /// <exception cref="InvalidGenesisBlockException">Thrown when the <paramref name="store"/>
        /// has a genesis block and it does not match to what the network expects
        /// (i.e., <paramref name="genesisBlock"/>).</exception>
        public BlockChain(
            IBlockPolicy<T> policy,
            IStore store,
            IStateStore stateStore,
            Block<T> genesisBlock,
            bool render = true
            )
            : this(
                policy,
                store,
                stateStore,
                store.GetCanonicalChainId() ?? Guid.NewGuid(),
                genesisBlock,
                render)
        {
        }

        internal BlockChain(
            IBlockPolicy<T> policy,
            IStore store,
            IStateStore stateStore,
            Guid id,
            Block<T> genesisBlock,
            bool render
        )
            : this(
                policy,
                store,
                stateStore,
                id,
                genesisBlock,
                false,
                render
            )
        {
        }

        private BlockChain(
            IBlockPolicy<T> policy,
            IStore store,
            IStateStore stateStore,
            Guid id,
            Block<T> genesisBlock,
            bool inFork,
            bool render
        )
        {
            Id = id;
            Policy = policy;
            Store = store;

            // It expects store is DefaultStore or RocksDBStore.
            StateStore = stateStore ?? store as IStateStore;
            if (StateStore is null)
            {
                throw new ArgumentNullException(nameof(stateStore));
            }

            _blocks = new BlockSet<T>(store);
            _transactions = new TransactionSet<T>(store);
            Render = render;
            _rwlock = new ReaderWriterLockSlim(LockRecursionPolicy.SupportsRecursion);
            _txLock = new object();

            if (Store.GetCanonicalChainId() is null)
            {
                Store.SetCanonicalChainId(Id);
            }

            _logger = Log.ForContext<BlockChain<T>>()
                .ForContext("CanonicalChainId", Id);

            if (Count == 0)
            {
                Append(
                    genesisBlock,
                    currentTime: genesisBlock.Timestamp,
                    renderActions: !inFork,
                    evaluateActions: !inFork
                );
            }
            else if (!Genesis.Equals(genesisBlock))
            {
                string msg =
                    $"The genesis block that the given {nameof(IStore)} contains does not match " +
                    "to the genesis block that the network expects.  You might pass the wrong " +
                    "store which is incompatible with this chain.  Or your network might " +
                    "restarted the chain with a new genesis block so that it is incompatible " +
                    "with your existing chain in the local store.";
                throw new InvalidGenesisBlockException(
                    networkExpected: genesisBlock.Hash,
                    stored: Genesis.Hash,
                    message: msg
                );
            }
        }

        ~BlockChain()
        {
            _rwlock?.Dispose();
        }

        /// <summary>
        /// An event which is invoked when <see cref="Tip"/> is changed.
        /// </summary>
        public event EventHandler<TipChangedEventArgs> TipChanged;

        /// <summary>
        /// An event which is invoked when the chain is reorged.
        /// </summary>
        public event EventHandler<ReorgedEventArgs> Reorged;

        /// <summary>
        /// Defines whether to render actions on this <see cref="BlockChain{T}"/>.
        /// </summary>
        public bool Render { get; }

        public IBlockPolicy<T> Policy { get; }

        /// <summary>
        /// The topmost <see cref="Block{T}"/> of the current blockchain.
        /// Can be <c>null</c> if the blockchain is empty.
        /// </summary>
        public Block<T> Tip
        {
            get
            {
                try
                {
                    return this[-1];
                }
                catch (ArgumentOutOfRangeException)
                {
                    return null;
                }
            }
        }

        /// <summary>
        /// The first <see cref="Block{T}"/> in the <see cref="BlockChain{T}"/>.
        /// </summary>
        public Block<T> Genesis => this[0];

        public Guid Id { get; private set; }

        /// <summary>
        /// All <see cref="Block{T}.Hash"/>es in the current index.  The genesis block's hash goes
        /// first, and the tip goes last.
        /// Returns a <see cref="long"/> integer that represents the number of elements in the
        /// <see cref="BlockChain{T}"/>.
        /// </summary>
        public IEnumerable<HashDigest<SHA256>> BlockHashes => IterateBlockHashes();

        /// <summary>
        /// Returns a <see cref="long"/> integer that represents the number of elements in the
        /// <see cref="BlockChain{T}"/>.
        /// </summary>
        /// <returns>A number that represents how many elements in the <see cref="BlockChain{T}"/>.
        /// </returns>
        public long Count => Store.CountIndex(Id);

        internal IStore Store { get; }

        internal IStateStore StateStore { get; }

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block{T}"/> does not exist.</exception>
        public Block<T> this[int index] => this[(long)index];

        /// <summary>
        /// Gets the block corresponding to the <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A number of index of <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given index of
        /// <see cref="Block{T}"/> does not exist.</exception>
        public Block<T> this[long index]
        {
            get
            {
                _rwlock.EnterReadLock();
                try
                {
                    HashDigest<SHA256>? blockHash = Store.IndexBlockHash(Id, index);
                    if (blockHash == null)
                    {
                        throw new ArgumentOutOfRangeException();
                    }

                    return _blocks[blockHash.Value];
                }
                finally
                {
                    _rwlock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// Gets the block corresponding to the <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">A <see cref="Block{T}.Hash"/> of the <see cref="Block{T}"/> to
        /// get. </param>
        /// <exception cref="KeyNotFoundException">Thrown when there is no <see cref="Block{T}"/>
        /// with a given <paramref name="blockHash"/>.</exception>
        public Block<T> this[HashDigest<SHA256> blockHash]
        {
            get
            {
                if (!ContainsBlock(blockHash))
                {
                    throw new KeyNotFoundException(
                        $"The given hash[{blockHash}] was not found in this chain."
                    );
                }

                _rwlock.EnterReadLock();
                try
                {
                    return _blocks[blockHash];
                }
                finally
                {
                    _rwlock.ExitReadLock();
                }
            }
        }

        /// <summary>
        /// Mine the genesis block of the blockchain.
        /// </summary>
        /// <param name="actions">List of actions will be included in the genesis block.
        /// If it's null, it will be replaced with <see cref="ImmutableArray{T}.Empty"/>
        /// as default.</param>
        /// <param name="privateKey">A private key to sign the transaction in the genesis block.
        /// If it's null, it will use new private key as default.</param>
        /// <param name="timestamp">The timestamp of the genesis block. If it's null, it will
        /// use <see cref="DateTimeOffset.UtcNow"/> as default.</param>
        /// <returns>The genesis block mined with parameters.</returns>
        public static Block<T> MakeGenesisBlock(
            IEnumerable<T> actions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null)
        {
            privateKey = privateKey ?? new PrivateKey();
            actions = actions ?? ImmutableArray<T>.Empty;
            IEnumerable<Transaction<T>> transactions = new[]
            {
                Transaction<T>.Create(0, privateKey, null, actions, timestamp: timestamp),
            };

            return Block<T>.Mine(
                0,
                0,
                0,
                privateKey.ToAddress(),
                null,
                timestamp ?? DateTimeOffset.UtcNow,
                transactions);
        }

        /// <summary>
        /// Determines whether the <see cref="BlockChain{T}"/> contains <see cref="Block{T}"/>
        /// the specified <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="HashDigest{T}"/> of the <see cref="Block{T}"/> to
        /// check if it is in the <see cref="BlockChain{T}"/>.</param>
        /// <returns>
        /// <c>true</c> if the <see cref="BlockChain{T}"/> contains <see cref="Block{T}"/> with
        /// the specified <paramref name="blockHash"/>; otherwise, <c>false</c>.
        /// </returns>
        public bool ContainsBlock(HashDigest<SHA256> blockHash)
        {
            _rwlock.EnterReadLock();
            try
            {
                return _blocks.ContainsKey(blockHash) &&
                       _blocks[blockHash].Index is long branchPointIndex &&
                       branchPointIndex <= Tip?.Index &&
                       this[branchPointIndex].Hash.Equals(blockHash);
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Gets the transaction corresponding to the <paramref name="txId"/>.
        /// </summary>
        /// <param name="txId">A <see cref="TxId"/> of the <see cref="Transaction{T}"/> to get.
        /// </param>
        /// <returns><see cref="Transaction{T}"/> with <paramref name="txId"/>.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when there is no
        /// <see cref="Transaction{T}"/> with a given <paramref name="txId"/>.</exception>
        public Transaction<T> GetTransaction(TxId txId)
        {
            _rwlock.EnterReadLock();
            try
            {
                return _transactions[txId];
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Gets the state of the given <paramref name="address"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">An <see cref="Address"/> to get the states of.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to start finding
        /// the state.  It will be The tip of the <see cref="BlockChain{T}"/> if it is <c>null</c>.
        /// </param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="StateCompleters{T}.Recalculate"/> makes the incomplete states
        /// recalculated and filled on the fly.</para>
        /// <para><see cref="StateCompleters{T}.Reject"/> (which is default) makes the incomplete
        /// states (if needed) to cause <see cref="IncompleteBlockStatesException"/> instead.</para>
        /// </param>
        /// <returns>The current state of given <paramref name="address"/>.  This can be <c>null</c>
        /// if <paramref name="address"/> has no value.</returns>
        public IValue GetState(
            Address address,
            HashDigest<SHA256>? offset = null,
            StateCompleter<T> stateCompleter = null
        ) =>
            GetRawState(
                ToStateKey(address),
                offset,
                StateCompleters<T>.ToRawStateCompleter(
                    stateCompleter ?? StateCompleters<T>.Reject,
                    address
                )
            );

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/> in the
        /// <see cref="BlockChain{T}"/> from <paramref name="offset"/>.
        /// </summary>
        /// <param name="address">The owner <see cref="Address"/> to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <param name="offset">The <see cref="HashDigest{T}"/> of the block to
        /// start finding the state. It will be the tip of the
        /// <see cref="BlockChain{T}"/> if it is <c>null</c>.</param>
        /// <param name="stateCompleter">When the <see cref="BlockChain{T}"/> instance does not
        /// contain states dirty of the block which lastly updated states of a requested address,
        /// this delegate is called and its return value is used instead.
        /// <para><see cref="FungibleAssetStateCompleters{T}.Recalculate"/> makes the incomplete
        /// states recalculated and filled on the fly.</para>
        /// <para><see cref="FungibleAssetStateCompleters{T}.Reject"/> (which is default) makes
        /// the incomplete states (if needed) to cause <see cref="IncompleteBlockStatesException"/>
        /// instead.</para></param>
        /// <returns>The <paramref name="address"/>'s current balance (or balance as of the given
        /// <paramref name="offset"/>) of the <paramref name="currency"/>.
        /// </returns>
        public BigInteger GetBalance(
            Address address,
            Currency currency,
            HashDigest<SHA256>? offset = null,
            FungibleAssetStateCompleter<T> stateCompleter = null
        )
        {
            stateCompleter ??= FungibleAssetStateCompleters<T>.Reject;
            IValue v = GetRawState(
                ToFungibleAssetKey(address, currency),
                offset,
                FungibleAssetStateCompleters<T>.ToRawStateCompleter(
                    stateCompleter,
                    address,
                    currency
                )
            );
            return v is Bencodex.Types.Integer i ? i.Value : 0;
        }

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para>Note that <see cref="IAction.Render"/> methods of
        /// all <see cref="IAction"/> objects that belong
        /// to the <paramref name="block"/> are called right after
        /// the <paramref name="block"/> is confirmed (and thus all states
        /// reflect changes in the <paramref name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block{T}"/>, which is mined,
        /// to add.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states which
        /// are required for action execution and rendering.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
        /// <exception cref="InvalidBlockException">Thrown when the given
        /// <paramref name="block"/> is invalid, in itself or according to
        /// the <see cref="Policy"/>.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the
        /// <see cref="Transaction{T}.Nonce"/> is different from
        /// <see cref="GetNextTxNonce"/> result of the
        /// <see cref="Transaction{T}.Signer"/>.</exception>
        public void Append(Block<T> block, StateCompleterSet<T>? stateCompleters = null) =>
            Append(block, DateTimeOffset.UtcNow, stateCompleters);

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para>Note that <see cref="IAction.Render"/> methods of
        /// all <see cref="IAction"/> objects that belong
        /// to the <paramref name="block"/> are called right after
        /// the <paramref name="block"/> is confirmed (and thus all states
        /// reflect changes in the <paramref name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block{T}"/>, which is mined,
        /// to add.</param>
        /// <param name="currentTime">The current time.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states which
        /// are required for action execution and rendering.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
        /// <exception cref="InvalidBlockException">Thrown when the given
        /// <paramref name="block"/> is invalid, in itself or according to
        /// the <see cref="Policy"/>.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the
        /// <see cref="Transaction{T}.Nonce"/> is different from
        /// <see cref="GetNextTxNonce"/> result of the
        /// <see cref="Transaction{T}.Signer"/>.</exception>
        public void Append(
            Block<T> block,
            DateTimeOffset currentTime,
            StateCompleterSet<T>? stateCompleters = null
        ) =>
            Append(
                block,
                currentTime,
                evaluateActions: true,
                renderActions: true,
                stateCompleters: stateCompleters
            );

        /// <summary>
        /// Adds a <paramref name="transaction"/> to the pending list so that
        /// a next <see cref="Block{T}"/> to be mined contains the given
        /// <paramref name="transaction"/>.
        /// </summary>
        /// <param name="transaction"><see cref="Transaction{T}"/> to add to the pending list.
        /// </param>
        /// <exception cref="InvalidTxException">Thrown when the given
        /// <paramref name="transaction"/> is invalid.</exception>
        public void StageTransaction(Transaction<T> transaction)
        {
            if (!transaction.GenesisHash.Equals(Genesis.Hash))
            {
                var msg = "GenesisHash of the transaction is not compatible " +
                          "with the BlockChain<T>.Genesis.Hash.";
                throw new InvalidTxGenesisHashException(
                    transaction.Id,
                    Genesis.Hash,
                    transaction.GenesisHash,
                    msg);
            }

            // FIXME it's global chain lock so using it in this method can cause degrading
            // parallelism of `BlockChain<T>`. we should re-organize locks in `BlockChain<T>`
            _rwlock.EnterWriteLock();

            try
            {
                if (!_transactions.ContainsKey(transaction.Id))
                {
                    _transactions[transaction.Id] = transaction;
                    Store.StageTransactionIds(ImmutableHashSet.Create(transaction.Id));
                }
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Removes a <paramref name="transaction"/> from the pending list.
        /// </summary>
        /// <param name="transaction">A <see cref="Transaction{T}"/>
        /// to remove from the pending list.</param>
        /// <seealso cref="StageTransaction"/>
        public void UnstageTransaction(Transaction<T> transaction)
        {
            // FIXME it's global chain lock so using it in this method can cause degrading
            // parallelism of `BlockChain<T>`. we should re-organize locks in `BlockChain<T>`
            _rwlock.EnterWriteLock();

            try
            {
                Store.UnstageTransactionIds(ImmutableHashSet.Create(transaction.Id));
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Gets next <see cref="Transaction{T}.Nonce"/> of the address.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> from which to obtain the
        /// <see cref="Transaction{T}.Nonce"/> value.</param>
        /// <returns>The next <see cref="Transaction{T}.Nonce"/> value of the
        /// <paramref name="address"/>.</returns>
        public long GetNextTxNonce(Address address)
        {
            _rwlock.EnterReadLock();

            try
            {
                long nonce = Store.GetTxNonce(Id, address);
                var prevNonce = nonce - 1;
                var stagedTxNonces = Store.IterateStagedTransactionIds()
                    .Select(Store.GetTransaction<T>)
                    .Where(tx => tx.Signer.Equals(address) && tx.Nonce > prevNonce)
                    .Select(tx => tx.Nonce)
                    .OrderBy(n => n);

                foreach (long n in stagedTxNonces)
                {
                    if (n != nonce)
                    {
                        break;
                    }

                    nonce++;
                }

                return nonce;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s,
        /// and then <see cref="Append(Block{T}, StateCompleterSet{T}?)"/> it to the chain
        /// (unless the <paramref name="append"/> option is turned off).
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="currentTime">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to <see cref="Append(Block{T}, StateCompleterSet{T}?)"/>
        /// the mined block.  Turned on by default.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public async Task<Block<T>> MineBlock(
            Address miner,
            DateTimeOffset currentTime,
            bool append = true,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            long index = Store.CountIndex(Id);
            long difficulty = Policy.GetNextBlockDifficulty(this);
            HashDigest<SHA256>? prevHash = Store.IndexBlockHash(Id, index - 1);
            IEnumerable<Transaction<T>> stagedTransactions = Store
                .IterateStagedTransactionIds()
                .Select(Store.GetTransaction<T>);

            var transactionsToMine = new List<Transaction<T>>();

            foreach (Transaction<T> tx in stagedTransactions)
            {
                if (!Policy.DoesTransactionFollowsPolicy(tx))
                {
                    UnstageTransaction(tx);
                }
                else if (Store.GetTxNonce(Id, tx.Signer) <= tx.Nonce
                         && tx.Nonce < GetNextTxNonce(tx.Signer))
                {
                    transactionsToMine.Add(tx);
                }
            }

            CancellationTokenSource cts = new CancellationTokenSource();
            CancellationTokenSource cancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);

            void WatchTip(object target, TipChangedEventArgs args)
            {
                cts.Cancel();
            }

            TipChanged += WatchTip;

            Block<T> block;
            try
            {
                block = await Task.Run(
                    () => Block<T>.Mine(
                        index: index,
                        difficulty: difficulty,
                        previousTotalDifficulty: Tip.TotalDifficulty,
                        miner: miner,
                        previousHash: prevHash,
                        timestamp: currentTime,
                        transactions: transactionsToMine,
                        cancellationToken: cancellationTokenSource.Token),
                    cancellationTokenSource.Token
                );
            }
            catch (OperationCanceledException)
            {
                if (cts.IsCancellationRequested)
                {
                    throw new OperationCanceledException(
                        "Mining canceled due to change of tip index");
                }

                throw new OperationCanceledException(cancellationToken);
            }

            var actionEvaluations = EvaluateActions(block, StateCompleterSet<T>.Recalculate);

            block = new Block<T>(block, ActionEvaluationsToHash(actionEvaluations));

            TipChanged -= WatchTip;
            cancellationTokenSource.Dispose();
            cts.Dispose();

            if (append)
            {
                Append(block, currentTime);
            }

            return block;
        }

        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s,
        /// and then <see cref="Append(Block{T}, StateCompleterSet{T}?)"/> it to the chain
        /// (unless the <paramref name="append"/> option is turned off).
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="append">Whether to <see cref="Append(Block{T}, StateCompleterSet{T}?)"/>
        /// the mined block.  Turned on by default.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public Task<Block<T>> MineBlock(
            Address miner,
            bool append = true,
            CancellationToken cancellationToken = default
        ) =>
            MineBlock(miner, DateTimeOffset.UtcNow, append, cancellationToken);

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> and stage the transaction.
        /// Cannot create new transaction if the genesis block does not exist.
        /// </summary>
        /// <param name="privateKey">A <see cref="PrivateKey"/> of the account who creates and
        /// signs a new transaction.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s to include to a new transaction.
        /// </param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose states affected by
        /// <paramref name="actions"/>.</param>
        /// <param name="timestamp">The time this <see cref="Transaction{T}"/> is created and
        /// signed.</param>
        /// <returns>A created new <see cref="Transaction{T}"/> signed by the given
        /// <paramref name="privateKey"/>.</returns>
        /// <seealso cref="Transaction{T}.Create" />
        public Transaction<T> MakeTransaction(
            PrivateKey privateKey,
            IEnumerable<T> actions,
            IImmutableSet<Address> updatedAddresses = null,
            DateTimeOffset? timestamp = null)
        {
            timestamp = timestamp ?? DateTimeOffset.UtcNow;
            lock (_txLock)
            {
                // FIXME: Exception should be documented when the genesis block does not exist.
                Transaction<T> tx = Transaction<T>.Create(
                    GetNextTxNonce(privateKey.ToAddress()),
                    privateKey,
                    Genesis.Hash,
                    actions,
                    updatedAddresses,
                    timestamp);
                StageTransaction(tx);

                return tx;
            }
        }

        internal static string ToStateKey(Address address) => address.ToHex().ToLowerInvariant();

        internal static string ToFungibleAssetKey(Address address, Currency currency) =>
            "_" + address.ToHex().ToLowerInvariant() +
            "_" + ByteUtil.Hex(currency.Hash.ByteArray).ToLowerInvariant();

        internal static string ToFungibleAssetKey((Address, Currency) pair) =>
            ToFungibleAssetKey(pair.Item1, pair.Item2);

        internal void Append(
            Block<T> block,
            DateTimeOffset currentTime,
            bool evaluateActions,
            bool renderActions,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            if (!evaluateActions && renderActions)
            {
                throw new ArgumentException(
                    $"{nameof(renderActions)} option requires {nameof(evaluateActions)} " +
                    "to be turned on.",
                    nameof(renderActions)
                );
            }

            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            _logger.Debug("Trying to append block {blockIndex}: {block}", block?.Index, block);

            IReadOnlyList<ActionEvaluation> evaluations = null;
            _rwlock.EnterUpgradeableReadLock();
            try
            {
                InvalidBlockException e =
                    Policy.ValidateNextBlock(this, block);

                if (!(e is null))
                {
                    _logger.Error(e, "Append failed. The block is invalid.");
                    throw e;
                }

                var nonceDeltas = new Dictionary<Address, long>();

                // block.Transactions have already been sorted by
                // the tx nounce order when the block was created
                foreach (Transaction<T> tx1 in block.Transactions)
                {
                    if (!Policy.DoesTransactionFollowsPolicy(tx1))
                    {
                        throw new TxViolatingBlockPolicyException(
                            tx1.Id,
                            "According to BlockPolicy, this transaction is not valid.");
                    }

                    Address txSigner = tx1.Signer;
                    nonceDeltas.TryGetValue(txSigner, out var nonceDelta);

                    long expectedNonce = nonceDelta + Store.GetTxNonce(Id, txSigner);

                    if (!expectedNonce.Equals(tx1.Nonce))
                    {
                        _logger.Debug("Append failed. The tx `{transaction}` is invalid.", tx1);
                        throw new InvalidTxNonceException(
                            tx1.Id,
                            expectedNonce,
                            tx1.Nonce,
                            "Transaction nonce is invalid."
                        );
                    }

                    nonceDeltas[txSigner] = nonceDelta + 1;
                }

                _rwlock.EnterWriteLock();
                try
                {
                    if (evaluateActions)
                    {
                        evaluations = ExecuteActions(block);
                    }

                    Block<T> prevTip = Tip;
                    _blocks[block.Hash] = block;
                    foreach (KeyValuePair<Address, long> pair in nonceDeltas)
                    {
                        Store.IncreaseTxNonce(Id, pair.Key, pair.Value);
                    }

                    Store.AppendIndex(Id, block.Hash);
                    var tipChangedEventArgs = new TipChangedEventArgs
                    {
                        PreviousIndex = prevTip?.Index,
                        PreviousHash = prevTip?.Hash,
                        Index = block.Index,
                        Hash = block.Hash,
                    };

                    _logger.Debug("Unstaging transactions...");

                    ImmutableDictionary<Address, long> maxNonces = block.Transactions
                        .GroupBy(
                            t => t.Signer,
                            t => t.Nonce,
                            (signer, nonces) => new
                            {
                                signer = signer,
                                maxNonce = nonces.Max(),
                            }
                        )
                        .ToImmutableDictionary(t => t.signer, t => t.maxNonce);
                    ISet<TxId> txIds = Store.IterateStagedTransactionIds()
                        .Select(Store.GetTransaction<T>)
                        .Where(tx => maxNonces.TryGetValue(tx.Signer, out long nonce) &&
                            tx.Nonce <= nonce)
                        .Select(tx => tx.Id)
                        .ToImmutableHashSet();
                    Store.UnstageTransactionIds(txIds);
                    TipChanged?.Invoke(this, tipChangedEventArgs);
                    _logger.Debug("Block {blockIndex}: {block} is appended.", block?.Index, block);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }

            if (Render && renderActions)
            {
                RenderBlock(evaluations, block, stateCompleters);
            }
        }

        /// <summary>
        /// Render actions from block index of <paramref name="offset"/>.
        /// </summary>
        /// <param name="offset">Index of the block to start rendering from.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.</param>
        /// <returns>The number of actions rendered.</returns>
        internal int RenderBlocks(long offset, StateCompleterSet<T>? stateCompleters = null)
        {
            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            // FIXME: We should consider the case where block count is larger than int.MaxSize.
            int cnt = 0;
            foreach (var block in IterateBlocks((int)offset))
            {
                cnt += RenderBlock(null, block, stateCompleters);
            }

            return cnt;
        }

        /// <summary>
        /// Render actions of the given <paramref name="block"/>.
        /// </summary>
        /// <param name="evaluations"><see cref="ActionEvaluation"/>s of the block.  If it is
        /// <c>null</c>, evaluate actions of the <paramref name="block"/> again.</param>
        /// <param name="block"><see cref="Block{T}"/> to render actions.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.</param>
        /// <returns>The number of actions rendered.</returns>
        internal int RenderBlock(
            IReadOnlyList<ActionEvaluation> evaluations,
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            _logger.Debug("Render actions in block {blockIndex}: {block}", block?.Index, block);

            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            if (evaluations is null)
            {
                evaluations = EvaluateActions(block, stateCompleters.Value);
            }

            int cnt = 0;
            foreach (var evaluation in evaluations)
            {
                if (evaluation.Exception is null)
                {
                    evaluation.Action.Render(evaluation.InputContext, evaluation.OutputStates);
                }
                else
                {
                    evaluation.Action.RenderError(evaluation.InputContext, evaluation.Exception);
                }

                cnt++;
            }

            return cnt;
        }

        /// <summary>
        /// Evaluates actions in the given <paramref name="block"/> and fills states with the
        /// results.
        /// </summary>
        /// <param name="block">A block to execute.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete previous block
        /// states.  <see cref="StateCompleterSet{T}.Recalculate"/> by default.
        /// </param>
        /// <returns>The result of action evaluations of the given <paramref name="block"/>.
        /// </returns>
        /// <remarks>This method is idempotent (except for rendering).  If the given
        /// <paramref name="block"/> has executed before, it does not execute it nor mutate states.
        /// </remarks>
        internal IReadOnlyList<ActionEvaluation> ExecuteActions(
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            _logger.Debug(
                "Execute actions in the block #{BlockIndex} {Block}.",
                block.Index,
                block
            );
            IReadOnlyList<ActionEvaluation> evaluations = null;
            evaluations = EvaluateActions(
                block,
                stateCompleters ?? StateCompleterSet<T>.Recalculate
            );

            _rwlock.EnterWriteLock();
            try
            {
                SetStates(block, evaluations, buildStateReferences: true);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }

            return evaluations;
        }

        internal IReadOnlyList<ActionEvaluation> EvaluateActions(
            Block<T> block,
            StateCompleterSet<T> stateCompleters
        )
        {
            AccountStateGetter stateGetter;
            AccountBalanceGetter balanceGetter;
            if (block.PreviousHash is null)
            {
                stateGetter = _ => null;
                balanceGetter = (a, c) => 0;
            }
            else
            {
                stateGetter = a => GetState(
                    a,
                    block.PreviousHash,
                    stateCompleters.StateCompleter
                );
                balanceGetter = (address, currency) => GetBalance(
                        address,
                        currency,
                        block.PreviousHash,
                        stateCompleters.FungibleAssetStateCompleter
                    );
            }

            ImmutableList<ActionEvaluation> txEvaluations = block
                .Evaluate(DateTimeOffset.UtcNow, stateGetter, balanceGetter)
                .ToImmutableList();
            return Policy.BlockAction is null
                ? txEvaluations
                : txEvaluations.Add(EvaluateBlockAction(block, txEvaluations, stateCompleters));
        }

        internal ActionEvaluation EvaluateBlockAction(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> txActionEvaluations,
            StateCompleterSet<T> stateCompleters
        )
        {
            if (Policy.BlockAction is null)
            {
                var message = "To evaluate block action, Policy.BlockAction must not be null.";
                throw new InvalidOperationException(message);
            }

            _logger.Debug(
                "Evaluating block action in block {blockIndex}: {block}", block?.Index, block);

            IAccountStateDelta lastStates = null;

            if (!(txActionEvaluations is null) && txActionEvaluations.Count > 0)
            {
                lastStates = txActionEvaluations[txActionEvaluations.Count - 1].OutputStates;
            }

            Address miner = block.Miner.GetValueOrDefault();

            if (lastStates is null)
            {
                lastStates = new AccountStateDeltaImpl(
                    a => GetState(a, block.PreviousHash, stateCompleters.StateCompleter),
                    (address, currency) => GetBalance(
                        address,
                        currency,
                        block.PreviousHash,
                        stateCompleters.FungibleAssetStateCompleter
                    ),
                    miner
                );
            }

            return ActionEvaluation.EvaluateActionsGradually(
                block.Hash,
                block.Index,
                null,
                lastStates,
                miner,
                miner,
                Array.Empty<byte>(),
                new[] { Policy.BlockAction }.ToImmutableList()).First();
        }

        /// <summary>
        /// Find an approximate to the topmost common ancestor between this
        /// <see cref="BlockChain{T}"/> and a given <see cref="BlockLocator"/>.
        /// </summary>
        /// <param name="locator">A block locator that contains candidate common ancestors.</param>
        /// <returns>An approximate to the topmost common ancestor.  If it failed to find anything
        /// returns <c>null</c>.</returns>
        internal HashDigest<SHA256>? FindBranchPoint(BlockLocator locator)
        {
            try
            {
                _rwlock.EnterReadLock();

                foreach (HashDigest<SHA256> hash in locator)
                {
                    if (_blocks.ContainsKey(hash)
                        && _blocks[hash] is Block<T> block
                        && hash.Equals(Store.IndexBlockHash(Id, block.Index)))
                    {
                        return hash;
                    }
                }

                return null;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal Tuple<long?, IReadOnlyList<HashDigest<SHA256>>> FindNextHashes(
            BlockLocator locator,
            HashDigest<SHA256>? stop = null,
            int count = 500)
        {
            try
            {
                _rwlock.EnterReadLock();

                HashDigest<SHA256>? tip = Store.IndexBlockHash(Id, -1);
                if (tip is null)
                {
                    return new Tuple<long?, IReadOnlyList<HashDigest<SHA256>>>(
                        null,
                        new HashDigest<SHA256>[0]
                    );
                }

                HashDigest<SHA256>? branchPoint = FindBranchPoint(locator);
                var branchPointIndex = branchPoint is HashDigest<SHA256> h
                    ? (int)_blocks[h].Index
                    : 0;

                // FIXME: Currently, increasing count by one to satisfy
                // the number defined by FindNextHashesChunkSize variable
                // when branchPointIndex didn't indicate genesis block.
                // Since branchPointIndex is same as the latest block of
                // requesting peer.
                if (branchPointIndex > 0)
                {
                    count++;
                }

                IEnumerable<HashDigest<SHA256>> hashes = Store
                    .IterateIndexes(Id, branchPointIndex, count);

                var result = new List<HashDigest<SHA256>>();
                foreach (HashDigest<SHA256> hash in hashes)
                {
                    if (count == 0)
                    {
                        break;
                    }

                    result.Add(hash);

                    if (hash.Equals(stop))
                    {
                        break;
                    }

                    count--;
                }

                return new Tuple<long?, IReadOnlyList<HashDigest<SHA256>>>(
                    branchPointIndex,
                    result
                );
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal BlockChain<T> Fork(HashDigest<SHA256> point)
        {
            if (!ContainsBlock(point))
            {
                throw new ArgumentException(
                    $"The block [{point}] doesn't exist.",
                    nameof(point));
            }

            Block<T> pointBlock = this[point];

            if (!point.Equals(this[pointBlock.Index].Hash))
            {
                throw new ArgumentException(
                    $"The block [{point}] doesn't exist in the chain index.",
                    nameof(point));
            }

            var forked = new BlockChain<T>(
                Policy, Store, StateStore, Guid.NewGuid(), Genesis, true, Render);
            Guid forkedId = forked.Id;
            _logger.Debug(
                "Trying to fork chain at {branchPoint}" +
                "(prevId: {prevChainId}) (forkedId: {forkedChainId})",
                point,
                Id,
                forkedId);
            try
            {
                _rwlock.EnterReadLock();

                Store.ForkBlockIndexes(Id, forkedId, point);

                var signersToStrip = new Dictionary<Address, int>();

                for (
                    Block<T> block = Tip;
                    block.PreviousHash is HashDigest<SHA256> hash
                    && !block.Hash.Equals(point);
                    block = _blocks[hash])
                {
                    IEnumerable<(Address, int)> signers = block
                        .Transactions
                        .GroupBy(tx => tx.Signer)
                        .Select(g => (g.Key, g.Count()));

                    foreach ((Address address, int txCount) in signers)
                    {
                        int existingValue = 0;
                        signersToStrip.TryGetValue(address, out existingValue);
                        signersToStrip[address] = existingValue + txCount;
                    }
                }

                StateStore.ForkStates(Id, forked.Id, pointBlock);

                foreach (KeyValuePair<Address, long> pair in Store.ListTxNonces(Id))
                {
                    Address address = pair.Key;
                    long existingNonce = pair.Value;
                    long txNonce = existingNonce;
                    int staleTxCount = 0;
                    if (signersToStrip.TryGetValue(address, out staleTxCount))
                    {
                        txNonce -= staleTxCount;
                    }

                    if (txNonce < 0)
                    {
                        throw new InvalidOperationException(
                            $"A tx nonce for {address} in the store seems broken.\n" +
                            $"Existing tx nonce: {existingNonce}\n" +
                            $"# of stale transactions: {staleTxCount}\n"
                        );
                    }

                    // Note that at this point every address has tx nonce = 0
                    // it's merely "setting" rather than "increasing."
                    Store.IncreaseTxNonce(forkedId, address, txNonce);
                }
            }
            finally
            {
                _rwlock.ExitReadLock();
            }

            return forked;
        }

        internal BlockLocator GetBlockLocator(int threshold = 10)
        {
            try
            {
                _rwlock.EnterReadLock();

                return new BlockLocator(
                    indexBlockHash: idx => Store.IndexBlockHash(Id, idx),
                    indexByBlockHash: hash => _blocks[hash].Index,
                    sampleAfter: threshold
                );
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        // FIXME it's very dangerous because replacing Id means
        // ALL blocks (referenced by MineBlock(), etc.) will be changed.
        // we need to add a synchronization mechanism to handle this correctly.
        internal void Swap(
            BlockChain<T> other,
            bool render,
            StateCompleterSet<T>? stateCompleters = null
        )
        {
            if (other is null)
            {
                throw new ArgumentNullException(nameof(other));
            }

            // As render/unrender processing requires every step's states from the branchpoint
            // to the new/stale tip, incomplete states need to be complemented anyway...
            StateCompleterSet<T> completers = stateCompleters ?? StateCompleterSet<T>.Recalculate;

            _logger.Debug(
                "The blockchain was reorged from " +
                "{OldChainId} (#{OldTipIndex} {OldTipHash}) " +
                "to {NewChainId} (#{NewTipIndex} {NewTipHash}).",
                Id,
                Tip.Index,
                Tip.Hash,
                other.Id,
                other.Tip.Index,
                other.Tip.Hash);

            // Finds the branch point.
            Block<T> topmostCommon = null;
            if (!(Tip is null))
            {
                long shorterHeight =
                    Math.Min(Count, other.Count) - 1;
                Block<T> t = this[shorterHeight], o = other[shorterHeight];

                while (true)
                {
                    if (t.Equals(o))
                    {
                        topmostCommon = t;
                        break;
                    }

                    if (t.PreviousHash is HashDigest<SHA256> tp &&
                        o.PreviousHash is HashDigest<SHA256> op)
                    {
                        t = this[tp];
                        o = other[op];
                    }
                    else
                    {
                        break;
                    }
                }
            }

            if (topmostCommon is null)
            {
                const string msg =
                    "A chain cannot be reorged into a heterogeneous chain which has " +
                    "no common genesis at all.";
                throw new InvalidGenesisBlockException(Genesis.Hash, other.Genesis.Hash, msg);
            }

            _logger.Debug(
                "The branchpoint is #{BranchpointIndex} {BranchpointHash}.",
                topmostCommon.Index,
                topmostCommon
            );

            if (Render && render)
            {
                // Unrender stale actions.
                _logger.Debug("Unrendering abandoned actions...");
                int cnt = 0;

                for (
                    Block<T> b = Tip;
                    !(b is null) && b.Index > (topmostCommon?.Index ?? -1) &&
                    b.PreviousHash is HashDigest<SHA256> ph;
                    b = this[ph]
                )
                {
                    List<ActionEvaluation> evaluations =
                        EvaluateActions(b, completers).ToList();
                    evaluations.Reverse();

                    foreach (var evaluation in evaluations)
                    {
                        _logger.Debug("Unrender an action: {Action}.", evaluation.Action);
                        if (evaluation.Exception is null)
                        {
                            evaluation.Action.Unrender(
                                evaluation.InputContext,
                                evaluation.OutputStates
                            );
                        }
                        else
                        {
                            evaluation.Action.UnrenderError(
                                evaluation.InputContext,
                                evaluation.Exception
                            );
                        }

                        cnt++;
                    }
                }

                _logger.Debug($"{nameof(Swap)}() completed unrendering {{Actions}} actions.", cnt);
            }

            IEnumerable<TxId> GetTxIdsWithRange(BlockChain<T> chain, Block<T> start, Block<T> end)
                => Enumerable
                    .Range((int)start.Index + 1, (int)(end.Index - start.Index))
                    .SelectMany(x => chain[x].Transactions.Select(tx => tx.Id));

            // It assumes reorg is small size. If it was big, this may be heavy task.
            ImmutableHashSet<TxId> unstagedTxIds =
                GetTxIdsWithRange(this, topmostCommon, Tip).ToImmutableHashSet();
            ImmutableHashSet<TxId> stageTxIds =
                GetTxIdsWithRange(other, topmostCommon, other.Tip).ToImmutableHashSet();
            ImmutableHashSet<TxId> restageTxIds = unstagedTxIds.Except(stageTxIds);
            Store.StageTransactionIds(restageTxIds);

            try
            {
                _rwlock.EnterWriteLock();

                var tipChangedEventArgs = new TipChangedEventArgs
                {
                    PreviousHash = Tip?.Hash,
                    PreviousIndex = Tip?.Index,
                    Hash = other.Tip.Hash,
                    Index = other.Tip.Index,
                };

                var reorgedEventArgs = new ReorgedEventArgs
                {
                    OldTip = Tip,
                    NewTip = other.Tip,
                    Branchpoint = topmostCommon,
                };

                Guid obsoleteId = Id;
                Id = other.Id;
                Store.SetCanonicalChainId(Id);
                _blocks = new BlockSet<T>(Store);
                TipChanged?.Invoke(this, tipChangedEventArgs);
                Reorged?.Invoke(this, reorgedEventArgs);
                _transactions = new TransactionSet<T>(Store);
                Store.DeleteChainId(obsoleteId);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }

            if (Render && render)
            {
                _logger.Debug("Rendering actions in new chain.");

                // Render actions that had been behind.
                long startToRenderIndex = topmostCommon is Block<T> branchpoint
                    ? branchpoint.Index + 1
                    : 0;

                int cnt = RenderBlocks(startToRenderIndex, completers);
                _logger.Debug($"{nameof(Swap)}() completed rendering {{Actions}} actions.", cnt);
            }
        }

        internal IImmutableSet<TxId> GetStagedTransactionIds()
        {
            _rwlock.EnterReadLock();

            try
            {
                return Store.IterateStagedTransactionIds().ToImmutableHashSet();
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal void SetStates(
            Block<T> block,
            IReadOnlyList<ActionEvaluation> actionEvaluations,
            bool buildStateReferences
        )
        {
            IImmutableSet<Address> stateUpdatedAddresses = actionEvaluations
                .SelectMany(a => a.OutputStates.StateUpdatedAddresses)
                .ToImmutableHashSet();
            IImmutableSet<(Address, Currency)> updatedFungibleAssets = actionEvaluations
                .SelectMany(a => a.OutputStates.UpdatedFungibleAssets
                    .SelectMany(kv => kv.Value.Select(c => (kv.Key, c))))
                .ToImmutableHashSet();

            if (!StateStore.ContainsBlockStates(block.Hash))
            {
                HashDigest<SHA256> blockHash = block.Hash;
                IAccountStateDelta lastStates = actionEvaluations.Count > 0
                    ? actionEvaluations[actionEvaluations.Count - 1].OutputStates
                    : null;
                ImmutableDictionary<string, IValue> totalDelta =
                    stateUpdatedAddresses.ToImmutableDictionary(
                        ToStateKey,
                        a => lastStates?.GetState(a)
                    ).SetItems(
                        updatedFungibleAssets.Select(pair =>
                            new KeyValuePair<string, IValue>(
                                ToFungibleAssetKey(pair),
                                new Bencodex.Types.Integer(
                                    lastStates?.GetBalance(pair.Item1, pair.Item2) ?? 0
                                )
                            )
                        )
                    );

                StateStore.SetStates(blockHash, totalDelta, blockHash =>
                {
                    if (ContainsBlock(blockHash))
                    {
                        return this[blockHash];
                    }

                    if (block.Hash.Equals(blockHash))
                    {
                        return block;
                    }

                    throw new KeyNotFoundException();
                });
            }

            if (buildStateReferences && StateStore is IBlockStatesStore blockStatesStore)
            {
                IImmutableSet<string> stateUpdatedKeys = stateUpdatedAddresses
                    .Select(ToStateKey)
                    .ToImmutableHashSet();
                IImmutableSet<string> assetUpdatedKeys = updatedFungibleAssets
                    .Select(ToFungibleAssetKey)
                    .ToImmutableHashSet();
                IImmutableSet<string> updatedKeys = stateUpdatedKeys.Union(assetUpdatedKeys);
                blockStatesStore.StoreStateReference(Id, updatedKeys, block.Hash, block.Index);
            }
        }

        internal IEnumerable<Block<T>> IterateBlocks(int offset = 0, int? limit = null)
        {
            _rwlock.EnterUpgradeableReadLock();

            try
            {
                foreach (HashDigest<SHA256> hash in IterateBlockHashes(offset, limit))
                {
                    yield return _blocks[hash];
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        internal IEnumerable<HashDigest<SHA256>>
            IterateBlockHashes(int offset = 0, int? limit = null)
        {
            _rwlock.EnterUpgradeableReadLock();

            try
            {
                IEnumerable<HashDigest<SHA256>> indices = Store.IterateIndexes(Id, offset, limit);

                // NOTE: The reason why this does not simply return indices, but iterates over
                // indices and yields hashes step by step instead, is that we need to ensure
                // the read lock held until the whole iteration completes.
                foreach (HashDigest<SHA256> hash in indices)
                {
                    yield return hash;
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        internal HashDigest<SHA256>? ActionEvaluationsToHash(
            IEnumerable<ActionEvaluation> actionEvaluations)
        {
            ActionEvaluation actionEvaluation;
            var evaluations = actionEvaluations.ToList();
            if (evaluations.Any())
            {
                actionEvaluation = evaluations.Last();
            }
            else
            {
                return null;
            }

            IImmutableSet<Address> updatedAddresses =
                actionEvaluation.OutputStates.UpdatedAddresses;
            var dict = Bencodex.Types.Dictionary.Empty;
            foreach (Address address in updatedAddresses)
            {
                dict.Add(address.ToHex(), actionEvaluation.OutputStates.GetState(address));
            }

            return Hashcash.Hash(new Codec().Encode(dict));
        }

        /// <summary>
        /// Calculates and complements a block's incomplete states on the fly.
        /// </summary>
        /// <param name="blockHash">The hash of a block which has incomplete states.</param>
        internal void ComplementBlockStates(
            HashDigest<SHA256> blockHash
        )
        {
            _logger.Verbose("Recalculates the block {BlockHash}'s states...", blockHash);

            // Prevent recursive trial to recalculate & complement incomplete block states by
            // mistake; if the below code works as intended, these state completers must never
            // be invoked.
            StateCompleterSet<T> stateCompleters = StateCompleterSet<T>.Reject;

            // Calculates and fills the incomplete states
            // on the fly.
            foreach (HashDigest<SHA256> hash in BlockHashes)
            {
                Block<T> block = this[hash];
                if (StateStore.ContainsBlockStates(hash))
                {
                    continue;
                }

                IReadOnlyList<ActionEvaluation> evaluations = EvaluateActions(
                    block,
                    stateCompleters
                );

                _rwlock.EnterWriteLock();

                try
                {
                    SetStates(block, evaluations, buildStateReferences: false);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }
            }
        }

        private IValue GetRawState(
            string key,
            HashDigest<SHA256>? offset,
            Func<BlockChain<T>, HashDigest<SHA256>, IValue> rawStateCompleter
        )
        {
            _rwlock.EnterUpgradeableReadLock();
            try
            {
                if (offset is null && Tip is null)
                {
                    return null;
                }

                offset ??= Tip.Hash;

                if (StateStore is IBlockStatesStore blockStatesStore)
                {
                    var stateRef = blockStatesStore.LookupStateReference(
                        Id,
                        key,
                        this[offset.Value].Index);

                    if (stateRef is null)
                    {
                        return null;
                    }

                    offset = stateRef.Item1;
                }

                return StateStore.ContainsBlockStates(offset.Value)
                    ? StateStore.GetState(key, offset, Id)
                    : rawStateCompleter(this, offset.Value);
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        /// <summary>
        /// Provides data for the <see cref="TipChanged"/> event.
        /// </summary>
        public class TipChangedEventArgs : EventArgs
        {
            /// <summary>
            /// The <see cref="Block{T}.Index"/> of <see cref="Tip"/> <em>before</em> changed.
            /// Can be <c>null</c> if the blockchain was empty before.
            /// </summary>
            public long? PreviousIndex { get; set; }

            /// <summary>
            /// The <see cref="Block{T}.Hash"/> of <see cref="Tip"/> <em>before</em> changed.
            /// Can be <c>null</c> if the blockchain was empty before.
            /// </summary>
            public HashDigest<SHA256>? PreviousHash { get; set; }

            /// <summary>
            /// The <see cref="Block{T}.Index"/> of <see cref="Tip"/> <em>after</em> changed.
            /// </summary>
            public long Index { get; set; }

            /// <summary>
            /// The <see cref="Block{T}.Hash"/> of <see cref="Tip"/> <em>after</em> changed.
            /// </summary>
            public HashDigest<SHA256> Hash { get; set; }
        }

        /// <summary>
        /// Provides data for the <see cref="BlockChain{T}.Reorged"/> event.
        /// </summary>
        public class ReorgedEventArgs : EventArgs
        {
            /// <summary>
            /// The <see cref="BlockChain{T}.Tip"/> before the chain is reorged.
            /// </summary>
            public Block<T> OldTip { get; set; }

            /// <summary>
            /// The <see cref="BlockChain{T}.Tip"/> after the chain is reorged.
            /// </summary>
            public Block<T> NewTip { get; set; }

            /// <summary>
            /// The <see cref="Block{T}"/> point of the chain branches off.
            /// </summary>
            public Block<T> Branchpoint { get; set; }
        }
    }
}
