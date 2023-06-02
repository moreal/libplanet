window.BENCHMARK_DATA = {
  "lastUpdate": 1685700588338,
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685700574288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8938986.5,
            "unit": "ns",
            "range": "± 147836.96966929483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23230051.1,
            "unit": "ns",
            "range": "± 425413.573335038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58074157,
            "unit": "ns",
            "range": "± 1186068.1990462753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117471318.58823529,
            "unit": "ns",
            "range": "± 2277707.048711326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232406064.73333332,
            "unit": "ns",
            "range": "± 3986068.1025109277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65685.38764044944,
            "unit": "ns",
            "range": "± 6481.78215258701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374523,
            "unit": "ns",
            "range": "± 17381.49470886453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363736.50666666665,
            "unit": "ns",
            "range": "± 18348.73182846141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340929.5326086957,
            "unit": "ns",
            "range": "± 27232.666003905008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4874759.391304348,
            "unit": "ns",
            "range": "± 120735.64221311222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4432077,
            "unit": "ns",
            "range": "± 127674.7388724287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20251.965909090908,
            "unit": "ns",
            "range": "± 1396.782031958266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97710.75842696629,
            "unit": "ns",
            "range": "± 6221.165892134415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101236.76288659793,
            "unit": "ns",
            "range": "± 12206.261506884144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119826.79347826086,
            "unit": "ns",
            "range": "± 14638.262223874188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7459.762886597938,
            "unit": "ns",
            "range": "± 1093.0795352008533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20138.90322580645,
            "unit": "ns",
            "range": "± 1736.5887166994212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1969490.7674418604,
            "unit": "ns",
            "range": "± 256042.19562020607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3888944.388888889,
            "unit": "ns",
            "range": "± 582041.2595897709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3654056.989361702,
            "unit": "ns",
            "range": "± 903630.3524503971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8756413.005747126,
            "unit": "ns",
            "range": "± 1053947.9672391259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3913326.359375,
            "unit": "ns",
            "range": "± 179179.68599574972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4133902.0588235296,
            "unit": "ns",
            "range": "± 244646.94934593054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5239531.261904762,
            "unit": "ns",
            "range": "± 187270.1812521097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5263434.0322580645,
            "unit": "ns",
            "range": "± 353268.3615309315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9227321.25,
            "unit": "ns",
            "range": "± 515741.6784865923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217333.050130208,
            "unit": "ns",
            "range": "± 33423.99133986821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2290341.4235839844,
            "unit": "ns",
            "range": "± 44248.17120121693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1507340.6005859375,
            "unit": "ns",
            "range": "± 9824.936550343162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2967086.1007254464,
            "unit": "ns",
            "range": "± 52199.76185909397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975718.8763521635,
            "unit": "ns",
            "range": "± 11869.241582248975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888647.1665414664,
            "unit": "ns",
            "range": "± 8562.482201204477"
          }
        ]
      }
    ]
  }
}