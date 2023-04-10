window.BENCHMARK_DATA = {
  "lastUpdate": 1681099787427,
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
          "id": "268a2d064f86e8a6f2605cb5d7109b33d00dc625",
          "message": "Move `Transaction<T>.Serialize()` to `TransactionExtensions<T>.Serialize(ITransaction)`",
          "timestamp": "2023-04-10T12:56:42+09:00",
          "tree_id": "a86f6dec8cac90fa33a6fbd3735e61aa1aac0e69",
          "url": "https://github.com/moreal/libplanet/commit/268a2d064f86e8a6f2605cb5d7109b33d00dc625"
        },
        "date": 1681099785085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533798.285714285,
            "unit": "ns",
            "range": "± 10484.090521639637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19091032.307692308,
            "unit": "ns",
            "range": "± 82538.7867070028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49180529.266666666,
            "unit": "ns",
            "range": "± 595692.3574093627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100294210.93333334,
            "unit": "ns",
            "range": "± 922901.0269436467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196032144.2857143,
            "unit": "ns",
            "range": "± 1381457.0626626539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46131.36363636364,
            "unit": "ns",
            "range": "± 2440.320019440724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332376.3563218392,
            "unit": "ns",
            "range": "± 70199.10028873805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2586929.6923076925,
            "unit": "ns",
            "range": "± 69076.5756770089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173232.452631579,
            "unit": "ns",
            "range": "± 147549.20946742874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5419601.833333333,
            "unit": "ns",
            "range": "± 128060.05534314166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5944701.011160715,
            "unit": "ns",
            "range": "± 16348.755025228422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857827.8960336538,
            "unit": "ns",
            "range": "± 2227.4319082191755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358338.8432291667,
            "unit": "ns",
            "range": "± 1343.369354607055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2525261.7390625,
            "unit": "ns",
            "range": "± 5428.934023580308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797869.8271484375,
            "unit": "ns",
            "range": "± 983.5747877393853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737526.4390024039,
            "unit": "ns",
            "range": "± 916.9914769081656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320841.1111111111,
            "unit": "ns",
            "range": "± 5152.314053372054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266426.125,
            "unit": "ns",
            "range": "± 10344.439856342602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230105.23076923078,
            "unit": "ns",
            "range": "± 1981.5592830666694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5486533.066666666,
            "unit": "ns",
            "range": "± 28576.164996790758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793772.9285714286,
            "unit": "ns",
            "range": "± 35665.960596936085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15691.447916666666,
            "unit": "ns",
            "range": "± 1078.1768419521584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84714.12790697675,
            "unit": "ns",
            "range": "± 4625.572048047964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71149,
            "unit": "ns",
            "range": "± 1271.669319101022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 169882.46391752578,
            "unit": "ns",
            "range": "± 13496.143815813537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5315.244897959184,
            "unit": "ns",
            "range": "± 717.5533323506452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15557.736842105263,
            "unit": "ns",
            "range": "± 1329.3292518403528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3208152,
            "unit": "ns",
            "range": "± 59793.11790307835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3359392.8095238097,
            "unit": "ns",
            "range": "± 79248.5213064692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4164777.722222222,
            "unit": "ns",
            "range": "± 84894.23195593967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134318.9183673467,
            "unit": "ns",
            "range": "± 162794.7515890839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7151247.791666667,
            "unit": "ns",
            "range": "± 182384.90493935434"
          }
        ]
      }
    ]
  }
}