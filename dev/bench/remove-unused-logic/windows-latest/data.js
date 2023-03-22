window.BENCHMARK_DATA = {
  "lastUpdate": 1679483573517,
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
        "date": 1679482734809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369646,
            "unit": "ns",
            "range": "± 107930.00389796222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2377207.1428571427,
            "unit": "ns",
            "range": "± 85408.37736044952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175248.484848485,
            "unit": "ns",
            "range": "± 172601.37829257685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4751407.142857143,
            "unit": "ns",
            "range": "± 78990.42507005045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43455.26315789474,
            "unit": "ns",
            "range": "± 2228.775133675721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6948833.333333333,
            "unit": "ns",
            "range": "± 39719.240869358204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18127642.85714286,
            "unit": "ns",
            "range": "± 59298.848273751544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46212773.333333336,
            "unit": "ns",
            "range": "± 227373.46706203325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92619153.33333333,
            "unit": "ns",
            "range": "± 160613.283860274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184316000,
            "unit": "ns",
            "range": "± 517271.08670682256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4817236.830357143,
            "unit": "ns",
            "range": "± 5897.108587381051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514698.6165364583,
            "unit": "ns",
            "range": "± 1284.1012494363185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153460.625,
            "unit": "ns",
            "range": "± 1417.1371882189035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680758.4375,
            "unit": "ns",
            "range": "± 14462.422384988064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812333.1949869791,
            "unit": "ns",
            "range": "± 2290.599563292126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739371.6927083334,
            "unit": "ns",
            "range": "± 676.0620651285702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000450,
            "unit": "ns",
            "range": "± 65019.22792528376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4670643.75,
            "unit": "ns",
            "range": "± 56143.500291663324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21831940,
            "unit": "ns",
            "range": "± 234894.87557507204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5831957.142857143,
            "unit": "ns",
            "range": "± 122006.4611872198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24969676.923076924,
            "unit": "ns",
            "range": "± 227410.96849040416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184194.23076923078,
            "unit": "ns",
            "range": "± 7542.673720085082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180691.07142857142,
            "unit": "ns",
            "range": "± 7565.045857836475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159294.89795918367,
            "unit": "ns",
            "range": "± 9861.090594931124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10519073.333333334,
            "unit": "ns",
            "range": "± 71888.81759521502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8650107.142857144,
            "unit": "ns",
            "range": "± 46832.310744509814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19969.791666666668,
            "unit": "ns",
            "range": "± 1926.825575459703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51285.051546391755,
            "unit": "ns",
            "range": "± 5228.388877821921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34343.58974358974,
            "unit": "ns",
            "range": "± 1194.0190582528342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90471.71717171717,
            "unit": "ns",
            "range": "± 17047.323330526655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4343.877551020408,
            "unit": "ns",
            "range": "± 586.1047945653553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16201.098901098901,
            "unit": "ns",
            "range": "± 1312.6304807518297"
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
        "date": 1679483560949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313179.5918367347,
            "unit": "ns",
            "range": "± 119291.22638574554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2354585.4166666665,
            "unit": "ns",
            "range": "± 92857.86436425716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061578.125,
            "unit": "ns",
            "range": "± 150717.4349591244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4733088.235294118,
            "unit": "ns",
            "range": "± 152632.5330996895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42003.614457831325,
            "unit": "ns",
            "range": "± 2243.6058620396466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6939900,
            "unit": "ns",
            "range": "± 41681.94196188903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17433563.333333332,
            "unit": "ns",
            "range": "± 134509.99360996336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45093273.333333336,
            "unit": "ns",
            "range": "± 260646.55725622736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88959800,
            "unit": "ns",
            "range": "± 624355.7182064907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179014153.33333334,
            "unit": "ns",
            "range": "± 1759841.413255616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4832164.973958333,
            "unit": "ns",
            "range": "± 6549.889033108015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515861.1328125,
            "unit": "ns",
            "range": "± 2344.7070081203387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1120620.4427083333,
            "unit": "ns",
            "range": "± 1595.2656997157608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583189.1536458335,
            "unit": "ns",
            "range": "± 8435.299659187309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820529.0457589285,
            "unit": "ns",
            "range": "± 1508.5510433688944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781127.7571614584,
            "unit": "ns",
            "range": "± 709.2464875249642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2982358.8235294116,
            "unit": "ns",
            "range": "± 51687.74103720738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4501673.333333333,
            "unit": "ns",
            "range": "± 40651.1020175111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20953278.57142857,
            "unit": "ns",
            "range": "± 301255.28958923614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5647112.5,
            "unit": "ns",
            "range": "± 79880.50137549212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24566810,
            "unit": "ns",
            "range": "± 395659.6152538911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175043.33333333334,
            "unit": "ns",
            "range": "± 7775.981417522145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172640.38461538462,
            "unit": "ns",
            "range": "± 7110.893593094169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145158.18181818182,
            "unit": "ns",
            "range": "± 6097.682951231343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10235686.666666666,
            "unit": "ns",
            "range": "± 140376.59993575784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8263740,
            "unit": "ns",
            "range": "± 86568.29508709129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16659.340659340658,
            "unit": "ns",
            "range": "± 1194.708520656168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47543.81443298969,
            "unit": "ns",
            "range": "± 4597.413548964915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33694.8717948718,
            "unit": "ns",
            "range": "± 1174.4984860174236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85085.71428571429,
            "unit": "ns",
            "range": "± 12717.331302750492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4552.083333333333,
            "unit": "ns",
            "range": "± 505.54382738147314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15383.333333333334,
            "unit": "ns",
            "range": "± 1130.1039029490491"
          }
        ]
      }
    ]
  }
}