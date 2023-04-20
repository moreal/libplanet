window.BENCHMARK_DATA = {
  "lastUpdate": 1681970146618,
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
          "id": "66cd4ec41dba46d1f34b718f977714284c443b06",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:16:18+09:00",
          "tree_id": "65975546470a4d2376acc0fcd547625311518773",
          "url": "https://github.com/moreal/libplanet/commit/66cd4ec41dba46d1f34b718f977714284c443b06"
        },
        "date": 1681479252871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1674174.4897959183,
            "unit": "ns",
            "range": "± 152422.6261792733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3089345.263157895,
            "unit": "ns",
            "range": "± 191665.37815883814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650771.4285714286,
            "unit": "ns",
            "range": "± 224852.42878421108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715490.52631579,
            "unit": "ns",
            "range": "± 432247.81851551554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55718.279569892475,
            "unit": "ns",
            "range": "± 4830.517710947112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8641183.333333334,
            "unit": "ns",
            "range": "± 182071.79013978495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23333292.85714286,
            "unit": "ns",
            "range": "± 265227.6887282545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59502031.03448276,
            "unit": "ns",
            "range": "± 1690504.08059326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116205045.16129032,
            "unit": "ns",
            "range": "± 3437786.922215968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242792510,
            "unit": "ns",
            "range": "± 4402680.391664021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982498.463541667,
            "unit": "ns",
            "range": "± 111920.72507431432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889194.8372395833,
            "unit": "ns",
            "range": "± 31189.445691727404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410684.6354166667,
            "unit": "ns",
            "range": "± 20360.662898582395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211913.0729166665,
            "unit": "ns",
            "range": "± 56214.276379198396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001483.6067708334,
            "unit": "ns",
            "range": "± 16740.002113316543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913411.0163762019,
            "unit": "ns",
            "range": "± 8494.836930767859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635838.596491228,
            "unit": "ns",
            "range": "± 157084.75164061913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4020774.074074074,
            "unit": "ns",
            "range": "± 110039.13497056958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4619264.285714285,
            "unit": "ns",
            "range": "± 75122.57273327328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4993966.666666667,
            "unit": "ns",
            "range": "± 201357.86815187198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8114080,
            "unit": "ns",
            "range": "± 236610.7823934226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373916.6666666667,
            "unit": "ns",
            "range": "± 15546.009012811457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304324.3243243243,
            "unit": "ns",
            "range": "± 15263.528118790191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265148.93617021275,
            "unit": "ns",
            "range": "± 16045.672345110208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6278636.666666667,
            "unit": "ns",
            "range": "± 169526.48553795533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4453924,
            "unit": "ns",
            "range": "± 103126.29910292847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25426.59574468085,
            "unit": "ns",
            "range": "± 2943.524897816854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113247.31182795699,
            "unit": "ns",
            "range": "± 9200.325979549165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109925.77319587629,
            "unit": "ns",
            "range": "± 11760.219654539793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 223120.61855670103,
            "unit": "ns",
            "range": "± 27226.028975597394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9454.255319148937,
            "unit": "ns",
            "range": "± 1319.959668137264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25865.59139784946,
            "unit": "ns",
            "range": "± 2865.5561196228223"
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
          "id": "2306ec5bfff95ae38f4ecca45447b50fa9d13d4c",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:43:57+09:00",
          "tree_id": "26abe037d1fb1689b252969e1fa969d97ebba9cd",
          "url": "https://github.com/moreal/libplanet/commit/2306ec5bfff95ae38f4ecca45447b50fa9d13d4c"
        },
        "date": 1681480580028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039914,
            "unit": "ns",
            "range": "± 112232.94950029315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867132.8767123288,
            "unit": "ns",
            "range": "± 92023.00898083787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640863.2653061224,
            "unit": "ns",
            "range": "± 131609.21957783826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3898191.891891892,
            "unit": "ns",
            "range": "± 179732.96688535693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33425.84269662921,
            "unit": "ns",
            "range": "± 1829.463911162828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5052071.428571428,
            "unit": "ns",
            "range": "± 47439.263656424264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12816085.714285715,
            "unit": "ns",
            "range": "± 126775.16656326214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32935484.615384616,
            "unit": "ns",
            "range": "± 112174.33489999577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65057306.666666664,
            "unit": "ns",
            "range": "± 952210.7985905122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130741080,
            "unit": "ns",
            "range": "± 1611140.1598158458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3598397.237723214,
            "unit": "ns",
            "range": "± 9936.176285444102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1105889.760044643,
            "unit": "ns",
            "range": "± 2545.379655902281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 828508.5309709822,
            "unit": "ns",
            "range": "± 1141.0643303187273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1877590.887920673,
            "unit": "ns",
            "range": "± 2616.5633995341673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610478.7890625,
            "unit": "ns",
            "range": "± 2456.7603915161594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 531266.9661458334,
            "unit": "ns",
            "range": "± 801.1425803669064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220287.5,
            "unit": "ns",
            "range": "± 101906.59199513785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247317.8947368423,
            "unit": "ns",
            "range": "± 148220.46832189968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2836344.871794872,
            "unit": "ns",
            "range": "± 98775.899864603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2937046.6666666665,
            "unit": "ns",
            "range": "± 129939.55761340872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4884344.736842105,
            "unit": "ns",
            "range": "± 161683.08958588398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229009.0909090909,
            "unit": "ns",
            "range": "± 5715.295466791483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185772.3404255319,
            "unit": "ns",
            "range": "± 7100.541991794942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173461.90476190476,
            "unit": "ns",
            "range": "± 9315.525384842214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3848300,
            "unit": "ns",
            "range": "± 51759.99346094359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2646050,
            "unit": "ns",
            "range": "± 49323.46297655914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14731.958762886597,
            "unit": "ns",
            "range": "± 1800.6680699900764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65027.16049382716,
            "unit": "ns",
            "range": "± 3408.3724981902665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57883.15789473684,
            "unit": "ns",
            "range": "± 5156.459543911454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131991.57894736843,
            "unit": "ns",
            "range": "± 16102.409382012838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4802.127659574468,
            "unit": "ns",
            "range": "± 641.2317990297555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15396.875,
            "unit": "ns",
            "range": "± 1921.2908558132417"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "cd6c759315e0de39476267f3b7078839ade03d40",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-20T13:18:05+09:00",
          "tree_id": "7c63208914b931bfb0d3ea09f267360dfe37dc8e",
          "url": "https://github.com/moreal/libplanet/commit/cd6c759315e0de39476267f3b7078839ade03d40"
        },
        "date": 1681965297742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352083.8383838383,
            "unit": "ns",
            "range": "± 105316.78230033455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442008.5714285714,
            "unit": "ns",
            "range": "± 79697.65798990351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198310.4166666665,
            "unit": "ns",
            "range": "± 158356.81460693805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5274794,
            "unit": "ns",
            "range": "± 198466.97808914393"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43141.17647058824,
            "unit": "ns",
            "range": "± 2326.0069052454037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6796200,
            "unit": "ns",
            "range": "± 50458.21467879565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17685692.85714286,
            "unit": "ns",
            "range": "± 46438.70176886971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45615383.333333336,
            "unit": "ns",
            "range": "± 216358.40195203444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91742093.33333333,
            "unit": "ns",
            "range": "± 514053.67349927116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187667273.33333334,
            "unit": "ns",
            "range": "± 1293069.6210770635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797324.609375,
            "unit": "ns",
            "range": "± 4643.44341760088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515326.4369419643,
            "unit": "ns",
            "range": "± 3773.0857730501066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148019.989483173,
            "unit": "ns",
            "range": "± 1509.9032593913435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667143.828125,
            "unit": "ns",
            "range": "± 33992.67009524819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829750.9556361607,
            "unit": "ns",
            "range": "± 1312.2623617926843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751035.7356770834,
            "unit": "ns",
            "range": "± 605.443746408526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2969654.285714286,
            "unit": "ns",
            "range": "± 96504.97805769382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106062.5,
            "unit": "ns",
            "range": "± 57687.24729088744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3938268.4210526315,
            "unit": "ns",
            "range": "± 86178.03311640889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4051660,
            "unit": "ns",
            "range": "± 103751.01204325672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6788710.256410256,
            "unit": "ns",
            "range": "± 231617.12712199913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301943.75,
            "unit": "ns",
            "range": "± 8498.346613388414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245786.66666666666,
            "unit": "ns",
            "range": "± 6197.648794076076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229990.32258064515,
            "unit": "ns",
            "range": "± 13001.137613402787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5299307.692307692,
            "unit": "ns",
            "range": "± 30485.282283381206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3528600,
            "unit": "ns",
            "range": "± 35267.52701194771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17705.670103092783,
            "unit": "ns",
            "range": "± 2159.9560697772763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86760.20408163265,
            "unit": "ns",
            "range": "± 7595.532324868843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82036,
            "unit": "ns",
            "range": "± 8381.467290361154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99479.59183673469,
            "unit": "ns",
            "range": "± 14031.128568431343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5986.315789473684,
            "unit": "ns",
            "range": "± 922.140263286216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17154.166666666668,
            "unit": "ns",
            "range": "± 1597.0312369925095"
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
          "id": "e919b337ef3820d37bbd3716341bbb4c460eaae0",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-20T14:40:13+09:00",
          "tree_id": "19a0036b34d31080b0617c0b75ffdc63eeca8a0c",
          "url": "https://github.com/moreal/libplanet/commit/e919b337ef3820d37bbd3716341bbb4c460eaae0"
        },
        "date": 1681970132730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1419564,
            "unit": "ns",
            "range": "± 131301.99712298685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562567.5324675324,
            "unit": "ns",
            "range": "± 130341.48109925313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2218668.3673469387,
            "unit": "ns",
            "range": "± 145520.00932095517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584335.714285715,
            "unit": "ns",
            "range": "± 299250.03875868424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51173.07692307692,
            "unit": "ns",
            "range": "± 3218.456390641566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7371614.814814814,
            "unit": "ns",
            "range": "± 205874.36554234815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20234626.666666668,
            "unit": "ns",
            "range": "± 191785.86446744142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51250653.333333336,
            "unit": "ns",
            "range": "± 447448.90509047697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100043580,
            "unit": "ns",
            "range": "± 761517.948573768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203441928.57142857,
            "unit": "ns",
            "range": "± 1442017.0639012626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4818032.979910715,
            "unit": "ns",
            "range": "± 13085.934662666783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526943.4700520833,
            "unit": "ns",
            "range": "± 3461.177267915602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180414.6744791667,
            "unit": "ns",
            "range": "± 3476.6901364657865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690260.546875,
            "unit": "ns",
            "range": "± 6523.260700528681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834905.52734375,
            "unit": "ns",
            "range": "± 1706.6973635419117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764249.3815104166,
            "unit": "ns",
            "range": "± 3200.267540584337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3185936.3636363638,
            "unit": "ns",
            "range": "± 74644.94717345669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498285.714285714,
            "unit": "ns",
            "range": "± 55184.55549186897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3961600,
            "unit": "ns",
            "range": "± 105923.79685765017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4359807.142857143,
            "unit": "ns",
            "range": "± 233628.79876208646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7045686.486486486,
            "unit": "ns",
            "range": "± 226273.8424050751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323605.4054054054,
            "unit": "ns",
            "range": "± 9748.103688693793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267028.125,
            "unit": "ns",
            "range": "± 7835.598434234659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228732.96703296702,
            "unit": "ns",
            "range": "± 12790.092128458524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5322746.153846154,
            "unit": "ns",
            "range": "± 57742.439842583364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3602203.3333333335,
            "unit": "ns",
            "range": "± 63082.06521968785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22022.680412371134,
            "unit": "ns",
            "range": "± 2176.6040615026495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100205.20833333333,
            "unit": "ns",
            "range": "± 7185.326711858017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89837.36842105263,
            "unit": "ns",
            "range": "± 8360.230604898245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119372.22222222222,
            "unit": "ns",
            "range": "± 15506.388121105387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8151.041666666667,
            "unit": "ns",
            "range": "± 1315.5743025819688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22563.26530612245,
            "unit": "ns",
            "range": "± 2342.101785629276"
          }
        ]
      }
    ]
  }
}