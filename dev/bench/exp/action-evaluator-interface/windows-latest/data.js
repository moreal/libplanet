window.BENCHMARK_DATA = {
  "lastUpdate": 1681361622901,
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
      }
    ]
  }
}