window.BENCHMARK_DATA = {
  "lastUpdate": 1682495025074,
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
          "id": "86475721b9860baa7c8342a30875d8ad6d1453b8",
          "message": "Update return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`\n\n[skip changelog]",
          "timestamp": "2023-04-26T16:23:34+09:00",
          "tree_id": "1945ee60a9b3379845453058ab751f727d04b011",
          "url": "https://github.com/moreal/libplanet/commit/86475721b9860baa7c8342a30875d8ad6d1453b8"
        },
        "date": 1682495015648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10960469.75,
            "unit": "ns",
            "range": "± 2186115.763507422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23530853.916666668,
            "unit": "ns",
            "range": "± 1152851.2797126607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59470703.40909091,
            "unit": "ns",
            "range": "± 4161655.597864803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109418909.85294117,
            "unit": "ns",
            "range": "± 3426877.190129663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229483632.7222222,
            "unit": "ns",
            "range": "± 9528933.29535237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76208.1724137931,
            "unit": "ns",
            "range": "± 5926.559573386955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 446635.19696969696,
            "unit": "ns",
            "range": "± 80679.42127769109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389926.6224489796,
            "unit": "ns",
            "range": "± 58779.40169304268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 394898.57446808513,
            "unit": "ns",
            "range": "± 76661.16325228386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4677292.765306123,
            "unit": "ns",
            "range": "± 346960.35545274155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911755.2391304346,
            "unit": "ns",
            "range": "± 81961.83469330399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24988.940860215054,
            "unit": "ns",
            "range": "± 2983.9878243951307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116917.3,
            "unit": "ns",
            "range": "± 9033.822155990643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 141036.97894736842,
            "unit": "ns",
            "range": "± 24652.73811298934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133093.1923076923,
            "unit": "ns",
            "range": "± 17816.306536237033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10538.141304347826,
            "unit": "ns",
            "range": "± 1094.620488014315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26231.391304347828,
            "unit": "ns",
            "range": "± 3509.689660857203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669591.8775510204,
            "unit": "ns",
            "range": "± 178040.77253966554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062751.388888889,
            "unit": "ns",
            "range": "± 115879.11293518978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2642302.1597938146,
            "unit": "ns",
            "range": "± 242619.05133824193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6982894.9772727275,
            "unit": "ns",
            "range": "± 261597.223835679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3984053.638297872,
            "unit": "ns",
            "range": "± 464391.868718201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3957614.5408163266,
            "unit": "ns",
            "range": "± 371576.9174655767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5048892.676767677,
            "unit": "ns",
            "range": "± 472395.9408453461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4952528.338383839,
            "unit": "ns",
            "range": "± 508811.6407181543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8764329.313131314,
            "unit": "ns",
            "range": "± 877755.6440329198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7945720.865740741,
            "unit": "ns",
            "range": "± 222113.7105175881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2117161.5736177885,
            "unit": "ns",
            "range": "± 30698.801592545347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426095.586328125,
            "unit": "ns",
            "range": "± 31492.74003936501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3386639.42578125,
            "unit": "ns",
            "range": "± 137120.3645282024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009860.3348632812,
            "unit": "ns",
            "range": "± 23015.09775668671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898903.6681034482,
            "unit": "ns",
            "range": "± 24175.17757226607"
          }
        ]
      }
    ]
  }
}