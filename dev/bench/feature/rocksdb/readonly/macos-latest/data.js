window.BENCHMARK_DATA = {
  "lastUpdate": 1691374731770,
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
      }
    ]
  }
}