window.BENCHMARK_DATA = {
  "lastUpdate": 1689607715266,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/moreal/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589875231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357876.1666666667,
            "unit": "ns",
            "range": "± 11789.213368886953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352373.27777777775,
            "unit": "ns",
            "range": "± 11777.619731898561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322496.8,
            "unit": "ns",
            "range": "± 9332.438534118693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5687584.923076923,
            "unit": "ns",
            "range": "± 59546.32354654867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5048881.533333333,
            "unit": "ns",
            "range": "± 47837.17012931422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27965.510869565216,
            "unit": "ns",
            "range": "± 2521.978973928113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119219.40425531915,
            "unit": "ns",
            "range": "± 7072.407227059118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111354.375,
            "unit": "ns",
            "range": "± 7904.087237492685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129844.11224489796,
            "unit": "ns",
            "range": "± 14568.857244123245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8063.408163265306,
            "unit": "ns",
            "range": "± 1304.9208834629105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25965.25773195876,
            "unit": "ns",
            "range": "± 2763.060178039131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1935062.1855670102,
            "unit": "ns",
            "range": "± 149819.64912738482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3629228.922077922,
            "unit": "ns",
            "range": "± 185900.78308559099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2390286.7319587627,
            "unit": "ns",
            "range": "± 200693.0399044622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6342092.021276596,
            "unit": "ns",
            "range": "± 246318.53410436987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7541358.5796875,
            "unit": "ns",
            "range": "± 52123.387412754746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2333742.20625,
            "unit": "ns",
            "range": "± 1489.1727488383708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1686446.8852864583,
            "unit": "ns",
            "range": "± 3553.331783378147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211941.5633370536,
            "unit": "ns",
            "range": "± 6568.827362692997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027778.164207176,
            "unit": "ns",
            "range": "± 28201.39370777375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927062.8901742789,
            "unit": "ns",
            "range": "± 560.8460535541578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4430839.714285715,
            "unit": "ns",
            "range": "± 42158.24182844837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4666019.125,
            "unit": "ns",
            "range": "± 121253.73652846385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5605888,
            "unit": "ns",
            "range": "± 119950.25007109258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5246159.960784313,
            "unit": "ns",
            "range": "± 214070.2497721681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8134418.4,
            "unit": "ns",
            "range": "± 216628.19218652035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10402874.214285715,
            "unit": "ns",
            "range": "± 50693.189630862136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27593430.55,
            "unit": "ns",
            "range": "± 567424.136877992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68106084.13333334,
            "unit": "ns",
            "range": "± 250466.61411364266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139538505,
            "unit": "ns",
            "range": "± 394863.76389006444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280161345.2,
            "unit": "ns",
            "range": "± 1179567.3521772537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62819.239130434784,
            "unit": "ns",
            "range": "± 5919.416195541112"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d4106e67ce0b55a645cd1f1b3caf8985403196cc",
          "message": "chore: perform additional project post-processing",
          "timestamp": "2023-07-17T23:33:35+09:00",
          "tree_id": "440fc247a63d10539bb5663c3d23af80d7fe83d4",
          "url": "https://github.com/moreal/libplanet/commit/d4106e67ce0b55a645cd1f1b3caf8985403196cc"
        },
        "date": 1689605206205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281517.07692307694,
            "unit": "ns",
            "range": "± 7694.213664426415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267847.9024390244,
            "unit": "ns",
            "range": "± 7856.265063008242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237124.7142857143,
            "unit": "ns",
            "range": "± 10145.477573264376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4329698.857142857,
            "unit": "ns",
            "range": "± 22522.96659944157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4006960.714285714,
            "unit": "ns",
            "range": "± 46944.53957339705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19119.548387096773,
            "unit": "ns",
            "range": "± 1591.433859326708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88161.31958762887,
            "unit": "ns",
            "range": "± 6658.185375201703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72865.475,
            "unit": "ns",
            "range": "± 2572.868996111898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92560.38144329897,
            "unit": "ns",
            "range": "± 11406.270298103675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4584.714285714285,
            "unit": "ns",
            "range": "± 621.0126748046623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18679.432989690722,
            "unit": "ns",
            "range": "± 1852.138330120173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392956.5813953488,
            "unit": "ns",
            "range": "± 67302.58599514935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628840.3333333335,
            "unit": "ns",
            "range": "± 62092.947335694524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1798734.2444444445,
            "unit": "ns",
            "range": "± 100122.1009246088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4877741.318181818,
            "unit": "ns",
            "range": "± 180986.94027570475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108154.011160715,
            "unit": "ns",
            "range": "± 8988.648592090041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878828.9373372395,
            "unit": "ns",
            "range": "± 1069.334221958416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347217.782001202,
            "unit": "ns",
            "range": "± 828.2922577474058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586990.002278646,
            "unit": "ns",
            "range": "± 1546.5059776830462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909243.3359375,
            "unit": "ns",
            "range": "± 4238.120056509063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729430.6992938702,
            "unit": "ns",
            "range": "± 1611.093869643072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3288413.6428571427,
            "unit": "ns",
            "range": "± 92851.65785560531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504240.727272727,
            "unit": "ns",
            "range": "± 83458.49886773313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353073.875,
            "unit": "ns",
            "range": "± 111368.13963853806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3866893.263157895,
            "unit": "ns",
            "range": "± 81299.21909959946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6380254.923076923,
            "unit": "ns",
            "range": "± 169697.6838559497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7455798.214285715,
            "unit": "ns",
            "range": "± 28430.163968191282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19486299.4,
            "unit": "ns",
            "range": "± 143177.26665261594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50225999.07692308,
            "unit": "ns",
            "range": "± 166433.27800275877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99452236.06666666,
            "unit": "ns",
            "range": "± 590870.5655235051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199733856.2142857,
            "unit": "ns",
            "range": "± 843746.9350951676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45761.11392405063,
            "unit": "ns",
            "range": "± 2381.1997890922266"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "1e4483046617f417f94a4fad5591bfd301d800df",
          "message": "test: fix `Libplanet.Analyzer` tests",
          "timestamp": "2023-07-18T00:12:19+09:00",
          "tree_id": "94b1e351afba31c9f552a253c9180999e1aa847f",
          "url": "https://github.com/moreal/libplanet/commit/1e4483046617f417f94a4fad5591bfd301d800df"
        },
        "date": 1689607708201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335629.28571428574,
            "unit": "ns",
            "range": "± 7948.721357192345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317764.23076923075,
            "unit": "ns",
            "range": "± 11080.265514255369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279475.86440677964,
            "unit": "ns",
            "range": "± 12266.545993146854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5025531.323529412,
            "unit": "ns",
            "range": "± 159415.35986368413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4664391.066666666,
            "unit": "ns",
            "range": "± 65036.55821642237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21468,
            "unit": "ns",
            "range": "± 1341.04997835444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98641.89024390244,
            "unit": "ns",
            "range": "± 5245.056753346866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86398.2,
            "unit": "ns",
            "range": "± 2527.6906510857316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102492.52040816327,
            "unit": "ns",
            "range": "± 13190.087509170635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4824.083333333333,
            "unit": "ns",
            "range": "± 642.0340319995615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20078.010638297874,
            "unit": "ns",
            "range": "± 1314.501340463051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700762.1149425288,
            "unit": "ns",
            "range": "± 89222.24807375945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3157526.3243243243,
            "unit": "ns",
            "range": "± 105390.62407513984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157095.797752809,
            "unit": "ns",
            "range": "± 119432.58308038927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6173596.76056338,
            "unit": "ns",
            "range": "± 302839.33294902975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7175488.4078125,
            "unit": "ns",
            "range": "± 60750.080675856865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2299267.4268229166,
            "unit": "ns",
            "range": "± 7145.7389067439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1642339.2765625,
            "unit": "ns",
            "range": "± 9021.109790432436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118937.6858258927,
            "unit": "ns",
            "range": "± 4069.3312968699643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992268.2352864583,
            "unit": "ns",
            "range": "± 2432.1875380011784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921617.8779296875,
            "unit": "ns",
            "range": "± 2494.8150153849533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4069913.217391304,
            "unit": "ns",
            "range": "± 100692.47717406994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102598.8571428573,
            "unit": "ns",
            "range": "± 131860.53521633308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5005519.633333334,
            "unit": "ns",
            "range": "± 144258.51161154464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4670933.523809524,
            "unit": "ns",
            "range": "± 163482.06218230017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7427973,
            "unit": "ns",
            "range": "± 238115.84182259347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9724526.65,
            "unit": "ns",
            "range": "± 222921.18016093655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25730369.214285713,
            "unit": "ns",
            "range": "± 730767.6091090213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65312625.66,
            "unit": "ns",
            "range": "± 1557273.4150723896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129130523.33333333,
            "unit": "ns",
            "range": "± 2046487.6632308923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254395825.57142857,
            "unit": "ns",
            "range": "± 3956731.9009808456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54155.15957446808,
            "unit": "ns",
            "range": "± 3316.5014028200476"
          }
        ]
      }
    ]
  }
}