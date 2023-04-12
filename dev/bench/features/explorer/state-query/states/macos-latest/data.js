window.BENCHMARK_DATA = {
  "lastUpdate": 1681294138376,
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
      }
    ]
  }
}