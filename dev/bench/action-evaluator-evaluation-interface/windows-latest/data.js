window.BENCHMARK_DATA = {
  "lastUpdate": 1682502358942,
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
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "a0b3bd6c7a27431fcde83429ec8f65623559474b",
          "message": "Update return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`\n\n[skip changelog]",
          "timestamp": "2023-04-26T18:21:14+09:00",
          "tree_id": "da2e57752902c5d97761b111cb1ab5c105eb4624",
          "url": "https://github.com/moreal/libplanet/commit/a0b3bd6c7a27431fcde83429ec8f65623559474b"
        },
        "date": 1682502340186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1803617.0212765958,
            "unit": "ns",
            "range": "± 182909.92650082495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3357755.789473684,
            "unit": "ns",
            "range": "± 258350.5571216397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2835975.5555555555,
            "unit": "ns",
            "range": "± 198735.94604320548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7411597.826086956,
            "unit": "ns",
            "range": "± 510430.5349254031"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73722.91666666667,
            "unit": "ns",
            "range": "± 16614.5812888411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9071933.333333334,
            "unit": "ns",
            "range": "± 833045.602677519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25216803.03030303,
            "unit": "ns",
            "range": "± 1573553.2959499035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63310828,
            "unit": "ns",
            "range": "± 1663115.1191664394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125797180.76923077,
            "unit": "ns",
            "range": "± 3362663.513825816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255309197.2972973,
            "unit": "ns",
            "range": "± 8643311.861507155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6022724.441964285,
            "unit": "ns",
            "range": "± 101330.55127204447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2026528.515625,
            "unit": "ns",
            "range": "± 32570.495044026906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499843.0245535714,
            "unit": "ns",
            "range": "± 17202.185600001714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3341732.0162259615,
            "unit": "ns",
            "range": "± 83864.20539495301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1101788.2634943181,
            "unit": "ns",
            "range": "± 26229.219391503564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1032294.6001838235,
            "unit": "ns",
            "range": "± 20816.318486774104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601790.425531915,
            "unit": "ns",
            "range": "± 296240.79789497494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826215.463917526,
            "unit": "ns",
            "range": "± 416017.36976462445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749814.583333333,
            "unit": "ns",
            "range": "± 347521.6164360872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5478820.879120879,
            "unit": "ns",
            "range": "± 430714.47425991663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8567320,
            "unit": "ns",
            "range": "± 540872.9953728467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339826.59574468085,
            "unit": "ns",
            "range": "± 33904.95626385876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342748.97959183675,
            "unit": "ns",
            "range": "± 52228.203158194134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312005.10204081633,
            "unit": "ns",
            "range": "± 39830.32407561934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5072007.608695652,
            "unit": "ns",
            "range": "± 307561.16884098714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4563516.666666667,
            "unit": "ns",
            "range": "± 331630.5597202268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29462.76595744681,
            "unit": "ns",
            "range": "± 9164.693637624601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115370.20202020202,
            "unit": "ns",
            "range": "± 24046.75284539996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96451.54639175258,
            "unit": "ns",
            "range": "± 24759.5146416907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129884.53608247422,
            "unit": "ns",
            "range": "± 25398.898188890435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6689.130434782609,
            "unit": "ns",
            "range": "± 1267.1206887833007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32187.878787878788,
            "unit": "ns",
            "range": "± 13339.669799230587"
          }
        ]
      }
    ]
  }
}