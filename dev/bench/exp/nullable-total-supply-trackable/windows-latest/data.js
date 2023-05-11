window.BENCHMARK_DATA = {
  "lastUpdate": 1683792399928,
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
          "id": "6a3446beb0b2fcedb89f6d11954a5419d96cf1b5",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T16:49:19+09:00",
          "tree_id": "a437fefa22201bdf1e35307d13475b2fd118e8d9",
          "url": "https://github.com/moreal/libplanet/commit/6a3446beb0b2fcedb89f6d11954a5419d96cf1b5"
        },
        "date": 1683792384009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344740.8163265307,
            "unit": "ns",
            "range": "± 125510.52762082008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455413.6363636362,
            "unit": "ns",
            "range": "± 91891.28711109918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117938.5416666665,
            "unit": "ns",
            "range": "± 141549.78917219545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5342147.368421053,
            "unit": "ns",
            "range": "± 319465.32587198017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49260.24096385542,
            "unit": "ns",
            "range": "± 2621.4378738765067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7047142.857142857,
            "unit": "ns",
            "range": "± 124054.22179456426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19617014.285714287,
            "unit": "ns",
            "range": "± 240665.91544533856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48622327.777777776,
            "unit": "ns",
            "range": "± 1009145.0771965671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97803127.27272727,
            "unit": "ns",
            "range": "± 2375527.454047851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196274691.3043478,
            "unit": "ns",
            "range": "± 4927278.23530423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824272.864583333,
            "unit": "ns",
            "range": "± 15017.773331625307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505678.7109375,
            "unit": "ns",
            "range": "± 5053.07227460307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179560.2473958333,
            "unit": "ns",
            "range": "± 5396.94586517647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649363.4635416665,
            "unit": "ns",
            "range": "± 9838.215689410836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839340.2473958334,
            "unit": "ns",
            "range": "± 3177.8485494454853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749507.67578125,
            "unit": "ns",
            "range": "± 2102.6547525229435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3172151.8518518517,
            "unit": "ns",
            "range": "± 86950.92059657903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423594.736842105,
            "unit": "ns",
            "range": "± 71513.62320630641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212680,
            "unit": "ns",
            "range": "± 111220.69651523198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4396166.666666667,
            "unit": "ns",
            "range": "± 62848.50954092031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6764890.322580645,
            "unit": "ns",
            "range": "± 204884.4932392212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260637.5,
            "unit": "ns",
            "range": "± 9875.493523891631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256162.5,
            "unit": "ns",
            "range": "± 9919.712268476425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233020.202020202,
            "unit": "ns",
            "range": "± 16458.370364674996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3970250,
            "unit": "ns",
            "range": "± 105170.78681839364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3637992.3076923075,
            "unit": "ns",
            "range": "± 45830.71134691346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19389.473684210527,
            "unit": "ns",
            "range": "± 2140.7134267257593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91165.30612244898,
            "unit": "ns",
            "range": "± 9518.859219105932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73410,
            "unit": "ns",
            "range": "± 3536.4007740614766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94224.48979591837,
            "unit": "ns",
            "range": "± 15029.90874734451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5716.494845360825,
            "unit": "ns",
            "range": "± 821.2896885857754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18977.319587628866,
            "unit": "ns",
            "range": "± 2021.8342102860863"
          }
        ]
      }
    ]
  }
}