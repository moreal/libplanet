#nullable enable
using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.Blocks
{
    /// <summary>
    /// Block header containing information about <see cref="Block{T}"/>s except transactions.
    /// </summary>
    public readonly struct BlockHeader : IBlockExcerpt
    {
        internal const int CurrentProtocolVersion = 1;

        internal const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        internal static readonly byte[] ProtocolVersionKey = { 0x00 };

        internal static readonly byte[] IndexKey = { 0x69 }; // 'i'

        internal static readonly byte[] TimestampKey = { 0x74 }; // 't'

        internal static readonly byte[] DifficultyKey = { 0x64 }; // 'd'

        internal static readonly byte[] TotalDifficultyKey = { 0x54 }; // 'T'

        internal static readonly byte[] NonceKey = { 0x6e }; // 'n'

        internal static readonly byte[] MinerKey = { 0x6d }; // 'm'

        internal static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'

        internal static readonly byte[] TxHashKey = { 0x78 }; // 'x'

        internal static readonly byte[] HashKey = { 0x68 }; // 'h'

        internal static readonly byte[] StateRootHashKey = { 0x73 }; // 's'

        internal static readonly byte[] PreEvaluationHashKey = { 0x63 }; // 'c'

        private static readonly TimeSpan TimestampThreshold =
            TimeSpan.FromSeconds(15);

        private static readonly Codec Codec = new Codec();

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance by manually filling in all the properties.
        /// </summary>
        /// <param name="protocolVersion">The protocol version.  Goes to
        /// <see cref="ProtocolVersion"/>.</param>
        /// <param name="index">The height of the block.  Goes to <see cref="Index"/>.
        /// </param>
        /// <param name="timestamp">The time the block is created.
        /// Goes to <see cref="Timestamp"/>.</param>
        /// <param name="nonce">The nonce which satisfies given <paramref name="difficulty"/>.
        /// Goes to <see cref="Nonce"/>.</param>
        /// <param name="miner">The miner of the block.  Goes to <see cref="Miner"/>.</param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/>
        /// has to satisfy.  Goes to <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty since the genesis,
        /// including the block's difficulty.  See also <see cref="Difficulty"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., its <see cref="Block{T}.Index"/> is 0) this should be empty.
        /// Goes to <see cref="PreviousHash"/>.</param>
        /// <param name="txHash">The result of hashing the transactions the block has.
        /// Goes to <see cref="TxHash"/>.</param>
        /// <param name="hash">The hash of the <see cref="Block{T}"/>.
        /// Goes to <see cref="Hash"/>.</param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>excluding</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Used for checking <paramref name="nonce"/>.  See also <see cref="Validate"/>.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the states on the block.
        /// </param>
        /// <remarks>
        /// This is only exposed for testing. Should not be used as an entry point to create
        /// a <see cref="BlockHeader"/> instance under normal circumstances.
        /// </remarks>
        public BlockHeader(
            int protocolVersion,
            long index,
            string timestamp,
            ImmutableArray<byte> nonce,
            ImmutableArray<byte> miner,
            long difficulty,
            BigInteger totalDifficulty,
            ImmutableArray<byte> previousHash,
            ImmutableArray<byte> txHash,
            ImmutableArray<byte> hash,
            ImmutableArray<byte> preEvaluationHash,
            ImmutableArray<byte> stateRootHash)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            PreviousHash = previousHash;
            TxHash = txHash;
            Hash = hash;
            PreEvaluationHash = preEvaluationHash;
            StateRootHash = stateRootHash;
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance from its serialization.
        /// </summary>
        /// <param name="dict">The <see cref="Bencodex.Types.Dictionary"/>
        /// representation of <see cref="BlockHeader"/> instance.
        /// </param>
        public BlockHeader(Bencodex.Types.Dictionary dict)
        {
            ProtocolVersion = dict.ContainsKey(ProtocolVersionKey)
                ? (int)dict.GetValue<Integer>(ProtocolVersionKey)
                : 0;
            Index = dict.GetValue<Integer>(IndexKey);
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Difficulty = dict.GetValue<Integer>(DifficultyKey);
            TotalDifficulty = dict.GetValue<Integer>(TotalDifficultyKey);
            Nonce = dict.GetValue<Binary>(NonceKey).ToImmutableArray();
            Miner = dict.GetValue<Binary>(MinerKey).ToImmutableArray();

            PreviousHash = dict.ContainsKey((IKey)(Binary)PreviousHashKey)
                ? dict.GetValue<Binary>(PreviousHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            TxHash = dict.ContainsKey((IKey)(Binary)TxHashKey)
                ? dict.GetValue<Binary>(TxHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            PreEvaluationHash = dict.ContainsKey((IKey)(Binary)PreEvaluationHashKey)
                ? dict.GetValue<Binary>(PreEvaluationHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            StateRootHash = dict.ContainsKey((IKey)(Binary)StateRootHashKey)
                ? dict.GetValue<Binary>(StateRootHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            Hash = dict.ContainsKey((IKey)(Binary)HashKey)
                ? dict.GetValue<Binary>(HashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance for a <see cref="Block{T}"/> instance with
        /// missing <see cref="Block{T}.StateRootHash"/>.
        /// </summary>
        /// <param name="protocolVersion">The protocol version.  Goes to
        /// <see cref="ProtocolVersion"/>.</param>
        /// <param name="index">The height of the block.  Goes to <see cref="Index"/>.
        /// </param>
        /// <param name="timestamp">The time the block is created.
        /// Goes to <see cref="Timestamp"/>.</param>
        /// <param name="nonce">The nonce which satisfies given <paramref name="difficulty"/>.
        /// Goes to <see cref="Nonce"/>.</param>
        /// <param name="miner">The miner of the block.  Goes to <see cref="Miner"/>.</param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/>
        /// has to satisfy.  Goes to <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty since the genesis
        /// including the block's difficulty.  See also <see cref="Difficulty"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., its <see cref="Block{T}.Index"/> is 0) this should be empty.
        /// Goes to <see cref="PreviousHash"/>.</param>
        /// <param name="txHash">The result of hashing the transactions the block has.
        /// Goes to <see cref="TxHash"/>.</param>
        /// <param name="hashAlgorithm">The proof-of-work hash algorithm.</param>
        internal BlockHeader(
            int protocolVersion,
            long index,
            string timestamp,
            ImmutableArray<byte> nonce,
            ImmutableArray<byte> miner,
            long difficulty,
            BigInteger totalDifficulty,
            ImmutableArray<byte> previousHash,
            ImmutableArray<byte> txHash,
            HashAlgorithmType hashAlgorithm)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            PreviousHash = previousHash;
            TxHash = txHash;

            byte[] serialized = SerializeForPreEvaluationHash();
            PreEvaluationHash = hashAlgorithm.Digest(serialized).ToImmutableArray();
            StateRootHash = ImmutableArray<byte>.Empty;
            Hash = BlockHash.DeriveFrom(serialized).ByteArray;
        }

        /// <summary>
        /// Creates a <see cref="BlockHeader"/> instance for a <see cref="Block{T}"/>.
        /// </summary>
        /// <param name="protocolVersion">The protocol version.  Goes to
        /// <see cref="ProtocolVersion"/>.</param>
        /// <param name="index">The height of the block.  Goes to <see cref="Index"/>.
        /// </param>
        /// <param name="timestamp">The time the block is created.
        /// Goes to <see cref="Timestamp"/>.</param>
        /// <param name="nonce">The nonce which satisfies given <paramref name="difficulty"/>.
        /// Goes to <see cref="Nonce"/>.</param>
        /// <param name="miner">The miner of the block.  Goes to <see cref="Miner"/>.</param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/>
        /// has to satisfy.  Goes to <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty since the genesis
        /// including the block's difficulty.  See also <see cref="Difficulty"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., its <see cref="Block{T}.Index"/> is 0) this should be empty.
        /// Goes to <see cref="PreviousHash"/>.</param>
        /// <param name="txHash">The result of hashing the transactions the block has.
        /// Goes to <see cref="TxHash"/>.</param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>excluding</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Used for checking <paramref name="nonce"/>.  See also <see cref="Validate"/>.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the states on the block.
        /// </param>
        internal BlockHeader(
            int protocolVersion,
            long index,
            string timestamp,
            ImmutableArray<byte> nonce,
            ImmutableArray<byte> miner,
            long difficulty,
            BigInteger totalDifficulty,
            ImmutableArray<byte> previousHash,
            ImmutableArray<byte> txHash,
            ImmutableArray<byte> preEvaluationHash,
            ImmutableArray<byte> stateRootHash)
        {
            // FIXME: Basic sanity check, such as whether stateRootHash is empty or not,
            // to prevent improper usage should be present. For the same reason as
            // a comment in Block<T>(), should be added in on furter refactoring.
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            PreviousHash = previousHash;
            TxHash = txHash;

            PreEvaluationHash = preEvaluationHash;
            StateRootHash = stateRootHash;
            Hash = BlockHash.DeriveFrom(SerializeForHash()).ByteArray;
        }

        /// <summary>
        /// The protocol version number.
        /// </summary>
        public int ProtocolVersion { get; }

        public long Index { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Nonce { get; }

        public ImmutableArray<byte> Miner { get; }

        public long Difficulty { get; }

        public BigInteger TotalDifficulty { get; }

        public ImmutableArray<byte> PreviousHash { get; }

        public ImmutableArray<byte> TxHash { get; }

        public ImmutableArray<byte> Hash { get; }

        public ImmutableArray<byte> PreEvaluationHash { get; }

        public ImmutableArray<byte> StateRootHash { get; }

        BlockHash IBlockExcerpt.Hash => new BlockHash(Hash);

        /// <summary>
        /// Gets <see cref="BlockHeader"/> instance from serialized <paramref name="bytes"/>.
        /// </summary>
        /// <param name="bytes">Serialized <see cref="BlockHeader"/>.</param>
        /// <returns>Deserialized <see cref="BlockHeader"/>.</returns>
        /// <exception cref="DecodingException">Thrown when decoded value is not
        /// <see cref="Bencodex.Types.Dictionary"/> type.</exception>
        public static BlockHeader Deserialize(byte[] bytes)
        {
            IValue value = Codec.Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            return new BlockHeader(dict);
        }

        /// <summary>
        /// Gets serialized byte array of the <see cref="BlockHeader"/>.
        /// </summary>
        /// <returns>Serialized byte array of <see cref="BlockHeader"/>.</returns>
        public byte[] Serialize()
        {
            return new Codec().Encode(ToBencodex());
        }

        /// <summary>
        /// Gets <see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockHeader"/>.
        /// </summary>
        /// <returns><see cref="Bencodex.Types.Dictionary"/> representation of
        /// <see cref="BlockHeader"/>.</returns>
        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(IndexKey, Index)
                .Add(TimestampKey, Timestamp)
                .Add(DifficultyKey, Difficulty)
                .Add(TotalDifficultyKey, (IValue)(Bencodex.Types.Integer)TotalDifficulty)
                .Add(NonceKey, Nonce.ToArray())
                .Add(MinerKey, Miner.ToArray())
                .Add(HashKey, Hash.ToArray());

            if (ProtocolVersion != 0)
            {
                dict = dict.Add(ProtocolVersionKey, ProtocolVersion);
            }

            if (PreviousHash.Any())
            {
                dict = dict.Add(PreviousHashKey, PreviousHash.ToArray());
            }

            if (TxHash.Any())
            {
                dict = dict.Add(TxHashKey, TxHash.ToArray());
            }

            if (PreEvaluationHash.Any())
            {
                dict = dict.Add(PreEvaluationHashKey, PreEvaluationHash.ToArray());
            }

            if (StateRootHash.Any())
            {
                dict = dict.Add(StateRootHashKey, StateRootHash.ToArray());
            }

            return dict;
        }

        internal void Validate(HashAlgorithmType hashAlgorithm, DateTimeOffset currentTime)
        {
            if (ProtocolVersion < 0)
            {
                throw new InvalidBlockProtocolVersionException(
                    ProtocolVersion,
                    $"A block's protocol version cannot be less than zero: {ProtocolVersion}."
                );
            }
            else if (ProtocolVersion > CurrentProtocolVersion)
            {
                string message =
                    $"Unknown protocol version: {ProtocolVersion}; " +
                    $"the highest known version is {CurrentProtocolVersion}.";
                throw new InvalidBlockProtocolVersionException(ProtocolVersion, message);
            }

            BlockHash hash = new BlockHash(Hash);
            DateTimeOffset ts = DateTimeOffset.ParseExact(
                Timestamp,
                TimestampFormat,
                CultureInfo.InvariantCulture);

            if (currentTime + TimestampThreshold < ts)
            {
                throw new InvalidBlockTimestampException(
                    $"The block #{Index} {hash}'s timestamp ({Timestamp}) is " +
                    $"later than now ({currentTime}, threshold: {TimestampThreshold})."
                );
            }

            if (Index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"Block #{Index} {hash}'s index must be 0 or more."
                );
            }

            if (Difficulty > TotalDifficulty)
            {
                var msg = $"Block #{Index} {hash}'s difficulty ({Difficulty}) " +
                          $"must be less than its TotalDifficulty ({TotalDifficulty}).";
                throw new InvalidBlockTotalDifficultyException(
                    Difficulty,
                    TotalDifficulty,
                    msg
                );
            }

            if (Index == 0)
            {
                if (Difficulty != 0)
                {
                    throw new InvalidBlockDifficultyException(
                        $"Difficulty must be 0 for the genesis block {hash}, " +
                        $"but its difficulty is {Difficulty}."
                    );
                }

                if (TotalDifficulty != 0)
                {
                    var msg = "Total difficulty must be 0 for the genesis block " +
                              $"{hash}, but its total difficulty is " +
                              $"{TotalDifficulty}.";
                    throw new InvalidBlockTotalDifficultyException(
                        Difficulty,
                        TotalDifficulty,
                        msg
                    );
                }

                if (!PreviousHash.IsEmpty)
                {
                    throw new InvalidBlockPreviousHashException(
                        $"Previous hash must be empty for the genesis block " +
                        $"{hash}, but its value is {ByteUtil.Hex(PreviousHash)}."
                    );
                }
            }
            else
            {
                if (Difficulty < 1)
                {
                    throw new InvalidBlockDifficultyException(
                        $"Block #{Index} {hash}'s difficulty must be more than 0 " +
                        $"(except of the genesis block), but its difficulty is {Difficulty}."
                    );
                }

                if (PreviousHash.IsEmpty)
                {
                    throw new InvalidBlockPreviousHashException(
                        $"Block #{Index} {hash}'s previous hash " +
                        "must be present since it's not the genesis block."
                    );
                }
            }

            if (!ByteUtil.Satisfies(PreEvaluationHash, Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"Block #{Index} {hash}'s pre-evaluation hash " +
                    $"({ByteUtil.Hex(PreEvaluationHash)}) with nonce " +
                    $"({ByteUtil.Hex(Nonce)}) does not satisfy its difficulty level {Difficulty}."
                );
            }

            // PreEvaluationHash comparison between the actual and the expected was not
            // implemented in ProtocolVersion == 0.
            if (ProtocolVersion > 0)
            {
                byte[] expectedPreEvaluationHash =
                    hashAlgorithm.Digest(SerializeForPreEvaluationHash());
                if (!ByteUtil.TimingSafelyCompare(expectedPreEvaluationHash, PreEvaluationHash))
                {
                    string message =
                        $"The expected pre-evaluation hash of block #{Index} " +
                        $"{ByteUtil.Hex(Hash)} is {ByteUtil.Hex(expectedPreEvaluationHash)}, " +
                        $"but its pre-evaluation hash is {ByteUtil.Hex(PreEvaluationHash)}.";
                    throw new InvalidBlockPreEvaluationHashException(
                        PreEvaluationHash,
                        expectedPreEvaluationHash.ToImmutableArray(),
                        message);
                }
            }

            BlockHash expectedHash = BlockHash.DeriveFrom(SerializeForHash());
            if (!hash.Equals(expectedHash))
            {
                throw new InvalidBlockHashException(
                    $"The expected hash {expectedHash} of block #{Index} {hash} does not match " +
                    "the hash provided by the block.");
            }
        }

        internal Bencodex.Types.Dictionary ToBencodexForPreEvaluationHash()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("index", Index)
                .Add("timestamp", Timestamp)
                .Add("difficulty", Difficulty)
                .Add("nonce", Nonce.ToArray())
                .Add("reward_beneficiary", Miner.ToArray());

            if (ProtocolVersion != 0)
            {
                dict = dict.Add("protocol_version", ProtocolVersion);
            }

            if (!PreviousHash.IsEmpty)
            {
                dict = dict.Add("previous_hash", PreviousHash.ToArray());
            }

            if (!TxHash.IsEmpty)
            {
                dict = dict.Add("transaction_fingerprint", TxHash.ToArray());
            }

            return dict;
        }

        internal Bencodex.Types.Dictionary ToBencodexForHash()
        {
            var dict = ToBencodexForPreEvaluationHash();

            if (!StateRootHash.IsEmpty)
            {
                dict = dict.Add("state_root_hash", StateRootHash.ToArray());
            }

            return dict;
        }

        internal byte[] SerializeForPreEvaluationHash()
            => new Codec().Encode(ToBencodexForPreEvaluationHash());

        internal byte[] SerializeForHash()
            => new Codec().Encode(ToBencodexForHash());
    }
}
