window.BENCHMARK_DATA = {
  "lastUpdate": 1681889639601,
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
          "id": "6d62e2c44ac4112e3090cbb9addbc49cc3b7834e",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T15:00:22+09:00",
          "tree_id": "9c0608e088bb72c8b7296be5f4fa365727e82700",
          "url": "https://github.com/moreal/libplanet/commit/6d62e2c44ac4112e3090cbb9addbc49cc3b7834e"
        },
        "date": 1681885055172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383927,
            "unit": "ns",
            "range": "± 151753.75578531655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2432295.4545454546,
            "unit": "ns",
            "range": "± 90164.26083735575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132690.217391304,
            "unit": "ns",
            "range": "± 134938.92884795528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5497417,
            "unit": "ns",
            "range": "± 358659.38346074877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49739.784946236556,
            "unit": "ns",
            "range": "± 3565.0519779412884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6799507.692307692,
            "unit": "ns",
            "range": "± 49268.18550103203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19138246.666666668,
            "unit": "ns",
            "range": "± 321839.70248438604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48162961.11111111,
            "unit": "ns",
            "range": "± 1026161.3777104336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96120833.33333333,
            "unit": "ns",
            "range": "± 2049883.4064404736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193764046.15384614,
            "unit": "ns",
            "range": "± 5234358.26028221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4829797.03125,
            "unit": "ns",
            "range": "± 19304.701441176963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533543.75,
            "unit": "ns",
            "range": "± 9154.969818179772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153511.328125,
            "unit": "ns",
            "range": "± 3738.2649825574435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590131.2890625,
            "unit": "ns",
            "range": "± 13232.996936469812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838066.845703125,
            "unit": "ns",
            "range": "± 2894.6584184816406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754534.7916666666,
            "unit": "ns",
            "range": "± 2769.560652350864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2934884.210526316,
            "unit": "ns",
            "range": "± 60682.710911006376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3171765.6716417912,
            "unit": "ns",
            "range": "± 149966.21291420926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3888012.5,
            "unit": "ns",
            "range": "± 98612.32973663566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128708.1967213117,
            "unit": "ns",
            "range": "± 177833.22926746277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6752885.714285715,
            "unit": "ns",
            "range": "± 221594.48939694426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311594.28571428574,
            "unit": "ns",
            "range": "± 15139.820665128656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262140.9090909091,
            "unit": "ns",
            "range": "± 14444.078740380337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223495.91836734695,
            "unit": "ns",
            "range": "± 15359.223820375868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5351735.294117647,
            "unit": "ns",
            "range": "± 105802.71110170377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649856.25,
            "unit": "ns",
            "range": "± 71645.94400010839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23283.505154639177,
            "unit": "ns",
            "range": "± 2243.4943174827335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95383.33333333333,
            "unit": "ns",
            "range": "± 6411.152563539761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88192.70833333333,
            "unit": "ns",
            "range": "± 8632.024154783854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117235.05154639175,
            "unit": "ns",
            "range": "± 19259.26747285746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6698.969072164949,
            "unit": "ns",
            "range": "± 1247.0377270890824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18828.42105263158,
            "unit": "ns",
            "range": "± 2226.85080364171"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "4077a2a6d68026318d1e9054a4eac4da82767914",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T16:17:58+09:00",
          "tree_id": "ce1dd1a1ae96561528196536bc85094c31f74aee",
          "url": "https://github.com/moreal/libplanet/commit/4077a2a6d68026318d1e9054a4eac4da82767914"
        },
        "date": 1681889624846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385374.4897959183,
            "unit": "ns",
            "range": "± 134193.78994590728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483330.612244898,
            "unit": "ns",
            "range": "± 99084.91981645853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198236.0824742266,
            "unit": "ns",
            "range": "± 174701.6839414925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5546918,
            "unit": "ns",
            "range": "± 352125.2197440535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49464.89361702128,
            "unit": "ns",
            "range": "± 3292.4141368874034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6741071.428571428,
            "unit": "ns",
            "range": "± 75086.95911122936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19408306.666666668,
            "unit": "ns",
            "range": "± 220529.5719291136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48501552.631578945,
            "unit": "ns",
            "range": "± 1058463.0688820155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96285353.33333333,
            "unit": "ns",
            "range": "± 1700596.0366323108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193550166.66666666,
            "unit": "ns",
            "range": "± 4886490.317517104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4756790.729166667,
            "unit": "ns",
            "range": "± 27967.231354774114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544382.8255208333,
            "unit": "ns",
            "range": "± 5176.850723647682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169710.4166666667,
            "unit": "ns",
            "range": "± 4713.096948388264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619458.8727678573,
            "unit": "ns",
            "range": "± 9543.015674856404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838433.22265625,
            "unit": "ns",
            "range": "± 4166.779588418949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780481.58203125,
            "unit": "ns",
            "range": "± 2786.423297634995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3039519.0476190476,
            "unit": "ns",
            "range": "± 63605.00466981839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3205040.350877193,
            "unit": "ns",
            "range": "± 135328.3280708297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3887576.923076923,
            "unit": "ns",
            "range": "± 135587.67693876836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4086747.0588235296,
            "unit": "ns",
            "range": "± 122553.24689464853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6777383.333333333,
            "unit": "ns",
            "range": "± 191580.53511978092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314328.5714285714,
            "unit": "ns",
            "range": "± 8002.816964361947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253687.5,
            "unit": "ns",
            "range": "± 9907.758082067101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212760,
            "unit": "ns",
            "range": "± 4827.9776740424795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5203321.428571428,
            "unit": "ns",
            "range": "± 65760.66369882447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3544992.8571428573,
            "unit": "ns",
            "range": "± 57084.31637345038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20772.63157894737,
            "unit": "ns",
            "range": "± 3062.728657734318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89289.898989899,
            "unit": "ns",
            "range": "± 6948.7995578959735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80262.76595744681,
            "unit": "ns",
            "range": "± 7453.396195551455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108113.18681318681,
            "unit": "ns",
            "range": "± 12750.112930142215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6756.25,
            "unit": "ns",
            "range": "± 1036.2698794994935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19755.670103092783,
            "unit": "ns",
            "range": "± 2214.9101313674923"
          }
        ]
      }
    ]
  }
}