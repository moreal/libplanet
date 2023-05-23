window.BENCHMARK_DATA = {
  "lastUpdate": 1684849438096,
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
        "date": 1684849433098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732791.905263158,
            "unit": "ns",
            "range": "± 297202.0014020149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976782.4536082475,
            "unit": "ns",
            "range": "± 307811.90929171816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5031101.4845360825,
            "unit": "ns",
            "range": "± 341272.8091283824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5329417.0625,
            "unit": "ns",
            "range": "± 352230.23936557875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8811660.91919192,
            "unit": "ns",
            "range": "± 535652.6582391302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353633.7073170732,
            "unit": "ns",
            "range": "± 18681.63814392195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331822.27118644066,
            "unit": "ns",
            "range": "± 14613.480197301193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308045.93684210523,
            "unit": "ns",
            "range": "± 19087.54788137094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5165137.465116279,
            "unit": "ns",
            "range": "± 191125.4758144563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4606776.029411765,
            "unit": "ns",
            "range": "± 220669.44394585368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19247.166666666668,
            "unit": "ns",
            "range": "± 2024.9497618836401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100177.78494623656,
            "unit": "ns",
            "range": "± 8831.849066390914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107943.40625,
            "unit": "ns",
            "range": "± 14545.280323746998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123980.6914893617,
            "unit": "ns",
            "range": "± 15955.347185411654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7553.644444444444,
            "unit": "ns",
            "range": "± 1405.314282184011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22125.040404040403,
            "unit": "ns",
            "range": "± 5542.472749777335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7376038.871354166,
            "unit": "ns",
            "range": "± 77352.41662226873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2262335.29765625,
            "unit": "ns",
            "range": "± 24943.580832013446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1665833.6293945312,
            "unit": "ns",
            "range": "± 43079.220747401836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3080260.806525735,
            "unit": "ns",
            "range": "± 62891.10885781879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994071.5686848959,
            "unit": "ns",
            "range": "± 15115.714475615925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924525.0600911458,
            "unit": "ns",
            "range": "± 14775.09162368833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9542334.901234567,
            "unit": "ns",
            "range": "± 499261.04027554067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24758939.083333332,
            "unit": "ns",
            "range": "± 819335.1397676176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61597690.777777776,
            "unit": "ns",
            "range": "± 3305949.1186850206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120453722.78947368,
            "unit": "ns",
            "range": "± 4106159.6124869366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246671866.5357143,
            "unit": "ns",
            "range": "± 6971723.04434682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723528,
            "unit": "ns",
            "range": "± 163553.2937682317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218345.2978723403,
            "unit": "ns",
            "range": "± 193178.23610867985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748893.4623655914,
            "unit": "ns",
            "range": "± 248861.39904130323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6946032.804123712,
            "unit": "ns",
            "range": "± 530326.4767186978"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59978.51685393258,
            "unit": "ns",
            "range": "± 5609.980082431745"
          }
        ]
      }
    ]
  }
}