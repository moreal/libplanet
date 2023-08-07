window.BENCHMARK_DATA = {
  "lastUpdate": 1691374083162,
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
      }
    ]
  }
}