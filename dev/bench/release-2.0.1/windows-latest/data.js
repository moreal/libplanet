window.BENCHMARK_DATA = {
  "lastUpdate": 1687419403600,
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
          "id": "6e58739e3aeeb89b0e3bef6244197f8b68fe0970",
          "message": "Release 2.0.1",
          "timestamp": "2023-06-22T16:13:44+09:00",
          "tree_id": "6cea483aef8aa810fc1a1aec2efecb1c78d25dc6",
          "url": "https://github.com/moreal/libplanet/commit/6e58739e3aeeb89b0e3bef6244197f8b68fe0970"
        },
        "date": 1687419383676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1975565.5555555555,
            "unit": "ns",
            "range": "± 258873.32035430172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3760063.0434782607,
            "unit": "ns",
            "range": "± 344289.89947854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3062562.9032258065,
            "unit": "ns",
            "range": "± 251134.48295156367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7733614.130434782,
            "unit": "ns",
            "range": "± 548095.15047477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79195.6043956044,
            "unit": "ns",
            "range": "± 14417.804672525273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10630224.324324325,
            "unit": "ns",
            "range": "± 359326.59502448724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27079398.80952381,
            "unit": "ns",
            "range": "± 1392152.2837257793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69684393.75,
            "unit": "ns",
            "range": "± 2133607.5040292675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140528280.4878049,
            "unit": "ns",
            "range": "± 5062749.157237573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285984428.8888889,
            "unit": "ns",
            "range": "± 10719091.51146644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6822347.838541667,
            "unit": "ns",
            "range": "± 107532.27928329968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084159.0364583333,
            "unit": "ns",
            "range": "± 25212.825708735767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1573681.9078947369,
            "unit": "ns",
            "range": "± 33650.350251198135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3982297.769803779,
            "unit": "ns",
            "range": "± 147284.42113001962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1134006.1079545454,
            "unit": "ns",
            "range": "± 26942.091982030666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1068192.3549107143,
            "unit": "ns",
            "range": "± 12017.07529970331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4404825,
            "unit": "ns",
            "range": "± 333815.757882288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4689733.333333333,
            "unit": "ns",
            "range": "± 271227.163383949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5701576.923076923,
            "unit": "ns",
            "range": "± 255377.87368013037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5694822.05882353,
            "unit": "ns",
            "range": "± 264004.1682425285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9471289.130434783,
            "unit": "ns",
            "range": "± 746904.8031278814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375756.8181818182,
            "unit": "ns",
            "range": "± 27581.548035933665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355640.42553191487,
            "unit": "ns",
            "range": "± 29661.79005158467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336454.25531914894,
            "unit": "ns",
            "range": "± 26150.12763345409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5617787.777777778,
            "unit": "ns",
            "range": "± 333498.207406458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5023765.492957747,
            "unit": "ns",
            "range": "± 245530.48320954092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35460.82474226804,
            "unit": "ns",
            "range": "± 7904.831812213429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 145853.125,
            "unit": "ns",
            "range": "± 15971.816975535376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138266.29213483146,
            "unit": "ns",
            "range": "± 15068.9999654636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161860,
            "unit": "ns",
            "range": "± 29923.987877705247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10229.62962962963,
            "unit": "ns",
            "range": "± 1662.411234054652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31233.333333333332,
            "unit": "ns",
            "range": "± 3882.269375491089"
          }
        ]
      }
    ]
  }
}