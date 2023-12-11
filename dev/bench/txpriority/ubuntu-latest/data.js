window.BENCHMARK_DATA = {
  "lastUpdate": 1702337634802,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "6f5bdd066834ae1fa6cd68631b4f78d5906b8b05",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:14:05+09:00",
          "tree_id": "8ff2cd2db84ebaeec14e71ddbef72ac765e82998",
          "url": "https://github.com/moreal/libplanet/commit/6f5bdd066834ae1fa6cd68631b4f78d5906b8b05"
        },
        "date": 1702337136049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206746.13157894736,
            "unit": "ns",
            "range": "± 7089.009946583486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195736.1888888889,
            "unit": "ns",
            "range": "± 7403.456741225136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168756.98648648648,
            "unit": "ns",
            "range": "± 5687.99237000202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208923.4615384615,
            "unit": "ns",
            "range": "± 31303.622659407392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920272.4,
            "unit": "ns",
            "range": "± 42650.80007924822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15825.663265306122,
            "unit": "ns",
            "range": "± 3620.982732967817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66777.39583333333,
            "unit": "ns",
            "range": "± 9072.734035187277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54767.47727272727,
            "unit": "ns",
            "range": "± 4662.068592663124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92845.82323232324,
            "unit": "ns",
            "range": "± 22445.492787780167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.315789473684,
            "unit": "ns",
            "range": "± 474.17700849612925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13776.418367346938,
            "unit": "ns",
            "range": "± 2744.652066746205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38655.385416666664,
            "unit": "ns",
            "range": "± 4460.884883588366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982678.8139534884,
            "unit": "ns",
            "range": "± 72685.9924104665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1886546.8673469387,
            "unit": "ns",
            "range": "± 74688.94263256495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644409.0204081633,
            "unit": "ns",
            "range": "± 163459.53686843067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13276853.082474226,
            "unit": "ns",
            "range": "± 1104029.6788131201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436255.1470588236,
            "unit": "ns",
            "range": "± 77799.48802818316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552867.085106383,
            "unit": "ns",
            "range": "± 86903.70475737969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3184349.3571428573,
            "unit": "ns",
            "range": "± 54167.8233397156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3242452.095238095,
            "unit": "ns",
            "range": "± 117155.46005156203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14022015.032967033,
            "unit": "ns",
            "range": "± 1021683.3050614012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5553768.307692308,
            "unit": "ns",
            "range": "± 28772.144860914275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14513712.461538462,
            "unit": "ns",
            "range": "± 95746.55012028318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36694375.071428575,
            "unit": "ns",
            "range": "± 440901.5774518101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74326990.23333333,
            "unit": "ns",
            "range": "± 865227.4424293193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148869332.6,
            "unit": "ns",
            "range": "± 1036562.2151945205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754884.968191964,
            "unit": "ns",
            "range": "± 15055.867812788647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199055.7776692708,
            "unit": "ns",
            "range": "± 2267.5618597402677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765834.2067307692,
            "unit": "ns",
            "range": "± 3083.341505029419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924061.5334635417,
            "unit": "ns",
            "range": "± 2236.0945076066455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627018.4051339285,
            "unit": "ns",
            "range": "± 1025.8339843423087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592368.7614583333,
            "unit": "ns",
            "range": "± 2096.2550704084438"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5741cd22fabcd68d385ea4acceab09785dd2bd42",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:20:03+09:00",
          "tree_id": "6e883b31e2df2350856f95e4ee822186a69e5fcc",
          "url": "https://github.com/moreal/libplanet/commit/5741cd22fabcd68d385ea4acceab09785dd2bd42"
        },
        "date": 1702337628682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301307.88764044945,
            "unit": "ns",
            "range": "± 17616.839188322967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285020.0238095238,
            "unit": "ns",
            "range": "± 15196.363310968334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204624.75675675675,
            "unit": "ns",
            "range": "± 10193.502124219161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822112.911764706,
            "unit": "ns",
            "range": "± 74274.45345731164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3405938.5625,
            "unit": "ns",
            "range": "± 63358.13274865219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28044.760869565216,
            "unit": "ns",
            "range": "± 1859.6755203769674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121396.37096774194,
            "unit": "ns",
            "range": "± 7773.197091715092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108137.30769230769,
            "unit": "ns",
            "range": "± 2596.004002604476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113757.3469387755,
            "unit": "ns",
            "range": "± 15038.227143195814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8452.70618556701,
            "unit": "ns",
            "range": "± 1297.9990204328637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23657.09,
            "unit": "ns",
            "range": "± 7197.189852970183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48691.0625,
            "unit": "ns",
            "range": "± 7885.159962750146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362528.4680851065,
            "unit": "ns",
            "range": "± 151430.0811445152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544898.4857142856,
            "unit": "ns",
            "range": "± 123393.21785140554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2072099.034883721,
            "unit": "ns",
            "range": "± 141417.0891986619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15260026.68478261,
            "unit": "ns",
            "range": "± 1025546.4652682792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3036316.6875,
            "unit": "ns",
            "range": "± 56655.75936386197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3239853.5,
            "unit": "ns",
            "range": "± 110237.27459245884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3942617.8378378376,
            "unit": "ns",
            "range": "± 133579.70034912438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4032064.076923077,
            "unit": "ns",
            "range": "± 207469.47451924757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16385694.7,
            "unit": "ns",
            "range": "± 1153460.6000362094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6765634.285714285,
            "unit": "ns",
            "range": "± 93460.74646068804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17334590.64285714,
            "unit": "ns",
            "range": "± 156044.52111477533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42180636.1,
            "unit": "ns",
            "range": "± 311962.96851270203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87007410.85714285,
            "unit": "ns",
            "range": "± 607579.4264778958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 173489296.53846154,
            "unit": "ns",
            "range": "± 1016951.6645734787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4210322.29953125,
            "unit": "ns",
            "range": "± 109110.95167593559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1384307.5629185268,
            "unit": "ns",
            "range": "± 5590.401287292601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872810.222516741,
            "unit": "ns",
            "range": "± 1961.5907897598847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2195810.483203125,
            "unit": "ns",
            "range": "± 114470.67106834157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 692722.5053013393,
            "unit": "ns",
            "range": "± 1803.6042153430324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 666037.1204427084,
            "unit": "ns",
            "range": "± 2388.4742742530048"
          }
        ]
      }
    ]
  }
}