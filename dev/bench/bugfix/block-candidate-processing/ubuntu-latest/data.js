window.BENCHMARK_DATA = {
  "lastUpdate": 1691119780685,
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
          "id": "d3bc3db46db2b94c707d149a2b326d367ededc6a",
          "message": "fix: check block is in chain\n\n[skip changelog]",
          "timestamp": "2023-08-04T12:15:42+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/d3bc3db46db2b94c707d149a2b326d367ededc6a"
        },
        "date": 1691119775520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3454444.423076923,
            "unit": "ns",
            "range": "± 88400.09375251728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3659474.1794871795,
            "unit": "ns",
            "range": "± 127947.79852651912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345328.866666666,
            "unit": "ns",
            "range": "± 69004.65606740571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3977628.236842105,
            "unit": "ns",
            "range": "± 134146.86123523992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6408009.380952381,
            "unit": "ns",
            "range": "± 151356.94416097208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8016658.133333334,
            "unit": "ns",
            "range": "± 85363.74539402098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26982021.2,
            "unit": "ns",
            "range": "± 207476.57149051107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56622822.2,
            "unit": "ns",
            "range": "± 1023028.6084203396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108895918.07142857,
            "unit": "ns",
            "range": "± 1778628.6419112324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218374749.6,
            "unit": "ns",
            "range": "± 3840844.389460396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51666.28,
            "unit": "ns",
            "range": "± 2610.798265416671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133962.597098215,
            "unit": "ns",
            "range": "± 19489.99622253478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912347.5456194195,
            "unit": "ns",
            "range": "± 3445.0636401216216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390088.5897135416,
            "unit": "ns",
            "range": "± 2603.55536332183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647531.0184151786,
            "unit": "ns",
            "range": "± 5783.417041458288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831692.1938100961,
            "unit": "ns",
            "range": "± 830.3055363675817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760134.503125,
            "unit": "ns",
            "range": "± 902.2368562469184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289772.7727272727,
            "unit": "ns",
            "range": "± 8796.233231527285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280869.724137931,
            "unit": "ns",
            "range": "± 8209.14545707822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248898.4827586207,
            "unit": "ns",
            "range": "± 7213.818785699181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4574951.705882353,
            "unit": "ns",
            "range": "± 90586.97554889217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4058787.3846153845,
            "unit": "ns",
            "range": "± 54548.579119195005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21223.032608695652,
            "unit": "ns",
            "range": "± 1348.466825377906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93668.64210526316,
            "unit": "ns",
            "range": "± 5539.083722744222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76151.09375,
            "unit": "ns",
            "range": "± 2324.5929419505105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95924.36082474227,
            "unit": "ns",
            "range": "± 13111.694340665234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5754.8105263157895,
            "unit": "ns",
            "range": "± 673.8205502435876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19304.354166666668,
            "unit": "ns",
            "range": "± 1251.5077137022133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474412.3505154639,
            "unit": "ns",
            "range": "± 115276.7723459538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806070.8,
            "unit": "ns",
            "range": "± 101252.47116346886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858875.554054054,
            "unit": "ns",
            "range": "± 92861.73404630176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4932972.818181818,
            "unit": "ns",
            "range": "± 117998.36943289729"
          }
        ]
      }
    ]
  }
}