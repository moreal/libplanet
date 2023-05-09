window.BENCHMARK_DATA = {
  "lastUpdate": 1683674110008,
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
          "id": "53ef6ab431fdd08fa81d755a608a0d37c17c772b",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:09:22+09:00",
          "tree_id": "9eddb5b488305f39700f6a54e6e5de70e644d6ce",
          "url": "https://github.com/moreal/libplanet/commit/53ef6ab431fdd08fa81d755a608a0d37c17c772b"
        },
        "date": 1682576578256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289206.0909090909,
            "unit": "ns",
            "range": "± 10718.852992737397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274044,
            "unit": "ns",
            "range": "± 9808.609537034288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232468.64285714287,
            "unit": "ns",
            "range": "± 2138.477229861792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4285265.285714285,
            "unit": "ns",
            "range": "± 36614.50026009782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829039.5384615385,
            "unit": "ns",
            "range": "± 30669.634071872526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18477.827956989247,
            "unit": "ns",
            "range": "± 1192.8251049290677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86493.14457831325,
            "unit": "ns",
            "range": "± 4608.128986837282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76524.85714285714,
            "unit": "ns",
            "range": "± 3071.7141319356742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94887.125,
            "unit": "ns",
            "range": "± 11845.63778936542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5840.329896907217,
            "unit": "ns",
            "range": "± 622.1304244564512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18797.25,
            "unit": "ns",
            "range": "± 1430.7630763928844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285032.076923077,
            "unit": "ns",
            "range": "± 49647.133338628824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497956.027777778,
            "unit": "ns",
            "range": "± 114935.19026812734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4163786.6,
            "unit": "ns",
            "range": "± 76389.0587601205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4397647.666666667,
            "unit": "ns",
            "range": "± 122165.88071772929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6719051.9,
            "unit": "ns",
            "range": "± 132819.50564538408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5875972.756696428,
            "unit": "ns",
            "range": "± 21043.22195482829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830479.0473958333,
            "unit": "ns",
            "range": "± 5952.590811076149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321227.90859375,
            "unit": "ns",
            "range": "± 2573.78453957557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615669.11875,
            "unit": "ns",
            "range": "± 4526.124372867609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803191.2103794643,
            "unit": "ns",
            "range": "± 1049.5439362685227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761861.0293619792,
            "unit": "ns",
            "range": "± 1324.5730619476328"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48743.22352941176,
            "unit": "ns",
            "range": "± 2218.9800068653944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7777606.2,
            "unit": "ns",
            "range": "± 77422.32108488758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21014692.388888888,
            "unit": "ns",
            "range": "± 442283.90316337324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52016448.2,
            "unit": "ns",
            "range": "± 890632.109827958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103282662.57142857,
            "unit": "ns",
            "range": "± 803684.1433595964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208830225.53333333,
            "unit": "ns",
            "range": "± 3226252.8372208667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403212.412371134,
            "unit": "ns",
            "range": "± 96853.94187251672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2607397.736842105,
            "unit": "ns",
            "range": "± 56906.42827761894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2237433.7023809524,
            "unit": "ns",
            "range": "± 119998.71581419083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5290230.714285715,
            "unit": "ns",
            "range": "± 76411.11627387587"
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
          "id": "98cac93affebc1336582fde9fbccd76913ed7362",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-04-27T15:42:38+09:00",
          "tree_id": "fc7da80e9609ddef134fa5993eb311980d494355",
          "url": "https://github.com/moreal/libplanet/commit/98cac93affebc1336582fde9fbccd76913ed7362"
        },
        "date": 1682578572577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287787.8947368421,
            "unit": "ns",
            "range": "± 6183.061394691656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274274.85714285716,
            "unit": "ns",
            "range": "± 6211.7886577516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241771.47727272726,
            "unit": "ns",
            "range": "± 9046.89189976221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4304264.666666667,
            "unit": "ns",
            "range": "± 28254.884959865576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3954666.0714285714,
            "unit": "ns",
            "range": "± 24924.57420194679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19553.56842105263,
            "unit": "ns",
            "range": "± 1380.8762300879646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88692.35714285714,
            "unit": "ns",
            "range": "± 4055.8037607806837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76344.36734693877,
            "unit": "ns",
            "range": "± 3049.2744061352637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93806.67346938775,
            "unit": "ns",
            "range": "± 11247.518434918211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5960.836956521739,
            "unit": "ns",
            "range": "± 517.3739540115415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18652.010416666668,
            "unit": "ns",
            "range": "± 1437.7662462437067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3227757.24,
            "unit": "ns",
            "range": "± 54017.09579713321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452010.0512820515,
            "unit": "ns",
            "range": "± 108301.59460043651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4272415,
            "unit": "ns",
            "range": "± 83886.68035073666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4280196.3125,
            "unit": "ns",
            "range": "± 117805.45240282675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912186.185185186,
            "unit": "ns",
            "range": "± 191548.75135067536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5840171.264322917,
            "unit": "ns",
            "range": "± 7678.084601817287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856557.9574819712,
            "unit": "ns",
            "range": "± 1518.7813507128717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356883.3033854167,
            "unit": "ns",
            "range": "± 825.4176249281503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545102.79765625,
            "unit": "ns",
            "range": "± 1353.9043244125162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793233.2483723959,
            "unit": "ns",
            "range": "± 526.6750549406485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724637.4305826823,
            "unit": "ns",
            "range": "± 659.4309698658677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44979.53191489362,
            "unit": "ns",
            "range": "± 2915.0164488077853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604553.357142857,
            "unit": "ns",
            "range": "± 44193.127719498065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19418943.4,
            "unit": "ns",
            "range": "± 126447.68244150847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49691812.6,
            "unit": "ns",
            "range": "± 143174.4081595191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99923822.66666667,
            "unit": "ns",
            "range": "± 504294.9741042533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199380429.26666668,
            "unit": "ns",
            "range": "± 1244548.294595012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374437.5,
            "unit": "ns",
            "range": "± 95548.23207144624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671489.2,
            "unit": "ns",
            "range": "± 79452.0262762813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195448.3882352943,
            "unit": "ns",
            "range": "± 109477.56532962467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5525944.391304348,
            "unit": "ns",
            "range": "± 135119.43143609157"
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
          "id": "1e60db677f4e3d2555aefeb8b6ac6cf38727040e",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T10:53:15+09:00",
          "tree_id": "39ffbf1e20076010590fa93da018b9425e423693",
          "url": "https://github.com/moreal/libplanet/commit/1e60db677f4e3d2555aefeb8b6ac6cf38727040e"
        },
        "date": 1682993194224,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288598.73333333334,
            "unit": "ns",
            "range": "± 8415.90679414976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284628.3783783784,
            "unit": "ns",
            "range": "± 9515.836932163114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252039.33333333334,
            "unit": "ns",
            "range": "± 4415.395171874146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4226796.2,
            "unit": "ns",
            "range": "± 24858.623804570172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860020.785714286,
            "unit": "ns",
            "range": "± 22712.383393472555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19875.791666666668,
            "unit": "ns",
            "range": "± 1264.440861797204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91625.53684210527,
            "unit": "ns",
            "range": "± 6299.084875802547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81662.74418604652,
            "unit": "ns",
            "range": "± 4421.64392156169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89496.29629629629,
            "unit": "ns",
            "range": "± 5413.778974626791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6587.030612244898,
            "unit": "ns",
            "range": "± 741.8682525946698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19824.717391304348,
            "unit": "ns",
            "range": "± 1325.1691438884316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3252854.0833333335,
            "unit": "ns",
            "range": "± 46212.89509031855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473987.6129032257,
            "unit": "ns",
            "range": "± 105958.22536977405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4273841.642857143,
            "unit": "ns",
            "range": "± 55302.801547629424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4311208.279069767,
            "unit": "ns",
            "range": "± 157057.6012263268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6769472.689655173,
            "unit": "ns",
            "range": "± 184388.33282448514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6174716.771205357,
            "unit": "ns",
            "range": "± 12502.945252792362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016610.812779018,
            "unit": "ns",
            "range": "± 791.2158500975302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345261.0791766827,
            "unit": "ns",
            "range": "± 916.2123696825083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609985.880859375,
            "unit": "ns",
            "range": "± 2900.2731330721344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804571.5345052084,
            "unit": "ns",
            "range": "± 600.1376050371315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729083.2665364583,
            "unit": "ns",
            "range": "± 613.0499028357931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47941.65625,
            "unit": "ns",
            "range": "± 2775.7093766729254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7624786.066666666,
            "unit": "ns",
            "range": "± 45742.52224988202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651312.533333335,
            "unit": "ns",
            "range": "± 70988.45533492115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50069015.5,
            "unit": "ns",
            "range": "± 79980.17684088976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101023038.46666667,
            "unit": "ns",
            "range": "± 280183.9421884606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200451556.7,
            "unit": "ns",
            "range": "± 757454.933226978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412458.1020408163,
            "unit": "ns",
            "range": "± 115763.59040017719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631633.657142857,
            "unit": "ns",
            "range": "± 84414.26710502787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2249575.3139534886,
            "unit": "ns",
            "range": "± 121755.58446168355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5425328.952380952,
            "unit": "ns",
            "range": "± 198110.20149942813"
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
          "id": "e033d84392389c1bf12905d0a42261511d4266c1",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T13:57:25+09:00",
          "tree_id": "b8d0cd7efb82b11649414f5b3d9d199549cabc34",
          "url": "https://github.com/moreal/libplanet/commit/e033d84392389c1bf12905d0a42261511d4266c1"
        },
        "date": 1683004535067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328385.32608695654,
            "unit": "ns",
            "range": "± 35321.2672874799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311986.5816326531,
            "unit": "ns",
            "range": "± 26470.959984743393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274048.0303030303,
            "unit": "ns",
            "range": "± 21128.752173212488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4779531.67,
            "unit": "ns",
            "range": "± 312692.5291282272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4272213.65,
            "unit": "ns",
            "range": "± 295522.26280457934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23310.627659574468,
            "unit": "ns",
            "range": "± 2233.7658543656603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105821.97938144329,
            "unit": "ns",
            "range": "± 8099.53262923673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99829.16842105263,
            "unit": "ns",
            "range": "± 13655.6802674593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109251.78571428571,
            "unit": "ns",
            "range": "± 17982.83389662509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5985.103092783505,
            "unit": "ns",
            "range": "± 927.9779146588033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19938.227272727272,
            "unit": "ns",
            "range": "± 2116.1842787849037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3724414.8,
            "unit": "ns",
            "range": "± 302341.8861351793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815003.9693877553,
            "unit": "ns",
            "range": "± 440084.9612557949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4413218.18,
            "unit": "ns",
            "range": "± 365390.06899571663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4778546.46,
            "unit": "ns",
            "range": "± 430606.00859408797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7950375.898989899,
            "unit": "ns",
            "range": "± 650676.695946918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6497261.503348215,
            "unit": "ns",
            "range": "± 209481.26561060795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2081756.2071368243,
            "unit": "ns",
            "range": "± 69836.28990261572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426373.8503069195,
            "unit": "ns",
            "range": "± 24686.89901924081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2986395.8020833335,
            "unit": "ns",
            "range": "± 70971.38262686713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922109.7875651042,
            "unit": "ns",
            "range": "± 15515.303534737806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856719.727734375,
            "unit": "ns",
            "range": "± 11975.52344834873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55744.82795698925,
            "unit": "ns",
            "range": "± 6477.408831140091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9216040.525773196,
            "unit": "ns",
            "range": "± 533364.1527347327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23970729.95959596,
            "unit": "ns",
            "range": "± 1430789.3913565078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60673513.20754717,
            "unit": "ns",
            "range": "± 2532824.857289366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122098058.13580246,
            "unit": "ns",
            "range": "± 6422613.238108108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251434910.875,
            "unit": "ns",
            "range": "± 7789844.477030324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730590.935483871,
            "unit": "ns",
            "range": "± 165154.63857876576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228065.84,
            "unit": "ns",
            "range": "± 224229.43505081235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2803189.433333333,
            "unit": "ns",
            "range": "± 175297.5284272364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6574194.981481481,
            "unit": "ns",
            "range": "± 275210.3680688367"
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
          "id": "1447665a8b5020bce565ac55b4d776b3b8680177",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T14:43:06+09:00",
          "tree_id": "f5172138255624b1864b827c3d26c9d9ba86f7be",
          "url": "https://github.com/moreal/libplanet/commit/1447665a8b5020bce565ac55b4d776b3b8680177"
        },
        "date": 1683007035993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294398.22222222225,
            "unit": "ns",
            "range": "± 9521.015281730699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278814.9411764706,
            "unit": "ns",
            "range": "± 5178.239197239109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239445.66666666666,
            "unit": "ns",
            "range": "± 5670.177134211358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4388197.266666667,
            "unit": "ns",
            "range": "± 69057.40867719788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3975252.5714285714,
            "unit": "ns",
            "range": "± 37214.85353315939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20828.489130434784,
            "unit": "ns",
            "range": "± 1364.5236297493313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92891.66666666667,
            "unit": "ns",
            "range": "± 6786.856214565988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81596.67021276595,
            "unit": "ns",
            "range": "± 4817.286798019399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105307.36082474227,
            "unit": "ns",
            "range": "± 14587.830363429626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6734.724489795918,
            "unit": "ns",
            "range": "± 924.4950450164922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21072.301075268817,
            "unit": "ns",
            "range": "± 2037.7003010904348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3525163.846153846,
            "unit": "ns",
            "range": "± 82813.45974209378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3697579.592592593,
            "unit": "ns",
            "range": "± 89384.23477551599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185251.466666667,
            "unit": "ns",
            "range": "± 71665.4369412547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4637938.9,
            "unit": "ns",
            "range": "± 106760.8468744881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6833679.791666667,
            "unit": "ns",
            "range": "± 176297.22630755516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6090347.0546875,
            "unit": "ns",
            "range": "± 19847.62843228916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845017.919921875,
            "unit": "ns",
            "range": "± 1027.634968117508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373777.1748697916,
            "unit": "ns",
            "range": "± 2708.624795131348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619511.534895833,
            "unit": "ns",
            "range": "± 1479.7233476603346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845138.6083333333,
            "unit": "ns",
            "range": "± 327.2976220450147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756540.5382161458,
            "unit": "ns",
            "range": "± 316.3289744121129"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49032.585106382976,
            "unit": "ns",
            "range": "± 3469.01066560127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7918814.4,
            "unit": "ns",
            "range": "± 137741.92721991782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21580374.2,
            "unit": "ns",
            "range": "± 279956.311927721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54422598.4,
            "unit": "ns",
            "range": "± 598612.5248338623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109098056.46666667,
            "unit": "ns",
            "range": "± 734652.4124117538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218330121.2857143,
            "unit": "ns",
            "range": "± 1936383.051407341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475390.8979591837,
            "unit": "ns",
            "range": "± 110682.82833864079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678640.304347826,
            "unit": "ns",
            "range": "± 67624.60123722779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319630.323076923,
            "unit": "ns",
            "range": "± 107940.51486873854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5776123.31,
            "unit": "ns",
            "range": "± 367222.87954718067"
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
          "id": "2fa17749aa0d86ad51c61a50ecc4eae0604f3440",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-02T18:54:49+09:00",
          "tree_id": "f922c18117eeaff4f16a0e5f5e7074e9f1b46a10",
          "url": "https://github.com/moreal/libplanet/commit/2fa17749aa0d86ad51c61a50ecc4eae0604f3440"
        },
        "date": 1683022175761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304399.6724137931,
            "unit": "ns",
            "range": "± 13207.312549702965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294019,
            "unit": "ns",
            "range": "± 13653.929614543898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260529.32098765433,
            "unit": "ns",
            "range": "± 13617.314123779293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433519.6,
            "unit": "ns",
            "range": "± 48815.401456917265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010430.466666667,
            "unit": "ns",
            "range": "± 58857.05230819433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22603.926315789475,
            "unit": "ns",
            "range": "± 1986.8186868742903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108227.09677419355,
            "unit": "ns",
            "range": "± 8963.998337631188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91946.42268041238,
            "unit": "ns",
            "range": "± 8954.024511631453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112490.30526315789,
            "unit": "ns",
            "range": "± 12593.623710901504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8091.907216494846,
            "unit": "ns",
            "range": "± 1238.1272070691605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24181.75257731959,
            "unit": "ns",
            "range": "± 2811.8879557415394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3688009.8,
            "unit": "ns",
            "range": "± 50756.11242739989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3812758.466666667,
            "unit": "ns",
            "range": "± 68521.12238350477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4350267.88,
            "unit": "ns",
            "range": "± 114203.3151004967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4845264.533333333,
            "unit": "ns",
            "range": "± 83976.86938749152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7020709.444444444,
            "unit": "ns",
            "range": "± 196677.5082360683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6166661.880729167,
            "unit": "ns",
            "range": "± 32679.65489385629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905036.7682291667,
            "unit": "ns",
            "range": "± 1964.2582403406516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363410.207421875,
            "unit": "ns",
            "range": "± 3387.0228075412297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644585.9866071427,
            "unit": "ns",
            "range": "± 2932.471797053148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846464.6498697917,
            "unit": "ns",
            "range": "± 1310.7677692979319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775136.199358259,
            "unit": "ns",
            "range": "± 469.5805054278401"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56477.8125,
            "unit": "ns",
            "range": "± 5400.448726604504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8024342.923076923,
            "unit": "ns",
            "range": "± 117079.29968363432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21967162.4,
            "unit": "ns",
            "range": "± 241605.05114540018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56331921.35714286,
            "unit": "ns",
            "range": "± 373588.9612340541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112285381.64285715,
            "unit": "ns",
            "range": "± 344738.2949107041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226166091.66666666,
            "unit": "ns",
            "range": "± 692946.9918407145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533208.84375,
            "unit": "ns",
            "range": "± 102058.60789218673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764156.7804878047,
            "unit": "ns",
            "range": "± 98424.40157616205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2401497.4571428574,
            "unit": "ns",
            "range": "± 110196.05118134635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6011736.17,
            "unit": "ns",
            "range": "± 374345.92206002545"
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
          "id": "02b13e9b49919bfc718ca5202cf29d25bc336381",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-09T22:47:59+09:00",
          "tree_id": "4d7accbfaf9751cd83e885833854ee4761b91c67",
          "url": "https://github.com/moreal/libplanet/commit/02b13e9b49919bfc718ca5202cf29d25bc336381"
        },
        "date": 1683641354646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 431578.08247422683,
            "unit": "ns",
            "range": "± 72991.67897705163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397695.15625,
            "unit": "ns",
            "range": "± 64231.194314769244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359618.44444444444,
            "unit": "ns",
            "range": "± 76143.11155977628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5807485.3877551025,
            "unit": "ns",
            "range": "± 417990.987018369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5230844.806122449,
            "unit": "ns",
            "range": "± 411676.2302772305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24665.489583333332,
            "unit": "ns",
            "range": "± 3342.860303754356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122664.56043956045,
            "unit": "ns",
            "range": "± 18207.493765668627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109426.91304347826,
            "unit": "ns",
            "range": "± 21814.088891543914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124086.67021276595,
            "unit": "ns",
            "range": "± 22138.02119955635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7891.795698924731,
            "unit": "ns",
            "range": "± 1289.7209721750885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22733.447916666668,
            "unit": "ns",
            "range": "± 3670.9002792798206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4572721.47368421,
            "unit": "ns",
            "range": "± 507451.4035180125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4704302.35106383,
            "unit": "ns",
            "range": "± 292351.65836824046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6039729.436170213,
            "unit": "ns",
            "range": "± 457087.2700538967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5697151.574468086,
            "unit": "ns",
            "range": "± 423035.34567002923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9903415.113636363,
            "unit": "ns",
            "range": "± 594762.3459557149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8486290.133049242,
            "unit": "ns",
            "range": "± 263275.5044174854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2459722.092548077,
            "unit": "ns",
            "range": "± 34966.24378722415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1835772.8755326704,
            "unit": "ns",
            "range": "± 39791.83712418796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3459722.9736842103,
            "unit": "ns",
            "range": "± 76498.61959953407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1157350.8618539663,
            "unit": "ns",
            "range": "± 30892.513752673447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1027061.1735026041,
            "unit": "ns",
            "range": "± 21331.99435577789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64973.489130434784,
            "unit": "ns",
            "range": "± 13538.360366656772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10922602.391304348,
            "unit": "ns",
            "range": "± 831280.9580548916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28996593.833333332,
            "unit": "ns",
            "range": "± 1904373.277112235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73969441.47727273,
            "unit": "ns",
            "range": "± 2745042.4634986636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146081531.58333334,
            "unit": "ns",
            "range": "± 5704412.899959751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290777380.3181818,
            "unit": "ns",
            "range": "± 10821851.33690445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843485.5154639175,
            "unit": "ns",
            "range": "± 212937.31671986598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3781888.1958762887,
            "unit": "ns",
            "range": "± 400172.4492713433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2999564.7604166665,
            "unit": "ns",
            "range": "± 359204.9456535552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8222076.627659574,
            "unit": "ns",
            "range": "± 938008.8722514577"
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
          "id": "11d1d41bba7727ae4b91c9577e4db8dd66f6ddc8",
          "message": "Render `IValue` action instead of `IAction`",
          "timestamp": "2023-05-10T08:01:58+09:00",
          "tree_id": "5453471ad7ff26e124e605e0ab09467dfa7d75d1",
          "url": "https://github.com/moreal/libplanet/commit/11d1d41bba7727ae4b91c9577e4db8dd66f6ddc8"
        },
        "date": 1683674105477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3320768.6785714286,
            "unit": "ns",
            "range": "± 95197.39880629853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495455.6,
            "unit": "ns",
            "range": "± 47760.31717231366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4401510.866666666,
            "unit": "ns",
            "range": "± 81063.67374025598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4331852.875,
            "unit": "ns",
            "range": "± 82501.91177815215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6896478.130434782,
            "unit": "ns",
            "range": "± 147688.58392032643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286094.8703703704,
            "unit": "ns",
            "range": "± 11977.99807043447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268100.71428571426,
            "unit": "ns",
            "range": "± 12907.763442076423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242827.8,
            "unit": "ns",
            "range": "± 13479.352816124852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241503.066666666,
            "unit": "ns",
            "range": "± 44709.73377795084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3872008.3333333335,
            "unit": "ns",
            "range": "± 57895.92657971552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19525.105263157893,
            "unit": "ns",
            "range": "± 2271.0268999488217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89232.79569892473,
            "unit": "ns",
            "range": "± 5838.025856696729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71708.25531914894,
            "unit": "ns",
            "range": "± 2614.3617100138054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92739.05154639175,
            "unit": "ns",
            "range": "± 11489.550384997607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5199.966292134832,
            "unit": "ns",
            "range": "± 782.7544815562046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19804.127659574468,
            "unit": "ns",
            "range": "± 2079.723954149512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6223233.1984375,
            "unit": "ns",
            "range": "± 24639.135983515476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852873.1684570312,
            "unit": "ns",
            "range": "± 2956.035105421385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342500.1481770833,
            "unit": "ns",
            "range": "± 1834.7143361580047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2749590.8716145833,
            "unit": "ns",
            "range": "± 6972.009357998552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807838.6958007812,
            "unit": "ns",
            "range": "± 4956.243357783966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719675.4618443081,
            "unit": "ns",
            "range": "± 854.4301932553751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7544154,
            "unit": "ns",
            "range": "± 62073.43408645694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19631134.866666667,
            "unit": "ns",
            "range": "± 59625.4404103132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50932768.833333336,
            "unit": "ns",
            "range": "± 155039.55245375488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101023214,
            "unit": "ns",
            "range": "± 1021199.9603478743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197999174.64285713,
            "unit": "ns",
            "range": "± 1459037.0041384045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348946.852631579,
            "unit": "ns",
            "range": "± 86209.83354150873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638163.2558139535,
            "unit": "ns",
            "range": "± 97625.43933005056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2194445.195402299,
            "unit": "ns",
            "range": "± 119408.97980079231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5362120.2,
            "unit": "ns",
            "range": "± 155298.93756289544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46084.63440860215,
            "unit": "ns",
            "range": "± 2722.2714132684914"
          }
        ]
      }
    ]
  }
}