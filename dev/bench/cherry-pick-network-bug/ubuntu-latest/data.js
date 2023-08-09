window.BENCHMARK_DATA = {
  "lastUpdate": 1691540520230,
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
          "id": "9241521fd4eb53916fbc30f797b45de3fdcc6ba4",
          "message": "Update changelog",
          "timestamp": "2023-08-09T09:05:56+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/moreal/libplanet/commit/9241521fd4eb53916fbc30f797b45de3fdcc6ba4"
        },
        "date": 1691540513227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4296583.692307692,
            "unit": "ns",
            "range": "± 64410.374349924685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4519224.113636363,
            "unit": "ns",
            "range": "± 161198.26282407143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5492942.291666667,
            "unit": "ns",
            "range": "± 138578.25856909037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5057056.095238095,
            "unit": "ns",
            "range": "± 118845.52075526647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8072053.678571428,
            "unit": "ns",
            "range": "± 224962.6080353756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10210090.388888888,
            "unit": "ns",
            "range": "± 208226.66116522238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26975770.230769232,
            "unit": "ns",
            "range": "± 175387.23026071663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67405691.2,
            "unit": "ns",
            "range": "± 807087.3396356626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136096022.53333333,
            "unit": "ns",
            "range": "± 1560147.895109392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270526235.4,
            "unit": "ns",
            "range": "± 4495009.486930157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57223.2676056338,
            "unit": "ns",
            "range": "± 2825.1340244200123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7479579.047395834,
            "unit": "ns",
            "range": "± 36647.52435428244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2384597.60390625,
            "unit": "ns",
            "range": "± 7910.320626224445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1708810.355747768,
            "unit": "ns",
            "range": "± 4537.309587796736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3243533.3411458335,
            "unit": "ns",
            "range": "± 4098.472572142385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046444.187109375,
            "unit": "ns",
            "range": "± 1348.9124125514938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972936.6186197917,
            "unit": "ns",
            "range": "± 991.5219337965905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349381,
            "unit": "ns",
            "range": "± 6295.380437840342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340828.32,
            "unit": "ns",
            "range": "± 8450.390038927197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294050.05263157893,
            "unit": "ns",
            "range": "± 5797.792266349554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5511204.6,
            "unit": "ns",
            "range": "± 87236.13519375361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4999706,
            "unit": "ns",
            "range": "± 74005.99636419432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23856.814814814814,
            "unit": "ns",
            "range": "± 1291.1887072685304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103850.32911392405,
            "unit": "ns",
            "range": "± 5181.8777527206785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90311.75,
            "unit": "ns",
            "range": "± 2960.823923698074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107313.15625,
            "unit": "ns",
            "range": "± 12968.560137037593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6176.989247311828,
            "unit": "ns",
            "range": "± 634.4701400214002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22406.608108108107,
            "unit": "ns",
            "range": "± 1157.726099312462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1808550.6734693877,
            "unit": "ns",
            "range": "± 108824.97626807896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3383624.2083333335,
            "unit": "ns",
            "range": "± 87215.8103379842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2334047.735632184,
            "unit": "ns",
            "range": "± 127189.07725375576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6227910.8,
            "unit": "ns",
            "range": "± 234027.71330031136"
          }
        ]
      }
    ]
  }
}