using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// Useful extension methods for <see cref="ITransaction"/>.
    /// </summary>
    public static class TransactionExtensions
    {
        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Validates if <paramref name="transactions"/> has valid nonces.
        /// It assumes all given <paramref name="transactions"/> belong to a block together.
        /// </summary>
        /// <param name="transactions">A list of transactions.  Their order does not matter.</param>
        /// <param name="blockIndex">The index of the block that transactions will belong to.
        /// It's only used for exception messages.</param>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        // FIXME: Needs a unit tests.  See also BlockContentTest.Transactions* tests.
        public static void ValidateTxNonces(
            this IEnumerable<ITransaction> transactions,
            long blockIndex)
        {
            IEnumerable<IGrouping<Address, ITransaction>> signerTxs =
                transactions.OrderBy(tx => tx.Nonce).GroupBy(tx => tx.Signer);
            BlockHash? genesisHash = null;
            foreach (IGrouping<Address, ITransaction> txs in signerTxs)
            {
                long lastNonce = -1L;
                foreach (ITransaction tx in txs)
                {
                    long nonce = tx.Nonce;
                    if (lastNonce >= 0 && lastNonce + 1 != nonce)
                    {
                        Address s = tx.Signer;
                        string msg = nonce <= lastNonce
                            ? $"The signer {s}'s nonce {nonce} was already consumed before."
                            : $"The signer {s}'s nonce {lastNonce} has to be added first.";
                        throw new InvalidTxNonceException(msg, tx.Id, lastNonce + 1, tx.Nonce);
                    }

                    if (genesisHash is { } g && !tx.GenesisHash.Equals(g))
                    {
                        throw new InvalidTxGenesisHashException(
                            $"Transactions in the block #{blockIndex} are inconsistent.",
                            tx.Id,
                            g,
                            tx.GenesisHash
                        );
                    }

                    lastNonce = nonce;
                    genesisHash = tx.GenesisHash;
                }
            }
        }

        /// <inheritdoc cref="UnsignedTx(ITxInvoice, ITxSigningMetadata)" />
        /// <returns>An <see cref="UnsignedTx"/> instance.</returns>
        public static UnsignedTx Combine(
            this ITxInvoice invoice,
            ITxSigningMetadata signingMetadata
        ) =>
            new UnsignedTx(invoice, signingMetadata);

        /// <summary>
        /// Creates a new <see cref="Transaction{T}"/> instance by signing the given
        /// <paramref name="invoice"/> with the given <paramref name="privateKey"/>.
        /// </summary>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It determines the type of
        /// <see cref="Transaction{T}"/> to create.</typeparam>
        /// <param name="invoice">The <see cref="ITxInvoice"/> to sign.</param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign the transaction.</param>
        /// <param name="nonce">The nonce to use for the transaction.</param>
        /// <returns>A <see cref="Transaction{T}"/> instance.</returns>
        public static Transaction<T> Sign<T>(
            this ITxInvoice invoice,
            PrivateKey privateKey,
            long nonce)
            where T : IAction, new()
        =>
            invoice.Combine(new TxSigningMetadata(privateKey.PublicKey, nonce)).Sign<T>(privateKey);

        /// <inheritdoc cref="Transaction{T}(IUnsignedTx, PrivateKey)" />
        /// <typeparam name="T">An <see cref="IAction"/> type.  It determines the type of
        /// <see cref="Transaction{T}"/> to create.</typeparam>
        /// <returns>A <see cref="Transaction{T}"/> instance.</returns>
        public static Transaction<T> Sign<T>(this IUnsignedTx unsignedTx, PrivateKey privateKey)
            where T : IAction, new()
        =>
            new Transaction<T>(unsignedTx, privateKey);

        /// <inheritdoc cref="Transaction{T}(IUnsignedTx, ImmutableArray{byte})" />
        /// <typeparam name="T">An <see cref="IAction"/> type.  It determines the type of
        /// <see cref="Transaction{T}"/> to create.</typeparam>
        /// <returns>A <see cref="Transaction{T}"/> instance.</returns>
        public static Transaction<T> Verify<T>(
            this IUnsignedTx unsignedTx,
            ImmutableArray<byte> signature
        )
            where T : IAction, new()
        =>
            new Transaction<T>(unsignedTx, signature);

        /// <summary>
        /// Encodes this <see cref="ITransaction"/> into a <see cref="byte"/> array.
        /// </summary>
        /// <param name="transaction"><see cref="ITransaction"/> to serialize.</param>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="ITransaction"/>.</returns>
        public static byte[] Serialize(this ITransaction transaction)
        {
            return _codec.Encode(transaction.MarshalTransaction());
        }
    }
}
