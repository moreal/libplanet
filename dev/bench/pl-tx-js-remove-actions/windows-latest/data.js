window.BENCHMARK_DATA = {
  "lastUpdate": 1687405194632,
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
      }
    ]
  }
}