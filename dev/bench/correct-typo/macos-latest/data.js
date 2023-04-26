window.BENCHMARK_DATA = {
  "lastUpdate": 1682496090141,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "433fc53db9ec8867e161247622fca7de244846f5",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T16:40:01+09:00",
          "tree_id": "15e06d5fc334734cf9bcba5d65cba7026a368e93",
          "url": "https://github.com/moreal/libplanet/commit/433fc53db9ec8867e161247622fca7de244846f5"
        },
        "date": 1682496079942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8966097.255555555,
            "unit": "ns",
            "range": "± 720541.9528045697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20937732.994949494,
            "unit": "ns",
            "range": "± 1347197.819247679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55410926.631578945,
            "unit": "ns",
            "range": "± 1225573.4077761865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108357083.31578948,
            "unit": "ns",
            "range": "± 7097465.6145052705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232889261.015625,
            "unit": "ns",
            "range": "± 10792790.650926286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72185.83720930232,
            "unit": "ns",
            "range": "± 8387.24326106297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381711.37078651687,
            "unit": "ns",
            "range": "± 36023.583327574204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376401.4793814433,
            "unit": "ns",
            "range": "± 47124.74282931142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344577.47777777776,
            "unit": "ns",
            "range": "± 25921.93562972556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4780196.310526316,
            "unit": "ns",
            "range": "± 371384.0746722391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930536.06122449,
            "unit": "ns",
            "range": "± 259728.1072282462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25360.477272727272,
            "unit": "ns",
            "range": "± 3161.8731171052605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126457.38144329897,
            "unit": "ns",
            "range": "± 21348.680352191997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126535.22527472528,
            "unit": "ns",
            "range": "± 17693.56492128388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126252.14736842105,
            "unit": "ns",
            "range": "± 17724.767221091544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9570.805263157894,
            "unit": "ns",
            "range": "± 1368.3406947419558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23565.876404494382,
            "unit": "ns",
            "range": "± 4645.911777672301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591091.494736842,
            "unit": "ns",
            "range": "± 161830.3076468099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3082660.306451613,
            "unit": "ns",
            "range": "± 186333.45651407822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2560803.76,
            "unit": "ns",
            "range": "± 268643.6290745151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6864446.928571428,
            "unit": "ns",
            "range": "± 434269.8481935886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3934781.211340206,
            "unit": "ns",
            "range": "± 273171.1315220186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3590981.7040816327,
            "unit": "ns",
            "range": "± 228699.97561489098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4867565.032608695,
            "unit": "ns",
            "range": "± 419396.39680466405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5030128.484848484,
            "unit": "ns",
            "range": "± 527546.5567518007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8867158.75,
            "unit": "ns",
            "range": "± 897459.8075291358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7287879.279146635,
            "unit": "ns",
            "range": "± 337240.0575188031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059865.6806640625,
            "unit": "ns",
            "range": "± 42267.78379218983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317158.6473858173,
            "unit": "ns",
            "range": "± 9702.524990493377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2984457.820805921,
            "unit": "ns",
            "range": "± 210634.5879159216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935327.7696965145,
            "unit": "ns",
            "range": "± 43550.50749289857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883505.9366319445,
            "unit": "ns",
            "range": "± 31610.287786897974"
          }
        ]
      }
    ]
  }
}