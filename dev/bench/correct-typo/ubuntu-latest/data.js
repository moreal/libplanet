window.BENCHMARK_DATA = {
  "lastUpdate": 1682504632718,
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
          "id": "433fc53db9ec8867e161247622fca7de244846f5",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T16:40:01+09:00",
          "tree_id": "15e06d5fc334734cf9bcba5d65cba7026a368e93",
          "url": "https://github.com/moreal/libplanet/commit/433fc53db9ec8867e161247622fca7de244846f5"
        },
        "date": 1682495617843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7512220.076923077,
            "unit": "ns",
            "range": "± 40861.0306230389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20851689.333333332,
            "unit": "ns",
            "range": "± 325890.5064195349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52847356.266666666,
            "unit": "ns",
            "range": "± 685227.4905642095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106002389.33333333,
            "unit": "ns",
            "range": "± 1341076.7964193479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212583538.82352942,
            "unit": "ns",
            "range": "± 4150947.2306178384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49220.62666666666,
            "unit": "ns",
            "range": "± 2360.1498393415927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434421.9069767443,
            "unit": "ns",
            "range": "± 77888.42165569139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738313.8928571427,
            "unit": "ns",
            "range": "± 77015.86086492751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2266417.5324675324,
            "unit": "ns",
            "range": "± 99300.36116031004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5850103.52,
            "unit": "ns",
            "range": "± 376691.18065125175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900345.229352678,
            "unit": "ns",
            "range": "± 25496.426836294148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841215.787890625,
            "unit": "ns",
            "range": "± 4244.307108315325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357476.9030412945,
            "unit": "ns",
            "range": "± 5084.826933073158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582493.552864583,
            "unit": "ns",
            "range": "± 4475.686457232897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855204.9629557292,
            "unit": "ns",
            "range": "± 1046.6990953615073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825979.5387369791,
            "unit": "ns",
            "range": "± 1162.726832084334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291306.0227272727,
            "unit": "ns",
            "range": "± 9982.73769480058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282477.60869565216,
            "unit": "ns",
            "range": "± 6974.523077465782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233595.7857142857,
            "unit": "ns",
            "range": "± 2632.5663459700436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4339896.133333334,
            "unit": "ns",
            "range": "± 58037.76175396088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3966444.533333333,
            "unit": "ns",
            "range": "± 66867.39285638048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19376.77659574468,
            "unit": "ns",
            "range": "± 1378.9411564656184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87614.77966101695,
            "unit": "ns",
            "range": "± 3601.4906160519467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79826.18,
            "unit": "ns",
            "range": "± 5349.173085117498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94251.06315789474,
            "unit": "ns",
            "range": "± 10236.394164222591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5776.408602150537,
            "unit": "ns",
            "range": "± 654.8070282709439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19074.228260869564,
            "unit": "ns",
            "range": "± 1455.5212208166158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506484.222222222,
            "unit": "ns",
            "range": "± 72686.22174117001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711658.5789473685,
            "unit": "ns",
            "range": "± 79334.68559723966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229772.411764706,
            "unit": "ns",
            "range": "± 82464.87884097906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4441731.483870967,
            "unit": "ns",
            "range": "± 132040.70603513927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7258280.347826087,
            "unit": "ns",
            "range": "± 166179.67984099418"
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
          "id": "bf44bf353dcb1f86021df0e7ea77ced5356c7e03",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T18:21:55+09:00",
          "tree_id": "0d7782a2ce19d903f582ac7267006e15fbe8e8da",
          "url": "https://github.com/moreal/libplanet/commit/bf44bf353dcb1f86021df0e7ea77ced5356c7e03"
        },
        "date": 1682501668466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7617605.466666667,
            "unit": "ns",
            "range": "± 23700.499415674363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19140220,
            "unit": "ns",
            "range": "± 132652.1473988961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49310723.53333333,
            "unit": "ns",
            "range": "± 422635.2402884729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104338617.33333333,
            "unit": "ns",
            "range": "± 557305.652326142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197739723.8,
            "unit": "ns",
            "range": "± 1296833.184149163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45609.84810126582,
            "unit": "ns",
            "range": "± 2371.882191525776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395151.5,
            "unit": "ns",
            "range": "± 91264.0956582445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606929.52,
            "unit": "ns",
            "range": "± 69577.19614399534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2258044.8673469387,
            "unit": "ns",
            "range": "± 147645.06666715004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5539463,
            "unit": "ns",
            "range": "± 201914.9379554951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982505.212611607,
            "unit": "ns",
            "range": "± 28919.432425821848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867213.7138020834,
            "unit": "ns",
            "range": "± 7241.385580990116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355968.0491286058,
            "unit": "ns",
            "range": "± 1768.7302381694951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608631.5087139425,
            "unit": "ns",
            "range": "± 3004.855491156512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814415.5923978365,
            "unit": "ns",
            "range": "± 375.6945146194532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736836.3812779018,
            "unit": "ns",
            "range": "± 719.0481255222061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278095.97959183675,
            "unit": "ns",
            "range": "± 8817.72882816629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269075.28571428574,
            "unit": "ns",
            "range": "± 8720.963501044744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231694.8620689655,
            "unit": "ns",
            "range": "± 6789.469586500101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4254501.692307692,
            "unit": "ns",
            "range": "± 26977.830952421584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3757795.6428571427,
            "unit": "ns",
            "range": "± 25185.812009044796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17498.893617021276,
            "unit": "ns",
            "range": "± 1688.975285622229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82624.39285714286,
            "unit": "ns",
            "range": "± 4409.512267152142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69129.7,
            "unit": "ns",
            "range": "± 1553.562361325195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81969.11340206186,
            "unit": "ns",
            "range": "± 10140.739623005284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4659.34375,
            "unit": "ns",
            "range": "± 487.43929885247195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15397.791666666666,
            "unit": "ns",
            "range": "± 1219.443979565378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217443.0434782607,
            "unit": "ns",
            "range": "± 81089.33202702396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394783.4318181816,
            "unit": "ns",
            "range": "± 127140.24024315932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224197.4,
            "unit": "ns",
            "range": "± 73515.5366239973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193159.5,
            "unit": "ns",
            "range": "± 119622.47279624715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6827408.1875,
            "unit": "ns",
            "range": "± 102281.37181306526"
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
          "id": "81c186754c29b1a799b2fefb39dc26277f8e0594",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T19:07:31+09:00",
          "tree_id": "a74c00e6bb5445285df3182f73cbb89c0a158345",
          "url": "https://github.com/moreal/libplanet/commit/81c186754c29b1a799b2fefb39dc26277f8e0594"
        },
        "date": 1682504627955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8945100.647058824,
            "unit": "ns",
            "range": "± 178282.4254876028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24519217.05882353,
            "unit": "ns",
            "range": "± 500893.1286205759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61341696.75,
            "unit": "ns",
            "range": "± 1731311.1606643489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120242061.85714285,
            "unit": "ns",
            "range": "± 1624828.286961845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257530587.65384614,
            "unit": "ns",
            "range": "± 6819007.954839383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54432.5421686747,
            "unit": "ns",
            "range": "± 2801.4675304953353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641765.391304348,
            "unit": "ns",
            "range": "± 95014.65179979563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3166336.1315789474,
            "unit": "ns",
            "range": "± 160179.30242944145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2604079.7590361447,
            "unit": "ns",
            "range": "± 131549.93198963586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6965094.785714285,
            "unit": "ns",
            "range": "± 471602.09547177167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7249637.168229166,
            "unit": "ns",
            "range": "± 116344.38278351215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2120859.2096354165,
            "unit": "ns",
            "range": "± 21969.85381161116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592959.9011346726,
            "unit": "ns",
            "range": "± 28669.235823235602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3044028.744270833,
            "unit": "ns",
            "range": "± 38585.641290338026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980986.83359375,
            "unit": "ns",
            "range": "± 13757.769793976218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886255.4821614583,
            "unit": "ns",
            "range": "± 9410.932491049842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328114.6779661017,
            "unit": "ns",
            "range": "± 14515.45347319322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313461.75384615385,
            "unit": "ns",
            "range": "± 14532.45068161119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271247.49275362317,
            "unit": "ns",
            "range": "± 12950.531167420471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5015644.266666667,
            "unit": "ns",
            "range": "± 147549.79712390577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4533362.903225807,
            "unit": "ns",
            "range": "± 136157.68138751356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22595.358695652172,
            "unit": "ns",
            "range": "± 2120.7561246530036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102822.78787878787,
            "unit": "ns",
            "range": "± 9802.751053130314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92776.29591836735,
            "unit": "ns",
            "range": "± 7590.012892983336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113009.77083333333,
            "unit": "ns",
            "range": "± 12710.517449799856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6947.148936170212,
            "unit": "ns",
            "range": "± 784.3953079187033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21003.36170212766,
            "unit": "ns",
            "range": "± 1816.389239057756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3818020.1264367816,
            "unit": "ns",
            "range": "± 207990.3108085278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4089601.9122807016,
            "unit": "ns",
            "range": "± 177590.86303096075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4845787.291666667,
            "unit": "ns",
            "range": "± 125260.97376502947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5187273.529411765,
            "unit": "ns",
            "range": "± 208003.49463490778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8148850.511627907,
            "unit": "ns",
            "range": "± 301364.1041914464"
          }
        ]
      }
    ]
  }
}