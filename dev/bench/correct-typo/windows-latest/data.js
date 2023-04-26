window.BENCHMARK_DATA = {
  "lastUpdate": 1682495795954,
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
        "date": 1682495779691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334267.7083333333,
            "unit": "ns",
            "range": "± 86613.46983465242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2611289,
            "unit": "ns",
            "range": "± 163342.22109090193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223018.556701031,
            "unit": "ns",
            "range": "± 142372.02537856653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5603469.072164948,
            "unit": "ns",
            "range": "± 324599.0717282451"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49758.762886597935,
            "unit": "ns",
            "range": "± 3634.090686853441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7023050,
            "unit": "ns",
            "range": "± 167389.2377208341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19895850,
            "unit": "ns",
            "range": "± 326684.855786123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49378173.333333336,
            "unit": "ns",
            "range": "± 636903.7474562459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100531733.33333333,
            "unit": "ns",
            "range": "± 954736.6171333527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199120920,
            "unit": "ns",
            "range": "± 3006535.4580123806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797311.614583333,
            "unit": "ns",
            "range": "± 17831.673824522506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526725.8528645833,
            "unit": "ns",
            "range": "± 5284.907352614854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188979.1666666667,
            "unit": "ns",
            "range": "± 3617.8084269101964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647108.0208333335,
            "unit": "ns",
            "range": "± 7781.428926361121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817983.3919270834,
            "unit": "ns",
            "range": "± 1641.8578652366964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762660.3776041666,
            "unit": "ns",
            "range": "± 2740.84053701146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222003.4482758623,
            "unit": "ns",
            "range": "± 91416.59540945593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419965.625,
            "unit": "ns",
            "range": "± 103718.48875332784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3925564.285714286,
            "unit": "ns",
            "range": "± 66989.60432717967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4168621.794871795,
            "unit": "ns",
            "range": "± 214977.52081061743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6517135.294117647,
            "unit": "ns",
            "range": "± 131309.3529664608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276396.5517241379,
            "unit": "ns",
            "range": "± 11123.264154224067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263010.5263157895,
            "unit": "ns",
            "range": "± 5681.245436310804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219462.5,
            "unit": "ns",
            "range": "± 4147.268177165944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3995980,
            "unit": "ns",
            "range": "± 54427.3460679464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674953.3333333335,
            "unit": "ns",
            "range": "± 57709.69052899506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22492.78350515464,
            "unit": "ns",
            "range": "± 2177.2137882452166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93466.30434782608,
            "unit": "ns",
            "range": "± 6300.3100773842625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89812.12121212122,
            "unit": "ns",
            "range": "± 8459.956973008651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102571.11111111111,
            "unit": "ns",
            "range": "± 9938.660123160234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7715.789473684211,
            "unit": "ns",
            "range": "± 1224.685438507486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21424.468085106382,
            "unit": "ns",
            "range": "± 1845.4789960270311"
          }
        ]
      }
    ]
  }
}