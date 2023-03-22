window.BENCHMARK_DATA = {
  "lastUpdate": 1679482568969,
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
          "id": "4c5aa13dc1397df6fd83e9c6ce71f24b1a4aeb3c",
          "message": "Remove unused logic",
          "timestamp": "2023-03-22T19:40:25+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/moreal/libplanet/commit/4c5aa13dc1397df6fd83e9c6ce71f24b1a4aeb3c"
        },
        "date": 1679482566811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562205.05,
            "unit": "ns",
            "range": "± 78689.05176136405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5545165.722222222,
            "unit": "ns",
            "range": "± 116802.76556849033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25362755,
            "unit": "ns",
            "range": "± 467251.98565202986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6921941.666666667,
            "unit": "ns",
            "range": "± 178751.42106693663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30005711.611111112,
            "unit": "ns",
            "range": "± 639312.9556925695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8493329.4,
            "unit": "ns",
            "range": "± 110824.84306572628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21553757.6,
            "unit": "ns",
            "range": "± 333426.43393275567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54711315.13333333,
            "unit": "ns",
            "range": "± 491417.6146270046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112659543.6,
            "unit": "ns",
            "range": "± 606727.5294569808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220833250,
            "unit": "ns",
            "range": "± 1350710.1798333293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510401.9896907217,
            "unit": "ns",
            "range": "± 99218.91745208912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773791.2592592593,
            "unit": "ns",
            "range": "± 76145.09459607746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2328541.2,
            "unit": "ns",
            "range": "± 124703.67344797919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469032.323529412,
            "unit": "ns",
            "range": "± 171504.81974704942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51358.69892473118,
            "unit": "ns",
            "range": "± 3073.6627165850387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6021732.673958333,
            "unit": "ns",
            "range": "± 41620.68011313967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859919.7766927083,
            "unit": "ns",
            "range": "± 5053.55811949567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365293.8970424107,
            "unit": "ns",
            "range": "± 2635.177001227723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629003.256119792,
            "unit": "ns",
            "range": "± 7846.92335652756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861143.1688802083,
            "unit": "ns",
            "range": "± 561.8535574666037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758768.3281901042,
            "unit": "ns",
            "range": "± 990.432616521077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214056.41463414635,
            "unit": "ns",
            "range": "± 11304.989865128027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205682.66666666666,
            "unit": "ns",
            "range": "± 6751.199152743163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180337.44,
            "unit": "ns",
            "range": "± 9114.620336105689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12672694.153846154,
            "unit": "ns",
            "range": "± 91184.67699568658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10298855.4,
            "unit": "ns",
            "range": "± 85784.20169888093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23537.126315789475,
            "unit": "ns",
            "range": "± 2716.787610404022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62810.09375,
            "unit": "ns",
            "range": "± 7196.67224863522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43038.41379310345,
            "unit": "ns",
            "range": "± 1182.8298548469436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107552.9175257732,
            "unit": "ns",
            "range": "± 16976.956189242537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6214.34693877551,
            "unit": "ns",
            "range": "± 916.8819539983606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21176.340909090908,
            "unit": "ns",
            "range": "± 1745.716464492205"
          }
        ]
      }
    ]
  }
}