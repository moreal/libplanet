window.BENCHMARK_DATA = {
  "lastUpdate": 1687249157682,
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
          "id": "1fb37864f72f21ed37dffd50ef4508d1ab333e57",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:07:10+09:00",
          "tree_id": "582617ebad48b62bccae5014cb8031065aa34f37",
          "url": "https://github.com/moreal/libplanet/commit/1fb37864f72f21ed37dffd50ef4508d1ab333e57"
        },
        "date": 1687249153095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333050.75,
            "unit": "ns",
            "range": "± 50081.05801398369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3443428.2666666666,
            "unit": "ns",
            "range": "± 53430.09605144526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4259883.666666667,
            "unit": "ns",
            "range": "± 62551.956881193306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4294787.6486486485,
            "unit": "ns",
            "range": "± 142522.90243174098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6802442.541666667,
            "unit": "ns",
            "range": "± 145978.98764428517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207365.875520834,
            "unit": "ns",
            "range": "± 20346.790998905828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986633.5538504464,
            "unit": "ns",
            "range": "± 1020.4933967469327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357978.1129807692,
            "unit": "ns",
            "range": "± 499.4170349583844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585140.575420673,
            "unit": "ns",
            "range": "± 1604.5115190434135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806745.9650530134,
            "unit": "ns",
            "range": "± 888.3999246786634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731722.7135881697,
            "unit": "ns",
            "range": "± 468.8428443813501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282248.50980392157,
            "unit": "ns",
            "range": "± 11320.674196129043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273328.27659574465,
            "unit": "ns",
            "range": "± 8911.8550006307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249483.26923076922,
            "unit": "ns",
            "range": "± 6589.033844549243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277669.714285715,
            "unit": "ns",
            "range": "± 25728.38818362846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3925093,
            "unit": "ns",
            "range": "± 23926.994828821724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18932.893617021276,
            "unit": "ns",
            "range": "± 1299.5851320489512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89563.23076923077,
            "unit": "ns",
            "range": "± 4181.363902668418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73819.55,
            "unit": "ns",
            "range": "± 1676.3834027924206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94446.50505050505,
            "unit": "ns",
            "range": "± 12331.614604029804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5381.371134020618,
            "unit": "ns",
            "range": "± 707.4421695974465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19093.521276595744,
            "unit": "ns",
            "range": "± 1601.974800982618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381646.1789473684,
            "unit": "ns",
            "range": "± 107679.26815088498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2645910.625,
            "unit": "ns",
            "range": "± 67180.94206260044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196079.279411765,
            "unit": "ns",
            "range": "± 104990.29115424011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5505643.7894736845,
            "unit": "ns",
            "range": "± 187830.5410323226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46282.391304347824,
            "unit": "ns",
            "range": "± 2087.0385028255264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7821307.833333333,
            "unit": "ns",
            "range": "± 16450.710959122895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19773993.5,
            "unit": "ns",
            "range": "± 58094.44763850567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50342021.93333333,
            "unit": "ns",
            "range": "± 241328.972193994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101879936.93333334,
            "unit": "ns",
            "range": "± 426196.84742037527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203956314.7857143,
            "unit": "ns",
            "range": "± 308674.5836197025"
          }
        ]
      }
    ]
  }
}