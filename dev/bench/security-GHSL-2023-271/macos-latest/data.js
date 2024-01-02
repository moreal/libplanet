window.BENCHMARK_DATA = {
  "lastUpdate": 1704233412333,
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
          "id": "76a4c7cff0f08f0b39b4f234e58fec345a6c3b80",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:57:38+09:00",
          "tree_id": "da2eabc4a2cbae8c2835a7da552df63cf85b46e1",
          "url": "https://github.com/moreal/libplanet/commit/76a4c7cff0f08f0b39b4f234e58fec345a6c3b80"
        },
        "date": 1704233399103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7724036.857142857,
            "unit": "ns",
            "range": "± 39340.04374260824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19447976.2,
            "unit": "ns",
            "range": "± 271069.81725726253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48330039.815789476,
            "unit": "ns",
            "range": "± 1011880.8588143091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96103192.85714285,
            "unit": "ns",
            "range": "± 983122.5594164127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197792673.07692307,
            "unit": "ns",
            "range": "± 2888275.404506366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44166.378787878784,
            "unit": "ns",
            "range": "± 9850.756370289053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224245.92682926828,
            "unit": "ns",
            "range": "± 11794.458611003674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218185.67567567568,
            "unit": "ns",
            "range": "± 10939.892154821557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212682.75,
            "unit": "ns",
            "range": "± 11045.97550344852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3884674.625,
            "unit": "ns",
            "range": "± 73677.7478183429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3388262.3846153845,
            "unit": "ns",
            "range": "± 54322.404144972665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12723.344827586207,
            "unit": "ns",
            "range": "± 1001.1597673255291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59542.53333333333,
            "unit": "ns",
            "range": "± 5643.039045854079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52666.34939759036,
            "unit": "ns",
            "range": "± 3875.800796668599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67117.75257731958,
            "unit": "ns",
            "range": "± 14449.837554616697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3533.7471264367814,
            "unit": "ns",
            "range": "± 393.2671504085789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11951.867816091954,
            "unit": "ns",
            "range": "± 685.7416137384525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079527.0252525252,
            "unit": "ns",
            "range": "± 93108.79574436665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2215275.6621621624,
            "unit": "ns",
            "range": "± 109935.01602475779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737062.793814433,
            "unit": "ns",
            "range": "± 134240.226339988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19347017.22105263,
            "unit": "ns",
            "range": "± 2531271.8606420862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3006793.573170732,
            "unit": "ns",
            "range": "± 91549.03733611573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3019512.3684210526,
            "unit": "ns",
            "range": "± 77753.6273610855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3641893.442857143,
            "unit": "ns",
            "range": "± 117549.96879473723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3691480.935483871,
            "unit": "ns",
            "range": "± 111439.82391585021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22353345.74468085,
            "unit": "ns",
            "range": "± 3084390.872029528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423992.679036458,
            "unit": "ns",
            "range": "± 41913.39314596926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360024.1895833334,
            "unit": "ns",
            "range": "± 11119.537721633907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 893327.5674479167,
            "unit": "ns",
            "range": "± 12418.1934112384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977889.195591518,
            "unit": "ns",
            "range": "± 33446.910349538055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619271.2720052083,
            "unit": "ns",
            "range": "± 8195.860498242631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574048.702734375,
            "unit": "ns",
            "range": "± 6055.403386639284"
          }
        ]
      }
    ]
  }
}