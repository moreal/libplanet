window.BENCHMARK_DATA = {
  "lastUpdate": 1689917679781,
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
        "date": 1689917666694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8033130.666666667,
            "unit": "ns",
            "range": "± 117068.20845232959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651867.055555556,
            "unit": "ns",
            "range": "± 399811.27084567293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48621001.6,
            "unit": "ns",
            "range": "± 553797.3688939201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101913035.3219178,
            "unit": "ns",
            "range": "± 5038007.367391228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209486772.92857143,
            "unit": "ns",
            "range": "± 2614682.5946865673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56597.59550561798,
            "unit": "ns",
            "range": "± 4191.055401683396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315273.36734693876,
            "unit": "ns",
            "range": "± 23549.040464785794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303564.06666666665,
            "unit": "ns",
            "range": "± 19882.15790675684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295764.734375,
            "unit": "ns",
            "range": "± 13697.317984771415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4182324.7333333334,
            "unit": "ns",
            "range": "± 77134.84610312243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891307.095238095,
            "unit": "ns",
            "range": "± 87065.47168074423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18871.82978723404,
            "unit": "ns",
            "range": "± 2150.5982145425264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103234.23404255319,
            "unit": "ns",
            "range": "± 16953.699470785436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97041.57731958762,
            "unit": "ns",
            "range": "± 12240.23150127876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108637.01041666667,
            "unit": "ns",
            "range": "± 17315.043914709295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5951.863157894737,
            "unit": "ns",
            "range": "± 854.1262128385986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16525.662921348314,
            "unit": "ns",
            "range": "± 975.4730430996524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1803703.2127659575,
            "unit": "ns",
            "range": "± 253410.3922435493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237026.2916666665,
            "unit": "ns",
            "range": "± 362508.9377842883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495103.9693877553,
            "unit": "ns",
            "range": "± 381968.76913583314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6531511.71875,
            "unit": "ns",
            "range": "± 497087.61204593495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418962.214285714,
            "unit": "ns",
            "range": "± 60246.55570165059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394086.1,
            "unit": "ns",
            "range": "± 146527.55459867537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4510560.101449275,
            "unit": "ns",
            "range": "± 217231.4768996525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960267.25,
            "unit": "ns",
            "range": "± 229122.9276227984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7284022.134328358,
            "unit": "ns",
            "range": "± 334694.62767401175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6792138.458705357,
            "unit": "ns",
            "range": "± 39569.192867304395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187622.9830280175,
            "unit": "ns",
            "range": "± 52448.59462949913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399614.306227022,
            "unit": "ns",
            "range": "± 75357.61469424213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3181646.2351953126,
            "unit": "ns",
            "range": "± 253921.55467922115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858489.5826526989,
            "unit": "ns",
            "range": "± 26722.830721682873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858642.3707682291,
            "unit": "ns",
            "range": "± 12600.765867300292"
          }
        ]
      }
    ]
  }
}