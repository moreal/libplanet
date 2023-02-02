window.BENCHMARK_DATA = {
  "lastUpdate": 1675380794137,
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
        "date": 1675380792223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108664.97777777778,
            "unit": "ns",
            "range": "± 4127.7865380904095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018776.959134615,
            "unit": "ns",
            "range": "± 23886.282350109374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847380.6143973214,
            "unit": "ns",
            "range": "± 1019.1018358347023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385338.9188058036,
            "unit": "ns",
            "range": "± 940.895678541746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581688.826302083,
            "unit": "ns",
            "range": "± 1008.5406179443739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813030.5591517857,
            "unit": "ns",
            "range": "± 747.5997427720744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764865.0568498884,
            "unit": "ns",
            "range": "± 412.67540753143885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94223.9052631579,
            "unit": "ns",
            "range": "± 8247.170055022592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199576.0588235294,
            "unit": "ns",
            "range": "± 8842.912321449669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185997.2,
            "unit": "ns",
            "range": "± 5490.224556678772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3816563.714285714,
            "unit": "ns",
            "range": "± 33163.51700154988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9394188.42857143,
            "unit": "ns",
            "range": "± 45461.23614298617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18814.92391304348,
            "unit": "ns",
            "range": "± 1659.6316831807858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54004.375,
            "unit": "ns",
            "range": "± 5788.605906615621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44456.336734693876,
            "unit": "ns",
            "range": "± 4411.438323417552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95057.52631578948,
            "unit": "ns",
            "range": "± 15179.062088622524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5252.041666666667,
            "unit": "ns",
            "range": "± 826.2751156041594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19023.66304347826,
            "unit": "ns",
            "range": "± 1904.5281742550555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4453214.184709822,
            "unit": "ns",
            "range": "± 30920.363100755818"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5591179.534883721,
            "unit": "ns",
            "range": "± 180456.8360326684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26229544.714285713,
            "unit": "ns",
            "range": "± 404525.60563919594"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6344788.888888889,
            "unit": "ns",
            "range": "± 129535.18449980566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29070193.8,
            "unit": "ns",
            "range": "± 318921.34248906665"
          }
        ]
      }
    ]
  }
}