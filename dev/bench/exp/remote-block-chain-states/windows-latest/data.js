window.BENCHMARK_DATA = {
  "lastUpdate": 1681359639480,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "8687b2d8e45747fa25468021146cbe8ac030db56",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-13T13:03:30+09:00",
          "tree_id": "378f692c4ebe01c5e3b50d4627644fcdf0663ff7",
          "url": "https://github.com/moreal/libplanet/commit/8687b2d8e45747fa25468021146cbe8ac030db56"
        },
        "date": 1681359624401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484748,
            "unit": "ns",
            "range": "± 137586.79573126178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2677093.6170212766,
            "unit": "ns",
            "range": "± 103689.06781555535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371792.9292929294,
            "unit": "ns",
            "range": "± 193998.42112366416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6053155,
            "unit": "ns",
            "range": "± 400337.5445429857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58987.5,
            "unit": "ns",
            "range": "± 8288.981271924542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7715806.666666667,
            "unit": "ns",
            "range": "± 141936.86960187953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20253586.666666668,
            "unit": "ns",
            "range": "± 278152.70437725564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50742950,
            "unit": "ns",
            "range": "± 362972.8295616629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102434893.33333333,
            "unit": "ns",
            "range": "± 1168845.7190546498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205365542.85714287,
            "unit": "ns",
            "range": "± 2321491.88983301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5110253.333333333,
            "unit": "ns",
            "range": "± 30460.857334631597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1545900.892857143,
            "unit": "ns",
            "range": "± 6134.913804289794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184156.947544643,
            "unit": "ns",
            "range": "± 6416.76601272939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673259.6223958335,
            "unit": "ns",
            "range": "± 10314.427079637273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838854.0690104166,
            "unit": "ns",
            "range": "± 2785.108901839019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766474.4205729166,
            "unit": "ns",
            "range": "± 3376.046197089817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371237.5,
            "unit": "ns",
            "range": "± 32777.48973508089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3640600,
            "unit": "ns",
            "range": "± 51083.099719213176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4196056.25,
            "unit": "ns",
            "range": "± 63077.888030064336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4429946.385542168,
            "unit": "ns",
            "range": "± 236046.2570653923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7222973.469387755,
            "unit": "ns",
            "range": "± 268122.297014744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338806.6666666667,
            "unit": "ns",
            "range": "± 16489.42604128995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277648.3870967742,
            "unit": "ns",
            "range": "± 12615.755722027261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253190.72164948453,
            "unit": "ns",
            "range": "± 17412.202871802216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5421130.769230769,
            "unit": "ns",
            "range": "± 31187.64137216815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868920,
            "unit": "ns",
            "range": "± 61426.776385733094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26766.304347826088,
            "unit": "ns",
            "range": "± 2776.521547972304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122476.5306122449,
            "unit": "ns",
            "range": "± 8736.625136006147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124637.20930232559,
            "unit": "ns",
            "range": "± 4578.834497982145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219207,
            "unit": "ns",
            "range": "± 30777.685262231957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9529.896907216495,
            "unit": "ns",
            "range": "± 1333.1639175014582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29212.5,
            "unit": "ns",
            "range": "± 2717.8261436980147"
          }
        ]
      }
    ]
  }
}