window.BENCHMARK_DATA = {
  "lastUpdate": 1687424819457,
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
        "date": 1687421145028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601822,
            "unit": "ns",
            "range": "± 101297.09960858263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3817173.714285714,
            "unit": "ns",
            "range": "± 106158.90547520318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601980,
            "unit": "ns",
            "range": "± 115381.04791555202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4595718,
            "unit": "ns",
            "range": "± 143308.58353806828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7166119.14,
            "unit": "ns",
            "range": "± 187490.2463802851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8030320.928571428,
            "unit": "ns",
            "range": "± 66941.34614888825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22334888.333333332,
            "unit": "ns",
            "range": "± 204041.99832025712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55608459.5,
            "unit": "ns",
            "range": "± 1129820.5764536895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112344225.06666666,
            "unit": "ns",
            "range": "± 1487497.6766198166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226533040,
            "unit": "ns",
            "range": "± 3637881.8000678048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295203.4,
            "unit": "ns",
            "range": "± 7811.521634739291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280887.4117647059,
            "unit": "ns",
            "range": "± 10914.060879757764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247345.63333333333,
            "unit": "ns",
            "range": "± 6798.300709245902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4661209.6,
            "unit": "ns",
            "range": "± 64979.96780854851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252825.476190476,
            "unit": "ns",
            "range": "± 97591.90001614839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20927.666666666668,
            "unit": "ns",
            "range": "± 1991.8052465918643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92788.19191919192,
            "unit": "ns",
            "range": "± 6168.909668945356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77356.64150943396,
            "unit": "ns",
            "range": "± 3203.1647877489227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91923.94594594595,
            "unit": "ns",
            "range": "± 4435.6559394836395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5536.164948453608,
            "unit": "ns",
            "range": "± 731.3510710836879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18934.443298969072,
            "unit": "ns",
            "range": "± 1714.3638456258352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49106.53191489362,
            "unit": "ns",
            "range": "± 3001.829806491789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133814.209375,
            "unit": "ns",
            "range": "± 24591.62393796451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908124.2172154018,
            "unit": "ns",
            "range": "± 4113.143642257143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397219.9157552083,
            "unit": "ns",
            "range": "± 3850.081543794266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640399.8219866073,
            "unit": "ns",
            "range": "± 2752.460807136603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845900.2545823317,
            "unit": "ns",
            "range": "± 827.2025772639657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776853.0317758414,
            "unit": "ns",
            "range": "± 948.5909241159461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500695.103448276,
            "unit": "ns",
            "range": "± 80268.3475153065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914791.6363636362,
            "unit": "ns",
            "range": "± 102415.0640230305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413855.2588235294,
            "unit": "ns",
            "range": "± 125194.66136905826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805528.1875,
            "unit": "ns",
            "range": "± 169466.41936829872"
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
        "date": 1687424814833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3153631.8,
            "unit": "ns",
            "range": "± 35669.14241469789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3319492.1428571427,
            "unit": "ns",
            "range": "± 34159.258400023275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225929.133333334,
            "unit": "ns",
            "range": "± 59382.27856724677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4078130.0555555555,
            "unit": "ns",
            "range": "± 118383.64161341706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6666793.28,
            "unit": "ns",
            "range": "± 135518.07413512535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6037421.609895834,
            "unit": "ns",
            "range": "± 19076.956273414562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870435.66015625,
            "unit": "ns",
            "range": "± 600.8891862701358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363345.0073617788,
            "unit": "ns",
            "range": "± 747.4596879868344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559991.790264423,
            "unit": "ns",
            "range": "± 3444.4419097348446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800036.4135742188,
            "unit": "ns",
            "range": "± 962.9580996511891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744278.9501255581,
            "unit": "ns",
            "range": "± 908.2063100089437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277539.39130434784,
            "unit": "ns",
            "range": "± 6711.2324348413385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268248.29545454547,
            "unit": "ns",
            "range": "± 9335.305419897602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232004.38461538462,
            "unit": "ns",
            "range": "± 3401.5914789615153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174137.5,
            "unit": "ns",
            "range": "± 29453.140364758285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3832763.9285714286,
            "unit": "ns",
            "range": "± 27692.87061116657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16350.697916666666,
            "unit": "ns",
            "range": "± 1312.2663651287592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85392.20779220779,
            "unit": "ns",
            "range": "± 4192.562133794556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71213.35714285714,
            "unit": "ns",
            "range": "± 1112.0429991093563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83658.69333333333,
            "unit": "ns",
            "range": "± 4052.10118324793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4680.329896907217,
            "unit": "ns",
            "range": "± 625.407179391446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16649.274725274725,
            "unit": "ns",
            "range": "± 1832.4878903097472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322049.6082474226,
            "unit": "ns",
            "range": "± 92428.18843224054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555474.846153846,
            "unit": "ns",
            "range": "± 65084.01289698865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125970.6588235293,
            "unit": "ns",
            "range": "± 114841.84990969031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5188027.5,
            "unit": "ns",
            "range": "± 133641.13807376893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45338.41463414634,
            "unit": "ns",
            "range": "± 2411.2019028027275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7614014.615384615,
            "unit": "ns",
            "range": "± 10443.419048524143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19389026.07142857,
            "unit": "ns",
            "range": "± 164226.61811677006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50482944.8,
            "unit": "ns",
            "range": "± 396373.87769273017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100505032.26666667,
            "unit": "ns",
            "range": "± 727554.5659408319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197352583.5,
            "unit": "ns",
            "range": "± 999667.2449993432"
          }
        ]
      }
    ]
  }
}