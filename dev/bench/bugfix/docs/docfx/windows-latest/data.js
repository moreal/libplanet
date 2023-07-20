window.BENCHMARK_DATA = {
  "lastUpdate": 1689821652168,
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
          "id": "08b4f59855bee5a03b1da544e4eb9adedead715e",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:38:05+09:00",
          "tree_id": "4cb596b9a792d1fd5a4b53708adfd6f71e0c5a2a",
          "url": "https://github.com/moreal/libplanet/commit/08b4f59855bee5a03b1da544e4eb9adedead715e"
        },
        "date": 1689821631877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418965.1515151516,
            "unit": "ns",
            "range": "± 44458.028810976044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442164.285714286,
            "unit": "ns",
            "range": "± 88955.83947277785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855792.3076923077,
            "unit": "ns",
            "range": "± 64790.18519163216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4547420.408163265,
            "unit": "ns",
            "range": "± 181356.68352217754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42735.10638297872,
            "unit": "ns",
            "range": "± 2526.2474804830567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7760823.333333333,
            "unit": "ns",
            "range": "± 35553.61076030447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18919946.666666668,
            "unit": "ns",
            "range": "± 75910.52878851775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48829020,
            "unit": "ns",
            "range": "± 299767.0242991094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98716646.66666667,
            "unit": "ns",
            "range": "± 641367.64347388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196999213.33333334,
            "unit": "ns",
            "range": "± 1424308.3313196853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4923819.140625,
            "unit": "ns",
            "range": "± 4884.183670457667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526205.3013392857,
            "unit": "ns",
            "range": "± 1542.3912978282178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163042.8645833333,
            "unit": "ns",
            "range": "± 2100.27086608718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2551181.6015625,
            "unit": "ns",
            "range": "± 3390.1969017205806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800388.7825520834,
            "unit": "ns",
            "range": "± 927.6342953440263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754858.4505208334,
            "unit": "ns",
            "range": "± 1052.453868947939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3007300,
            "unit": "ns",
            "range": "± 48692.59257247011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3073100,
            "unit": "ns",
            "range": "± 33397.81857718084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3905135.714285714,
            "unit": "ns",
            "range": "± 53220.45380581327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3426948.1481481483,
            "unit": "ns",
            "range": "± 137846.3798235855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5959025.490196078,
            "unit": "ns",
            "range": "± 209726.46074650405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261884.0909090909,
            "unit": "ns",
            "range": "± 8307.630092811378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247690.47619047618,
            "unit": "ns",
            "range": "± 11369.70669871244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224859.0909090909,
            "unit": "ns",
            "range": "± 13211.629778722176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3938046.6666666665,
            "unit": "ns",
            "range": "± 44882.81355241617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523473.3333333335,
            "unit": "ns",
            "range": "± 46548.98290536336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19958.947368421053,
            "unit": "ns",
            "range": "± 1404.1348314389265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87705.37634408602,
            "unit": "ns",
            "range": "± 7508.797240446034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65521.95121951219,
            "unit": "ns",
            "range": "± 2228.397652476096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86323.4693877551,
            "unit": "ns",
            "range": "± 12782.74288540261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4186.59793814433,
            "unit": "ns",
            "range": "± 698.753185141724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17077.36842105263,
            "unit": "ns",
            "range": "± 1507.3890421931812"
          }
        ]
      }
    ]
  }
}