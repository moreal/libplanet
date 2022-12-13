using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to load action types branched by block index.
    /// </summary>
    public interface IActionTypeLoader
    {
        /// <summary>
        /// Load action types branched by <paramref name="blockHeader"/>.
        /// </summary>
        /// <param name="blockHeader">A <see cref="BlockHeader"/> to determine what action types to
        /// use.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IDictionary<string, Type> Load(IPreEvaluationBlockHeader blockHeader);

        /// <summary>
        /// Load action types branched by <paramref name="index"/>.
        /// </summary>
        /// <param name="index">A <see cref="BlockHeader.Index"/> to determine what action types to
        /// use.</param>
        /// <returns>A dictionary made of action id to action type pairs.</returns>
        public IDictionary<string, Type> Load(long index);
    }
}
