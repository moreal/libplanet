window.BENCHMARK_DATA = {
  "lastUpdate": 1692383415240,
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
          "id": "779550635918e37d352669a232b9baa12f83dc0f",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T10:48:35+09:00",
          "tree_id": "bd06fb1d879a0b988d1dc1e6469cdf6bb2d1a17d",
          "url": "https://github.com/moreal/libplanet/commit/779550635918e37d352669a232b9baa12f83dc0f"
        },
        "date": 1691374064669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9506974.825581396,
            "unit": "ns",
            "range": "± 516325.9291578947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22664366.19402985,
            "unit": "ns",
            "range": "± 1068894.4525701967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56507388.75714286,
            "unit": "ns",
            "range": "± 1814060.5092984787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115555638.94444445,
            "unit": "ns",
            "range": "± 2421475.147310913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227897209.29411766,
            "unit": "ns",
            "range": "± 4443951.429176246"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75431.03488372093,
            "unit": "ns",
            "range": "± 5729.177722434469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376719.6914893617,
            "unit": "ns",
            "range": "± 52995.56736754593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371931.0652173913,
            "unit": "ns",
            "range": "± 54789.00766352629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 409550.82653061225,
            "unit": "ns",
            "range": "± 91357.65465215141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4796890.5625,
            "unit": "ns",
            "range": "± 402849.84509537107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4215481.732323232,
            "unit": "ns",
            "range": "± 375439.95102673303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26373.33695652174,
            "unit": "ns",
            "range": "± 5563.733674583654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129102.65979381443,
            "unit": "ns",
            "range": "± 23410.54288442433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134117.60416666666,
            "unit": "ns",
            "range": "± 23200.33667200324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132105.35263157895,
            "unit": "ns",
            "range": "± 24696.79518228881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8424.69587628866,
            "unit": "ns",
            "range": "± 1095.0750891222715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24728.28888888889,
            "unit": "ns",
            "range": "± 2374.836980777505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685187.0670103093,
            "unit": "ns",
            "range": "± 186954.03283962095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3185770.677777778,
            "unit": "ns",
            "range": "± 267778.628907101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282458.551020408,
            "unit": "ns",
            "range": "± 289533.72203808004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6007977.573170732,
            "unit": "ns",
            "range": "± 316202.6011850895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3597007.59375,
            "unit": "ns",
            "range": "± 284972.51967557106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882615.5306122447,
            "unit": "ns",
            "range": "± 336445.13122982124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4977191.106060606,
            "unit": "ns",
            "range": "± 451086.43493309506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4424394.551020408,
            "unit": "ns",
            "range": "± 551101.1223275851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9466497.838709677,
            "unit": "ns",
            "range": "± 2278526.191194122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7368546.950334822,
            "unit": "ns",
            "range": "± 77078.43545319111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221807.7333984375,
            "unit": "ns",
            "range": "± 57716.76954919545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1510844.5738790762,
            "unit": "ns",
            "range": "± 37385.224715470664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3478832.5295222355,
            "unit": "ns",
            "range": "± 141698.73057321116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972092.8624074835,
            "unit": "ns",
            "range": "± 21511.702953772525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860925.8378018466,
            "unit": "ns",
            "range": "± 27232.29769076067"
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
          "id": "2988fdbc9e1a7d2f94d5348b3cd66c07ed1c27df",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T11:00:48+09:00",
          "tree_id": "334ca507a1e73baa34b37b6338099eec139bde8a",
          "url": "https://github.com/moreal/libplanet/commit/2988fdbc9e1a7d2f94d5348b3cd66c07ed1c27df"
        },
        "date": 1691374718582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8618732.357142856,
            "unit": "ns",
            "range": "± 244404.72478561947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22730072.052083332,
            "unit": "ns",
            "range": "± 1808164.249122797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55346535.53571428,
            "unit": "ns",
            "range": "± 1576606.5473529953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109729289.55882353,
            "unit": "ns",
            "range": "± 3448706.0037017064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222520729.30357143,
            "unit": "ns",
            "range": "± 9205377.671990555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68691.4255319149,
            "unit": "ns",
            "range": "± 10445.03504653896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397375.9210526316,
            "unit": "ns",
            "range": "± 62911.639678300526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358841.20408163266,
            "unit": "ns",
            "range": "± 54002.00994005843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318033.2444444444,
            "unit": "ns",
            "range": "± 26332.879285129333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145461.3852459015,
            "unit": "ns",
            "range": "± 129393.54720104842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3758088.5,
            "unit": "ns",
            "range": "± 44756.26500193104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20070.92105263158,
            "unit": "ns",
            "range": "± 2686.237187048826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113601.39247311828,
            "unit": "ns",
            "range": "± 18003.75912707409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118982.79213483146,
            "unit": "ns",
            "range": "± 13897.393799331136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129373.47916666667,
            "unit": "ns",
            "range": "± 24567.50286861816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7995.258241758242,
            "unit": "ns",
            "range": "± 1016.221501889987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23984.956521739132,
            "unit": "ns",
            "range": "± 4162.534710710421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586128.5454545454,
            "unit": "ns",
            "range": "± 198318.26711808436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966247.0421686745,
            "unit": "ns",
            "range": "± 158228.21702677044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096063.7959183673,
            "unit": "ns",
            "range": "± 198748.6563165347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5577261.091836735,
            "unit": "ns",
            "range": "± 212499.07661710342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515311.912371134,
            "unit": "ns",
            "range": "± 321121.59318157664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511668.847368421,
            "unit": "ns",
            "range": "± 209024.806390257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4768551.24742268,
            "unit": "ns",
            "range": "± 320357.4387496407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4517087.260416667,
            "unit": "ns",
            "range": "± 496228.12528844975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7850273.138297873,
            "unit": "ns",
            "range": "± 658541.8354091693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7583978.2301432295,
            "unit": "ns",
            "range": "± 293737.01092707895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2119037.6059895833,
            "unit": "ns",
            "range": "± 23712.369563972174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407773.51328125,
            "unit": "ns",
            "range": "± 14318.177234843513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3381202.298828125,
            "unit": "ns",
            "range": "± 47592.591836373635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851087.0070612981,
            "unit": "ns",
            "range": "± 9003.448217895148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785631.1229166667,
            "unit": "ns",
            "range": "± 6384.755007316211"
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
          "id": "a69d96d1bd4bc22a0afb4c17884ce41c61993088",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T11:03:19+09:00",
          "tree_id": "371aaa53049f0ad524b0b3206b8b236c1111564b",
          "url": "https://github.com/moreal/libplanet/commit/a69d96d1bd4bc22a0afb4c17884ce41c61993088"
        },
        "date": 1691374853322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7992688.115384615,
            "unit": "ns",
            "range": "± 92905.52953721184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19386981.931818184,
            "unit": "ns",
            "range": "± 720979.8586649814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46945650.34848485,
            "unit": "ns",
            "range": "± 1482161.8376312293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94797731.96808511,
            "unit": "ns",
            "range": "± 3648462.220065997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194634444.2142857,
            "unit": "ns",
            "range": "± 5562901.363158546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72107.3085106383,
            "unit": "ns",
            "range": "± 14415.767809154451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323690.8229166667,
            "unit": "ns",
            "range": "± 30610.676809861376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335130.7886597938,
            "unit": "ns",
            "range": "± 27241.39042200565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310734.1989247312,
            "unit": "ns",
            "range": "± 18530.059808782702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189988.652173913,
            "unit": "ns",
            "range": "± 96764.50111745464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3778235.5,
            "unit": "ns",
            "range": "± 90741.93665254531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21640.18947368421,
            "unit": "ns",
            "range": "± 4003.7336385958783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87863.10309278351,
            "unit": "ns",
            "range": "± 13741.32213775035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99722.32,
            "unit": "ns",
            "range": "± 25475.176646875185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109454.77956989247,
            "unit": "ns",
            "range": "± 12784.658049503329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5623.556701030928,
            "unit": "ns",
            "range": "± 913.3427155358152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20761.95918367347,
            "unit": "ns",
            "range": "± 3610.688997185901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542049.0408163266,
            "unit": "ns",
            "range": "± 151356.38689393303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982834.0211267606,
            "unit": "ns",
            "range": "± 145108.84578115435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173359.98989899,
            "unit": "ns",
            "range": "± 204800.45187910998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6335875.968085106,
            "unit": "ns",
            "range": "± 427885.7337899218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315867.6716417912,
            "unit": "ns",
            "range": "± 156305.71118565754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511783,
            "unit": "ns",
            "range": "± 170349.65508992714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4622043.428571428,
            "unit": "ns",
            "range": "± 247958.54522969242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3800426.5625,
            "unit": "ns",
            "range": "± 198601.07159049966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7058199.074074074,
            "unit": "ns",
            "range": "± 276186.0246077559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6655825.369243421,
            "unit": "ns",
            "range": "± 145441.7907187374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995967.323016827,
            "unit": "ns",
            "range": "± 11485.101269731616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312751.664866728,
            "unit": "ns",
            "range": "± 25793.144591286455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542933.0494290865,
            "unit": "ns",
            "range": "± 32838.00581647712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858952.1069010417,
            "unit": "ns",
            "range": "± 6958.620057747153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745521.8859863281,
            "unit": "ns",
            "range": "± 5393.789639682368"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "d6c6b5b9afb0d13a1a68222d97177acf58349e8c",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-18T17:25:38+09:00",
          "tree_id": "031ce9e5ebea4204c0e6074a2d2f5ff7e57d4ea1",
          "url": "https://github.com/moreal/libplanet/commit/d6c6b5b9afb0d13a1a68222d97177acf58349e8c"
        },
        "date": 1692348711900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8528496.607594937,
            "unit": "ns",
            "range": "± 442194.84788493975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20838184.841463413,
            "unit": "ns",
            "range": "± 745512.9235224098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59852757.038461536,
            "unit": "ns",
            "range": "± 4591521.577668923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136182107.32978722,
            "unit": "ns",
            "range": "± 36313941.25776768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274170733.1894737,
            "unit": "ns",
            "range": "± 68060798.37014051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74657.6404494382,
            "unit": "ns",
            "range": "± 10295.807835371184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315086.9770114943,
            "unit": "ns",
            "range": "± 21997.78634316338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322353.7444444444,
            "unit": "ns",
            "range": "± 26781.877857611573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314816.9222222222,
            "unit": "ns",
            "range": "± 37373.77016607325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4346592.21875,
            "unit": "ns",
            "range": "± 296663.4770362647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725822.507936508,
            "unit": "ns",
            "range": "± 170359.9275624778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18286.478494623654,
            "unit": "ns",
            "range": "± 2119.123701061846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109618.37878787878,
            "unit": "ns",
            "range": "± 23462.827378152753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93398.22340425532,
            "unit": "ns",
            "range": "± 13678.180733392886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112749.94505494506,
            "unit": "ns",
            "range": "± 16542.73013230527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7210.46875,
            "unit": "ns",
            "range": "± 1697.3717482168533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17037.436781609194,
            "unit": "ns",
            "range": "± 1604.4005089284865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1807171.1847826086,
            "unit": "ns",
            "range": "± 310156.766423894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3230921.510752688,
            "unit": "ns",
            "range": "± 376991.89160273253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250232.208791209,
            "unit": "ns",
            "range": "± 243716.87615316245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7675625.731958763,
            "unit": "ns",
            "range": "± 2144158.3578900755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4271874.222891566,
            "unit": "ns",
            "range": "± 689984.3764021801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3973000.6395348837,
            "unit": "ns",
            "range": "± 651181.1751320629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562912.58045977,
            "unit": "ns",
            "range": "± 466312.5048451506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4523029.442528736,
            "unit": "ns",
            "range": "± 698362.0620852828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8014768.561797753,
            "unit": "ns",
            "range": "± 2051829.8642488718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5952579.444498698,
            "unit": "ns",
            "range": "± 232701.6385864484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1767948.5815972222,
            "unit": "ns",
            "range": "± 51809.38297354518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1128964.7014648437,
            "unit": "ns",
            "range": "± 71060.95648251465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2880489.4982489226,
            "unit": "ns",
            "range": "± 84289.26037306602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839212.7508616728,
            "unit": "ns",
            "range": "± 16962.41770658586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787467.5439453125,
            "unit": "ns",
            "range": "± 18420.75986009494"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "653855c8e0e9880389ab5bb01d1ce28420897860",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-19T03:10:19+09:00",
          "tree_id": "bce0cdd4497ae5138a6e386717ce6cc4f186842f",
          "url": "https://github.com/moreal/libplanet/commit/653855c8e0e9880389ab5bb01d1ce28420897860"
        },
        "date": 1692383402783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8553829.2,
            "unit": "ns",
            "range": "± 195283.8575104671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20354973.3125,
            "unit": "ns",
            "range": "± 376181.8131469088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50639258.92307692,
            "unit": "ns",
            "range": "± 742249.7065276686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101507104.78571428,
            "unit": "ns",
            "range": "± 1461716.6250137426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217633570.7857143,
            "unit": "ns",
            "range": "± 3468153.7516277675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70090.48979591837,
            "unit": "ns",
            "range": "± 13543.211619060587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303378.33157894737,
            "unit": "ns",
            "range": "± 27176.48455012619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319363.75263157894,
            "unit": "ns",
            "range": "± 38487.480659153174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297313.32352941175,
            "unit": "ns",
            "range": "± 30008.559649181556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3999493,
            "unit": "ns",
            "range": "± 80911.31389521493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616273.6025641025,
            "unit": "ns",
            "range": "± 125029.48615780173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19044.875,
            "unit": "ns",
            "range": "± 3199.9451450890447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92451.90721649484,
            "unit": "ns",
            "range": "± 14518.018982229803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94895.40909090909,
            "unit": "ns",
            "range": "± 14884.110228279336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104336.58163265306,
            "unit": "ns",
            "range": "± 22745.676009912448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7038.321052631579,
            "unit": "ns",
            "range": "± 1098.9487915096781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19992.673469387755,
            "unit": "ns",
            "range": "± 3610.545933604822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625182.8434343433,
            "unit": "ns",
            "range": "± 182449.75320843715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2907182.8958333335,
            "unit": "ns",
            "range": "± 114458.79832670433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2013350.8673469387,
            "unit": "ns",
            "range": "± 193125.61319880697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5451075.46969697,
            "unit": "ns",
            "range": "± 256553.03300968456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453851.09375,
            "unit": "ns",
            "range": "± 284297.6870525007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745935.06122449,
            "unit": "ns",
            "range": "± 383432.6207034111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4718271.268041237,
            "unit": "ns",
            "range": "± 420574.9624640484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4051678.587912088,
            "unit": "ns",
            "range": "± 334690.11733421736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7105043.891752577,
            "unit": "ns",
            "range": "± 478799.199498873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6314690.427701271,
            "unit": "ns",
            "range": "± 277636.6726999158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908180.0027734374,
            "unit": "ns",
            "range": "± 150606.80637426255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086163.50859375,
            "unit": "ns",
            "range": "± 19927.789291579465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2923000.879812339,
            "unit": "ns",
            "range": "± 236633.26653770288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905311.7450022978,
            "unit": "ns",
            "range": "± 18313.98149818531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825699.15,
            "unit": "ns",
            "range": "± 14416.353812682242"
          }
        ]
      }
    ]
  }
}