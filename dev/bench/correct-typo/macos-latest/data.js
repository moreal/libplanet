window.BENCHMARK_DATA = {
  "lastUpdate": 1682502179277,
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
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "bf44bf353dcb1f86021df0e7ea77ced5356c7e03",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T18:21:55+09:00",
          "tree_id": "0d7782a2ce19d903f582ac7267006e15fbe8e8da",
          "url": "https://github.com/moreal/libplanet/commit/bf44bf353dcb1f86021df0e7ea77ced5356c7e03"
        },
        "date": 1682502167628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8563270.129213484,
            "unit": "ns",
            "range": "± 488556.72487794416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22404768.38202247,
            "unit": "ns",
            "range": "± 1616689.6364030174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55323864.467391305,
            "unit": "ns",
            "range": "± 4836671.556584338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108030619.75510204,
            "unit": "ns",
            "range": "± 4204163.50014759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217315161.72,
            "unit": "ns",
            "range": "± 8658034.378327731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73008,
            "unit": "ns",
            "range": "± 6519.8999340039945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356996.193877551,
            "unit": "ns",
            "range": "± 38873.45017705799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313971.0444444445,
            "unit": "ns",
            "range": "± 22626.74878853733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284586.5376344086,
            "unit": "ns",
            "range": "± 21309.214241200276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4416696.542553191,
            "unit": "ns",
            "range": "± 331690.0420346691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4080496.237113402,
            "unit": "ns",
            "range": "± 284460.4762484139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26224.605882352942,
            "unit": "ns",
            "range": "± 2452.5491938347072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128781.89130434782,
            "unit": "ns",
            "range": "± 15477.730890751298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122151.03488372093,
            "unit": "ns",
            "range": "± 7095.301068847773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131068.75531914894,
            "unit": "ns",
            "range": "± 18838.02110519886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9390.175824175823,
            "unit": "ns",
            "range": "± 1045.997903050868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26359.05172413793,
            "unit": "ns",
            "range": "± 3040.8560099840797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660660.06,
            "unit": "ns",
            "range": "± 197847.688163733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054004.8421052634,
            "unit": "ns",
            "range": "± 154778.20640848656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2612405.5721649486,
            "unit": "ns",
            "range": "± 205459.60815354757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7300172.244680851,
            "unit": "ns",
            "range": "± 559517.5135016687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3507515.9795918367,
            "unit": "ns",
            "range": "± 253703.59093111975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519678.015789474,
            "unit": "ns",
            "range": "± 268444.3151439087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4597361.763736264,
            "unit": "ns",
            "range": "± 262068.34367113034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4789599.757575758,
            "unit": "ns",
            "range": "± 150041.1036064431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8354110.835294117,
            "unit": "ns",
            "range": "± 450526.4231365731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7401513.064603365,
            "unit": "ns",
            "range": "± 193789.05691852246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2160322.937973485,
            "unit": "ns",
            "range": "± 68031.82266123164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399267.7494140626,
            "unit": "ns",
            "range": "± 32156.19622270723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3053620.715277778,
            "unit": "ns",
            "range": "± 270407.79486169515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967708.5811631945,
            "unit": "ns",
            "range": "± 26183.441574805987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902373.4511035156,
            "unit": "ns",
            "range": "± 58265.05685988654"
          }
        ]
      }
    ]
  }
}