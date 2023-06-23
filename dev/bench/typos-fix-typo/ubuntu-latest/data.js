window.BENCHMARK_DATA = {
  "lastUpdate": 1687507173504,
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
          "id": "028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a",
          "message": "ci(gh-actions): check typos",
          "timestamp": "2023-06-23T16:31:07+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a"
        },
        "date": 1687506373789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4095101.3636363638,
            "unit": "ns",
            "range": "± 152211.88066762828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4442232.733333333,
            "unit": "ns",
            "range": "± 68539.32729511333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5244756.176470588,
            "unit": "ns",
            "range": "± 104487.06428503203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5476640,
            "unit": "ns",
            "range": "± 152852.96272989834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8526190.644444445,
            "unit": "ns",
            "range": "± 318674.2734706593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9309287.615384616,
            "unit": "ns",
            "range": "± 144568.94519544326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26771719.64285714,
            "unit": "ns",
            "range": "± 354848.14907237916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64962613.571428575,
            "unit": "ns",
            "range": "± 907644.6916683028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131733265.26666667,
            "unit": "ns",
            "range": "± 2136354.516275814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262504442.2142857,
            "unit": "ns",
            "range": "± 2814063.165576018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341842.8695652174,
            "unit": "ns",
            "range": "± 8618.287676923615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324993.693877551,
            "unit": "ns",
            "range": "± 12961.373095027526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285759.1746031746,
            "unit": "ns",
            "range": "± 13104.566996993814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5385516.421052632,
            "unit": "ns",
            "range": "± 115059.16203767897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4993712.333333333,
            "unit": "ns",
            "range": "± 104233.5460475516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24482.297872340427,
            "unit": "ns",
            "range": "± 1697.4438836895301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109639.68085106384,
            "unit": "ns",
            "range": "± 6209.174487081775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87965.97872340426,
            "unit": "ns",
            "range": "± 3150.4198373726927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106704.31958762887,
            "unit": "ns",
            "range": "± 12349.574438135503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5656.0204081632655,
            "unit": "ns",
            "range": "± 827.794688295936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20745.08510638298,
            "unit": "ns",
            "range": "± 1487.7808953871604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56107.23188405797,
            "unit": "ns",
            "range": "± 2726.623586183683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7043266.254464285,
            "unit": "ns",
            "range": "± 39271.089433307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291200.6626302083,
            "unit": "ns",
            "range": "± 6755.222788057884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1647579.255580357,
            "unit": "ns",
            "range": "± 9883.387320907372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3134321.797265625,
            "unit": "ns",
            "range": "± 11300.040555929698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994436.934375,
            "unit": "ns",
            "range": "± 10270.67128039669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924264.9417643229,
            "unit": "ns",
            "range": "± 7412.831977492359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1840412.8101265824,
            "unit": "ns",
            "range": "± 94808.61969090287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3318209.1666666665,
            "unit": "ns",
            "range": "± 121014.53338659956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2814401.5,
            "unit": "ns",
            "range": "± 140015.99437943383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668006.264705882,
            "unit": "ns",
            "range": "± 204881.68867678006"
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
          "id": "9a382cb20532954b5e049176dcd81a078af6ae8f",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:34:43+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/9a382cb20532954b5e049176dcd81a078af6ae8f"
        },
        "date": 1687506672440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3895878.95,
            "unit": "ns",
            "range": "± 237468.58208925728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3935385.173469388,
            "unit": "ns",
            "range": "± 259710.47640552363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4997077.575757576,
            "unit": "ns",
            "range": "± 315902.0495811207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4957164.87,
            "unit": "ns",
            "range": "± 335924.73088243656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8266655.545454546,
            "unit": "ns",
            "range": "± 420430.7184810767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9482744.602040816,
            "unit": "ns",
            "range": "± 587837.9011177226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24726221.684210528,
            "unit": "ns",
            "range": "± 834455.788118256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62240361.487804875,
            "unit": "ns",
            "range": "± 2231980.1575225205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120639518.23255815,
            "unit": "ns",
            "range": "± 4466364.298422738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245808839.68,
            "unit": "ns",
            "range": "± 6276651.57499933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312763.9166666667,
            "unit": "ns",
            "range": "± 22436.91253113548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311607.59375,
            "unit": "ns",
            "range": "± 23044.412321738135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272977.5,
            "unit": "ns",
            "range": "± 25485.19408807927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5188092.7,
            "unit": "ns",
            "range": "± 232030.5742123186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4516639.655555556,
            "unit": "ns",
            "range": "± 250758.79746961643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19462.159574468085,
            "unit": "ns",
            "range": "± 2233.870368603458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96243.78947368421,
            "unit": "ns",
            "range": "± 9116.374516051283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86163.76530612246,
            "unit": "ns",
            "range": "± 9365.395276031317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103939.94845360825,
            "unit": "ns",
            "range": "± 16299.783213902932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5718.5,
            "unit": "ns",
            "range": "± 836.7485704218997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21013.69387755102,
            "unit": "ns",
            "range": "± 2000.5882248801577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53217.329545454544,
            "unit": "ns",
            "range": "± 3903.060657912828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6641569.578125,
            "unit": "ns",
            "range": "± 66384.39713271229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2073419.0757211538,
            "unit": "ns",
            "range": "± 22616.684935000987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514672.8841145833,
            "unit": "ns",
            "range": "± 19328.29762119711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2906596.2137276786,
            "unit": "ns",
            "range": "± 21641.439585178872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947753.7289782072,
            "unit": "ns",
            "range": "± 20729.653120503688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852151.4659598215,
            "unit": "ns",
            "range": "± 10645.566716348843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663748.9263157896,
            "unit": "ns",
            "range": "± 122892.95819145904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3276057.2040816327,
            "unit": "ns",
            "range": "± 203148.98230745795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2730111.0215053763,
            "unit": "ns",
            "range": "± 178137.95490494696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6692175.84,
            "unit": "ns",
            "range": "± 486921.3773136736"
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
          "id": "ad0c5c9824be30eb969ce3b4003f9fbcefcb262c",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:34:59+09:00",
          "tree_id": "6e70ad7a273bb935667e446f37f0df2611e0d32f",
          "url": "https://github.com/moreal/libplanet/commit/ad0c5c9824be30eb969ce3b4003f9fbcefcb262c"
        },
        "date": 1687506869049,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4369140.5,
            "unit": "ns",
            "range": "± 316247.1096874328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4643337.602739726,
            "unit": "ns",
            "range": "± 226503.9556520383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5897570.461538462,
            "unit": "ns",
            "range": "± 303915.14746212814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5771260.101449275,
            "unit": "ns",
            "range": "± 276801.2921170722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9569473.371428572,
            "unit": "ns",
            "range": "± 465062.3709481536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10826928.09375,
            "unit": "ns",
            "range": "± 916910.089365204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28552525.11904762,
            "unit": "ns",
            "range": "± 1528543.038134408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72497946.6111111,
            "unit": "ns",
            "range": "± 1522794.1359343026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 150293075.33333334,
            "unit": "ns",
            "range": "± 4059917.4509379836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292704401,
            "unit": "ns",
            "range": "± 6666347.238377034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394115.4387755102,
            "unit": "ns",
            "range": "± 44339.739196594135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388733.08510638296,
            "unit": "ns",
            "range": "± 43704.32126555681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354961.66315789474,
            "unit": "ns",
            "range": "± 37671.31776146583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5539825.872340426,
            "unit": "ns",
            "range": "± 315659.4539608211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5166952.715789474,
            "unit": "ns",
            "range": "± 316018.91891816485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32142.454545454544,
            "unit": "ns",
            "range": "± 10601.69007153637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129393.10309278351,
            "unit": "ns",
            "range": "± 20887.394029496063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128761.5,
            "unit": "ns",
            "range": "± 26778.820986130373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144297.19587628866,
            "unit": "ns",
            "range": "± 26461.567781028825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7692.952941176471,
            "unit": "ns",
            "range": "± 1739.031544292632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30303.03,
            "unit": "ns",
            "range": "± 11209.038148352074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67789.13265306123,
            "unit": "ns",
            "range": "± 15688.256316766765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7750327.134014423,
            "unit": "ns",
            "range": "± 188454.2049502555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2429376.5318667763,
            "unit": "ns",
            "range": "± 52831.47542409123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1800904.4757254464,
            "unit": "ns",
            "range": "± 19790.6368383678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3352554.905989583,
            "unit": "ns",
            "range": "± 49085.30823041192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1113088.6639322916,
            "unit": "ns",
            "range": "± 15001.118576932546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1032885.1983816965,
            "unit": "ns",
            "range": "± 15232.413171903967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1916223.625,
            "unit": "ns",
            "range": "± 192617.57916436938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3698254.595744681,
            "unit": "ns",
            "range": "± 210106.20076309895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2959818.4431818184,
            "unit": "ns",
            "range": "± 214727.23940727225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7851886.627659574,
            "unit": "ns",
            "range": "± 619200.7109229474"
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
          "id": "4ae19cfd9899a8b4a86e6a4a5aed2c552861b82f",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:35:48+09:00",
          "tree_id": "c0ab20f2713ce04ba997442e673b80db15da4024",
          "url": "https://github.com/moreal/libplanet/commit/4ae19cfd9899a8b4a86e6a4a5aed2c552861b82f"
        },
        "date": 1687507048002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4264170.895833333,
            "unit": "ns",
            "range": "± 439035.6839853135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4488862.2,
            "unit": "ns",
            "range": "± 501853.0900555143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6038061.71,
            "unit": "ns",
            "range": "± 546690.5168357943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5617264.795918368,
            "unit": "ns",
            "range": "± 553445.0992415916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9513974.591836736,
            "unit": "ns",
            "range": "± 651165.4058512155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9975884.87,
            "unit": "ns",
            "range": "± 1276942.7184649352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26978491.82828283,
            "unit": "ns",
            "range": "± 2390558.5653238413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68231547.12,
            "unit": "ns",
            "range": "± 6321807.467176828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139102035.55,
            "unit": "ns",
            "range": "± 10999863.574963441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298080167.5,
            "unit": "ns",
            "range": "± 12897777.565605426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386031.8510638298,
            "unit": "ns",
            "range": "± 34896.902767319814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 380277.670212766,
            "unit": "ns",
            "range": "± 39318.1385637199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336886.902173913,
            "unit": "ns",
            "range": "± 32737.642403740072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5664118.262626262,
            "unit": "ns",
            "range": "± 360415.2642894703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5114585.8,
            "unit": "ns",
            "range": "± 425152.3462235792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22565.42391304348,
            "unit": "ns",
            "range": "± 6162.398591517801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121266.51041666667,
            "unit": "ns",
            "range": "± 24338.449421264882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108604.74468085106,
            "unit": "ns",
            "range": "± 23135.77236310335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135705.2365591398,
            "unit": "ns",
            "range": "± 22524.574923073924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6803.426966292135,
            "unit": "ns",
            "range": "± 1637.4701932584944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24127.724489795917,
            "unit": "ns",
            "range": "± 8984.236188590758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66861.57142857143,
            "unit": "ns",
            "range": "± 14501.314032887238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7827612.4546875,
            "unit": "ns",
            "range": "± 124505.09636004895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2440113.400625,
            "unit": "ns",
            "range": "± 62733.19351875274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2018556.1422909007,
            "unit": "ns",
            "range": "± 63458.9268025323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3463784.4778320314,
            "unit": "ns",
            "range": "± 114891.75927628494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1114836.0479029606,
            "unit": "ns",
            "range": "± 38171.129453472444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1023778.3570421007,
            "unit": "ns",
            "range": "± 33282.12527080044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713834.4343434344,
            "unit": "ns",
            "range": "± 303229.29463809665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3620066.616161616,
            "unit": "ns",
            "range": "± 382168.6578234347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2757388.4166666665,
            "unit": "ns",
            "range": "± 381954.91571012646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7548947.948979592,
            "unit": "ns",
            "range": "± 813813.2899000011"
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
          "id": "4aeb55a981534c977bcf6b2b6faa489b5b39a653",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:37:43+09:00",
          "tree_id": "fd70e16d2e92951b7ac0ee80ca30552b67d76b40",
          "url": "https://github.com/moreal/libplanet/commit/4aeb55a981534c977bcf6b2b6faa489b5b39a653"
        },
        "date": 1687507167397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594477.474747475,
            "unit": "ns",
            "range": "± 325961.7206281187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3871822.14,
            "unit": "ns",
            "range": "± 385029.8945818068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5213896.545454546,
            "unit": "ns",
            "range": "± 493387.3281007048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685083.231578947,
            "unit": "ns",
            "range": "± 362181.0874898771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8686527.114583334,
            "unit": "ns",
            "range": "± 641466.0153720558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8712821.525252525,
            "unit": "ns",
            "range": "± 554742.0437146816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24041438.56122449,
            "unit": "ns",
            "range": "± 1534047.7107864863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62757571.20224719,
            "unit": "ns",
            "range": "± 3475730.9531060415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122568407.07142857,
            "unit": "ns",
            "range": "± 7568144.027584461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249472959.69072166,
            "unit": "ns",
            "range": "± 14377318.051156234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365976.67346938775,
            "unit": "ns",
            "range": "± 62959.38516558401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358745.4183673469,
            "unit": "ns",
            "range": "± 63989.95104418815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295269.5425531915,
            "unit": "ns",
            "range": "± 43438.82612813843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5006510.82,
            "unit": "ns",
            "range": "± 427960.1931761426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4437306.298969072,
            "unit": "ns",
            "range": "± 378455.46271622693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25681.59793814433,
            "unit": "ns",
            "range": "± 9651.867677272574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110965.68686868687,
            "unit": "ns",
            "range": "± 20257.3973788395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105269.70707070707,
            "unit": "ns",
            "range": "± 20539.70084745912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122942.5744680851,
            "unit": "ns",
            "range": "± 31391.480412082143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5633.408602150537,
            "unit": "ns",
            "range": "± 1254.296990319756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27204.0202020202,
            "unit": "ns",
            "range": "± 9531.874156657925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62134.154639175256,
            "unit": "ns",
            "range": "± 17782.294158176584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6933172.425986842,
            "unit": "ns",
            "range": "± 151756.55784363588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2176601.984114583,
            "unit": "ns",
            "range": "± 39615.01029163621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1602434.4940429688,
            "unit": "ns",
            "range": "± 36660.943100929464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2965368.3125,
            "unit": "ns",
            "range": "± 55415.615579735364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000591.2370768229,
            "unit": "ns",
            "range": "± 17017.90535479644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901286.4342447916,
            "unit": "ns",
            "range": "± 13662.848870293194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549586.663265306,
            "unit": "ns",
            "range": "± 206277.48387508004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3097747.65625,
            "unit": "ns",
            "range": "± 354158.1036125213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2527392.18556701,
            "unit": "ns",
            "range": "± 295183.4532503801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6649127.585858586,
            "unit": "ns",
            "range": "± 652689.9846416916"
          }
        ]
      }
    ]
  }
}