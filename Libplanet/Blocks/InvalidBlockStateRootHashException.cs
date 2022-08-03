using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The exception that is thrown when the state root hash in the block has
    /// mismatches to the state root hash of the trie on the block executed in local.
    /// </summary>
    [Serializable]
    public class InvalidBlockStateRootHashException : InvalidBlockException
    {
        /// <summary>
        /// Initializes a new instance of the
        /// <see cref="InvalidBlockStateRootHashException"/> class.
        /// </summary>
        /// <param name="expectedStateRootHash">The hash recorded as
        /// <see cref="Block{T}.StateRootHash"/>>.</param>
        /// <param name="actualStateRootHash">The hash of state trie on the block executed.</param>
        /// <param name="evaluations">The <see cref="ActionEvaluation"/>s of the executed block.
        /// </param>
        /// <param name="message">The message that describes the error.</param>
        public InvalidBlockStateRootHashException(
            HashDigest<SHA256> expectedStateRootHash,
            HashDigest<SHA256> actualStateRootHash,
            IEnumerable<ActionEvaluation> evaluations,
            string message)
            : base(message)
        {
            ActualStateRootHash = actualStateRootHash;
            ExpectedStateRootHash = expectedStateRootHash;
            Evaluations = evaluations.ToImmutableList();
        }

        private InvalidBlockStateRootHashException(
            SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ActualStateRootHash =
                info.GetValue<HashDigest<SHA256>>(nameof(ActualStateRootHash));
            ExpectedStateRootHash =
                info.GetValue<HashDigest<SHA256>>(nameof(ExpectedStateRootHash));
            Evaluations =
                info.GetValue<ImmutableList<ActionEvaluation>>(nameof(Evaluations));
        }

        /// <summary>
        /// The hash of state trie on the block executed.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> ActualStateRootHash { get; }

        /// <summary>
        /// The hash recorded as <see cref="Block{T}.StateRootHash"/>>.
        /// </summary>
        [Pure]
        public HashDigest<SHA256> ExpectedStateRootHash { get; }

        /// <summary>
        /// The <see cref="ActionEvaluation"/>s of the executed block.
        /// </summary>
        public ImmutableList<ActionEvaluation>? Evaluations { get; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(ActualStateRootHash), ActualStateRootHash);
            info.AddValue(nameof(ExpectedStateRootHash), ExpectedStateRootHash);
            info.AddValue(nameof(Evaluations), Evaluations);
        }
    }
}
