window.BENCHMARK_DATA = {
  "lastUpdate": 1682497949294,
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
      }
    ]
  }
}