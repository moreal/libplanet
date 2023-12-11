window.BENCHMARK_DATA = {
  "lastUpdate": 1702337155146,
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
          "id": "6f5bdd066834ae1fa6cd68631b4f78d5906b8b05",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:14:05+09:00",
          "tree_id": "8ff2cd2db84ebaeec14e71ddbef72ac765e82998",
          "url": "https://github.com/moreal/libplanet/commit/6f5bdd066834ae1fa6cd68631b4f78d5906b8b05"
        },
        "date": 1702337132116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953300,
            "unit": "ns",
            "range": "± 105627.55225753538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744535.4430379746,
            "unit": "ns",
            "range": "± 90374.185158542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528462.6262626264,
            "unit": "ns",
            "range": "± 122810.27310769839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10877606.593406593,
            "unit": "ns",
            "range": "± 989061.4597016482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33418.03278688525,
            "unit": "ns",
            "range": "± 1504.6049533262112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4916923.076923077,
            "unit": "ns",
            "range": "± 17630.142457646878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12858028.57142857,
            "unit": "ns",
            "range": "± 108961.25231243677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32500392.85714286,
            "unit": "ns",
            "range": "± 239870.0656743009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64841935.71428572,
            "unit": "ns",
            "range": "± 456935.1268668619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128284480,
            "unit": "ns",
            "range": "± 788979.3833989399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3290964.296875,
            "unit": "ns",
            "range": "± 15492.077357063125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070282.0052083333,
            "unit": "ns",
            "range": "± 3717.2891599995523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748758.1315104166,
            "unit": "ns",
            "range": "± 4069.288175158972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911887.4479166667,
            "unit": "ns",
            "range": "± 6595.105499208202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629658.8802083334,
            "unit": "ns",
            "range": "± 2435.587451249679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559177.3995535715,
            "unit": "ns",
            "range": "± 1249.864463332916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129891.1764705884,
            "unit": "ns",
            "range": "± 37815.9037116583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2189724.242424242,
            "unit": "ns",
            "range": "± 59278.405797890635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2717000,
            "unit": "ns",
            "range": "± 41529.00747114553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2751048.9795918367,
            "unit": "ns",
            "range": "± 164334.08845341252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12380378.494623655,
            "unit": "ns",
            "range": "± 1548400.4293245636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164836.66666666666,
            "unit": "ns",
            "range": "± 6945.135272606449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156913.9344262295,
            "unit": "ns",
            "range": "± 6153.509372352366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141257.14285714287,
            "unit": "ns",
            "range": "± 2856.3213104571114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809771.4285714286,
            "unit": "ns",
            "range": "± 48799.518102466616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484271.4285714286,
            "unit": "ns",
            "range": "± 36905.814187999174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10231.91489361702,
            "unit": "ns",
            "range": "± 1178.135283134833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53616.666666666664,
            "unit": "ns",
            "range": "± 2994.6863053441393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45745.76271186441,
            "unit": "ns",
            "range": "± 2031.928083330461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69336.84210526316,
            "unit": "ns",
            "range": "± 10986.965707306426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2891.3978494623657,
            "unit": "ns",
            "range": "± 506.83500316188463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11436.559139784946,
            "unit": "ns",
            "range": "± 1728.1420625377689"
          }
        ]
      }
    ]
  }
}