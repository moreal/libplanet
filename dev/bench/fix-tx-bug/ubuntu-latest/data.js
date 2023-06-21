window.BENCHMARK_DATA = {
  "lastUpdate": 1687314768924,
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
          "id": "b6b582f14c4375b0a214cff73e439a4900b129ee",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:25:50+09:00",
          "tree_id": "69558e42b1bc6eb4aede6672b531714a5189f4af",
          "url": "https://github.com/moreal/libplanet/commit/b6b582f14c4375b0a214cff73e439a4900b129ee"
        },
        "date": 1687250711010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4547283.27027027,
            "unit": "ns",
            "range": "± 225729.1926526664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4874368.817204301,
            "unit": "ns",
            "range": "± 281317.39527865744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5977385.166666667,
            "unit": "ns",
            "range": "± 198680.58682612004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5951810.840425532,
            "unit": "ns",
            "range": "± 424998.895724797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9978510.18478261,
            "unit": "ns",
            "range": "± 560886.344607265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8092653.147916666,
            "unit": "ns",
            "range": "± 115376.48611278138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2474483.3529296876,
            "unit": "ns",
            "range": "± 54548.43784794032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1792307.6828125,
            "unit": "ns",
            "range": "± 19234.58280629878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3528528.5426897323,
            "unit": "ns",
            "range": "± 38232.273684796266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1158538.4361572266,
            "unit": "ns",
            "range": "± 21393.509468931014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1053052.4682291667,
            "unit": "ns",
            "range": "± 15981.572783546158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389376.95652173914,
            "unit": "ns",
            "range": "± 27869.039764274334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385593.43157894735,
            "unit": "ns",
            "range": "± 24759.00949650305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355465.2444444444,
            "unit": "ns",
            "range": "± 19707.93835626097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5909440.847826087,
            "unit": "ns",
            "range": "± 227021.12704072942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5356934.7441860465,
            "unit": "ns",
            "range": "± 197908.7243184033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26738.033333333333,
            "unit": "ns",
            "range": "± 5417.1741409182805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138410.10638297873,
            "unit": "ns",
            "range": "± 21040.03548305815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134570.70212765958,
            "unit": "ns",
            "range": "± 24383.172490152127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138608.02173913043,
            "unit": "ns",
            "range": "± 17425.41900735646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9102.290322580646,
            "unit": "ns",
            "range": "± 1618.4269239835621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28790.979166666668,
            "unit": "ns",
            "range": "± 3834.245444135938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1928887.4210526317,
            "unit": "ns",
            "range": "± 158196.53147020578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3850415.0444444446,
            "unit": "ns",
            "range": "± 211083.1052127223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3030881.4479166665,
            "unit": "ns",
            "range": "± 196605.92024677552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8089267.28125,
            "unit": "ns",
            "range": "± 557898.3702569881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68743.68131868132,
            "unit": "ns",
            "range": "± 11328.898573391973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11027456.744186046,
            "unit": "ns",
            "range": "± 406652.0649680343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28798126.54347826,
            "unit": "ns",
            "range": "± 1108103.886888724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75416549.47619048,
            "unit": "ns",
            "range": "± 1604745.0136773323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149200271.76,
            "unit": "ns",
            "range": "± 3911939.8829445248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 325562521.6111111,
            "unit": "ns",
            "range": "± 6523217.657496528"
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
          "id": "bb312b1e05f7c31e85656237d69f6b5f68811bec",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:31:38+09:00",
          "tree_id": "3708c432454025c957577e290f20b4d46b44e6a8",
          "url": "https://github.com/moreal/libplanet/commit/bb312b1e05f7c31e85656237d69f6b5f68811bec"
        },
        "date": 1687250724854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392032.45,
            "unit": "ns",
            "range": "± 77209.81224285108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3553585.3333333335,
            "unit": "ns",
            "range": "± 83210.15820879885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379673.19047619,
            "unit": "ns",
            "range": "± 102606.549788802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4396640.9,
            "unit": "ns",
            "range": "± 129712.50085327298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6907234,
            "unit": "ns",
            "range": "± 135909.75307855944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6116098.983854166,
            "unit": "ns",
            "range": "± 46894.645661793744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895585.2625558036,
            "unit": "ns",
            "range": "± 5223.734985619265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359629.9548177083,
            "unit": "ns",
            "range": "± 3839.2671456559815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631828.4143415177,
            "unit": "ns",
            "range": "± 12648.383768700764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833733.3805338541,
            "unit": "ns",
            "range": "± 1620.6700583796473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766777.4607421875,
            "unit": "ns",
            "range": "± 1418.0414996997936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285624.140625,
            "unit": "ns",
            "range": "± 13107.281657164012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269829.55,
            "unit": "ns",
            "range": "± 9594.484315453707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236140.46153846153,
            "unit": "ns",
            "range": "± 3123.976755552251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4393890.68,
            "unit": "ns",
            "range": "± 115292.86815133016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998230.347826087,
            "unit": "ns",
            "range": "± 99422.16814611075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18079.709677419356,
            "unit": "ns",
            "range": "± 1417.7957676300482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87827.28723404255,
            "unit": "ns",
            "range": "± 5255.693352502046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73850.58333333333,
            "unit": "ns",
            "range": "± 1906.893739012234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91733.73195876289,
            "unit": "ns",
            "range": "± 11652.978294656641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5002.092783505154,
            "unit": "ns",
            "range": "± 817.6323680103507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16684.127659574468,
            "unit": "ns",
            "range": "± 1374.8920836168609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599041.418367347,
            "unit": "ns",
            "range": "± 141990.44370994435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917723.8214285714,
            "unit": "ns",
            "range": "± 119295.03018530566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2294012.4691358022,
            "unit": "ns",
            "range": "± 116297.25464484171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5614818.929824562,
            "unit": "ns",
            "range": "± 243161.42872599352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47179.24444444444,
            "unit": "ns",
            "range": "± 2765.740774089859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911962.785714285,
            "unit": "ns",
            "range": "± 50208.406954916914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21725810.65,
            "unit": "ns",
            "range": "± 476178.0988578997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53855554.333333336,
            "unit": "ns",
            "range": "± 805007.5037784844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109133629.53333333,
            "unit": "ns",
            "range": "± 1689302.9862633485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214405621.4,
            "unit": "ns",
            "range": "± 2858642.6787395296"
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
          "id": "bcc65cef468f37727c19a8c51582940ce1146465",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:33:56+09:00",
          "tree_id": "ee283f4e15d60dc1ac6aee6d58f5ffa36f59337b",
          "url": "https://github.com/moreal/libplanet/commit/bcc65cef468f37727c19a8c51582940ce1146465"
        },
        "date": 1687250956821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4256638.866666666,
            "unit": "ns",
            "range": "± 76974.82718568888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4360938.620689655,
            "unit": "ns",
            "range": "± 126323.91657261044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5216416.375,
            "unit": "ns",
            "range": "± 101508.38149162856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5494012.666666667,
            "unit": "ns",
            "range": "± 77813.38445892443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8277152.038461538,
            "unit": "ns",
            "range": "± 214664.57292724962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7122387.513392857,
            "unit": "ns",
            "range": "± 35395.83093347756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206023.1263020835,
            "unit": "ns",
            "range": "± 7646.394127894566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1617567.3276041667,
            "unit": "ns",
            "range": "± 3429.158800810235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3091107.1448102677,
            "unit": "ns",
            "range": "± 19618.2552550783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998084.5497395833,
            "unit": "ns",
            "range": "± 8013.527219174402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893751.3772786459,
            "unit": "ns",
            "range": "± 8749.026994789061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341453.05263157893,
            "unit": "ns",
            "range": "± 7011.026248177337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329593.3103448276,
            "unit": "ns",
            "range": "± 9049.259121621299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296026.3417721519,
            "unit": "ns",
            "range": "± 15262.07686062559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5187966.315789473,
            "unit": "ns",
            "range": "± 112642.59904132018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4845748.733333333,
            "unit": "ns",
            "range": "± 59423.34378780623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22703.516129032258,
            "unit": "ns",
            "range": "± 1310.2403000056001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108828.30927835051,
            "unit": "ns",
            "range": "± 6344.708852593935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92562.60606060606,
            "unit": "ns",
            "range": "± 7179.684267428681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108736.79166666667,
            "unit": "ns",
            "range": "± 12968.952735316647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6335.614583333333,
            "unit": "ns",
            "range": "± 707.8778718601806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19975.387096774193,
            "unit": "ns",
            "range": "± 1444.705183045542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1818161.9,
            "unit": "ns",
            "range": "± 39642.279249492414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3173053.976190476,
            "unit": "ns",
            "range": "± 115398.79223011892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2607106.6666666665,
            "unit": "ns",
            "range": "± 141189.76109754894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6678109.314814814,
            "unit": "ns",
            "range": "± 281219.9844754471"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57142.80722891566,
            "unit": "ns",
            "range": "± 3073.5166974030576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9335359.772727273,
            "unit": "ns",
            "range": "± 223675.04150397074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25470378.285714287,
            "unit": "ns",
            "range": "± 295367.91605579446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65248153.733333334,
            "unit": "ns",
            "range": "± 806141.7403062979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129945460.86666666,
            "unit": "ns",
            "range": "± 1778347.088950052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262064654.2,
            "unit": "ns",
            "range": "± 1346396.3253702295"
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
          "id": "4bbe9f311d53f21ee472987d6fb6b1978e825f0c",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-21T11:19:37+09:00",
          "tree_id": "bccfa9983a1dd3842eb6c6b0d65da82c5ab906cb",
          "url": "https://github.com/moreal/libplanet/commit/4bbe9f311d53f21ee472987d6fb6b1978e825f0c"
        },
        "date": 1687314764777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358157.5384615385,
            "unit": "ns",
            "range": "± 40674.6752632302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562749.6078431373,
            "unit": "ns",
            "range": "± 127015.22465879096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289206,
            "unit": "ns",
            "range": "± 79246.97554841716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445829.673076923,
            "unit": "ns",
            "range": "± 183366.29399141468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7052872.977777778,
            "unit": "ns",
            "range": "± 264162.8285183117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995898.922433035,
            "unit": "ns",
            "range": "± 20019.232201980958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892982.3149739583,
            "unit": "ns",
            "range": "± 3572.581767518598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380230.5006975445,
            "unit": "ns",
            "range": "± 4271.561277616237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652859.139423077,
            "unit": "ns",
            "range": "± 16391.6002900455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830479.3792317709,
            "unit": "ns",
            "range": "± 1602.2439976875469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755827.1994791667,
            "unit": "ns",
            "range": "± 1379.9737792237688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283431.8333333333,
            "unit": "ns",
            "range": "± 7107.254439016487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266694.0512820513,
            "unit": "ns",
            "range": "± 9058.426065645988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240053.30303030304,
            "unit": "ns",
            "range": "± 7416.366089116896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4371915.647058823,
            "unit": "ns",
            "range": "± 84781.99488758003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908604.8125,
            "unit": "ns",
            "range": "± 64923.69329114372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17207.350515463917,
            "unit": "ns",
            "range": "± 1261.8875250429837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83214.48192771085,
            "unit": "ns",
            "range": "± 4128.803560122962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72229.14285714286,
            "unit": "ns",
            "range": "± 997.3780131419086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87278.73958333333,
            "unit": "ns",
            "range": "± 10804.854496932863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4645.305263157895,
            "unit": "ns",
            "range": "± 569.9385012304137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16983.18947368421,
            "unit": "ns",
            "range": "± 1227.6562889171403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442534.84,
            "unit": "ns",
            "range": "± 72471.8599083027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2743753.1818181816,
            "unit": "ns",
            "range": "± 101411.17569033703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283911.544117647,
            "unit": "ns",
            "range": "± 105959.34791236189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5515900.176470588,
            "unit": "ns",
            "range": "± 158442.72484411683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47575.5,
            "unit": "ns",
            "range": "± 2507.624883622354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7941203.6,
            "unit": "ns",
            "range": "± 76243.28683778377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21819911.133333333,
            "unit": "ns",
            "range": "± 356054.13036861736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55529476.64285714,
            "unit": "ns",
            "range": "± 566931.1932945665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106077205.46666667,
            "unit": "ns",
            "range": "± 1576563.9393333877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212529058.57142857,
            "unit": "ns",
            "range": "± 2124096.004503806"
          }
        ]
      }
    ]
  }
}