window.BENCHMARK_DATA = {
  "lastUpdate": 1691119844391,
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
          "id": "d3bc3db46db2b94c707d149a2b326d367ededc6a",
          "message": "fix: check block is in chain\n\n[skip changelog]",
          "timestamp": "2023-08-04T12:15:42+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/d3bc3db46db2b94c707d149a2b326d367ededc6a"
        },
        "date": 1691119817073,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347870,
            "unit": "ns",
            "range": "± 101412.73155384447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2461782.6086956523,
            "unit": "ns",
            "range": "± 94401.66266037626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744207.5757575757,
            "unit": "ns",
            "range": "± 123387.40392408094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4357168.888888889,
            "unit": "ns",
            "range": "± 163625.97568598916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45051.78571428572,
            "unit": "ns",
            "range": "± 1939.9148126965474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7135620,
            "unit": "ns",
            "range": "± 67577.50259622544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17954146.666666668,
            "unit": "ns",
            "range": "± 99231.33769607452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45504200,
            "unit": "ns",
            "range": "± 250318.06338565113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91354813.33333333,
            "unit": "ns",
            "range": "± 431971.62913894287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183253780,
            "unit": "ns",
            "range": "± 524940.7669986613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4852830.889423077,
            "unit": "ns",
            "range": "± 6678.40095291235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525510.15625,
            "unit": "ns",
            "range": "± 1716.163897184205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149300.7486979167,
            "unit": "ns",
            "range": "± 1098.9598934409591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547238.4635416665,
            "unit": "ns",
            "range": "± 4272.030467132078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826804.0234375,
            "unit": "ns",
            "range": "± 826.9475838344068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736348.7955729166,
            "unit": "ns",
            "range": "± 801.2120097362545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202086.6666666665,
            "unit": "ns",
            "range": "± 51563.37108932307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3208105.882352941,
            "unit": "ns",
            "range": "± 125995.32596372726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4026363.1578947366,
            "unit": "ns",
            "range": "± 64155.50734587808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3598635.714285714,
            "unit": "ns",
            "range": "± 84228.11458007526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5862303.125,
            "unit": "ns",
            "range": "± 118153.26155348319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261954.44444444444,
            "unit": "ns",
            "range": "± 9828.205134286532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250920,
            "unit": "ns",
            "range": "± 6941.747767598987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233544.08602150538,
            "unit": "ns",
            "range": "± 13264.159475866367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3951900,
            "unit": "ns",
            "range": "± 31557.65698345988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3620564.285714286,
            "unit": "ns",
            "range": "± 21845.712733512835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20169.892473118278,
            "unit": "ns",
            "range": "± 1913.2140580161326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89250.5376344086,
            "unit": "ns",
            "range": "± 6070.628211455583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68939.13043478261,
            "unit": "ns",
            "range": "± 3295.461111683603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82403.07692307692,
            "unit": "ns",
            "range": "± 3263.623811749048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4392.631578947368,
            "unit": "ns",
            "range": "± 601.2826901385457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18181.31868131868,
            "unit": "ns",
            "range": "± 1823.7880047315498"
          }
        ]
      }
    ]
  }
}