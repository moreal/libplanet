window.BENCHMARK_DATA = {
  "lastUpdate": 1682494478541,
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
        "date": 1682494463665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668337.894736842,
            "unit": "ns",
            "range": "± 148614.60237161728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3116705.3191489363,
            "unit": "ns",
            "range": "± 219652.29579194303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2637687.912087912,
            "unit": "ns",
            "range": "± 151237.73326577584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6643927.368421053,
            "unit": "ns",
            "range": "± 404852.73430846893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59745.65217391304,
            "unit": "ns",
            "range": "± 4748.7051570819085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8368410.714285715,
            "unit": "ns",
            "range": "± 232310.98942339837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23492985.714285713,
            "unit": "ns",
            "range": "± 654520.6018964401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60992409.09090909,
            "unit": "ns",
            "range": "± 2246543.3080177098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121771286.48648648,
            "unit": "ns",
            "range": "± 4119687.602784286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250938264.2857143,
            "unit": "ns",
            "range": "± 4286938.799262986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5680526.5625,
            "unit": "ns",
            "range": "± 82886.33764957446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849627.2310697115,
            "unit": "ns",
            "range": "± 17738.27423123997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427042.885044643,
            "unit": "ns",
            "range": "± 24956.70423580562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176603.4895833335,
            "unit": "ns",
            "range": "± 43248.304149154224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028190.2493990385,
            "unit": "ns",
            "range": "± 14553.821681974976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929318.92578125,
            "unit": "ns",
            "range": "± 12265.445204118012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3796534.210526316,
            "unit": "ns",
            "range": "± 123664.4288393825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3984487.878787879,
            "unit": "ns",
            "range": "± 105492.06059455304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4603142.857142857,
            "unit": "ns",
            "range": "± 166309.18772979727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4873712.244897959,
            "unit": "ns",
            "range": "± 191621.82334032858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8115909.756097561,
            "unit": "ns",
            "range": "± 429375.1140269063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319711.59420289856,
            "unit": "ns",
            "range": "± 15410.219453259351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308954.2168674699,
            "unit": "ns",
            "range": "± 16392.259485060797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268735.8585858586,
            "unit": "ns",
            "range": "± 17041.74951556402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4832693.75,
            "unit": "ns",
            "range": "± 90678.28456508573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4303194.871794872,
            "unit": "ns",
            "range": "± 139154.88899389838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25573.626373626375,
            "unit": "ns",
            "range": "± 2122.411373091945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110515.46391752578,
            "unit": "ns",
            "range": "± 10017.228286455058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107602.0202020202,
            "unit": "ns",
            "range": "± 13448.92818578962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125519.58762886598,
            "unit": "ns",
            "range": "± 17482.45334122699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8296.907216494845,
            "unit": "ns",
            "range": "± 1328.725392391099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25556.382978723403,
            "unit": "ns",
            "range": "± 1931.157016309819"
          }
        ]
      }
    ]
  }
}