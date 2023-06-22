window.BENCHMARK_DATA = {
  "lastUpdate": 1687421274536,
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
          "id": "3b6b324ac8dae955adf7e184ba10ce4852886b5c",
          "message": "Port changes from Libplanet 2.0.1 release",
          "timestamp": "2023-06-22T16:52:10+09:00",
          "tree_id": "2a8974f25dadb3cc9375aa368fbc8550d0537f82",
          "url": "https://github.com/moreal/libplanet/commit/3b6b324ac8dae955adf7e184ba10ce4852886b5c"
        },
        "date": 1687421252686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7605358.076923077,
            "unit": "ns",
            "range": "± 124206.50461393017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18667015,
            "unit": "ns",
            "range": "± 412825.64296220493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49547910.9117647,
            "unit": "ns",
            "range": "± 1566541.8438531253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95129445.1923077,
            "unit": "ns",
            "range": "± 2534815.094905504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195265880.3529412,
            "unit": "ns",
            "range": "± 3882920.268305511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56023.46875,
            "unit": "ns",
            "range": "± 7584.189297761252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313557.7417582418,
            "unit": "ns",
            "range": "± 20380.089156571234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303976.41397849465,
            "unit": "ns",
            "range": "± 19388.977364256487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294778,
            "unit": "ns",
            "range": "± 30302.058943073054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4528515.368421053,
            "unit": "ns",
            "range": "± 98892.75775258915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714220.3636363638,
            "unit": "ns",
            "range": "± 87719.02812649436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17200.304347826088,
            "unit": "ns",
            "range": "± 2200.4148871486227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91548.41052631578,
            "unit": "ns",
            "range": "± 10496.571682965478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96516.70408163265,
            "unit": "ns",
            "range": "± 14239.469714555236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119297.82608695653,
            "unit": "ns",
            "range": "± 7781.58451138863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6262.092783505154,
            "unit": "ns",
            "range": "± 1066.5264987573194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17080.808510638297,
            "unit": "ns",
            "range": "± 1781.2066287591094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511997.608695652,
            "unit": "ns",
            "range": "± 163535.4167342646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007849.222222222,
            "unit": "ns",
            "range": "± 243591.9793955411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2532183.434782609,
            "unit": "ns",
            "range": "± 281110.5744042668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6462750.711111112,
            "unit": "ns",
            "range": "± 449432.89165833266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3077827.9583333335,
            "unit": "ns",
            "range": "± 113681.36214258682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3351017.287234043,
            "unit": "ns",
            "range": "± 130166.0500472772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4249283.298245614,
            "unit": "ns",
            "range": "± 181709.54843955202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119081.2666666666,
            "unit": "ns",
            "range": "± 221517.401852911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7378245.550847458,
            "unit": "ns",
            "range": "± 297440.77254004957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6547226.382254465,
            "unit": "ns",
            "range": "± 113805.69744979352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938150.3138950893,
            "unit": "ns",
            "range": "± 29615.66855437989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269534.9859375,
            "unit": "ns",
            "range": "± 14829.890279403058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2483709.6299913195,
            "unit": "ns",
            "range": "± 51626.34324722116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834715.3725585938,
            "unit": "ns",
            "range": "± 7609.955946850616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787411.8218470982,
            "unit": "ns",
            "range": "± 3859.7203445668283"
          }
        ]
      }
    ]
  }
}