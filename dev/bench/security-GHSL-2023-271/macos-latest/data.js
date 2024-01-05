window.BENCHMARK_DATA = {
  "lastUpdate": 1704439911683,
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
        "date": 1704233399103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7724036.857142857,
            "unit": "ns",
            "range": "± 39340.04374260824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19447976.2,
            "unit": "ns",
            "range": "± 271069.81725726253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48330039.815789476,
            "unit": "ns",
            "range": "± 1011880.8588143091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96103192.85714285,
            "unit": "ns",
            "range": "± 983122.5594164127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197792673.07692307,
            "unit": "ns",
            "range": "± 2888275.404506366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44166.378787878784,
            "unit": "ns",
            "range": "± 9850.756370289053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224245.92682926828,
            "unit": "ns",
            "range": "± 11794.458611003674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218185.67567567568,
            "unit": "ns",
            "range": "± 10939.892154821557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212682.75,
            "unit": "ns",
            "range": "± 11045.97550344852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3884674.625,
            "unit": "ns",
            "range": "± 73677.7478183429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3388262.3846153845,
            "unit": "ns",
            "range": "± 54322.404144972665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12723.344827586207,
            "unit": "ns",
            "range": "± 1001.1597673255291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59542.53333333333,
            "unit": "ns",
            "range": "± 5643.039045854079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52666.34939759036,
            "unit": "ns",
            "range": "± 3875.800796668599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67117.75257731958,
            "unit": "ns",
            "range": "± 14449.837554616697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3533.7471264367814,
            "unit": "ns",
            "range": "± 393.2671504085789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11951.867816091954,
            "unit": "ns",
            "range": "± 685.7416137384525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079527.0252525252,
            "unit": "ns",
            "range": "± 93108.79574436665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2215275.6621621624,
            "unit": "ns",
            "range": "± 109935.01602475779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737062.793814433,
            "unit": "ns",
            "range": "± 134240.226339988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19347017.22105263,
            "unit": "ns",
            "range": "± 2531271.8606420862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3006793.573170732,
            "unit": "ns",
            "range": "± 91549.03733611573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3019512.3684210526,
            "unit": "ns",
            "range": "± 77753.6273610855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3641893.442857143,
            "unit": "ns",
            "range": "± 117549.96879473723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3691480.935483871,
            "unit": "ns",
            "range": "± 111439.82391585021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22353345.74468085,
            "unit": "ns",
            "range": "± 3084390.872029528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423992.679036458,
            "unit": "ns",
            "range": "± 41913.39314596926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360024.1895833334,
            "unit": "ns",
            "range": "± 11119.537721633907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 893327.5674479167,
            "unit": "ns",
            "range": "± 12418.1934112384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977889.195591518,
            "unit": "ns",
            "range": "± 33446.910349538055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619271.2720052083,
            "unit": "ns",
            "range": "± 8195.860498242631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574048.702734375,
            "unit": "ns",
            "range": "± 6055.403386639284"
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
        "date": 1704233607226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7688739,
            "unit": "ns",
            "range": "± 62480.589056995064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18593655.92857143,
            "unit": "ns",
            "range": "± 76754.20341029116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46390547.333333336,
            "unit": "ns",
            "range": "± 389582.5885089493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93159983,
            "unit": "ns",
            "range": "± 1129402.6299096604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191605693.29166666,
            "unit": "ns",
            "range": "± 4901770.462031936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36639.03370786517,
            "unit": "ns",
            "range": "± 5666.342828991998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216142.89411764705,
            "unit": "ns",
            "range": "± 11653.957709133603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209501.43670886077,
            "unit": "ns",
            "range": "± 10339.604005140736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188951.34615384616,
            "unit": "ns",
            "range": "± 7515.205884449952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3889362.4285714286,
            "unit": "ns",
            "range": "± 53380.87069168316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3434092.1333333333,
            "unit": "ns",
            "range": "± 61724.88168809661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13177.582417582418,
            "unit": "ns",
            "range": "± 1447.436324187117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59132.142857142855,
            "unit": "ns",
            "range": "± 4945.87316764959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55411.315217391304,
            "unit": "ns",
            "range": "± 6548.506694851363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59948.760416666664,
            "unit": "ns",
            "range": "± 9556.09946164977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3485.3595505617977,
            "unit": "ns",
            "range": "± 443.5310854943493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12857.741935483871,
            "unit": "ns",
            "range": "± 1299.8300633345834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1252217.0222222223,
            "unit": "ns",
            "range": "± 131722.27931584854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2561428.6505376343,
            "unit": "ns",
            "range": "± 162802.7957940784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2099890.595959596,
            "unit": "ns",
            "range": "± 244090.68004480025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21105282.322580647,
            "unit": "ns",
            "range": "± 2558181.2075497806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2860307,
            "unit": "ns",
            "range": "± 33085.433085016084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3004138.186440678,
            "unit": "ns",
            "range": "± 132052.5095595759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542246.4655172415,
            "unit": "ns",
            "range": "± 103070.17663066916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3669268.316666667,
            "unit": "ns",
            "range": "± 163943.7903367577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22595860.510638297,
            "unit": "ns",
            "range": "± 3514552.81403856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4442694.368990385,
            "unit": "ns",
            "range": "± 54131.92302134689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403696.4899739583,
            "unit": "ns",
            "range": "± 10493.504353312663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891477.5735212053,
            "unit": "ns",
            "range": "± 10021.108431406377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966041.0598958333,
            "unit": "ns",
            "range": "± 30211.8463334629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625148.5074637277,
            "unit": "ns",
            "range": "± 6567.232650846782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572145.7359375,
            "unit": "ns",
            "range": "± 4619.203105044695"
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
        "date": 1704233846974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986659.55,
            "unit": "ns",
            "range": "± 518932.8583693669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22013527.147058822,
            "unit": "ns",
            "range": "± 689922.2119507995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53062627.7,
            "unit": "ns",
            "range": "± 4338160.538253855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111322157.48214285,
            "unit": "ns",
            "range": "± 4766824.6758802505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205328938.19,
            "unit": "ns",
            "range": "± 13488290.313675629"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53249.795918367345,
            "unit": "ns",
            "range": "± 11567.650272371684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238051.80208333334,
            "unit": "ns",
            "range": "± 20405.179141126628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234401.89175257733,
            "unit": "ns",
            "range": "± 26924.905411299613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248607.28125,
            "unit": "ns",
            "range": "± 24166.41928453314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354851.724489796,
            "unit": "ns",
            "range": "± 252567.39799631602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3653215.1923076925,
            "unit": "ns",
            "range": "± 203537.45350599303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18388.262626262625,
            "unit": "ns",
            "range": "± 4996.528161135242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77788.27551020408,
            "unit": "ns",
            "range": "± 18313.823100384518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75225.94791666667,
            "unit": "ns",
            "range": "± 7435.325216926918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75723.36263736263,
            "unit": "ns",
            "range": "± 9825.376474004539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5591.04347826087,
            "unit": "ns",
            "range": "± 1311.5492467537376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15642.205263157895,
            "unit": "ns",
            "range": "± 2784.091497310664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1125208.65,
            "unit": "ns",
            "range": "± 115654.095571371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448029.7688172045,
            "unit": "ns",
            "range": "± 176903.0360914493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2008029.0315789473,
            "unit": "ns",
            "range": "± 216555.5502928213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20528465.88172043,
            "unit": "ns",
            "range": "± 2263919.5422810456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3009179.476190476,
            "unit": "ns",
            "range": "± 67617.03077821374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3201757.0217391304,
            "unit": "ns",
            "range": "± 217764.48587679846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4063015.433333333,
            "unit": "ns",
            "range": "± 152746.16821966734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314139.766666667,
            "unit": "ns",
            "range": "± 141152.3301685742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25282582.644329898,
            "unit": "ns",
            "range": "± 4482957.371480471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4669780.1534375,
            "unit": "ns",
            "range": "± 185359.38802025357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1454937.2118421053,
            "unit": "ns",
            "range": "± 87365.03446119619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 968342.2574013158,
            "unit": "ns",
            "range": "± 21383.684199546777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2285827.091796875,
            "unit": "ns",
            "range": "± 49044.08056944892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645630.4358938116,
            "unit": "ns",
            "range": "± 31935.313425442313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552911.6311197917,
            "unit": "ns",
            "range": "± 5197.7017306555545"
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
        "date": 1704439896222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7777250.818181818,
            "unit": "ns",
            "range": "± 245810.9125092973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19596812.85185185,
            "unit": "ns",
            "range": "± 533280.1397225624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51999362.121212125,
            "unit": "ns",
            "range": "± 4001235.514151785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97169462.13157895,
            "unit": "ns",
            "range": "± 3278581.2271265555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190285408.4,
            "unit": "ns",
            "range": "± 4296040.087111488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51180.01612903226,
            "unit": "ns",
            "range": "± 8993.690577787082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218540.6739130435,
            "unit": "ns",
            "range": "± 21185.697425079125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217330.01075268816,
            "unit": "ns",
            "range": "± 26856.322448271567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201078.96907216494,
            "unit": "ns",
            "range": "± 16874.364772274643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4455818.6375,
            "unit": "ns",
            "range": "± 232253.35879086674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731422.015789474,
            "unit": "ns",
            "range": "± 232114.41220587303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12791.522471910112,
            "unit": "ns",
            "range": "± 922.4256187989076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61850.572916666664,
            "unit": "ns",
            "range": "± 6680.28265750042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72037.39130434782,
            "unit": "ns",
            "range": "± 6764.745041948064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66651.81052631579,
            "unit": "ns",
            "range": "± 11577.518214465093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3596.8255813953488,
            "unit": "ns",
            "range": "± 485.5577312706666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15904.205263157895,
            "unit": "ns",
            "range": "± 3595.50389411993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1350736.8631578947,
            "unit": "ns",
            "range": "± 132085.82515623877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2766123.3791208793,
            "unit": "ns",
            "range": "± 188480.0336949269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287933.7634408604,
            "unit": "ns",
            "range": "± 332145.77395702124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21960055.58139535,
            "unit": "ns",
            "range": "± 2922215.10554426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2839218.827586207,
            "unit": "ns",
            "range": "± 81403.6978938343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2935826.0476190476,
            "unit": "ns",
            "range": "± 97617.40843727553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3524219.5714285714,
            "unit": "ns",
            "range": "± 112657.86506819082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3651200.125,
            "unit": "ns",
            "range": "± 112088.10173532707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22133285.87628866,
            "unit": "ns",
            "range": "± 3250942.6727834335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4275470.4921875,
            "unit": "ns",
            "range": "± 38067.824792543644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1375222.8560112847,
            "unit": "ns",
            "range": "± 28862.80329404358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891768.7139136905,
            "unit": "ns",
            "range": "± 20831.817813741014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000036.3108915442,
            "unit": "ns",
            "range": "± 33777.51470008696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627356.9748697917,
            "unit": "ns",
            "range": "± 7413.470489806072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 638911.2594901843,
            "unit": "ns",
            "range": "± 22016.02703745719"
          }
        ]
      }
    ]
  }
}