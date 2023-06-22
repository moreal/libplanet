window.BENCHMARK_DATA = {
  "lastUpdate": 1687425174951,
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
          "id": "3b6b324ac8dae955adf7e184ba10ce4852886b5c",
          "message": "Port changes from Libplanet 2.0.1 release",
          "timestamp": "2023-06-22T16:52:10+09:00",
          "tree_id": "2a8974f25dadb3cc9375aa368fbc8550d0537f82",
          "url": "https://github.com/moreal/libplanet/commit/3b6b324ac8dae955adf7e184ba10ce4852886b5c"
        },
        "date": 1687421300724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393717.894736842,
            "unit": "ns",
            "range": "± 109931.60734471711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2655487.1794871795,
            "unit": "ns",
            "range": "± 137008.60278134813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283985.4166666665,
            "unit": "ns",
            "range": "± 131608.8094789104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500204.166666667,
            "unit": "ns",
            "range": "± 270973.2955178477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48977.83505154639,
            "unit": "ns",
            "range": "± 3336.1574162263273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7423900,
            "unit": "ns",
            "range": "± 124072.8880072578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20696792.307692308,
            "unit": "ns",
            "range": "± 227988.62347910576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52446326.666666664,
            "unit": "ns",
            "range": "± 550567.6881529602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103126480,
            "unit": "ns",
            "range": "± 922387.3490645271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209407656.66666666,
            "unit": "ns",
            "range": "± 2714359.3941603727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937739.973958333,
            "unit": "ns",
            "range": "± 22434.733275397033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562817.3046875,
            "unit": "ns",
            "range": "± 4313.646919088584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206215.9244791667,
            "unit": "ns",
            "range": "± 2531.470934250859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667790.7682291665,
            "unit": "ns",
            "range": "± 7641.071592212129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914271.3997395834,
            "unit": "ns",
            "range": "± 2262.4832895972036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777433.7825520834,
            "unit": "ns",
            "range": "± 2964.063462586324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270483.673469388,
            "unit": "ns",
            "range": "± 124435.34523823134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503396.5517241377,
            "unit": "ns",
            "range": "± 100263.93911913059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252859.090909091,
            "unit": "ns",
            "range": "± 159518.08575479855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4343084.782608695,
            "unit": "ns",
            "range": "± 163892.17453678543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857062.162162162,
            "unit": "ns",
            "range": "± 229102.58904321946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270528.94736842107,
            "unit": "ns",
            "range": "± 8946.081971779808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259580.48780487804,
            "unit": "ns",
            "range": "± 8405.659388536842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239297.9797979798,
            "unit": "ns",
            "range": "± 15939.918954790894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080841.6666666665,
            "unit": "ns",
            "range": "± 45610.853140918385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785050,
            "unit": "ns",
            "range": "± 78585.60899539095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19551.063829787236,
            "unit": "ns",
            "range": "± 1350.8853871499546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88315.78947368421,
            "unit": "ns",
            "range": "± 5833.839577030407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77370.65217391304,
            "unit": "ns",
            "range": "± 5888.665552362238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99021.42857142857,
            "unit": "ns",
            "range": "± 16535.125062264942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5805.102040816327,
            "unit": "ns",
            "range": "± 1118.3910063517928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19905.434782608696,
            "unit": "ns",
            "range": "± 1965.1560422585344"
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
          "id": "ff389d3b94b93029459d2e5749832aca444fd0a6",
          "message": "Port changes from Libplanet 2.0.1 release",
          "timestamp": "2023-06-22T17:54:30+09:00",
          "tree_id": "b7a983c6a93a1a0c54a5a7ccee3fcfc781203e0c",
          "url": "https://github.com/moreal/libplanet/commit/ff389d3b94b93029459d2e5749832aca444fd0a6"
        },
        "date": 1687425152962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691030.2083333333,
            "unit": "ns",
            "range": "± 114220.72133861716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3172684,
            "unit": "ns",
            "range": "± 83314.5029391642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647726.923076923,
            "unit": "ns",
            "range": "± 135996.80255320456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6593480.645161291,
            "unit": "ns",
            "range": "± 297550.5984461173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58559.03614457831,
            "unit": "ns",
            "range": "± 3124.6087030951776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9305226.666666666,
            "unit": "ns",
            "range": "± 144206.70911015532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25165506.666666668,
            "unit": "ns",
            "range": "± 138106.81407967565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63198464.28571428,
            "unit": "ns",
            "range": "± 643320.1291941467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127153916.66666667,
            "unit": "ns",
            "range": "± 832480.1479114483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256612623.33333334,
            "unit": "ns",
            "range": "± 4634115.127657161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5871277.232142857,
            "unit": "ns",
            "range": "± 17701.665976737055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896062.40234375,
            "unit": "ns",
            "range": "± 8416.04349726479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421628.125,
            "unit": "ns",
            "range": "± 9400.09297466967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3255746.3802083335,
            "unit": "ns",
            "range": "± 36970.44685381351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1113774.2606026786,
            "unit": "ns",
            "range": "± 9355.873666417823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931520.41015625,
            "unit": "ns",
            "range": "± 5897.71117895927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4063334.6153846155,
            "unit": "ns",
            "range": "± 30890.36651756893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4363757.142857143,
            "unit": "ns",
            "range": "± 123708.3650232254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5316422.222222222,
            "unit": "ns",
            "range": "± 110167.2928699832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5329516.666666667,
            "unit": "ns",
            "range": "± 73765.09193296506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8257588,
            "unit": "ns",
            "range": "± 218876.48784950233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318692.1052631579,
            "unit": "ns",
            "range": "± 10465.939132947704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301687.77777777775,
            "unit": "ns",
            "range": "± 8862.415248700776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298249.23076923075,
            "unit": "ns",
            "range": "± 13860.669661366961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5009907.142857143,
            "unit": "ns",
            "range": "± 47523.08692844764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4511221.428571428,
            "unit": "ns",
            "range": "± 57744.242850846895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24902.197802197803,
            "unit": "ns",
            "range": "± 1602.5658608048966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106911.57894736843,
            "unit": "ns",
            "range": "± 6321.692864406851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100410.20408163265,
            "unit": "ns",
            "range": "± 8317.916196670205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115543.82022471911,
            "unit": "ns",
            "range": "± 11769.972918947948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7155.102040816327,
            "unit": "ns",
            "range": "± 1129.28427739478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23725,
            "unit": "ns",
            "range": "± 1742.0226339352935"
          }
        ]
      }
    ]
  }
}