window.BENCHMARK_DATA = {
  "lastUpdate": 1682579004899,
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
          "id": "53ef6ab431fdd08fa81d755a608a0d37c17c772b",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:09:22+09:00",
          "tree_id": "9eddb5b488305f39700f6a54e6e5de70e644d6ce",
          "url": "https://github.com/moreal/libplanet/commit/53ef6ab431fdd08fa81d755a608a0d37c17c772b"
        },
        "date": 1682576638891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7506117.428571428,
            "unit": "ns",
            "range": "± 105204.54783710584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19374630.53846154,
            "unit": "ns",
            "range": "± 525721.6622235178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47294012.115384616,
            "unit": "ns",
            "range": "± 1130375.136944274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93357707.30434783,
            "unit": "ns",
            "range": "± 2349449.1383526563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188447676.83333334,
            "unit": "ns",
            "range": "± 1476461.642593248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58790.16842105263,
            "unit": "ns",
            "range": "± 6746.036493793071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312007.16049382713,
            "unit": "ns",
            "range": "± 15745.09960944737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297113.0144927536,
            "unit": "ns",
            "range": "± 14220.015135563997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269607,
            "unit": "ns",
            "range": "± 15757.305616018106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3989710.269230769,
            "unit": "ns",
            "range": "± 108305.9881305028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3640854.0434782607,
            "unit": "ns",
            "range": "± 90928.92165986187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18175.31111111111,
            "unit": "ns",
            "range": "± 1734.5512947898596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83999.75531914894,
            "unit": "ns",
            "range": "± 6573.232517961497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83681.52150537634,
            "unit": "ns",
            "range": "± 10338.509237815773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96587.7052631579,
            "unit": "ns",
            "range": "± 11710.903840578227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6733.591397849463,
            "unit": "ns",
            "range": "± 806.09984596471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17370.44827586207,
            "unit": "ns",
            "range": "± 1489.8083048111264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1582976.2708333333,
            "unit": "ns",
            "range": "± 150838.29882357147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2977820.507246377,
            "unit": "ns",
            "range": "± 142821.41949225625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2542582.244680851,
            "unit": "ns",
            "range": "± 217514.22931884407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727727.288235294,
            "unit": "ns",
            "range": "± 360300.10973172454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3095501.4468085105,
            "unit": "ns",
            "range": "± 113103.13263005053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314577.84,
            "unit": "ns",
            "range": "± 85601.46600218557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4181661.913043478,
            "unit": "ns",
            "range": "± 157462.25452354198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4344708.08,
            "unit": "ns",
            "range": "± 112476.87579265646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7490941.478260869,
            "unit": "ns",
            "range": "± 185360.96659561546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032094.652604166,
            "unit": "ns",
            "range": "± 40476.95046413131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900792.08359375,
            "unit": "ns",
            "range": "± 10693.97115016728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227140.5790364584,
            "unit": "ns",
            "range": "± 7869.280732859697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2375508.7513020835,
            "unit": "ns",
            "range": "± 8255.402203531197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816868.7882161458,
            "unit": "ns",
            "range": "± 3497.7638241765485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775314.1859375,
            "unit": "ns",
            "range": "± 4948.106616392359"
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
          "id": "98cac93affebc1336582fde9fbccd76913ed7362",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:42:38+09:00",
          "tree_id": "fc7da80e9609ddef134fa5993eb311980d494355",
          "url": "https://github.com/moreal/libplanet/commit/98cac93affebc1336582fde9fbccd76913ed7362"
        },
        "date": 1682578992753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8640742.694915254,
            "unit": "ns",
            "range": "± 381022.91060839314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20384065.722222224,
            "unit": "ns",
            "range": "± 933285.2975025902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53188123.38095238,
            "unit": "ns",
            "range": "± 1938992.7635307042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114099434.44680852,
            "unit": "ns",
            "range": "± 8371781.045024098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217047944,
            "unit": "ns",
            "range": "± 6398113.333652152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82357.04347826086,
            "unit": "ns",
            "range": "± 14909.657344116531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405205.829787234,
            "unit": "ns",
            "range": "± 57738.103137177255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386940.6030927835,
            "unit": "ns",
            "range": "± 50603.06723379945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348060.6703296703,
            "unit": "ns",
            "range": "± 38820.76709244249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4493561.65625,
            "unit": "ns",
            "range": "± 322548.22133205144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939457.9096385543,
            "unit": "ns",
            "range": "± 209306.82770738204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21338.744680851065,
            "unit": "ns",
            "range": "± 3735.9302822585078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117654.14583333333,
            "unit": "ns",
            "range": "± 20513.89142532658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111508.04838709677,
            "unit": "ns",
            "range": "± 14067.712336438555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120413.28350515464,
            "unit": "ns",
            "range": "± 15294.046568590835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9275.142857142857,
            "unit": "ns",
            "range": "± 1455.884775448058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21842.547368421052,
            "unit": "ns",
            "range": "± 3962.6618008939745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1817261.0684210525,
            "unit": "ns",
            "range": "± 220895.58886962058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3187264.4846153846,
            "unit": "ns",
            "range": "± 148104.7514108988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2714209.9895833335,
            "unit": "ns",
            "range": "± 241810.62298692792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7330901.563829787,
            "unit": "ns",
            "range": "± 551593.1115505695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570363.9484536084,
            "unit": "ns",
            "range": "± 253970.2897578266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702221.8736842107,
            "unit": "ns",
            "range": "± 325672.67724953155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4902098.708333333,
            "unit": "ns",
            "range": "± 362374.2979382074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4711397.436170213,
            "unit": "ns",
            "range": "± 309178.01464679977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9170844.520833334,
            "unit": "ns",
            "range": "± 934242.3447041878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6818207.872159091,
            "unit": "ns",
            "range": "± 163384.9923060281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2036506.021484375,
            "unit": "ns",
            "range": "± 53416.62587680131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396676.8226376488,
            "unit": "ns",
            "range": "± 33055.784604333414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2991324.2597853537,
            "unit": "ns",
            "range": "± 185403.89935412194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850278.1189385776,
            "unit": "ns",
            "range": "± 24333.624486193174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856395.9614955357,
            "unit": "ns",
            "range": "± 13889.111621146621"
          }
        ]
      }
    ]
  }
}