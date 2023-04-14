window.BENCHMARK_DATA = {
  "lastUpdate": 1681458355147,
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
          "id": "9a1dcd6abface24cd498377a42e7c1bb0d80f66f",
          "message": "WIP",
          "timestamp": "2023-04-14T13:35:00+09:00",
          "tree_id": "d85f9b539fcbd0a307852f4edbfbe8c7da27daac",
          "url": "https://github.com/moreal/libplanet/commit/9a1dcd6abface24cd498377a42e7c1bb0d80f66f"
        },
        "date": 1681448326772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9063336.021978023,
            "unit": "ns",
            "range": "± 632486.0451046942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21697145.28082192,
            "unit": "ns",
            "range": "± 1073500.5733731228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54474994.988235295,
            "unit": "ns",
            "range": "± 4483529.465785724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103214154.16666667,
            "unit": "ns",
            "range": "± 1698598.061543976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219802017.2051282,
            "unit": "ns",
            "range": "± 7538260.669874278"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73490.1043956044,
            "unit": "ns",
            "range": "± 11771.194181729417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 456313.8870967742,
            "unit": "ns",
            "range": "± 70311.17744588543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354958.51086956525,
            "unit": "ns",
            "range": "± 34807.65468973572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332512.5425531915,
            "unit": "ns",
            "range": "± 29163.674813309266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5834120.2272727275,
            "unit": "ns",
            "range": "± 272451.7678113403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4406591.375,
            "unit": "ns",
            "range": "± 359448.72624354996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29987.767441860466,
            "unit": "ns",
            "range": "± 3583.941795333633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132297.41397849462,
            "unit": "ns",
            "range": "± 19984.462744002714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130006.0617977528,
            "unit": "ns",
            "range": "± 9241.43511331027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 285964.4130434783,
            "unit": "ns",
            "range": "± 28204.732661148573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10767.72105263158,
            "unit": "ns",
            "range": "± 1613.7042175317417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25947.14285714286,
            "unit": "ns",
            "range": "± 5178.053792629532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837113.957894737,
            "unit": "ns",
            "range": "± 315387.14967996645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3298423.8294117646,
            "unit": "ns",
            "range": "± 364104.6462448408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2900498.132183908,
            "unit": "ns",
            "range": "± 434724.5329691916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9272196.870786516,
            "unit": "ns",
            "range": "± 2517001.580397901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3390892.629032258,
            "unit": "ns",
            "range": "± 221471.50593283336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3906367.7934782607,
            "unit": "ns",
            "range": "± 411822.07113332243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4727604.777777778,
            "unit": "ns",
            "range": "± 247347.6373292759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4769633.05319149,
            "unit": "ns",
            "range": "± 395502.9478739117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9712706.215789475,
            "unit": "ns",
            "range": "± 760243.7471029971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7051924.6787109375,
            "unit": "ns",
            "range": "± 106952.31015030718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044695.6328125,
            "unit": "ns",
            "range": "± 36203.05030347556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398267.2622070312,
            "unit": "ns",
            "range": "± 16703.1222570425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3384535.638671875,
            "unit": "ns",
            "range": "± 244947.20044087572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991106.2933114035,
            "unit": "ns",
            "range": "± 42887.80452703457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875000.4622127757,
            "unit": "ns",
            "range": "± 47311.21830337495"
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
          "id": "5c7f1a1765edf3eb32ab51ef591209e78356b6da",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T14:33:16+09:00",
          "tree_id": "d0f2a4cc0bc97b956eab5bc01c8993aef7ff3829",
          "url": "https://github.com/moreal/libplanet/commit/5c7f1a1765edf3eb32ab51ef591209e78356b6da"
        },
        "date": 1681451336731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8214887.9,
            "unit": "ns",
            "range": "± 143768.71882933564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21483529.64285714,
            "unit": "ns",
            "range": "± 357114.97105421795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52372885.833333336,
            "unit": "ns",
            "range": "± 966585.2366418141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105559681.6923077,
            "unit": "ns",
            "range": "± 1074623.8458790581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213642776.56666666,
            "unit": "ns",
            "range": "± 2042406.332746375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72359.03535353535,
            "unit": "ns",
            "range": "± 9432.48113561524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 413089.8035714286,
            "unit": "ns",
            "range": "± 17602.798000648178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354495.2962962963,
            "unit": "ns",
            "range": "± 14824.449434403743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344612.20588235295,
            "unit": "ns",
            "range": "± 11082.403217603125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5590096.357142857,
            "unit": "ns",
            "range": "± 47316.574349078444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4014817.7666666666,
            "unit": "ns",
            "range": "± 50612.68882329617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25618.478723404256,
            "unit": "ns",
            "range": "± 3212.1492745369146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120981.11224489796,
            "unit": "ns",
            "range": "± 10613.959248096862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123811.73958333333,
            "unit": "ns",
            "range": "± 7161.5034546852885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 270887.9583333333,
            "unit": "ns",
            "range": "± 17846.069991024953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9870.978723404256,
            "unit": "ns",
            "range": "± 923.792984405631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24209.6875,
            "unit": "ns",
            "range": "± 3066.7035904766058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644126.8865979381,
            "unit": "ns",
            "range": "± 157424.93647283645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3132296.738095238,
            "unit": "ns",
            "range": "± 111707.5509282204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2799789.43877551,
            "unit": "ns",
            "range": "± 291835.9339155604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7135766.077922078,
            "unit": "ns",
            "range": "± 361749.11883309425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430930.4615384615,
            "unit": "ns",
            "range": "± 92037.06957057281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526069.598039216,
            "unit": "ns",
            "range": "± 116905.00174385268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4599484.770833333,
            "unit": "ns",
            "range": "± 172090.424061632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531786.225,
            "unit": "ns",
            "range": "± 236018.73493395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8441540.435897436,
            "unit": "ns",
            "range": "± 282821.818220905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6825045.611478365,
            "unit": "ns",
            "range": "± 32082.238275157004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960413.009765625,
            "unit": "ns",
            "range": "± 11004.054789962478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304721.6514322916,
            "unit": "ns",
            "range": "± 5376.659360079267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3033837.3622395834,
            "unit": "ns",
            "range": "± 36573.646898046194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789338.2336989183,
            "unit": "ns",
            "range": "± 4047.7772823310315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728587.1165364584,
            "unit": "ns",
            "range": "± 1204.5535318877526"
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
          "id": "a77e01291c0fde9c2b15dcb06ac6d481a01613c3",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:21:37+09:00",
          "tree_id": "f6c324f450bf364fd8e451740a8773529d572796",
          "url": "https://github.com/moreal/libplanet/commit/a77e01291c0fde9c2b15dcb06ac6d481a01613c3"
        },
        "date": 1681457971239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8150378.762711864,
            "unit": "ns",
            "range": "± 357645.92791987286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23894668.559139784,
            "unit": "ns",
            "range": "± 4580590.362246135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56946874.92134831,
            "unit": "ns",
            "range": "± 10433833.134779405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107951826.86746988,
            "unit": "ns",
            "range": "± 10032908.962402508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217106218.03448275,
            "unit": "ns",
            "range": "± 13333920.408899995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68733.6052631579,
            "unit": "ns",
            "range": "± 10325.22794810319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379137.2916666667,
            "unit": "ns",
            "range": "± 26070.00123914021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314888.59375,
            "unit": "ns",
            "range": "± 29429.067738181697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292766.43548387097,
            "unit": "ns",
            "range": "± 29560.46837225514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5531157.2105263155,
            "unit": "ns",
            "range": "± 182355.23407663318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4018470.4166666665,
            "unit": "ns",
            "range": "± 104413.97174038275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18059.51724137931,
            "unit": "ns",
            "range": "± 3413.5824592493186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91494.57291666667,
            "unit": "ns",
            "range": "± 12113.531524916814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108369.17708333333,
            "unit": "ns",
            "range": "± 16640.02226782088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 237925.8969072165,
            "unit": "ns",
            "range": "± 21834.102002126423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7196.8247422680415,
            "unit": "ns",
            "range": "± 1357.2589258801886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19400.34736842105,
            "unit": "ns",
            "range": "± 3273.045636674447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687519.1444444444,
            "unit": "ns",
            "range": "± 205370.3375339134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242295.5108695654,
            "unit": "ns",
            "range": "± 358086.99561872066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3164528.5,
            "unit": "ns",
            "range": "± 669651.1973916811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10349509.082417583,
            "unit": "ns",
            "range": "± 4608196.071253154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3836373.876344086,
            "unit": "ns",
            "range": "± 731776.1511195821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3658788.802325581,
            "unit": "ns",
            "range": "± 444876.14039896993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4697843.775862069,
            "unit": "ns",
            "range": "± 447923.4516638506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4606578.233333333,
            "unit": "ns",
            "range": "± 79418.5804739372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8319580.5,
            "unit": "ns",
            "range": "± 270225.5400832743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6682157.038620283,
            "unit": "ns",
            "range": "± 235799.5986204819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080924.0889423077,
            "unit": "ns",
            "range": "± 29434.770776133355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1319507.4486177885,
            "unit": "ns",
            "range": "± 9104.394662224338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588833.665690104,
            "unit": "ns",
            "range": "± 36809.61874305683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899456.8097330729,
            "unit": "ns",
            "range": "± 19242.132563237534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737376.0352313702,
            "unit": "ns",
            "range": "± 11132.716567431638"
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
          "id": "f534d63198f2d4187f0e80a8087b3eae23dde0d9",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:19:02+09:00",
          "tree_id": "038d31e223894411cd7585265e09bfe79bf42ecd",
          "url": "https://github.com/moreal/libplanet/commit/f534d63198f2d4187f0e80a8087b3eae23dde0d9"
        },
        "date": 1681458344738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9933571.670212766,
            "unit": "ns",
            "range": "± 1228990.9040278343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24054190.56,
            "unit": "ns",
            "range": "± 966401.051547492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59983401.35869565,
            "unit": "ns",
            "range": "± 4468418.126466249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114441872.86363636,
            "unit": "ns",
            "range": "± 6130791.9184938595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233828926.23333332,
            "unit": "ns",
            "range": "± 4044053.3061452177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82782.34782608696,
            "unit": "ns",
            "range": "± 8942.611571786028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 447665.811827957,
            "unit": "ns",
            "range": "± 39402.69467086761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365821.6494252874,
            "unit": "ns",
            "range": "± 27650.346097555845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 360359.123655914,
            "unit": "ns",
            "range": "± 29288.214048492337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6401810.511627907,
            "unit": "ns",
            "range": "± 658792.6244992112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4498368.026666666,
            "unit": "ns",
            "range": "± 226308.27700738952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29593.82608695652,
            "unit": "ns",
            "range": "± 3380.4224477816147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131928.5760869565,
            "unit": "ns",
            "range": "± 14243.422165061636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132356.13043478262,
            "unit": "ns",
            "range": "± 10249.733114421359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 285466.25,
            "unit": "ns",
            "range": "± 28256.609028967614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10628.840206185567,
            "unit": "ns",
            "range": "± 1220.898114492274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26658.08064516129,
            "unit": "ns",
            "range": "± 2797.119365730225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775090.5537634408,
            "unit": "ns",
            "range": "± 205982.97035283654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3556530.8160919542,
            "unit": "ns",
            "range": "± 357107.9579547577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3249887.563829787,
            "unit": "ns",
            "range": "± 600436.9935014007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10880596.650537634,
            "unit": "ns",
            "range": "± 3539362.339424381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3618097.5268817204,
            "unit": "ns",
            "range": "± 230321.7381422359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805530.1153846155,
            "unit": "ns",
            "range": "± 190040.46264919892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4957091.822222223,
            "unit": "ns",
            "range": "± 286497.00174311403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991273.711111112,
            "unit": "ns",
            "range": "± 423753.0566156836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9419771.46511628,
            "unit": "ns",
            "range": "± 512182.09907434735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7862516.162578125,
            "unit": "ns",
            "range": "± 559254.7852668068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088558.5471047794,
            "unit": "ns",
            "range": "± 40820.94429730444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399205.6828294836,
            "unit": "ns",
            "range": "± 67435.79131988161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2917809.0027901786,
            "unit": "ns",
            "range": "± 185510.61820638753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 942363.4146773727,
            "unit": "ns",
            "range": "± 26113.562699793034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787500.235124455,
            "unit": "ns",
            "range": "± 27307.8519124676"
          }
        ]
      }
    ]
  }
}