window.BENCHMARK_DATA = {
  "lastUpdate": 1679482748186,
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
      }
    ]
  }
}