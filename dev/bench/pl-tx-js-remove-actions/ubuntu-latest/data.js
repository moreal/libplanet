window.BENCHMARK_DATA = {
  "lastUpdate": 1687399990872,
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
          "id": "83f0c1386a4231b79929d19b5e13a54bec60dd0e",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:00:56+09:00",
          "tree_id": "0a917410dd82fca67ee0369ee8390e01dda737df",
          "url": "https://github.com/moreal/libplanet/commit/83f0c1386a4231b79929d19b5e13a54bec60dd0e"
        },
        "date": 1687399985671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264984.2,
            "unit": "ns",
            "range": "± 42311.75600772371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403397.066666667,
            "unit": "ns",
            "range": "± 62213.785680009016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252982.933333334,
            "unit": "ns",
            "range": "± 43901.367732463106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4289779.5,
            "unit": "ns",
            "range": "± 47639.951659199956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6796959.888888889,
            "unit": "ns",
            "range": "± 190332.07519052937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6350760.442522322,
            "unit": "ns",
            "range": "± 15445.906447336572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020650.8072916667,
            "unit": "ns",
            "range": "± 6613.199809716741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353501.3662760416,
            "unit": "ns",
            "range": "± 1486.8031785547132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518741.9891183036,
            "unit": "ns",
            "range": "± 1579.71961587487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809469.1310847356,
            "unit": "ns",
            "range": "± 1198.7884692887537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760887.384375,
            "unit": "ns",
            "range": "± 480.93547052802046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291253.46153846156,
            "unit": "ns",
            "range": "± 4659.492544175896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267711.7586206897,
            "unit": "ns",
            "range": "± 7440.175687514627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232492.7142857143,
            "unit": "ns",
            "range": "± 3215.9034961738666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4139703.6923076925,
            "unit": "ns",
            "range": "± 26969.59589174637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793010.5714285714,
            "unit": "ns",
            "range": "± 25254.49789554415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15985.375,
            "unit": "ns",
            "range": "± 1606.7439140271103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85377.28,
            "unit": "ns",
            "range": "± 4325.804235677502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74049.91666666667,
            "unit": "ns",
            "range": "± 1884.0520835749708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90551.94897959183,
            "unit": "ns",
            "range": "± 12201.983545336761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4628.551020408163,
            "unit": "ns",
            "range": "± 547.1530463526349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17271.822916666668,
            "unit": "ns",
            "range": "± 1590.2319790705922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352521.125,
            "unit": "ns",
            "range": "± 100463.23472492181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571563.4444444445,
            "unit": "ns",
            "range": "± 63411.4184102112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162032.3936170214,
            "unit": "ns",
            "range": "± 123672.91411076984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5181790.12,
            "unit": "ns",
            "range": "± 127196.53317252794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45866.194805194806,
            "unit": "ns",
            "range": "± 2168.3361559582536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7731802.133333334,
            "unit": "ns",
            "range": "± 52613.35586530785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19468626.2,
            "unit": "ns",
            "range": "± 134870.9691282746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49474576.06666667,
            "unit": "ns",
            "range": "± 251999.24520336694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100966310.61538461,
            "unit": "ns",
            "range": "± 948855.6397846249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202272449.06666666,
            "unit": "ns",
            "range": "± 1214421.9975271872"
          }
        ]
      }
    ]
  }
}