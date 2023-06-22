window.BENCHMARK_DATA = {
  "lastUpdate": 1687418880022,
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
          "id": "6e58739e3aeeb89b0e3bef6244197f8b68fe0970",
          "message": "Release 2.0.1",
          "timestamp": "2023-06-22T16:13:44+09:00",
          "tree_id": "6cea483aef8aa810fc1a1aec2efecb1c78d25dc6",
          "url": "https://github.com/moreal/libplanet/commit/6e58739e3aeeb89b0e3bef6244197f8b68fe0970"
        },
        "date": 1687418875356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3742712,
            "unit": "ns",
            "range": "± 58506.33532240028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3987040.3333333335,
            "unit": "ns",
            "range": "± 62648.735494782646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4805844.1,
            "unit": "ns",
            "range": "± 110628.2958821067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4862568.956521739,
            "unit": "ns",
            "range": "± 121410.75821302518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7543476.2,
            "unit": "ns",
            "range": "± 175397.66174942773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6094151.910416666,
            "unit": "ns",
            "range": "± 40444.691645388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920878.2783203125,
            "unit": "ns",
            "range": "± 2240.2303865270715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402217.598046875,
            "unit": "ns",
            "range": "± 3098.0036413616917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682499.8833333333,
            "unit": "ns",
            "range": "± 3275.7057361389766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847556.7562779018,
            "unit": "ns",
            "range": "± 385.18551360098223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776335.2383510044,
            "unit": "ns",
            "range": "± 312.440771339675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299787.17741935485,
            "unit": "ns",
            "range": "± 13587.271705924972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289062.73076923075,
            "unit": "ns",
            "range": "± 11387.350121465424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277022.3870967742,
            "unit": "ns",
            "range": "± 8372.80906935229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4665761.428571428,
            "unit": "ns",
            "range": "± 32062.49871906259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4265563.142857143,
            "unit": "ns",
            "range": "± 26249.73167586566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23101.863157894735,
            "unit": "ns",
            "range": "± 1577.8710583630427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101294.66666666667,
            "unit": "ns",
            "range": "± 6393.003525510758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83083.62857142858,
            "unit": "ns",
            "range": "± 4043.235521612588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111470.33333333333,
            "unit": "ns",
            "range": "± 13646.346958004755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7191.958762886598,
            "unit": "ns",
            "range": "± 1092.0782358795486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21998.43157894737,
            "unit": "ns",
            "range": "± 1642.5519108518993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544271.6666666667,
            "unit": "ns",
            "range": "± 98675.80516478849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2948015.966666667,
            "unit": "ns",
            "range": "± 86760.35110479001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2439925.870967742,
            "unit": "ns",
            "range": "± 110526.40678648074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5961439.536585365,
            "unit": "ns",
            "range": "± 199880.68681442156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51134.51546391752,
            "unit": "ns",
            "range": "± 3748.0129377483763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9033388.733333332,
            "unit": "ns",
            "range": "± 88648.84448885685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23379749.666666668,
            "unit": "ns",
            "range": "± 214217.46872067935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58534101.13333333,
            "unit": "ns",
            "range": "± 181328.8486648603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116351332.66666667,
            "unit": "ns",
            "range": "± 324308.61758134613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231942360.73333332,
            "unit": "ns",
            "range": "± 293259.2204202542"
          }
        ]
      }
    ]
  }
}