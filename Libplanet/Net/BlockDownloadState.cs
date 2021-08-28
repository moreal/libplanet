#nullable enable
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of downloading blocks.
    /// </summary>
    [Equals]
    public class BlockDownloadState : PreloadState
    {
        /// <summary>
        /// Total number of blocks to receive in the current batch.
        /// </summary>
        public long TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of currently received blocks.
        /// </summary>
        public long ReceivedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just received.
        /// </summary>
        public BlockHash ReceivedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 2;

        /// <summary>
        /// The peer which sent the block.
        /// </summary>
        public BoundPeer? SourcePeer { get; internal set; }

        public static bool operator ==(BlockDownloadState left, BlockDownloadState right) =>
            Operator.Weave(left, right);

        public static bool operator !=(BlockDownloadState left, BlockDownloadState right) =>
            Operator.Weave(left, right);
    }
}
