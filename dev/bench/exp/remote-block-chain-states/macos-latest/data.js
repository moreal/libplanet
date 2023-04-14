window.BENCHMARK_DATA = {
  "lastUpdate": 1681460720941,
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
          "id": "8687b2d8e45747fa25468021146cbe8ac030db56",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-13T13:03:30+09:00",
          "tree_id": "378f692c4ebe01c5e3b50d4627644fcdf0663ff7",
          "url": "https://github.com/moreal/libplanet/commit/8687b2d8e45747fa25468021146cbe8ac030db56"
        },
        "date": 1681360082177,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9230800.21,
            "unit": "ns",
            "range": "± 671109.2278924872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23738563.810526315,
            "unit": "ns",
            "range": "± 1610152.1800435267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57079974.7972973,
            "unit": "ns",
            "range": "± 2771933.7151451814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115986832.83333333,
            "unit": "ns",
            "range": "± 2951209.865168472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240577275.66129032,
            "unit": "ns",
            "range": "± 10869895.152847128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81635.41666666667,
            "unit": "ns",
            "range": "± 5688.410416387081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 488085.4292929293,
            "unit": "ns",
            "range": "± 91084.48199653211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395514.5869565217,
            "unit": "ns",
            "range": "± 53078.9432355557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 388663.36315789475,
            "unit": "ns",
            "range": "± 63976.513502772534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6351070.020833333,
            "unit": "ns",
            "range": "± 625466.8102905471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4740154.530612245,
            "unit": "ns",
            "range": "± 460540.0465970942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24993.60465116279,
            "unit": "ns",
            "range": "± 3697.1986948119634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129909.14736842105,
            "unit": "ns",
            "range": "± 29260.93010584083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115133.44086021505,
            "unit": "ns",
            "range": "± 17873.803194633372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 274456.26288659795,
            "unit": "ns",
            "range": "± 33014.9541343809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8955.351063829787,
            "unit": "ns",
            "range": "± 1238.6113969414557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22930.135416666668,
            "unit": "ns",
            "range": "± 5367.20705104971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1946299.5416666667,
            "unit": "ns",
            "range": "± 316629.36628420156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3455416.7989690723,
            "unit": "ns",
            "range": "± 357173.1102821258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2914811.2934782607,
            "unit": "ns",
            "range": "± 397957.1765613647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7837039.870786517,
            "unit": "ns",
            "range": "± 609571.4765970731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3826125.3229166665,
            "unit": "ns",
            "range": "± 395432.83070515865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4197013.416666667,
            "unit": "ns",
            "range": "± 630292.8809209367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5195994.580808081,
            "unit": "ns",
            "range": "± 571960.070602972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4878555.315217392,
            "unit": "ns",
            "range": "± 466729.7034391469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10318167.138297873,
            "unit": "ns",
            "range": "± 1190378.6708768946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7548738.896110373,
            "unit": "ns",
            "range": "± 770296.0106775846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2358079.653843119,
            "unit": "ns",
            "range": "± 145586.61212055536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467563.4506835938,
            "unit": "ns",
            "range": "± 31259.56173669137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3620455.2933984376,
            "unit": "ns",
            "range": "± 218628.2876149874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 916398.5600219726,
            "unit": "ns",
            "range": "± 47841.09618060985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833872.9450737847,
            "unit": "ns",
            "range": "± 29296.269604262445"
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
          "id": "22b444d9ad90949c7a24184b7555ef274c6ab02a",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-13T13:08:33+09:00",
          "tree_id": "dd920a5ad0aa3d3799c5d5edaa767a05cbc657e3",
          "url": "https://github.com/moreal/libplanet/commit/22b444d9ad90949c7a24184b7555ef274c6ab02a"
        },
        "date": 1681360290604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8115652.259259259,
            "unit": "ns",
            "range": "± 222564.592486626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20268812.82,
            "unit": "ns",
            "range": "± 816791.3880252045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52236477.02173913,
            "unit": "ns",
            "range": "± 1282858.5320068996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103947056.10714285,
            "unit": "ns",
            "range": "± 2959248.0879552937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222515235.5,
            "unit": "ns",
            "range": "± 10315762.46401372"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69205.62105263158,
            "unit": "ns",
            "range": "± 10847.838658322627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 416207.8,
            "unit": "ns",
            "range": "± 27616.7124284045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366562.97826086957,
            "unit": "ns",
            "range": "± 41888.523104791144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 353542.4574468085,
            "unit": "ns",
            "range": "± 50416.19436501388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5758602.739130435,
            "unit": "ns",
            "range": "± 277772.4137508265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4419305,
            "unit": "ns",
            "range": "± 154565.2360559309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25354.25,
            "unit": "ns",
            "range": "± 5132.960729698951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117799.63684210526,
            "unit": "ns",
            "range": "± 15888.117654673084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130757.13043478261,
            "unit": "ns",
            "range": "± 14204.326861846865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 290387.1397849462,
            "unit": "ns",
            "range": "± 27687.50556211207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10422.333333333334,
            "unit": "ns",
            "range": "± 1623.456122738197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23505.697916666668,
            "unit": "ns",
            "range": "± 4046.5433816238815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1694185.2315789473,
            "unit": "ns",
            "range": "± 168525.70000015295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3181497.5561797754,
            "unit": "ns",
            "range": "± 215087.711647236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2761950.806451613,
            "unit": "ns",
            "range": "± 266639.7441186474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7322682.956043956,
            "unit": "ns",
            "range": "± 504280.9475046824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3702505.4318181816,
            "unit": "ns",
            "range": "± 419949.4096906621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3865916.6704545454,
            "unit": "ns",
            "range": "± 331752.89427427977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4999971.3,
            "unit": "ns",
            "range": "± 395390.650409151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4977547.595744681,
            "unit": "ns",
            "range": "± 627865.8284996526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9113670.84883721,
            "unit": "ns",
            "range": "± 616159.5429887316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7288578.771079009,
            "unit": "ns",
            "range": "± 303803.0400534877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2254088.3305664062,
            "unit": "ns",
            "range": "± 374194.913791801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362336.479296875,
            "unit": "ns",
            "range": "± 30388.95090939961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108163.2119547524,
            "unit": "ns",
            "range": "± 222562.93844084133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866008.8215793918,
            "unit": "ns",
            "range": "± 42948.38424185999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799913.1455512153,
            "unit": "ns",
            "range": "± 30323.994430941573"
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
          "id": "684db68e42234487913f84bedacb7122b459f08f",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-14T17:01:55+09:00",
          "tree_id": "3fec93eea04296cb29ef29ed71a7d9b464fe8308",
          "url": "https://github.com/moreal/libplanet/commit/684db68e42234487913f84bedacb7122b459f08f"
        },
        "date": 1681460712818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855816.676470589,
            "unit": "ns",
            "range": "± 172347.23317014525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24446940.752941176,
            "unit": "ns",
            "range": "± 5137699.637657686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54923838.27272727,
            "unit": "ns",
            "range": "± 2869477.995005318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109875057.32941176,
            "unit": "ns",
            "range": "± 9293356.444005266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233209523.96938777,
            "unit": "ns",
            "range": "± 9209732.26945255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87272.2951807229,
            "unit": "ns",
            "range": "± 4648.120812939764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 449900.52747252746,
            "unit": "ns",
            "range": "± 48133.86722287949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384231,
            "unit": "ns",
            "range": "± 33358.852325968095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380759.0894736842,
            "unit": "ns",
            "range": "± 42066.99649785984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6085481.6,
            "unit": "ns",
            "range": "± 475375.2772024726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4429125.873684211,
            "unit": "ns",
            "range": "± 379682.55431095365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30162.816091954024,
            "unit": "ns",
            "range": "± 3038.6847389172726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 145152.20967741936,
            "unit": "ns",
            "range": "± 22390.66849623465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 150372.9120879121,
            "unit": "ns",
            "range": "± 27235.907118544143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 309617.967032967,
            "unit": "ns",
            "range": "± 34185.909054739226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12787.58695652174,
            "unit": "ns",
            "range": "± 1374.2557158604986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31029.93023255814,
            "unit": "ns",
            "range": "± 4514.4721163379545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1909557.317204301,
            "unit": "ns",
            "range": "± 269955.99827620643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3493220.2078651683,
            "unit": "ns",
            "range": "± 420629.60304314276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2911223.840909091,
            "unit": "ns",
            "range": "± 352435.78688156087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8097278.560439561,
            "unit": "ns",
            "range": "± 1159595.7892825815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3494095.6195652173,
            "unit": "ns",
            "range": "± 266490.8833555942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3808544.3645833335,
            "unit": "ns",
            "range": "± 270685.74686992454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4815390.659574468,
            "unit": "ns",
            "range": "± 355215.78033893264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5287887.642857143,
            "unit": "ns",
            "range": "± 555796.866484584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9244623.380434783,
            "unit": "ns",
            "range": "± 873266.0604812213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7943717.098046875,
            "unit": "ns",
            "range": "± 277452.05556081684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171351.284275968,
            "unit": "ns",
            "range": "± 106414.48054382039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456444.5110897776,
            "unit": "ns",
            "range": "± 62274.44030318388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3111570.707322141,
            "unit": "ns",
            "range": "± 258272.86161880242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938014.0367647059,
            "unit": "ns",
            "range": "± 16587.863535408545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799116.5821940104,
            "unit": "ns",
            "range": "± 11768.511671263417"
          }
        ]
      }
    ]
  }
}