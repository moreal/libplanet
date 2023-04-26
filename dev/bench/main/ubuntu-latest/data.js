window.BENCHMARK_DATA = {
  "lastUpdate": 1682494141272,
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
        "date": 1682494137469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8828996.055555556,
            "unit": "ns",
            "range": "± 183800.03399361914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21533224.785714287,
            "unit": "ns",
            "range": "± 129666.84328467354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54397770,
            "unit": "ns",
            "range": "± 260741.38624424668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108347894.46666667,
            "unit": "ns",
            "range": "± 452371.92482290603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219128485.73333332,
            "unit": "ns",
            "range": "± 1203533.815560331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49491.529411764706,
            "unit": "ns",
            "range": "± 2564.2746657923853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497123.7575757576,
            "unit": "ns",
            "range": "± 108573.09852212807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734448,
            "unit": "ns",
            "range": "± 85256.73725430736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352097.563380282,
            "unit": "ns",
            "range": "± 89614.7111833658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5734630.041666667,
            "unit": "ns",
            "range": "± 129601.29997820879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003925.765625,
            "unit": "ns",
            "range": "± 27882.778544991863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878260.0637555805,
            "unit": "ns",
            "range": "± 1873.734236196493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381447.6013020833,
            "unit": "ns",
            "range": "± 2562.235553278371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578318.4557291665,
            "unit": "ns",
            "range": "± 3640.052003835926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821033.5788762019,
            "unit": "ns",
            "range": "± 302.799705773933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756261.9143229167,
            "unit": "ns",
            "range": "± 376.9524713443475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299179.7826086957,
            "unit": "ns",
            "range": "± 7490.774307327658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286492.6451612903,
            "unit": "ns",
            "range": "± 8484.05540822857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232083.14285714287,
            "unit": "ns",
            "range": "± 3376.8136746653036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426739,
            "unit": "ns",
            "range": "± 39760.87951550058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929864.7333333334,
            "unit": "ns",
            "range": "± 56189.25976613918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21036.542553191488,
            "unit": "ns",
            "range": "± 1435.9954448133162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96376.03797468354,
            "unit": "ns",
            "range": "± 4975.2144070356735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83132.14285714286,
            "unit": "ns",
            "range": "± 2779.4142023747327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102723.11578947368,
            "unit": "ns",
            "range": "± 9995.246663761172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6506.350515463918,
            "unit": "ns",
            "range": "± 1004.7216866007088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21003.619565217392,
            "unit": "ns",
            "range": "± 1380.4873629169647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571631.125,
            "unit": "ns",
            "range": "± 70028.07098192838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3704030.933333333,
            "unit": "ns",
            "range": "± 65142.84630329902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242764.0869565215,
            "unit": "ns",
            "range": "± 91037.49844377968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4633691.209302326,
            "unit": "ns",
            "range": "± 164613.9257274655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7154537.733333333,
            "unit": "ns",
            "range": "± 206494.01213977515"
          }
        ]
      }
    ]
  }
}