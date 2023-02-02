window.BENCHMARK_DATA = {
  "lastUpdate": 1675381152329,
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
          "id": "c017c13eaba31d9a63c30de6c69e47aaa70561d6",
          "message": "Update build.ps",
          "timestamp": "2023-02-03T08:22:16+09:00",
          "tree_id": "8560dc88889cf5961915d94fa61514c0a1634499",
          "url": "https://github.com/moreal/libplanet/commit/c017c13eaba31d9a63c30de6c69e47aaa70561d6"
        },
        "date": 1675381142537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116226.66666666667,
            "unit": "ns",
            "range": "± 15958.758646213368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5141986.339962121,
            "unit": "ns",
            "range": "± 160814.80147909423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636010.7333096592,
            "unit": "ns",
            "range": "± 33159.322811832695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242224.515625,
            "unit": "ns",
            "range": "± 32489.86951556802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785473.330965909,
            "unit": "ns",
            "range": "± 66113.80737652698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914935.8090049342,
            "unit": "ns",
            "range": "± 20180.862520096856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911463.0615234375,
            "unit": "ns",
            "range": "± 16393.311301462592"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5465084.522405661,
            "unit": "ns",
            "range": "± 226821.5515446158"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5774969.354838709,
            "unit": "ns",
            "range": "± 495536.0258166786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29267167,
            "unit": "ns",
            "range": "± 2655418.399000143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6321116,
            "unit": "ns",
            "range": "± 609753.2958185762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34927290.90909091,
            "unit": "ns",
            "range": "± 2823391.0107546905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107145.91836734694,
            "unit": "ns",
            "range": "± 22898.4227988235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205085.26315789475,
            "unit": "ns",
            "range": "± 31207.17991724754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189006.1855670103,
            "unit": "ns",
            "range": "± 31818.786426787865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3878990.909090909,
            "unit": "ns",
            "range": "± 464354.93969436025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9726962.886597939,
            "unit": "ns",
            "range": "± 878433.7118464019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28031.632653061224,
            "unit": "ns",
            "range": "± 10768.688832101801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57212.08791208791,
            "unit": "ns",
            "range": "± 13971.040167788631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51832.10526315789,
            "unit": "ns",
            "range": "± 13225.780586281528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118896.7741935484,
            "unit": "ns",
            "range": "± 26239.819771770137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4823.595505617977,
            "unit": "ns",
            "range": "± 638.8950817106954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27256,
            "unit": "ns",
            "range": "± 10064.281475404074"
          }
        ]
      }
    ]
  }
}