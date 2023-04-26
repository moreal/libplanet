window.BENCHMARK_DATA = {
  "lastUpdate": 1682504756438,
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
      }
    ]
  }
}