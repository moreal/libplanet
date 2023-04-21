window.BENCHMARK_DATA = {
  "lastUpdate": 1682059989022,
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
          "id": "7375a965f2fe34f84c2ce388253a15f1ff091db2",
          "message": "WIP: Do not instantiate custom actions",
          "timestamp": "2023-04-19T16:41:30+09:00",
          "tree_id": "a8101dde6caefcb4042801ab4d0c778d070040db",
          "url": "https://github.com/moreal/libplanet/commit/7375a965f2fe34f84c2ce388253a15f1ff091db2"
        },
        "date": 1682059973214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407467,
            "unit": "ns",
            "range": "± 134550.6558921587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2511184.090909091,
            "unit": "ns",
            "range": "± 93216.65921372792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1444831.5789473683,
            "unit": "ns",
            "range": "± 100953.4001020335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 2735075,
            "unit": "ns",
            "range": "± 166698.72623473412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50907.44680851064,
            "unit": "ns",
            "range": "± 3967.102335206449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7219386.666666667,
            "unit": "ns",
            "range": "± 131842.6435819104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19727550,
            "unit": "ns",
            "range": "± 204918.45563916018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49763320,
            "unit": "ns",
            "range": "± 525421.6921401595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100383186.66666667,
            "unit": "ns",
            "range": "± 1617149.822932162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198344986.66666666,
            "unit": "ns",
            "range": "± 2737495.5558650596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4788214.0625,
            "unit": "ns",
            "range": "± 18983.784940576843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523999.9348958333,
            "unit": "ns",
            "range": "± 5215.779472957998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1174253.0348557692,
            "unit": "ns",
            "range": "± 2982.1585449631457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657625.78125,
            "unit": "ns",
            "range": "± 10644.077612589577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814937.8278459822,
            "unit": "ns",
            "range": "± 2746.2127869071437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772884.7005208334,
            "unit": "ns",
            "range": "± 2547.5696986800067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3146500,
            "unit": "ns",
            "range": "± 76891.12136946987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3405257.1428571427,
            "unit": "ns",
            "range": "± 154600.77276680144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3948519.4444444445,
            "unit": "ns",
            "range": "± 128378.87191422214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3471006.6666666665,
            "unit": "ns",
            "range": "± 49441.73290228562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4048426.6666666665,
            "unit": "ns",
            "range": "± 64904.84757007937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313078.125,
            "unit": "ns",
            "range": "± 9708.750106426278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259671.21212121213,
            "unit": "ns",
            "range": "± 12252.695341170574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215288.46153846153,
            "unit": "ns",
            "range": "± 5243.458928842825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5307766.666666667,
            "unit": "ns",
            "range": "± 53492.40104628852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641685.714285714,
            "unit": "ns",
            "range": "± 42054.522433893566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21686.458333333332,
            "unit": "ns",
            "range": "± 2209.6734596418573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93784.84848484848,
            "unit": "ns",
            "range": "± 7038.586993464242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86687.75510204081,
            "unit": "ns",
            "range": "± 8529.829590714175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119731.63265306123,
            "unit": "ns",
            "range": "± 15384.331277418456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7664.583333333333,
            "unit": "ns",
            "range": "± 1091.5926719264419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22622.222222222223,
            "unit": "ns",
            "range": "± 2364.039933515556"
          }
        ]
      }
    ]
  }
}