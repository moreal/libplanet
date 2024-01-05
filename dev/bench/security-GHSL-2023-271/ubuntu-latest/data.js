window.BENCHMARK_DATA = {
  "lastUpdate": 1704439774706,
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
          "id": "76a4c7cff0f08f0b39b4f234e58fec345a6c3b80",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:57:38+09:00",
          "tree_id": "da2eabc4a2cbae8c2835a7da552df63cf85b46e1",
          "url": "https://github.com/moreal/libplanet/commit/76a4c7cff0f08f0b39b4f234e58fec345a6c3b80"
        },
        "date": 1704233357213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783912.576041667,
            "unit": "ns",
            "range": "± 41624.191944668324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202382.2506510417,
            "unit": "ns",
            "range": "± 2152.964228623245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767501.5984825721,
            "unit": "ns",
            "range": "± 1564.0134239966153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968327.5052083333,
            "unit": "ns",
            "range": "± 26300.950249948342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620511.4805836397,
            "unit": "ns",
            "range": "± 12272.14474102354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569448.5524338942,
            "unit": "ns",
            "range": "± 1812.0548433953104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372693.5555555555,
            "unit": "ns",
            "range": "± 66148.44736554135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504121.8,
            "unit": "ns",
            "range": "± 111004.31107780285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108248.9565217393,
            "unit": "ns",
            "range": "± 73098.86379198956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3218560.2647058824,
            "unit": "ns",
            "range": "± 155837.66512469124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14024680.265957447,
            "unit": "ns",
            "range": "± 937267.4653188084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39224.721649484534,
            "unit": "ns",
            "range": "± 4561.180285715227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205728.3115942029,
            "unit": "ns",
            "range": "± 9748.914757514058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196819.5,
            "unit": "ns",
            "range": "± 7358.807768072344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170073.75,
            "unit": "ns",
            "range": "± 5364.312030846613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205472.2666666666,
            "unit": "ns",
            "range": "± 30552.8553691717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837080.6153846155,
            "unit": "ns",
            "range": "± 28502.919664888315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15761.469387755102,
            "unit": "ns",
            "range": "± 2706.0349324711715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66289.40816326531,
            "unit": "ns",
            "range": "± 7794.725162076197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59363.12631578947,
            "unit": "ns",
            "range": "± 5654.289699436276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69365.10309278351,
            "unit": "ns",
            "range": "± 13093.875372895827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3427.568181818182,
            "unit": "ns",
            "range": "± 356.94147095652835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11968.79569892473,
            "unit": "ns",
            "range": "± 811.925643938931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5576883.071428572,
            "unit": "ns",
            "range": "± 41277.309493164714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14044651.466666667,
            "unit": "ns",
            "range": "± 78168.99615564314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36911887.833333336,
            "unit": "ns",
            "range": "± 648837.8730297805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74539894,
            "unit": "ns",
            "range": "± 335749.36310816504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152883468.53846154,
            "unit": "ns",
            "range": "± 465056.4572182993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989176.1443298969,
            "unit": "ns",
            "range": "± 88881.29214212603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917238.0461538462,
            "unit": "ns",
            "range": "± 88636.48329578916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648967.855670103,
            "unit": "ns",
            "range": "± 130486.06524931996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12963236.663157895,
            "unit": "ns",
            "range": "± 1054689.9972885207"
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
          "id": "8d3c69a0d7f8fc0083d382a1eeffe288cbc3aa18",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:59:56+09:00",
          "tree_id": "bf99d0523325474b69191e39aac516cb577b9fb1",
          "url": "https://github.com/moreal/libplanet/commit/8d3c69a0d7f8fc0083d382a1eeffe288cbc3aa18"
        },
        "date": 1704233483670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767826.003645833,
            "unit": "ns",
            "range": "± 42391.80298705937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197534.6141183036,
            "unit": "ns",
            "range": "± 5759.827626803924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767071.0788922991,
            "unit": "ns",
            "range": "± 1642.6856625474886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948111.1902901786,
            "unit": "ns",
            "range": "± 5450.362942756948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606522.4030198317,
            "unit": "ns",
            "range": "± 2849.9667161666193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579878.640234375,
            "unit": "ns",
            "range": "± 1977.4156042266532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474906.6818181816,
            "unit": "ns",
            "range": "± 92233.85516245628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2713726.4615384615,
            "unit": "ns",
            "range": "± 94227.3876436665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3163668.966666667,
            "unit": "ns",
            "range": "± 94074.42889999873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3345454.466666667,
            "unit": "ns",
            "range": "± 126394.2486187204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14202826.198924731,
            "unit": "ns",
            "range": "± 913460.7840635973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42167.979166666664,
            "unit": "ns",
            "range": "± 5817.221613865555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219156.44897959183,
            "unit": "ns",
            "range": "± 18946.484940224494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217942.83673469388,
            "unit": "ns",
            "range": "± 19582.644118031712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175732.6813186813,
            "unit": "ns",
            "range": "± 9810.713359360572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3206615.0714285714,
            "unit": "ns",
            "range": "± 22617.116402829095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2977476.466666667,
            "unit": "ns",
            "range": "± 41773.07623315467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14798.531914893618,
            "unit": "ns",
            "range": "± 3780.248534533339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71014.29,
            "unit": "ns",
            "range": "± 13901.331987844282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90909.94791666667,
            "unit": "ns",
            "range": "± 16289.968784093237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89594.76530612246,
            "unit": "ns",
            "range": "± 22895.579626739112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6538.276595744681,
            "unit": "ns",
            "range": "± 670.6373858631196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20519.075757575756,
            "unit": "ns",
            "range": "± 4961.97381951263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5496095.766666667,
            "unit": "ns",
            "range": "± 26409.398945036504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14891170.916666666,
            "unit": "ns",
            "range": "± 143611.47625923238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36554136.7,
            "unit": "ns",
            "range": "± 174143.0937731546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73631604.35714285,
            "unit": "ns",
            "range": "± 302228.11966246425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150644316.64285713,
            "unit": "ns",
            "range": "± 957687.0314508652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957419.3191489362,
            "unit": "ns",
            "range": "± 65797.10058879245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877959.5428571429,
            "unit": "ns",
            "range": "± 90576.465598744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575198.3409090908,
            "unit": "ns",
            "range": "± 122175.44704535777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12908312.1875,
            "unit": "ns",
            "range": "± 1069137.954405522"
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
          "id": "caac4fd21bcf2fe773b62d806bc5441e94544e30",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T07:01:07+09:00",
          "tree_id": "7ed86ebe8a9b616fbcc0d9f7ea3f8e81b20d7f3b",
          "url": "https://github.com/moreal/libplanet/commit/caac4fd21bcf2fe773b62d806bc5441e94544e30"
        },
        "date": 1704233557184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3637342.716045673,
            "unit": "ns",
            "range": "± 6402.068872391045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209472.8123372395,
            "unit": "ns",
            "range": "± 1639.2713816795447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783270.2877103365,
            "unit": "ns",
            "range": "± 1806.659182470566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920350.2925180288,
            "unit": "ns",
            "range": "± 3549.636876824944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638935.4155649039,
            "unit": "ns",
            "range": "± 1025.537821559921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576556.4856119792,
            "unit": "ns",
            "range": "± 1692.698116868821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384382.875,
            "unit": "ns",
            "range": "± 72720.1730283571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509757.964285714,
            "unit": "ns",
            "range": "± 48734.45252209475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3151922.6071428573,
            "unit": "ns",
            "range": "± 89226.17269668808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3203406.084745763,
            "unit": "ns",
            "range": "± 141905.30964651043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14147621.716494845,
            "unit": "ns",
            "range": "± 987225.1710144153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38249.326315789476,
            "unit": "ns",
            "range": "± 4014.1899833182356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204037.14516129033,
            "unit": "ns",
            "range": "± 8830.398163881464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191885.61333333334,
            "unit": "ns",
            "range": "± 9286.846789649026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162506.84,
            "unit": "ns",
            "range": "± 4300.926486235262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3286808.3571428573,
            "unit": "ns",
            "range": "± 50130.781693190555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867979.5,
            "unit": "ns",
            "range": "± 36990.22849088246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16424.802083333332,
            "unit": "ns",
            "range": "± 2814.1758319352116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64338.397959183676,
            "unit": "ns",
            "range": "± 7906.303622028889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58453.78350515464,
            "unit": "ns",
            "range": "± 6875.445587418929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94355.82653061225,
            "unit": "ns",
            "range": "± 15750.000575372605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2986.8888888888887,
            "unit": "ns",
            "range": "± 508.4732698650844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14423.92857142857,
            "unit": "ns",
            "range": "± 2893.2501121299915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5566329.033333333,
            "unit": "ns",
            "range": "± 32164.261242358214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14230172.23076923,
            "unit": "ns",
            "range": "± 85188.56419844338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36228840.65384615,
            "unit": "ns",
            "range": "± 156606.56134021873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74026349.35714285,
            "unit": "ns",
            "range": "± 263316.4778426866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147161424.5,
            "unit": "ns",
            "range": "± 1321268.065733227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983859.6875,
            "unit": "ns",
            "range": "± 89063.05365695315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865295.5188679246,
            "unit": "ns",
            "range": "± 72959.79792653216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635987.798969072,
            "unit": "ns",
            "range": "± 140486.39757346653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12880249.282608695,
            "unit": "ns",
            "range": "± 885434.9887019313"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d0f3757019be6547a42ca257a0e30bdfd7519e69",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-05T16:16:27+09:00",
          "tree_id": "cfbe8cf86db0c7ffdfa9ba174e7acc0a59ddadc4",
          "url": "https://github.com/moreal/libplanet/commit/d0f3757019be6547a42ca257a0e30bdfd7519e69"
        },
        "date": 1704439769071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3610211.750260417,
            "unit": "ns",
            "range": "± 42280.999991826364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1173396.3393229167,
            "unit": "ns",
            "range": "± 19808.109131820587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729130.9176199777,
            "unit": "ns",
            "range": "± 5899.683915401335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1877173.966015625,
            "unit": "ns",
            "range": "± 22699.350642089397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600924.7641927083,
            "unit": "ns",
            "range": "± 7669.62338843089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552321.1940755208,
            "unit": "ns",
            "range": "± 8316.93607020809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388851.1153846155,
            "unit": "ns",
            "range": "± 27375.888745203207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2426228.383561644,
            "unit": "ns",
            "range": "± 119751.93214732489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3038506.1666666665,
            "unit": "ns",
            "range": "± 119596.19331384725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3103297.255319149,
            "unit": "ns",
            "range": "± 175911.79535796665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13639791.396103896,
            "unit": "ns",
            "range": "± 696018.268492902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41291.666666666664,
            "unit": "ns",
            "range": "± 6841.954752487605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190891.09782608695,
            "unit": "ns",
            "range": "± 11671.547346083267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182803.83333333334,
            "unit": "ns",
            "range": "± 9963.949741812448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160221.65584415584,
            "unit": "ns",
            "range": "± 8145.059162760373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3081539.5185185187,
            "unit": "ns",
            "range": "± 85799.94912064583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2754657.12,
            "unit": "ns",
            "range": "± 72548.78390912789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15391.168421052631,
            "unit": "ns",
            "range": "± 1702.9755414382328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67551.51612903226,
            "unit": "ns",
            "range": "± 4140.835364189693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59158.298969072166,
            "unit": "ns",
            "range": "± 6339.429338416018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58232.92268041237,
            "unit": "ns",
            "range": "± 10022.986303196445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3514.086956521739,
            "unit": "ns",
            "range": "± 407.85923698089204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13893.570707070707,
            "unit": "ns",
            "range": "± 2583.9949976752514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5620467.142857143,
            "unit": "ns",
            "range": "± 129505.6373731606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13838562.975609757,
            "unit": "ns",
            "range": "± 488866.0968682778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35252610.11764706,
            "unit": "ns",
            "range": "± 723960.4110972576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74050777.52380952,
            "unit": "ns",
            "range": "± 1689968.0822224014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151922274.4,
            "unit": "ns",
            "range": "± 2015928.916842584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038817.7551020408,
            "unit": "ns",
            "range": "± 104141.3820255521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1995344.1714285715,
            "unit": "ns",
            "range": "± 95301.66978706128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1675835.1182795698,
            "unit": "ns",
            "range": "± 135575.34146537582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12864256.794736842,
            "unit": "ns",
            "range": "± 1149163.8534264434"
          }
        ]
      }
    ]
  }
}