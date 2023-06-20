window.BENCHMARK_DATA = {
  "lastUpdate": 1687249724146,
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
          "id": "04c30457cf95a606952fee8daaae44888a6af52f",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:11:16+09:00",
          "tree_id": "49b35c1dbf7c6846c137a2dd9dcf6be71f01db05",
          "url": "https://github.com/moreal/libplanet/commit/04c30457cf95a606952fee8daaae44888a6af52f"
        },
        "date": 1687249707500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405723.9436619717,
            "unit": "ns",
            "range": "± 68678.97882756252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773913.1578947366,
            "unit": "ns",
            "range": "± 139967.91188659897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459200,
            "unit": "ns",
            "range": "± 50064.18380439254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5395258.333333333,
            "unit": "ns",
            "range": "± 131177.94060530633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50640.217391304344,
            "unit": "ns",
            "range": "± 4127.076494539705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7888255,
            "unit": "ns",
            "range": "± 174250.57720964582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21018314.285714287,
            "unit": "ns",
            "range": "± 165249.0188828915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53679060,
            "unit": "ns",
            "range": "± 648010.9377383775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107176226.66666667,
            "unit": "ns",
            "range": "± 1263170.311142714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211975714.2857143,
            "unit": "ns",
            "range": "± 1309339.5885872229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4960003.515625,
            "unit": "ns",
            "range": "± 18612.57692299364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568124.037388393,
            "unit": "ns",
            "range": "± 5568.7683903287025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214456.6145833333,
            "unit": "ns",
            "range": "± 4712.852534726582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678991.8489583335,
            "unit": "ns",
            "range": "± 9547.108866234907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845970.80078125,
            "unit": "ns",
            "range": "± 2361.121653913509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761360.21484375,
            "unit": "ns",
            "range": "± 2606.39887840294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508766.6666666665,
            "unit": "ns",
            "range": "± 49291.86642071991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3642421.212121212,
            "unit": "ns",
            "range": "± 113169.23377616749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433805.263157895,
            "unit": "ns",
            "range": "± 98303.608352922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4471541.538461538,
            "unit": "ns",
            "range": "± 205936.38800330102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6996570.833333333,
            "unit": "ns",
            "range": "± 178373.26880831193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268052.45901639346,
            "unit": "ns",
            "range": "± 12003.23021186904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269441.17647058825,
            "unit": "ns",
            "range": "± 8691.79751423838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252955,
            "unit": "ns",
            "range": "± 17151.313375512982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276850,
            "unit": "ns",
            "range": "± 46605.33148768414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926226.6666666665,
            "unit": "ns",
            "range": "± 46913.95568586429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21441.935483870966,
            "unit": "ns",
            "range": "± 2385.97908900806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96538.70967741935,
            "unit": "ns",
            "range": "± 6307.122134644166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85356,
            "unit": "ns",
            "range": "± 9295.223276370276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104583.67346938775,
            "unit": "ns",
            "range": "± 17885.268336815843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6307.216494845361,
            "unit": "ns",
            "range": "± 1137.5455506154847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22341.41414141414,
            "unit": "ns",
            "range": "± 2722.806554057483"
          }
        ]
      }
    ]
  }
}