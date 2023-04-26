window.BENCHMARK_DATA = {
  "lastUpdate": 1682504550374,
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
          "id": "71854094e6b4fb791173a6c8a2a6a14f6d1f2e17",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T17:10:51+09:00",
          "tree_id": "201e1f29e6b6f6eb3048aa9a72d9cd1de60e6b5a",
          "url": "https://github.com/moreal/libplanet/commit/71854094e6b4fb791173a6c8a2a6a14f6d1f2e17"
        },
        "date": 1682497814281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655763.5416666667,
            "unit": "ns",
            "range": "± 141098.82771700848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991950,
            "unit": "ns",
            "range": "± 151611.87068740142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617797.9591836734,
            "unit": "ns",
            "range": "± 178771.23144306082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6487256.060606061,
            "unit": "ns",
            "range": "± 440804.9605303919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56122.34042553192,
            "unit": "ns",
            "range": "± 4322.239419941293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8365757.142857143,
            "unit": "ns",
            "range": "± 144159.8709995032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23044385.714285713,
            "unit": "ns",
            "range": "± 249980.51495495177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58115446.15384615,
            "unit": "ns",
            "range": "± 433840.6151560436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115660362.5,
            "unit": "ns",
            "range": "± 2252193.8823807626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238334209.52380952,
            "unit": "ns",
            "range": "± 5571381.410377929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5719095.104166667,
            "unit": "ns",
            "range": "± 91613.87238737494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859562.8255208333,
            "unit": "ns",
            "range": "± 18993.607505008353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405919.8521205357,
            "unit": "ns",
            "range": "± 10777.899436577243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3159683.9713541665,
            "unit": "ns",
            "range": "± 28697.57682929361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985712.4162946428,
            "unit": "ns",
            "range": "± 6598.133170247245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916103.7179129465,
            "unit": "ns",
            "range": "± 7394.530160049213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3746750,
            "unit": "ns",
            "range": "± 120974.78074275471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3997960,
            "unit": "ns",
            "range": "± 103429.85948619158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4604558.333333333,
            "unit": "ns",
            "range": "± 117450.82196268422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5047265.517241379,
            "unit": "ns",
            "range": "± 144070.87114101188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7974544.444444444,
            "unit": "ns",
            "range": "± 301010.080286929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313709.3023255814,
            "unit": "ns",
            "range": "± 11467.96394835233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302346.1538461539,
            "unit": "ns",
            "range": "± 10481.106966292557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257915.6862745098,
            "unit": "ns",
            "range": "± 10501.68315174324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4708764.285714285,
            "unit": "ns",
            "range": "± 47002.62852130812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209569.230769231,
            "unit": "ns",
            "range": "± 56455.327245167704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24356.25,
            "unit": "ns",
            "range": "± 2524.107450377783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105612.37113402062,
            "unit": "ns",
            "range": "± 8714.944751832418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99066.66666666667,
            "unit": "ns",
            "range": "± 9491.077989538846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119251.03092783505,
            "unit": "ns",
            "range": "± 17957.388769699144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7731.914893617021,
            "unit": "ns",
            "range": "± 1287.4257691061612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23002.15053763441,
            "unit": "ns",
            "range": "± 1761.6061405670116"
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
          "id": "a5dfb9bd90f0889ecbd9bda78425acd374ab16a8",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T18:21:34+09:00",
          "tree_id": "42f6deb3592a76edc4e53b869ba3b54083100fd9",
          "url": "https://github.com/moreal/libplanet/commit/a5dfb9bd90f0889ecbd9bda78425acd374ab16a8"
        },
        "date": 1682502219169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689387.3684210526,
            "unit": "ns",
            "range": "± 148810.9883855279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109726.6233766233,
            "unit": "ns",
            "range": "± 159097.45101675057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2666785.714285714,
            "unit": "ns",
            "range": "± 208129.87568977015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6496424.528301887,
            "unit": "ns",
            "range": "± 268003.3322881671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61324.7311827957,
            "unit": "ns",
            "range": "± 5065.412466873801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8990218.918918919,
            "unit": "ns",
            "range": "± 305259.06469190493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23999925,
            "unit": "ns",
            "range": "± 293240.48810427997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62074645.833333336,
            "unit": "ns",
            "range": "± 2432996.658615324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122255682.5,
            "unit": "ns",
            "range": "± 4261901.848632627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250141620,
            "unit": "ns",
            "range": "± 8823079.13053557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5914679.241071428,
            "unit": "ns",
            "range": "± 87423.13961664822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896977.79296875,
            "unit": "ns",
            "range": "± 26584.942256241928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467885.1254111843,
            "unit": "ns",
            "range": "± 31230.235301442022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3273775.2297794116,
            "unit": "ns",
            "range": "± 64890.81797912969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032877.5862068966,
            "unit": "ns",
            "range": "± 29185.52575262613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941740.8528645834,
            "unit": "ns",
            "range": "± 15160.676540208166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3856958.3333333335,
            "unit": "ns",
            "range": "± 56005.364326404786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4118866.6666666665,
            "unit": "ns",
            "range": "± 156343.92304380517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4881037.7049180325,
            "unit": "ns",
            "range": "± 216769.6466789377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5049340.816326531,
            "unit": "ns",
            "range": "± 189312.744902854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8161314.583333333,
            "unit": "ns",
            "range": "± 303553.0455866471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333423.40425531915,
            "unit": "ns",
            "range": "± 12939.074840355834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310031.8181818182,
            "unit": "ns",
            "range": "± 13524.79385983568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274180.4597701149,
            "unit": "ns",
            "range": "± 14892.247390649034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795575,
            "unit": "ns",
            "range": "± 81008.39874152967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4365697.05882353,
            "unit": "ns",
            "range": "± 70487.38466604378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28009.473684210527,
            "unit": "ns",
            "range": "± 2594.514412986316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114288.65979381443,
            "unit": "ns",
            "range": "± 9286.132989219504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109488.54166666667,
            "unit": "ns",
            "range": "± 11618.42338966021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123516.84210526316,
            "unit": "ns",
            "range": "± 17783.357344220767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9777.659574468085,
            "unit": "ns",
            "range": "± 1356.9537559429057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27113.82978723404,
            "unit": "ns",
            "range": "± 2864.9851681512832"
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
          "id": "0d32f8e6cfbfcba0f2d069c336caacc01267912e",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T19:07:18+09:00",
          "tree_id": "e041f08868a225c4c03c1ca219a4342deb07d9d0",
          "url": "https://github.com/moreal/libplanet/commit/0d32f8e6cfbfcba0f2d069c336caacc01267912e"
        },
        "date": 1682504534467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1331132.9787234042,
            "unit": "ns",
            "range": "± 107032.93974768606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419848.214285714,
            "unit": "ns",
            "range": "± 100933.17859954572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2102579,
            "unit": "ns",
            "range": "± 144756.3290743127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5381061,
            "unit": "ns",
            "range": "± 400988.10478717205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46628.42105263158,
            "unit": "ns",
            "range": "± 2842.371768020006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6717971.428571428,
            "unit": "ns",
            "range": "± 15994.20224626741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18297050,
            "unit": "ns",
            "range": "± 374753.22743185045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45965643.75,
            "unit": "ns",
            "range": "± 887012.6357376954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92204600,
            "unit": "ns",
            "range": "± 1508244.7840358769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182801086.66666666,
            "unit": "ns",
            "range": "± 3134647.4932522126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4670247.544642857,
            "unit": "ns",
            "range": "± 13236.964266057248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1472836.0611979167,
            "unit": "ns",
            "range": "± 6175.342564373902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139803.5807291667,
            "unit": "ns",
            "range": "± 8893.553403676666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598630.2083333335,
            "unit": "ns",
            "range": "± 11740.798230663257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827840.1888020834,
            "unit": "ns",
            "range": "± 2742.033009598096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755939.3415178572,
            "unit": "ns",
            "range": "± 2036.5909407596341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2884148.1481481483,
            "unit": "ns",
            "range": "± 63477.97540740695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3090047.0588235296,
            "unit": "ns",
            "range": "± 89617.01419658873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3777186.6666666665,
            "unit": "ns",
            "range": "± 57893.10181787842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3829272.727272727,
            "unit": "ns",
            "range": "± 178751.6829790203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6204165.517241379,
            "unit": "ns",
            "range": "± 180542.71215236036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254531.42857142858,
            "unit": "ns",
            "range": "± 8295.561230830242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235425,
            "unit": "ns",
            "range": "± 6185.2582286302895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206771.42857142858,
            "unit": "ns",
            "range": "± 3536.9323021355826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3911869.565217391,
            "unit": "ns",
            "range": "± 95804.54266503712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3435442.8571428573,
            "unit": "ns",
            "range": "± 33756.90731107919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17781.443298969072,
            "unit": "ns",
            "range": "± 1615.3127855585753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80400,
            "unit": "ns",
            "range": "± 4603.785258857913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72572.34042553192,
            "unit": "ns",
            "range": "± 2808.968720526355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91243.81443298969,
            "unit": "ns",
            "range": "± 12300.94690150069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5927.551020408163,
            "unit": "ns",
            "range": "± 843.0162601610098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19463.26530612245,
            "unit": "ns",
            "range": "± 2363.484573875801"
          }
        ]
      }
    ]
  }
}