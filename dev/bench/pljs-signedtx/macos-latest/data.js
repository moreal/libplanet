window.BENCHMARK_DATA = {
  "lastUpdate": 1701676759157,
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
          "id": "0fb72889e2b83ce1316cc06674214ec0053ce91f",
          "message": "@planetarium/tx: Remove useless template variable",
          "timestamp": "2023-11-23T00:00:10+09:00",
          "tree_id": "c7720e957e7c8e0fc67a1641937f836af77cde6e",
          "url": "https://github.com/moreal/libplanet/commit/0fb72889e2b83ce1316cc06674214ec0053ce91f"
        },
        "date": 1700666313710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9578297.07142857,
            "unit": "ns",
            "range": "± 380600.4107002623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22373723.475409836,
            "unit": "ns",
            "range": "± 1000471.7850800459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49732023.678571425,
            "unit": "ns",
            "range": "± 1260914.7028933975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103681208.8888889,
            "unit": "ns",
            "range": "± 3406910.0078977663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204702562.56666666,
            "unit": "ns",
            "range": "± 2448606.0226674005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73386.90217391304,
            "unit": "ns",
            "range": "± 8570.441380224436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343059.5425531915,
            "unit": "ns",
            "range": "± 37857.99877013959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314137.16315789474,
            "unit": "ns",
            "range": "± 32854.726459295285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274770.875,
            "unit": "ns",
            "range": "± 20821.725190796573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4252786.6875,
            "unit": "ns",
            "range": "± 175478.11739475874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764462.2887323946,
            "unit": "ns",
            "range": "± 183408.93815491075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24147.844444444443,
            "unit": "ns",
            "range": "± 4155.658016991085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107717.70967741935,
            "unit": "ns",
            "range": "± 16907.994932023088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115029.60112359551,
            "unit": "ns",
            "range": "± 15360.548199886016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111495.62637362638,
            "unit": "ns",
            "range": "± 14325.418434570034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6872.790322580645,
            "unit": "ns",
            "range": "± 1369.6645700177294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20454.204301075268,
            "unit": "ns",
            "range": "± 3475.634573148946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565392.56,
            "unit": "ns",
            "range": "± 177924.98255914802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872008.111111111,
            "unit": "ns",
            "range": "± 105528.52686085117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2531775.4285714286,
            "unit": "ns",
            "range": "± 318720.012618232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13053095.08,
            "unit": "ns",
            "range": "± 3091602.8415161795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232405.7717391304,
            "unit": "ns",
            "range": "± 172524.5106676821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329918.3720930233,
            "unit": "ns",
            "range": "± 194444.10375003412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4295271.547619048,
            "unit": "ns",
            "range": "± 99624.46015787298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4347793.166666667,
            "unit": "ns",
            "range": "± 327104.23848703405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16596628.793814434,
            "unit": "ns",
            "range": "± 2002465.6272715495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143987.227163462,
            "unit": "ns",
            "range": "± 88026.67173902983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1813098.5299944195,
            "unit": "ns",
            "range": "± 17190.69211565391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056149.824609375,
            "unit": "ns",
            "range": "± 16466.01246291916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2700105.770557134,
            "unit": "ns",
            "range": "± 182784.86092348406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848231.4765014648,
            "unit": "ns",
            "range": "± 16238.586975690097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746990.4181780134,
            "unit": "ns",
            "range": "± 11044.322883922574"
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
          "id": "ea3137e08fe0dcf36afa0312c2d8086ff14cde70",
          "message": "Update CHANGELOG",
          "timestamp": "2023-11-23T00:05:57+09:00",
          "tree_id": "45d408daad4ab30f3349601a6d0d8c90bee226ea",
          "url": "https://github.com/moreal/libplanet/commit/ea3137e08fe0dcf36afa0312c2d8086ff14cde70"
        },
        "date": 1700666821088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10594136.677419355,
            "unit": "ns",
            "range": "± 2070912.375339767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31243431.784210525,
            "unit": "ns",
            "range": "± 3876707.7918771044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69496062.5,
            "unit": "ns",
            "range": "± 9710616.818523137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108056310.02150537,
            "unit": "ns",
            "range": "± 10700364.372618081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219548215.5326087,
            "unit": "ns",
            "range": "± 21280717.19255159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60619.53684210526,
            "unit": "ns",
            "range": "± 16291.882886762003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235898.06315789474,
            "unit": "ns",
            "range": "± 21835.87919428613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240241.5164835165,
            "unit": "ns",
            "range": "± 15817.106376299356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220484.76086956522,
            "unit": "ns",
            "range": "± 22159.857451275933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4177723.3279569894,
            "unit": "ns",
            "range": "± 416858.8090265519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3620350.846153846,
            "unit": "ns",
            "range": "± 60163.611033921705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19590.510752688173,
            "unit": "ns",
            "range": "± 3560.633997938347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73174.61578947368,
            "unit": "ns",
            "range": "± 11057.446813783083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82558.66470588236,
            "unit": "ns",
            "range": "± 12923.06408440707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84672.84444444445,
            "unit": "ns",
            "range": "± 18271.58741968199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5484.052083333333,
            "unit": "ns",
            "range": "± 1314.99309079467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14148.704545454546,
            "unit": "ns",
            "range": "± 1729.11570090192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564090.59375,
            "unit": "ns",
            "range": "± 549535.0541224167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3183858.967391304,
            "unit": "ns",
            "range": "± 977181.9819826654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2326920.5816326533,
            "unit": "ns",
            "range": "± 567301.0098517524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13163942,
            "unit": "ns",
            "range": "± 4192262.7573683034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3632121.9891304346,
            "unit": "ns",
            "range": "± 899980.5001361094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3627944.1555555556,
            "unit": "ns",
            "range": "± 619105.8167792364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3907833.7282608696,
            "unit": "ns",
            "range": "± 287285.78520283016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3664672.335443038,
            "unit": "ns",
            "range": "± 189029.16814550146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11194847.588235294,
            "unit": "ns",
            "range": "± 924500.4565964555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4582432.24140625,
            "unit": "ns",
            "range": "± 61087.80245470465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1597353.4512791897,
            "unit": "ns",
            "range": "± 189538.61534925384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 954779.8404792907,
            "unit": "ns",
            "range": "± 42810.3527437754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2312171.7884410513,
            "unit": "ns",
            "range": "± 180422.05031413498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632777.0224609375,
            "unit": "ns",
            "range": "± 7343.074621917241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585737.0424479167,
            "unit": "ns",
            "range": "± 4636.566447779083"
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
          "id": "5f58e1d31b329300fc58dfd6145ea646d95deb4b",
          "message": "Update CHANGELOG",
          "timestamp": "2023-12-04T16:35:11+09:00",
          "tree_id": "629124f4f0097ff2c999e4475efacceeaa66d1bc",
          "url": "https://github.com/moreal/libplanet/commit/5f58e1d31b329300fc58dfd6145ea646d95deb4b"
        },
        "date": 1701676739135,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8847728.222222222,
            "unit": "ns",
            "range": "± 238561.99972549197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22858912.992307693,
            "unit": "ns",
            "range": "± 1060806.7518268835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56474992.131578945,
            "unit": "ns",
            "range": "± 2422909.3025133666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107419690.83333333,
            "unit": "ns",
            "range": "± 2746663.517142376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226275686.71276596,
            "unit": "ns",
            "range": "± 19330654.68527982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55759.315217391304,
            "unit": "ns",
            "range": "± 13062.225594092863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267712.89795918367,
            "unit": "ns",
            "range": "± 27898.745735576467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256297.33333333334,
            "unit": "ns",
            "range": "± 34338.60984035487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221031.2,
            "unit": "ns",
            "range": "± 18964.243719235237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283742.470588235,
            "unit": "ns",
            "range": "± 174331.619155488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010950.395348837,
            "unit": "ns",
            "range": "± 142368.59959879122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18420.75806451613,
            "unit": "ns",
            "range": "± 2803.4151141498896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83202.3894736842,
            "unit": "ns",
            "range": "± 11688.771554491068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71313.43939393939,
            "unit": "ns",
            "range": "± 12677.487865019551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76522.51612903226,
            "unit": "ns",
            "range": "± 12289.392339678207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5005.357142857143,
            "unit": "ns",
            "range": "± 1210.189243529556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15216.827956989247,
            "unit": "ns",
            "range": "± 3226.793392907928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412355.9838709678,
            "unit": "ns",
            "range": "± 151972.47258944003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923552.8,
            "unit": "ns",
            "range": "± 313139.5220587441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2332805.7294117645,
            "unit": "ns",
            "range": "± 268099.2348764587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 22101072.5,
            "unit": "ns",
            "range": "± 7825659.66711583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073176.0416666665,
            "unit": "ns",
            "range": "± 181824.38420629464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3208957.06,
            "unit": "ns",
            "range": "± 221425.77429474346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3886758.347826087,
            "unit": "ns",
            "range": "± 308191.49143177795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4023215.4269662923,
            "unit": "ns",
            "range": "± 222126.90496614398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20216280.53125,
            "unit": "ns",
            "range": "± 5843010.866823997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5702028.5830676025,
            "unit": "ns",
            "range": "± 370951.21168696886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1645813.1671289064,
            "unit": "ns",
            "range": "± 137373.4894945651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047208.766784668,
            "unit": "ns",
            "range": "± 95478.31775210865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2112914.0142886513,
            "unit": "ns",
            "range": "± 71222.14569407614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 688407.0391456117,
            "unit": "ns",
            "range": "± 38924.05222361602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 609071.501134924,
            "unit": "ns",
            "range": "± 20499.83097939754"
          }
        ]
      }
    ]
  }
}