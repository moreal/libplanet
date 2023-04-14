window.BENCHMARK_DATA = {
  "lastUpdate": 1681447687550,
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
          "id": "9a1dcd6abface24cd498377a42e7c1bb0d80f66f",
          "message": "WIP",
          "timestamp": "2023-04-14T13:35:00+09:00",
          "tree_id": "d85f9b539fcbd0a307852f4edbfbe8c7da27daac",
          "url": "https://github.com/moreal/libplanet/commit/9a1dcd6abface24cd498377a42e7c1bb0d80f66f"
        },
        "date": 1681447683847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7535753.857142857,
            "unit": "ns",
            "range": "± 15153.881827424959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19061574.5,
            "unit": "ns",
            "range": "± 58290.97909328549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49732505.86666667,
            "unit": "ns",
            "range": "± 260860.9626574133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99973820,
            "unit": "ns",
            "range": "± 422206.66333325434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200927957.58333334,
            "unit": "ns",
            "range": "± 1401504.4996006943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45735.82352941176,
            "unit": "ns",
            "range": "± 2470.9458675560168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390107.085106383,
            "unit": "ns",
            "range": "± 85865.59760020302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620954.2702702703,
            "unit": "ns",
            "range": "± 84611.38067057221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2273646.9278350514,
            "unit": "ns",
            "range": "± 155995.14852226755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5488002.8,
            "unit": "ns",
            "range": "± 107073.99817065765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5882238.951450893,
            "unit": "ns",
            "range": "± 17160.403393833883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846492.9002604166,
            "unit": "ns",
            "range": "± 9811.42186292736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349165.13671875,
            "unit": "ns",
            "range": "± 1329.464856019071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542995.568917411,
            "unit": "ns",
            "range": "± 1928.363880136526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791785.7302433894,
            "unit": "ns",
            "range": "± 1320.9974681268532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741053.9766276042,
            "unit": "ns",
            "range": "± 1655.870968674349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327862.06666666665,
            "unit": "ns",
            "range": "± 5200.238572366061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266788.0833333333,
            "unit": "ns",
            "range": "± 3833.266503040629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240970.33333333334,
            "unit": "ns",
            "range": "± 4432.423823641074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5655987.785714285,
            "unit": "ns",
            "range": "± 23602.13198707195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4060981.285714286,
            "unit": "ns",
            "range": "± 35747.06590956602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19691.172043010753,
            "unit": "ns",
            "range": "± 1615.8144172364107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88980.02702702703,
            "unit": "ns",
            "range": "± 4379.9061195073455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76615.96610169491,
            "unit": "ns",
            "range": "± 3363.5372850314307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184853.67346938775,
            "unit": "ns",
            "range": "± 15973.169026785446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5164.5,
            "unit": "ns",
            "range": "± 645.7604574616292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16833.473684210527,
            "unit": "ns",
            "range": "± 1566.9158407392806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167577.25,
            "unit": "ns",
            "range": "± 71906.44917264668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504735.0434782607,
            "unit": "ns",
            "range": "± 132927.80342375606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275409.741935484,
            "unit": "ns",
            "range": "± 127949.6787076773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295930.08,
            "unit": "ns",
            "range": "± 112802.81307364044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7301251.676470588,
            "unit": "ns",
            "range": "± 180494.22939616768"
          }
        ]
      }
    ]
  }
}