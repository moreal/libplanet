window.BENCHMARK_DATA = {
  "lastUpdate": 1689917560245,
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
          "id": "b5a3c87a039640743dfbf4ba54fe3cecdf4db773",
          "message": "ci(gh-actions): run typos with configuration file",
          "timestamp": "2023-07-21T14:16:07+09:00",
          "tree_id": "99f2268ffee0f90f6148d9fcebf01dd394876f27",
          "url": "https://github.com/moreal/libplanet/commit/b5a3c87a039640743dfbf4ba54fe3cecdf4db773"
        },
        "date": 1689917541257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371074.7474747475,
            "unit": "ns",
            "range": "± 130732.30347595601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2467337.1428571427,
            "unit": "ns",
            "range": "± 118834.55454554147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1834032.558139535,
            "unit": "ns",
            "range": "± 225984.30161087608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4746423.0337078655,
            "unit": "ns",
            "range": "± 355786.17453721893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47338.29787234042,
            "unit": "ns",
            "range": "± 4198.082162821719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6689272,
            "unit": "ns",
            "range": "± 269920.77317582787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18618969.230769232,
            "unit": "ns",
            "range": "± 181794.94118656227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47552435.71428572,
            "unit": "ns",
            "range": "± 618477.1043671493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95591913.33333333,
            "unit": "ns",
            "range": "± 1517763.7670819089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191998464.2857143,
            "unit": "ns",
            "range": "± 2540111.0780094587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4467145.3125,
            "unit": "ns",
            "range": "± 23324.141052906692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391553.8504464286,
            "unit": "ns",
            "range": "± 13009.836937996311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084353.80859375,
            "unit": "ns",
            "range": "± 7347.2142335467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2447095.0520833335,
            "unit": "ns",
            "range": "± 29331.06329498519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761221.1328125,
            "unit": "ns",
            "range": "± 6318.70255837736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 703077.2526041666,
            "unit": "ns",
            "range": "± 7644.974815060809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171978.378378378,
            "unit": "ns",
            "range": "± 107358.9439816397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296081.9444444445,
            "unit": "ns",
            "range": "± 159931.57632570574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3800964.814814815,
            "unit": "ns",
            "range": "± 96551.98163007923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3554238.095238095,
            "unit": "ns",
            "range": "± 84535.53972259523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5790953.125,
            "unit": "ns",
            "range": "± 178650.21145925208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253994.73684210525,
            "unit": "ns",
            "range": "± 10170.570658463419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256720.96774193548,
            "unit": "ns",
            "range": "± 10473.731968272084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234793.75,
            "unit": "ns",
            "range": "± 16262.127862969808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3878660,
            "unit": "ns",
            "range": "± 58431.8626387057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453469.230769231,
            "unit": "ns",
            "range": "± 41146.08901251297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26323.958333333332,
            "unit": "ns",
            "range": "± 3679.46634550709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94503.09278350516,
            "unit": "ns",
            "range": "± 8653.761869945243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79476.28865979382,
            "unit": "ns",
            "range": "± 7685.182891933946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105790.72164948453,
            "unit": "ns",
            "range": "± 17753.67968005874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6721.649484536082,
            "unit": "ns",
            "range": "± 1454.7498928885013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22802,
            "unit": "ns",
            "range": "± 2604.909118405384"
          }
        ]
      }
    ]
  }
}