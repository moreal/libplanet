using GraphQL.Types;
using Libplanet.Action.State;

namespace Libplanet.Explorer.GraphTypes
{
    public class AccountStateType : ObjectGraphType<IAccountState>
    {
        public AccountStateType()
        {
            Name = "AccountState";

            Field<IdGraphType>(
                name: "StateRootHash",
                description: "The state root hash of the account state.",
                resolve: ctx => ctx.Source.Trie.Hash.ToString()
            );
        }
    }
}