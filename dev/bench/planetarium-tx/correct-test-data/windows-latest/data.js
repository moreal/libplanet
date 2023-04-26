window.BENCHMARK_DATA = {
  "lastUpdate": 1682497830377,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "71854094e6b4fb791173a6c8a2a6a14f6d1f2e17",
          "message": "test(@planetarium/tx): correct tx test data",
          "timestamp": "2023-04-26T17:10:51+09:00",
          "tree_id": "201e1f29e6b6f6eb3048aa9a72d9cd1de60e6b5a",
          "url": "https://github.com/moreal/libplanet/commit/71854094e6b4fb791173a6c8a2a6a14f6d1f2e17"
        },
        "date": 1682497814281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655763.5416666667,
            "unit": "ns",
            "range": "± 141098.82771700848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991950,
            "unit": "ns",
            "range": "± 151611.87068740142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617797.9591836734,
            "unit": "ns",
            "range": "± 178771.23144306082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6487256.060606061,
            "unit": "ns",
            "range": "± 440804.9605303919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56122.34042553192,
            "unit": "ns",
            "range": "± 4322.239419941293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8365757.142857143,
            "unit": "ns",
            "range": "± 144159.8709995032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23044385.714285713,
            "unit": "ns",
            "range": "± 249980.51495495177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58115446.15384615,
            "unit": "ns",
            "range": "± 433840.6151560436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115660362.5,
            "unit": "ns",
            "range": "± 2252193.8823807626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238334209.52380952,
            "unit": "ns",
            "range": "± 5571381.410377929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5719095.104166667,
            "unit": "ns",
            "range": "± 91613.87238737494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859562.8255208333,
            "unit": "ns",
            "range": "± 18993.607505008353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405919.8521205357,
            "unit": "ns",
            "range": "± 10777.899436577243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3159683.9713541665,
            "unit": "ns",
            "range": "± 28697.57682929361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985712.4162946428,
            "unit": "ns",
            "range": "± 6598.133170247245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916103.7179129465,
            "unit": "ns",
            "range": "± 7394.530160049213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3746750,
            "unit": "ns",
            "range": "± 120974.78074275471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3997960,
            "unit": "ns",
            "range": "± 103429.85948619158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4604558.333333333,
            "unit": "ns",
            "range": "± 117450.82196268422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5047265.517241379,
            "unit": "ns",
            "range": "± 144070.87114101188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7974544.444444444,
            "unit": "ns",
            "range": "± 301010.080286929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313709.3023255814,
            "unit": "ns",
            "range": "± 11467.96394835233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302346.1538461539,
            "unit": "ns",
            "range": "± 10481.106966292557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257915.6862745098,
            "unit": "ns",
            "range": "± 10501.68315174324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4708764.285714285,
            "unit": "ns",
            "range": "± 47002.62852130812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209569.230769231,
            "unit": "ns",
            "range": "± 56455.327245167704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24356.25,
            "unit": "ns",
            "range": "± 2524.107450377783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105612.37113402062,
            "unit": "ns",
            "range": "± 8714.944751832418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99066.66666666667,
            "unit": "ns",
            "range": "± 9491.077989538846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119251.03092783505,
            "unit": "ns",
            "range": "± 17957.388769699144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7731.914893617021,
            "unit": "ns",
            "range": "± 1287.4257691061612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23002.15053763441,
            "unit": "ns",
            "range": "± 1761.6061405670116"
          }
        ]
      }
    ]
  }
}