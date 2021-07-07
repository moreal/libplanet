using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Tx
{
    /// <summary>
    /// Consists of <see cref="IAction"/> and is signed to be included in
    /// a <see cref="Blocks.Block{T}"/> and transmitted over the network.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to
    /// include.
    /// Each game usually defines its own concrete class which implements
    /// <see cref="IAction"/>, and uses it for this type parameter.
    /// This type parameter is aligned with <see cref="Blocks.Block{T}"/>'s
    /// and <see cref="Blockchain.BlockChain{T}"/>'s type parameters.
    /// </typeparam>
    /// <seealso cref="IAction"/>
    /// <seealso cref="PolymorphicAction{T}"/>
    public class UnsignedTransaction<T> : IEquatable<UnsignedTransaction<T>>
        where T : IAction, new()
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        // If a tx is longer than 50 KiB don't cache its bytes representation to _bytes.
        private const int BytesCacheThreshold = 50 * 1024;

        private TxId? _id;
        private byte[] _bytes;
        private int _bytesLength;

        /// <summary>
        /// Creates a new <see cref="UnsignedTransaction{T}"/>.
        /// <para>This constructor takes all required and only required values
        /// for a <see cref="UnsignedTransaction{T}"/>, so gives you full control of
        /// creating a <see cref="UnsignedTransaction{T}"/>, and in other words,
        /// this constructor is only useful when all details of
        /// a <see cref="UnsignedTransaction{T}"/> need to be manually adjusted.
        /// For the most cases, the fa&#xe7;ade factory <see
        /// cref="Create(long, PublicKey, BlockHash?, IEnumerable{T},
        /// IImmutableSet{Address}, DateTimeOffset?)"/> is more useful.</para>
        /// </summary>
        /// <param name="nonce">The number of previous
        /// <see cref="UnsignedTransaction{T}"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="UnsignedTransaction{T}.Nonce"/> property.</param>
        /// <param name="signer">An <see cref="Address"/> of the account
        /// who signs this transaction.  If this is not derived from <paramref
        /// name="publicKey"/> <see cref="InvalidTxPublicKeyException"/> is
        /// thrown.  This goes to the <see cref="Signer"/> property.</param>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the account
        /// who signs this transaction.  If this does not match to <paramref
        /// name="signer"/> address <see cref="InvalidTxPublicKeyException"/>
        /// is thrown.  This cannot be <c>null</c>.  This goes to
        /// the <see cref="PublicKey"/> property.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="UnsignedTransaction{T}"/> is made from.
        /// This can be <c>null</c> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.  This goes to
        /// the <see cref="UpdatedAddresses"/> property.</param>
        /// <param name="timestamp">The time this <see cref="UnsignedTransaction{T}"/>
        /// is created and signed.  This goes to the <see cref="Timestamp"/>
        /// property.</param>
        /// <param name="actions">A list of <see cref="IAction"/>s.  This
        /// can be empty, but cannot be <c>null</c>.  This goes to
        /// the <see cref="Actions"/> property.</param>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="actions"/> or
        /// <paramref name="publicKey"/>.
        /// </exception>
        public UnsignedTransaction(
            long nonce,
            Address signer,
            PublicKey publicKey,
            BlockHash? genesisHash,
            IImmutableSet<Address> updatedAddresses,
            DateTimeOffset timestamp,
            IEnumerable<T> actions)
        {
            Nonce = nonce;
            Signer = signer;
            GenesisHash = genesisHash;
            UpdatedAddresses = updatedAddresses ??
                               throw new ArgumentNullException(nameof(updatedAddresses));
            Timestamp = timestamp;
            Actions = actions?.ToImmutableList() ??
                      throw new ArgumentNullException(nameof(actions));
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
        }

        /// <summary>
        /// Creates a <see cref="UnsignedTransaction{T}"/> instance from its serialization.
        /// </summary>
        /// <param name="dict">The <see cref="Bencodex.Types.Dictionary"/>
        /// representation of <see cref="UnsignedTransaction{T}"/> instance.
        /// </param>
        public UnsignedTransaction(Bencodex.Types.Dictionary dict)
            : this(new RawTransaction(dict))
        {
        }

#pragma warning disable SA1118 // Parameter spans multiple line
        internal UnsignedTransaction(RawTransaction rawTx)
            : this(
                rawTx.Nonce,
                new Address(rawTx.Signer),
                new PublicKey(rawTx.PublicKey.ToArray()),
                rawTx.GenesisHash != ImmutableArray<byte>.Empty
                    ? new BlockHash(rawTx.GenesisHash.ToArray())
                    : (BlockHash?)null,
                rawTx.UpdatedAddresses.Select(
                    a => new Address(a)
                ).ToImmutableHashSet(),
                DateTimeOffset.ParseExact(
                    rawTx.Timestamp,
                    TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                rawTx.Actions.Select(ToAction).ToImmutableList())
#pragma warning restore SA1118 // Parameter spans multiple line
        {
        }

        /// <summary>
        /// A unique identifier derived from this <see cref="UnsignedTransaction{T}"/>'s
        /// content.
        /// <para>For more characteristics, see <see cref="TxId"/> type.</para>
        /// </summary>
        /// <seealso cref="TxId"/>
        public TxId Id
        {
            get
            {
                if (!(_id is { } nonNull))
                {
                    using var hasher = SHA256.Create();
                    byte[] payload = Serialize();
                    _id = nonNull = new TxId(hasher.ComputeHash(payload));
                }

                return nonNull;
            }
        }

        /// <summary>
        /// The number of previous <see cref="UnsignedTransaction{T}"/>s committed by
        /// the <see cref="Signer"/> of this transaction.
        /// </summary>
        public long Nonce { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this transaction.
        /// This is derived from the <see cref="PublicKey"/>.
        /// </summary>
        public Address Signer { get; }

        /// <summary>
        /// <see cref="Address"/>es whose states affected by
        /// <see cref="Actions"/>.
        /// </summary>
        public IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// A list of <see cref="IAction"/>s.  These are executed in the order.
        /// This can be empty, but cannot be <c>null</c>.
        /// </summary>
        public IImmutableList<T> Actions { get; }

        /// <summary>
        /// The time this <see cref="UnsignedTransaction{T}"/> is created and signed.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the account who signs this
        /// <see cref="UnsignedTransaction{T}"/>.
        /// The <see cref="Signer"/> address is always corresponding to this
        /// for each transaction.  This cannot be <c>null</c>.
        /// </summary>
        public PublicKey PublicKey { get; }

        /// <summary>
        /// A <see cref="HashDigest{SHA256}"/> value of the genesis which this
        /// <see cref="UnsignedTransaction{T}"/> is made from.
        /// This can be <c>null</c> iff the transaction is contained
        /// in the genesis block.
        /// </summary>
        public BlockHash? GenesisHash { get; }

        /// <summary>
        /// The bytes length in its serialized format.
        /// </summary>
        public int BytesLength
        {
            get
            {
                // Note that Serialize() by itself caches _byteLength, so that this ByteLength
                // property never invokes Serialize() more than once.
                return _bytesLength > 0 ? _bytesLength : Serialize().Length;
            }
        }

        /// <summary>
        /// Decodes a <see cref="UnsignedTransaction{T}"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="UnsignedTransaction{T}"/>.</param>
        /// <param name="validate">Whether to validate the transaction.</param>
        /// <returns>A decoded <see cref="UnsignedTransaction{T}"/> object.</returns>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Signer"/> is not derived from its
        /// <see cref="PublicKey"/>.</exception>
        /// <seealso cref="Serialize()"/>
        public static UnsignedTransaction<T> Deserialize(byte[] bytes, bool validate = true)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            var tx = new UnsignedTransaction<T>(dict);
            if (validate)
            {
                tx.Validate();
            }

            if (bytes.Length < BytesCacheThreshold)
            {
                tx._bytes = bytes;
            }

            tx._bytesLength = bytes.Length;
            return tx;
        }

        /// <summary>
        /// A fa&#xe7;ade factory to create a new <see cref="UnsignedTransaction{T}"/>.
        /// Unlike the <see cref="UnsignedTransaction(long, Address, PublicKey, BlockHash?,
        /// IImmutableSet{Address}, DateTimeOffset, IEnumerable{T})"/>
        /// constructor, it automatically fills the following values from:
        /// <list type="table">
        /// <listheader>
        /// <term>Property</term>
        /// <description>Parameter the filled value derived from</description>
        /// </listheader>
        /// <item>
        /// <term><see cref="Signer"/></term>
        /// <description><paramref name="publicKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="PublicKey"/></term>
        /// <description><paramref name="publicKey"/></description>
        /// </item>
        /// <item>
        /// <term><see cref="UpdatedAddresses"/></term>
        /// <description><paramref name="actions"/> and
        /// <paramref name="updatedAddresses"/></description>
        /// </item>
        /// </list>
        /// </summary>
        /// <remarks>
        /// This factory method tries its best to fill the <see
        /// cref="UpdatedAddresses"/> property by actually evaluating
        /// the given <paramref name="actions"/> (we call it &#x201c;rehearsal
        /// mode&#x201d;), but remember that its result
        /// is approximated in some degree, because the result of
        /// <paramref name="actions"/> are not deterministic until
        /// the <see cref="UnsignedTransaction{T}"/> belongs to a <see
        /// cref="Libplanet.Blocks.Block{T}"/>.
        /// <para>If an <see cref="IAction"/> depends on previous states or
        /// some randomness to determine what <see cref="Address"/> to update,
        /// the automatically filled <see cref="UpdatedAddresses"/> became
        /// mismatched from the <see cref="Address"/>es
        /// <paramref name="actions"/> actually update after
        /// a <see cref="Libplanet.Blocks.Block{T}"/> is mined.
        /// Although such case would be rare, a programmer could manually give
        /// the <paramref name="updatedAddresses"/> parameter
        /// the <see cref="Address"/>es they predict to be updated.</para>
        /// <para>If an <see cref="IAction"/> oversimplifies the assumption
        /// about the <see cref="Libplanet.Blocks.Block{T}"/> it belongs to,
        /// runtime exceptions could be thrown from this factory method.
        /// The best solution to that is not to oversimplify things,
        /// there is an option to check <see cref="IActionContext"/>'s
        /// <see cref="IActionContext.Rehearsal"/> is <c>true</c> and
        /// a conditional logic for the case.</para>
        /// </remarks>
        /// <param name="nonce">The number of previous
        /// <see cref="UnsignedTransaction{T}"/>s committed by the <see cref="Signer"/>
        /// of this transaction.  This goes to the
        /// <see cref="UnsignedTransaction{T}.Nonce"/> property.</param>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the account
        /// who creates a new transaction.  This key is used to fill
        /// the <see cref="Signer"/> and <see cref="PublicKey"/> properties,
        /// but this in itself is not included in the transaction.</param>
        /// <param name="genesisHash">A <see cref="HashDigest{SHA256}"/> value
        /// of the genesis which this <see cref="UnsignedTransaction{T}"/> is made from.
        /// This can be <c>null</c> iff the transaction is contained
        /// in the genesis block.
        /// </param>
        /// <param name="actions">A list of <see cref="IAction"/>s.  This
        /// can be empty, but cannot be <c>null</c>.  This goes to
        /// the <see cref="Actions"/> property, and <see cref="IAction"/>s
        /// are evaluated before a <see cref="UnsignedTransaction{T}"/> is created
        /// in order to fill the <see cref="UpdatedAddresses"/>.  See also
        /// <em>Remarks</em> section.</param>
        /// <param name="updatedAddresses"><see cref="Address"/>es whose
        /// states affected by <paramref name="actions"/>.
        /// These <see cref="Address"/>es are also included in
        /// the <see cref="UpdatedAddresses"/> property, besides
        /// <see cref="Address"/>es projected by evaluating
        /// <paramref name="actions"/>.  See also <em>Remarks</em> section.
        /// </param>
        /// <param name="timestamp">The time this <see cref="UnsignedTransaction{T}"/>
        /// is created.  This goes to the <see cref="Timestamp"/>
        /// property.  If <c>null</c> (which is default) is passed this will
        /// be the current time.</param>
        /// <returns>A created new <see cref="UnsignedTransaction{T}"/> unsigned.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <c>null</c>
        /// is passed to <paramref name="actions"/>.
        /// </exception>
        public static UnsignedTransaction<T> Create(
            long nonce,
            PublicKey publicKey,
            BlockHash? genesisHash,
            IEnumerable<T> actions,
            IImmutableSet<Address> updatedAddresses = null,
            DateTimeOffset? timestamp = null
        )
        {
            var signer = new Address(publicKey);

            if (ReferenceEquals(updatedAddresses, null))
            {
                updatedAddresses = ImmutableHashSet<Address>.Empty;
            }

            DateTimeOffset ts = timestamp ?? DateTimeOffset.UtcNow;

            ImmutableArray<T> actionsArray = actions.ToImmutableArray();
            if (!actionsArray.IsEmpty)
            {
                var evalUpdatedAddresses = ActionEvaluator<T>.GetUpdatedAddresses(
                    new UnsignedTransaction<T>(
                        nonce,
                        signer,
                        publicKey,
                        genesisHash,
                        updatedAddresses,
                        ts,
                        actionsArray));
                if (!updatedAddresses.IsSupersetOf(evalUpdatedAddresses))
                {
                    updatedAddresses = updatedAddresses.Union(evalUpdatedAddresses);
                }
            }

            return new UnsignedTransaction<T>(
                nonce,
                signer,
                publicKey,
                genesisHash,
                updatedAddresses,
                ts,
                actionsArray);
        }

        /// <summary>
        /// Encodes this <see cref="UnsignedTransaction{T}"/> into a <see cref="byte"/> array.
        /// </summary>
        /// <returns>A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="UnsignedTransaction{T}"/>.</returns>
        public byte[] Serialize()
        {
            Codec codec = new Codec();
            byte[] serialized = codec.Encode(ToBencodex());

            if (_bytes is { })
            {
                return _bytes;
            }

            if (serialized.Length < BytesCacheThreshold)
            {
                _bytes = serialized;
            }

            _bytesLength = serialized.Length;

            return serialized;
        }

        /// <summary>
        /// Encodes this <see cref="UnsignedTransaction{T}"/> into a <see cref="IValue"/>.
        /// </summary>
        /// <returns>A <see cref="Bencodex.Types.Dictionary"/> typed
        /// <a href="https://bencodex.org/">Bencodex</a>
        /// representation of this <see cref="UnsignedTransaction{T}"/>.</returns>
        public Bencodex.Types.Dictionary ToBencodex() =>
            ToRawTransaction().ToBencodex();

        /// <summary>
        /// Validates this <see cref="UnsignedTransaction{T}"/> and throws an appropriate exception
        /// if not valid.
        /// </summary>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Signer"/> is not derived from its
        /// <see cref="UnsignedTransaction{T}.PublicKey"/>.</exception>
        public void Validate()
        {
            if (!new Address(PublicKey).Equals(Signer))
            {
                string message =
                    $"The public key ({ByteUtil.Hex(PublicKey.Format(true))} " +
                    $"is not matched to the address ({Signer}).";
                throw new InvalidTxPublicKeyException(Id, message);
            }
        }

        /// <inheritdoc />
        public virtual bool Equals(UnsignedTransaction<T> other)
        {
            return Id.Equals(other.Id);
        }

        /// <inheritdoc />
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }

            return obj is UnsignedTransaction<T> other && Equals(other);
        }

        /// <inheritdoc />
        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        internal RawTransaction ToRawTransaction()
        {
            ImmutableArray<byte> genesisHash =
                GenesisHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty;
            var rawTx = new RawTransaction(
                nonce: Nonce,
                signer: Signer.ByteArray,
                genesisHash: genesisHash,
                updatedAddresses: UpdatedAddresses.Select(a =>
                    a.ByteArray).ToImmutableArray(),
                publicKey: PublicKey.Format(false).ToImmutableArray(),
                timestamp: Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                actions: Actions.Select(a => a.PlainValue).ToImmutableArray()
            );

            return rawTx;
        }

        private static T ToAction(IValue value)
        {
            var action = new T();
            action.LoadPlainValue(value);
            return action;
        }
    }
}
