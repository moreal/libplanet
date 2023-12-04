window.BENCHMARK_DATA = {
  "lastUpdate": 1701675999347,
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
          "id": "0fb72889e2b83ce1316cc06674214ec0053ce91f",
          "message": "@planetarium/tx: Remove useless template variable",
          "timestamp": "2023-11-23T00:00:10+09:00",
          "tree_id": "c7720e957e7c8e0fc67a1641937f836af77cde6e",
          "url": "https://github.com/moreal/libplanet/commit/0fb72889e2b83ce1316cc06674214ec0053ce91f"
        },
        "date": 1700665868430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211660.6891891892,
            "unit": "ns",
            "range": "± 10500.355579009452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208365.25531914894,
            "unit": "ns",
            "range": "± 14721.09090009806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166625,
            "unit": "ns",
            "range": "± 3646.377423661664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131974,
            "unit": "ns",
            "range": "± 29224.266329541962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845592.923076923,
            "unit": "ns",
            "range": "± 25619.88575781691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23132.863157894735,
            "unit": "ns",
            "range": "± 2314.34204431763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96099.03157894737,
            "unit": "ns",
            "range": "± 9283.42435037874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91738.71428571429,
            "unit": "ns",
            "range": "± 3299.407446800107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92889.6559139785,
            "unit": "ns",
            "range": "± 9692.941534833955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.632653061224,
            "unit": "ns",
            "range": "± 874.0441540635591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23185.04,
            "unit": "ns",
            "range": "± 3210.8605581115416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698054.123372396,
            "unit": "ns",
            "range": "± 5777.00648978298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217521.6026141827,
            "unit": "ns",
            "range": "± 7308.314364913599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761305.5712139423,
            "unit": "ns",
            "range": "± 2996.5455595296994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965177.4094238281,
            "unit": "ns",
            "range": "± 11016.457221496943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620548.0103352865,
            "unit": "ns",
            "range": "± 941.1918236946364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570335.0550362723,
            "unit": "ns",
            "range": "± 912.954766900017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45478.555555555555,
            "unit": "ns",
            "range": "± 7725.863329635635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2462191.435897436,
            "unit": "ns",
            "range": "± 84054.30559427978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2635133.1415094337,
            "unit": "ns",
            "range": "± 109964.11407890063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3276005.9285714286,
            "unit": "ns",
            "range": "± 47751.7349865455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3134944.7666666666,
            "unit": "ns",
            "range": "± 139252.6102019753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7602879.930232558,
            "unit": "ns",
            "range": "± 194434.45097346345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5826844.6,
            "unit": "ns",
            "range": "± 107751.66756402692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14792335.266666668,
            "unit": "ns",
            "range": "± 140090.7505121829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37353718.75,
            "unit": "ns",
            "range": "± 394174.4611846442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74682212.86666666,
            "unit": "ns",
            "range": "± 643827.233465277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150673850.23076922,
            "unit": "ns",
            "range": "± 873488.123961354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079735.9623655914,
            "unit": "ns",
            "range": "± 92356.3867817582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054681.391304348,
            "unit": "ns",
            "range": "± 78751.43038714444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684289.224719101,
            "unit": "ns",
            "range": "± 112363.86207831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6437911.903225807,
            "unit": "ns",
            "range": "± 183310.58817725265"
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
          "id": "0fb72889e2b83ce1316cc06674214ec0053ce91f",
          "message": "@planetarium/tx: Remove useless template variable",
          "timestamp": "2023-11-23T00:00:10+09:00",
          "tree_id": "c7720e957e7c8e0fc67a1641937f836af77cde6e",
          "url": "https://github.com/moreal/libplanet/commit/0fb72889e2b83ce1316cc06674214ec0053ce91f"
        },
        "date": 1700665868430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211660.6891891892,
            "unit": "ns",
            "range": "± 10500.355579009452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208365.25531914894,
            "unit": "ns",
            "range": "± 14721.09090009806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166625,
            "unit": "ns",
            "range": "± 3646.377423661664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131974,
            "unit": "ns",
            "range": "± 29224.266329541962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845592.923076923,
            "unit": "ns",
            "range": "± 25619.88575781691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23132.863157894735,
            "unit": "ns",
            "range": "± 2314.34204431763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96099.03157894737,
            "unit": "ns",
            "range": "± 9283.42435037874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91738.71428571429,
            "unit": "ns",
            "range": "± 3299.407446800107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92889.6559139785,
            "unit": "ns",
            "range": "± 9692.941534833955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7186.632653061224,
            "unit": "ns",
            "range": "± 874.0441540635591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23185.04,
            "unit": "ns",
            "range": "± 3210.8605581115416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698054.123372396,
            "unit": "ns",
            "range": "± 5777.00648978298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217521.6026141827,
            "unit": "ns",
            "range": "± 7308.314364913599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761305.5712139423,
            "unit": "ns",
            "range": "± 2996.5455595296994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965177.4094238281,
            "unit": "ns",
            "range": "± 11016.457221496943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620548.0103352865,
            "unit": "ns",
            "range": "± 941.1918236946364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570335.0550362723,
            "unit": "ns",
            "range": "± 912.954766900017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45478.555555555555,
            "unit": "ns",
            "range": "± 7725.863329635635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2462191.435897436,
            "unit": "ns",
            "range": "± 84054.30559427978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2635133.1415094337,
            "unit": "ns",
            "range": "± 109964.11407890063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3276005.9285714286,
            "unit": "ns",
            "range": "± 47751.7349865455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3134944.7666666666,
            "unit": "ns",
            "range": "± 139252.6102019753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7602879.930232558,
            "unit": "ns",
            "range": "± 194434.45097346345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5826844.6,
            "unit": "ns",
            "range": "± 107751.66756402692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14792335.266666668,
            "unit": "ns",
            "range": "± 140090.7505121829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37353718.75,
            "unit": "ns",
            "range": "± 394174.4611846442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74682212.86666666,
            "unit": "ns",
            "range": "± 643827.233465277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150673850.23076922,
            "unit": "ns",
            "range": "± 873488.123961354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079735.9623655914,
            "unit": "ns",
            "range": "± 92356.3867817582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054681.391304348,
            "unit": "ns",
            "range": "± 78751.43038714444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684289.224719101,
            "unit": "ns",
            "range": "± 112363.86207831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6437911.903225807,
            "unit": "ns",
            "range": "± 183310.58817725265"
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
          "id": "ea3137e08fe0dcf36afa0312c2d8086ff14cde70",
          "message": "Update CHANGELOG",
          "timestamp": "2023-11-23T00:05:57+09:00",
          "tree_id": "45d408daad4ab30f3349601a6d0d8c90bee226ea",
          "url": "https://github.com/moreal/libplanet/commit/ea3137e08fe0dcf36afa0312c2d8086ff14cde70"
        },
        "date": 1700666205059,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199722.96031746033,
            "unit": "ns",
            "range": "± 9184.947412049214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188646,
            "unit": "ns",
            "range": "± 7718.125622108263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165798.55555555556,
            "unit": "ns",
            "range": "± 3523.022369270324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060405,
            "unit": "ns",
            "range": "± 39830.77298348023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2898203.466666667,
            "unit": "ns",
            "range": "± 30573.217910608037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13751.9375,
            "unit": "ns",
            "range": "± 2769.032070341358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66764.99315068492,
            "unit": "ns",
            "range": "± 3339.5311926613276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51594.38,
            "unit": "ns",
            "range": "± 1277.9677330303246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93336.97916666667,
            "unit": "ns",
            "range": "± 11827.830427899293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3049.0116279069766,
            "unit": "ns",
            "range": "± 526.2260472500174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13538.752688172042,
            "unit": "ns",
            "range": "± 1706.1740867388062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3827287.3190104165,
            "unit": "ns",
            "range": "± 45747.13277289737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206696.4801682692,
            "unit": "ns",
            "range": "± 4083.155051934783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757222.1091871995,
            "unit": "ns",
            "range": "± 4364.385011867592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934428.0753348214,
            "unit": "ns",
            "range": "± 3269.4059866620973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637848.4699707031,
            "unit": "ns",
            "range": "± 2493.0024047326083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576328.6306640625,
            "unit": "ns",
            "range": "± 9415.77403786201"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40854.336734693876,
            "unit": "ns",
            "range": "± 6287.6809025954435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480613.789473684,
            "unit": "ns",
            "range": "± 83764.20264862482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554962.698795181,
            "unit": "ns",
            "range": "± 135952.57501304074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3222790.277777778,
            "unit": "ns",
            "range": "± 105974.44212857877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3128544.95,
            "unit": "ns",
            "range": "± 71918.191063454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485168.5,
            "unit": "ns",
            "range": "± 233870.77267572234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5519402.714285715,
            "unit": "ns",
            "range": "± 93527.29007348075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14360881.733333332,
            "unit": "ns",
            "range": "± 124785.15568165646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36805554,
            "unit": "ns",
            "range": "± 586803.112555651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75300454.73333333,
            "unit": "ns",
            "range": "± 922170.9135400061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146820472.14285713,
            "unit": "ns",
            "range": "± 1229045.856227433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008786.1477272727,
            "unit": "ns",
            "range": "± 69103.51525209348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1909934.8035714286,
            "unit": "ns",
            "range": "± 81278.77538680621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623100.7835051545,
            "unit": "ns",
            "range": "± 138297.80491465892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6753985.982758621,
            "unit": "ns",
            "range": "± 293164.85160230193"
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
          "id": "5f58e1d31b329300fc58dfd6145ea646d95deb4b",
          "message": "Update CHANGELOG",
          "timestamp": "2023-12-04T16:35:11+09:00",
          "tree_id": "629124f4f0097ff2c999e4475efacceeaa66d1bc",
          "url": "https://github.com/moreal/libplanet/commit/5f58e1d31b329300fc58dfd6145ea646d95deb4b"
        },
        "date": 1701675993497,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195507.20454545456,
            "unit": "ns",
            "range": "± 11887.237696354618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186762.5806451613,
            "unit": "ns",
            "range": "± 10858.548524111817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165496.98969072165,
            "unit": "ns",
            "range": "± 9716.073188166569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108248.2363636363,
            "unit": "ns",
            "range": "± 130761.30187000813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2753448.2884615385,
            "unit": "ns",
            "range": "± 113339.64976683182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13911.645833333334,
            "unit": "ns",
            "range": "± 3005.8427313945067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59620.604166666664,
            "unit": "ns",
            "range": "± 5931.635680119495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76535.31,
            "unit": "ns",
            "range": "± 18509.747693872217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69286.13402061856,
            "unit": "ns",
            "range": "± 16238.704880642463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3889.9239130434785,
            "unit": "ns",
            "range": "± 996.7852748997886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12696.173913043478,
            "unit": "ns",
            "range": "± 1858.6240722505872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3681561.1247209823,
            "unit": "ns",
            "range": "± 46502.7300669931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198537.1378038195,
            "unit": "ns",
            "range": "± 25044.74076812164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763130.7036830357,
            "unit": "ns",
            "range": "± 8455.353828766829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882121.41015625,
            "unit": "ns",
            "range": "± 22695.601397759987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602296.2442908654,
            "unit": "ns",
            "range": "± 6223.593975988173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559064.6123046875,
            "unit": "ns",
            "range": "± 6230.780775523006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37875.67894736842,
            "unit": "ns",
            "range": "± 4688.881048705946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2332165.6666666665,
            "unit": "ns",
            "range": "± 124945.34789021006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2616827.1379310344,
            "unit": "ns",
            "range": "± 75705.079849715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3177818.6842105263,
            "unit": "ns",
            "range": "± 69365.80024531191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211898.62,
            "unit": "ns",
            "range": "± 247130.83551438083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9584970.52173913,
            "unit": "ns",
            "range": "± 1335424.150621335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5604674.214285715,
            "unit": "ns",
            "range": "± 33459.67293779775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14454705.307692308,
            "unit": "ns",
            "range": "± 115560.51143836908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37374748,
            "unit": "ns",
            "range": "± 347687.578291201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76461121.64285715,
            "unit": "ns",
            "range": "± 1349251.0992949787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148011849.94117647,
            "unit": "ns",
            "range": "± 2945467.9689686084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055878.03125,
            "unit": "ns",
            "range": "± 113957.92525816878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1960681.4428571428,
            "unit": "ns",
            "range": "± 95320.8850088282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1667590.2395833333,
            "unit": "ns",
            "range": "± 168325.10657441858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8471385.855555555,
            "unit": "ns",
            "range": "± 1204438.920986029"
          }
        ]
      }
    ]
  }
}