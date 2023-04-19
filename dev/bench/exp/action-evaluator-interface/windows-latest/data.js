window.BENCHMARK_DATA = {
  "lastUpdate": 1681873502190,
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
        "date": 1681360919199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407060.2040816327,
            "unit": "ns",
            "range": "± 143831.58732823603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679086.868686869,
            "unit": "ns",
            "range": "± 191971.6447208533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278475.5102040814,
            "unit": "ns",
            "range": "± 175809.11292615448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5756698.979591837,
            "unit": "ns",
            "range": "± 350239.19138856384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50104.255319148935,
            "unit": "ns",
            "range": "± 3365.7322740471805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7481028.571428572,
            "unit": "ns",
            "range": "± 266708.8357482783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20114694.444444444,
            "unit": "ns",
            "range": "± 423490.6089273683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50755040,
            "unit": "ns",
            "range": "± 707097.7804680603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100981006.66666667,
            "unit": "ns",
            "range": "± 1129724.067110869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201242713.33333334,
            "unit": "ns",
            "range": "± 3668957.068601116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841081.082589285,
            "unit": "ns",
            "range": "± 17953.41016792021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556775.0390625,
            "unit": "ns",
            "range": "± 27023.111083354022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169327.890625,
            "unit": "ns",
            "range": "± 6574.925544064403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675471.9010416665,
            "unit": "ns",
            "range": "± 41325.18351055572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841102.3958333334,
            "unit": "ns",
            "range": "± 12921.499696494295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771636.1263020834,
            "unit": "ns",
            "range": "± 12649.306048517303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217284.210526316,
            "unit": "ns",
            "range": "± 99937.82804165904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490157.8947368423,
            "unit": "ns",
            "range": "± 75848.68940338078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043388.5714285714,
            "unit": "ns",
            "range": "± 132340.22502498576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379160.638297873,
            "unit": "ns",
            "range": "± 263986.09372712916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7208061.764705882,
            "unit": "ns",
            "range": "± 343470.06345006486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316444.1176470588,
            "unit": "ns",
            "range": "± 7869.626735458088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268140.9090909091,
            "unit": "ns",
            "range": "± 6380.301462567952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218547.4358974359,
            "unit": "ns",
            "range": "± 7544.0630955211245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5309368.75,
            "unit": "ns",
            "range": "± 65879.86762534767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3697330.769230769,
            "unit": "ns",
            "range": "± 50517.77549561779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23930,
            "unit": "ns",
            "range": "± 2620.889892724842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101826.80412371134,
            "unit": "ns",
            "range": "± 10609.493738549269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89797.9797979798,
            "unit": "ns",
            "range": "± 9303.444389568402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191355.31914893616,
            "unit": "ns",
            "range": "± 15545.110333265338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8623.404255319148,
            "unit": "ns",
            "range": "± 1625.1666933139402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22479.166666666668,
            "unit": "ns",
            "range": "± 2767.4391227713777"
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
        "date": 1681361078528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636867.7083333333,
            "unit": "ns",
            "range": "± 143073.78184536498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947541.379310345,
            "unit": "ns",
            "range": "± 127726.75197465075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2616260,
            "unit": "ns",
            "range": "± 168766.60164199324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6563631.884057971,
            "unit": "ns",
            "range": "± 314177.09388400376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61015.30612244898,
            "unit": "ns",
            "range": "± 6082.310874612219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8505561.538461538,
            "unit": "ns",
            "range": "± 297707.5689996411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23411821.42857143,
            "unit": "ns",
            "range": "± 211869.2636748188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59633040,
            "unit": "ns",
            "range": "± 695057.4331870506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120058528.57142857,
            "unit": "ns",
            "range": "± 734072.1442522069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235419671.42857143,
            "unit": "ns",
            "range": "± 1590580.397904426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5778247.544642857,
            "unit": "ns",
            "range": "± 31790.648020985005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851578.7527901786,
            "unit": "ns",
            "range": "± 15222.467874914744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421029.3229166667,
            "unit": "ns",
            "range": "± 13851.591943368736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101202.8125,
            "unit": "ns",
            "range": "± 12127.962977683927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985552.3137019231,
            "unit": "ns",
            "range": "± 1964.986247314902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923471.6015625,
            "unit": "ns",
            "range": "± 4388.717820693358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859493.3333333335,
            "unit": "ns",
            "range": "± 66341.27638492458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4005790.566037736,
            "unit": "ns",
            "range": "± 155830.88499068833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4676482.142857143,
            "unit": "ns",
            "range": "± 129544.70143279566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5142023.529411765,
            "unit": "ns",
            "range": "± 104275.27588918051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8260228.205128205,
            "unit": "ns",
            "range": "± 288546.25639275345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376650,
            "unit": "ns",
            "range": "± 8174.189159852654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309790.625,
            "unit": "ns",
            "range": "± 13507.913245135062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263474.4680851064,
            "unit": "ns",
            "range": "± 15043.113211379097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6352178.947368421,
            "unit": "ns",
            "range": "± 134318.20667085625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4479584.615384615,
            "unit": "ns",
            "range": "± 64889.10856419905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27240.816326530614,
            "unit": "ns",
            "range": "± 3745.728474004464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115248.48484848485,
            "unit": "ns",
            "range": "± 10188.772969286636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110218,
            "unit": "ns",
            "range": "± 11702.157100640925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221968.3673469388,
            "unit": "ns",
            "range": "± 24154.5777904479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9614.736842105263,
            "unit": "ns",
            "range": "± 1294.8316592344654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25744.897959183672,
            "unit": "ns",
            "range": "± 2823.953960117228"
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
        "date": 1681361605110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1716076.0416666667,
            "unit": "ns",
            "range": "± 255589.35742804795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3381711.5789473685,
            "unit": "ns",
            "range": "± 467310.73649015365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2864617.0212765955,
            "unit": "ns",
            "range": "± 282099.04132372193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7273557.894736842,
            "unit": "ns",
            "range": "± 660611.3660327763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67009.1836734694,
            "unit": "ns",
            "range": "± 19339.874341187602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9462359.595959596,
            "unit": "ns",
            "range": "± 1185906.9473355024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25856428.125,
            "unit": "ns",
            "range": "± 2209057.677296294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61428166.12903226,
            "unit": "ns",
            "range": "± 3507828.601834149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125897396.05263157,
            "unit": "ns",
            "range": "± 6398124.833698089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253319218.1818182,
            "unit": "ns",
            "range": "± 9506724.052400963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6167537.289663462,
            "unit": "ns",
            "range": "± 75567.06946025968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928736.5792410714,
            "unit": "ns",
            "range": "± 33279.28859687004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448023.73046875,
            "unit": "ns",
            "range": "± 20838.068031362207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3204941.4741847827,
            "unit": "ns",
            "range": "± 79705.68365498658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070760.4669744319,
            "unit": "ns",
            "range": "± 25629.308020916975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 971608.6838942308,
            "unit": "ns",
            "range": "± 23817.546841556185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3577465.053763441,
            "unit": "ns",
            "range": "± 424166.5110764251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3958038.202247191,
            "unit": "ns",
            "range": "± 436614.9279882513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4858667.021276596,
            "unit": "ns",
            "range": "± 414873.0142260006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5257648.958333333,
            "unit": "ns",
            "range": "± 633281.6064370852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8890985.263157895,
            "unit": "ns",
            "range": "± 952933.032070094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 418336.7346938776,
            "unit": "ns",
            "range": "± 70777.32270894691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335169.4736842105,
            "unit": "ns",
            "range": "± 58378.18755010246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298705.2631578947,
            "unit": "ns",
            "range": "± 52336.51011629851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6590147.311827957,
            "unit": "ns",
            "range": "± 565597.8834655754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4765701.098901099,
            "unit": "ns",
            "range": "± 461544.84421451535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27790.909090909092,
            "unit": "ns",
            "range": "± 10611.873316600117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114323.40425531915,
            "unit": "ns",
            "range": "± 31020.820013467386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90714.73684210527,
            "unit": "ns",
            "range": "± 21856.607007420425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 233095.87628865978,
            "unit": "ns",
            "range": "± 43222.522383026226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6168.181818181818,
            "unit": "ns",
            "range": "± 1078.903813055891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26245.833333333332,
            "unit": "ns",
            "range": "± 10497.437448370729"
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "bc423d80e23460afed0d8371d38f89f8924adbbb",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-14T16:59:49+09:00",
          "tree_id": "7e96db594e8787d36932929ecac7ee6d732fa02f",
          "url": "https://github.com/moreal/libplanet/commit/bc423d80e23460afed0d8371d38f89f8924adbbb"
        },
        "date": 1681460123997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405175.7894736843,
            "unit": "ns",
            "range": "± 95835.35939173201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471246.153846154,
            "unit": "ns",
            "range": "± 65075.91401290792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2280608.3333333335,
            "unit": "ns",
            "range": "± 200717.83843661402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5723197.97979798,
            "unit": "ns",
            "range": "± 386577.9940789196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50290.32258064516,
            "unit": "ns",
            "range": "± 3461.6553126367608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7211512.5,
            "unit": "ns",
            "range": "± 182090.70914985106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19798869.230769232,
            "unit": "ns",
            "range": "± 245676.23472304418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49380758.333333336,
            "unit": "ns",
            "range": "± 351422.199998115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101564374.35897435,
            "unit": "ns",
            "range": "± 3502238.616695414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200623470.5882353,
            "unit": "ns",
            "range": "± 4043410.166673161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849945.3125,
            "unit": "ns",
            "range": "± 25444.69641363144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1555269.2057291667,
            "unit": "ns",
            "range": "± 13328.411832231754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1198605.72265625,
            "unit": "ns",
            "range": "± 12257.756490060352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654472.566105769,
            "unit": "ns",
            "range": "± 11356.214511045495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851788.22265625,
            "unit": "ns",
            "range": "± 6647.11925807206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787480.7747395834,
            "unit": "ns",
            "range": "± 10038.13882981591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3267703.0303030303,
            "unit": "ns",
            "range": "± 102394.87745014543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448251.282051282,
            "unit": "ns",
            "range": "± 102604.8036009879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3884700,
            "unit": "ns",
            "range": "± 60667.530284075605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364666.666666667,
            "unit": "ns",
            "range": "± 120098.8439065602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6911821.739130435,
            "unit": "ns",
            "range": "± 173133.1121014373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317646.34146341466,
            "unit": "ns",
            "range": "± 10230.911434495356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260204.08163265305,
            "unit": "ns",
            "range": "± 9379.275895639845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214976.19047619047,
            "unit": "ns",
            "range": "± 4934.562266493834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5295960,
            "unit": "ns",
            "range": "± 42815.1642028182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3671838.4615384615,
            "unit": "ns",
            "range": "± 31492.473663335775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22905.154639175256,
            "unit": "ns",
            "range": "± 2281.692132224305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97289.79591836735,
            "unit": "ns",
            "range": "± 7247.445192175749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88503.15789473684,
            "unit": "ns",
            "range": "± 7960.0792874215795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183730.37974683545,
            "unit": "ns",
            "range": "± 8158.562505836173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8285.567010309278,
            "unit": "ns",
            "range": "± 1119.894869574972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20762.105263157893,
            "unit": "ns",
            "range": "± 1980.0160620113838"
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
          "id": "e17727e868a79ac97f31f6fedf73b1141434c03a",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T12:00:12+09:00",
          "tree_id": "8f59200e7040062a0cb82c6864fa5eb19690eb45",
          "url": "https://github.com/moreal/libplanet/commit/e17727e868a79ac97f31f6fedf73b1141434c03a"
        },
        "date": 1681787939490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1805338.2978723405,
            "unit": "ns",
            "range": "± 160554.91145639407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3446295.081967213,
            "unit": "ns",
            "range": "± 155053.0816916468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2998025.806451613,
            "unit": "ns",
            "range": "± 285108.21130384016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7582410.752688172,
            "unit": "ns",
            "range": "± 436199.97544563795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82113.82978723405,
            "unit": "ns",
            "range": "± 6990.632765732993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9730537.5,
            "unit": "ns",
            "range": "± 345211.74823837454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25101781.25,
            "unit": "ns",
            "range": "± 476113.7808252001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64542735.71428572,
            "unit": "ns",
            "range": "± 766958.8702312359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130363128.57142857,
            "unit": "ns",
            "range": "± 1918928.1128270025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266554632.2580645,
            "unit": "ns",
            "range": "± 7521668.671927664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6285842.064144737,
            "unit": "ns",
            "range": "± 132281.50729713353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920539.84375,
            "unit": "ns",
            "range": "± 24898.701135897496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1498265.625,
            "unit": "ns",
            "range": "± 21581.357365145806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3233361.886160714,
            "unit": "ns",
            "range": "± 42199.175030961196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071882.1346507352,
            "unit": "ns",
            "range": "± 21677.910712940396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 997210.927734375,
            "unit": "ns",
            "range": "± 22882.470260504102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4156417.9487179485,
            "unit": "ns",
            "range": "± 211908.4688118414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4440028.070175438,
            "unit": "ns",
            "range": "± 188984.49743146542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5475432.653061224,
            "unit": "ns",
            "range": "± 209948.38590686512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5546757.142857143,
            "unit": "ns",
            "range": "± 275022.71649168583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9308250,
            "unit": "ns",
            "range": "± 341318.1899760261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 428390.42553191487,
            "unit": "ns",
            "range": "± 25546.79900891542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357277.8947368421,
            "unit": "ns",
            "range": "± 25887.695996966493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322952.1505376344,
            "unit": "ns",
            "range": "± 22756.18873536825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6954564,
            "unit": "ns",
            "range": "± 181313.17492118437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4837542.857142857,
            "unit": "ns",
            "range": "± 63760.54620803725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27601.0989010989,
            "unit": "ns",
            "range": "± 5960.695233602173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125633.67346938775,
            "unit": "ns",
            "range": "± 16417.434433455634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121459.375,
            "unit": "ns",
            "range": "± 19362.20723675241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239795.6043956044,
            "unit": "ns",
            "range": "± 25917.40261372189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9969.23076923077,
            "unit": "ns",
            "range": "± 1484.0404537532218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26901.136363636364,
            "unit": "ns",
            "range": "± 2998.2943165702445"
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
          "id": "05cd79eaef024086fd58036f03984659ea916811",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T14:55:02+09:00",
          "tree_id": "caea6f4ba83e1b733e681746a3ec0fdd7c6dbb04",
          "url": "https://github.com/moreal/libplanet/commit/05cd79eaef024086fd58036f03984659ea916811"
        },
        "date": 1681798414841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746858.6956521738,
            "unit": "ns",
            "range": "± 250066.34467025247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3195833.695652174,
            "unit": "ns",
            "range": "± 233615.29251331594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687919.565217391,
            "unit": "ns",
            "range": "± 151222.38499271797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7177343.684210527,
            "unit": "ns",
            "range": "± 467350.2481306409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62529.5918367347,
            "unit": "ns",
            "range": "± 10930.654984418194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8644752.272727273,
            "unit": "ns",
            "range": "± 471609.25916282495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23100978.57142857,
            "unit": "ns",
            "range": "± 989836.5078434622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57760953.488372095,
            "unit": "ns",
            "range": "± 1750895.525472178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115475953.84615384,
            "unit": "ns",
            "range": "± 1878199.3675749584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234591985.7142857,
            "unit": "ns",
            "range": "± 5425650.455040918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6208895.260416667,
            "unit": "ns",
            "range": "± 112907.70785559661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905528.5416666667,
            "unit": "ns",
            "range": "± 23705.728872731892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421033.0859375,
            "unit": "ns",
            "range": "± 20548.59111635522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3209109.21875,
            "unit": "ns",
            "range": "± 34365.68929044188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048092.2926682692,
            "unit": "ns",
            "range": "± 15748.28866241585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961803.4598214285,
            "unit": "ns",
            "range": "± 14688.53410116404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3706194.6808510637,
            "unit": "ns",
            "range": "± 232126.01572357956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895483.3333333335,
            "unit": "ns",
            "range": "± 209286.69782752605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4930293.75,
            "unit": "ns",
            "range": "± 252297.90325280052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4838058.928571428,
            "unit": "ns",
            "range": "± 206725.30194508293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8762887.75510204,
            "unit": "ns",
            "range": "± 346783.892018654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377312,
            "unit": "ns",
            "range": "± 19063.13096430285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303803.4482758621,
            "unit": "ns",
            "range": "± 13264.157818633967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250527.27272727274,
            "unit": "ns",
            "range": "± 7916.686204122622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6275106.25,
            "unit": "ns",
            "range": "± 223878.7902550481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4415456.25,
            "unit": "ns",
            "range": "± 81154.49438160115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22506.122448979593,
            "unit": "ns",
            "range": "± 6789.938224921764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101339.79591836735,
            "unit": "ns",
            "range": "± 13902.61222799676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88342.70833333333,
            "unit": "ns",
            "range": "± 13546.425007449609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234486.45833333334,
            "unit": "ns",
            "range": "± 31250.625660403457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6414.634146341464,
            "unit": "ns",
            "range": "± 1381.9937245234155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20415.957446808512,
            "unit": "ns",
            "range": "± 3683.333669775376"
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
          "id": "760b1c30c120e2811c3432bf3b3e5d944f8d9963",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T16:18:39+09:00",
          "tree_id": "5f79c48b62b6692fc22161cec81f95e63ee5bed9",
          "url": "https://github.com/moreal/libplanet/commit/760b1c30c120e2811c3432bf3b3e5d944f8d9963"
        },
        "date": 1681803311591,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376245.4545454546,
            "unit": "ns",
            "range": "± 133650.9849194698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2531481.0126582277,
            "unit": "ns",
            "range": "± 131382.8590817685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163526.262626263,
            "unit": "ns",
            "range": "± 179226.54150763346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5538903,
            "unit": "ns",
            "range": "± 336235.6435161315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47867.02127659575,
            "unit": "ns",
            "range": "± 3074.710871899828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6911706.666666667,
            "unit": "ns",
            "range": "± 122404.1051287944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18310516.666666668,
            "unit": "ns",
            "range": "± 138897.037296326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46403600,
            "unit": "ns",
            "range": "± 610755.53620086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92168343.75,
            "unit": "ns",
            "range": "± 1733681.5712883954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186837038.0952381,
            "unit": "ns",
            "range": "± 4337540.504764905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751946.484375,
            "unit": "ns",
            "range": "± 27358.35664768814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499291.8489583333,
            "unit": "ns",
            "range": "± 16269.956339618635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156375.9375,
            "unit": "ns",
            "range": "± 6821.8852211941985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627184.6875,
            "unit": "ns",
            "range": "± 11694.420097324291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818588.02734375,
            "unit": "ns",
            "range": "± 5851.121590099654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761010.0716145834,
            "unit": "ns",
            "range": "± 3771.9205779508966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021480,
            "unit": "ns",
            "range": "± 68707.46990722793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3194147.272727273,
            "unit": "ns",
            "range": "± 135054.9817454954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3918523.076923077,
            "unit": "ns",
            "range": "± 63394.967647889236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4500746.666666667,
            "unit": "ns",
            "range": "± 83091.63501534802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6746232.5,
            "unit": "ns",
            "range": "± 235212.23628067024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308071.6417910448,
            "unit": "ns",
            "range": "± 13646.242750408464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250497.36842105264,
            "unit": "ns",
            "range": "± 8171.786891233311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215930.30303030304,
            "unit": "ns",
            "range": "± 6816.913013256296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5304560,
            "unit": "ns",
            "range": "± 36875.90773701132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3644464.285714286,
            "unit": "ns",
            "range": "± 59599.69807800213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21215.625,
            "unit": "ns",
            "range": "± 2681.9210760003243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91036.73469387754,
            "unit": "ns",
            "range": "± 8575.887892538118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77682.47422680413,
            "unit": "ns",
            "range": "± 5278.178550829158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183347.1264367816,
            "unit": "ns",
            "range": "± 17031.13318192809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7132.105263157895,
            "unit": "ns",
            "range": "± 1183.573649819255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18745.918367346938,
            "unit": "ns",
            "range": "± 2365.480634552451"
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
          "id": "0981cf98dd33440f8ea51834ee841bfb579ed0df",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T16:41:17+09:00",
          "tree_id": "8cc3cccb75796d7608f3ccb3e9eb707dfa6e153f",
          "url": "https://github.com/moreal/libplanet/commit/0981cf98dd33440f8ea51834ee841bfb579ed0df"
        },
        "date": 1681804841305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510692.857142857,
            "unit": "ns",
            "range": "± 96770.9286349262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922954.5454545454,
            "unit": "ns",
            "range": "± 176802.8957150014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2497924.7191011235,
            "unit": "ns",
            "range": "± 137400.05977974323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6398035,
            "unit": "ns",
            "range": "± 461766.88494883815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52773.62637362637,
            "unit": "ns",
            "range": "± 3124.2718321353664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8173784,
            "unit": "ns",
            "range": "± 202426.52922315625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22586618.75,
            "unit": "ns",
            "range": "± 383068.3989729075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57288164.28571428,
            "unit": "ns",
            "range": "± 986267.6502132383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113776455.31914894,
            "unit": "ns",
            "range": "± 4340203.148912477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220849286.36363637,
            "unit": "ns",
            "range": "± 4942551.849793833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5322774.759615385,
            "unit": "ns",
            "range": "± 84184.71562913987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1769553.7055121528,
            "unit": "ns",
            "range": "± 59064.27820877733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341087.2265625,
            "unit": "ns",
            "range": "± 47643.46220809072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3076149.874441964,
            "unit": "ns",
            "range": "± 87850.51463033898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944814.9381510416,
            "unit": "ns",
            "range": "± 15386.39394590003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902432.8287760416,
            "unit": "ns",
            "range": "± 13404.718781264519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3480462.3188405796,
            "unit": "ns",
            "range": "± 167001.9602750829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3515308.6021505375,
            "unit": "ns",
            "range": "± 258307.03909676522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4290084.343434343,
            "unit": "ns",
            "range": "± 305438.9110776979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4896241.071428572,
            "unit": "ns",
            "range": "± 210203.0825626284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8074364.646464647,
            "unit": "ns",
            "range": "± 473890.4216130111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346982.79569892475,
            "unit": "ns",
            "range": "± 21871.25184612218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286694.7916666667,
            "unit": "ns",
            "range": "± 17719.83943013662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245981.52173913043,
            "unit": "ns",
            "range": "± 14170.476422988299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6136164,
            "unit": "ns",
            "range": "± 152181.54969202628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4211323.2558139535,
            "unit": "ns",
            "range": "± 154116.73194477538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23113.131313131315,
            "unit": "ns",
            "range": "± 3787.510260365882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95452.12765957447,
            "unit": "ns",
            "range": "± 8244.355889124301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95047.95918367348,
            "unit": "ns",
            "range": "± 11540.741186437615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 196319.38775510204,
            "unit": "ns",
            "range": "± 19312.27726679428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7180.412371134021,
            "unit": "ns",
            "range": "± 1049.6665318941505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22097.916666666668,
            "unit": "ns",
            "range": "± 2370.0756890719385"
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "aa457bead18a4adaf4c37aa71cf3f046e42b5018",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-19T11:45:52+09:00",
          "tree_id": "2727211c7896630626f87c16b9c74bb5696dd742",
          "url": "https://github.com/moreal/libplanet/commit/aa457bead18a4adaf4c37aa71cf3f046e42b5018"
        },
        "date": 1681873303380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431334.3434343433,
            "unit": "ns",
            "range": "± 127887.4578280356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542224,
            "unit": "ns",
            "range": "± 96683.16192595275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349869.387755102,
            "unit": "ns",
            "range": "± 179866.25982758292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5708682.828282828,
            "unit": "ns",
            "range": "± 368980.4281188588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52511.458333333336,
            "unit": "ns",
            "range": "± 4668.525514812588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7530273.333333333,
            "unit": "ns",
            "range": "± 126193.9916311768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20088346.153846152,
            "unit": "ns",
            "range": "± 215830.27519860995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50454692.85714286,
            "unit": "ns",
            "range": "± 538810.9822195902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101402953.33333333,
            "unit": "ns",
            "range": "± 876207.3481501859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201494740,
            "unit": "ns",
            "range": "± 2005459.7730053966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862643.582589285,
            "unit": "ns",
            "range": "± 16811.307046728463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547283.970424107,
            "unit": "ns",
            "range": "± 5533.908815492945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172392.96875,
            "unit": "ns",
            "range": "± 6273.324015062067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690817.713341346,
            "unit": "ns",
            "range": "± 13171.945861260076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840010.8468191965,
            "unit": "ns",
            "range": "± 3199.1798038561496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770682.6888020834,
            "unit": "ns",
            "range": "± 2536.586097705049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216069.696969697,
            "unit": "ns",
            "range": "± 99442.84628886233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367063.888888889,
            "unit": "ns",
            "range": "± 112427.48050639521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4018809.375,
            "unit": "ns",
            "range": "± 122445.96006026758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4341727.027027027,
            "unit": "ns",
            "range": "± 146201.93160421925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7108157.142857143,
            "unit": "ns",
            "range": "± 283109.5591816002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327027.6923076923,
            "unit": "ns",
            "range": "± 14676.581129603928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275673.8461538461,
            "unit": "ns",
            "range": "± 12761.089257522712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223700,
            "unit": "ns",
            "range": "± 5929.586832149437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5318614.285714285,
            "unit": "ns",
            "range": "± 84477.85196444967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3631246.153846154,
            "unit": "ns",
            "range": "± 45780.17430039295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23526.530612244896,
            "unit": "ns",
            "range": "± 3451.715575851956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103089.69072164949,
            "unit": "ns",
            "range": "± 9770.357854842567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94395.8762886598,
            "unit": "ns",
            "range": "± 11179.248982729985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125776.28865979382,
            "unit": "ns",
            "range": "± 17164.75175320461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7803.092783505154,
            "unit": "ns",
            "range": "± 1430.869025587206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22675.51020408163,
            "unit": "ns",
            "range": "± 3247.8719829175193"
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "40602c579b54d72dd3c255698a6d8b22ad1db994",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-19T11:49:06+09:00",
          "tree_id": "641b86f21b5925da5c668908e3c739694d65b159",
          "url": "https://github.com/moreal/libplanet/commit/40602c579b54d72dd3c255698a6d8b22ad1db994"
        },
        "date": 1681873486837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309982.2916666667,
            "unit": "ns",
            "range": "± 101120.07452819502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2439189.7435897435,
            "unit": "ns",
            "range": "± 84023.41714593551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169644.1860465114,
            "unit": "ns",
            "range": "± 115686.98193543509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5413975.757575758,
            "unit": "ns",
            "range": "± 411281.8374478396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47479.710144927536,
            "unit": "ns",
            "range": "± 2302.0821591962535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6756923.076923077,
            "unit": "ns",
            "range": "± 58065.181102018934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18770376.923076924,
            "unit": "ns",
            "range": "± 199789.38974933143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45410135,
            "unit": "ns",
            "range": "± 987147.5575057023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90727278.57142857,
            "unit": "ns",
            "range": "± 1275955.9765606644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183090776.92307693,
            "unit": "ns",
            "range": "± 2826958.822997441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4695529.296875,
            "unit": "ns",
            "range": "± 11227.30258148735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493336.9010416667,
            "unit": "ns",
            "range": "± 5141.021613283797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1131074.4010416667,
            "unit": "ns",
            "range": "± 5604.315217893423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612171.5625,
            "unit": "ns",
            "range": "± 14692.012788768277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820525.76171875,
            "unit": "ns",
            "range": "± 3498.9124926965806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766988.7067522322,
            "unit": "ns",
            "range": "± 2463.208771411379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912016,
            "unit": "ns",
            "range": "± 75706.91117724986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3114630.303030303,
            "unit": "ns",
            "range": "± 98315.29155238417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3865243.3333333335,
            "unit": "ns",
            "range": "± 113976.16412437186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952335.714285714,
            "unit": "ns",
            "range": "± 143027.4744567538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6604825,
            "unit": "ns",
            "range": "± 194673.60110642103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294907.6923076923,
            "unit": "ns",
            "range": "± 7987.48636690783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238678.57142857142,
            "unit": "ns",
            "range": "± 10229.080013475206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207078.57142857142,
            "unit": "ns",
            "range": "± 1553.7441485395461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5127535.714285715,
            "unit": "ns",
            "range": "± 64217.270707675336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3545535.714285714,
            "unit": "ns",
            "range": "± 47974.361857187796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19034.736842105263,
            "unit": "ns",
            "range": "± 1769.7077785613535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82111.68831168831,
            "unit": "ns",
            "range": "± 4209.355933543317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74985.56701030929,
            "unit": "ns",
            "range": "± 5125.32498341003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93893.87755102041,
            "unit": "ns",
            "range": "± 12372.465408054752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6079.166666666667,
            "unit": "ns",
            "range": "± 921.2024940737617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17907.731958762888,
            "unit": "ns",
            "range": "± 1585.273047692047"
          }
        ]
      }
    ]
  }
}