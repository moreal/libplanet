window.BENCHMARK_DATA = {
  "lastUpdate": 1699693002388,
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
          "id": "19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:43:26+09:00",
          "tree_id": "eefe0b03257e037c93925843fe381f756e74b24b",
          "url": "https://github.com/moreal/libplanet/commit/19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec"
        },
        "date": 1699692991153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625535.636363637,
            "unit": "ns",
            "range": "± 153983.58028004633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18486402.714285713,
            "unit": "ns",
            "range": "± 157436.83000708988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45763379.78571428,
            "unit": "ns",
            "range": "± 444231.3085129237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91077616.61538461,
            "unit": "ns",
            "range": "± 1214202.4095768614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184916523.6,
            "unit": "ns",
            "range": "± 2275165.1933932747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34759.944444444445,
            "unit": "ns",
            "range": "± 2643.8524766384407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216085.60416666666,
            "unit": "ns",
            "range": "± 16655.855520051336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211845.46808510637,
            "unit": "ns",
            "range": "± 14270.253579930864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194202.6875,
            "unit": "ns",
            "range": "± 18531.400581211226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3679881.6052631577,
            "unit": "ns",
            "range": "± 78896.91042950691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3493014.85483871,
            "unit": "ns",
            "range": "± 106304.13144826448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16805.69387755102,
            "unit": "ns",
            "range": "± 3847.215488990059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86360.59574468085,
            "unit": "ns",
            "range": "± 13496.564440841537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83458.44897959183,
            "unit": "ns",
            "range": "± 15825.607468917482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69942.86315789474,
            "unit": "ns",
            "range": "± 11227.9846997244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3469.434065934066,
            "unit": "ns",
            "range": "± 607.7729803178121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11604.75,
            "unit": "ns",
            "range": "± 650.3514213595353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1086077.888888889,
            "unit": "ns",
            "range": "± 87164.83473655414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2309954.9404761903,
            "unit": "ns",
            "range": "± 119295.3561450214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635846.3505154639,
            "unit": "ns",
            "range": "± 116268.95806052459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7701934.602564103,
            "unit": "ns",
            "range": "± 412148.8007303235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3131894.222222222,
            "unit": "ns",
            "range": "± 65956.85424984994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2952247.596153846,
            "unit": "ns",
            "range": "± 119743.3100775317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3559108.75,
            "unit": "ns",
            "range": "± 98870.1959067488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3525167.98,
            "unit": "ns",
            "range": "± 138466.03459085524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11118112.460674157,
            "unit": "ns",
            "range": "± 918973.7539237607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4689628.229940878,
            "unit": "ns",
            "range": "± 156073.28325449728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381403.8192608173,
            "unit": "ns",
            "range": "± 17556.147363059863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877080.9731119792,
            "unit": "ns",
            "range": "± 7193.275635561413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974647.43984375,
            "unit": "ns",
            "range": "± 20676.689811489377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626074.5344587053,
            "unit": "ns",
            "range": "± 4239.55304418203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575194.5139322917,
            "unit": "ns",
            "range": "± 8649.009953473938"
          }
        ]
      }
    ]
  }
}