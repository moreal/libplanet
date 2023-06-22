window.BENCHMARK_DATA = {
  "lastUpdate": 1687420611916,
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
          "id": "bee9a7bac3e4b3128f995685deb97b7a6e028e4c",
          "message": "Prepare 2.0.2",
          "timestamp": "2023-06-22T16:42:24+09:00",
          "tree_id": "c91fb476bde373feb45b1f1a4a2f8685fdebd3f8",
          "url": "https://github.com/moreal/libplanet/commit/bee9a7bac3e4b3128f995685deb97b7a6e028e4c"
        },
        "date": 1687420607246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806452.7586206896,
            "unit": "ns",
            "range": "± 109237.67346663852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959424.5789473685,
            "unit": "ns",
            "range": "± 80212.05511941166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4764111.357142857,
            "unit": "ns",
            "range": "± 53161.35605523873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5018608.0322580645,
            "unit": "ns",
            "range": "± 152890.9679450215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7587033.266666667,
            "unit": "ns",
            "range": "± 136288.635794178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8341857.571428572,
            "unit": "ns",
            "range": "± 99518.39003668872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23430614.07142857,
            "unit": "ns",
            "range": "± 157604.08054531127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58369981.86666667,
            "unit": "ns",
            "range": "± 373083.60284312884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117145730.53333333,
            "unit": "ns",
            "range": "± 578315.3996001622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230697335.6,
            "unit": "ns",
            "range": "± 1007861.1046588995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305709.69811320753,
            "unit": "ns",
            "range": "± 11994.277548360791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308220.3333333333,
            "unit": "ns",
            "range": "± 6591.027787387764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282620.7021276596,
            "unit": "ns",
            "range": "± 10953.615745923498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4745183.428571428,
            "unit": "ns",
            "range": "± 34233.73367514358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4369817.4,
            "unit": "ns",
            "range": "± 62966.964067108805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23825.34375,
            "unit": "ns",
            "range": "± 1929.5447285666828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102309.45918367348,
            "unit": "ns",
            "range": "± 8813.299355476624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89621.57142857143,
            "unit": "ns",
            "range": "± 7191.065149154291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115875.09183673469,
            "unit": "ns",
            "range": "± 14740.55073184435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6872.715789473684,
            "unit": "ns",
            "range": "± 1056.2362290494257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21641.129032258064,
            "unit": "ns",
            "range": "± 2083.2674650643858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51047.358695652176,
            "unit": "ns",
            "range": "± 3582.90954755594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6161425.7390625,
            "unit": "ns",
            "range": "± 27254.497277337392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930136.544921875,
            "unit": "ns",
            "range": "± 1338.9806622829328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405016.546875,
            "unit": "ns",
            "range": "± 4095.561932470062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645514.457356771,
            "unit": "ns",
            "range": "± 2168.3354267624886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838804.3597005209,
            "unit": "ns",
            "range": "± 297.67569733974454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776178.5210286458,
            "unit": "ns",
            "range": "± 316.08636355530217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543416.25,
            "unit": "ns",
            "range": "± 84080.10524292248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990663.160714286,
            "unit": "ns",
            "range": "± 127286.02567771629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504002.56097561,
            "unit": "ns",
            "range": "± 132308.0071001647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5837098.482758621,
            "unit": "ns",
            "range": "± 170378.74112434263"
          }
        ]
      }
    ]
  }
}