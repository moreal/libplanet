window.BENCHMARK_DATA = {
  "lastUpdate": 1687249794706,
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
          "id": "04c30457cf95a606952fee8daaae44888a6af52f",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:11:16+09:00",
          "tree_id": "49b35c1dbf7c6846c137a2dd9dcf6be71f01db05",
          "url": "https://github.com/moreal/libplanet/commit/04c30457cf95a606952fee8daaae44888a6af52f"
        },
        "date": 1687249789553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3744903.663265306,
            "unit": "ns",
            "range": "± 442412.5128055565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743024.9263157896,
            "unit": "ns",
            "range": "± 451038.9845054968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5332521.787234043,
            "unit": "ns",
            "range": "± 502276.25035704055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5188879.659793815,
            "unit": "ns",
            "range": "± 509239.05398193316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8073990.368421053,
            "unit": "ns",
            "range": "± 677000.6625785289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6788084.672193877,
            "unit": "ns",
            "range": "± 265119.8887496213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2074347.9706182065,
            "unit": "ns",
            "range": "± 51304.43863572842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448392.1791130514,
            "unit": "ns",
            "range": "± 27775.664847591892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865925.713264628,
            "unit": "ns",
            "range": "± 106951.65702440054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911892.5459594727,
            "unit": "ns",
            "range": "± 17723.457716036904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851595.4933268229,
            "unit": "ns",
            "range": "± 25396.22391979346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328323.7052631579,
            "unit": "ns",
            "range": "± 40944.77763750277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326964.45263157896,
            "unit": "ns",
            "range": "± 47279.46010977356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279307.41237113404,
            "unit": "ns",
            "range": "± 37502.97017036134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4386816.347368421,
            "unit": "ns",
            "range": "± 328756.7497998045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4076971.610526316,
            "unit": "ns",
            "range": "± 387219.59227289236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31115.369565217392,
            "unit": "ns",
            "range": "± 5974.721181995025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104103.5,
            "unit": "ns",
            "range": "± 11539.809749412318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100921.71276595745,
            "unit": "ns",
            "range": "± 17889.857078606117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125327.46391752578,
            "unit": "ns",
            "range": "± 24270.86097998219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5575.987341772152,
            "unit": "ns",
            "range": "± 1225.4295478569104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30250.68817204301,
            "unit": "ns",
            "range": "± 7302.162626323219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685520.336734694,
            "unit": "ns",
            "range": "± 191315.10655007587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3246998.6597938146,
            "unit": "ns",
            "range": "± 272968.14136203413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2607848.13,
            "unit": "ns",
            "range": "± 267365.3055875658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6916994.2727272725,
            "unit": "ns",
            "range": "± 618465.0147893609"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68068.43298969071,
            "unit": "ns",
            "range": "± 15535.589712889361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8765217.916666666,
            "unit": "ns",
            "range": "± 621260.3237270553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24697597.21212121,
            "unit": "ns",
            "range": "± 1715852.4075385928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62832339.9661017,
            "unit": "ns",
            "range": "± 2769426.389134256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124194316.14705883,
            "unit": "ns",
            "range": "± 3972607.7278427747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232562394.2020202,
            "unit": "ns",
            "range": "± 14468313.317824265"
          }
        ]
      }
    ]
  }
}