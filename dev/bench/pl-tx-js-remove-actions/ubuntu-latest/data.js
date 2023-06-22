window.BENCHMARK_DATA = {
  "lastUpdate": 1687403076584,
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
        "date": 1687399985671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264984.2,
            "unit": "ns",
            "range": "± 42311.75600772371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3403397.066666667,
            "unit": "ns",
            "range": "± 62213.785680009016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252982.933333334,
            "unit": "ns",
            "range": "± 43901.367732463106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4289779.5,
            "unit": "ns",
            "range": "± 47639.951659199956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6796959.888888889,
            "unit": "ns",
            "range": "± 190332.07519052937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6350760.442522322,
            "unit": "ns",
            "range": "± 15445.906447336572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020650.8072916667,
            "unit": "ns",
            "range": "± 6613.199809716741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353501.3662760416,
            "unit": "ns",
            "range": "± 1486.8031785547132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518741.9891183036,
            "unit": "ns",
            "range": "± 1579.71961587487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809469.1310847356,
            "unit": "ns",
            "range": "± 1198.7884692887537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760887.384375,
            "unit": "ns",
            "range": "± 480.93547052802046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291253.46153846156,
            "unit": "ns",
            "range": "± 4659.492544175896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267711.7586206897,
            "unit": "ns",
            "range": "± 7440.175687514627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232492.7142857143,
            "unit": "ns",
            "range": "± 3215.9034961738666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4139703.6923076925,
            "unit": "ns",
            "range": "± 26969.59589174637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793010.5714285714,
            "unit": "ns",
            "range": "± 25254.49789554415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15985.375,
            "unit": "ns",
            "range": "± 1606.7439140271103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85377.28,
            "unit": "ns",
            "range": "± 4325.804235677502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74049.91666666667,
            "unit": "ns",
            "range": "± 1884.0520835749708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90551.94897959183,
            "unit": "ns",
            "range": "± 12201.983545336761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4628.551020408163,
            "unit": "ns",
            "range": "± 547.1530463526349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17271.822916666668,
            "unit": "ns",
            "range": "± 1590.2319790705922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352521.125,
            "unit": "ns",
            "range": "± 100463.23472492181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571563.4444444445,
            "unit": "ns",
            "range": "± 63411.4184102112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162032.3936170214,
            "unit": "ns",
            "range": "± 123672.91411076984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5181790.12,
            "unit": "ns",
            "range": "± 127196.53317252794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45866.194805194806,
            "unit": "ns",
            "range": "± 2168.3361559582536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7731802.133333334,
            "unit": "ns",
            "range": "± 52613.35586530785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19468626.2,
            "unit": "ns",
            "range": "± 134870.9691282746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49474576.06666667,
            "unit": "ns",
            "range": "± 251999.24520336694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100966310.61538461,
            "unit": "ns",
            "range": "± 948855.6397846249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202272449.06666666,
            "unit": "ns",
            "range": "± 1214421.9975271872"
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
        "date": 1687401005080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274059.769230769,
            "unit": "ns",
            "range": "± 81862.80770816877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386198.9696969697,
            "unit": "ns",
            "range": "± 106262.88956506785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4319877.8,
            "unit": "ns",
            "range": "± 42001.92951554216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4254167.642857143,
            "unit": "ns",
            "range": "± 103917.07602314962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6821965.296296297,
            "unit": "ns",
            "range": "± 150990.3791965198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7834104.733333333,
            "unit": "ns",
            "range": "± 111551.80995423906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19544065.133333333,
            "unit": "ns",
            "range": "± 191891.37070818653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51239925.53333333,
            "unit": "ns",
            "range": "± 298486.16501819086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101810053.2,
            "unit": "ns",
            "range": "± 680584.3024674985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202113903,
            "unit": "ns",
            "range": "± 1187478.2538450365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282378.6551724138,
            "unit": "ns",
            "range": "± 11653.483362304129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270093.7037037037,
            "unit": "ns",
            "range": "± 7414.394434605488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228809.33333333334,
            "unit": "ns",
            "range": "± 1943.0333985494917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4199167.285714285,
            "unit": "ns",
            "range": "± 27285.539707743683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3757818.933333333,
            "unit": "ns",
            "range": "± 28139.411326126785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16392.79381443299,
            "unit": "ns",
            "range": "± 1420.5462706454418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85483.65476190476,
            "unit": "ns",
            "range": "± 4555.981352485315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70064.5,
            "unit": "ns",
            "range": "± 1228.1806275325116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78798.95945945945,
            "unit": "ns",
            "range": "± 3411.4178606924947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4314.614583333333,
            "unit": "ns",
            "range": "± 590.6098430710888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16367.421052631578,
            "unit": "ns",
            "range": "± 1657.2329320410674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46192.10810810811,
            "unit": "ns",
            "range": "± 2308.447284402411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6485802.3921875,
            "unit": "ns",
            "range": "± 29021.309005877127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920061.13125,
            "unit": "ns",
            "range": "± 4129.153680183297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368486.2056790865,
            "unit": "ns",
            "range": "± 1143.4447193742878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615216.40234375,
            "unit": "ns",
            "range": "± 5043.169476667842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809209.6104910715,
            "unit": "ns",
            "range": "± 388.20880035326684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752394.4973493303,
            "unit": "ns",
            "range": "± 704.1326947471184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340252.1170212766,
            "unit": "ns",
            "range": "± 83589.22424698035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647935.5416666665,
            "unit": "ns",
            "range": "± 67509.10616706793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2151870.7653061226,
            "unit": "ns",
            "range": "± 146795.6050145355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5283309.04,
            "unit": "ns",
            "range": "± 139256.76875185157"
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
        "date": 1687403072373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3319924.227272727,
            "unit": "ns",
            "range": "± 123160.6940381027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470419,
            "unit": "ns",
            "range": "± 35732.662476176665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297208.4375,
            "unit": "ns",
            "range": "± 81430.75618214431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4447968.25,
            "unit": "ns",
            "range": "± 146928.3760119438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6859122.666666667,
            "unit": "ns",
            "range": "± 179309.05549958666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6083250.446354167,
            "unit": "ns",
            "range": "± 25002.22133725401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051546.39609375,
            "unit": "ns",
            "range": "± 9540.161485187558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366743.9146205357,
            "unit": "ns",
            "range": "± 3913.9585018142275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640159.2408854165,
            "unit": "ns",
            "range": "± 6903.88530246195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853292.3823567708,
            "unit": "ns",
            "range": "± 2404.217493431156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774055.8528645834,
            "unit": "ns",
            "range": "± 1768.0842326736206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283242.7727272727,
            "unit": "ns",
            "range": "± 6961.2145213715485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267272.5740740741,
            "unit": "ns",
            "range": "± 11232.512347883394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231947.38461538462,
            "unit": "ns",
            "range": "± 1497.560434977586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4307242.866666666,
            "unit": "ns",
            "range": "± 62503.12008539673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3968061.2666666666,
            "unit": "ns",
            "range": "± 65417.80312342534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17300.336842105262,
            "unit": "ns",
            "range": "± 1226.7749677510378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82326.59550561798,
            "unit": "ns",
            "range": "± 4581.296183493125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73458.71428571429,
            "unit": "ns",
            "range": "± 1073.1898841642737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87370.94845360825,
            "unit": "ns",
            "range": "± 12719.731433363624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4574.114583333333,
            "unit": "ns",
            "range": "± 559.6134919894862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16933.706666666665,
            "unit": "ns",
            "range": "± 870.7422862184935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416799.843373494,
            "unit": "ns",
            "range": "± 75576.66954216047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707162.696969697,
            "unit": "ns",
            "range": "± 85760.68586570016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2266216.566666667,
            "unit": "ns",
            "range": "± 100781.9602857048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5579583.018867925,
            "unit": "ns",
            "range": "± 229065.0241992511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48208.432098765436,
            "unit": "ns",
            "range": "± 2547.9877547697893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7852995.692307692,
            "unit": "ns",
            "range": "± 19131.63722034184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21312228.666666668,
            "unit": "ns",
            "range": "± 359594.44782811863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53556019.94736842,
            "unit": "ns",
            "range": "± 1160233.871358389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104508158.14285715,
            "unit": "ns",
            "range": "± 1077924.4703415954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210664390.13333333,
            "unit": "ns",
            "range": "± 2298887.546339312"
          }
        ]
      }
    ]
  }
}