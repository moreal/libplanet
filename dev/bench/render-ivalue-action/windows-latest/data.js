window.BENCHMARK_DATA = {
  "lastUpdate": 1682993416786,
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
          "id": "53ef6ab431fdd08fa81d755a608a0d37c17c772b",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:09:22+09:00",
          "tree_id": "9eddb5b488305f39700f6a54e6e5de70e644d6ce",
          "url": "https://github.com/moreal/libplanet/commit/53ef6ab431fdd08fa81d755a608a0d37c17c772b"
        },
        "date": 1682576876590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591001.0638297873,
            "unit": "ns",
            "range": "± 177719.86866776095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974965.3061224488,
            "unit": "ns",
            "range": "± 261861.5752810408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557037.5,
            "unit": "ns",
            "range": "± 287691.6083696495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6525593.87755102,
            "unit": "ns",
            "range": "± 457733.2444283599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55404.34782608696,
            "unit": "ns",
            "range": "± 9200.178128274107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7862538,
            "unit": "ns",
            "range": "± 313820.6667405278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21240998.979591835,
            "unit": "ns",
            "range": "± 1442275.3243524835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53432291.93548387,
            "unit": "ns",
            "range": "± 3008574.538184031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106372772.3076923,
            "unit": "ns",
            "range": "± 4939897.669692527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216463772.88135594,
            "unit": "ns",
            "range": "± 9583027.934732977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877917.203125,
            "unit": "ns",
            "range": "± 154191.95267807163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1810804.799107143,
            "unit": "ns",
            "range": "± 14422.637253200157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321168.8720703125,
            "unit": "ns",
            "range": "± 24699.33140320843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2977139.4990808824,
            "unit": "ns",
            "range": "± 60344.923834484754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955071.71875,
            "unit": "ns",
            "range": "± 14151.431631977373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888589.6484375,
            "unit": "ns",
            "range": "± 5993.000089341675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469652.0408163266,
            "unit": "ns",
            "range": "± 283854.92346110835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550856.25,
            "unit": "ns",
            "range": "± 293208.33219025255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4640858.333333333,
            "unit": "ns",
            "range": "± 361085.03406339255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4524708.080808081,
            "unit": "ns",
            "range": "± 309817.4820421407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8146609.090909091,
            "unit": "ns",
            "range": "± 514540.2362424443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301653.3333333333,
            "unit": "ns",
            "range": "± 24074.034686097297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286191.75257731957,
            "unit": "ns",
            "range": "± 21601.83571531544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239233.69565217392,
            "unit": "ns",
            "range": "± 18436.456222935052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4558841.666666667,
            "unit": "ns",
            "range": "± 277710.18314883846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126750,
            "unit": "ns",
            "range": "± 296191.0943655182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22251.020408163266,
            "unit": "ns",
            "range": "± 5832.8830539647115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90431.9587628866,
            "unit": "ns",
            "range": "± 12723.58821893213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80548.42105263157,
            "unit": "ns",
            "range": "± 10737.514898886398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108745.26315789473,
            "unit": "ns",
            "range": "± 16210.830162507742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10471.42857142857,
            "unit": "ns",
            "range": "± 5704.275842435912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22111,
            "unit": "ns",
            "range": "± 7276.222449273601"
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
          "id": "98cac93affebc1336582fde9fbccd76913ed7362",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:42:38+09:00",
          "tree_id": "fc7da80e9609ddef134fa5993eb311980d494355",
          "url": "https://github.com/moreal/libplanet/commit/98cac93affebc1336582fde9fbccd76913ed7362"
        },
        "date": 1682578784058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362503.0303030303,
            "unit": "ns",
            "range": "± 117668.36695799044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2567639.361702128,
            "unit": "ns",
            "range": "± 146333.82899816983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170057.7319587627,
            "unit": "ns",
            "range": "± 141725.31298478667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5566450.5050505055,
            "unit": "ns",
            "range": "± 349733.3950701496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49432.291666666664,
            "unit": "ns",
            "range": "± 3520.8699520570544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6849255.263157895,
            "unit": "ns",
            "range": "± 145753.6524172978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19735376.923076924,
            "unit": "ns",
            "range": "± 255452.9348492143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49516086.666666664,
            "unit": "ns",
            "range": "± 690694.1858601043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98309816.66666667,
            "unit": "ns",
            "range": "± 2016682.2722860787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202404253.33333334,
            "unit": "ns",
            "range": "± 1318496.9607563794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4743234.401041667,
            "unit": "ns",
            "range": "± 21086.629291391782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504507.8255208333,
            "unit": "ns",
            "range": "± 8708.898861916516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165619.6875,
            "unit": "ns",
            "range": "± 8617.859215065671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605169.6223958335,
            "unit": "ns",
            "range": "± 7081.410741992557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824585.64453125,
            "unit": "ns",
            "range": "± 2429.148839984221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769950.8268229166,
            "unit": "ns",
            "range": "± 2604.191316231462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3186229.090909091,
            "unit": "ns",
            "range": "± 133595.5999396399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3280184.210526316,
            "unit": "ns",
            "range": "± 140684.89586594584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3833233.3333333335,
            "unit": "ns",
            "range": "± 36064.672548916984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4075076.6666666665,
            "unit": "ns",
            "range": "± 226833.1411937423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6547612.903225807,
            "unit": "ns",
            "range": "± 193523.4968368363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263395.74468085106,
            "unit": "ns",
            "range": "± 9799.311365485984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252507.27272727274,
            "unit": "ns",
            "range": "± 9310.982256045309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212300,
            "unit": "ns",
            "range": "± 7296.426374454678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4010935.714285714,
            "unit": "ns",
            "range": "± 66113.7435629846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3456272.222222222,
            "unit": "ns",
            "range": "± 73720.30453446049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21456.25,
            "unit": "ns",
            "range": "± 1809.7288252809126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88948.9898989899,
            "unit": "ns",
            "range": "± 8038.802517045695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80725.25252525252,
            "unit": "ns",
            "range": "± 6889.15657043058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100826.80412371134,
            "unit": "ns",
            "range": "± 13742.19866160371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7128.125,
            "unit": "ns",
            "range": "± 1096.041021610337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20339.79591836735,
            "unit": "ns",
            "range": "± 2028.79984816164"
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
          "id": "1e60db677f4e3d2555aefeb8b6ac6cf38727040e",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T10:53:15+09:00",
          "tree_id": "39ffbf1e20076010590fa93da018b9425e423693",
          "url": "https://github.com/moreal/libplanet/commit/1e60db677f4e3d2555aefeb8b6ac6cf38727040e"
        },
        "date": 1682993392098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359554.2105263157,
            "unit": "ns",
            "range": "± 115663.35773488681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620367.3469387754,
            "unit": "ns",
            "range": "± 163129.20170392178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165146.4646464647,
            "unit": "ns",
            "range": "± 133737.2899268023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5428797,
            "unit": "ns",
            "range": "± 346711.26270699484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47615.78947368421,
            "unit": "ns",
            "range": "± 3261.7811277613237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6846753.846153846,
            "unit": "ns",
            "range": "± 111971.42206373178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19457803.333333332,
            "unit": "ns",
            "range": "± 299109.2272223039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48876086.666666664,
            "unit": "ns",
            "range": "± 875791.5227028036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96278920,
            "unit": "ns",
            "range": "± 1686553.5128522562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193371250,
            "unit": "ns",
            "range": "± 2119861.487764635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4803525.948660715,
            "unit": "ns",
            "range": "± 15491.387877545854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540490.5729166667,
            "unit": "ns",
            "range": "± 6823.913972270934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166920.5859375,
            "unit": "ns",
            "range": "± 5956.621116132433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622368.387276786,
            "unit": "ns",
            "range": "± 7960.663876026382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837183.6979166666,
            "unit": "ns",
            "range": "± 3151.797469560373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763130.25390625,
            "unit": "ns",
            "range": "± 2222.973280799605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3102712.765957447,
            "unit": "ns",
            "range": "± 119900.4018142835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323603.0303030303,
            "unit": "ns",
            "range": "± 104955.69745387956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881780,
            "unit": "ns",
            "range": "± 72187.12983825935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179583.3333333335,
            "unit": "ns",
            "range": "± 149969.77405491183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6487911.764705882,
            "unit": "ns",
            "range": "± 206681.8338980427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265752.9411764706,
            "unit": "ns",
            "range": "± 5256.557529298383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256627.868852459,
            "unit": "ns",
            "range": "± 10868.396556799304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206211.62790697673,
            "unit": "ns",
            "range": "± 7484.148623601421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3896064.285714286,
            "unit": "ns",
            "range": "± 41350.48334091722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3526633.3333333335,
            "unit": "ns",
            "range": "± 27936.334546228285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21345.833333333332,
            "unit": "ns",
            "range": "± 1926.7598471973433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93604.04040404041,
            "unit": "ns",
            "range": "± 7743.75217799932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76316.66666666667,
            "unit": "ns",
            "range": "± 5971.329159393624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99205.15463917526,
            "unit": "ns",
            "range": "± 13195.093557313427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6948.9795918367345,
            "unit": "ns",
            "range": "± 973.0910360946026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20170.212765957447,
            "unit": "ns",
            "range": "± 1933.2311682628138"
          }
        ]
      }
    ]
  }
}