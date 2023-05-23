window.BENCHMARK_DATA = {
  "lastUpdate": 1684849441328,
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
      },
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
          "id": "21886565300dd2124276a4f6c124a1300d79b766",
          "message": "Dump delta key-value pairs when `InvalidBlockStateRootHashException` occurred",
          "timestamp": "2023-05-23T22:32:00+09:00",
          "tree_id": "03a9d35bd59e2e3b66a333cab0b63bd9545f5ccc",
          "url": "https://github.com/moreal/libplanet/commit/21886565300dd2124276a4f6c124a1300d79b766"
        },
        "date": 1684849435055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3251167.6428571427,
            "unit": "ns",
            "range": "± 41256.89797169987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3336277.8181818184,
            "unit": "ns",
            "range": "± 36977.59477567381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4249665.166666667,
            "unit": "ns",
            "range": "± 76324.6892883986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4209889.947368421,
            "unit": "ns",
            "range": "± 90619.32133655093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6690387.764705882,
            "unit": "ns",
            "range": "± 131389.0453774255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278594.21428571426,
            "unit": "ns",
            "range": "± 9227.528658751682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269859.3953488372,
            "unit": "ns",
            "range": "± 9884.558677287507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238347.13636363635,
            "unit": "ns",
            "range": "± 5489.952305243901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277280.2,
            "unit": "ns",
            "range": "± 28861.972351670138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825106,
            "unit": "ns",
            "range": "± 20209.614525906087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17259.76842105263,
            "unit": "ns",
            "range": "± 1246.651928529794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85095.34146341463,
            "unit": "ns",
            "range": "± 4366.771135927345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69137.94444444444,
            "unit": "ns",
            "range": "± 1431.2499872991407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88842.80612244898,
            "unit": "ns",
            "range": "± 11463.398475648859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4671.802083333333,
            "unit": "ns",
            "range": "± 452.03254703014636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17726.168421052633,
            "unit": "ns",
            "range": "± 1376.3865709200966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6322009.168526785,
            "unit": "ns",
            "range": "± 28938.898711089154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962663.6127604167,
            "unit": "ns",
            "range": "± 9204.521308091727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359788.9903846155,
            "unit": "ns",
            "range": "± 717.4791013199302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593021.26640625,
            "unit": "ns",
            "range": "± 5398.572071810232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875642.060171274,
            "unit": "ns",
            "range": "± 3842.156835234845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743739.7631138393,
            "unit": "ns",
            "range": "± 510.77309472885037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703058.266666667,
            "unit": "ns",
            "range": "± 85574.76240813949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19476619.8,
            "unit": "ns",
            "range": "± 105499.00764069502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50351792.333333336,
            "unit": "ns",
            "range": "± 357997.51116426714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100228148.73333333,
            "unit": "ns",
            "range": "± 440750.82782103063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200685796.13333333,
            "unit": "ns",
            "range": "± 1050949.1934688557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377186.86,
            "unit": "ns",
            "range": "± 103706.70883503316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613230.4444444445,
            "unit": "ns",
            "range": "± 73068.59273804272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187137.1428571427,
            "unit": "ns",
            "range": "± 116539.65201359245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5287971.615384615,
            "unit": "ns",
            "range": "± 144446.4724825295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45470.13333333333,
            "unit": "ns",
            "range": "± 2287.702549492603"
          }
        ]
      }
    ]
  }
}