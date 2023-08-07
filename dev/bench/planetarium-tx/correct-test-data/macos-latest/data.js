window.BENCHMARK_DATA = {
  "lastUpdate": 1682559558104,
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
        "date": 1682497936616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7976816.571428572,
            "unit": "ns",
            "range": "± 254424.9532557553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22207764.387096774,
            "unit": "ns",
            "range": "± 2174103.8618904273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58264316.83838384,
            "unit": "ns",
            "range": "± 8286323.194325438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112291057.625,
            "unit": "ns",
            "range": "± 8221259.795194156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221434005.46875,
            "unit": "ns",
            "range": "± 14327811.623451365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63334.95789473684,
            "unit": "ns",
            "range": "± 10384.632894807135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342718.23595505615,
            "unit": "ns",
            "range": "± 27649.636687577942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321938.5425531915,
            "unit": "ns",
            "range": "± 24584.579973456697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311016.43684210523,
            "unit": "ns",
            "range": "± 38232.55015476204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4181699.5,
            "unit": "ns",
            "range": "± 85083.4807328955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840695.972222222,
            "unit": "ns",
            "range": "± 126531.51737119234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19108,
            "unit": "ns",
            "range": "± 3245.621910660039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92908.125,
            "unit": "ns",
            "range": "± 10922.68044049917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96980.44444444444,
            "unit": "ns",
            "range": "± 12032.900000960142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101140.30898876404,
            "unit": "ns",
            "range": "± 11174.437966216796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5349.386363636364,
            "unit": "ns",
            "range": "± 765.37466494714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16086.233333333334,
            "unit": "ns",
            "range": "± 1464.0677292155362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759295.2708333333,
            "unit": "ns",
            "range": "± 303857.7475303545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159951.188172043,
            "unit": "ns",
            "range": "± 345063.2112872812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2765891.0656565656,
            "unit": "ns",
            "range": "± 471713.373807485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7238451.369565218,
            "unit": "ns",
            "range": "± 724307.3466151549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3794758.8333333335,
            "unit": "ns",
            "range": "± 54051.331987343845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3803208.0161290322,
            "unit": "ns",
            "range": "± 555270.4049436401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4986628.403225807,
            "unit": "ns",
            "range": "± 493960.574491045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5245382.88,
            "unit": "ns",
            "range": "± 1065678.4623235038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7607300.387096774,
            "unit": "ns",
            "range": "± 225790.790856887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7225840.609879033,
            "unit": "ns",
            "range": "± 329093.28087259055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2142369.8935347577,
            "unit": "ns",
            "range": "± 147087.1273899903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334961.270862926,
            "unit": "ns",
            "range": "± 32713.730179735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894650.6187021686,
            "unit": "ns",
            "range": "± 254359.72984445942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834088.0489955357,
            "unit": "ns",
            "range": "± 27375.568045193075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779411.461383322,
            "unit": "ns",
            "range": "± 27997.9541142415"
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
        "date": 1682502029528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213600.615384616,
            "unit": "ns",
            "range": "± 147946.5447892912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23782657.5625,
            "unit": "ns",
            "range": "± 457618.1196046865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61062465.225,
            "unit": "ns",
            "range": "± 2099477.915795361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120399988.35714285,
            "unit": "ns",
            "range": "± 1339148.5190362774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244945531.76666668,
            "unit": "ns",
            "range": "± 4483470.708000325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67504.8021978022,
            "unit": "ns",
            "range": "± 6841.475140185258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391086.47101449274,
            "unit": "ns",
            "range": "± 18128.34433971143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367137.04225352115,
            "unit": "ns",
            "range": "± 17890.823855849856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323912.8725490196,
            "unit": "ns",
            "range": "± 13192.955280695507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4883831.714285715,
            "unit": "ns",
            "range": "± 115291.6684752818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4502815.166666667,
            "unit": "ns",
            "range": "± 63316.631919315325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22313.852631578946,
            "unit": "ns",
            "range": "± 2501.2659644388123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107529.75773195876,
            "unit": "ns",
            "range": "± 8902.125376230797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99214.26530612246,
            "unit": "ns",
            "range": "± 8645.577272052535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113595.30526315789,
            "unit": "ns",
            "range": "± 11789.94125016825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6687.645161290323,
            "unit": "ns",
            "range": "± 727.1450821857935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20348.615384615383,
            "unit": "ns",
            "range": "± 1759.7507384679407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1890039.0215053763,
            "unit": "ns",
            "range": "± 220656.93791858945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3766842.2471910114,
            "unit": "ns",
            "range": "± 286334.95980237745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3023029.1276595746,
            "unit": "ns",
            "range": "± 251292.75650754623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8058133.25,
            "unit": "ns",
            "range": "± 343601.58267464105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4011505.0804597703,
            "unit": "ns",
            "range": "± 270121.5016528509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4359877.252631579,
            "unit": "ns",
            "range": "± 340538.4581019703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5626591.765306123,
            "unit": "ns",
            "range": "± 356741.1953006148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5824195.989583333,
            "unit": "ns",
            "range": "± 490321.88245932123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9665437.623456791,
            "unit": "ns",
            "range": "± 497627.16703806934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7131683.548943015,
            "unit": "ns",
            "range": "± 227050.73091265745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2258714.6111778845,
            "unit": "ns",
            "range": "± 23876.371820405006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1488414.30234375,
            "unit": "ns",
            "range": "± 18741.266842342407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2901295.2439903845,
            "unit": "ns",
            "range": "± 10164.947441711076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945425.8055419922,
            "unit": "ns",
            "range": "± 17469.073789263726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883695.51953125,
            "unit": "ns",
            "range": "± 6202.9353593351625"
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
          "id": "7506be48a99cc8ae184f06987eef85176d7910d3",
          "message": "test(@planetarium/tx): correct tx test data\n\n[skip changelog]",
          "timestamp": "2023-04-26T19:08:19+09:00",
          "tree_id": "e041f08868a225c4c03c1ca219a4342deb07d9d0",
          "url": "https://github.com/moreal/libplanet/commit/7506be48a99cc8ae184f06987eef85176d7910d3"
        },
        "date": 1682504748629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8305677.766666667,
            "unit": "ns",
            "range": "± 125227.10888134784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21189183.35897436,
            "unit": "ns",
            "range": "± 1080274.7719809348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53823841.71875,
            "unit": "ns",
            "range": "± 1647014.7341659858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109605546.65254237,
            "unit": "ns",
            "range": "± 4792978.511052348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218748680.66666666,
            "unit": "ns",
            "range": "± 3895545.944733763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72997.7688172043,
            "unit": "ns",
            "range": "± 8124.402687261256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398680.9569892473,
            "unit": "ns",
            "range": "± 59732.114668582915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370374.7173913043,
            "unit": "ns",
            "range": "± 59520.4677099715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359072.12903225806,
            "unit": "ns",
            "range": "± 48019.1663304365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4370836.696629213,
            "unit": "ns",
            "range": "± 276243.647964997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3798037.9166666665,
            "unit": "ns",
            "range": "± 98772.79148672326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20736.591836734693,
            "unit": "ns",
            "range": "± 3628.765965121393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117247.51063829787,
            "unit": "ns",
            "range": "± 20015.207519759206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123492.40909090909,
            "unit": "ns",
            "range": "± 10821.752434876502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126360.59139784946,
            "unit": "ns",
            "range": "± 18834.992791077068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8567.467741935483,
            "unit": "ns",
            "range": "± 1095.45847510859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24319.879310344826,
            "unit": "ns",
            "range": "± 2947.2112172529896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552287.675257732,
            "unit": "ns",
            "range": "± 123902.95107546289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3086631.612359551,
            "unit": "ns",
            "range": "± 214947.37679865645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2690095.5454545454,
            "unit": "ns",
            "range": "± 279509.138986665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7223770.102040816,
            "unit": "ns",
            "range": "± 533016.949462437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3504736.8846153845,
            "unit": "ns",
            "range": "± 55116.158632683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3947768.4787234045,
            "unit": "ns",
            "range": "± 422503.46818304795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4968139.404040404,
            "unit": "ns",
            "range": "± 463495.72852702125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4898340.168421052,
            "unit": "ns",
            "range": "± 436304.381819123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8596586.531914894,
            "unit": "ns",
            "range": "± 701760.4180998576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7272822.327604166,
            "unit": "ns",
            "range": "± 100897.99700482472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187910.4446614585,
            "unit": "ns",
            "range": "± 44759.26548352417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403745.7862079327,
            "unit": "ns",
            "range": "± 18480.319790921647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3060015.6552220397,
            "unit": "ns",
            "range": "± 66175.98621336883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842317.9437779018,
            "unit": "ns",
            "range": "± 10034.086859738762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775256.2061298077,
            "unit": "ns",
            "range": "± 12685.118033472061"
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
        "date": 1682504767356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8707661.666666666,
            "unit": "ns",
            "range": "± 410223.709190723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26452524.75,
            "unit": "ns",
            "range": "± 6117828.561908286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58703730.45348837,
            "unit": "ns",
            "range": "± 9017775.1047797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113067607.42424242,
            "unit": "ns",
            "range": "± 3557199.431142998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235695723.39655173,
            "unit": "ns",
            "range": "± 12802386.621912222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70858.66842105263,
            "unit": "ns",
            "range": "± 11617.205482673176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362086.0494505495,
            "unit": "ns",
            "range": "± 36168.39254384774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331295.402173913,
            "unit": "ns",
            "range": "± 35851.65002595741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314727.15168539324,
            "unit": "ns",
            "range": "± 22593.039365588367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168431.1,
            "unit": "ns",
            "range": "± 62234.70739501277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3647887.933333333,
            "unit": "ns",
            "range": "± 58144.564339321725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23617.99494949495,
            "unit": "ns",
            "range": "± 3882.780613599174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93006.97959183673,
            "unit": "ns",
            "range": "± 13957.622800898313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114995.86559139784,
            "unit": "ns",
            "range": "± 8068.849653727311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122405.24193548386,
            "unit": "ns",
            "range": "± 13558.728476923628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8702.913978494624,
            "unit": "ns",
            "range": "± 834.4693530714723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20569.0625,
            "unit": "ns",
            "range": "± 3313.2374779852885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609386.65625,
            "unit": "ns",
            "range": "± 165039.92935789673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3070294.664835165,
            "unit": "ns",
            "range": "± 207289.34118764006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581384.2934782607,
            "unit": "ns",
            "range": "± 211766.3641813384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7184285.977011494,
            "unit": "ns",
            "range": "± 513984.8204453888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3705513.1075268816,
            "unit": "ns",
            "range": "± 511019.36818473245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3765547.0108695654,
            "unit": "ns",
            "range": "± 272025.9553398541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4943293.304347826,
            "unit": "ns",
            "range": "± 398383.93071601365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4853773.902173913,
            "unit": "ns",
            "range": "± 412285.60168133146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8610394.043478262,
            "unit": "ns",
            "range": "± 576944.9518982813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6867707.49586397,
            "unit": "ns",
            "range": "± 133137.67270690377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001329.52734375,
            "unit": "ns",
            "range": "± 25236.836228637236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285700.4080403645,
            "unit": "ns",
            "range": "± 10516.564055674431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682384.93941886,
            "unit": "ns",
            "range": "± 115251.09619320068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793603.7529994419,
            "unit": "ns",
            "range": "± 13891.836145795765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839236.8282791941,
            "unit": "ns",
            "range": "± 18474.81661186128"
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
          "id": "69471ce948a7ecb540afc66f1854d7fc6d02d4ea",
          "message": "test(@planetarium/tx): correct tx test data\n\n[skip changelog]",
          "timestamp": "2023-04-27T10:20:04+09:00",
          "tree_id": "009923f197c382cc054adbcbb4aecaa312b017a4",
          "url": "https://github.com/moreal/libplanet/commit/69471ce948a7ecb540afc66f1854d7fc6d02d4ea"
        },
        "date": 1682559548787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8439657.056338029,
            "unit": "ns",
            "range": "± 333987.1989262414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20867352.57142857,
            "unit": "ns",
            "range": "± 319363.9846424246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57296933.98076923,
            "unit": "ns",
            "range": "± 2007554.7137571638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121288075,
            "unit": "ns",
            "range": "± 2711511.978831057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231034663.9775281,
            "unit": "ns",
            "range": "± 14539910.513812302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70775.50537634408,
            "unit": "ns",
            "range": "± 8851.514104848975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354382.5625,
            "unit": "ns",
            "range": "± 45648.9779194539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373700.9213483146,
            "unit": "ns",
            "range": "± 39919.385971555435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356525.77777777775,
            "unit": "ns",
            "range": "± 45262.00376038514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4630677.693181818,
            "unit": "ns",
            "range": "± 253838.6657301285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3811025.7916666665,
            "unit": "ns",
            "range": "± 97473.6819862403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22898.59793814433,
            "unit": "ns",
            "range": "± 4276.928321577575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102691.12886597938,
            "unit": "ns",
            "range": "± 13822.116236548514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100814.78,
            "unit": "ns",
            "range": "± 17926.12723366583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108653.80107526881,
            "unit": "ns",
            "range": "± 14243.5330892616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7367.755319148936,
            "unit": "ns",
            "range": "± 1472.0541564383873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19478.714285714286,
            "unit": "ns",
            "range": "± 3877.027044144899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625603.5555555555,
            "unit": "ns",
            "range": "± 188471.8546213535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3038447.279661017,
            "unit": "ns",
            "range": "± 133863.89308600084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2587126.25,
            "unit": "ns",
            "range": "± 226462.73256898258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7222286.131578947,
            "unit": "ns",
            "range": "± 480796.3497575807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3494943.4065934066,
            "unit": "ns",
            "range": "± 413444.17033984105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3591177.945945946,
            "unit": "ns",
            "range": "± 111180.39086846053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947730.5,
            "unit": "ns",
            "range": "± 735032.1230284695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4888914.358695652,
            "unit": "ns",
            "range": "± 600937.2396263964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8493200,
            "unit": "ns",
            "range": "± 604608.7585933404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6899134.724305555,
            "unit": "ns",
            "range": "± 383017.1967252132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034563.394140625,
            "unit": "ns",
            "range": "± 46668.25655537269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291219.0912388393,
            "unit": "ns",
            "range": "± 16034.357959606057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634395.9728860296,
            "unit": "ns",
            "range": "± 76978.12197387227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789499.2986188616,
            "unit": "ns",
            "range": "± 10775.457632356753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736567.8590745192,
            "unit": "ns",
            "range": "± 3888.5345983869083"
          }
        ]
      }
    ]
  }
}