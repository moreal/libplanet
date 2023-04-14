window.BENCHMARK_DATA = {
  "lastUpdate": 1681457885784,
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
      }
    ]
  }
}