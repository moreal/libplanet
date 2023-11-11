window.BENCHMARK_DATA = {
  "lastUpdate": 1699692967563,
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
          "id": "19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:43:26+09:00",
          "tree_id": "eefe0b03257e037c93925843fe381f756e74b24b",
          "url": "https://github.com/moreal/libplanet/commit/19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec"
        },
        "date": 1699692946916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989152.5773195876,
            "unit": "ns",
            "range": "± 109482.75938549972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1769902.1505376345,
            "unit": "ns",
            "range": "± 133842.4479187755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1419400,
            "unit": "ns",
            "range": "± 130671.81901892346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5646485.393258427,
            "unit": "ns",
            "range": "± 318272.0372112232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34234.831460674155,
            "unit": "ns",
            "range": "± 2201.9155464150826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5040486.666666667,
            "unit": "ns",
            "range": "± 33470.36784694073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12911478.57142857,
            "unit": "ns",
            "range": "± 144598.41566624033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33243035.714285713,
            "unit": "ns",
            "range": "± 193886.05935184978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64442466.666666664,
            "unit": "ns",
            "range": "± 863698.0860286328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131910571.42857143,
            "unit": "ns",
            "range": "± 905726.010046485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288532.03125,
            "unit": "ns",
            "range": "± 10142.183869887189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068419.4661458333,
            "unit": "ns",
            "range": "± 3375.841359754271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740440.7575334822,
            "unit": "ns",
            "range": "± 1168.058670061182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949600.4324776786,
            "unit": "ns",
            "range": "± 3563.725765634514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631312.3604910715,
            "unit": "ns",
            "range": "± 2775.336615042393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566412.4609375,
            "unit": "ns",
            "range": "± 1472.5119468468936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138783.3333333335,
            "unit": "ns",
            "range": "± 84212.35148031417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260996,
            "unit": "ns",
            "range": "± 44660.884078426694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2776375,
            "unit": "ns",
            "range": "± 85860.45693167565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2770080,
            "unit": "ns",
            "range": "± 62840.49649708379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6450609.302325581,
            "unit": "ns",
            "range": "± 238402.7602648145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175369.33333333334,
            "unit": "ns",
            "range": "± 8655.914605497079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166088.05970149254,
            "unit": "ns",
            "range": "± 7482.819157365509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139367.44186046513,
            "unit": "ns",
            "range": "± 4059.4229551356398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2751464.285714286,
            "unit": "ns",
            "range": "± 41975.31522111642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2513906.25,
            "unit": "ns",
            "range": "± 46930.90621683469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10313.095238095239,
            "unit": "ns",
            "range": "± 1021.9022849456061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55011.23595505618,
            "unit": "ns",
            "range": "± 4178.773150814156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44050.54945054945,
            "unit": "ns",
            "range": "± 2610.7629206963675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55797.9381443299,
            "unit": "ns",
            "range": "± 12161.49130265147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2519.148936170213,
            "unit": "ns",
            "range": "± 459.8449003938294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10275,
            "unit": "ns",
            "range": "± 1376.300583703755"
          }
        ]
      }
    ]
  }
}