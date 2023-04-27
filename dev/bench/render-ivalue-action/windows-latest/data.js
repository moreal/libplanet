window.BENCHMARK_DATA = {
  "lastUpdate": 1682576892425,
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
          "id": "53ef6ab431fdd08fa81d755a608a0d37c17c772b",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:09:22+09:00",
          "tree_id": "9eddb5b488305f39700f6a54e6e5de70e644d6ce",
          "url": "https://github.com/moreal/libplanet/commit/53ef6ab431fdd08fa81d755a608a0d37c17c772b"
        },
        "date": 1682576876590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591001.0638297873,
            "unit": "ns",
            "range": "± 177719.86866776095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974965.3061224488,
            "unit": "ns",
            "range": "± 261861.5752810408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557037.5,
            "unit": "ns",
            "range": "± 287691.6083696495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6525593.87755102,
            "unit": "ns",
            "range": "± 457733.2444283599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55404.34782608696,
            "unit": "ns",
            "range": "± 9200.178128274107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7862538,
            "unit": "ns",
            "range": "± 313820.6667405278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21240998.979591835,
            "unit": "ns",
            "range": "± 1442275.3243524835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53432291.93548387,
            "unit": "ns",
            "range": "± 3008574.538184031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106372772.3076923,
            "unit": "ns",
            "range": "± 4939897.669692527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216463772.88135594,
            "unit": "ns",
            "range": "± 9583027.934732977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877917.203125,
            "unit": "ns",
            "range": "± 154191.95267807163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1810804.799107143,
            "unit": "ns",
            "range": "± 14422.637253200157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321168.8720703125,
            "unit": "ns",
            "range": "± 24699.33140320843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2977139.4990808824,
            "unit": "ns",
            "range": "± 60344.923834484754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955071.71875,
            "unit": "ns",
            "range": "± 14151.431631977373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888589.6484375,
            "unit": "ns",
            "range": "± 5993.000089341675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469652.0408163266,
            "unit": "ns",
            "range": "± 283854.92346110835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550856.25,
            "unit": "ns",
            "range": "± 293208.33219025255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4640858.333333333,
            "unit": "ns",
            "range": "± 361085.03406339255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4524708.080808081,
            "unit": "ns",
            "range": "± 309817.4820421407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8146609.090909091,
            "unit": "ns",
            "range": "± 514540.2362424443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301653.3333333333,
            "unit": "ns",
            "range": "± 24074.034686097297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286191.75257731957,
            "unit": "ns",
            "range": "± 21601.83571531544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239233.69565217392,
            "unit": "ns",
            "range": "± 18436.456222935052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4558841.666666667,
            "unit": "ns",
            "range": "± 277710.18314883846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126750,
            "unit": "ns",
            "range": "± 296191.0943655182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22251.020408163266,
            "unit": "ns",
            "range": "± 5832.8830539647115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90431.9587628866,
            "unit": "ns",
            "range": "± 12723.58821893213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80548.42105263157,
            "unit": "ns",
            "range": "± 10737.514898886398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108745.26315789473,
            "unit": "ns",
            "range": "± 16210.830162507742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10471.42857142857,
            "unit": "ns",
            "range": "± 5704.275842435912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22111,
            "unit": "ns",
            "range": "± 7276.222449273601"
          }
        ]
      }
    ]
  }
}