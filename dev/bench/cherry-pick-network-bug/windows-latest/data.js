window.BENCHMARK_DATA = {
  "lastUpdate": 1691540689400,
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
          "id": "9241521fd4eb53916fbc30f797b45de3fdcc6ba4",
          "message": "Update changelog",
          "timestamp": "2023-08-09T09:05:56+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/moreal/libplanet/commit/9241521fd4eb53916fbc30f797b45de3fdcc6ba4"
        },
        "date": 1691540661886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478867.6767676768,
            "unit": "ns",
            "range": "± 175331.3782808247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2575325,
            "unit": "ns",
            "range": "± 117743.33263906022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811746.875,
            "unit": "ns",
            "range": "± 112250.97252245453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4910797.435897436,
            "unit": "ns",
            "range": "± 253211.22937510425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50929.545454545456,
            "unit": "ns",
            "range": "± 2823.756326422941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7433923.076923077,
            "unit": "ns",
            "range": "± 87763.67086144997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20576057.14285714,
            "unit": "ns",
            "range": "± 153740.1990086158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52667566.666666664,
            "unit": "ns",
            "range": "± 833813.4629234412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104563846.66666667,
            "unit": "ns",
            "range": "± 1396038.0376861752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213907169.23076922,
            "unit": "ns",
            "range": "± 2488600.979260106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4923842.942708333,
            "unit": "ns",
            "range": "± 19164.381287174656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558473.2142857143,
            "unit": "ns",
            "range": "± 6856.824733379381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230802.6692708333,
            "unit": "ns",
            "range": "± 6496.516222092742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698686.6927083335,
            "unit": "ns",
            "range": "± 7149.069341505965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864841.38671875,
            "unit": "ns",
            "range": "± 4352.584863444056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777685.6770833334,
            "unit": "ns",
            "range": "± 3408.0348616193655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371184,
            "unit": "ns",
            "range": "± 135979.09294581777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653583.870967742,
            "unit": "ns",
            "range": "± 103889.63405709027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4309728.571428572,
            "unit": "ns",
            "range": "± 60270.12818675891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4013441.6666666665,
            "unit": "ns",
            "range": "± 92506.17801538712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6415100,
            "unit": "ns",
            "range": "± 236536.3628543843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272223.5294117647,
            "unit": "ns",
            "range": "± 3805.839166951999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253522.44897959183,
            "unit": "ns",
            "range": "± 7587.963750410977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224751.80722891566,
            "unit": "ns",
            "range": "± 11946.612556375225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249986.363636363,
            "unit": "ns",
            "range": "± 99013.89654971019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929653.3333333335,
            "unit": "ns",
            "range": "± 68793.48875611772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20393.478260869564,
            "unit": "ns",
            "range": "± 1575.8342878675157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89946.22641509434,
            "unit": "ns",
            "range": "± 3719.6961344128295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78481.91489361702,
            "unit": "ns",
            "range": "± 5833.808818088947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101511.22448979592,
            "unit": "ns",
            "range": "± 15724.207371255297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5983.673469387755,
            "unit": "ns",
            "range": "± 1033.0311596533008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19016.666666666668,
            "unit": "ns",
            "range": "± 1486.8310820892425"
          }
        ]
      }
    ]
  }
}