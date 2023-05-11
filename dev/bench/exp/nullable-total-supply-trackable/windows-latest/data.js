window.BENCHMARK_DATA = {
  "lastUpdate": 1683797232759,
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
          "id": "6a3446beb0b2fcedb89f6d11954a5419d96cf1b5",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T16:49:19+09:00",
          "tree_id": "a437fefa22201bdf1e35307d13475b2fd118e8d9",
          "url": "https://github.com/moreal/libplanet/commit/6a3446beb0b2fcedb89f6d11954a5419d96cf1b5"
        },
        "date": 1683792384009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344740.8163265307,
            "unit": "ns",
            "range": "± 125510.52762082008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455413.6363636362,
            "unit": "ns",
            "range": "± 91891.28711109918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117938.5416666665,
            "unit": "ns",
            "range": "± 141549.78917219545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5342147.368421053,
            "unit": "ns",
            "range": "± 319465.32587198017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49260.24096385542,
            "unit": "ns",
            "range": "± 2621.4378738765067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7047142.857142857,
            "unit": "ns",
            "range": "± 124054.22179456426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19617014.285714287,
            "unit": "ns",
            "range": "± 240665.91544533856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48622327.777777776,
            "unit": "ns",
            "range": "± 1009145.0771965671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97803127.27272727,
            "unit": "ns",
            "range": "± 2375527.454047851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196274691.3043478,
            "unit": "ns",
            "range": "± 4927278.23530423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824272.864583333,
            "unit": "ns",
            "range": "± 15017.773331625307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505678.7109375,
            "unit": "ns",
            "range": "± 5053.07227460307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179560.2473958333,
            "unit": "ns",
            "range": "± 5396.94586517647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649363.4635416665,
            "unit": "ns",
            "range": "± 9838.215689410836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839340.2473958334,
            "unit": "ns",
            "range": "± 3177.8485494454853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749507.67578125,
            "unit": "ns",
            "range": "± 2102.6547525229435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3172151.8518518517,
            "unit": "ns",
            "range": "± 86950.92059657903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423594.736842105,
            "unit": "ns",
            "range": "± 71513.62320630641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212680,
            "unit": "ns",
            "range": "± 111220.69651523198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4396166.666666667,
            "unit": "ns",
            "range": "± 62848.50954092031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6764890.322580645,
            "unit": "ns",
            "range": "± 204884.4932392212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260637.5,
            "unit": "ns",
            "range": "± 9875.493523891631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256162.5,
            "unit": "ns",
            "range": "± 9919.712268476425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233020.202020202,
            "unit": "ns",
            "range": "± 16458.370364674996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3970250,
            "unit": "ns",
            "range": "± 105170.78681839364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3637992.3076923075,
            "unit": "ns",
            "range": "± 45830.71134691346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19389.473684210527,
            "unit": "ns",
            "range": "± 2140.7134267257593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91165.30612244898,
            "unit": "ns",
            "range": "± 9518.859219105932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73410,
            "unit": "ns",
            "range": "± 3536.4007740614766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94224.48979591837,
            "unit": "ns",
            "range": "± 15029.90874734451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5716.494845360825,
            "unit": "ns",
            "range": "± 821.2896885857754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18977.319587628866,
            "unit": "ns",
            "range": "± 2021.8342102860863"
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
          "id": "5d48171ccc1c143e964653be710b13f7b90fe711",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T18:09:34+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/moreal/libplanet/commit/5d48171ccc1c143e964653be710b13f7b90fe711"
        },
        "date": 1683797217642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329278,
            "unit": "ns",
            "range": "± 137043.308851655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2396685.185185185,
            "unit": "ns",
            "range": "± 99919.95363725268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2065155.294117647,
            "unit": "ns",
            "range": "± 106513.82148842106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4908538.888888889,
            "unit": "ns",
            "range": "± 158672.50419433604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42505.555555555555,
            "unit": "ns",
            "range": "± 2060.21254810007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6857800,
            "unit": "ns",
            "range": "± 36696.67769493791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17275585.714285713,
            "unit": "ns",
            "range": "± 90298.71672265472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44304664.28571428,
            "unit": "ns",
            "range": "± 256644.38613393813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88779050,
            "unit": "ns",
            "range": "± 439119.05317025684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176984842.85714287,
            "unit": "ns",
            "range": "± 672737.3252549681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4747428.846153846,
            "unit": "ns",
            "range": "± 4763.301137445183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498212.8487723214,
            "unit": "ns",
            "range": "± 1145.1297128326337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146106.640625,
            "unit": "ns",
            "range": "± 741.3380558957377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574779.3805803573,
            "unit": "ns",
            "range": "± 1981.6022230231354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812773.3537946428,
            "unit": "ns",
            "range": "± 2202.757215289003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720634.5833333334,
            "unit": "ns",
            "range": "± 618.9986934576178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957278.5714285714,
            "unit": "ns",
            "range": "± 28669.044645385744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3125438.888888889,
            "unit": "ns",
            "range": "± 95317.73715249967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3977400,
            "unit": "ns",
            "range": "± 72158.71395749788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853472.4137931033,
            "unit": "ns",
            "range": "± 87199.71287858908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6337943.902439024,
            "unit": "ns",
            "range": "± 227933.938948087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252640.54054054053,
            "unit": "ns",
            "range": "± 7520.027314498985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237285.10638297873,
            "unit": "ns",
            "range": "± 9220.156999592376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211941.66666666666,
            "unit": "ns",
            "range": "± 9492.053619786602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3808040,
            "unit": "ns",
            "range": "± 33296.99257118748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500683.3333333335,
            "unit": "ns",
            "range": "± 30378.556033272333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16259.139784946237,
            "unit": "ns",
            "range": "± 1409.5355817909442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78636.84210526316,
            "unit": "ns",
            "range": "± 5116.9108997182175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64305.26315789474,
            "unit": "ns",
            "range": "± 1130.129630819465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75876.31578947368,
            "unit": "ns",
            "range": "± 3572.1279716177633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4118.367346938776,
            "unit": "ns",
            "range": "± 693.4668528748779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15892.783505154639,
            "unit": "ns",
            "range": "± 1784.7880022732163"
          }
        ]
      }
    ]
  }
}