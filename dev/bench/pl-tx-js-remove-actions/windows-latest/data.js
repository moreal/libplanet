window.BENCHMARK_DATA = {
  "lastUpdate": 1687401258458,
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
        "date": 1687400646313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1877794.9494949495,
            "unit": "ns",
            "range": "± 231925.1424682671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3432615.053763441,
            "unit": "ns",
            "range": "± 314837.7000608673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2815712.6315789474,
            "unit": "ns",
            "range": "± 264841.8613831157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7158440.217391305,
            "unit": "ns",
            "range": "± 591230.8299630976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58687.93103448276,
            "unit": "ns",
            "range": "± 6719.2234009197455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9221139.130434783,
            "unit": "ns",
            "range": "± 617753.7670413197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25537104.76190476,
            "unit": "ns",
            "range": "± 1167441.7224425122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68487684.375,
            "unit": "ns",
            "range": "± 3932210.607475489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137559725.80645162,
            "unit": "ns",
            "range": "± 4130696.1122767786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275848930.95238096,
            "unit": "ns",
            "range": "± 9396438.64763532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6284148.802083333,
            "unit": "ns",
            "range": "± 102524.37332364876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034917.5260416667,
            "unit": "ns",
            "range": "± 35378.57697839677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1671762.876674107,
            "unit": "ns",
            "range": "± 21244.649056917613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3316312.8125,
            "unit": "ns",
            "range": "± 49693.430670344445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1121203.7630208333,
            "unit": "ns",
            "range": "± 19224.80107536583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1018518.8671875,
            "unit": "ns",
            "range": "± 18060.17958738997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4149863.829787234,
            "unit": "ns",
            "range": "± 365132.90549832414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4223383.695652174,
            "unit": "ns",
            "range": "± 257869.72913425587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5502801.388888889,
            "unit": "ns",
            "range": "± 268832.89091456134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5330303.191489362,
            "unit": "ns",
            "range": "± 412875.9556100206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9023781.318681318,
            "unit": "ns",
            "range": "± 551144.347882373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339165.55555555556,
            "unit": "ns",
            "range": "± 26466.09941467038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329283.3333333333,
            "unit": "ns",
            "range": "± 35667.09370040833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290588.04347826086,
            "unit": "ns",
            "range": "± 37024.54440553792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5108380.645161291,
            "unit": "ns",
            "range": "± 349544.4483330393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4735278.021978022,
            "unit": "ns",
            "range": "± 376298.3334188736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23839.17525773196,
            "unit": "ns",
            "range": "± 4258.436643423042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101983.87096774194,
            "unit": "ns",
            "range": "± 8781.493513690926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100720.40816326531,
            "unit": "ns",
            "range": "± 18907.484795048345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126236.36363636363,
            "unit": "ns",
            "range": "± 17422.341198351212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7937.634408602151,
            "unit": "ns",
            "range": "± 1477.5798351486667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20974.157303370786,
            "unit": "ns",
            "range": "± 3235.335028664224"
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
          "id": "6cb5cae0c0ce106005466915a32fe73338374b68",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:17:46+09:00",
          "tree_id": "ac48fc533edf5d35f19fa337b454b75c076c0c48",
          "url": "https://github.com/moreal/libplanet/commit/6cb5cae0c0ce106005466915a32fe73338374b68"
        },
        "date": 1687401243306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449619,
            "unit": "ns",
            "range": "± 120709.68820800063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620423.214285714,
            "unit": "ns",
            "range": "± 112267.30924016114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244747.1264367816,
            "unit": "ns",
            "range": "± 122700.39502512224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5578419.014084507,
            "unit": "ns",
            "range": "± 271477.63211808563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46387.77777777778,
            "unit": "ns",
            "range": "± 2446.5328724809397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7335642.857142857,
            "unit": "ns",
            "range": "± 75223.76582606687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19754440,
            "unit": "ns",
            "range": "± 339332.24932000117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49405273.333333336,
            "unit": "ns",
            "range": "± 785674.6404630014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103342510,
            "unit": "ns",
            "range": "± 1558761.9527780921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202728393.33333334,
            "unit": "ns",
            "range": "± 2856416.6989095835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4907834.53125,
            "unit": "ns",
            "range": "± 18196.087755865014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1589515.91796875,
            "unit": "ns",
            "range": "± 4606.166095962865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208645.09765625,
            "unit": "ns",
            "range": "± 4917.579878585584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637847.0703125,
            "unit": "ns",
            "range": "± 11948.754555237836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836829.39453125,
            "unit": "ns",
            "range": "± 3558.6590783611823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774066.46484375,
            "unit": "ns",
            "range": "± 2844.5069131361274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126441.5584415584,
            "unit": "ns",
            "range": "± 158745.0938741675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3456758,
            "unit": "ns",
            "range": "± 132599.18750328227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179130.769230769,
            "unit": "ns",
            "range": "± 54706.06889878832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4338740,
            "unit": "ns",
            "range": "± 68869.42182970534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6723186.486486486,
            "unit": "ns",
            "range": "± 225260.8526947298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259262.5,
            "unit": "ns",
            "range": "± 4760.934782162008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248055.76923076922,
            "unit": "ns",
            "range": "± 10171.729632191727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220094.2857142857,
            "unit": "ns",
            "range": "± 7114.398939398012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4017790,
            "unit": "ns",
            "range": "± 91704.46180960594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617094.4444444445,
            "unit": "ns",
            "range": "± 75120.69873932861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17988.043478260868,
            "unit": "ns",
            "range": "± 1852.3428818485577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86967.74193548386,
            "unit": "ns",
            "range": "± 5431.13330495184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78568,
            "unit": "ns",
            "range": "± 3955.8769144353014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96985.10638297872,
            "unit": "ns",
            "range": "± 13898.905019506004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5829.591836734694,
            "unit": "ns",
            "range": "± 857.7372754795648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19731.57894736842,
            "unit": "ns",
            "range": "± 1348.147914567267"
          }
        ]
      }
    ]
  }
}