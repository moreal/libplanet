window.BENCHMARK_DATA = {
  "lastUpdate": 1682504660646,
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
        "date": 1682495779691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334267.7083333333,
            "unit": "ns",
            "range": "± 86613.46983465242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2611289,
            "unit": "ns",
            "range": "± 163342.22109090193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223018.556701031,
            "unit": "ns",
            "range": "± 142372.02537856653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5603469.072164948,
            "unit": "ns",
            "range": "± 324599.0717282451"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49758.762886597935,
            "unit": "ns",
            "range": "± 3634.090686853441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7023050,
            "unit": "ns",
            "range": "± 167389.2377208341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19895850,
            "unit": "ns",
            "range": "± 326684.855786123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49378173.333333336,
            "unit": "ns",
            "range": "± 636903.7474562459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100531733.33333333,
            "unit": "ns",
            "range": "± 954736.6171333527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199120920,
            "unit": "ns",
            "range": "± 3006535.4580123806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797311.614583333,
            "unit": "ns",
            "range": "± 17831.673824522506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526725.8528645833,
            "unit": "ns",
            "range": "± 5284.907352614854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188979.1666666667,
            "unit": "ns",
            "range": "± 3617.8084269101964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647108.0208333335,
            "unit": "ns",
            "range": "± 7781.428926361121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817983.3919270834,
            "unit": "ns",
            "range": "± 1641.8578652366964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762660.3776041666,
            "unit": "ns",
            "range": "± 2740.84053701146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222003.4482758623,
            "unit": "ns",
            "range": "± 91416.59540945593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419965.625,
            "unit": "ns",
            "range": "± 103718.48875332784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3925564.285714286,
            "unit": "ns",
            "range": "± 66989.60432717967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4168621.794871795,
            "unit": "ns",
            "range": "± 214977.52081061743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6517135.294117647,
            "unit": "ns",
            "range": "± 131309.3529664608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276396.5517241379,
            "unit": "ns",
            "range": "± 11123.264154224067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263010.5263157895,
            "unit": "ns",
            "range": "± 5681.245436310804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219462.5,
            "unit": "ns",
            "range": "± 4147.268177165944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3995980,
            "unit": "ns",
            "range": "± 54427.3460679464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674953.3333333335,
            "unit": "ns",
            "range": "± 57709.69052899506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22492.78350515464,
            "unit": "ns",
            "range": "± 2177.2137882452166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93466.30434782608,
            "unit": "ns",
            "range": "± 6300.3100773842625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89812.12121212122,
            "unit": "ns",
            "range": "± 8459.956973008651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102571.11111111111,
            "unit": "ns",
            "range": "± 9938.660123160234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7715.789473684211,
            "unit": "ns",
            "range": "± 1224.685438507486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21424.468085106382,
            "unit": "ns",
            "range": "± 1845.4789960270311"
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
        "date": 1682501942400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456801.0204081633,
            "unit": "ns",
            "range": "± 138976.36786047585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2570970.4545454546,
            "unit": "ns",
            "range": "± 89615.36823025612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336383.8383838385,
            "unit": "ns",
            "range": "± 174533.6560181894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5652831,
            "unit": "ns",
            "range": "± 378167.172347646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49800,
            "unit": "ns",
            "range": "± 4376.009868086611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6823483.333333333,
            "unit": "ns",
            "range": "± 23546.813462598802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19268600,
            "unit": "ns",
            "range": "± 433379.9354158573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48349276.47058824,
            "unit": "ns",
            "range": "± 1554501.7071754562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92138891.66666667,
            "unit": "ns",
            "range": "± 1134887.363620752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187011033.33333334,
            "unit": "ns",
            "range": "± 3204024.631318436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4694663.100961538,
            "unit": "ns",
            "range": "± 19986.66445655254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1487955.3645833333,
            "unit": "ns",
            "range": "± 12146.266585873711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139095.7291666667,
            "unit": "ns",
            "range": "± 7451.532524412814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607231.1979166665,
            "unit": "ns",
            "range": "± 6140.038805318729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824441.6731770834,
            "unit": "ns",
            "range": "± 2950.5386956295933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776424.1471354166,
            "unit": "ns",
            "range": "± 2268.7375988121544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2990321.6666666665,
            "unit": "ns",
            "range": "± 132803.0134072887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3155143.4782608696,
            "unit": "ns",
            "range": "± 120761.66914339797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3864837.5,
            "unit": "ns",
            "range": "± 99539.08916470519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974192.3076923075,
            "unit": "ns",
            "range": "± 107343.00880104647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6452826.470588235,
            "unit": "ns",
            "range": "± 205544.54550575107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266166,
            "unit": "ns",
            "range": "± 10070.093325875225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253214.0625,
            "unit": "ns",
            "range": "± 11618.128516170493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210096,
            "unit": "ns",
            "range": "± 5579.835720401334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969728.5714285714,
            "unit": "ns",
            "range": "± 60522.43612682222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3559657.1428571427,
            "unit": "ns",
            "range": "± 56502.14038540371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19731.9587628866,
            "unit": "ns",
            "range": "± 2072.9682016250167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88634.375,
            "unit": "ns",
            "range": "± 10662.78158756947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71525,
            "unit": "ns",
            "range": "± 3322.0284489861037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90038.14432989691,
            "unit": "ns",
            "range": "± 16262.997643545052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6296.739130434783,
            "unit": "ns",
            "range": "± 874.3539011098702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20507.070707070707,
            "unit": "ns",
            "range": "± 3075.620147363433"
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
        "date": 1682504644350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352160,
            "unit": "ns",
            "range": "± 106016.6653566001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436778.125,
            "unit": "ns",
            "range": "± 72318.41212205117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158463.2653061226,
            "unit": "ns",
            "range": "± 155627.91363579323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5000700,
            "unit": "ns",
            "range": "± 150614.99261361733"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43207.59493670886,
            "unit": "ns",
            "range": "± 2257.680461134706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6951350,
            "unit": "ns",
            "range": "± 26649.426317970207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17389564.285714287,
            "unit": "ns",
            "range": "± 78691.46769448444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46742660,
            "unit": "ns",
            "range": "± 673564.7543374833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92646573.07692307,
            "unit": "ns",
            "range": "± 457424.7409025266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180001406.66666666,
            "unit": "ns",
            "range": "± 2315075.686965969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783977.566964285,
            "unit": "ns",
            "range": "± 9324.300315902443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500919.3638392857,
            "unit": "ns",
            "range": "± 1444.1601955512124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144233.6979166667,
            "unit": "ns",
            "range": "± 1562.9847965591778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583536.6071428573,
            "unit": "ns",
            "range": "± 8548.28154135327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827950.4534040178,
            "unit": "ns",
            "range": "± 2172.0583222166642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760491.376953125,
            "unit": "ns",
            "range": "± 716.7006569888533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2879793.3333333335,
            "unit": "ns",
            "range": "± 42359.338094563325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3093561.111111111,
            "unit": "ns",
            "range": "± 100738.00326384924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3935921.7391304346,
            "unit": "ns",
            "range": "± 98443.92015264204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3909051.111111111,
            "unit": "ns",
            "range": "± 138290.78326979617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6275676,
            "unit": "ns",
            "range": "± 91106.24420605501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253331.25,
            "unit": "ns",
            "range": "± 9899.77769468867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239778.125,
            "unit": "ns",
            "range": "± 7385.632712538319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218748.83720930232,
            "unit": "ns",
            "range": "± 11861.274053044333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007013.3333333335,
            "unit": "ns",
            "range": "± 36649.47605680189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552014.285714286,
            "unit": "ns",
            "range": "± 43800.9985334521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17154.83870967742,
            "unit": "ns",
            "range": "± 1792.8915271288702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77672.13114754099,
            "unit": "ns",
            "range": "± 3503.7185554560447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69486.73469387754,
            "unit": "ns",
            "range": "± 5088.872796726025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81096.39175257731,
            "unit": "ns",
            "range": "± 11872.552922038205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5091.666666666667,
            "unit": "ns",
            "range": "± 566.3673099893404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15635.051546391753,
            "unit": "ns",
            "range": "± 1543.8750784088584"
          }
        ]
      }
    ]
  }
}