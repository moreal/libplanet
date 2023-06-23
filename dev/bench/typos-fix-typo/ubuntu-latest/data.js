window.BENCHMARK_DATA = {
  "lastUpdate": 1687506380000,
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
          "id": "028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a",
          "message": "ci(gh-actions): check typos",
          "timestamp": "2023-06-23T16:31:07+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a"
        },
        "date": 1687506373789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4095101.3636363638,
            "unit": "ns",
            "range": "± 152211.88066762828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4442232.733333333,
            "unit": "ns",
            "range": "± 68539.32729511333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5244756.176470588,
            "unit": "ns",
            "range": "± 104487.06428503203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5476640,
            "unit": "ns",
            "range": "± 152852.96272989834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8526190.644444445,
            "unit": "ns",
            "range": "± 318674.2734706593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9309287.615384616,
            "unit": "ns",
            "range": "± 144568.94519544326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26771719.64285714,
            "unit": "ns",
            "range": "± 354848.14907237916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64962613.571428575,
            "unit": "ns",
            "range": "± 907644.6916683028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131733265.26666667,
            "unit": "ns",
            "range": "± 2136354.516275814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262504442.2142857,
            "unit": "ns",
            "range": "± 2814063.165576018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341842.8695652174,
            "unit": "ns",
            "range": "± 8618.287676923615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324993.693877551,
            "unit": "ns",
            "range": "± 12961.373095027526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285759.1746031746,
            "unit": "ns",
            "range": "± 13104.566996993814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5385516.421052632,
            "unit": "ns",
            "range": "± 115059.16203767897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4993712.333333333,
            "unit": "ns",
            "range": "± 104233.5460475516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24482.297872340427,
            "unit": "ns",
            "range": "± 1697.4438836895301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109639.68085106384,
            "unit": "ns",
            "range": "± 6209.174487081775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87965.97872340426,
            "unit": "ns",
            "range": "± 3150.4198373726927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106704.31958762887,
            "unit": "ns",
            "range": "± 12349.574438135503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5656.0204081632655,
            "unit": "ns",
            "range": "± 827.794688295936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20745.08510638298,
            "unit": "ns",
            "range": "± 1487.7808953871604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56107.23188405797,
            "unit": "ns",
            "range": "± 2726.623586183683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7043266.254464285,
            "unit": "ns",
            "range": "± 39271.089433307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291200.6626302083,
            "unit": "ns",
            "range": "± 6755.222788057884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1647579.255580357,
            "unit": "ns",
            "range": "± 9883.387320907372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3134321.797265625,
            "unit": "ns",
            "range": "± 11300.040555929698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994436.934375,
            "unit": "ns",
            "range": "± 10270.67128039669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924264.9417643229,
            "unit": "ns",
            "range": "± 7412.831977492359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1840412.8101265824,
            "unit": "ns",
            "range": "± 94808.61969090287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3318209.1666666665,
            "unit": "ns",
            "range": "± 121014.53338659956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2814401.5,
            "unit": "ns",
            "range": "± 140015.99437943383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668006.264705882,
            "unit": "ns",
            "range": "± 204881.68867678006"
          }
        ]
      }
    ]
  }
}