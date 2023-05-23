window.BENCHMARK_DATA = {
  "lastUpdate": 1684849502758,
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
      }
    ]
  }
}