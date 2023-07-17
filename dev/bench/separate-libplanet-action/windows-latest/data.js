window.BENCHMARK_DATA = {
  "lastUpdate": 1689590199803,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/moreal/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689590173419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567898.969072165,
            "unit": "ns",
            "range": "± 137984.3110759074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2870554.5454545454,
            "unit": "ns",
            "range": "± 154568.00825042566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929884.5360824743,
            "unit": "ns",
            "range": "± 174046.10640347467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5602106.18556701,
            "unit": "ns",
            "range": "± 384219.61081696517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52783.333333333336,
            "unit": "ns",
            "range": "± 3506.8232046631665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8709319.587628866,
            "unit": "ns",
            "range": "± 642987.681588713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23348700,
            "unit": "ns",
            "range": "± 264345.74811306223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55948885.24590164,
            "unit": "ns",
            "range": "± 2521533.5483151297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108993060,
            "unit": "ns",
            "range": "± 3541658.00755389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218648652.17391303,
            "unit": "ns",
            "range": "± 5488726.106953611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5508631.755514706,
            "unit": "ns",
            "range": "± 112568.28319409901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1743011.9140625,
            "unit": "ns",
            "range": "± 29076.892666582542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385825.1432291667,
            "unit": "ns",
            "range": "± 20389.320718239014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176412.624289773,
            "unit": "ns",
            "range": "± 77741.99391310647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949769.7265625,
            "unit": "ns",
            "range": "± 21617.167091983287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 884307.12890625,
            "unit": "ns",
            "range": "± 10920.197384027242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438712.5,
            "unit": "ns",
            "range": "± 230954.15870049328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4052502.6315789474,
            "unit": "ns",
            "range": "± 308351.87997043086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591306.25,
            "unit": "ns",
            "range": "± 239981.46623782892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3965986.813186813,
            "unit": "ns",
            "range": "± 219820.1351654935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153448.484848484,
            "unit": "ns",
            "range": "± 555432.0734684636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299898.4126984127,
            "unit": "ns",
            "range": "± 13767.604472954152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272912.7659574468,
            "unit": "ns",
            "range": "± 17134.422588126683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257781.914893617,
            "unit": "ns",
            "range": "± 22777.601536984206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534274.226804123,
            "unit": "ns",
            "range": "± 282678.39620846463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252635,
            "unit": "ns",
            "range": "± 220006.05348403542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21593.548387096773,
            "unit": "ns",
            "range": "± 2565.820762472165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96058.42105263157,
            "unit": "ns",
            "range": "± 9290.416741195413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78918.27956989247,
            "unit": "ns",
            "range": "± 7621.835711732659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96495.40229885057,
            "unit": "ns",
            "range": "± 12727.299975322932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5352.577319587629,
            "unit": "ns",
            "range": "± 873.8197735022788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20115.909090909092,
            "unit": "ns",
            "range": "± 1896.3901802578696"
          }
        ]
      }
    ]
  }
}