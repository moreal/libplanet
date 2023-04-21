window.BENCHMARK_DATA = {
  "lastUpdate": 1682059660846,
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
        "date": 1682059657566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7571385.142857143,
            "unit": "ns",
            "range": "± 31511.799501522848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19170459.2,
            "unit": "ns",
            "range": "± 109536.28631397516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50028180.428571425,
            "unit": "ns",
            "range": "± 328482.93843029684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98380563.93333334,
            "unit": "ns",
            "range": "± 880594.1475657595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196156710.06666666,
            "unit": "ns",
            "range": "± 927210.5719291652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44714.68918918919,
            "unit": "ns",
            "range": "± 2104.050711181646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376716.01010101,
            "unit": "ns",
            "range": "± 99081.57098783943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2583635.6363636362,
            "unit": "ns",
            "range": "± 94988.22910946948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1362729.2528735632,
            "unit": "ns",
            "range": "± 74068.98845375991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 2637818.03125,
            "unit": "ns",
            "range": "± 79431.71014330054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926424.292410715,
            "unit": "ns",
            "range": "± 21026.01399046992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979971.7526041667,
            "unit": "ns",
            "range": "± 5336.423366670463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345576.421875,
            "unit": "ns",
            "range": "± 671.3752033907571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617741.7566964286,
            "unit": "ns",
            "range": "± 5507.948988464038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815706.3221958706,
            "unit": "ns",
            "range": "± 574.0625578771335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743213.9345703125,
            "unit": "ns",
            "range": "± 498.7028317363131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335026.1724137931,
            "unit": "ns",
            "range": "± 9802.867656489114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265444.54285714286,
            "unit": "ns",
            "range": "± 6775.454859238591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227060.6923076923,
            "unit": "ns",
            "range": "± 2244.9670518968787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5637068.8,
            "unit": "ns",
            "range": "± 18996.32864980569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825156.1428571427,
            "unit": "ns",
            "range": "± 37741.036999851705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16494.57894736842,
            "unit": "ns",
            "range": "± 1163.4140111130687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83384.05128205128,
            "unit": "ns",
            "range": "± 4169.526124301429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71884.25,
            "unit": "ns",
            "range": "± 2118.9016174697986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96161.48979591837,
            "unit": "ns",
            "range": "± 13113.900289737345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4687.618556701031,
            "unit": "ns",
            "range": "± 521.4576014104392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16230.452631578948,
            "unit": "ns",
            "range": "± 1307.814920932321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144871.9285714286,
            "unit": "ns",
            "range": "± 27476.297240920736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376838.1333333333,
            "unit": "ns",
            "range": "± 32793.77168188816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212381,
            "unit": "ns",
            "range": "± 48487.69646002994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3405158,
            "unit": "ns",
            "range": "± 59337.5110641297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4427570.05,
            "unit": "ns",
            "range": "± 97059.67110113511"
          }
        ]
      }
    ]
  }
}