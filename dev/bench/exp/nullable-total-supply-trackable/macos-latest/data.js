window.BENCHMARK_DATA = {
  "lastUpdate": 1683792502154,
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
          "id": "6a3446beb0b2fcedb89f6d11954a5419d96cf1b5",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T16:49:19+09:00",
          "tree_id": "a437fefa22201bdf1e35307d13475b2fd118e8d9",
          "url": "https://github.com/moreal/libplanet/commit/6a3446beb0b2fcedb89f6d11954a5419d96cf1b5"
        },
        "date": 1683792488480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9338594.78,
            "unit": "ns",
            "range": "± 345812.22667170764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23481301.625,
            "unit": "ns",
            "range": "± 607168.6752028211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59397216.84210526,
            "unit": "ns",
            "range": "± 1265176.1782215799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123246499.5,
            "unit": "ns",
            "range": "± 2809048.7989666536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243502975.10714287,
            "unit": "ns",
            "range": "± 6929764.212535418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71870.68131868132,
            "unit": "ns",
            "range": "± 6623.8801231757425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392385.3076923077,
            "unit": "ns",
            "range": "± 26138.082388513467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382117.21649484534,
            "unit": "ns",
            "range": "± 37812.53068544948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329432.4946236559,
            "unit": "ns",
            "range": "± 25006.958947819017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823214.121212121,
            "unit": "ns",
            "range": "± 137413.46667261128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370168.75,
            "unit": "ns",
            "range": "± 95578.56651433003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19315.355670103094,
            "unit": "ns",
            "range": "± 1478.4009660616061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97348.47777777778,
            "unit": "ns",
            "range": "± 5449.228136719684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93524.92783505155,
            "unit": "ns",
            "range": "± 9488.410650463085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116134.28260869565,
            "unit": "ns",
            "range": "± 11257.993413547303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4966.0759493670885,
            "unit": "ns",
            "range": "± 1049.6208445122763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18877.574468085106,
            "unit": "ns",
            "range": "± 1367.7179367873807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1813826.1530612244,
            "unit": "ns",
            "range": "± 146587.76469729852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3460140.375,
            "unit": "ns",
            "range": "± 158109.7882959812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2916570.4791666665,
            "unit": "ns",
            "range": "± 204074.0685072833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8021692.804123712,
            "unit": "ns",
            "range": "± 514679.4511133977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4032918.777777778,
            "unit": "ns",
            "range": "± 183667.76616843976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4231441.232323232,
            "unit": "ns",
            "range": "± 266443.4307026322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5371067.75,
            "unit": "ns",
            "range": "± 260789.10309433943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5635151.413978495,
            "unit": "ns",
            "range": "± 409965.24315389426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9743063.446808511,
            "unit": "ns",
            "range": "± 568674.8147769367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7313448.427849265,
            "unit": "ns",
            "range": "± 146958.34984548588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2182068.2497209823,
            "unit": "ns",
            "range": "± 13372.792951009314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467378.094951923,
            "unit": "ns",
            "range": "± 17021.08177448069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854913.0477120536,
            "unit": "ns",
            "range": "± 30550.574487088088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933074.4580078125,
            "unit": "ns",
            "range": "± 4118.952312952573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880157.8834134615,
            "unit": "ns",
            "range": "± 4396.329681734785"
          }
        ]
      }
    ]
  }
}