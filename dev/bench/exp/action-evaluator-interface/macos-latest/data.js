window.BENCHMARK_DATA = {
  "lastUpdate": 1681360951753,
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
        "date": 1681360944508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8307650.461538462,
            "unit": "ns",
            "range": "± 269231.8676375876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20826456.45945946,
            "unit": "ns",
            "range": "± 702314.6377157937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50357473.868421055,
            "unit": "ns",
            "range": "± 1088344.0723756645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106471029.20588236,
            "unit": "ns",
            "range": "± 2161150.8958615307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208269907.35714287,
            "unit": "ns",
            "range": "± 2556405.9174246313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64549.69892473118,
            "unit": "ns",
            "range": "± 8342.131478466434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387630.8125,
            "unit": "ns",
            "range": "± 17807.533514472118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318187.26923076925,
            "unit": "ns",
            "range": "± 13323.754253176485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309692.25333333336,
            "unit": "ns",
            "range": "± 15494.900733217115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5632260.416666667,
            "unit": "ns",
            "range": "± 27472.991955599304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4199152,
            "unit": "ns",
            "range": "± 159621.02755304798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19773.244444444445,
            "unit": "ns",
            "range": "± 1988.0064010992232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95178.30808080808,
            "unit": "ns",
            "range": "± 10653.224855889324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104777.67543859649,
            "unit": "ns",
            "range": "± 4224.011782665888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 253009.38659793814,
            "unit": "ns",
            "range": "± 20627.52467622463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7690.714285714285,
            "unit": "ns",
            "range": "± 701.0229079426132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18245.380434782608,
            "unit": "ns",
            "range": "± 2224.413936112934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1761258.65625,
            "unit": "ns",
            "range": "± 228400.26760703413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3255063.551020408,
            "unit": "ns",
            "range": "± 213431.28493864066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2699675.3163265307,
            "unit": "ns",
            "range": "± 303152.44206064363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7546628.171717172,
            "unit": "ns",
            "range": "± 517460.0568698769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342061.1636363636,
            "unit": "ns",
            "range": "± 141022.4121550482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429238.660493827,
            "unit": "ns",
            "range": "± 173423.7730242351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4617809.0344827585,
            "unit": "ns",
            "range": "± 201760.25213841037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4588002.26344086,
            "unit": "ns",
            "range": "± 275690.46436985297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8578898.93442623,
            "unit": "ns",
            "range": "± 383816.8877026678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6393944.657552083,
            "unit": "ns",
            "range": "± 14630.47412341117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898123.81953125,
            "unit": "ns",
            "range": "± 8925.16230522251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1272855.15625,
            "unit": "ns",
            "range": "± 3653.445610894578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667207.4704241073,
            "unit": "ns",
            "range": "± 16184.800233959704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868125.9233774039,
            "unit": "ns",
            "range": "± 4346.520145082925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712103.0788411458,
            "unit": "ns",
            "range": "± 3804.389117883157"
          }
        ]
      }
    ]
  }
}