using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.State;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaV1Test : AccountStateDeltaTest
    {
        public AccountStateDeltaV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        public override IActionContext CreateContext(
            IAccountStateDelta delta, Address signer) =>
            new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                delta,
                0,
                0);

        [Fact]
        public override void TransferAsset()
        {
            base.TransferAsset();

            IAccountStateDelta a = _initDelta.TransferAsset(
                _initContext,
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
            IActionContext c = CreateContext(a, _addr[0]);
            a = a.TransferAsset(c, _addr[1], _addr[1], Value(0, 5));
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
        }

        [Fact]
        public override BlockChain TransferAssetInBlock()
        {
            BlockChain chain = base.TransferAssetInBlock();

            DumbAction action = new DumbAction(_addr[0], "a", _addr[0], _addr[0], 1);
            Transaction tx = Transaction.Create(
                chain.GetNextTxNonce(_addr[0]),
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }
            );
            Block block = chain.EvaluateAndSign(
                TestUtils.ProposeNext(
                    chain.Tip,
                    new[] { tx },
                    miner: _keys[1].PublicKey,
                    protocolVersion: ProtocolVersion,
                    lastCommit: TestUtils.CreateBlockCommit(chain.Tip)),
                _keys[1]);
            chain.Append(
                block,
                TestUtils.CreateBlockCommit(block)
            );
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain.GetBalance(_addr[0], DumbAction.DumbCurrency)
            );

            return chain;
        }

        [Fact]
        public void TotalSupplyTracking()
        {
            IAccountStateDelta delta = _initDelta;
            IActionContext context = _initContext;

            Assert.Empty(delta.GetUpdatedTotalSupplies());
            Assert.Empty(delta.UpdatedTotalSupplyCurrencies);

            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _initDelta.GetTotalSupply(_currencies[3])
            );
            Assert.Equal(
                new FungibleAssetValue(
                    _currencies[3],
                    _totalSupplies[_currencies[3]].Item1,
                    _totalSupplies[_currencies[3]].Item2),
                _initDelta.GetTotalSupply(_currencies[3])
            );

            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initDelta.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[0], Value(0, 5)),
                delta.GetUpdatedTotalSupplies());
            Assert.DoesNotContain(_currencies[0], delta.UpdatedTotalSupplyCurrencies);

            Assert.Equal(Value(4, 0), _initDelta.GetTotalSupply(_currencies[4]));
            Assert.DoesNotContain(_currencies[4], delta.UpdatedTotalSupplyCurrencies);

            delta = delta.MintAsset(context, _addr[0], Value(0, 10));
            Assert.Throws<TotalSupplyNotTrackableException>(() =>
                _initDelta.GetTotalSupply(_currencies[0]));
            Assert.DoesNotContain(_currencies[0], delta.UpdatedTotalSupplyCurrencies);

            delta = delta.MintAsset(context, _addr[0], Value(4, 10));
            Assert.Equal(Value(4, 10), delta.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 10)),
                delta.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], delta.UpdatedTotalSupplyCurrencies);

            delta = delta.BurnAsset(context, _addr[0], Value(4, 5));
            Assert.Equal(Value(4, 5), delta.GetTotalSupply(_currencies[4]));
            Assert.Contains(
                new KeyValuePair<Currency, FungibleAssetValue>(
                    _currencies[4], Value(4, 5)),
                delta.GetUpdatedTotalSupplies());
            Assert.Contains(_currencies[4], delta.UpdatedTotalSupplyCurrencies);
        }

        [Fact]
        public override void MintAsset()
        {
            base.MintAsset();

            Assert.Throws<SupplyOverflowException>(
                () => _initDelta.MintAsset(_initContext, _addr[0], Value(4, 200)));
        }

        [Fact]
        public virtual void TotalUpdatedFungibleAssets()
        {
            IAccountStateDelta delta0 = _initDelta;
            IActionContext context0 = _initContext;

            // currencies[0] (FOO) allows only _addr[0] to burn
            delta0 = delta0.BurnAsset(context0, _addr[0], Value(0, 1));
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);

            // Forcefully create null delta
            delta0 = AccountStateDelta.Flush(delta0);

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to mint and burn
            delta0 = delta0.MintAsset(context0, _addr[0], Value(1, 1));
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                _addr[1], delta0.TotalUpdatedFungibleAssets.Select(pair => pair.Item1));

            // Forcefully create null delta
            delta0 = AccountStateDelta.Flush(delta0);
            context0 = CreateContext(delta0, _addr[1]);
            delta0 = delta0.BurnAsset(context0, _addr[1], Value(1, 1));

            // _addr[0] burned currencies[0] & minted currencies[1]
            // _addr[1] burned currencies[1]
            Assert.Contains(
                (_addr[0], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[0], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                (_addr[1], Value(0, 0).Currency), delta0.TotalUpdatedFungibleAssets);
            Assert.Contains(
                (_addr[1], Value(1, 0).Currency), delta0.TotalUpdatedFungibleAssets);
        }
    }
}
