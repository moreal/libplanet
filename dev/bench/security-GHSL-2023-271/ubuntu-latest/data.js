window.BENCHMARK_DATA = {
  "lastUpdate": 1704233362881,
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
          "id": "76a4c7cff0f08f0b39b4f234e58fec345a6c3b80",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:57:38+09:00",
          "tree_id": "da2eabc4a2cbae8c2835a7da552df63cf85b46e1",
          "url": "https://github.com/moreal/libplanet/commit/76a4c7cff0f08f0b39b4f234e58fec345a6c3b80"
        },
        "date": 1704233357213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783912.576041667,
            "unit": "ns",
            "range": "± 41624.191944668324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202382.2506510417,
            "unit": "ns",
            "range": "± 2152.964228623245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767501.5984825721,
            "unit": "ns",
            "range": "± 1564.0134239966153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968327.5052083333,
            "unit": "ns",
            "range": "± 26300.950249948342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620511.4805836397,
            "unit": "ns",
            "range": "± 12272.14474102354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569448.5524338942,
            "unit": "ns",
            "range": "± 1812.0548433953104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372693.5555555555,
            "unit": "ns",
            "range": "± 66148.44736554135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504121.8,
            "unit": "ns",
            "range": "± 111004.31107780285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3108248.9565217393,
            "unit": "ns",
            "range": "± 73098.86379198956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3218560.2647058824,
            "unit": "ns",
            "range": "± 155837.66512469124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14024680.265957447,
            "unit": "ns",
            "range": "± 937267.4653188084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39224.721649484534,
            "unit": "ns",
            "range": "± 4561.180285715227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205728.3115942029,
            "unit": "ns",
            "range": "± 9748.914757514058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196819.5,
            "unit": "ns",
            "range": "± 7358.807768072344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170073.75,
            "unit": "ns",
            "range": "± 5364.312030846613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205472.2666666666,
            "unit": "ns",
            "range": "± 30552.8553691717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837080.6153846155,
            "unit": "ns",
            "range": "± 28502.919664888315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15761.469387755102,
            "unit": "ns",
            "range": "± 2706.0349324711715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66289.40816326531,
            "unit": "ns",
            "range": "± 7794.725162076197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59363.12631578947,
            "unit": "ns",
            "range": "± 5654.289699436276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69365.10309278351,
            "unit": "ns",
            "range": "± 13093.875372895827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3427.568181818182,
            "unit": "ns",
            "range": "± 356.94147095652835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11968.79569892473,
            "unit": "ns",
            "range": "± 811.925643938931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5576883.071428572,
            "unit": "ns",
            "range": "± 41277.309493164714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14044651.466666667,
            "unit": "ns",
            "range": "± 78168.99615564314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36911887.833333336,
            "unit": "ns",
            "range": "± 648837.8730297805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74539894,
            "unit": "ns",
            "range": "± 335749.36310816504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152883468.53846154,
            "unit": "ns",
            "range": "± 465056.4572182993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989176.1443298969,
            "unit": "ns",
            "range": "± 88881.29214212603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917238.0461538462,
            "unit": "ns",
            "range": "± 88636.48329578916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648967.855670103,
            "unit": "ns",
            "range": "± 130486.06524931996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12963236.663157895,
            "unit": "ns",
            "range": "± 1054689.9972885207"
          }
        ]
      }
    ]
  }
}