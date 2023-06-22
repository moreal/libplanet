window.BENCHMARK_DATA = {
  "lastUpdate": 1687425352074,
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
      },
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
          "id": "ff389d3b94b93029459d2e5749832aca444fd0a6",
          "message": "Port changes from Libplanet 2.0.1 release",
          "timestamp": "2023-06-22T17:54:30+09:00",
          "tree_id": "b7a983c6a93a1a0c54a5a7ccee3fcfc781203e0c",
          "url": "https://github.com/moreal/libplanet/commit/ff389d3b94b93029459d2e5749832aca444fd0a6"
        },
        "date": 1687425339638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9984001.967741935,
            "unit": "ns",
            "range": "± 2376817.0263300454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28782594.377777778,
            "unit": "ns",
            "range": "± 5004833.569791477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78356527.82417582,
            "unit": "ns",
            "range": "± 25067151.223569065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123140815.18085106,
            "unit": "ns",
            "range": "± 20705755.624521434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299761768.3453608,
            "unit": "ns",
            "range": "± 69134868.44110525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79104.17777777778,
            "unit": "ns",
            "range": "± 6659.506788394255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348875.0909090909,
            "unit": "ns",
            "range": "± 22262.140804222825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354433.43157894735,
            "unit": "ns",
            "range": "± 40015.66944140349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343022.775862069,
            "unit": "ns",
            "range": "± 37172.28305383789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4859206.0154639175,
            "unit": "ns",
            "range": "± 471243.25469414575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4357236.785714285,
            "unit": "ns",
            "range": "± 334294.00004743034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26274.19318181818,
            "unit": "ns",
            "range": "± 3963.5080431643933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127047.55434782608,
            "unit": "ns",
            "range": "± 17460.244878488793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131185.18279569893,
            "unit": "ns",
            "range": "± 19070.195777104444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139697.94845360826,
            "unit": "ns",
            "range": "± 23643.355145778245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8428.09375,
            "unit": "ns",
            "range": "± 1701.0027078670546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23222.294736842105,
            "unit": "ns",
            "range": "± 6727.280151097841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758094.7315789473,
            "unit": "ns",
            "range": "± 235609.06977319997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3256780.069767442,
            "unit": "ns",
            "range": "± 343507.7259755437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619832.870786517,
            "unit": "ns",
            "range": "± 224282.17980260646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10155405.802083334,
            "unit": "ns",
            "range": "± 2810705.638617575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3840286.45505618,
            "unit": "ns",
            "range": "± 682220.2171154604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827974.0681818184,
            "unit": "ns",
            "range": "± 483542.98239637073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4581813.191489362,
            "unit": "ns",
            "range": "± 178198.6923740193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4510983.75882353,
            "unit": "ns",
            "range": "± 361717.5607834415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8419393.533333333,
            "unit": "ns",
            "range": "± 863856.1191498855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7888664.734598215,
            "unit": "ns",
            "range": "± 232529.48477496643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271007.88664363,
            "unit": "ns",
            "range": "± 91942.91828035786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348498.8921274038,
            "unit": "ns",
            "range": "± 21128.11053081786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716619.5338199013,
            "unit": "ns",
            "range": "± 57140.53978644164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821963.4921875,
            "unit": "ns",
            "range": "± 10650.084980413569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 869840.9746301529,
            "unit": "ns",
            "range": "± 33499.70125058371"
          }
        ]
      }
    ]
  }
}