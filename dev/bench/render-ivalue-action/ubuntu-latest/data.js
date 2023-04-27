window.BENCHMARK_DATA = {
  "lastUpdate": 1682578576458,
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
      }
    ]
  }
}