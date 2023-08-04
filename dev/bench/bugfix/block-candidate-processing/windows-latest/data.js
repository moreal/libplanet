window.BENCHMARK_DATA = {
  "lastUpdate": 1691119849062,
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "33163dfc2ba19ea2790a48c5ec4768ab14ab21b7",
          "message": "fix: check block is in chain",
          "timestamp": "2023-08-04T12:14:58+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/33163dfc2ba19ea2790a48c5ec4768ab14ab21b7"
        },
        "date": 1691119827956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1457463,
            "unit": "ns",
            "range": "± 140536.01763795412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648362.962962963,
            "unit": "ns",
            "range": "± 134318.62347087657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1791892.391304348,
            "unit": "ns",
            "range": "± 99323.2498635118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4957668.539325843,
            "unit": "ns",
            "range": "± 272476.19145178446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48652.74725274725,
            "unit": "ns",
            "range": "± 3681.3747631177334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7927886.363636363,
            "unit": "ns",
            "range": "± 194316.11100387687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21019486.666666668,
            "unit": "ns",
            "range": "± 228186.40208224088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52305253.333333336,
            "unit": "ns",
            "range": "± 423005.77818861103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104537766.66666667,
            "unit": "ns",
            "range": "± 732651.8512578231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208854793.33333334,
            "unit": "ns",
            "range": "± 2208630.1253642873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5045686.71875,
            "unit": "ns",
            "range": "± 36570.335189789475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562282.0149739583,
            "unit": "ns",
            "range": "± 4751.936488384754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196175.78125,
            "unit": "ns",
            "range": "± 13631.112161075493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666330.1618303573,
            "unit": "ns",
            "range": "± 5419.777388230399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873778.6393229166,
            "unit": "ns",
            "range": "± 3076.5815532158645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786304.2057291666,
            "unit": "ns",
            "range": "± 2158.7475478341685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3198495.8333333335,
            "unit": "ns",
            "range": "± 82758.38840534097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3420304.6153846155,
            "unit": "ns",
            "range": "± 151234.37670422482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4045940.909090909,
            "unit": "ns",
            "range": "± 96941.193067859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899360,
            "unit": "ns",
            "range": "± 135367.96727476764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6277260.975609756,
            "unit": "ns",
            "range": "± 223615.011658485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278295,
            "unit": "ns",
            "range": "± 9861.111135187191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252473.5849056604,
            "unit": "ns",
            "range": "± 10436.643119011685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224071.42857142858,
            "unit": "ns",
            "range": "± 7263.550073061076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3917853.846153846,
            "unit": "ns",
            "range": "± 53443.43762933879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3583605,
            "unit": "ns",
            "range": "± 78530.35266362736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22657.575757575756,
            "unit": "ns",
            "range": "± 4725.572871201858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110324,
            "unit": "ns",
            "range": "± 8986.568203758769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98035,
            "unit": "ns",
            "range": "± 12411.597500936474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103111.22448979592,
            "unit": "ns",
            "range": "± 18748.162151319724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6645.918367346939,
            "unit": "ns",
            "range": "± 1788.2876891727437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25102.222222222223,
            "unit": "ns",
            "range": "± 2224.189173193752"
          }
        ]
      }
    ]
  }
}