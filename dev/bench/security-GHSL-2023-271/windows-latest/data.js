window.BENCHMARK_DATA = {
  "lastUpdate": 1704233448887,
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
        "date": 1704233429137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036755.5555555555,
            "unit": "ns",
            "range": "± 109092.96468292834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791877.1186440678,
            "unit": "ns",
            "range": "± 79062.56106555303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629540.206185567,
            "unit": "ns",
            "range": "± 166344.50112379342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11087440.65934066,
            "unit": "ns",
            "range": "± 911380.3821039846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36955.494505494506,
            "unit": "ns",
            "range": "± 2823.487309353557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5376286.666666667,
            "unit": "ns",
            "range": "± 62250.94223804014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13779969.23076923,
            "unit": "ns",
            "range": "± 122260.03970100904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33636771.428571425,
            "unit": "ns",
            "range": "± 315168.84712452494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67653506.66666667,
            "unit": "ns",
            "range": "± 503996.9181689602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138485500,
            "unit": "ns",
            "range": "± 1259518.8531453474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3384587.3046875,
            "unit": "ns",
            "range": "± 6064.749878371126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043468.8616071428,
            "unit": "ns",
            "range": "± 2362.943300090403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728625.1727764423,
            "unit": "ns",
            "range": "± 1187.5175837194358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909264.1183035714,
            "unit": "ns",
            "range": "± 5152.800976144931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623996.8674879808,
            "unit": "ns",
            "range": "± 768.1631846170069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554689.8307291666,
            "unit": "ns",
            "range": "± 1632.3508249126116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295742.3076923075,
            "unit": "ns",
            "range": "± 79194.70139311682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2369906.976744186,
            "unit": "ns",
            "range": "± 63555.736301554876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2939829.1666666665,
            "unit": "ns",
            "range": "± 66786.2162241299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2972750.7462686566,
            "unit": "ns",
            "range": "± 120915.7349626419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12593964.835164836,
            "unit": "ns",
            "range": "± 1539859.0302992477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185268.42105263157,
            "unit": "ns",
            "range": "± 7473.337318540608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180559.78260869565,
            "unit": "ns",
            "range": "± 12114.481931956243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150992.3076923077,
            "unit": "ns",
            "range": "± 7408.713179023126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2940120,
            "unit": "ns",
            "range": "± 49070.6225760383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2631706.6666666665,
            "unit": "ns",
            "range": "± 38308.34423588728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13000,
            "unit": "ns",
            "range": "± 1852.6628270038232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61858.94736842105,
            "unit": "ns",
            "range": "± 8757.08217626632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46136.92307692308,
            "unit": "ns",
            "range": "± 2154.8324493137243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59196.25,
            "unit": "ns",
            "range": "± 7315.346167951454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3056.122448979592,
            "unit": "ns",
            "range": "± 803.6086556587175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12425.531914893618,
            "unit": "ns",
            "range": "± 1998.9748001559844"
          }
        ]
      }
    ]
  }
}