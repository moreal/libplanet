window.BENCHMARK_DATA = {
  "lastUpdate": 1681361828803,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c25b7a5803c12c85236b729b04683f2323cb656d",
          "message": "Merge pull request #3080 from moreal/features/explorer/state-query/states\n\nImplement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:59:19+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/moreal/libplanet/commit/c25b7a5803c12c85236b729b04683f2323cb656d"
        },
        "date": 1681360944508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8307650.461538462,
            "unit": "ns",
            "range": "± 269231.8676375876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20826456.45945946,
            "unit": "ns",
            "range": "± 702314.6377157937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50357473.868421055,
            "unit": "ns",
            "range": "± 1088344.0723756645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106471029.20588236,
            "unit": "ns",
            "range": "± 2161150.8958615307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208269907.35714287,
            "unit": "ns",
            "range": "± 2556405.9174246313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64549.69892473118,
            "unit": "ns",
            "range": "± 8342.131478466434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387630.8125,
            "unit": "ns",
            "range": "± 17807.533514472118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318187.26923076925,
            "unit": "ns",
            "range": "± 13323.754253176485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309692.25333333336,
            "unit": "ns",
            "range": "± 15494.900733217115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5632260.416666667,
            "unit": "ns",
            "range": "± 27472.991955599304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4199152,
            "unit": "ns",
            "range": "± 159621.02755304798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19773.244444444445,
            "unit": "ns",
            "range": "± 1988.0064010992232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95178.30808080808,
            "unit": "ns",
            "range": "± 10653.224855889324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104777.67543859649,
            "unit": "ns",
            "range": "± 4224.011782665888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 253009.38659793814,
            "unit": "ns",
            "range": "± 20627.52467622463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7690.714285714285,
            "unit": "ns",
            "range": "± 701.0229079426132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18245.380434782608,
            "unit": "ns",
            "range": "± 2224.413936112934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1761258.65625,
            "unit": "ns",
            "range": "± 228400.26760703413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3255063.551020408,
            "unit": "ns",
            "range": "± 213431.28493864066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2699675.3163265307,
            "unit": "ns",
            "range": "± 303152.44206064363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7546628.171717172,
            "unit": "ns",
            "range": "± 517460.0568698769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342061.1636363636,
            "unit": "ns",
            "range": "± 141022.4121550482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429238.660493827,
            "unit": "ns",
            "range": "± 173423.7730242351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4617809.0344827585,
            "unit": "ns",
            "range": "± 201760.25213841037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4588002.26344086,
            "unit": "ns",
            "range": "± 275690.46436985297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8578898.93442623,
            "unit": "ns",
            "range": "± 383816.8877026678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6393944.657552083,
            "unit": "ns",
            "range": "± 14630.47412341117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898123.81953125,
            "unit": "ns",
            "range": "± 8925.16230522251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1272855.15625,
            "unit": "ns",
            "range": "± 3653.445610894578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667207.4704241073,
            "unit": "ns",
            "range": "± 16184.800233959704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868125.9233774039,
            "unit": "ns",
            "range": "± 4346.520145082925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712103.0788411458,
            "unit": "ns",
            "range": "± 3804.389117883157"
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
          "id": "dee69c0cc54aae593414d18ff2fb79d2f6ca100d",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-13T13:26:51+09:00",
          "tree_id": "e3e157b1bb65d9dd172a0b1eeb928f1084d5aa19",
          "url": "https://github.com/moreal/libplanet/commit/dee69c0cc54aae593414d18ff2fb79d2f6ca100d"
        },
        "date": 1681361089696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8507151.733333332,
            "unit": "ns",
            "range": "± 144903.34200349194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22295978.962962963,
            "unit": "ns",
            "range": "± 617057.4537883239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53312321.44,
            "unit": "ns",
            "range": "± 1307949.1715217785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105589130.47058824,
            "unit": "ns",
            "range": "± 1636167.704056919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212693680.3125,
            "unit": "ns",
            "range": "± 4138719.0972180865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65167.58947368421,
            "unit": "ns",
            "range": "± 5310.4405625120335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 431251.72340425535,
            "unit": "ns",
            "range": "± 24844.99637187277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353573.9555555555,
            "unit": "ns",
            "range": "± 29357.757736650205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317952.7150537634,
            "unit": "ns",
            "range": "± 20407.272595311115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6283420,
            "unit": "ns",
            "range": "± 258434.8786307722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4722307.214285715,
            "unit": "ns",
            "range": "± 70579.34134273021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19898.163157894738,
            "unit": "ns",
            "range": "± 1539.017879774799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99386.91304347826,
            "unit": "ns",
            "range": "± 6176.943096251858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88916.75757575757,
            "unit": "ns",
            "range": "± 6935.8654464782685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 236107.45833333334,
            "unit": "ns",
            "range": "± 18541.02194532958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5780.091397849463,
            "unit": "ns",
            "range": "± 357.5731374430283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18368.17391304348,
            "unit": "ns",
            "range": "± 1236.2914998974093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756303.5326086956,
            "unit": "ns",
            "range": "± 110439.64688048781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3463903.152173913,
            "unit": "ns",
            "range": "± 211087.91789318988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2952610.131868132,
            "unit": "ns",
            "range": "± 315171.1958045872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8193485.538461538,
            "unit": "ns",
            "range": "± 419598.82888591767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541707.1,
            "unit": "ns",
            "range": "± 107023.61718482083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3876683.942857143,
            "unit": "ns",
            "range": "± 124789.03249459792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5221772.961538462,
            "unit": "ns",
            "range": "± 211656.94780506345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5255918.071428572,
            "unit": "ns",
            "range": "± 87498.3851637488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9316914.018518519,
            "unit": "ns",
            "range": "± 259745.15029045893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7182073.270833333,
            "unit": "ns",
            "range": "± 84401.87054193566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2322533.415625,
            "unit": "ns",
            "range": "± 16014.104805715797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356021.0096153845,
            "unit": "ns",
            "range": "± 11856.632103070475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694474.46640625,
            "unit": "ns",
            "range": "± 40846.89505775063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949126.7594401041,
            "unit": "ns",
            "range": "± 12371.087365336036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853753.9914899553,
            "unit": "ns",
            "range": "± 5060.703217962591"
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
          "id": "de6f56b6ee1c783305ef98c3980218f20c9d8e48",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-13T13:29:29+09:00",
          "tree_id": "c32ed736571213c8ad7b13750061103d821738a5",
          "url": "https://github.com/moreal/libplanet/commit/de6f56b6ee1c783305ef98c3980218f20c9d8e48"
        },
        "date": 1681361820299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8732588.584210526,
            "unit": "ns",
            "range": "± 543087.6191161693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21916846.774647888,
            "unit": "ns",
            "range": "± 1051174.9841092408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54216873.55747127,
            "unit": "ns",
            "range": "± 3810159.3180618314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106618736.27272727,
            "unit": "ns",
            "range": "± 2951325.6266149525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294717796.0752688,
            "unit": "ns",
            "range": "± 78063068.50083219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79540.39130434782,
            "unit": "ns",
            "range": "± 10597.3808115486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 423476.402173913,
            "unit": "ns",
            "range": "± 53029.29253300259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330780.8229166667,
            "unit": "ns",
            "range": "± 29401.231603274107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348358.60638297873,
            "unit": "ns",
            "range": "± 46053.267478025264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6150714.505494505,
            "unit": "ns",
            "range": "± 460541.5521592035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4379309.957894737,
            "unit": "ns",
            "range": "± 374589.43699247396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20878.452631578948,
            "unit": "ns",
            "range": "± 3721.7876732068544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92725.05617977527,
            "unit": "ns",
            "range": "± 10732.980567941413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111242.9247311828,
            "unit": "ns",
            "range": "± 18797.860159925094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 270284.152173913,
            "unit": "ns",
            "range": "± 33793.22156978379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8280.915789473684,
            "unit": "ns",
            "range": "± 2020.1599560807792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20579.032608695652,
            "unit": "ns",
            "range": "± 3540.3940441617474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691537.1979166667,
            "unit": "ns",
            "range": "± 197444.19191679504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3278875.542105263,
            "unit": "ns",
            "range": "± 258287.2190630372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2798425.93877551,
            "unit": "ns",
            "range": "± 342824.8064453777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7416155.703125,
            "unit": "ns",
            "range": "± 342732.6589463485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3566610.6373626376,
            "unit": "ns",
            "range": "± 334120.1352269541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3906397.1483516484,
            "unit": "ns",
            "range": "± 544018.6171731293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4987765.287234043,
            "unit": "ns",
            "range": "± 453993.06906146347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5666005.731578947,
            "unit": "ns",
            "range": "± 832129.1043873791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9190899.936842104,
            "unit": "ns",
            "range": "± 737025.9032760295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7516266.779947917,
            "unit": "ns",
            "range": "± 387106.08556845575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2237655.942667128,
            "unit": "ns",
            "range": "± 115071.81296895236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485429.447435462,
            "unit": "ns",
            "range": "± 71547.90438033832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3529477.8449856504,
            "unit": "ns",
            "range": "± 359914.4197877743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951679.2590974506,
            "unit": "ns",
            "range": "± 54297.23068296877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832057.3400390625,
            "unit": "ns",
            "range": "± 15123.319329942355"
          }
        ]
      }
    ]
  }
}