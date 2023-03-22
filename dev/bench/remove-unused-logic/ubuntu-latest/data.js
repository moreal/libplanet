window.BENCHMARK_DATA = {
  "lastUpdate": 1679483503950,
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
          "id": "d2d59675532faefbacf718608f11aef40a153d98",
          "message": "Remove unused logic\n\n[skip changelog]",
          "timestamp": "2023-03-22T19:55:55+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/moreal/libplanet/commit/d2d59675532faefbacf718608f11aef40a153d98"
        },
        "date": 1679483500921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155540,
            "unit": "ns",
            "range": "± 34746.61285856302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4928758.375,
            "unit": "ns",
            "range": "± 127205.96442053182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22774747.35714286,
            "unit": "ns",
            "range": "± 291471.82140978833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5968727,
            "unit": "ns",
            "range": "± 103212.24547227219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25586162.42857143,
            "unit": "ns",
            "range": "± 275973.36419960595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553708.714285715,
            "unit": "ns",
            "range": "± 6147.546119933001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18959362.733333334,
            "unit": "ns",
            "range": "± 94541.77390026867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48474164.78571428,
            "unit": "ns",
            "range": "± 290348.935850318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96876671.66666667,
            "unit": "ns",
            "range": "± 490209.99626758596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193861968.7142857,
            "unit": "ns",
            "range": "± 923914.6185065294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292146.3125,
            "unit": "ns",
            "range": "± 74433.34682227095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2405879.46875,
            "unit": "ns",
            "range": "± 72615.57409065304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2054022.9393939395,
            "unit": "ns",
            "range": "± 129538.41402604882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5082597.426229509,
            "unit": "ns",
            "range": "± 227843.44591388904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45643.016393442624,
            "unit": "ns",
            "range": "± 1973.0579100455827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5914810.2046875,
            "unit": "ns",
            "range": "± 17874.221754874678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926588.1763392857,
            "unit": "ns",
            "range": "± 3907.436525496205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361510.5869791666,
            "unit": "ns",
            "range": "± 1362.3334286462436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547923.1609933036,
            "unit": "ns",
            "range": "± 5170.6942630650055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806143.5297526042,
            "unit": "ns",
            "range": "± 2486.662528087341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729157.0883413461,
            "unit": "ns",
            "range": "± 388.36639817527134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183704.625,
            "unit": "ns",
            "range": "± 5422.290932033517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193013.25,
            "unit": "ns",
            "range": "± 4425.373928595723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163783.3076923077,
            "unit": "ns",
            "range": "± 1384.35914081904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11072902.857142856,
            "unit": "ns",
            "range": "± 42720.461503300096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9067264.2,
            "unit": "ns",
            "range": "± 55668.992261914915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15700.870967741936,
            "unit": "ns",
            "range": "± 1260.594875323331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48241.441860465115,
            "unit": "ns",
            "range": "± 2500.8947509648538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37783,
            "unit": "ns",
            "range": "± 432.2600227556641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79998.20212765958,
            "unit": "ns",
            "range": "± 8358.13740708385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4223.438775510204,
            "unit": "ns",
            "range": "± 474.25214195727426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14749.268817204302,
            "unit": "ns",
            "range": "± 1087.8472373152654"
          }
        ]
      }
    ]
  }
}