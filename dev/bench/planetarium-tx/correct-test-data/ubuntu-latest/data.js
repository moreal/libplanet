window.BENCHMARK_DATA = {
  "lastUpdate": 1682559581198,
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "7506be48a99cc8ae184f06987eef85176d7910d3",
          "message": "test(@planetarium/tx): correct tx test data\n\n[skip changelog]",
          "timestamp": "2023-04-26T19:08:19+09:00",
          "tree_id": "e041f08868a225c4c03c1ca219a4342deb07d9d0",
          "url": "https://github.com/moreal/libplanet/commit/7506be48a99cc8ae184f06987eef85176d7910d3"
        },
        "date": 1682504512051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7652972.666666667,
            "unit": "ns",
            "range": "± 128549.71282718753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19664121.466666665,
            "unit": "ns",
            "range": "± 81888.30588400508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50107275.5,
            "unit": "ns",
            "range": "± 202629.44585574846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100934977,
            "unit": "ns",
            "range": "± 405221.41756275843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201512665.64285713,
            "unit": "ns",
            "range": "± 368099.609386165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47364.12903225807,
            "unit": "ns",
            "range": "± 4135.694792649998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445657.5454545454,
            "unit": "ns",
            "range": "± 110759.99220020395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693582.96875,
            "unit": "ns",
            "range": "± 82614.14149252765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2272156.6052631577,
            "unit": "ns",
            "range": "± 114624.83836668548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5537777.684210527,
            "unit": "ns",
            "range": "± 106129.26713319033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6175567.915178572,
            "unit": "ns",
            "range": "± 24598.515111384666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907828.2540364584,
            "unit": "ns",
            "range": "± 7482.391174876099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340309.9518229167,
            "unit": "ns",
            "range": "± 1091.6335661203411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617244.4483173075,
            "unit": "ns",
            "range": "± 2137.370091016211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809854.3973307292,
            "unit": "ns",
            "range": "± 330.3818432617623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735083.8116536458,
            "unit": "ns",
            "range": "± 879.5600373664475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295139.93548387097,
            "unit": "ns",
            "range": "± 8953.726758303805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269506.1621621622,
            "unit": "ns",
            "range": "± 8969.722739780116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251435.75,
            "unit": "ns",
            "range": "± 9486.161711739716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4330708.866666666,
            "unit": "ns",
            "range": "± 34100.49074189542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3976157.214285714,
            "unit": "ns",
            "range": "± 35518.66892251837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22039.852631578946,
            "unit": "ns",
            "range": "± 2091.508495455409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94797.41414141415,
            "unit": "ns",
            "range": "± 7183.101480402261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81863.95833333333,
            "unit": "ns",
            "range": "± 7208.746117579623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93930.9693877551,
            "unit": "ns",
            "range": "± 12140.97198545613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6329.561224489796,
            "unit": "ns",
            "range": "± 888.4572759927538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20885.291666666668,
            "unit": "ns",
            "range": "± 2217.78895069494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254800.238095238,
            "unit": "ns",
            "range": "± 54336.1720559194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487452.388888889,
            "unit": "ns",
            "range": "± 71257.01683107004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269037.2,
            "unit": "ns",
            "range": "± 44286.20897106199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283410.719298245,
            "unit": "ns",
            "range": "± 185334.60029823225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7005601.70967742,
            "unit": "ns",
            "range": "± 206823.9755589591"
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
          "id": "69471ce948a7ecb540afc66f1854d7fc6d02d4ea",
          "message": "test(@planetarium/tx): correct tx test data\n\n[skip changelog]",
          "timestamp": "2023-04-27T10:20:04+09:00",
          "tree_id": "009923f197c382cc054adbcbb4aecaa312b017a4",
          "url": "https://github.com/moreal/libplanet/commit/69471ce948a7ecb540afc66f1854d7fc6d02d4ea"
        },
        "date": 1682559576285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417698.59420289856,
            "unit": "ns",
            "range": "± 19952.051500239297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 399155.97872340423,
            "unit": "ns",
            "range": "± 34335.851238597716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 397391.1052631579,
            "unit": "ns",
            "range": "± 37102.58583764568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6188016.75,
            "unit": "ns",
            "range": "± 255001.8473977583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5508482.712328767,
            "unit": "ns",
            "range": "± 272066.6237069863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30922.5,
            "unit": "ns",
            "range": "± 3547.4675932700507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 152426.47191011236,
            "unit": "ns",
            "range": "± 14539.614723926654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136487.81914893616,
            "unit": "ns",
            "range": "± 10411.2174811623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147568.3111111111,
            "unit": "ns",
            "range": "± 21879.585240222103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10113.341463414634,
            "unit": "ns",
            "range": "± 992.1258534700916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32900.967391304344,
            "unit": "ns",
            "range": "± 5399.462045754222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4609737.869565218,
            "unit": "ns",
            "range": "± 115690.25713842518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5022881.970588235,
            "unit": "ns",
            "range": "± 239984.98244053562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5990371.695652174,
            "unit": "ns",
            "range": "± 210814.01666544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5962365.9,
            "unit": "ns",
            "range": "± 263314.8298681605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9781786.833333334,
            "unit": "ns",
            "range": "± 292579.31873962603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8220364.693576389,
            "unit": "ns",
            "range": "± 172686.10028970934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2441639.43984375,
            "unit": "ns",
            "range": "± 33376.989885807976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1792892.719029018,
            "unit": "ns",
            "range": "± 19968.806407645694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3513562.771935096,
            "unit": "ns",
            "range": "± 31430.95906586629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1126767.4733072917,
            "unit": "ns",
            "range": "± 15762.959758987776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1042649.1869791667,
            "unit": "ns",
            "range": "± 18659.137460617687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90374.54545454546,
            "unit": "ns",
            "range": "± 9755.790047258395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11708757.940298507,
            "unit": "ns",
            "range": "± 554220.5555577069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28665261.843137253,
            "unit": "ns",
            "range": "± 1072131.8895261977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74164066.85714285,
            "unit": "ns",
            "range": "± 826353.9840725604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149101081.60416666,
            "unit": "ns",
            "range": "± 5537266.084620597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 305484808.9354839,
            "unit": "ns",
            "range": "± 9272347.296798594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1976335.6770833333,
            "unit": "ns",
            "range": "± 204604.5144140787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3917683.5428571426,
            "unit": "ns",
            "range": "± 188225.8996750544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3111760.3333333335,
            "unit": "ns",
            "range": "± 217367.76026800717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8352999.43298969,
            "unit": "ns",
            "range": "± 526973.63892976"
          }
        ]
      }
    ]
  }
}