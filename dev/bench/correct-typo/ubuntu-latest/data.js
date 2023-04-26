window.BENCHMARK_DATA = {
  "lastUpdate": 1682495621477,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "433fc53db9ec8867e161247622fca7de244846f5",
          "message": "Correct typo\n\n - `IActonEvaluator` -> `IActionEvaluator`",
          "timestamp": "2023-04-26T16:40:01+09:00",
          "tree_id": "15e06d5fc334734cf9bcba5d65cba7026a368e93",
          "url": "https://github.com/moreal/libplanet/commit/433fc53db9ec8867e161247622fca7de244846f5"
        },
        "date": 1682495617843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7512220.076923077,
            "unit": "ns",
            "range": "± 40861.0306230389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20851689.333333332,
            "unit": "ns",
            "range": "± 325890.5064195349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52847356.266666666,
            "unit": "ns",
            "range": "± 685227.4905642095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106002389.33333333,
            "unit": "ns",
            "range": "± 1341076.7964193479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212583538.82352942,
            "unit": "ns",
            "range": "± 4150947.2306178384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49220.62666666666,
            "unit": "ns",
            "range": "± 2360.1498393415927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434421.9069767443,
            "unit": "ns",
            "range": "± 77888.42165569139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738313.8928571427,
            "unit": "ns",
            "range": "± 77015.86086492751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2266417.5324675324,
            "unit": "ns",
            "range": "± 99300.36116031004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5850103.52,
            "unit": "ns",
            "range": "± 376691.18065125175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900345.229352678,
            "unit": "ns",
            "range": "± 25496.426836294148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841215.787890625,
            "unit": "ns",
            "range": "± 4244.307108315325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357476.9030412945,
            "unit": "ns",
            "range": "± 5084.826933073158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582493.552864583,
            "unit": "ns",
            "range": "± 4475.686457232897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855204.9629557292,
            "unit": "ns",
            "range": "± 1046.6990953615073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825979.5387369791,
            "unit": "ns",
            "range": "± 1162.726832084334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291306.0227272727,
            "unit": "ns",
            "range": "± 9982.73769480058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282477.60869565216,
            "unit": "ns",
            "range": "± 6974.523077465782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233595.7857142857,
            "unit": "ns",
            "range": "± 2632.5663459700436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4339896.133333334,
            "unit": "ns",
            "range": "± 58037.76175396088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3966444.533333333,
            "unit": "ns",
            "range": "± 66867.39285638048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19376.77659574468,
            "unit": "ns",
            "range": "± 1378.9411564656184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87614.77966101695,
            "unit": "ns",
            "range": "± 3601.4906160519467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79826.18,
            "unit": "ns",
            "range": "± 5349.173085117498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94251.06315789474,
            "unit": "ns",
            "range": "± 10236.394164222591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5776.408602150537,
            "unit": "ns",
            "range": "± 654.8070282709439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19074.228260869564,
            "unit": "ns",
            "range": "± 1455.5212208166158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506484.222222222,
            "unit": "ns",
            "range": "± 72686.22174117001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711658.5789473685,
            "unit": "ns",
            "range": "± 79334.68559723966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229772.411764706,
            "unit": "ns",
            "range": "± 82464.87884097906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4441731.483870967,
            "unit": "ns",
            "range": "± 132040.70603513927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7258280.347826087,
            "unit": "ns",
            "range": "± 166179.67984099418"
          }
        ]
      }
    ]
  }
}