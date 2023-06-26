window.BENCHMARK_DATA = {
  "lastUpdate": 1687749502603,
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
        "date": 1687403322930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272600.21875,
            "unit": "ns",
            "range": "± 90284.37415573384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3621603.9655172415,
            "unit": "ns",
            "range": "± 84616.7277469763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297055.352941177,
            "unit": "ns",
            "range": "± 87339.3285037883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4248409.884615385,
            "unit": "ns",
            "range": "± 163710.48007114168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6763983.166666667,
            "unit": "ns",
            "range": "± 235067.88339825018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917714.6640625,
            "unit": "ns",
            "range": "± 16934.9223765731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872444.1553485577,
            "unit": "ns",
            "range": "± 5756.085015588567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331197.5323660714,
            "unit": "ns",
            "range": "± 7839.348693041291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575660.8815104165,
            "unit": "ns",
            "range": "± 8052.029942610359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826320.1789202009,
            "unit": "ns",
            "range": "± 2249.288272599176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749709.0689871652,
            "unit": "ns",
            "range": "± 1253.6880830424975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278280.0256410256,
            "unit": "ns",
            "range": "± 8904.736325441705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267151.1538461539,
            "unit": "ns",
            "range": "± 9275.350648892958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235352.52380952382,
            "unit": "ns",
            "range": "± 5351.451080025376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250490.466666667,
            "unit": "ns",
            "range": "± 43977.65437756294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815854.933333333,
            "unit": "ns",
            "range": "± 51843.24902939446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18073.515463917527,
            "unit": "ns",
            "range": "± 1346.1333214170168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85989.05747126437,
            "unit": "ns",
            "range": "± 4717.221852773787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72023.88888888889,
            "unit": "ns",
            "range": "± 1497.4602376686644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91383.73404255319,
            "unit": "ns",
            "range": "± 12305.075211503754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4702.2,
            "unit": "ns",
            "range": "± 674.572750520417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16121.41111111111,
            "unit": "ns",
            "range": "± 1287.5417208856666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383849.191780822,
            "unit": "ns",
            "range": "± 67021.689701224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661934.769230769,
            "unit": "ns",
            "range": "± 42636.01738388536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2195748.972222222,
            "unit": "ns",
            "range": "± 107539.58205852931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5227952.842105263,
            "unit": "ns",
            "range": "± 164597.98600053968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46704.41176470588,
            "unit": "ns",
            "range": "± 2243.4391715682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7566435.2,
            "unit": "ns",
            "range": "± 32707.599818478186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20922207.35714286,
            "unit": "ns",
            "range": "± 309376.21042389027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52213302,
            "unit": "ns",
            "range": "± 649506.8518255275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105652982.45,
            "unit": "ns",
            "range": "± 2422061.3973984285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204014447.92857143,
            "unit": "ns",
            "range": "± 2062427.0487524928"
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
        "date": 1687405152994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3625848.5918367347,
            "unit": "ns",
            "range": "± 426400.5085153889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4094919.907216495,
            "unit": "ns",
            "range": "± 500085.2185956885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5466611.870967742,
            "unit": "ns",
            "range": "± 576766.7939021243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5261220.161290322,
            "unit": "ns",
            "range": "± 614668.8294403157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9161829.43298969,
            "unit": "ns",
            "range": "± 779882.4486188327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7227960.59375,
            "unit": "ns",
            "range": "± 194052.50062911244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2239044.857772436,
            "unit": "ns",
            "range": "± 77776.19637967441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1615203.810546875,
            "unit": "ns",
            "range": "± 34038.59893359572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3110959.0136126895,
            "unit": "ns",
            "range": "± 98250.68768054541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041741.7451596467,
            "unit": "ns",
            "range": "± 25269.442537074512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930849.2120768229,
            "unit": "ns",
            "range": "± 41379.97015511457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366591,
            "unit": "ns",
            "range": "± 60191.6764368846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357148.8585858586,
            "unit": "ns",
            "range": "± 63333.2630394542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317531.4895833333,
            "unit": "ns",
            "range": "± 56949.17209600981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4997921.333333333,
            "unit": "ns",
            "range": "± 602329.3990771542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4719667.695652174,
            "unit": "ns",
            "range": "± 528353.5885935957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30616.397959183672,
            "unit": "ns",
            "range": "± 11675.299795475172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119833.54166666667,
            "unit": "ns",
            "range": "± 24148.283368395998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111758.77777777778,
            "unit": "ns",
            "range": "± 25714.304839499062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133673.94897959183,
            "unit": "ns",
            "range": "± 27439.10054294086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10782.373737373737,
            "unit": "ns",
            "range": "± 9471.61196071742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31537.03,
            "unit": "ns",
            "range": "± 10831.757032597805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676932.092783505,
            "unit": "ns",
            "range": "± 234676.30073460954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3266471.4285714286,
            "unit": "ns",
            "range": "± 432816.51133843686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668465.432989691,
            "unit": "ns",
            "range": "± 316626.48032908014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7032659.78125,
            "unit": "ns",
            "range": "± 754041.1505603958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68604.20202020202,
            "unit": "ns",
            "range": "± 18128.43224925736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8897873.957894737,
            "unit": "ns",
            "range": "± 955380.8068632077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25901319.864583332,
            "unit": "ns",
            "range": "± 2736661.4767463645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66687013.19,
            "unit": "ns",
            "range": "± 4475947.497145182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133943461.52525252,
            "unit": "ns",
            "range": "± 8566596.34749219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266215904.0147059,
            "unit": "ns",
            "range": "± 12681736.303997034"
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
        "date": 1687405658978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3810343.6666666665,
            "unit": "ns",
            "range": "± 62548.648704904284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3957313.933333333,
            "unit": "ns",
            "range": "± 61401.093947289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749417.466666667,
            "unit": "ns",
            "range": "± 52062.79837556985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4857367.068965517,
            "unit": "ns",
            "range": "± 141333.30169090445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7435017.347826087,
            "unit": "ns",
            "range": "± 181332.18436229345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6285283.105729166,
            "unit": "ns",
            "range": "± 42889.37042305899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901610.320703125,
            "unit": "ns",
            "range": "± 1135.3282700764796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384335.826171875,
            "unit": "ns",
            "range": "± 2713.5262743918397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648067.348858173,
            "unit": "ns",
            "range": "± 2306.4822984022835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996427.3582226563,
            "unit": "ns",
            "range": "± 71958.2828637599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766289.1185825893,
            "unit": "ns",
            "range": "± 287.32053374103305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298709.39215686277,
            "unit": "ns",
            "range": "± 12031.695250592797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291174.4262295082,
            "unit": "ns",
            "range": "± 12307.318072944807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272340.84210526315,
            "unit": "ns",
            "range": "± 13820.61291072397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4690301.533333333,
            "unit": "ns",
            "range": "± 40762.77793153011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4238227.866666666,
            "unit": "ns",
            "range": "± 47041.87101002478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21972.86170212766,
            "unit": "ns",
            "range": "± 1984.7377855631792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101298.41237113402,
            "unit": "ns",
            "range": "± 7755.544927330727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88331,
            "unit": "ns",
            "range": "± 6099.175863043575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102185.58888888889,
            "unit": "ns",
            "range": "± 10843.093588059899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6999.216494845361,
            "unit": "ns",
            "range": "± 978.9756788220462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22077.65625,
            "unit": "ns",
            "range": "± 1887.1106504145152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552889.6082474226,
            "unit": "ns",
            "range": "± 95270.86468377901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2879176.1428571427,
            "unit": "ns",
            "range": "± 105063.05506870309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2469497.4375,
            "unit": "ns",
            "range": "± 128008.38147478279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5780040.731707317,
            "unit": "ns",
            "range": "± 208376.22109216594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49302.347368421055,
            "unit": "ns",
            "range": "± 3465.9042225917283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9106582.6,
            "unit": "ns",
            "range": "± 99999.43679112828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23442218.466666665,
            "unit": "ns",
            "range": "± 208272.60639222222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58411636.13333333,
            "unit": "ns",
            "range": "± 246242.2125831355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116121540.21428572,
            "unit": "ns",
            "range": "± 556167.9413120269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281405791.5,
            "unit": "ns",
            "range": "± 838010.6894223458"
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
        "date": 1687495636578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3958299.625,
            "unit": "ns",
            "range": "± 382528.7900909792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4034904.136842105,
            "unit": "ns",
            "range": "± 308542.0926861369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5424154.787878788,
            "unit": "ns",
            "range": "± 394091.58119179663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5013479.34375,
            "unit": "ns",
            "range": "± 423160.71398546785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8775718,
            "unit": "ns",
            "range": "± 424654.57372530503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8913774.01369863,
            "unit": "ns",
            "range": "± 443232.053450168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26178413.107526883,
            "unit": "ns",
            "range": "± 1717366.8566146262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68508730.77777778,
            "unit": "ns",
            "range": "± 1897574.6598902817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131880901.34666666,
            "unit": "ns",
            "range": "± 6612963.571295933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271359339.83870965,
            "unit": "ns",
            "range": "± 12196250.65632842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371729.96875,
            "unit": "ns",
            "range": "± 54746.339102879145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357026.69,
            "unit": "ns",
            "range": "± 55850.13935012322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311517.1030927835,
            "unit": "ns",
            "range": "± 47962.20568376481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5100016.096774193,
            "unit": "ns",
            "range": "± 426050.77955812775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4710403.526881721,
            "unit": "ns",
            "range": "± 391186.0243494077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25077.89898989899,
            "unit": "ns",
            "range": "± 9120.104644376988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115859.70408163265,
            "unit": "ns",
            "range": "± 25726.775638762036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107628.23404255319,
            "unit": "ns",
            "range": "± 22488.960426938815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141430.91836734695,
            "unit": "ns",
            "range": "± 38128.172141326526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5934.79347826087,
            "unit": "ns",
            "range": "± 1130.5402339661955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21571.05376344086,
            "unit": "ns",
            "range": "± 6899.750062211754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65375.614583333336,
            "unit": "ns",
            "range": "± 17986.572942567782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7079924.279166667,
            "unit": "ns",
            "range": "± 74526.74571587465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2220245.8806152344,
            "unit": "ns",
            "range": "± 41264.551527361284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1845122.4133300781,
            "unit": "ns",
            "range": "± 34579.508181732475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123644.873177083,
            "unit": "ns",
            "range": "± 54391.84814767742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040245.8641183035,
            "unit": "ns",
            "range": "± 23038.545835321813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962864.1625976562,
            "unit": "ns",
            "range": "± 18781.56765155775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692657,
            "unit": "ns",
            "range": "± 195072.66109174976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3357187.776595745,
            "unit": "ns",
            "range": "± 295709.9076477411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2671716.6875,
            "unit": "ns",
            "range": "± 234395.5917581401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993978.278350515,
            "unit": "ns",
            "range": "± 620157.7229757891"
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
        "date": 1687504370663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3356859.7333333334,
            "unit": "ns",
            "range": "± 98868.5144484167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526782.2413793104,
            "unit": "ns",
            "range": "± 97085.98936791446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4405514.388888889,
            "unit": "ns",
            "range": "± 88745.92574054176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4351746.176470588,
            "unit": "ns",
            "range": "± 70770.38596513665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6952887.037037037,
            "unit": "ns",
            "range": "± 164738.5383986678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7866976.2,
            "unit": "ns",
            "range": "± 119143.9494154625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19961391.466666665,
            "unit": "ns",
            "range": "± 142124.9141539465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51612601.84615385,
            "unit": "ns",
            "range": "± 328210.9624273302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102932561.53333333,
            "unit": "ns",
            "range": "± 625341.7285638843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204803506.2,
            "unit": "ns",
            "range": "± 2088762.4551242641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287936.6666666667,
            "unit": "ns",
            "range": "± 10630.713339155129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278203.79545454547,
            "unit": "ns",
            "range": "± 10344.437668530774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253072.97222222222,
            "unit": "ns",
            "range": "± 12441.166700613612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349337.8,
            "unit": "ns",
            "range": "± 30143.988455885716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936068.214285714,
            "unit": "ns",
            "range": "± 16226.563151813147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19852.052083333332,
            "unit": "ns",
            "range": "± 1857.6507482629588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94936.82474226804,
            "unit": "ns",
            "range": "± 7017.905292016613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75635.22916666667,
            "unit": "ns",
            "range": "± 2940.9353573569892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96232.25773195876,
            "unit": "ns",
            "range": "± 9910.741587706692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5471.428571428572,
            "unit": "ns",
            "range": "± 969.323283980107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19679.968421052632,
            "unit": "ns",
            "range": "± 1688.3565057420553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47319.552083333336,
            "unit": "ns",
            "range": "± 2826.913935240826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6159484.795200893,
            "unit": "ns",
            "range": "± 13039.115666460279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857524.3469587055,
            "unit": "ns",
            "range": "± 4441.998359613126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371901.1438802083,
            "unit": "ns",
            "range": "± 639.4570483538718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550436.1607572115,
            "unit": "ns",
            "range": "± 1410.4652826163424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816173.9932942708,
            "unit": "ns",
            "range": "± 554.8299171597683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738428.6439732143,
            "unit": "ns",
            "range": "± 508.0166135881962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388228.02247191,
            "unit": "ns",
            "range": "± 78077.56205239086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2647538.413043478,
            "unit": "ns",
            "range": "± 93508.56556287024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209476.225,
            "unit": "ns",
            "range": "± 114949.0275428085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5266665.304347826,
            "unit": "ns",
            "range": "± 119555.42783976234"
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
        "date": 1687749497774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194718.0714285714,
            "unit": "ns",
            "range": "± 35108.55341862366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371229.6315789474,
            "unit": "ns",
            "range": "± 44213.38061443306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4302963.714285715,
            "unit": "ns",
            "range": "± 121295.60452139903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4118927.8260869565,
            "unit": "ns",
            "range": "± 91611.052597704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691084.461538462,
            "unit": "ns",
            "range": "± 110809.43391893985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7867654.533333333,
            "unit": "ns",
            "range": "± 64273.67737580855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20201321,
            "unit": "ns",
            "range": "± 81318.63161574438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51222070.06666667,
            "unit": "ns",
            "range": "± 226932.65408532447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102007317.28571428,
            "unit": "ns",
            "range": "± 498704.8913621436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202153937,
            "unit": "ns",
            "range": "± 1958515.9797538398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273677.64285714284,
            "unit": "ns",
            "range": "± 9976.169294682566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266099.537037037,
            "unit": "ns",
            "range": "± 11176.145338652224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231001.33333333334,
            "unit": "ns",
            "range": "± 3308.7978323309653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219910.4,
            "unit": "ns",
            "range": "± 34053.56372120671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934186.3571428573,
            "unit": "ns",
            "range": "± 59039.0223087267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19521.705263157895,
            "unit": "ns",
            "range": "± 1711.5407881943263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91392.53,
            "unit": "ns",
            "range": "± 6039.641999650261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72183.66666666667,
            "unit": "ns",
            "range": "± 1284.8903047490455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89752.5306122449,
            "unit": "ns",
            "range": "± 11716.46450157124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4545.896907216495,
            "unit": "ns",
            "range": "± 712.7994178550525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15858.40625,
            "unit": "ns",
            "range": "± 1392.1332481454874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45963.09574468085,
            "unit": "ns",
            "range": "± 3266.4607299662744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6073776.302604167,
            "unit": "ns",
            "range": "± 34057.48782331978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986582.5682291666,
            "unit": "ns",
            "range": "± 1930.700044610631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382462.2342447916,
            "unit": "ns",
            "range": "± 1971.2927134121708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592273.770926339,
            "unit": "ns",
            "range": "± 1905.6533419520113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819349.0385742188,
            "unit": "ns",
            "range": "± 398.3184226861405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735603.2873535156,
            "unit": "ns",
            "range": "± 773.386140662394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1457533.4583333333,
            "unit": "ns",
            "range": "± 110236.16935575104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687582.311111111,
            "unit": "ns",
            "range": "± 92653.59176593361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270990.6704545454,
            "unit": "ns",
            "range": "± 119849.7945943815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5471512.52,
            "unit": "ns",
            "range": "± 130483.60196116599"
          }
        ]
      }
    ]
  }
}