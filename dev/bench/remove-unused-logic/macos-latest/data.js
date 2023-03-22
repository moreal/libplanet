window.BENCHMARK_DATA = {
  "lastUpdate": 1679483741009,
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
          "id": "4c5aa13dc1397df6fd83e9c6ce71f24b1a4aeb3c",
          "message": "Remove unused logic",
          "timestamp": "2023-03-22T19:40:25+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/moreal/libplanet/commit/4c5aa13dc1397df6fd83e9c6ce71f24b1a4aeb3c"
        },
        "date": 1679482930640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9808103.978494624,
            "unit": "ns",
            "range": "± 1649872.9132724856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24327540.21875,
            "unit": "ns",
            "range": "± 2367957.593763567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51568322.075,
            "unit": "ns",
            "range": "± 1833058.3810799243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106049179.66666667,
            "unit": "ns",
            "range": "± 4972833.167339256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219405374.27272728,
            "unit": "ns",
            "range": "± 6877176.427574351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71432.83516483517,
            "unit": "ns",
            "range": "± 10158.32259366535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217955.64210526316,
            "unit": "ns",
            "range": "± 18238.640058669334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220921.43548387097,
            "unit": "ns",
            "range": "± 19559.018214561063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217847.9193548387,
            "unit": "ns",
            "range": "± 13937.81965304924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12745316.5625,
            "unit": "ns",
            "range": "± 237230.27011828788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10249061.166666666,
            "unit": "ns",
            "range": "± 158966.87230842724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24226.32978723404,
            "unit": "ns",
            "range": "± 3226.752028512848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71353.92045454546,
            "unit": "ns",
            "range": "± 11027.096704447275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61701.510869565216,
            "unit": "ns",
            "range": "± 5729.286806189132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131873.8076923077,
            "unit": "ns",
            "range": "± 17652.0162107413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9701.867346938776,
            "unit": "ns",
            "range": "± 1288.5195083734152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23282,
            "unit": "ns",
            "range": "± 5120.231832661683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757549.1538461538,
            "unit": "ns",
            "range": "± 239723.18306468602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3016844.2666666666,
            "unit": "ns",
            "range": "± 177925.97722598392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2783815.4431818184,
            "unit": "ns",
            "range": "± 345604.0403734048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7099994.125,
            "unit": "ns",
            "range": "± 708811.6770435047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3583780.741758242,
            "unit": "ns",
            "range": "± 365014.72089861863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5477041.840659341,
            "unit": "ns",
            "range": "± 425080.4716579941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30467982.532608695,
            "unit": "ns",
            "range": "± 4016860.309508756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7335075.0227272725,
            "unit": "ns",
            "range": "± 857484.2646147955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30530155,
            "unit": "ns",
            "range": "± 1553717.9462459157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6739738.0546875,
            "unit": "ns",
            "range": "± 87484.11341170511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928413.4828404018,
            "unit": "ns",
            "range": "± 22441.612779782386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276755.18359375,
            "unit": "ns",
            "range": "± 15303.431718296453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2959094.431547619,
            "unit": "ns",
            "range": "± 68314.71137022051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863180.5639648438,
            "unit": "ns",
            "range": "± 10349.933605902339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723071.9910016741,
            "unit": "ns",
            "range": "± 12038.523614925289"
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
          "id": "d2d59675532faefbacf718608f11aef40a153d98",
          "message": "Remove unused logic\n\n[skip changelog]",
          "timestamp": "2023-03-22T19:55:55+09:00",
          "tree_id": "4812c199c69fac14e2384dd9cb73846bc0f5b450",
          "url": "https://github.com/moreal/libplanet/commit/d2d59675532faefbacf718608f11aef40a153d98"
        },
        "date": 1679483734903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8671025.397058824,
            "unit": "ns",
            "range": "± 414918.66002829495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21415776.95,
            "unit": "ns",
            "range": "± 487915.5587781962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55355194,
            "unit": "ns",
            "range": "± 2865074.898944294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109892935.53571428,
            "unit": "ns",
            "range": "± 3104246.4087583437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220487890.92307693,
            "unit": "ns",
            "range": "± 2496977.863057342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75723.8021978022,
            "unit": "ns",
            "range": "± 6685.68584567853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250092.75510204083,
            "unit": "ns",
            "range": "± 30228.021665936296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239658.47590361445,
            "unit": "ns",
            "range": "± 18550.343345041474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228091.3988764045,
            "unit": "ns",
            "range": "± 12533.706950971831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13311653.642857144,
            "unit": "ns",
            "range": "± 226761.81418221362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10549439.166666666,
            "unit": "ns",
            "range": "± 292618.04297135305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22446.157894736843,
            "unit": "ns",
            "range": "± 3979.577242370793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71551.61458333333,
            "unit": "ns",
            "range": "± 14680.730077478609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64628.066666666666,
            "unit": "ns",
            "range": "± 6051.784836640243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135912.3510638298,
            "unit": "ns",
            "range": "± 19490.095005041312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9059,
            "unit": "ns",
            "range": "± 1006.9652319027056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24681.902173913044,
            "unit": "ns",
            "range": "± 2558.287378111813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615808.693877551,
            "unit": "ns",
            "range": "± 166116.66815258685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2972364.0208333335,
            "unit": "ns",
            "range": "± 170759.07935623525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505624.0208333335,
            "unit": "ns",
            "range": "± 178793.06313612833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6200672.567567567,
            "unit": "ns",
            "range": "± 208987.78795868283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3698631.7303370787,
            "unit": "ns",
            "range": "± 295743.7246185363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5274123.258064516,
            "unit": "ns",
            "range": "± 298654.048490488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26763288.133333333,
            "unit": "ns",
            "range": "± 793946.4535503782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6740927.655555556,
            "unit": "ns",
            "range": "± 400503.98998231767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32104124.78723404,
            "unit": "ns",
            "range": "± 1245001.400013582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6934528.981473214,
            "unit": "ns",
            "range": "± 335753.1191573914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198136.926474294,
            "unit": "ns",
            "range": "± 155395.63496545475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336682.8509615385,
            "unit": "ns",
            "range": "± 19417.428054913384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3128925.6504913014,
            "unit": "ns",
            "range": "± 217954.05462231173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918217.8554036458,
            "unit": "ns",
            "range": "± 26932.92108753652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866494.41796875,
            "unit": "ns",
            "range": "± 29857.920055566152"
          }
        ]
      }
    ]
  }
}