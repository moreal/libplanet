window.BENCHMARK_DATA = {
  "lastUpdate": 1691119715364,
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
          "id": "33163dfc2ba19ea2790a48c5ec4768ab14ab21b7",
          "message": "fix: check block is in chain",
          "timestamp": "2023-08-04T12:14:58+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/33163dfc2ba19ea2790a48c5ec4768ab14ab21b7"
        },
        "date": 1691119709994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299523.8571428573,
            "unit": "ns",
            "range": "± 31607.149003538238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474106.466666667,
            "unit": "ns",
            "range": "± 56898.817899931135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277259.923076923,
            "unit": "ns",
            "range": "± 20740.499127960327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3807329.4827586208,
            "unit": "ns",
            "range": "± 110244.14094428935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6284243,
            "unit": "ns",
            "range": "± 171607.84464089663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7543241.857142857,
            "unit": "ns",
            "range": "± 45860.54413085416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19751644.8,
            "unit": "ns",
            "range": "± 62179.171848319565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50161657.428571425,
            "unit": "ns",
            "range": "± 301929.8668995104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106511632.26666667,
            "unit": "ns",
            "range": "± 459873.9731215914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201850831.4,
            "unit": "ns",
            "range": "± 692010.5338689166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47671.520833333336,
            "unit": "ns",
            "range": "± 3162.3984434841345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6173696.6171875,
            "unit": "ns",
            "range": "± 14805.384322395299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947366.2469951923,
            "unit": "ns",
            "range": "± 6192.108528466483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348940.00234375,
            "unit": "ns",
            "range": "± 434.62842707402484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592769.0182291665,
            "unit": "ns",
            "range": "± 6091.852365604116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837460.9482421875,
            "unit": "ns",
            "range": "± 589.2457344913402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752380.5173177083,
            "unit": "ns",
            "range": "± 905.6053805883431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286792.55555555556,
            "unit": "ns",
            "range": "± 5877.7670252073085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275557.38636363635,
            "unit": "ns",
            "range": "± 9836.136550628016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240532.06666666668,
            "unit": "ns",
            "range": "± 4487.762749437418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233175.071428572,
            "unit": "ns",
            "range": "± 32525.762807738647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3910162.785714286,
            "unit": "ns",
            "range": "± 30946.600377917915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18999.835051546394,
            "unit": "ns",
            "range": "± 1795.5419718036644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88685.20238095238,
            "unit": "ns",
            "range": "± 4777.448592599822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70939.96875,
            "unit": "ns",
            "range": "± 2203.3998726949076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89288.24489795919,
            "unit": "ns",
            "range": "± 11778.17145336098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4427.8247422680415,
            "unit": "ns",
            "range": "± 489.6395572746445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17859.260416666668,
            "unit": "ns",
            "range": "± 1258.7867111234045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367504.8131868131,
            "unit": "ns",
            "range": "± 79132.87937975833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578367.5,
            "unit": "ns",
            "range": "± 55080.72306250378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728917.3902439023,
            "unit": "ns",
            "range": "± 91682.78558371271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4702180.34375,
            "unit": "ns",
            "range": "± 128266.34341380825"
          }
        ]
      }
    ]
  }
}