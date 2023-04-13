window.BENCHMARK_DATA = {
  "lastUpdate": 1681360932014,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c25b7a5803c12c85236b729b04683f2323cb656d",
          "message": "Merge pull request #3080 from moreal/features/explorer/state-query/states\n\nImplement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:59:19+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/moreal/libplanet/commit/c25b7a5803c12c85236b729b04683f2323cb656d"
        },
        "date": 1681360919199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407060.2040816327,
            "unit": "ns",
            "range": "± 143831.58732823603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679086.868686869,
            "unit": "ns",
            "range": "± 191971.6447208533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278475.5102040814,
            "unit": "ns",
            "range": "± 175809.11292615448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5756698.979591837,
            "unit": "ns",
            "range": "± 350239.19138856384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50104.255319148935,
            "unit": "ns",
            "range": "± 3365.7322740471805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7481028.571428572,
            "unit": "ns",
            "range": "± 266708.8357482783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20114694.444444444,
            "unit": "ns",
            "range": "± 423490.6089273683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50755040,
            "unit": "ns",
            "range": "± 707097.7804680603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100981006.66666667,
            "unit": "ns",
            "range": "± 1129724.067110869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201242713.33333334,
            "unit": "ns",
            "range": "± 3668957.068601116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841081.082589285,
            "unit": "ns",
            "range": "± 17953.41016792021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556775.0390625,
            "unit": "ns",
            "range": "± 27023.111083354022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169327.890625,
            "unit": "ns",
            "range": "± 6574.925544064403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675471.9010416665,
            "unit": "ns",
            "range": "± 41325.18351055572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841102.3958333334,
            "unit": "ns",
            "range": "± 12921.499696494295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771636.1263020834,
            "unit": "ns",
            "range": "± 12649.306048517303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217284.210526316,
            "unit": "ns",
            "range": "± 99937.82804165904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490157.8947368423,
            "unit": "ns",
            "range": "± 75848.68940338078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043388.5714285714,
            "unit": "ns",
            "range": "± 132340.22502498576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379160.638297873,
            "unit": "ns",
            "range": "± 263986.09372712916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7208061.764705882,
            "unit": "ns",
            "range": "± 343470.06345006486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316444.1176470588,
            "unit": "ns",
            "range": "± 7869.626735458088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268140.9090909091,
            "unit": "ns",
            "range": "± 6380.301462567952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218547.4358974359,
            "unit": "ns",
            "range": "± 7544.0630955211245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5309368.75,
            "unit": "ns",
            "range": "± 65879.86762534767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3697330.769230769,
            "unit": "ns",
            "range": "± 50517.77549561779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23930,
            "unit": "ns",
            "range": "± 2620.889892724842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101826.80412371134,
            "unit": "ns",
            "range": "± 10609.493738549269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89797.9797979798,
            "unit": "ns",
            "range": "± 9303.444389568402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191355.31914893616,
            "unit": "ns",
            "range": "± 15545.110333265338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8623.404255319148,
            "unit": "ns",
            "range": "± 1625.1666933139402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22479.166666666668,
            "unit": "ns",
            "range": "± 2767.4391227713777"
          }
        ]
      }
    ]
  }
}