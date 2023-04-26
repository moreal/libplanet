window.BENCHMARK_DATA = {
  "lastUpdate": 1682504459848,
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
          "id": "71854094e6b4fb791173a6c8a2a6a14f6d1f2e17",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T17:10:51+09:00",
          "tree_id": "201e1f29e6b6f6eb3048aa9a72d9cd1de60e6b5a",
          "url": "https://github.com/moreal/libplanet/commit/71854094e6b4fb791173a6c8a2a6a14f6d1f2e17"
        },
        "date": 1682497464690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787084.428571428,
            "unit": "ns",
            "range": "± 112355.60738032703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21498624.666666668,
            "unit": "ns",
            "range": "± 254411.30835958943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54404925.46666667,
            "unit": "ns",
            "range": "± 678877.1037325287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106991998.53333333,
            "unit": "ns",
            "range": "± 1086206.8021298356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213852734.92857143,
            "unit": "ns",
            "range": "± 2763841.8243657607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48991.12162162162,
            "unit": "ns",
            "range": "± 2473.1750208255967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462613.085106383,
            "unit": "ns",
            "range": "± 101538.45040706475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710762.175,
            "unit": "ns",
            "range": "± 95663.861011004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348101.7125,
            "unit": "ns",
            "range": "± 116885.04362197603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5971236.26,
            "unit": "ns",
            "range": "± 367538.48515269224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5911755.516145834,
            "unit": "ns",
            "range": "± 23111.722329274235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870969.1108072917,
            "unit": "ns",
            "range": "± 4237.000313143332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355334.590625,
            "unit": "ns",
            "range": "± 3911.4975770101973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572531.1944110575,
            "unit": "ns",
            "range": "± 3041.5798372657373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835545.2067307692,
            "unit": "ns",
            "range": "± 762.7689663205723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754408.0905412947,
            "unit": "ns",
            "range": "± 843.5692927106512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298764.17391304346,
            "unit": "ns",
            "range": "± 7340.180005547139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282143.8888888889,
            "unit": "ns",
            "range": "± 7850.650298068568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232631.07142857142,
            "unit": "ns",
            "range": "± 3047.4652131361113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4414149.733333333,
            "unit": "ns",
            "range": "± 58227.905685291815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796721.6428571427,
            "unit": "ns",
            "range": "± 43855.131634835976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20203.42105263158,
            "unit": "ns",
            "range": "± 1627.3262013221315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90337.62195121951,
            "unit": "ns",
            "range": "± 4666.076453788409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82164.30985915494,
            "unit": "ns",
            "range": "± 3785.833041339965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100853.39130434782,
            "unit": "ns",
            "range": "± 9136.694700109032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7450.081632653061,
            "unit": "ns",
            "range": "± 975.288523775204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20567.21649484536,
            "unit": "ns",
            "range": "± 1866.6769952846917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404316.052631579,
            "unit": "ns",
            "range": "± 75442.50173658648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577937.8767123288,
            "unit": "ns",
            "range": "± 178007.0392281616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4219834.222222222,
            "unit": "ns",
            "range": "± 85907.81071012423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4594130.183673469,
            "unit": "ns",
            "range": "± 182645.99621725827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7044037.28125,
            "unit": "ns",
            "range": "± 213340.0313461806"
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
          "id": "a5dfb9bd90f0889ecbd9bda78425acd374ab16a8",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T18:21:34+09:00",
          "tree_id": "42f6deb3592a76edc4e53b869ba3b54083100fd9",
          "url": "https://github.com/moreal/libplanet/commit/a5dfb9bd90f0889ecbd9bda78425acd374ab16a8"
        },
        "date": 1682501520308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7531405,
            "unit": "ns",
            "range": "± 14285.182312952316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19179129.6,
            "unit": "ns",
            "range": "± 182998.26702801624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49429531.8,
            "unit": "ns",
            "range": "± 429299.35815602075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95107305.84615384,
            "unit": "ns",
            "range": "± 396202.7214490595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194753260.2,
            "unit": "ns",
            "range": "± 2248009.396866106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50507.705882352944,
            "unit": "ns",
            "range": "± 969.6073151478569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300613.9761904762,
            "unit": "ns",
            "range": "± 69506.12583871913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547794.3529411764,
            "unit": "ns",
            "range": "± 80664.32773551872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111772.1354166665,
            "unit": "ns",
            "range": "± 125244.54266363695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5316354.892857143,
            "unit": "ns",
            "range": "± 148939.88583997614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6168695.216666667,
            "unit": "ns",
            "range": "± 27043.162452732817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979448.025,
            "unit": "ns",
            "range": "± 12612.280578642392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342697.7765625,
            "unit": "ns",
            "range": "± 1154.9999270635049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556047.962439904,
            "unit": "ns",
            "range": "± 1946.1106974036225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814860.7250279018,
            "unit": "ns",
            "range": "± 1050.7107796357004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755264.1758510044,
            "unit": "ns",
            "range": "± 609.6069879779857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277400.86,
            "unit": "ns",
            "range": "± 10880.912816243583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268019.2,
            "unit": "ns",
            "range": "± 5546.031787636426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230831,
            "unit": "ns",
            "range": "± 2998.0822075248243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4235250.933333334,
            "unit": "ns",
            "range": "± 28540.75750187707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788304.6153846155,
            "unit": "ns",
            "range": "± 32601.28705419072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16182.175824175823,
            "unit": "ns",
            "range": "± 1348.7916863573905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83327.74137931035,
            "unit": "ns",
            "range": "± 3394.008449163696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69003,
            "unit": "ns",
            "range": "± 1735.5267337261794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85118.92857142857,
            "unit": "ns",
            "range": "± 11567.484969543662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4876.489361702128,
            "unit": "ns",
            "range": "± 486.71215897289966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15624.426966292134,
            "unit": "ns",
            "range": "± 1313.6465631595584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128231.5,
            "unit": "ns",
            "range": "± 31973.120462591458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3322767.5384615385,
            "unit": "ns",
            "range": "± 50560.66577161767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4144279.5,
            "unit": "ns",
            "range": "± 107694.17326129944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173950,
            "unit": "ns",
            "range": "± 56198.079710456805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6687588.866666666,
            "unit": "ns",
            "range": "± 100019.91822122708"
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
          "id": "0d32f8e6cfbfcba0f2d069c336caacc01267912e",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T19:07:18+09:00",
          "tree_id": "e041f08868a225c4c03c1ca219a4342deb07d9d0",
          "url": "https://github.com/moreal/libplanet/commit/0d32f8e6cfbfcba0f2d069c336caacc01267912e"
        },
        "date": 1682504456192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7641860,
            "unit": "ns",
            "range": "± 32410.77542759787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20714851.666666668,
            "unit": "ns",
            "range": "± 435862.5514519862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52354543.36363637,
            "unit": "ns",
            "range": "± 1248419.2119721242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103214788.07142857,
            "unit": "ns",
            "range": "± 1332422.5137252514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204515777.53333333,
            "unit": "ns",
            "range": "± 2819432.8302191477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49829.84090909091,
            "unit": "ns",
            "range": "± 2900.5850851971454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365839.7684210527,
            "unit": "ns",
            "range": "± 77119.34085840698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2660412.972222222,
            "unit": "ns",
            "range": "± 88574.51262895184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2295394.1333333333,
            "unit": "ns",
            "range": "± 114543.51136781374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5571090.107142857,
            "unit": "ns",
            "range": "± 149165.93562386706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5868796.9296875,
            "unit": "ns",
            "range": "± 27174.007667037862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888680.7228064905,
            "unit": "ns",
            "range": "± 4968.242382486588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378032.378125,
            "unit": "ns",
            "range": "± 10643.134915885328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637504.697135417,
            "unit": "ns",
            "range": "± 5630.31986732756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812399.3049879808,
            "unit": "ns",
            "range": "± 1155.4065606180523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737735.8770228794,
            "unit": "ns",
            "range": "± 2167.0758164538306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286758.0465116279,
            "unit": "ns",
            "range": "± 10402.645654680004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270350.08,
            "unit": "ns",
            "range": "± 10757.398611719686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230363.53846153847,
            "unit": "ns",
            "range": "± 1683.0223119626496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234102.461538462,
            "unit": "ns",
            "range": "± 20669.678031742475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882508.9285714286,
            "unit": "ns",
            "range": "± 44912.30719535448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19469.58947368421,
            "unit": "ns",
            "range": "± 2187.5449052885697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90223.96907216495,
            "unit": "ns",
            "range": "± 8910.271895932816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75934.11904761905,
            "unit": "ns",
            "range": "± 2197.2806941528047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99425.3163265306,
            "unit": "ns",
            "range": "± 14106.011175028892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6357.214285714285,
            "unit": "ns",
            "range": "± 802.2931470568803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18055.175824175825,
            "unit": "ns",
            "range": "± 1393.0381792120304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287010.4545454546,
            "unit": "ns",
            "range": "± 102820.36973743666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415850.52,
            "unit": "ns",
            "range": "± 90997.27234699584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4215374.416666667,
            "unit": "ns",
            "range": "± 108188.4221182079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4326486.158730159,
            "unit": "ns",
            "range": "± 198592.1506086318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6763325.071428572,
            "unit": "ns",
            "range": "± 112560.6527429438"
          }
        ]
      }
    ]
  }
}