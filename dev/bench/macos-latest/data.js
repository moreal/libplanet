window.BENCHMARK_DATA = {
  "lastUpdate": 1675381121584,
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
          "id": "b48737cfa2b18324a2bed25b80bc27076741b9ce",
          "message": "Deploy on every push",
          "timestamp": "2023-02-03T08:25:36+09:00",
          "tree_id": "528c30f9a365fbd119edcdad71cb8022842c4531",
          "url": "https://github.com/moreal/libplanet/commit/b48737cfa2b18324a2bed25b80bc27076741b9ce"
        },
        "date": 1675381118607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121980.22164948453,
            "unit": "ns",
            "range": "± 8685.396676728737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104945.3829787234,
            "unit": "ns",
            "range": "± 11799.57829195091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233755.20408163266,
            "unit": "ns",
            "range": "± 29220.793755654533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194768.25454545455,
            "unit": "ns",
            "range": "± 8295.88024088124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3580337.9,
            "unit": "ns",
            "range": "± 81066.0068104998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9372093.22413793,
            "unit": "ns",
            "range": "± 272381.83450468106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22980.044444444444,
            "unit": "ns",
            "range": "± 3165.705895724872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59812.765957446805,
            "unit": "ns",
            "range": "± 8698.687739897783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44749.26344086022,
            "unit": "ns",
            "range": "± 4999.210384167747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107315.65263157895,
            "unit": "ns",
            "range": "± 17182.458916598775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5806.130952380952,
            "unit": "ns",
            "range": "± 642.3998263244881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22713.69230769231,
            "unit": "ns",
            "range": "± 3636.7199039559073"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4657272.85703125,
            "unit": "ns",
            "range": "± 69389.59507339416"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5579802.674418605,
            "unit": "ns",
            "range": "± 301197.7494624222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25120586.70588235,
            "unit": "ns",
            "range": "± 804906.0439138329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6508802.21686747,
            "unit": "ns",
            "range": "± 345460.2495654961"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29706800.25,
            "unit": "ns",
            "range": "± 984592.9955109769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6450490.040104167,
            "unit": "ns",
            "range": "± 45193.59329647459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821436.0842848558,
            "unit": "ns",
            "range": "± 6762.734766918925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234003.64453125,
            "unit": "ns",
            "range": "± 6497.678050873582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2391560.8364583333,
            "unit": "ns",
            "range": "± 17175.458734238895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761039.8864583333,
            "unit": "ns",
            "range": "± 6531.888939226041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762214.2000651042,
            "unit": "ns",
            "range": "± 8674.846511342175"
          }
        ]
      }
    ]
  }
}