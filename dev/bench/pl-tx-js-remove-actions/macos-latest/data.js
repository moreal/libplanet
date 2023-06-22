window.BENCHMARK_DATA = {
  "lastUpdate": 1687400721786,
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
          "id": "83f0c1386a4231b79929d19b5e13a54bec60dd0e",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:00:56+09:00",
          "tree_id": "0a917410dd82fca67ee0369ee8390e01dda737df",
          "url": "https://github.com/moreal/libplanet/commit/83f0c1386a4231b79929d19b5e13a54bec60dd0e"
        },
        "date": 1687400707712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13516983.909090908,
            "unit": "ns",
            "range": "± 2694395.9797947197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32973110.389473684,
            "unit": "ns",
            "range": "± 12255592.79292124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60141452.635416664,
            "unit": "ns",
            "range": "± 3998273.0831845077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121014145.98888889,
            "unit": "ns",
            "range": "± 7569603.574108951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260906485.1527778,
            "unit": "ns",
            "range": "± 12763085.615780706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98788.21276595745,
            "unit": "ns",
            "range": "± 24745.121539785578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 418454.9166666667,
            "unit": "ns",
            "range": "± 76034.86679490731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 434223.7688172043,
            "unit": "ns",
            "range": "± 94911.94559193548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 392874.64285714284,
            "unit": "ns",
            "range": "± 82184.77168623489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5320211.8367346935,
            "unit": "ns",
            "range": "± 726127.2927798028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4650654.393939394,
            "unit": "ns",
            "range": "± 545400.0616703081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31887.89534883721,
            "unit": "ns",
            "range": "± 5359.827703615919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 158324.24210526317,
            "unit": "ns",
            "range": "± 32434.488235195873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143234.51063829788,
            "unit": "ns",
            "range": "± 25263.866474402617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 169265.95698924732,
            "unit": "ns",
            "range": "± 37512.02485607085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9800.575268817205,
            "unit": "ns",
            "range": "± 1319.2195752608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26846.94382022472,
            "unit": "ns",
            "range": "± 3602.4505654281256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2079249.9069767443,
            "unit": "ns",
            "range": "± 452796.1334668793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4356953.785714285,
            "unit": "ns",
            "range": "± 1113749.6767186192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3661799.6170212766,
            "unit": "ns",
            "range": "± 851595.9918407202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10152626.926966293,
            "unit": "ns",
            "range": "± 2930506.262758896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4036962.208791209,
            "unit": "ns",
            "range": "± 534670.5069141288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4141067.5656565656,
            "unit": "ns",
            "range": "± 491272.4057696683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5088255.892473118,
            "unit": "ns",
            "range": "± 554634.1505180505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5133906.208791208,
            "unit": "ns",
            "range": "± 771955.0285855966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8578455.958333334,
            "unit": "ns",
            "range": "± 836511.645957814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7871366.751930147,
            "unit": "ns",
            "range": "± 423959.05544545135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2272838.83984375,
            "unit": "ns",
            "range": "± 37819.13827685297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1557268.8635755565,
            "unit": "ns",
            "range": "± 77291.94049353446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3968082.0797991073,
            "unit": "ns",
            "range": "± 111719.14654220373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011156.3838588169,
            "unit": "ns",
            "range": "± 52906.89871148399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948754.6383120888,
            "unit": "ns",
            "range": "± 20422.702832532184"
          }
        ]
      }
    ]
  }
}