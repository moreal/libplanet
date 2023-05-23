window.BENCHMARK_DATA = {
  "lastUpdate": 1684849613597,
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
          "id": "f4e785e90fd9e6d9d9089e94f6e4b0946d5fce77",
          "message": "Dump delta key-value pairs when `InvalidBlockStateRootHashException` occurred",
          "timestamp": "2023-05-23T22:26:29+09:00",
          "tree_id": "d72ef679e12f701e565d91a96bb0400ce2530f13",
          "url": "https://github.com/moreal/libplanet/commit/f4e785e90fd9e6d9d9089e94f6e4b0946d5fce77"
        },
        "date": 1684849487192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607704.1237113401,
            "unit": "ns",
            "range": "± 169910.1348982785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922575.5555555555,
            "unit": "ns",
            "range": "± 193343.46646568843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589273.6842105263,
            "unit": "ns",
            "range": "± 224119.22226679634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6508308.585858586,
            "unit": "ns",
            "range": "± 612205.7772314231"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52369.072164948455,
            "unit": "ns",
            "range": "± 9036.054642660958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7984658.333333333,
            "unit": "ns",
            "range": "± 459933.18683356297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19609728.125,
            "unit": "ns",
            "range": "± 1129831.667825659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49057564.492753625,
            "unit": "ns",
            "range": "± 2358767.312245166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103658800,
            "unit": "ns",
            "range": "± 2725411.5479317983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217373747,
            "unit": "ns",
            "range": "± 14832826.790475674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5294968.1640625,
            "unit": "ns",
            "range": "± 99909.49719664424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1642551.2630208333,
            "unit": "ns",
            "range": "± 22483.864354544978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301775.3295898438,
            "unit": "ns",
            "range": "± 23937.692233858383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2917783.860085227,
            "unit": "ns",
            "range": "± 70484.04648074627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000048.4548261089,
            "unit": "ns",
            "range": "± 44799.87825070847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929267.8873697916,
            "unit": "ns",
            "range": "± 21988.82342428677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473163.1578947366,
            "unit": "ns",
            "range": "± 415210.86799940007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3326955.789473684,
            "unit": "ns",
            "range": "± 304561.1840552678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224377.319587629,
            "unit": "ns",
            "range": "± 325171.5164420779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4339350,
            "unit": "ns",
            "range": "± 389170.5888913813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7572696.875,
            "unit": "ns",
            "range": "± 726433.2296557105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274301.0752688172,
            "unit": "ns",
            "range": "± 26029.775987542882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264343.8202247191,
            "unit": "ns",
            "range": "± 25180.796051465397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228298.86363636365,
            "unit": "ns",
            "range": "± 23719.78898511605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3976945.4545454546,
            "unit": "ns",
            "range": "± 198112.48170344683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3668261.052631579,
            "unit": "ns",
            "range": "± 222229.30762861352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20813.131313131315,
            "unit": "ns",
            "range": "± 6546.001216892684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82536.0824742268,
            "unit": "ns",
            "range": "± 10186.338743293743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78432.63157894737,
            "unit": "ns",
            "range": "± 12588.059540736207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100266.49484536082,
            "unit": "ns",
            "range": "± 17196.70317490858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5229.62962962963,
            "unit": "ns",
            "range": "± 1080.444867224196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16924.468085106382,
            "unit": "ns",
            "range": "± 4587.094710823754"
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
          "id": "21886565300dd2124276a4f6c124a1300d79b766",
          "message": "Dump delta key-value pairs when `InvalidBlockStateRootHashException` occurred",
          "timestamp": "2023-05-23T22:32:00+09:00",
          "tree_id": "03a9d35bd59e2e3b66a333cab0b63bd9545f5ccc",
          "url": "https://github.com/moreal/libplanet/commit/21886565300dd2124276a4f6c124a1300d79b766"
        },
        "date": 1684849596965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1108572.9166666667,
            "unit": "ns",
            "range": "± 116830.65610592264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1999291.4893617022,
            "unit": "ns",
            "range": "± 121895.81719390888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1755700,
            "unit": "ns",
            "range": "± 209495.9012798609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4023836.7346938774,
            "unit": "ns",
            "range": "± 240643.7897257225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36603.260869565216,
            "unit": "ns",
            "range": "± 2534.3118400520107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5300077.777777778,
            "unit": "ns",
            "range": "± 107667.51957411217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13282261.538461538,
            "unit": "ns",
            "range": "± 43961.11043603461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35072246.15384615,
            "unit": "ns",
            "range": "± 430378.72007373656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69265858.33333333,
            "unit": "ns",
            "range": "± 197930.3617590303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135777420,
            "unit": "ns",
            "range": "± 2057529.7998883445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3648609.2708333335,
            "unit": "ns",
            "range": "± 39523.203551042956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1095775.2103365385,
            "unit": "ns",
            "range": "± 3871.5338699288795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856587.0377604166,
            "unit": "ns",
            "range": "± 10760.30505998042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932384.4921875,
            "unit": "ns",
            "range": "± 33417.799971720924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608227.2670200893,
            "unit": "ns",
            "range": "± 5400.926174604581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 533979.7293526785,
            "unit": "ns",
            "range": "± 4553.656046985501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2109658.536585366,
            "unit": "ns",
            "range": "± 63595.35743908416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2449900,
            "unit": "ns",
            "range": "± 108159.32114247019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3009865.3846153845,
            "unit": "ns",
            "range": "± 79400.59416557381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3084395.9183673467,
            "unit": "ns",
            "range": "± 230793.16527533415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4694895.238095238,
            "unit": "ns",
            "range": "± 100565.0310803436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206062.5,
            "unit": "ns",
            "range": "± 7637.411419551087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183472.131147541,
            "unit": "ns",
            "range": "± 7970.908169661743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189012.37113402062,
            "unit": "ns",
            "range": "± 15633.59268884874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2949347.619047619,
            "unit": "ns",
            "range": "± 66422.29007680796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2682407.6923076925,
            "unit": "ns",
            "range": "± 71658.00400835583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19442.85714285714,
            "unit": "ns",
            "range": "± 2322.5474815649545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65250.56179775281,
            "unit": "ns",
            "range": "± 4560.355936953367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58584.09090909091,
            "unit": "ns",
            "range": "± 6057.519054455281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80473.95833333333,
            "unit": "ns",
            "range": "± 14123.859952440067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5002.040816326531,
            "unit": "ns",
            "range": "± 1041.4086011770366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18811.458333333332,
            "unit": "ns",
            "range": "± 2218.59935861234"
          }
        ]
      }
    ]
  }
}