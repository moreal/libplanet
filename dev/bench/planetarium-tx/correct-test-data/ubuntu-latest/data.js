window.BENCHMARK_DATA = {
  "lastUpdate": 1682497468187,
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
          "id": "71854094e6b4fb791173a6c8a2a6a14f6d1f2e17",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T17:10:51+09:00",
          "tree_id": "201e1f29e6b6f6eb3048aa9a72d9cd1de60e6b5a",
          "url": "https://github.com/moreal/libplanet/commit/71854094e6b4fb791173a6c8a2a6a14f6d1f2e17"
        },
        "date": 1682497464690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787084.428571428,
            "unit": "ns",
            "range": "± 112355.60738032703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21498624.666666668,
            "unit": "ns",
            "range": "± 254411.30835958943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54404925.46666667,
            "unit": "ns",
            "range": "± 678877.1037325287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106991998.53333333,
            "unit": "ns",
            "range": "± 1086206.8021298356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213852734.92857143,
            "unit": "ns",
            "range": "± 2763841.8243657607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48991.12162162162,
            "unit": "ns",
            "range": "± 2473.1750208255967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462613.085106383,
            "unit": "ns",
            "range": "± 101538.45040706475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710762.175,
            "unit": "ns",
            "range": "± 95663.861011004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348101.7125,
            "unit": "ns",
            "range": "± 116885.04362197603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5971236.26,
            "unit": "ns",
            "range": "± 367538.48515269224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5911755.516145834,
            "unit": "ns",
            "range": "± 23111.722329274235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870969.1108072917,
            "unit": "ns",
            "range": "± 4237.000313143332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355334.590625,
            "unit": "ns",
            "range": "± 3911.4975770101973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572531.1944110575,
            "unit": "ns",
            "range": "± 3041.5798372657373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835545.2067307692,
            "unit": "ns",
            "range": "± 762.7689663205723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754408.0905412947,
            "unit": "ns",
            "range": "± 843.5692927106512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298764.17391304346,
            "unit": "ns",
            "range": "± 7340.180005547139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282143.8888888889,
            "unit": "ns",
            "range": "± 7850.650298068568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232631.07142857142,
            "unit": "ns",
            "range": "± 3047.4652131361113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4414149.733333333,
            "unit": "ns",
            "range": "± 58227.905685291815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796721.6428571427,
            "unit": "ns",
            "range": "± 43855.131634835976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20203.42105263158,
            "unit": "ns",
            "range": "± 1627.3262013221315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90337.62195121951,
            "unit": "ns",
            "range": "± 4666.076453788409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82164.30985915494,
            "unit": "ns",
            "range": "± 3785.833041339965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100853.39130434782,
            "unit": "ns",
            "range": "± 9136.694700109032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7450.081632653061,
            "unit": "ns",
            "range": "± 975.288523775204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20567.21649484536,
            "unit": "ns",
            "range": "± 1866.6769952846917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404316.052631579,
            "unit": "ns",
            "range": "± 75442.50173658648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577937.8767123288,
            "unit": "ns",
            "range": "± 178007.0392281616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4219834.222222222,
            "unit": "ns",
            "range": "± 85907.81071012423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4594130.183673469,
            "unit": "ns",
            "range": "± 182645.99621725827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7044037.28125,
            "unit": "ns",
            "range": "± 213340.0313461806"
          }
        ]
      }
    ]
  }
}