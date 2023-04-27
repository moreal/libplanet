window.BENCHMARK_DATA = {
  "lastUpdate": 1682576582545,
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
      }
    ]
  }
}