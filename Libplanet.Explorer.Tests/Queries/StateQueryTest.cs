using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.Queries;
using Libplanet.Mocks;
using Libplanet.Types.Consensus;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task World()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world(blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                stateRootHash
                legacy
                version
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> states =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["world"]);
        Assert.NotNull(states["stateRootHash"]);
        Assert.True((bool)states["legacy"]);
        Assert.Equal(0, states["version"]);
    }

    [Fact]
    public async Task WorldByBlockHashThenAccountThenStateAndStates()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                account (address: ""0x1000000000000000000000000000000000000000"") {{
                    state (address: ""{ByteUtil.Hex(_address.ByteArray)}"") {{
                        hex
                    }}
                    states (addresses: [
                        ""{ByteUtil.Hex(_address.ByteArray)}"",
                        ""0x0000000000000000000000000000000000000000""
                    ]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["account"]);

        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    [Fact]
    public async Task WorldByBlockHashThenBalance()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                balance (
                    address: ""{ByteUtil.Hex(_address.ByteArray)}""
                    currency: {{
                        ticker: ""ABC""
                        decimalPlaces: 2
                        minters: null
                        totalSupplyTrackable: true }}) {{
                    string
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> world =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["world"]);
        IDictionary<string, object> balance =
            Assert.IsAssignableFrom<IDictionary<string, object>>(world["balance"]);
        Assert.Equal(
            "1.23 ABC",
            Assert.IsAssignableFrom<string>(balance["string"]));
    }

    [Fact]
    public async Task WorldByBlockHashThenTotalSupply()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                totalSupply (currency: {{
                    ticker: ""ABC""
                    decimalPlaces: 2
                    minters: null
                    totalSupplyTrackable: true }}) {{
                    string
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> totalSupply =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["totalSupply"]);
        Assert.Equal(
            "101.23 ABC",
            Assert.IsAssignableFrom<string>(totalSupply["string"]));
    }

    [Fact]
    public async Task WorldByBlockHashThenValidatorSet()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                validatorSet {{
                    hex
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> validatorSet =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["validatorSet"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new ValidatorSet(new List<Validator>
                {
                    new(
                        PublicKey.FromHex(
                            "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                        new BigInteger(1)),
                }).Bencoded)),
            Assert.IsAssignableFrom<string>(validatorSet["hex"]));
    }

    [Fact]
    public async Task WorldByStateRootHashThenAccountThenStateAndStates()
    {
        (var source, _, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (stateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                account (address: ""0x1000000000000000000000000000000000000000"") {{
                    state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {{
                        hex
                    }}
                    states (addresses: [
                        ""0x5003712B63baAB98094aD678EA2B24BcE445D076""
                        ""0x0000000000000000000000000000000000000000""
                    ]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["account"]);

        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    // FIXME: We need proper mocks to test more complex scenarios.
    [Fact]
    public async Task WorldByBlockHashThenAccountsThenStateAndStates()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                accounts (addresses: [""0x1000000000000000000000000000000000000000""]) {{
                    state (address: ""{ByteUtil.Hex(_address.ByteArray)}"") {{
                        hex
                    }}
                    states (addresses: [
                        ""{ByteUtil.Hex(_address.ByteArray)}""
                        ""0x0000000000000000000000000000000000000000""]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] accounts =
            Assert.IsAssignableFrom<object[]>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["accounts"]);

        IDictionary<string,object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(Assert.Single(accounts));
        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(_value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }
}
