window.BENCHMARK_DATA = {
  "lastUpdate": 1681796470762,
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
        "date": 1681447683847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7535753.857142857,
            "unit": "ns",
            "range": "± 15153.881827424959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19061574.5,
            "unit": "ns",
            "range": "± 58290.97909328549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49732505.86666667,
            "unit": "ns",
            "range": "± 260860.9626574133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99973820,
            "unit": "ns",
            "range": "± 422206.66333325434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200927957.58333334,
            "unit": "ns",
            "range": "± 1401504.4996006943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45735.82352941176,
            "unit": "ns",
            "range": "± 2470.9458675560168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390107.085106383,
            "unit": "ns",
            "range": "± 85865.59760020302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620954.2702702703,
            "unit": "ns",
            "range": "± 84611.38067057221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2273646.9278350514,
            "unit": "ns",
            "range": "± 155995.14852226755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5488002.8,
            "unit": "ns",
            "range": "± 107073.99817065765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5882238.951450893,
            "unit": "ns",
            "range": "± 17160.403393833883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846492.9002604166,
            "unit": "ns",
            "range": "± 9811.42186292736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349165.13671875,
            "unit": "ns",
            "range": "± 1329.464856019071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542995.568917411,
            "unit": "ns",
            "range": "± 1928.363880136526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791785.7302433894,
            "unit": "ns",
            "range": "± 1320.9974681268532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741053.9766276042,
            "unit": "ns",
            "range": "± 1655.870968674349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327862.06666666665,
            "unit": "ns",
            "range": "± 5200.238572366061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266788.0833333333,
            "unit": "ns",
            "range": "± 3833.266503040629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240970.33333333334,
            "unit": "ns",
            "range": "± 4432.423823641074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5655987.785714285,
            "unit": "ns",
            "range": "± 23602.13198707195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4060981.285714286,
            "unit": "ns",
            "range": "± 35747.06590956602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19691.172043010753,
            "unit": "ns",
            "range": "± 1615.8144172364107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88980.02702702703,
            "unit": "ns",
            "range": "± 4379.9061195073455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76615.96610169491,
            "unit": "ns",
            "range": "± 3363.5372850314307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184853.67346938775,
            "unit": "ns",
            "range": "± 15973.169026785446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5164.5,
            "unit": "ns",
            "range": "± 645.7604574616292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16833.473684210527,
            "unit": "ns",
            "range": "± 1566.9158407392806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167577.25,
            "unit": "ns",
            "range": "± 71906.44917264668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504735.0434782607,
            "unit": "ns",
            "range": "± 132927.80342375606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275409.741935484,
            "unit": "ns",
            "range": "± 127949.6787076773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295930.08,
            "unit": "ns",
            "range": "± 112802.81307364044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7301251.676470588,
            "unit": "ns",
            "range": "± 180494.22939616768"
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
        "date": 1681451171860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7624312.071428572,
            "unit": "ns",
            "range": "± 32117.258242174183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19514441.5,
            "unit": "ns",
            "range": "± 76319.51606316294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50513700.53333333,
            "unit": "ns",
            "range": "± 217547.1194644201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103186903,
            "unit": "ns",
            "range": "± 370660.7777934719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203216032.7142857,
            "unit": "ns",
            "range": "± 277035.1725848955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45399.7108433735,
            "unit": "ns",
            "range": "± 2433.923904707248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390507.49,
            "unit": "ns",
            "range": "± 129640.85120844588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2551028.8518518517,
            "unit": "ns",
            "range": "± 69436.05051783742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244198.712328767,
            "unit": "ns",
            "range": "± 110633.7486734545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5440401.444444444,
            "unit": "ns",
            "range": "± 114222.95563050064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5954970.470833333,
            "unit": "ns",
            "range": "± 36905.796595278145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832277.1682692308,
            "unit": "ns",
            "range": "± 1457.933715933983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330641.4260817308,
            "unit": "ns",
            "range": "± 891.2726910520249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540640.4338727677,
            "unit": "ns",
            "range": "± 2866.0543070074987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793582.8940054086,
            "unit": "ns",
            "range": "± 466.5021571018204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726154.1002604166,
            "unit": "ns",
            "range": "± 387.98088563400097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333535,
            "unit": "ns",
            "range": "± 7242.4849863688205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274411,
            "unit": "ns",
            "range": "± 6942.311843984714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244291.60714285713,
            "unit": "ns",
            "range": "± 6744.739724485906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5573143.266666667,
            "unit": "ns",
            "range": "± 38886.032849610056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970764.7333333334,
            "unit": "ns",
            "range": "± 31545.478916425833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16585.168421052633,
            "unit": "ns",
            "range": "± 1317.5134191462566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83397.3,
            "unit": "ns",
            "range": "± 4375.727980396743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72458.38235294117,
            "unit": "ns",
            "range": "± 2345.4619369883117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184993.89795918367,
            "unit": "ns",
            "range": "± 13320.096224606614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4944.580645161291,
            "unit": "ns",
            "range": "± 473.9848723182374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16267.22105263158,
            "unit": "ns",
            "range": "± 1493.017579658422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281416.214285714,
            "unit": "ns",
            "range": "± 39620.62152111928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461110.3076923075,
            "unit": "ns",
            "range": "± 20773.387351708017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4320443.923076923,
            "unit": "ns",
            "range": "± 54822.87710506375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4356623.659574468,
            "unit": "ns",
            "range": "± 154458.68420182742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7409121.352941177,
            "unit": "ns",
            "range": "± 119848.70900636623"
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
        "date": 1681457805509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9126093.95959596,
            "unit": "ns",
            "range": "± 545623.4868374636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25139979.06557377,
            "unit": "ns",
            "range": "± 1128585.784746953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61212395.92307692,
            "unit": "ns",
            "range": "± 2494056.323429253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129995317.29850747,
            "unit": "ns",
            "range": "± 6144563.902160971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242019675.70833334,
            "unit": "ns",
            "range": "± 9403262.371677687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56372.04494382023,
            "unit": "ns",
            "range": "± 4075.103157952827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657130.28125,
            "unit": "ns",
            "range": "± 111471.94144996905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3174584.383838384,
            "unit": "ns",
            "range": "± 199227.20944673393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2653916.969072165,
            "unit": "ns",
            "range": "± 167863.54975150537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6779035.04,
            "unit": "ns",
            "range": "± 538519.0588463007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6783386.4917763155,
            "unit": "ns",
            "range": "± 150332.57288819997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111060.1608072915,
            "unit": "ns",
            "range": "± 44106.9729355164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1534974.7124495967,
            "unit": "ns",
            "range": "± 46474.0818660312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2953181.172175481,
            "unit": "ns",
            "range": "± 80202.21260651248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962875.4571940104,
            "unit": "ns",
            "range": "± 17067.203074471498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867326.2913818359,
            "unit": "ns",
            "range": "± 21986.725982948898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374325.2653061224,
            "unit": "ns",
            "range": "± 27368.81820294392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333014.3125,
            "unit": "ns",
            "range": "± 10310.327717445698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270991.72631578945,
            "unit": "ns",
            "range": "± 17130.501402060658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6719134.555555556,
            "unit": "ns",
            "range": "± 254623.50957831801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4841573.404761905,
            "unit": "ns",
            "range": "± 114629.4884638786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22856.597826086956,
            "unit": "ns",
            "range": "± 2678.8599184825557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107840.30769230769,
            "unit": "ns",
            "range": "± 8809.72063334626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94559.54081632652,
            "unit": "ns",
            "range": "± 8473.4528717921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218659.98969072165,
            "unit": "ns",
            "range": "± 23081.899916608018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7325.816326530612,
            "unit": "ns",
            "range": "± 1199.0929333556592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23420.791666666668,
            "unit": "ns",
            "range": "± 2482.6785701045033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3757652.7216494847,
            "unit": "ns",
            "range": "± 327397.92370300135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3955362.525252525,
            "unit": "ns",
            "range": "± 348864.29253125563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4711504.5,
            "unit": "ns",
            "range": "± 334456.6456812203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4972315.626262627,
            "unit": "ns",
            "range": "± 374038.84819621453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8562463.17,
            "unit": "ns",
            "range": "± 662557.3762160862"
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
        "date": 1681457881658,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10318446.533333333,
            "unit": "ns",
            "range": "± 114452.56857435165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26885915.333333332,
            "unit": "ns",
            "range": "± 270565.36119251867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68959166.4,
            "unit": "ns",
            "range": "± 310617.1676673485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142894579.33333334,
            "unit": "ns",
            "range": "± 385468.53856288915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261477387.07692307,
            "unit": "ns",
            "range": "± 761419.3277919053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58419.29473684211,
            "unit": "ns",
            "range": "± 3876.4814981917643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742740.6593406594,
            "unit": "ns",
            "range": "± 92005.88348218941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3318583.2,
            "unit": "ns",
            "range": "± 85296.9245806475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2806432.23943662,
            "unit": "ns",
            "range": "± 120136.56989258573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6998465.70967742,
            "unit": "ns",
            "range": "± 185696.9160176861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7161115.0703125,
            "unit": "ns",
            "range": "± 47161.527580235845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291725.267708333,
            "unit": "ns",
            "range": "± 5003.454304924649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1614834.1122395834,
            "unit": "ns",
            "range": "± 3076.054230764071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120573.2783854166,
            "unit": "ns",
            "range": "± 3509.6928702944824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000403.0856584822,
            "unit": "ns",
            "range": "± 486.62582124522385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911562.4923828125,
            "unit": "ns",
            "range": "± 302.80438967295584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402466.6451612903,
            "unit": "ns",
            "range": "± 9854.447271996494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331282.01785714284,
            "unit": "ns",
            "range": "± 13568.792703702085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279951.7,
            "unit": "ns",
            "range": "± 8298.207094057248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6994181.666666667,
            "unit": "ns",
            "range": "± 58978.9236273272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4945380.642857143,
            "unit": "ns",
            "range": "± 40474.353886812634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25292.46875,
            "unit": "ns",
            "range": "± 2695.7819525798564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120181.11224489796,
            "unit": "ns",
            "range": "± 9369.40926620139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100933.30526315789,
            "unit": "ns",
            "range": "± 7326.901015499626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228175.91666666666,
            "unit": "ns",
            "range": "± 20657.56799089006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8632.134020618556,
            "unit": "ns",
            "range": "± 1091.9261233868838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24087.81914893617,
            "unit": "ns",
            "range": "± 2600.6424101432763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4280071.5625,
            "unit": "ns",
            "range": "± 82876.47741787674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470982.421052632,
            "unit": "ns",
            "range": "± 96139.74003808542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5221755.806451613,
            "unit": "ns",
            "range": "± 158095.54520677665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5471205.951219512,
            "unit": "ns",
            "range": "± 181388.86069739112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8940745.260869564,
            "unit": "ns",
            "range": "± 217160.80744089943"
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
          "id": "c73507309acdb3ba10a2754f374b1c797d605bc6",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:52:56+09:00",
          "tree_id": "24a44ad3d76f4b9a2d5817a012cf70fd9ab050c5",
          "url": "https://github.com/moreal/libplanet/commit/c73507309acdb3ba10a2754f374b1c797d605bc6"
        },
        "date": 1681459502770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7579136,
            "unit": "ns",
            "range": "± 9118.532025918004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18808390.2,
            "unit": "ns",
            "range": "± 153396.75992769303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47853707.8,
            "unit": "ns",
            "range": "± 300195.8428936017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97643193.4,
            "unit": "ns",
            "range": "± 915520.5082952069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193745109.23076922,
            "unit": "ns",
            "range": "± 1253951.169252625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44563.7125,
            "unit": "ns",
            "range": "± 2335.030047207265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339663.3608247424,
            "unit": "ns",
            "range": "± 122901.66901388971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2582718.8974358975,
            "unit": "ns",
            "range": "± 89887.80442476607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2114366.2328767125,
            "unit": "ns",
            "range": "± 101602.27426704917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5282349.478260869,
            "unit": "ns",
            "range": "± 131894.55034536615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889564.191145834,
            "unit": "ns",
            "range": "± 15684.504397542009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961226.02421875,
            "unit": "ns",
            "range": "± 4949.980046734292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343578.1131510416,
            "unit": "ns",
            "range": "± 2898.600580908854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517236.232291667,
            "unit": "ns",
            "range": "± 3438.7372170785507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807322.4720052084,
            "unit": "ns",
            "range": "± 773.7614217635462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726679.4261997768,
            "unit": "ns",
            "range": "± 654.6118071325952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317832.05555555556,
            "unit": "ns",
            "range": "± 6592.275947895584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256365.82926829267,
            "unit": "ns",
            "range": "± 9160.10525022076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237170.6923076923,
            "unit": "ns",
            "range": "± 2556.7307375049418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5518744,
            "unit": "ns",
            "range": "± 46370.32276760028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3956419.769230769,
            "unit": "ns",
            "range": "± 30221.969884378945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15322.680412371134,
            "unit": "ns",
            "range": "± 1632.0682912232855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80214.22448979592,
            "unit": "ns",
            "range": "± 3189.051219049498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71237.89655172414,
            "unit": "ns",
            "range": "± 2070.9776218841253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162805.94897959183,
            "unit": "ns",
            "range": "± 13072.217785139304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4543.71875,
            "unit": "ns",
            "range": "± 328.26682674232205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14973.947916666666,
            "unit": "ns",
            "range": "± 1036.0427990528665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3074106.736842105,
            "unit": "ns",
            "range": "± 27275.707154173546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3274529.3333333335,
            "unit": "ns",
            "range": "± 32253.275950262934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4146452.7666666666,
            "unit": "ns",
            "range": "± 119580.4668983749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4078170.5185185187,
            "unit": "ns",
            "range": "± 163422.8350202801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7005155.807692308,
            "unit": "ns",
            "range": "± 131607.59983892093"
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
          "id": "08ac4f5eae06ea85487e9c954a9211dd873854f7",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:51:43+09:00",
          "tree_id": "78f9a1a5fcd730f162e85c248eccc2c98abfd48e",
          "url": "https://github.com/moreal/libplanet/commit/08ac4f5eae06ea85487e9c954a9211dd873854f7"
        },
        "date": 1681459514503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210530.416666667,
            "unit": "ns",
            "range": "± 213239.65525159443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21550516.333333332,
            "unit": "ns",
            "range": "± 333974.3092826296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53863872.733333334,
            "unit": "ns",
            "range": "± 846073.4688902164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103709626.58333333,
            "unit": "ns",
            "range": "± 1190494.68193058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208663956.8,
            "unit": "ns",
            "range": "± 3069582.2783970647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48563.760869565216,
            "unit": "ns",
            "range": "± 3194.4489090135935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526077.2891566264,
            "unit": "ns",
            "range": "± 75534.98739132781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2705814.7391304346,
            "unit": "ns",
            "range": "± 66899.38382731419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2432340.2763157897,
            "unit": "ns",
            "range": "± 122119.78963903693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6056529.444444444,
            "unit": "ns",
            "range": "± 168661.06850684836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5924655.3171875,
            "unit": "ns",
            "range": "± 23831.716579837925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837113.6119290865,
            "unit": "ns",
            "range": "± 4767.691892739928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345381.8473958333,
            "unit": "ns",
            "range": "± 5172.853399331425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590139.80703125,
            "unit": "ns",
            "range": "± 4820.659984302337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834176.2097355769,
            "unit": "ns",
            "range": "± 1888.7010181991081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751346.383203125,
            "unit": "ns",
            "range": "± 1086.9109293300628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327280.6,
            "unit": "ns",
            "range": "± 8443.250675682546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270837.9,
            "unit": "ns",
            "range": "± 6202.398694732632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225359.92857142858,
            "unit": "ns",
            "range": "± 1679.6664258708638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5723067.384615385,
            "unit": "ns",
            "range": "± 28464.591300826312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3975955.714285714,
            "unit": "ns",
            "range": "± 61369.60507064937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19125.484210526316,
            "unit": "ns",
            "range": "± 1540.4383312575724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88393.94382022473,
            "unit": "ns",
            "range": "± 4735.904680685121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75697.3870967742,
            "unit": "ns",
            "range": "± 3442.7457939554565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191400.8085106383,
            "unit": "ns",
            "range": "± 16036.733494971599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5774.521276595745,
            "unit": "ns",
            "range": "± 603.2116861037393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18447.104166666668,
            "unit": "ns",
            "range": "± 1771.219671829893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287235.7,
            "unit": "ns",
            "range": "± 75181.77663300287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3479985.85,
            "unit": "ns",
            "range": "± 79305.66669490702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4254810.933333334,
            "unit": "ns",
            "range": "± 78462.40292328064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4559070.119047619,
            "unit": "ns",
            "range": "± 165458.392336696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7374649.771428571,
            "unit": "ns",
            "range": "± 235520.14334822772"
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
          "id": "7ae3bc5559f8e6b976f6a7e294668978dbc34fbe",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-18T11:51:13+09:00",
          "tree_id": "8392a80505f00566b10be9d745188aee6a787c22",
          "url": "https://github.com/moreal/libplanet/commit/7ae3bc5559f8e6b976f6a7e294668978dbc34fbe"
        },
        "date": 1681787096414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7874660.954545454,
            "unit": "ns",
            "range": "± 186293.25718019792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21495536.07142857,
            "unit": "ns",
            "range": "± 262551.0240178862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54011853.53333333,
            "unit": "ns",
            "range": "± 944877.1451176577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107728990.4,
            "unit": "ns",
            "range": "± 724334.0292328434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218580136.6,
            "unit": "ns",
            "range": "± 2410637.526412606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47925.96808510638,
            "unit": "ns",
            "range": "± 2979.635997297294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439984.6282051282,
            "unit": "ns",
            "range": "± 74210.44168682383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700770.581395349,
            "unit": "ns",
            "range": "± 98839.20570426073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284515.884057971,
            "unit": "ns",
            "range": "± 109344.50871961251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5513060.384615385,
            "unit": "ns",
            "range": "± 122096.87354984219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5994682.438020834,
            "unit": "ns",
            "range": "± 31188.00755177652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834664.5336216518,
            "unit": "ns",
            "range": "± 3858.8382292203896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346446.4708333334,
            "unit": "ns",
            "range": "± 3551.898762703363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625186.9396033655,
            "unit": "ns",
            "range": "± 2419.259218519912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826104.8083333333,
            "unit": "ns",
            "range": "± 1167.671812292845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763238.8741536458,
            "unit": "ns",
            "range": "± 419.26552800160516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336781.5714285714,
            "unit": "ns",
            "range": "± 7927.173950820106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278070.24324324325,
            "unit": "ns",
            "range": "± 9201.575213593127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232973.85714285713,
            "unit": "ns",
            "range": "± 3815.419300622205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5805328.571428572,
            "unit": "ns",
            "range": "± 46705.56917000911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4100323.8571428573,
            "unit": "ns",
            "range": "± 53853.569273693305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18427.621052631577,
            "unit": "ns",
            "range": "± 1234.2624051061646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88390.91358024691,
            "unit": "ns",
            "range": "± 4656.321209381745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78687.63157894737,
            "unit": "ns",
            "range": "± 2718.8820081259414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197577.09278350516,
            "unit": "ns",
            "range": "± 15796.100140463517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.729166666667,
            "unit": "ns",
            "range": "± 902.1076313327429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17323.350515463917,
            "unit": "ns",
            "range": "± 1387.9080709323318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3474059.3703703703,
            "unit": "ns",
            "range": "± 96735.29614569861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3601779.976744186,
            "unit": "ns",
            "range": "± 131551.7936871595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4189142,
            "unit": "ns",
            "range": "± 83951.63250908928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4449429.14893617,
            "unit": "ns",
            "range": "± 163877.09285553513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7349478.2727272725,
            "unit": "ns",
            "range": "± 177746.45042177668"
          }
        ]
      },
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
          "id": "e2cc602ced559d738e8ba1632c84fb5d79ef9816",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T13:29:22+09:00",
          "tree_id": "eaf1811621b3e736a563f33774ac185fa35d0024",
          "url": "https://github.com/moreal/libplanet/commit/e2cc602ced559d738e8ba1632c84fb5d79ef9816"
        },
        "date": 1681793018324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8107407.47368421,
            "unit": "ns",
            "range": "± 152060.3754939934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21999905.866666667,
            "unit": "ns",
            "range": "± 254116.32116467188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55557678.833333336,
            "unit": "ns",
            "range": "± 281412.7695583751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111332061,
            "unit": "ns",
            "range": "± 427816.06491107837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222839859.53333333,
            "unit": "ns",
            "range": "± 1403215.8730958921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52250.47872340425,
            "unit": "ns",
            "range": "± 3298.161305055605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546499.9,
            "unit": "ns",
            "range": "± 130204.25452152114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792143.0857142857,
            "unit": "ns",
            "range": "± 91547.9495842516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2410303.0923076924,
            "unit": "ns",
            "range": "± 108210.56749627712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6016754.140350877,
            "unit": "ns",
            "range": "± 258109.2573017037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5941952.944270833,
            "unit": "ns",
            "range": "± 22679.736879831096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927675.3683035714,
            "unit": "ns",
            "range": "± 2364.443932384173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370435.7205729166,
            "unit": "ns",
            "range": "± 2971.711128595184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618488.180889423,
            "unit": "ns",
            "range": "± 1753.6379307704308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835529.4776041667,
            "unit": "ns",
            "range": "± 426.2159331091141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764304.591796875,
            "unit": "ns",
            "range": "± 138.93842292143916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360117.2272727273,
            "unit": "ns",
            "range": "± 7604.782204275076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290602.7619047619,
            "unit": "ns",
            "range": "± 9918.313447821916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243230.6739130435,
            "unit": "ns",
            "range": "± 9258.779134912018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5880258.642857143,
            "unit": "ns",
            "range": "± 42145.393403909875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4080850.3333333335,
            "unit": "ns",
            "range": "± 27954.303189482718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23589.531914893618,
            "unit": "ns",
            "range": "± 2761.9229692766235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104000.90909090909,
            "unit": "ns",
            "range": "± 9167.308158854828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92248.0824742268,
            "unit": "ns",
            "range": "± 6486.339497471627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221511.9693877551,
            "unit": "ns",
            "range": "± 21092.896220728784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7471.278350515464,
            "unit": "ns",
            "range": "± 889.9039946143541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21563.42105263158,
            "unit": "ns",
            "range": "± 2147.735851754999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571491.409090909,
            "unit": "ns",
            "range": "± 85342.90554198682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3809832.222222222,
            "unit": "ns",
            "range": "± 106710.00032594932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373196,
            "unit": "ns",
            "range": "± 116083.54104623676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4784288.557692308,
            "unit": "ns",
            "range": "± 197077.319468474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7599873.074074074,
            "unit": "ns",
            "range": "± 212015.9892832697"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "2ff48faa63b22e7cea06e59da6eef533e1f154ac",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T14:00:28+09:00",
          "tree_id": "26a2576bebb4b708b1bcc6ad9a11cc93782d1a2f",
          "url": "https://github.com/moreal/libplanet/commit/2ff48faa63b22e7cea06e59da6eef533e1f154ac"
        },
        "date": 1681794810522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7545456.285714285,
            "unit": "ns",
            "range": "± 17634.12806258003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19256465.214285713,
            "unit": "ns",
            "range": "± 118727.29112302735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49461364.53333333,
            "unit": "ns",
            "range": "± 301518.0496615339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98839789.13333334,
            "unit": "ns",
            "range": "± 767872.1263567882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200425628.53333333,
            "unit": "ns",
            "range": "± 1680225.0704721874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44707.14457831325,
            "unit": "ns",
            "range": "± 2085.6524108398785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378904.0104166667,
            "unit": "ns",
            "range": "± 95238.19928860864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637157.129032258,
            "unit": "ns",
            "range": "± 77982.20898929102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199758.417721519,
            "unit": "ns",
            "range": "± 113159.95025497267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5401609.7272727275,
            "unit": "ns",
            "range": "± 128380.73414584776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5935202.783854167,
            "unit": "ns",
            "range": "± 23979.45938699935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1817002.3893694195,
            "unit": "ns",
            "range": "± 1849.4830114840454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325902.785435268,
            "unit": "ns",
            "range": "± 4265.352504805176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532505.5421316964,
            "unit": "ns",
            "range": "± 1956.2493028209983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794667.0087239583,
            "unit": "ns",
            "range": "± 587.0309315386718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740154.9822716346,
            "unit": "ns",
            "range": "± 544.118659570164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329892.6206896552,
            "unit": "ns",
            "range": "± 9610.855905893208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267340.8205128205,
            "unit": "ns",
            "range": "± 9128.608041904638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241133.2888888889,
            "unit": "ns",
            "range": "± 9032.034593153372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5676212.8,
            "unit": "ns",
            "range": "± 44784.7493369275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939788.769230769,
            "unit": "ns",
            "range": "± 21150.733884642734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17780.526315789473,
            "unit": "ns",
            "range": "± 1890.2928785913848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84039.69318181818,
            "unit": "ns",
            "range": "± 4612.349687568447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71588.4857142857,
            "unit": "ns",
            "range": "± 2113.478890797999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175560.05376344087,
            "unit": "ns",
            "range": "± 10240.170692537085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5259.257731958763,
            "unit": "ns",
            "range": "± 663.9754682709563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17416.842105263157,
            "unit": "ns",
            "range": "± 1402.4031526146844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237625.9411764704,
            "unit": "ns",
            "range": "± 62929.68207101338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3339981.076923077,
            "unit": "ns",
            "range": "± 36920.92937495285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4156274.5789473685,
            "unit": "ns",
            "range": "± 90563.75111508515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4342229.980769231,
            "unit": "ns",
            "range": "± 162043.68771783647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7113912.533333333,
            "unit": "ns",
            "range": "± 87647.25041882918"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5648f532e065fd41e9d7612f934722cbfba8860c",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T14:28:02+09:00",
          "tree_id": "d2b19ea68fcff95a931ffecf0f56685f3c450591",
          "url": "https://github.com/moreal/libplanet/commit/5648f532e065fd41e9d7612f934722cbfba8860c"
        },
        "date": 1681796467840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7786196,
            "unit": "ns",
            "range": "± 86408.05529496161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19556450.92857143,
            "unit": "ns",
            "range": "± 104358.86066502547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49510774.2,
            "unit": "ns",
            "range": "± 237494.05214452965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100672324.53333333,
            "unit": "ns",
            "range": "± 728406.9267508049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203292820.85714287,
            "unit": "ns",
            "range": "± 534405.3889365634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47387.88421052632,
            "unit": "ns",
            "range": "± 4053.348636288425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403836.898989899,
            "unit": "ns",
            "range": "± 115393.68427952172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649849.923076923,
            "unit": "ns",
            "range": "± 34099.754985584914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224487.0140845072,
            "unit": "ns",
            "range": "± 105124.11372787514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502622.041666667,
            "unit": "ns",
            "range": "± 137638.7937043532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5996361.727120535,
            "unit": "ns",
            "range": "± 15535.198633497526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853030.834263393,
            "unit": "ns",
            "range": "± 4425.996274060459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351874.35390625,
            "unit": "ns",
            "range": "± 1706.7994597014251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556459.89765625,
            "unit": "ns",
            "range": "± 1635.2683202661026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808042.9931640625,
            "unit": "ns",
            "range": "± 484.3461748484592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743083.4363932292,
            "unit": "ns",
            "range": "± 598.7972264640105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329089.2571428571,
            "unit": "ns",
            "range": "± 9965.540513492002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274583.4054054054,
            "unit": "ns",
            "range": "± 9192.444005992274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241859.75,
            "unit": "ns",
            "range": "± 4743.749592885358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5608952.266666667,
            "unit": "ns",
            "range": "± 25762.64677082103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919670.714285714,
            "unit": "ns",
            "range": "± 30626.1160234418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18885.85106382979,
            "unit": "ns",
            "range": "± 1264.0471438520701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91130.2891566265,
            "unit": "ns",
            "range": "± 4856.654907544754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77773.14814814815,
            "unit": "ns",
            "range": "± 2860.2405058356403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184821.4387755102,
            "unit": "ns",
            "range": "± 15461.62151781405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5799.867346938776,
            "unit": "ns",
            "range": "± 912.9820363602998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18944.541666666668,
            "unit": "ns",
            "range": "± 1768.1353956054902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3206552.3333333335,
            "unit": "ns",
            "range": "± 53034.67613022724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415794.43902439,
            "unit": "ns",
            "range": "± 111108.29877152489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252735.533333333,
            "unit": "ns",
            "range": "± 123001.93181766765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4324781.490196078,
            "unit": "ns",
            "range": "± 174410.86119784776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7237848.19047619,
            "unit": "ns",
            "range": "± 167359.235058487"
          }
        ]
      }
    ]
  }
}