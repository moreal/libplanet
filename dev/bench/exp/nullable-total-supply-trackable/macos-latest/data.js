window.BENCHMARK_DATA = {
  "lastUpdate": 1683797266562,
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
          "id": "6a3446beb0b2fcedb89f6d11954a5419d96cf1b5",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T16:49:19+09:00",
          "tree_id": "a437fefa22201bdf1e35307d13475b2fd118e8d9",
          "url": "https://github.com/moreal/libplanet/commit/6a3446beb0b2fcedb89f6d11954a5419d96cf1b5"
        },
        "date": 1683792488480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9338594.78,
            "unit": "ns",
            "range": "± 345812.22667170764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23481301.625,
            "unit": "ns",
            "range": "± 607168.6752028211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59397216.84210526,
            "unit": "ns",
            "range": "± 1265176.1782215799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123246499.5,
            "unit": "ns",
            "range": "± 2809048.7989666536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243502975.10714287,
            "unit": "ns",
            "range": "± 6929764.212535418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71870.68131868132,
            "unit": "ns",
            "range": "± 6623.8801231757425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392385.3076923077,
            "unit": "ns",
            "range": "± 26138.082388513467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382117.21649484534,
            "unit": "ns",
            "range": "± 37812.53068544948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329432.4946236559,
            "unit": "ns",
            "range": "± 25006.958947819017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823214.121212121,
            "unit": "ns",
            "range": "± 137413.46667261128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370168.75,
            "unit": "ns",
            "range": "± 95578.56651433003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19315.355670103094,
            "unit": "ns",
            "range": "± 1478.4009660616061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97348.47777777778,
            "unit": "ns",
            "range": "± 5449.228136719684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93524.92783505155,
            "unit": "ns",
            "range": "± 9488.410650463085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116134.28260869565,
            "unit": "ns",
            "range": "± 11257.993413547303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4966.0759493670885,
            "unit": "ns",
            "range": "± 1049.6208445122763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18877.574468085106,
            "unit": "ns",
            "range": "± 1367.7179367873807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1813826.1530612244,
            "unit": "ns",
            "range": "± 146587.76469729852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3460140.375,
            "unit": "ns",
            "range": "± 158109.7882959812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2916570.4791666665,
            "unit": "ns",
            "range": "± 204074.0685072833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8021692.804123712,
            "unit": "ns",
            "range": "± 514679.4511133977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4032918.777777778,
            "unit": "ns",
            "range": "± 183667.76616843976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4231441.232323232,
            "unit": "ns",
            "range": "± 266443.4307026322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5371067.75,
            "unit": "ns",
            "range": "± 260789.10309433943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5635151.413978495,
            "unit": "ns",
            "range": "± 409965.24315389426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9743063.446808511,
            "unit": "ns",
            "range": "± 568674.8147769367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7313448.427849265,
            "unit": "ns",
            "range": "± 146958.34984548588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2182068.2497209823,
            "unit": "ns",
            "range": "± 13372.792951009314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467378.094951923,
            "unit": "ns",
            "range": "± 17021.08177448069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854913.0477120536,
            "unit": "ns",
            "range": "± 30550.574487088088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933074.4580078125,
            "unit": "ns",
            "range": "± 4118.952312952573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880157.8834134615,
            "unit": "ns",
            "range": "± 4396.329681734785"
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
          "id": "5d48171ccc1c143e964653be710b13f7b90fe711",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T18:09:34+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/moreal/libplanet/commit/5d48171ccc1c143e964653be710b13f7b90fe711"
        },
        "date": 1683797247010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8527015,
            "unit": "ns",
            "range": "± 154347.16745328673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22587910.875,
            "unit": "ns",
            "range": "± 1036719.8242395205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54941800.9,
            "unit": "ns",
            "range": "± 948431.2380998876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103989031.93333334,
            "unit": "ns",
            "range": "± 3002975.9395239563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224399104.1,
            "unit": "ns",
            "range": "± 6688519.354386113"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75200.30232558139,
            "unit": "ns",
            "range": "± 5096.699555063332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354942.6208791209,
            "unit": "ns",
            "range": "± 31152.47363705566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337931.32653061225,
            "unit": "ns",
            "range": "± 23588.695966118376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319762.7444444444,
            "unit": "ns",
            "range": "± 21314.598917074545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4355357.869565218,
            "unit": "ns",
            "range": "± 108051.43727381306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923517.743243243,
            "unit": "ns",
            "range": "± 128023.03535115281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23033.422680412372,
            "unit": "ns",
            "range": "± 5475.282094778032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112355.66304347826,
            "unit": "ns",
            "range": "± 13015.19397995136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111195.33684210526,
            "unit": "ns",
            "range": "± 18726.150716913617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125454.84042553192,
            "unit": "ns",
            "range": "± 10232.55820246019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7396.347826086957,
            "unit": "ns",
            "range": "± 1424.0886728069988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22179.594736842104,
            "unit": "ns",
            "range": "± 4180.852562636469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575733.9894736842,
            "unit": "ns",
            "range": "± 123767.6204465874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3219695.712765957,
            "unit": "ns",
            "range": "± 268753.1216311478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2760510.336734694,
            "unit": "ns",
            "range": "± 305947.5818469797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6851946.919354838,
            "unit": "ns",
            "range": "± 435868.3063025714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3558530.9945054944,
            "unit": "ns",
            "range": "± 293777.52020414564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3582082.2384615387,
            "unit": "ns",
            "range": "± 166968.78899992778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4696122.897058823,
            "unit": "ns",
            "range": "± 223067.05270222653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4617002.925531914,
            "unit": "ns",
            "range": "± 367859.8876251032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8206355.723404256,
            "unit": "ns",
            "range": "± 649694.3101850318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6981870.6484375,
            "unit": "ns",
            "range": "± 130061.59106057591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030470.2622767857,
            "unit": "ns",
            "range": "± 28686.601871634422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301282.5758713942,
            "unit": "ns",
            "range": "± 10885.800887651982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2709833.685221354,
            "unit": "ns",
            "range": "± 62151.85757862483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814753.3047572544,
            "unit": "ns",
            "range": "± 8144.22226990634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722666.5149489183,
            "unit": "ns",
            "range": "± 6447.705851757319"
          }
        ]
      }
    ]
  }
}