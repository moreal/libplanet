#nullable enable
using Libplanet.Blocks;

namespace Libplanet.Net
{
    /// <summary>
    /// Indicates a progress of executing block actions.
    /// </summary>
    [Equals]
    public class ActionExecutionState : PreloadState
    {
        /// <summary>
        /// Total number of blocks to execute in the current batch.
        /// </summary>
        public int TotalBlockCount { get; internal set; }

        /// <summary>
        /// The number of currently executed blocks.
        /// </summary>
        public int ExecutedBlockCount { get; internal set; }

        /// <summary>
        /// The hash digest of the block just executed.
        /// </summary>
        public BlockHash ExecutedBlockHash { get; internal set; }

        /// <inheritdoc />
        public override int CurrentPhase => 5;

        public static bool operator ==(ActionExecutionState left, ActionExecutionState right) =>
            Operator.Weave(left, right);

        public static bool operator !=(ActionExecutionState left, ActionExecutionState right) =>
            Operator.Weave(left, right);
    }
}
