window.BENCHMARK_DATA = {
  "lastUpdate": 1681326730294,
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
          "id": "5f557ae43704ecdbdab693f6354032660b7a8dae",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T16:59:46+09:00",
          "tree_id": "e9ae255659b55e1198e56ed68a9f789d626375b6",
          "url": "https://github.com/moreal/libplanet/commit/5f557ae43704ecdbdab693f6354032660b7a8dae"
        },
        "date": 1681287985711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10726399.75862069,
            "unit": "ns",
            "range": "± 3097297.505608765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21106986.5,
            "unit": "ns",
            "range": "± 820368.2738890776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63172578.026315786,
            "unit": "ns",
            "range": "± 8830627.41082095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124786060.55,
            "unit": "ns",
            "range": "± 2503689.6760932542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284198526.37234044,
            "unit": "ns",
            "range": "± 78219058.17651516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78140.24175824175,
            "unit": "ns",
            "range": "± 7439.470520795981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 454032.25,
            "unit": "ns",
            "range": "± 51804.06530496125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376459.7111111111,
            "unit": "ns",
            "range": "± 44054.48787434331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 373765.5967741936,
            "unit": "ns",
            "range": "± 50957.40720104956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6237402.204081632,
            "unit": "ns",
            "range": "± 551481.4688104199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4724717.63,
            "unit": "ns",
            "range": "± 494487.10225433786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30505.951219512193,
            "unit": "ns",
            "range": "± 3697.1465845921584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 154300.26923076922,
            "unit": "ns",
            "range": "± 30096.38737311873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 148762.77272727274,
            "unit": "ns",
            "range": "± 20505.29045596247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 325490.63636363635,
            "unit": "ns",
            "range": "± 48480.2824583929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12285.011363636364,
            "unit": "ns",
            "range": "± 1159.04346704085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28747.559523809523,
            "unit": "ns",
            "range": "± 3071.5712291417462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1861853.1590909092,
            "unit": "ns",
            "range": "± 224733.55543909376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3630219.7586206896,
            "unit": "ns",
            "range": "± 392144.1448582446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2773497.216494845,
            "unit": "ns",
            "range": "± 263017.43765358767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7417692.936619719,
            "unit": "ns",
            "range": "± 361000.51215870806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3429916.747126437,
            "unit": "ns",
            "range": "± 240518.38418199282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983540.7021276597,
            "unit": "ns",
            "range": "± 497682.5482153512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5103493.638297873,
            "unit": "ns",
            "range": "± 478617.25611982925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5225660.525773196,
            "unit": "ns",
            "range": "± 523672.7073331063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9722941,
            "unit": "ns",
            "range": "± 885087.6672764305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7953605.296875,
            "unit": "ns",
            "range": "± 377070.14778182236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2377257.4972401494,
            "unit": "ns",
            "range": "± 173553.0628608129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496434.0240885417,
            "unit": "ns",
            "range": "± 64980.67682710275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078688.5774872447,
            "unit": "ns",
            "range": "± 265331.42440032057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907130.8474422089,
            "unit": "ns",
            "range": "± 44668.349199484954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839259.860958215,
            "unit": "ns",
            "range": "± 38989.25044476565"
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
          "id": "a1d173812adc019c5bbe45d00e9a4feeeeef91d2",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T18:52:12+09:00",
          "tree_id": "b68ce7153b7f998450f240b92a407f3ae9b9c0be",
          "url": "https://github.com/moreal/libplanet/commit/a1d173812adc019c5bbe45d00e9a4feeeeef91d2"
        },
        "date": 1681294131358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7896494.1,
            "unit": "ns",
            "range": "± 396602.2910894898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19707270.07142857,
            "unit": "ns",
            "range": "± 250885.1784295156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50709862.72340426,
            "unit": "ns",
            "range": "± 1932409.7091991545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96726455.05,
            "unit": "ns",
            "range": "± 2211575.536455247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198684437.56410256,
            "unit": "ns",
            "range": "± 6624121.83063408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61639.3085106383,
            "unit": "ns",
            "range": "± 8962.834634686953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359456.1206896552,
            "unit": "ns",
            "range": "± 15583.55696517752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299664.07042253524,
            "unit": "ns",
            "range": "± 14468.947239148243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318203.1458333333,
            "unit": "ns",
            "range": "± 20925.572577202565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5664742.653846154,
            "unit": "ns",
            "range": "± 49152.19641387038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4182173.722222222,
            "unit": "ns",
            "range": "± 88866.20569846465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20228.159574468085,
            "unit": "ns",
            "range": "± 3066.202513856939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99759.54081632652,
            "unit": "ns",
            "range": "± 13230.77855215841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108759.75510204081,
            "unit": "ns",
            "range": "± 14388.495786429785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254057.23469387754,
            "unit": "ns",
            "range": "± 27546.283662304515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8166.229166666667,
            "unit": "ns",
            "range": "± 1478.6886187228029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21502.5625,
            "unit": "ns",
            "range": "± 3510.453279511291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559376.8510638298,
            "unit": "ns",
            "range": "± 182420.36115173728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2907033.0465116277,
            "unit": "ns",
            "range": "± 161648.30451205274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650467.2474747472,
            "unit": "ns",
            "range": "± 240862.58650560546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7115042.10989011,
            "unit": "ns",
            "range": "± 396792.5619417237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098137.75,
            "unit": "ns",
            "range": "± 189447.09213459212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354809.375,
            "unit": "ns",
            "range": "± 100967.70046222223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4232039.857142857,
            "unit": "ns",
            "range": "± 179614.2882078583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4357852.5,
            "unit": "ns",
            "range": "± 138212.02487460847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8181163.428571428,
            "unit": "ns",
            "range": "± 349377.6814548903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6832791.55859375,
            "unit": "ns",
            "range": "± 107983.0080780137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942143.4420572917,
            "unit": "ns",
            "range": "± 18744.41980128072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326423.59140625,
            "unit": "ns",
            "range": "± 13736.029977352136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2846270.703125,
            "unit": "ns",
            "range": "± 60427.279828805455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788439.9903846154,
            "unit": "ns",
            "range": "± 4758.875662612963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726413.2115384615,
            "unit": "ns",
            "range": "± 3967.945223076228"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "1387f9c9221a6f0fb7dd85a45ffb8bc2ce75c05e",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-13T03:56:40+09:00",
          "tree_id": "dc40cafed37f97514005e03355330bf9bc74a325",
          "url": "https://github.com/moreal/libplanet/commit/1387f9c9221a6f0fb7dd85a45ffb8bc2ce75c05e"
        },
        "date": 1681326722682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8191448.038461538,
            "unit": "ns",
            "range": "± 86471.89071563023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19131867.6875,
            "unit": "ns",
            "range": "± 352863.45816414955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49087956.5,
            "unit": "ns",
            "range": "± 824378.043271896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99909309.35714285,
            "unit": "ns",
            "range": "± 1399567.0580022298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207629466.42857143,
            "unit": "ns",
            "range": "± 8855951.818394946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60134.56122448979,
            "unit": "ns",
            "range": "± 9392.056522014109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378670.5375,
            "unit": "ns",
            "range": "± 19807.957288304235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308891.14864864864,
            "unit": "ns",
            "range": "± 15342.57812512441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296781.0404040404,
            "unit": "ns",
            "range": "± 18906.455137753925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5504896.066666666,
            "unit": "ns",
            "range": "± 84085.64819657452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911559.35,
            "unit": "ns",
            "range": "± 88227.01857038138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17975.659340659342,
            "unit": "ns",
            "range": "± 1909.0817933689727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89026.03092783505,
            "unit": "ns",
            "range": "± 8857.921592955663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95502.4387755102,
            "unit": "ns",
            "range": "± 13247.631696585539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252849.53608247422,
            "unit": "ns",
            "range": "± 15996.07275829879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8189.020833333333,
            "unit": "ns",
            "range": "± 1423.8945405890483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19302.666666666668,
            "unit": "ns",
            "range": "± 4768.8986342418175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617255.77,
            "unit": "ns",
            "range": "± 189920.7745231464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2829753.8703703703,
            "unit": "ns",
            "range": "± 119364.65265399675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488947.75,
            "unit": "ns",
            "range": "± 231961.94145501315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526710.631578947,
            "unit": "ns",
            "range": "± 328008.705963438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3408069.214285714,
            "unit": "ns",
            "range": "± 58049.57527993911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3290074.4565217393,
            "unit": "ns",
            "range": "± 184806.41877748922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4406215.72881356,
            "unit": "ns",
            "range": "± 194508.85103137564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479238.049295775,
            "unit": "ns",
            "range": "± 218328.95275594635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8118616.861111111,
            "unit": "ns",
            "range": "± 266043.68003781984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6759692.125633446,
            "unit": "ns",
            "range": "± 211156.8801085147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2067047.6845703125,
            "unit": "ns",
            "range": "± 39279.80451300662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291532.0788143382,
            "unit": "ns",
            "range": "± 25423.46174909702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2443726.8505859375,
            "unit": "ns",
            "range": "± 24330.478024649874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761989.5282552083,
            "unit": "ns",
            "range": "± 4478.883046880821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757980.4452473958,
            "unit": "ns",
            "range": "± 11674.422626246864"
          }
        ]
      }
    ]
  }
}