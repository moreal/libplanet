window.BENCHMARK_DATA = {
  "lastUpdate": 1683674300309,
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
          "id": "e033d84392389c1bf12905d0a42261511d4266c1",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T13:57:25+09:00",
          "tree_id": "b8d0cd7efb82b11649414f5b3d9d199549cabc34",
          "url": "https://github.com/moreal/libplanet/commit/e033d84392389c1bf12905d0a42261511d4266c1"
        },
        "date": 1683004499546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315247.9591836734,
            "unit": "ns",
            "range": "± 115954.14329081817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2393613.6363636362,
            "unit": "ns",
            "range": "± 73672.8953643308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093011.111111111,
            "unit": "ns",
            "range": "± 136669.46487926808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4847393.243243244,
            "unit": "ns",
            "range": "± 160402.7371277625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47943.181818181816,
            "unit": "ns",
            "range": "± 2510.337040820654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6742715.384615385,
            "unit": "ns",
            "range": "± 46495.946887046804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18558138.46153846,
            "unit": "ns",
            "range": "± 266148.40953392134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48366603.333333336,
            "unit": "ns",
            "range": "± 901986.8282746441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97887333.33333333,
            "unit": "ns",
            "range": "± 1718938.135954315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189880325.7142857,
            "unit": "ns",
            "range": "± 6073351.30541822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4711675.416666667,
            "unit": "ns",
            "range": "± 15272.612589235487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510244.0234375,
            "unit": "ns",
            "range": "± 9060.923745104463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165825.9505208333,
            "unit": "ns",
            "range": "± 6934.125578457079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664877.9296875,
            "unit": "ns",
            "range": "± 8954.29446996067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825053.8671875,
            "unit": "ns",
            "range": "± 3314.85809804961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762188.57421875,
            "unit": "ns",
            "range": "± 1680.674833766969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2980615,
            "unit": "ns",
            "range": "± 94953.38816007001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176750,
            "unit": "ns",
            "range": "± 121080.89811728723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3774585.714285714,
            "unit": "ns",
            "range": "± 54728.91033424315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974811.111111111,
            "unit": "ns",
            "range": "± 103776.11009110442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6397329.591836735,
            "unit": "ns",
            "range": "± 253635.76819558252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259782.43243243243,
            "unit": "ns",
            "range": "± 8079.77770782141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250550,
            "unit": "ns",
            "range": "± 10977.093374266633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207193.33333333334,
            "unit": "ns",
            "range": "± 3699.703977862219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3827800,
            "unit": "ns",
            "range": "± 74114.90178544843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3434950,
            "unit": "ns",
            "range": "± 60897.42636976983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19690.721649484534,
            "unit": "ns",
            "range": "± 1425.2253092513424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84673.19587628866,
            "unit": "ns",
            "range": "± 7061.877044264943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75920.83333333333,
            "unit": "ns",
            "range": "± 5343.858583589532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95463.1313131313,
            "unit": "ns",
            "range": "± 13594.271350985075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6512.244897959184,
            "unit": "ns",
            "range": "± 1180.8842839093127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18932.105263157893,
            "unit": "ns",
            "range": "± 1718.545831811254"
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
          "id": "1447665a8b5020bce565ac55b4d776b3b8680177",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T14:43:06+09:00",
          "tree_id": "f5172138255624b1864b827c3d26c9d9ba86f7be",
          "url": "https://github.com/moreal/libplanet/commit/1447665a8b5020bce565ac55b4d776b3b8680177"
        },
        "date": 1683007286479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606747.311827957,
            "unit": "ns",
            "range": "± 142641.6645878435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914296.8085106383,
            "unit": "ns",
            "range": "± 218979.03442244558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2517507.777777778,
            "unit": "ns",
            "range": "± 140210.1706770888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6289518.292682927,
            "unit": "ns",
            "range": "± 330085.34179984895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57189.36170212766,
            "unit": "ns",
            "range": "± 5281.260603936294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8496380,
            "unit": "ns",
            "range": "± 192875.7674883253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23558615.384615384,
            "unit": "ns",
            "range": "± 341278.32689793885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59012769.23076923,
            "unit": "ns",
            "range": "± 490850.5125198767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114835732,
            "unit": "ns",
            "range": "± 2943325.3585754554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234301767.7419355,
            "unit": "ns",
            "range": "± 6998364.949633455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5679951.215277778,
            "unit": "ns",
            "range": "± 112340.23703052045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840173.1026785714,
            "unit": "ns",
            "range": "± 28732.524171089502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378529.8958333333,
            "unit": "ns",
            "range": "± 16303.364597280963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126002.6204427085,
            "unit": "ns",
            "range": "± 78035.47805585069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995648.1670673077,
            "unit": "ns",
            "range": "± 12750.699108015178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913854.8270089285,
            "unit": "ns",
            "range": "± 8506.454433382667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3597405.6603773586,
            "unit": "ns",
            "range": "± 148288.24894453466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772216.129032258,
            "unit": "ns",
            "range": "± 163377.32069022767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4429374.468085106,
            "unit": "ns",
            "range": "± 171077.755609503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4969629.545454546,
            "unit": "ns",
            "range": "± 186108.71988811606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7829364.583333333,
            "unit": "ns",
            "range": "± 294864.36152525287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310474.7368421053,
            "unit": "ns",
            "range": "± 20842.882189417236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305107.6923076923,
            "unit": "ns",
            "range": "± 8168.668095934518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250432,
            "unit": "ns",
            "range": "± 12671.986128166036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4611344.117647059,
            "unit": "ns",
            "range": "± 135824.43255725713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136557.6923076925,
            "unit": "ns",
            "range": "± 112845.95933599725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23370.224719101123,
            "unit": "ns",
            "range": "± 2610.5633219706406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102416.66666666667,
            "unit": "ns",
            "range": "± 9066.371254217325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104671.875,
            "unit": "ns",
            "range": "± 11231.71921156189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116140.8163265306,
            "unit": "ns",
            "range": "± 16841.989051267956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7740.404040404041,
            "unit": "ns",
            "range": "± 1579.713174166934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23362.76595744681,
            "unit": "ns",
            "range": "± 3445.020843376968"
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
          "id": "2fa17749aa0d86ad51c61a50ecc4eae0604f3440",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T18:54:49+09:00",
          "tree_id": "f922c18117eeaff4f16a0e5f5e7074e9f1b46a10",
          "url": "https://github.com/moreal/libplanet/commit/2fa17749aa0d86ad51c61a50ecc4eae0604f3440"
        },
        "date": 1683022537052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1594393.8144329898,
            "unit": "ns",
            "range": "± 115553.03960234106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2936744.776119403,
            "unit": "ns",
            "range": "± 139505.43954158755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558751.5463917525,
            "unit": "ns",
            "range": "± 201007.01537995823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6353385.263157895,
            "unit": "ns",
            "range": "± 480662.7078489503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56793.54838709677,
            "unit": "ns",
            "range": "± 4572.574349874831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8551854.166666666,
            "unit": "ns",
            "range": "± 217426.3353097593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24111473.529411763,
            "unit": "ns",
            "range": "± 482858.34300730965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57258259.52380952,
            "unit": "ns",
            "range": "± 1316765.0067133321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119030577.5,
            "unit": "ns",
            "range": "± 4040744.0765974885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245145330.4347826,
            "unit": "ns",
            "range": "± 9402561.37391106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5692900.493421053,
            "unit": "ns",
            "range": "± 125114.366590152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879992.6302083333,
            "unit": "ns",
            "range": "± 25220.918841361738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1446951.5885416667,
            "unit": "ns",
            "range": "± 20183.8379331399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190295.2864583335,
            "unit": "ns",
            "range": "± 54954.5367329821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030798.1043198529,
            "unit": "ns",
            "range": "± 15740.120573182554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925048.4375,
            "unit": "ns",
            "range": "± 10641.77915734364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3761175,
            "unit": "ns",
            "range": "± 71443.31552590021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4057595.9183673467,
            "unit": "ns",
            "range": "± 149685.31708106797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4811246.808510638,
            "unit": "ns",
            "range": "± 187334.5517598695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5016859.677419355,
            "unit": "ns",
            "range": "± 223612.18731242788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7589168.181818182,
            "unit": "ns",
            "range": "± 173129.9275011019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303704.93827160494,
            "unit": "ns",
            "range": "± 15952.115073200861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290916.2162162162,
            "unit": "ns",
            "range": "± 14468.994029530275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252619.35483870967,
            "unit": "ns",
            "range": "± 15018.273348219871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4629516.666666667,
            "unit": "ns",
            "range": "± 78542.78901262899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4153405.882352941,
            "unit": "ns",
            "range": "± 134007.3718939564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23981.720430107525,
            "unit": "ns",
            "range": "± 2179.34704204878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105380.61224489796,
            "unit": "ns",
            "range": "± 8231.02514144039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95530.92783505155,
            "unit": "ns",
            "range": "± 8240.327168170448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114700,
            "unit": "ns",
            "range": "± 18850.007054572867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7069.072164948454,
            "unit": "ns",
            "range": "± 1217.182609617242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23367.01030927835,
            "unit": "ns",
            "range": "± 2223.9567614897433"
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
          "id": "02b13e9b49919bfc718ca5202cf29d25bc336381",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-09T22:47:59+09:00",
          "tree_id": "4d7accbfaf9751cd83e885833854ee4761b91c67",
          "url": "https://github.com/moreal/libplanet/commit/02b13e9b49919bfc718ca5202cf29d25bc336381"
        },
        "date": 1683640985547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357826,
            "unit": "ns",
            "range": "± 138180.83717222212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2422192.1052631577,
            "unit": "ns",
            "range": "± 82650.12346610012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130274,
            "unit": "ns",
            "range": "± 137113.26853401464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4887136,
            "unit": "ns",
            "range": "± 119336.87220078573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42611.76470588235,
            "unit": "ns",
            "range": "± 2316.2681276604585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6880464.285714285,
            "unit": "ns",
            "range": "± 47680.27502409803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17548280,
            "unit": "ns",
            "range": "± 142659.83617382596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44949893.333333336,
            "unit": "ns",
            "range": "± 280851.6549626121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89867020,
            "unit": "ns",
            "range": "± 466946.85105939594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180021530,
            "unit": "ns",
            "range": "± 1123090.7514533275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4793454.537259615,
            "unit": "ns",
            "range": "± 4414.156057551735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502379.9107142857,
            "unit": "ns",
            "range": "± 2481.904724529696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152715.7645089286,
            "unit": "ns",
            "range": "± 1255.1607110742473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517973.7444196427,
            "unit": "ns",
            "range": "± 4716.6848974369705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813966.7057291666,
            "unit": "ns",
            "range": "± 1571.8125449675304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728959.8353794643,
            "unit": "ns",
            "range": "± 1601.248772125869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2967597.0588235296,
            "unit": "ns",
            "range": "± 58960.856905737244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3203513.3333333335,
            "unit": "ns",
            "range": "± 38333.925047192984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3864985.714285714,
            "unit": "ns",
            "range": "± 40060.355563974816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035092.8571428573,
            "unit": "ns",
            "range": "± 71148.22787441955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6239315,
            "unit": "ns",
            "range": "± 101282.25944827341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257231.57894736843,
            "unit": "ns",
            "range": "± 8788.047941877308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246977.58620689655,
            "unit": "ns",
            "range": "± 10308.420048482056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227571.21212121213,
            "unit": "ns",
            "range": "± 10675.705923717504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3845263.3333333335,
            "unit": "ns",
            "range": "± 29779.951709321555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549078.5714285714,
            "unit": "ns",
            "range": "± 25944.798754617124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16734.40860215054,
            "unit": "ns",
            "range": "± 2005.508426464684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77204.16666666667,
            "unit": "ns",
            "range": "± 3772.8995648917776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71854.08163265306,
            "unit": "ns",
            "range": "± 6029.620500057255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85575.51020408163,
            "unit": "ns",
            "range": "± 13853.484516256654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4704.081632653061,
            "unit": "ns",
            "range": "± 834.429043309829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15121.739130434782,
            "unit": "ns",
            "range": "± 1336.9907235787011"
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
          "id": "11d1d41bba7727ae4b91c9577e4db8dd66f6ddc8",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-10T08:01:58+09:00",
          "tree_id": "5453471ad7ff26e124e605e0ab09467dfa7d75d1",
          "url": "https://github.com/moreal/libplanet/commit/11d1d41bba7727ae4b91c9577e4db8dd66f6ddc8"
        },
        "date": 1683674281664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362696,
            "unit": "ns",
            "range": "± 113921.77266382703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2398728.5714285714,
            "unit": "ns",
            "range": "± 56540.544239131115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091410.2272727273,
            "unit": "ns",
            "range": "± 104251.56360885088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955264.285714285,
            "unit": "ns",
            "range": "± 170708.1203455664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41383.333333333336,
            "unit": "ns",
            "range": "± 2056.730620443626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6898913.333333333,
            "unit": "ns",
            "range": "± 69704.2514246202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17517866.666666668,
            "unit": "ns",
            "range": "± 77353.75756564001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44540560,
            "unit": "ns",
            "range": "± 355013.8725659685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89985186.66666667,
            "unit": "ns",
            "range": "± 428569.5357259787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180196671.42857143,
            "unit": "ns",
            "range": "± 778520.4759211998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775989.543269231,
            "unit": "ns",
            "range": "± 4922.004447479921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502980.8314732143,
            "unit": "ns",
            "range": "± 1139.0598693917564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173806.11328125,
            "unit": "ns",
            "range": "± 1019.4945579570115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580834.540264423,
            "unit": "ns",
            "range": "± 13135.324761044285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804906.826171875,
            "unit": "ns",
            "range": "± 3905.568246136279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749582.3372395834,
            "unit": "ns",
            "range": "± 986.8286125959953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2985588.888888889,
            "unit": "ns",
            "range": "± 106012.2210412602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3128906.6666666665,
            "unit": "ns",
            "range": "± 48836.863516151796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4037126.6666666665,
            "unit": "ns",
            "range": "± 75461.00664455467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3870221.4285714286,
            "unit": "ns",
            "range": "± 63402.81695478678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6321562.857142857,
            "unit": "ns",
            "range": "± 200565.56223914042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254222,
            "unit": "ns",
            "range": "± 5749.530415607869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238736.36363636365,
            "unit": "ns",
            "range": "± 7340.999580536538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219361.90476190476,
            "unit": "ns",
            "range": "± 9972.663095512144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3837300,
            "unit": "ns",
            "range": "± 37925.472028327196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505066.6666666665,
            "unit": "ns",
            "range": "± 38498.36112776503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17409.677419354837,
            "unit": "ns",
            "range": "± 1568.7896550421221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78252.74725274726,
            "unit": "ns",
            "range": "± 4590.433062585239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66050,
            "unit": "ns",
            "range": "± 1283.744522870497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81889.58333333333,
            "unit": "ns",
            "range": "± 12626.934279477564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4272.340425531915,
            "unit": "ns",
            "range": "± 585.1944360856684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15348.888888888889,
            "unit": "ns",
            "range": "± 1210.8353922256185"
          }
        ]
      }
    ]
  }
}