window.BENCHMARK_DATA = {
  "lastUpdate": 1687506700819,
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
          "id": "ad0c5c9824be30eb969ce3b4003f9fbcefcb262c",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:34:59+09:00",
          "tree_id": "6e70ad7a273bb935667e446f37f0df2611e0d32f",
          "url": "https://github.com/moreal/libplanet/commit/ad0c5c9824be30eb969ce3b4003f9fbcefcb262c"
        },
        "date": 1687506684172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314710,
            "unit": "ns",
            "range": "± 133691.27786724822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2387020,
            "unit": "ns",
            "range": "± 84209.41904805102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029236.8421052631,
            "unit": "ns",
            "range": "± 127169.86968570447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4806994.594594595,
            "unit": "ns",
            "range": "± 159222.00599223774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50545.26315789474,
            "unit": "ns",
            "range": "± 5602.787460151261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6911180,
            "unit": "ns",
            "range": "± 21103.2225027364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17652471.42857143,
            "unit": "ns",
            "range": "± 45460.4719013618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44411073.333333336,
            "unit": "ns",
            "range": "± 358623.80899900163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88562220,
            "unit": "ns",
            "range": "± 836639.3583856786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181656778.57142857,
            "unit": "ns",
            "range": "± 474834.03283280326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797127.34375,
            "unit": "ns",
            "range": "± 15479.918313949753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512057.0731026786,
            "unit": "ns",
            "range": "± 2792.751046537538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142236.049107143,
            "unit": "ns",
            "range": "± 4275.154701082831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581172.0703125,
            "unit": "ns",
            "range": "± 5542.3256833218165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818870.1627604166,
            "unit": "ns",
            "range": "± 1345.738755932067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734792.2819010416,
            "unit": "ns",
            "range": "± 850.7734232974592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3149580,
            "unit": "ns",
            "range": "± 45959.50391377174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3141142.1052631577,
            "unit": "ns",
            "range": "± 51830.1747782492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4031635.714285714,
            "unit": "ns",
            "range": "± 57754.182094897245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868253.5714285714,
            "unit": "ns",
            "range": "± 102538.5003832539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6326487.878787879,
            "unit": "ns",
            "range": "± 195026.02191370472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247244,
            "unit": "ns",
            "range": "± 8711.197579283007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233266.66666666666,
            "unit": "ns",
            "range": "± 8436.351849011824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205867.85714285713,
            "unit": "ns",
            "range": "± 5711.784670922401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3831460,
            "unit": "ns",
            "range": "± 26809.8009797057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3447160,
            "unit": "ns",
            "range": "± 39970.00303799267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15031.578947368422,
            "unit": "ns",
            "range": "± 1195.8494851114974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74489.43661971831,
            "unit": "ns",
            "range": "± 3110.281515657359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64984.84848484849,
            "unit": "ns",
            "range": "± 1674.6494431897554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74633.72093023256,
            "unit": "ns",
            "range": "± 6256.170797749659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3803.125,
            "unit": "ns",
            "range": "± 641.1261678935705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13783.505154639175,
            "unit": "ns",
            "range": "± 1135.752358238356"
          }
        ]
      }
    ]
  }
}