window.BENCHMARK_DATA = {
  "lastUpdate": 1681479266130,
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
          "id": "66cd4ec41dba46d1f34b718f977714284c443b06",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:16:18+09:00",
          "tree_id": "65975546470a4d2376acc0fcd547625311518773",
          "url": "https://github.com/moreal/libplanet/commit/66cd4ec41dba46d1f34b718f977714284c443b06"
        },
        "date": 1681479252871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1674174.4897959183,
            "unit": "ns",
            "range": "± 152422.6261792733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3089345.263157895,
            "unit": "ns",
            "range": "± 191665.37815883814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650771.4285714286,
            "unit": "ns",
            "range": "± 224852.42878421108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715490.52631579,
            "unit": "ns",
            "range": "± 432247.81851551554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55718.279569892475,
            "unit": "ns",
            "range": "± 4830.517710947112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8641183.333333334,
            "unit": "ns",
            "range": "± 182071.79013978495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23333292.85714286,
            "unit": "ns",
            "range": "± 265227.6887282545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59502031.03448276,
            "unit": "ns",
            "range": "± 1690504.08059326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116205045.16129032,
            "unit": "ns",
            "range": "± 3437786.922215968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242792510,
            "unit": "ns",
            "range": "± 4402680.391664021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982498.463541667,
            "unit": "ns",
            "range": "± 111920.72507431432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889194.8372395833,
            "unit": "ns",
            "range": "± 31189.445691727404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410684.6354166667,
            "unit": "ns",
            "range": "± 20360.662898582395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211913.0729166665,
            "unit": "ns",
            "range": "± 56214.276379198396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001483.6067708334,
            "unit": "ns",
            "range": "± 16740.002113316543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913411.0163762019,
            "unit": "ns",
            "range": "± 8494.836930767859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635838.596491228,
            "unit": "ns",
            "range": "± 157084.75164061913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4020774.074074074,
            "unit": "ns",
            "range": "± 110039.13497056958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4619264.285714285,
            "unit": "ns",
            "range": "± 75122.57273327328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4993966.666666667,
            "unit": "ns",
            "range": "± 201357.86815187198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8114080,
            "unit": "ns",
            "range": "± 236610.7823934226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373916.6666666667,
            "unit": "ns",
            "range": "± 15546.009012811457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304324.3243243243,
            "unit": "ns",
            "range": "± 15263.528118790191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265148.93617021275,
            "unit": "ns",
            "range": "± 16045.672345110208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6278636.666666667,
            "unit": "ns",
            "range": "± 169526.48553795533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4453924,
            "unit": "ns",
            "range": "± 103126.29910292847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25426.59574468085,
            "unit": "ns",
            "range": "± 2943.524897816854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113247.31182795699,
            "unit": "ns",
            "range": "± 9200.325979549165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109925.77319587629,
            "unit": "ns",
            "range": "± 11760.219654539793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 223120.61855670103,
            "unit": "ns",
            "range": "± 27226.028975597394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9454.255319148937,
            "unit": "ns",
            "range": "± 1319.959668137264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25865.59139784946,
            "unit": "ns",
            "range": "± 2865.5561196228223"
          }
        ]
      }
    ]
  }
}