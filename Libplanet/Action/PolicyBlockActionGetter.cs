using Libplanet.Abstractions.Action;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    public delegate IAction? PolicyBlockActionGetter(IPreEvaluationBlockHeader blockHeader);
}
