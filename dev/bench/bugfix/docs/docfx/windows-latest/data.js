window.BENCHMARK_DATA = {
  "lastUpdate": 1689822558505,
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
          "id": "08b4f59855bee5a03b1da544e4eb9adedead715e",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:38:05+09:00",
          "tree_id": "4cb596b9a792d1fd5a4b53708adfd6f71e0c5a2a",
          "url": "https://github.com/moreal/libplanet/commit/08b4f59855bee5a03b1da544e4eb9adedead715e"
        },
        "date": 1689821631877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418965.1515151516,
            "unit": "ns",
            "range": "± 44458.028810976044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442164.285714286,
            "unit": "ns",
            "range": "± 88955.83947277785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855792.3076923077,
            "unit": "ns",
            "range": "± 64790.18519163216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4547420.408163265,
            "unit": "ns",
            "range": "± 181356.68352217754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42735.10638297872,
            "unit": "ns",
            "range": "± 2526.2474804830567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7760823.333333333,
            "unit": "ns",
            "range": "± 35553.61076030447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18919946.666666668,
            "unit": "ns",
            "range": "± 75910.52878851775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48829020,
            "unit": "ns",
            "range": "± 299767.0242991094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98716646.66666667,
            "unit": "ns",
            "range": "± 641367.64347388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196999213.33333334,
            "unit": "ns",
            "range": "± 1424308.3313196853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4923819.140625,
            "unit": "ns",
            "range": "± 4884.183670457667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526205.3013392857,
            "unit": "ns",
            "range": "± 1542.3912978282178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163042.8645833333,
            "unit": "ns",
            "range": "± 2100.27086608718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2551181.6015625,
            "unit": "ns",
            "range": "± 3390.1969017205806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800388.7825520834,
            "unit": "ns",
            "range": "± 927.6342953440263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754858.4505208334,
            "unit": "ns",
            "range": "± 1052.453868947939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3007300,
            "unit": "ns",
            "range": "± 48692.59257247011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3073100,
            "unit": "ns",
            "range": "± 33397.81857718084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3905135.714285714,
            "unit": "ns",
            "range": "± 53220.45380581327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3426948.1481481483,
            "unit": "ns",
            "range": "± 137846.3798235855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5959025.490196078,
            "unit": "ns",
            "range": "± 209726.46074650405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261884.0909090909,
            "unit": "ns",
            "range": "± 8307.630092811378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247690.47619047618,
            "unit": "ns",
            "range": "± 11369.70669871244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224859.0909090909,
            "unit": "ns",
            "range": "± 13211.629778722176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3938046.6666666665,
            "unit": "ns",
            "range": "± 44882.81355241617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523473.3333333335,
            "unit": "ns",
            "range": "± 46548.98290536336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19958.947368421053,
            "unit": "ns",
            "range": "± 1404.1348314389265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87705.37634408602,
            "unit": "ns",
            "range": "± 7508.797240446034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65521.95121951219,
            "unit": "ns",
            "range": "± 2228.397652476096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86323.4693877551,
            "unit": "ns",
            "range": "± 12782.74288540261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4186.59793814433,
            "unit": "ns",
            "range": "± 698.753185141724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17077.36842105263,
            "unit": "ns",
            "range": "± 1507.3890421931812"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "2684d645c3f7733b591bcfd60204306818e24684",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:52:20+09:00",
          "tree_id": "998eb7d8985e43459dd5b7a593f89c471b8127c7",
          "url": "https://github.com/moreal/libplanet/commit/2684d645c3f7733b591bcfd60204306818e24684"
        },
        "date": 1689822534938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399264.9484536082,
            "unit": "ns",
            "range": "± 105499.86279734077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2607744.871794872,
            "unit": "ns",
            "range": "± 134248.81304700166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1822988.775510204,
            "unit": "ns",
            "range": "± 142691.11538142254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4962518.055555556,
            "unit": "ns",
            "range": "± 245323.6185906677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48335.07462686567,
            "unit": "ns",
            "range": "± 2241.7021219237313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7241300,
            "unit": "ns",
            "range": "± 110572.18317600359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20367871.42857143,
            "unit": "ns",
            "range": "± 125288.64168895653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50780606.666666664,
            "unit": "ns",
            "range": "± 542294.8136875189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101982673.33333333,
            "unit": "ns",
            "range": "± 1249922.8693155812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202919186.66666666,
            "unit": "ns",
            "range": "± 2889423.409082231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4832503.932291667,
            "unit": "ns",
            "range": "± 21207.1101023179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548107.9427083333,
            "unit": "ns",
            "range": "± 4157.460576105826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197235.3645833333,
            "unit": "ns",
            "range": "± 3112.494521946918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670399.765625,
            "unit": "ns",
            "range": "± 7441.670255967814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839504.443359375,
            "unit": "ns",
            "range": "± 1283.9512508130033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779432.3893229166,
            "unit": "ns",
            "range": "± 1852.954776242153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262636.5384615385,
            "unit": "ns",
            "range": "± 132741.39686881696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451850.909090909,
            "unit": "ns",
            "range": "± 145100.7974972689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4180712,
            "unit": "ns",
            "range": "± 107844.48030999702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3826150,
            "unit": "ns",
            "range": "± 153500.4211255275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6393775,
            "unit": "ns",
            "range": "± 195485.1103974335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272610.71428571426,
            "unit": "ns",
            "range": "± 7709.462165307439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256200,
            "unit": "ns",
            "range": "± 6190.83609966402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228468,
            "unit": "ns",
            "range": "± 5479.790141967117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4117157.1428571427,
            "unit": "ns",
            "range": "± 27041.69755384093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762489.4736842103,
            "unit": "ns",
            "range": "± 79709.1859667716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20744.827586206895,
            "unit": "ns",
            "range": "± 1261.6672819697526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89407.14285714286,
            "unit": "ns",
            "range": "± 4365.952638664806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76198.5294117647,
            "unit": "ns",
            "range": "± 3635.3362219859705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87873.23943661971,
            "unit": "ns",
            "range": "± 3913.8931201729083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5461.855670103093,
            "unit": "ns",
            "range": "± 1030.4169159221701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20345.833333333332,
            "unit": "ns",
            "range": "± 1840.7044799359128"
          }
        ]
      }
    ]
  }
}