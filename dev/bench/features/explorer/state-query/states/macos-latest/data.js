window.BENCHMARK_DATA = {
  "lastUpdate": 1681287998443,
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
      }
    ]
  }
}