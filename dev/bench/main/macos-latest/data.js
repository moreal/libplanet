window.BENCHMARK_DATA = {
  "lastUpdate": 1682494687051,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2065dde564132ae03bde8bdc2c43206728823503",
          "message": "Merge pull request #3089 from moreal/exp/action-evaluation-no-action",
          "timestamp": "2023-04-25T17:53:39+09:00",
          "tree_id": "a4621399f72f951ae0ea8d4674ee67b6b05f01f6",
          "url": "https://github.com/moreal/libplanet/commit/2065dde564132ae03bde8bdc2c43206728823503"
        },
        "date": 1682494676030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9486608.110526316,
            "unit": "ns",
            "range": "± 1002094.9071875896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23156499.636363637,
            "unit": "ns",
            "range": "± 1353354.1767361767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61629508.58064516,
            "unit": "ns",
            "range": "± 5985376.245893871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130209546.02197802,
            "unit": "ns",
            "range": "± 14011650.772553347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240856793.97058824,
            "unit": "ns",
            "range": "± 8886342.2935095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85424.04022988505,
            "unit": "ns",
            "range": "± 12069.192872769367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397062.7311827957,
            "unit": "ns",
            "range": "± 47661.063786076265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364591.9505494505,
            "unit": "ns",
            "range": "± 30760.48085314942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 393942.98387096776,
            "unit": "ns",
            "range": "± 60789.73898765512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4852899.768041237,
            "unit": "ns",
            "range": "± 365004.3727396608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4114934.2,
            "unit": "ns",
            "range": "± 334988.0083659585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31781.183908045976,
            "unit": "ns",
            "range": "± 4513.223541242602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142409.76086956522,
            "unit": "ns",
            "range": "± 18138.215616933325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 147324.67021276595,
            "unit": "ns",
            "range": "± 19928.168233636912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150473.6739130435,
            "unit": "ns",
            "range": "± 24715.539920297906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12613.788235294118,
            "unit": "ns",
            "range": "± 1205.131696953823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29682.153846153848,
            "unit": "ns",
            "range": "± 4184.928327869154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1699197.670212766,
            "unit": "ns",
            "range": "± 199782.89932693462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3500223.7789473683,
            "unit": "ns",
            "range": "± 388062.5900754785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3279397.9827586208,
            "unit": "ns",
            "range": "± 660320.4639722708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7681374.833333333,
            "unit": "ns",
            "range": "± 592205.8384847839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4937648.773195877,
            "unit": "ns",
            "range": "± 416026.4909083692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4096966.0918367347,
            "unit": "ns",
            "range": "± 468663.36142278044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5157382.298969072,
            "unit": "ns",
            "range": "± 474611.8428028003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5029557.966666667,
            "unit": "ns",
            "range": "± 486925.052668606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9427484.81958763,
            "unit": "ns",
            "range": "± 894419.3936797718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7809955.123263889,
            "unit": "ns",
            "range": "± 260204.07242055057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273559.466444672,
            "unit": "ns",
            "range": "± 102303.73043840997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1523792.0723544033,
            "unit": "ns",
            "range": "± 56135.48569539604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3947651.1450390625,
            "unit": "ns",
            "range": "± 250176.66011077684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1122255.273417155,
            "unit": "ns",
            "range": "± 75502.48683936606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889559.6858016305,
            "unit": "ns",
            "range": "± 21671.53544753175"
          }
        ]
      }
    ]
  }
}