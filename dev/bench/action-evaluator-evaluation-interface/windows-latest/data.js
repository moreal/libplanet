window.BENCHMARK_DATA = {
  "lastUpdate": 1682494882794,
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
          "id": "86475721b9860baa7c8342a30875d8ad6d1453b8",
          "message": "Update return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`\n\n[skip changelog]",
          "timestamp": "2023-04-26T16:23:34+09:00",
          "tree_id": "1945ee60a9b3379845453058ab751f727d04b011",
          "url": "https://github.com/moreal/libplanet/commit/86475721b9860baa7c8342a30875d8ad6d1453b8"
        },
        "date": 1682494867879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534229.5918367347,
            "unit": "ns",
            "range": "± 145191.35699559888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2795659.4594594594,
            "unit": "ns",
            "range": "± 89927.44748301717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2445788.6597938146,
            "unit": "ns",
            "range": "± 198173.13551764144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5790282.051282051,
            "unit": "ns",
            "range": "± 188413.04412296275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76307.14285714286,
            "unit": "ns",
            "range": "± 6871.564746246351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127414.285714285,
            "unit": "ns",
            "range": "± 113793.67872901077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20907542.85714286,
            "unit": "ns",
            "range": "± 233366.7820086118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52343266.666666664,
            "unit": "ns",
            "range": "± 312687.1797515088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104954820,
            "unit": "ns",
            "range": "± 767641.2333524412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208031140,
            "unit": "ns",
            "range": "± 1631430.3000741405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5205798.645833333,
            "unit": "ns",
            "range": "± 22641.3707230526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549065.0455729167,
            "unit": "ns",
            "range": "± 4600.635587643419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180450.5859375,
            "unit": "ns",
            "range": "± 4786.0356961073085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832719.140625,
            "unit": "ns",
            "range": "± 34019.33592650232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836490.0748697916,
            "unit": "ns",
            "range": "± 4109.411543496295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764287.4248798077,
            "unit": "ns",
            "range": "± 2070.791162648829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418125,
            "unit": "ns",
            "range": "± 46798.176440774034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3692626.923076923,
            "unit": "ns",
            "range": "± 151101.8811154296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407346.666666667,
            "unit": "ns",
            "range": "± 131079.73549512244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4522850.980392157,
            "unit": "ns",
            "range": "± 184744.71074707282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7199957.692307692,
            "unit": "ns",
            "range": "± 192618.77203030224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318819.6721311475,
            "unit": "ns",
            "range": "± 14262.524550631877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300150.8771929825,
            "unit": "ns",
            "range": "± 13022.756494567193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277194.44444444444,
            "unit": "ns",
            "range": "± 11611.1107600333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4339466.666666667,
            "unit": "ns",
            "range": "± 72082.63776157658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834741.1764705884,
            "unit": "ns",
            "range": "± 68736.0900366715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33164.73684210526,
            "unit": "ns",
            "range": "± 3247.0598295064074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132093.8144329897,
            "unit": "ns",
            "range": "± 8682.811257893736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127280.23255813954,
            "unit": "ns",
            "range": "± 6821.399196946618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129780.95238095238,
            "unit": "ns",
            "range": "± 8688.733546858684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12256.25,
            "unit": "ns",
            "range": "± 1472.7569921391432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33254.255319148935,
            "unit": "ns",
            "range": "± 2814.695113022452"
          }
        ]
      }
    ]
  }
}