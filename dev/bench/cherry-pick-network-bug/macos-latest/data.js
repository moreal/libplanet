window.BENCHMARK_DATA = {
  "lastUpdate": 1691540668997,
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
        "date": 1691540653973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8208587.045454546,
            "unit": "ns",
            "range": "± 197622.0165022774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24160443.629032258,
            "unit": "ns",
            "range": "± 1079510.1135910454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62864278.428571425,
            "unit": "ns",
            "range": "± 12238818.043534778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103008480.1,
            "unit": "ns",
            "range": "± 1708335.5413076286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207191043.6956522,
            "unit": "ns",
            "range": "± 4791456.085477466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73098.68085106384,
            "unit": "ns",
            "range": "± 8241.500131236895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324759.9595959596,
            "unit": "ns",
            "range": "± 26121.899289840214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348411.04545454547,
            "unit": "ns",
            "range": "± 50511.86110742879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322433.2555555556,
            "unit": "ns",
            "range": "± 19444.680333908553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197177.055555556,
            "unit": "ns",
            "range": "± 70686.08591468273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742293.5,
            "unit": "ns",
            "range": "± 57635.10825876881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19635.040404040403,
            "unit": "ns",
            "range": "± 3585.284040548542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95966.63265306123,
            "unit": "ns",
            "range": "± 16226.778989814447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79606.58064516129,
            "unit": "ns",
            "range": "± 10628.366413316218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104645.64583333333,
            "unit": "ns",
            "range": "± 12267.393921310833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6843.45652173913,
            "unit": "ns",
            "range": "± 1615.9210785662779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24782.550561797754,
            "unit": "ns",
            "range": "± 7568.277647239821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645700.9795918367,
            "unit": "ns",
            "range": "± 175803.5096725318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966920.2802197803,
            "unit": "ns",
            "range": "± 159340.95622865536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093299.206185567,
            "unit": "ns",
            "range": "± 211241.56994318427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5868189.018867925,
            "unit": "ns",
            "range": "± 240383.3057219793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623380.7,
            "unit": "ns",
            "range": "± 367421.23368393024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3839397.727272727,
            "unit": "ns",
            "range": "± 437611.2716665892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4719275.835051547,
            "unit": "ns",
            "range": "± 357222.00681534293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4151311.1842105263,
            "unit": "ns",
            "range": "± 344938.9932006252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7507656.478260869,
            "unit": "ns",
            "range": "± 479683.266397127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7363292.588139204,
            "unit": "ns",
            "range": "± 312868.7179790039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2204960.004036458,
            "unit": "ns",
            "range": "± 39471.8808001015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401932.140625,
            "unit": "ns",
            "range": "± 19250.678945243588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214819.6216998925,
            "unit": "ns",
            "range": "± 93516.59557816765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914595.3240885417,
            "unit": "ns",
            "range": "± 7567.93654169382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849857.1031901041,
            "unit": "ns",
            "range": "± 13069.04254633295"
          }
        ]
      }
    ]
  }
}