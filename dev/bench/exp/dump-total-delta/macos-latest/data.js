window.BENCHMARK_DATA = {
  "lastUpdate": 1684849447392,
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
          "id": "f4e785e90fd9e6d9d9089e94f6e4b0946d5fce77",
          "message": "Dump delta key-value pairs when `InvalidBlockStateRootHashException` occurred",
          "timestamp": "2023-05-23T22:26:29+09:00",
          "tree_id": "d72ef679e12f701e565d91a96bb0400ce2530f13",
          "url": "https://github.com/moreal/libplanet/commit/f4e785e90fd9e6d9d9089e94f6e4b0946d5fce77"
        },
        "date": 1684849434653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9050002.875,
            "unit": "ns",
            "range": "± 742427.8089292871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20193485.714285713,
            "unit": "ns",
            "range": "± 472982.8605255314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52225230.46551724,
            "unit": "ns",
            "range": "± 2039094.2525666342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103423914.6,
            "unit": "ns",
            "range": "± 1795499.9719645064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216153999.83333334,
            "unit": "ns",
            "range": "± 3931134.6069919025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72293.74719101124,
            "unit": "ns",
            "range": "± 7466.46777155415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333310.4550561798,
            "unit": "ns",
            "range": "± 28522.042676319234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300184.0705882353,
            "unit": "ns",
            "range": "± 16122.580347648653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293563.1304347826,
            "unit": "ns",
            "range": "± 16599.280751806848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161564.2285714285,
            "unit": "ns",
            "range": "± 125321.86818679559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3761113.7,
            "unit": "ns",
            "range": "± 66220.25624513565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17553.06818181818,
            "unit": "ns",
            "range": "± 2453.639627285385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92794.76041666667,
            "unit": "ns",
            "range": "± 12341.460887461115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104669.90721649484,
            "unit": "ns",
            "range": "± 17783.526694365726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120743.23157894737,
            "unit": "ns",
            "range": "± 21534.636763631406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7264.061224489796,
            "unit": "ns",
            "range": "± 1302.7696512638586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19265.402173913044,
            "unit": "ns",
            "range": "± 4025.0460076813115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675393.5606060605,
            "unit": "ns",
            "range": "± 200883.13199540175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993376.1835443038,
            "unit": "ns",
            "range": "± 153782.62209770232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2648190.1789473686,
            "unit": "ns",
            "range": "± 255256.72818673222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6565003.116279069,
            "unit": "ns",
            "range": "± 407347.7816169652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3576570.935483871,
            "unit": "ns",
            "range": "± 239115.81177896453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3518164.847368421,
            "unit": "ns",
            "range": "± 233273.92432000334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4791000.695876288,
            "unit": "ns",
            "range": "± 299486.8300570452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4673307.03125,
            "unit": "ns",
            "range": "± 386380.54460902576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8140617.184782608,
            "unit": "ns",
            "range": "± 527629.448078398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6856907.026475694,
            "unit": "ns",
            "range": "± 139566.79399827987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2106896.2681884766,
            "unit": "ns",
            "range": "± 64809.19336850258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342366.275111607,
            "unit": "ns",
            "range": "± 16449.976532422694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614618.357872596,
            "unit": "ns",
            "range": "± 32239.987824247895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905352.6398828125,
            "unit": "ns",
            "range": "± 23383.335099222953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811737.9679236779,
            "unit": "ns",
            "range": "± 11029.633740262423"
          }
        ]
      }
    ]
  }
}