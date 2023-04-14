window.BENCHMARK_DATA = {
  "lastUpdate": 1681460335275,
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
        "date": 1681359624401,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484748,
            "unit": "ns",
            "range": "± 137586.79573126178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2677093.6170212766,
            "unit": "ns",
            "range": "± 103689.06781555535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371792.9292929294,
            "unit": "ns",
            "range": "± 193998.42112366416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6053155,
            "unit": "ns",
            "range": "± 400337.5445429857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58987.5,
            "unit": "ns",
            "range": "± 8288.981271924542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7715806.666666667,
            "unit": "ns",
            "range": "± 141936.86960187953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20253586.666666668,
            "unit": "ns",
            "range": "± 278152.70437725564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50742950,
            "unit": "ns",
            "range": "± 362972.8295616629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102434893.33333333,
            "unit": "ns",
            "range": "± 1168845.7190546498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205365542.85714287,
            "unit": "ns",
            "range": "± 2321491.88983301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5110253.333333333,
            "unit": "ns",
            "range": "± 30460.857334631597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1545900.892857143,
            "unit": "ns",
            "range": "± 6134.913804289794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184156.947544643,
            "unit": "ns",
            "range": "± 6416.76601272939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673259.6223958335,
            "unit": "ns",
            "range": "± 10314.427079637273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838854.0690104166,
            "unit": "ns",
            "range": "± 2785.108901839019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766474.4205729166,
            "unit": "ns",
            "range": "± 3376.046197089817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371237.5,
            "unit": "ns",
            "range": "± 32777.48973508089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3640600,
            "unit": "ns",
            "range": "± 51083.099719213176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4196056.25,
            "unit": "ns",
            "range": "± 63077.888030064336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4429946.385542168,
            "unit": "ns",
            "range": "± 236046.2570653923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7222973.469387755,
            "unit": "ns",
            "range": "± 268122.297014744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338806.6666666667,
            "unit": "ns",
            "range": "± 16489.42604128995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277648.3870967742,
            "unit": "ns",
            "range": "± 12615.755722027261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253190.72164948453,
            "unit": "ns",
            "range": "± 17412.202871802216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5421130.769230769,
            "unit": "ns",
            "range": "± 31187.64137216815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868920,
            "unit": "ns",
            "range": "± 61426.776385733094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26766.304347826088,
            "unit": "ns",
            "range": "± 2776.521547972304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122476.5306122449,
            "unit": "ns",
            "range": "± 8736.625136006147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124637.20930232559,
            "unit": "ns",
            "range": "± 4578.834497982145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219207,
            "unit": "ns",
            "range": "± 30777.685262231957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9529.896907216495,
            "unit": "ns",
            "range": "± 1333.1639175014582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29212.5,
            "unit": "ns",
            "range": "± 2717.8261436980147"
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
        "date": 1681360154169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540184.693877551,
            "unit": "ns",
            "range": "± 140940.30128460057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2874243.75,
            "unit": "ns",
            "range": "± 131673.05695764578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2447154.5454545454,
            "unit": "ns",
            "range": "± 206151.97993511692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5900648.333333333,
            "unit": "ns",
            "range": "± 258190.8954083226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70400,
            "unit": "ns",
            "range": "± 7823.08242042106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8254703.333333333,
            "unit": "ns",
            "range": "± 48910.86450541093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20423542.85714286,
            "unit": "ns",
            "range": "± 116019.552160472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51912115.384615384,
            "unit": "ns",
            "range": "± 237876.64816788922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103373833.33333333,
            "unit": "ns",
            "range": "± 762516.4135626071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206337606.66666666,
            "unit": "ns",
            "range": "± 1029825.6450672101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5174342.624080882,
            "unit": "ns",
            "range": "± 103287.86701153182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552348.3072916667,
            "unit": "ns",
            "range": "± 3505.458526552108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204996.875,
            "unit": "ns",
            "range": "± 5249.439424442525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2969837.930181962,
            "unit": "ns",
            "range": "± 153224.95045355332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835391.7708333334,
            "unit": "ns",
            "range": "± 2385.536953062638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764310.986328125,
            "unit": "ns",
            "range": "± 2094.6819083228775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3442450,
            "unit": "ns",
            "range": "± 84078.74285454083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3642055.5555555555,
            "unit": "ns",
            "range": "± 120003.42243796798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4400915.384615385,
            "unit": "ns",
            "range": "± 72196.74330321101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4527265.573770491,
            "unit": "ns",
            "range": "± 203635.72286908625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7562563.414634147,
            "unit": "ns",
            "range": "± 268557.5327151498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362182.5,
            "unit": "ns",
            "range": "± 12345.743323313027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306552.2727272727,
            "unit": "ns",
            "range": "± 11486.17953437883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281606.52173913043,
            "unit": "ns",
            "range": "± 10686.573136914754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5655571.428571428,
            "unit": "ns",
            "range": "± 73612.53476633769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4102714.285714286,
            "unit": "ns",
            "range": "± 44906.51155700897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32735.05154639175,
            "unit": "ns",
            "range": "± 2063.8778850500403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135108.43373493975,
            "unit": "ns",
            "range": "± 7209.7698758863535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131002.94117647059,
            "unit": "ns",
            "range": "± 4198.447425455477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 229080.61224489796,
            "unit": "ns",
            "range": "± 19891.534013104356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13087.755102040815,
            "unit": "ns",
            "range": "± 1634.3140877275807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31379.591836734693,
            "unit": "ns",
            "range": "± 2873.8766226117864"
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
        "date": 1681460320237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1290221.875,
            "unit": "ns",
            "range": "± 96693.24333127445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2389615.68627451,
            "unit": "ns",
            "range": "± 97134.43338497223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029222.105263158,
            "unit": "ns",
            "range": "± 140714.96402978504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4899325.925925926,
            "unit": "ns",
            "range": "± 136351.10389272077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44915,
            "unit": "ns",
            "range": "± 2272.571732307038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6707385.714285715,
            "unit": "ns",
            "range": "± 18622.76758506835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17677084.615384616,
            "unit": "ns",
            "range": "± 112823.41546382594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44604800,
            "unit": "ns",
            "range": "± 595920.9391473719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88475720,
            "unit": "ns",
            "range": "± 1395618.6125565558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177706466.66666666,
            "unit": "ns",
            "range": "± 2940463.3271127935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4649814.787946428,
            "unit": "ns",
            "range": "± 20710.76907018526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1478046.953125,
            "unit": "ns",
            "range": "± 6427.438310735266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138690.625,
            "unit": "ns",
            "range": "± 4503.769972035346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594321.1774553573,
            "unit": "ns",
            "range": "± 8785.68844448145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801104.5638020834,
            "unit": "ns",
            "range": "± 2807.2801298229138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740952.40234375,
            "unit": "ns",
            "range": "± 2668.670440947971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2984626.6666666665,
            "unit": "ns",
            "range": "± 49485.89216948123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3034392.6829268294,
            "unit": "ns",
            "range": "± 107651.3269547661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3791295.8333333335,
            "unit": "ns",
            "range": "± 89639.36188569931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3937244,
            "unit": "ns",
            "range": "± 104690.06670485345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6579818.604651162,
            "unit": "ns",
            "range": "± 239366.04988197863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285970.3703703704,
            "unit": "ns",
            "range": "± 7516.434036614745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231692.1052631579,
            "unit": "ns",
            "range": "± 7843.171641244734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204846.15384615384,
            "unit": "ns",
            "range": "± 2082.31257044317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5047621.428571428,
            "unit": "ns",
            "range": "± 56427.64159756932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3487115.3846153845,
            "unit": "ns",
            "range": "± 40460.78031365366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17348.96907216495,
            "unit": "ns",
            "range": "± 1219.502532230597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78037.5,
            "unit": "ns",
            "range": "± 4080.5303390737417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69070.37037037036,
            "unit": "ns",
            "range": "± 2900.658977154507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152416.1616161616,
            "unit": "ns",
            "range": "± 19296.535096983698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5385.714285714285,
            "unit": "ns",
            "range": "± 711.1773308228327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17349.484536082473,
            "unit": "ns",
            "range": "± 1950.540721576766"
          }
        ]
      }
    ]
  }
}