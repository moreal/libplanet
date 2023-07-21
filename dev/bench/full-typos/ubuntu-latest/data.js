window.BENCHMARK_DATA = {
  "lastUpdate": 1689917346399,
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
          "id": "b5a3c87a039640743dfbf4ba54fe3cecdf4db773",
          "message": "ci(gh-actions): run typos with configuration file",
          "timestamp": "2023-07-21T14:16:07+09:00",
          "tree_id": "99f2268ffee0f90f6148d9fcebf01dd394876f27",
          "url": "https://github.com/moreal/libplanet/commit/b5a3c87a039640743dfbf4ba54fe3cecdf4db773"
        },
        "date": 1689917341298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278767.70588235295,
            "unit": "ns",
            "range": "± 7071.275336215555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259611.42857142858,
            "unit": "ns",
            "range": "± 7837.323444997826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228291,
            "unit": "ns",
            "range": "± 3492.781055262411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213723.666666667,
            "unit": "ns",
            "range": "± 44470.574386194916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995308.933333333,
            "unit": "ns",
            "range": "± 45401.401966186444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17337.02105263158,
            "unit": "ns",
            "range": "± 1568.9182272532216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85458,
            "unit": "ns",
            "range": "± 4360.105681360439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72820.73333333334,
            "unit": "ns",
            "range": "± 1020.0897346148852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87513.76288659793,
            "unit": "ns",
            "range": "± 10386.833370880731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4174.5204081632655,
            "unit": "ns",
            "range": "± 516.3240457288134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15902.3125,
            "unit": "ns",
            "range": "± 1366.8446514932814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349214.6666666667,
            "unit": "ns",
            "range": "± 92133.57106718396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2537833.515151515,
            "unit": "ns",
            "range": "± 78243.28614053782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1712877.0957446808,
            "unit": "ns",
            "range": "± 96891.51168899075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4686466.375,
            "unit": "ns",
            "range": "± 121714.86855112846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5975068.859895834,
            "unit": "ns",
            "range": "± 24163.57631336201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998728.92265625,
            "unit": "ns",
            "range": "± 3318.6836648609756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343845.4451622595,
            "unit": "ns",
            "range": "± 2726.638056497839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574762.8810096155,
            "unit": "ns",
            "range": "± 2529.5585208939674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820095.5779157366,
            "unit": "ns",
            "range": "± 501.4136445266647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743379.076171875,
            "unit": "ns",
            "range": "± 2428.7651131682783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225705.3333333335,
            "unit": "ns",
            "range": "± 32478.68588455941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411145.066666667,
            "unit": "ns",
            "range": "± 52984.80136587239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276028.266666667,
            "unit": "ns",
            "range": "± 43050.750088814064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3725667.510638298,
            "unit": "ns",
            "range": "± 131147.31293155937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6129940.235294118,
            "unit": "ns",
            "range": "± 120622.42630856908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7548049.133333334,
            "unit": "ns",
            "range": "± 35176.90899047001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18955959.785714287,
            "unit": "ns",
            "range": "± 62886.74464974998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49023854.93333333,
            "unit": "ns",
            "range": "± 761149.5715354757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97205965.2,
            "unit": "ns",
            "range": "± 1131198.1699038162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196687047.6,
            "unit": "ns",
            "range": "± 1529674.6844212052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46280.23809523809,
            "unit": "ns",
            "range": "± 2491.491630537276"
          }
        ]
      }
    ]
  }
}