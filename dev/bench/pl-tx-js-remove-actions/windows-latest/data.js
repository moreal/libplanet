window.BENCHMARK_DATA = {
  "lastUpdate": 1687749703309,
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
          "id": "d13ea4bcc94cb044e99a9d41220b81c08bfba37d",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:54:06+09:00",
          "tree_id": "e5d6b8ba344b9121fb0210401ecc59e6b6538cf9",
          "url": "https://github.com/moreal/libplanet/commit/d13ea4bcc94cb044e99a9d41220b81c08bfba37d"
        },
        "date": 1687403331532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169740,
            "unit": "ns",
            "range": "± 135206.6170456509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1988424.2424242424,
            "unit": "ns",
            "range": "± 93458.68039794346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797764.6464646466,
            "unit": "ns",
            "range": "± 190016.79265916412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3829349.0196078434,
            "unit": "ns",
            "range": "± 135448.02305319783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36911.57894736842,
            "unit": "ns",
            "range": "± 2660.5015987589413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5509280,
            "unit": "ns",
            "range": "± 55576.153673521316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13472076.923076924,
            "unit": "ns",
            "range": "± 49240.619307067915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35097307.692307696,
            "unit": "ns",
            "range": "± 138311.9629770473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69516300,
            "unit": "ns",
            "range": "± 363134.19007303624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138723133.33333334,
            "unit": "ns",
            "range": "± 741290.7542799602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3562277.7734375,
            "unit": "ns",
            "range": "± 8149.552444887208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1105716.8098958333,
            "unit": "ns",
            "range": "± 1645.5883721183725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 836184.1341145834,
            "unit": "ns",
            "range": "± 1615.5400358952036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953367.36328125,
            "unit": "ns",
            "range": "± 13530.868742945391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 583084.6940104166,
            "unit": "ns",
            "range": "± 1296.3693761591082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 528713.6300223215,
            "unit": "ns",
            "range": "± 1290.9650506833896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2349137.8378378376,
            "unit": "ns",
            "range": "± 79457.97404691137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2408576.1904761903,
            "unit": "ns",
            "range": "± 64629.21943398172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3042185.3658536584,
            "unit": "ns",
            "range": "± 99947.35754629936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3008642.3076923075,
            "unit": "ns",
            "range": "± 154192.97701529457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4788945.945945946,
            "unit": "ns",
            "range": "± 156343.73560735863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208073.0158730159,
            "unit": "ns",
            "range": "± 8252.041904675361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199997.77777777778,
            "unit": "ns",
            "range": "± 7607.6961298438055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176548.93617021278,
            "unit": "ns",
            "range": "± 10028.19406849767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2918646.6666666665,
            "unit": "ns",
            "range": "± 46822.90139705244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2638813.3333333335,
            "unit": "ns",
            "range": "± 35456.71136685382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17008.24742268041,
            "unit": "ns",
            "range": "± 1947.8444337637259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74763,
            "unit": "ns",
            "range": "± 8765.74663912973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59241.666666666664,
            "unit": "ns",
            "range": "± 5043.780258719209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80387.36842105263,
            "unit": "ns",
            "range": "± 10728.508870089447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5136.734693877551,
            "unit": "ns",
            "range": "± 786.4362729180577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16894.565217391304,
            "unit": "ns",
            "range": "± 1490.7306365889135"
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
          "id": "62c8213608a0eb8df2425c4b193d2415ce8f6357",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:51:58+09:00",
          "tree_id": "ff0d929b4c24e4a1594405447176ac082ee1465c",
          "url": "https://github.com/moreal/libplanet/commit/62c8213608a0eb8df2425c4b193d2415ce8f6357"
        },
        "date": 1687403702800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669402.1276595744,
            "unit": "ns",
            "range": "± 206066.78736671622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3187802.0408163266,
            "unit": "ns",
            "range": "± 319833.31418376585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556203.0303030303,
            "unit": "ns",
            "range": "± 285089.27475890826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6470608,
            "unit": "ns",
            "range": "± 691802.8182432426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58619.38775510204,
            "unit": "ns",
            "range": "± 14416.232676040765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8764800,
            "unit": "ns",
            "range": "± 525324.0339431444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24177410.101010103,
            "unit": "ns",
            "range": "± 2475353.7696246346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59288124.561403506,
            "unit": "ns",
            "range": "± 2549718.4599677376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122606012.32876712,
            "unit": "ns",
            "range": "± 6082022.742086926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244580950.5050505,
            "unit": "ns",
            "range": "± 18223946.96410985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5745518.266369048,
            "unit": "ns",
            "range": "± 206113.52541082195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1812872.8365384615,
            "unit": "ns",
            "range": "± 49511.0373602929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405598.9085477942,
            "unit": "ns",
            "range": "± 28789.68905235768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3054963.21875,
            "unit": "ns",
            "range": "± 71681.06359140475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977463.4765625,
            "unit": "ns",
            "range": "± 12112.209032946854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924019.6428571428,
            "unit": "ns",
            "range": "± 19628.921305971315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3381500,
            "unit": "ns",
            "range": "± 342913.6420365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3632658.510638298,
            "unit": "ns",
            "range": "± 316364.4721328005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5076607.142857143,
            "unit": "ns",
            "range": "± 433226.1239636133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4755095.918367347,
            "unit": "ns",
            "range": "± 448327.743913479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8509119.072164949,
            "unit": "ns",
            "range": "± 544053.1879560783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323741.93548387097,
            "unit": "ns",
            "range": "± 38231.492602930986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292707.2916666667,
            "unit": "ns",
            "range": "± 39379.16960657638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267459.57446808513,
            "unit": "ns",
            "range": "± 44292.520592783345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4592764.948453608,
            "unit": "ns",
            "range": "± 398023.6700041733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4422616.483516484,
            "unit": "ns",
            "range": "± 439635.1503143731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20318.072289156626,
            "unit": "ns",
            "range": "± 2956.066295929451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106082.60869565218,
            "unit": "ns",
            "range": "± 24529.930623966855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102447.91666666667,
            "unit": "ns",
            "range": "± 23426.72778177531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126136.84210526316,
            "unit": "ns",
            "range": "± 30349.33506450813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5885.555555555556,
            "unit": "ns",
            "range": "± 1533.3418824057392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23217.708333333332,
            "unit": "ns",
            "range": "± 8609.969677697893"
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
          "id": "69f446ee0b976aff6ca26ae843a5309a872363c3",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T12:19:12+09:00",
          "tree_id": "2f34d8a134944d8fe02e84d4439b7a324c9a698e",
          "url": "https://github.com/moreal/libplanet/commit/69f446ee0b976aff6ca26ae843a5309a872363c3"
        },
        "date": 1687405174015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1800064.5833333333,
            "unit": "ns",
            "range": "± 178707.26606095917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3206553.2258064514,
            "unit": "ns",
            "range": "± 274285.01577881613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2777936.559139785,
            "unit": "ns",
            "range": "± 251119.72754434255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7048604.12371134,
            "unit": "ns",
            "range": "± 617152.6106033131"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66381.91489361702,
            "unit": "ns",
            "range": "± 13125.123350293548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10019373.469387755,
            "unit": "ns",
            "range": "± 830783.3453540918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25708776.086956523,
            "unit": "ns",
            "range": "± 623773.6595748868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66437200,
            "unit": "ns",
            "range": "± 1613088.8686291398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132943206.25,
            "unit": "ns",
            "range": "± 2585332.5822077515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270904400,
            "unit": "ns",
            "range": "± 3752075.551970177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6220534.036458333,
            "unit": "ns",
            "range": "± 98673.86402666444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2109843.671875,
            "unit": "ns",
            "range": "± 29900.420935557082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1521957.8385416667,
            "unit": "ns",
            "range": "± 17560.598896945383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3373162.7083333335,
            "unit": "ns",
            "range": "± 37320.89630068912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1100919.43359375,
            "unit": "ns",
            "range": "± 12361.582443106474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1026344.8307291666,
            "unit": "ns",
            "range": "± 14722.319600421475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4053242.8571428573,
            "unit": "ns",
            "range": "± 271085.5605576534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4265780.85106383,
            "unit": "ns",
            "range": "± 400813.57323522674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5572599.206349206,
            "unit": "ns",
            "range": "± 245427.0687761838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5354495.744680851,
            "unit": "ns",
            "range": "± 398217.3810399826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8905476.923076924,
            "unit": "ns",
            "range": "± 413969.2982914127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357912.7659574468,
            "unit": "ns",
            "range": "± 34585.596585745734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341757.30337078654,
            "unit": "ns",
            "range": "± 31544.58204322765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320178.26086956525,
            "unit": "ns",
            "range": "± 32640.29002943946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5245893.258426966,
            "unit": "ns",
            "range": "± 290031.85945597297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4954710.126582279,
            "unit": "ns",
            "range": "± 246954.87628669868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27277.777777777777,
            "unit": "ns",
            "range": "± 5836.013295565516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125025.80645161291,
            "unit": "ns",
            "range": "± 22556.570927461693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132279.5698924731,
            "unit": "ns",
            "range": "± 26834.685370680825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144535.10638297873,
            "unit": "ns",
            "range": "± 29444.059252375144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8944.68085106383,
            "unit": "ns",
            "range": "± 2219.821121403079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27820.32967032967,
            "unit": "ns",
            "range": "± 4354.040129083039"
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
          "id": "23d7115798b4e69f093d0d69ec425cd53d51592c",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T12:31:51+09:00",
          "tree_id": "8bd161622abdec7c446fd3590ecaa14d332a5db9",
          "url": "https://github.com/moreal/libplanet/commit/23d7115798b4e69f093d0d69ec425cd53d51592c"
        },
        "date": 1687405616122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426407.2164948455,
            "unit": "ns",
            "range": "± 134804.03543000133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2607215.254237288,
            "unit": "ns",
            "range": "± 115441.4567463098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2221166.326530612,
            "unit": "ns",
            "range": "± 137993.5916216204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5508134.146341464,
            "unit": "ns",
            "range": "± 291330.4903749379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50197.87234042553,
            "unit": "ns",
            "range": "± 4014.3286031496514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7168563.157894737,
            "unit": "ns",
            "range": "± 242996.55811270876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20400978.57142857,
            "unit": "ns",
            "range": "± 194301.2299678851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50889707.14285714,
            "unit": "ns",
            "range": "± 319654.51413454715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101548466.66666667,
            "unit": "ns",
            "range": "± 661156.2811432999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203356086.66666666,
            "unit": "ns",
            "range": "± 1658962.107922845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4805446.372767857,
            "unit": "ns",
            "range": "± 17359.643620851955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525732.9557291667,
            "unit": "ns",
            "range": "± 4089.3066349807204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175393.2091346155,
            "unit": "ns",
            "range": "± 4682.070462626319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649946.902901786,
            "unit": "ns",
            "range": "± 10903.660360290061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844493.9388020834,
            "unit": "ns",
            "range": "± 4857.81568952501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786646.1197916666,
            "unit": "ns",
            "range": "± 2642.5728161970333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392747.0588235296,
            "unit": "ns",
            "range": "± 67372.38972352713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430127.027027027,
            "unit": "ns",
            "range": "± 106893.38574446931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4342087.5,
            "unit": "ns",
            "range": "± 171234.07722216877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4393145.714285715,
            "unit": "ns",
            "range": "± 140887.73031964796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6797772.7272727275,
            "unit": "ns",
            "range": "± 153347.4119266078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277106.5573770492,
            "unit": "ns",
            "range": "± 12381.50325892699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269964.0625,
            "unit": "ns",
            "range": "± 12334.547780458459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250643.3734939759,
            "unit": "ns",
            "range": "± 13369.077834289428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4130460,
            "unit": "ns",
            "range": "± 47364.63116835479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3718821.4285714286,
            "unit": "ns",
            "range": "± 48347.5268410738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23636.263736263736,
            "unit": "ns",
            "range": "± 1638.937086685995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102008.33333333333,
            "unit": "ns",
            "range": "± 8005.940776654437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83773.1182795699,
            "unit": "ns",
            "range": "± 6148.155251514671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98985.22727272728,
            "unit": "ns",
            "range": "± 9624.448511117702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6706.122448979592,
            "unit": "ns",
            "range": "± 1202.0443347854591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20357.69230769231,
            "unit": "ns",
            "range": "± 2108.882314256681"
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
          "id": "c2207d09ce017f70b1b9a0f88d758cd796d58121",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-23T13:28:37+09:00",
          "tree_id": "64788bd2d3e7acefd768e41ba0daec95c847c3ed",
          "url": "https://github.com/moreal/libplanet/commit/c2207d09ce017f70b1b9a0f88d758cd796d58121"
        },
        "date": 1687495468730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470883.8383838383,
            "unit": "ns",
            "range": "± 121582.15137122408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736395.1219512196,
            "unit": "ns",
            "range": "± 144788.4816563642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2321136.8421052634,
            "unit": "ns",
            "range": "± 148115.38562217876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5582348.780487805,
            "unit": "ns",
            "range": "± 187480.32979748998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54814.583333333336,
            "unit": "ns",
            "range": "± 5404.695408266811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7790600,
            "unit": "ns",
            "range": "± 146932.3109462313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21364576.923076924,
            "unit": "ns",
            "range": "± 238086.43792345023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53964911.538461536,
            "unit": "ns",
            "range": "± 301949.4508977221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107352653.33333333,
            "unit": "ns",
            "range": "± 885519.7334791317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218024386.66666666,
            "unit": "ns",
            "range": "± 1861842.4882997205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4924407.34375,
            "unit": "ns",
            "range": "± 20359.274107492445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1570205.9700520833,
            "unit": "ns",
            "range": "± 3612.4335414161933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208667.8190104167,
            "unit": "ns",
            "range": "± 4956.609478902574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683068.359375,
            "unit": "ns",
            "range": "± 8803.704302088832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861338.02734375,
            "unit": "ns",
            "range": "± 4277.146623291082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801690.9244791666,
            "unit": "ns",
            "range": "± 2550.656971453939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3552112.8205128205,
            "unit": "ns",
            "range": "± 117410.6338308937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748817.3913043477,
            "unit": "ns",
            "range": "± 79287.323600904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503164.285714285,
            "unit": "ns",
            "range": "± 46547.19039927043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4556105.882352941,
            "unit": "ns",
            "range": "± 183772.8580740526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7097813.333333333,
            "unit": "ns",
            "range": "± 181859.19853544395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291357.77777777775,
            "unit": "ns",
            "range": "± 10979.4537223126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276768.6274509804,
            "unit": "ns",
            "range": "± 10489.318189397793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255505.95238095237,
            "unit": "ns",
            "range": "± 13666.557116530552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4314664.285714285,
            "unit": "ns",
            "range": "± 42872.020769205235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920753.3333333335,
            "unit": "ns",
            "range": "± 50016.88095985575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25413.684210526317,
            "unit": "ns",
            "range": "± 2691.9743022356242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108313,
            "unit": "ns",
            "range": "± 7691.903850704639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91821.875,
            "unit": "ns",
            "range": "± 8525.98755662882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119914.94252873563,
            "unit": "ns",
            "range": "± 9918.96854089493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7961.458333333333,
            "unit": "ns",
            "range": "± 1178.524482622381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25181.31868131868,
            "unit": "ns",
            "range": "± 2357.112738920322"
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
          "id": "69095b9c19c47d000f0be4752d0bd878cd845fa4",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-23T15:59:33+09:00",
          "tree_id": "e4001bb7f19773855ef2cc00d4e1eb0c27ad5032",
          "url": "https://github.com/moreal/libplanet/commit/69095b9c19c47d000f0be4752d0bd878cd845fa4"
        },
        "date": 1687504963927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843049.4845360825,
            "unit": "ns",
            "range": "± 284933.1274336252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3395472.9166666665,
            "unit": "ns",
            "range": "± 380166.15023577213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2832088.6597938146,
            "unit": "ns",
            "range": "± 300264.55969288177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7369776.288659794,
            "unit": "ns",
            "range": "± 715765.8198818121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58783.87096774193,
            "unit": "ns",
            "range": "± 12251.036250071296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8999391.91919192,
            "unit": "ns",
            "range": "± 991271.599829185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24560535.353535354,
            "unit": "ns",
            "range": "± 2075842.3834878008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64784352,
            "unit": "ns",
            "range": "± 4211281.950254746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128584268.36734694,
            "unit": "ns",
            "range": "± 7666180.277258162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261000518.75,
            "unit": "ns",
            "range": "± 10284219.481997466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149254.21875,
            "unit": "ns",
            "range": "± 110821.35991050104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993257.595486111,
            "unit": "ns",
            "range": "± 55455.58391188078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1494541.2006578948,
            "unit": "ns",
            "range": "± 33150.80877196031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3514879.1360294116,
            "unit": "ns",
            "range": "± 110480.11521665269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072072.9085286458,
            "unit": "ns",
            "range": "± 27617.584084131086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 985086.5513392857,
            "unit": "ns",
            "range": "± 17288.403314171297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3940155.5555555555,
            "unit": "ns",
            "range": "± 405744.1639035892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4133361.855670103,
            "unit": "ns",
            "range": "± 345178.0858132325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5668633.695652174,
            "unit": "ns",
            "range": "± 439579.5434343735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6073784.375,
            "unit": "ns",
            "range": "± 567209.7451705562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8926240,
            "unit": "ns",
            "range": "± 733412.1237589379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329138.5416666667,
            "unit": "ns",
            "range": "± 60643.662175543155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315834.375,
            "unit": "ns",
            "range": "± 50336.09320959726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284308.3333333333,
            "unit": "ns",
            "range": "± 49286.974187521424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5099535.6321839085,
            "unit": "ns",
            "range": "± 477302.3450595074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4514742.391304348,
            "unit": "ns",
            "range": "± 558309.995468801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22473.469387755104,
            "unit": "ns",
            "range": "± 7728.372563381937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99265.21739130435,
            "unit": "ns",
            "range": "± 19155.28466824371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100882.1052631579,
            "unit": "ns",
            "range": "± 24913.232316519807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129667.36842105263,
            "unit": "ns",
            "range": "± 31770.263904050826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6657.446808510638,
            "unit": "ns",
            "range": "± 1970.1257730552056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20735.416666666668,
            "unit": "ns",
            "range": "± 7120.910337526216"
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
          "id": "e8e01007c4534042f0cfff4449bebabfc23b01ea",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-26T12:05:30+09:00",
          "tree_id": "5072ba5d520e1f2b54e792bf23f4eb55f8c1dd3c",
          "url": "https://github.com/moreal/libplanet/commit/e8e01007c4534042f0cfff4449bebabfc23b01ea"
        },
        "date": 1687749686599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319657,
            "unit": "ns",
            "range": "± 109828.75950838886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411360.3174603176,
            "unit": "ns",
            "range": "± 104574.64156267577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075544,
            "unit": "ns",
            "range": "± 139981.56828163433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334566,
            "unit": "ns",
            "range": "± 376588.76982671156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47177.41935483871,
            "unit": "ns",
            "range": "± 3149.9181850057657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6870356.666666667,
            "unit": "ns",
            "range": "± 126892.99466573438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18891986.20689655,
            "unit": "ns",
            "range": "± 544466.8832406732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45883773.333333336,
            "unit": "ns",
            "range": "± 812882.7058830871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93660235.71428572,
            "unit": "ns",
            "range": "± 1378458.68195501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185568219.04761904,
            "unit": "ns",
            "range": "± 4281501.865889941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4653804.010416667,
            "unit": "ns",
            "range": "± 30663.63941909375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1463734.2578125,
            "unit": "ns",
            "range": "± 6570.618593789474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150022.9166666667,
            "unit": "ns",
            "range": "± 11443.715332880354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614133.046875,
            "unit": "ns",
            "range": "± 21878.40449571474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821897.421875,
            "unit": "ns",
            "range": "± 3070.276649634646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768751.3602120535,
            "unit": "ns",
            "range": "± 2098.8804510437403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2948260,
            "unit": "ns",
            "range": "± 51786.46817185244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3143146.4285714286,
            "unit": "ns",
            "range": "± 90118.36447917881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3834789.4736842103,
            "unit": "ns",
            "range": "± 129836.51006423983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3833661.25,
            "unit": "ns",
            "range": "± 200117.23177706092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6329486,
            "unit": "ns",
            "range": "± 253651.03700854487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250048.57142857142,
            "unit": "ns",
            "range": "± 11412.689896918684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239492.53731343284,
            "unit": "ns",
            "range": "± 11225.01688509003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208365,
            "unit": "ns",
            "range": "± 7262.109250708831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3757456.25,
            "unit": "ns",
            "range": "± 73478.1778829606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3389895.238095238,
            "unit": "ns",
            "range": "± 70231.52053167066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20312.244897959183,
            "unit": "ns",
            "range": "± 1983.7102229622749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83919,
            "unit": "ns",
            "range": "± 7910.352442058176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74170.52631578948,
            "unit": "ns",
            "range": "± 6881.703674579839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82747.56097560975,
            "unit": "ns",
            "range": "± 6695.644901305939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4426.530612244898,
            "unit": "ns",
            "range": "± 860.5381941490522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16374.468085106382,
            "unit": "ns",
            "range": "± 1322.9111081420988"
          }
        ]
      }
    ]
  }
}