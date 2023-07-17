window.BENCHMARK_DATA = {
  "lastUpdate": 1689589881012,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/moreal/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589875231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357876.1666666667,
            "unit": "ns",
            "range": "± 11789.213368886953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352373.27777777775,
            "unit": "ns",
            "range": "± 11777.619731898561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322496.8,
            "unit": "ns",
            "range": "± 9332.438534118693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5687584.923076923,
            "unit": "ns",
            "range": "± 59546.32354654867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5048881.533333333,
            "unit": "ns",
            "range": "± 47837.17012931422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27965.510869565216,
            "unit": "ns",
            "range": "± 2521.978973928113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119219.40425531915,
            "unit": "ns",
            "range": "± 7072.407227059118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111354.375,
            "unit": "ns",
            "range": "± 7904.087237492685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129844.11224489796,
            "unit": "ns",
            "range": "± 14568.857244123245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8063.408163265306,
            "unit": "ns",
            "range": "± 1304.9208834629105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25965.25773195876,
            "unit": "ns",
            "range": "± 2763.060178039131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1935062.1855670102,
            "unit": "ns",
            "range": "± 149819.64912738482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3629228.922077922,
            "unit": "ns",
            "range": "± 185900.78308559099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2390286.7319587627,
            "unit": "ns",
            "range": "± 200693.0399044622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6342092.021276596,
            "unit": "ns",
            "range": "± 246318.53410436987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7541358.5796875,
            "unit": "ns",
            "range": "± 52123.387412754746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2333742.20625,
            "unit": "ns",
            "range": "± 1489.1727488383708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1686446.8852864583,
            "unit": "ns",
            "range": "± 3553.331783378147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211941.5633370536,
            "unit": "ns",
            "range": "± 6568.827362692997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027778.164207176,
            "unit": "ns",
            "range": "± 28201.39370777375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927062.8901742789,
            "unit": "ns",
            "range": "± 560.8460535541578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4430839.714285715,
            "unit": "ns",
            "range": "± 42158.24182844837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4666019.125,
            "unit": "ns",
            "range": "± 121253.73652846385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5605888,
            "unit": "ns",
            "range": "± 119950.25007109258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5246159.960784313,
            "unit": "ns",
            "range": "± 214070.2497721681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8134418.4,
            "unit": "ns",
            "range": "± 216628.19218652035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10402874.214285715,
            "unit": "ns",
            "range": "± 50693.189630862136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27593430.55,
            "unit": "ns",
            "range": "± 567424.136877992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68106084.13333334,
            "unit": "ns",
            "range": "± 250466.61411364266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139538505,
            "unit": "ns",
            "range": "± 394863.76389006444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280161345.2,
            "unit": "ns",
            "range": "± 1179567.3521772537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62819.239130434784,
            "unit": "ns",
            "range": "± 5919.416195541112"
          }
        ]
      }
    ]
  }
}