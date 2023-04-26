window.BENCHMARK_DATA = {
  "lastUpdate": 1682501729864,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "86475721b9860baa7c8342a30875d8ad6d1453b8",
          "message": "Update return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`\n\n[skip changelog]",
          "timestamp": "2023-04-26T16:23:34+09:00",
          "tree_id": "1945ee60a9b3379845453058ab751f727d04b011",
          "url": "https://github.com/moreal/libplanet/commit/86475721b9860baa7c8342a30875d8ad6d1453b8"
        },
        "date": 1682494968390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10327916.06122449,
            "unit": "ns",
            "range": "± 391348.5315651301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26916719,
            "unit": "ns",
            "range": "± 667070.7502756156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68299940.1875,
            "unit": "ns",
            "range": "± 2108879.138263895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137519049.42857143,
            "unit": "ns",
            "range": "± 2091247.294912029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278600891.53333336,
            "unit": "ns",
            "range": "± 5112459.058642439"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70366.72631578948,
            "unit": "ns",
            "range": "± 9807.546622580356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1876460.724489796,
            "unit": "ns",
            "range": "± 233181.99247911823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3455380.290322581,
            "unit": "ns",
            "range": "± 240176.4212689869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2866707.065217391,
            "unit": "ns",
            "range": "± 308465.67187410494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7477486.609195402,
            "unit": "ns",
            "range": "± 408431.2740267627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7998214.710477941,
            "unit": "ns",
            "range": "± 158880.8062953429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2310743.670479911,
            "unit": "ns",
            "range": "± 40289.85140593883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1684746.7860677084,
            "unit": "ns",
            "range": "± 20447.804462459677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3211456.3052083333,
            "unit": "ns",
            "range": "± 42297.38344209251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1055214.6912760416,
            "unit": "ns",
            "range": "± 19633.648851876158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927644.1750710227,
            "unit": "ns",
            "range": "± 22185.27558140649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372188.7931034483,
            "unit": "ns",
            "range": "± 16328.398596567044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350517.95238095237,
            "unit": "ns",
            "range": "± 18823.20116617477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320378.625,
            "unit": "ns",
            "range": "± 27694.190704626315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5612143.793814433,
            "unit": "ns",
            "range": "± 353656.66033385927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5032029.315217392,
            "unit": "ns",
            "range": "± 288836.95981566986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22484.22340425532,
            "unit": "ns",
            "range": "± 4322.6613775587075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120235.35416666667,
            "unit": "ns",
            "range": "± 12346.393571854915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126470.9797979798,
            "unit": "ns",
            "range": "± 15741.752004883736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144803.93548387097,
            "unit": "ns",
            "range": "± 15816.590262735856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10861.885416666666,
            "unit": "ns",
            "range": "± 1538.168356193695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28286.703296703297,
            "unit": "ns",
            "range": "± 2029.761909926633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4271170.020618557,
            "unit": "ns",
            "range": "± 271584.366619019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4688564.474226804,
            "unit": "ns",
            "range": "± 317287.8960751475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5699278.797752809,
            "unit": "ns",
            "range": "± 302865.74238919566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5579098.458333333,
            "unit": "ns",
            "range": "± 362032.4530318973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9389263.698630137,
            "unit": "ns",
            "range": "± 454407.5030689135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "a0b3bd6c7a27431fcde83429ec8f65623559474b",
          "message": "Update return type for `IActionEvaluator.Evaluate()` to `IReadOnlyList<IActionEvaluation>`\n\n[skip changelog]",
          "timestamp": "2023-04-26T18:21:14+09:00",
          "tree_id": "da2e57752902c5d97761b111cb1ab5c105eb4624",
          "url": "https://github.com/moreal/libplanet/commit/a0b3bd6c7a27431fcde83429ec8f65623559474b"
        },
        "date": 1682501725721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8393842.6,
            "unit": "ns",
            "range": "± 151806.30194184015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22061014.785714287,
            "unit": "ns",
            "range": "± 170366.55559170444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55302787.4,
            "unit": "ns",
            "range": "± 272870.68791797437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110185601.6,
            "unit": "ns",
            "range": "± 483715.9396992354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221371726.86666667,
            "unit": "ns",
            "range": "± 1312129.8379865282"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53577.22826086957,
            "unit": "ns",
            "range": "± 3906.614318158486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509386.7857142857,
            "unit": "ns",
            "range": "± 119649.55807874155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770059.5483870967,
            "unit": "ns",
            "range": "± 84167.47042131289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2430994.8804347827,
            "unit": "ns",
            "range": "± 137398.90935295357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5823262.7,
            "unit": "ns",
            "range": "± 133084.7407841691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003377.461458334,
            "unit": "ns",
            "range": "± 55930.388234557584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849634.7829427083,
            "unit": "ns",
            "range": "± 1627.155900215677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377200.3640625,
            "unit": "ns",
            "range": "± 3011.054400356865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616183.970833333,
            "unit": "ns",
            "range": "± 2881.431668563275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819567.7118443081,
            "unit": "ns",
            "range": "± 456.3337087148509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752515.6787109375,
            "unit": "ns",
            "range": "± 446.407355927187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300109.21875,
            "unit": "ns",
            "range": "± 9303.56032347511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288224.75675675675,
            "unit": "ns",
            "range": "± 9647.167970749542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243889.2105263158,
            "unit": "ns",
            "range": "± 8322.498209129713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4473333.071428572,
            "unit": "ns",
            "range": "± 37054.85833705373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974022.214285714,
            "unit": "ns",
            "range": "± 45508.31037408877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24878.4,
            "unit": "ns",
            "range": "± 2328.0402789525633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103694.70833333333,
            "unit": "ns",
            "range": "± 8607.0636290221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92106.82,
            "unit": "ns",
            "range": "± 9014.514054791884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112192.01020408163,
            "unit": "ns",
            "range": "± 14998.527228381903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8363.072164948453,
            "unit": "ns",
            "range": "± 966.6261260976963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24582.393617021276,
            "unit": "ns",
            "range": "± 2730.1240793343018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3582738.7586206896,
            "unit": "ns",
            "range": "± 104688.19709896868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3812396.8125,
            "unit": "ns",
            "range": "± 73204.18857435117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4345798.433333334,
            "unit": "ns",
            "range": "± 127785.26394419861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4621578.625,
            "unit": "ns",
            "range": "± 143540.0263495708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7219956.392857143,
            "unit": "ns",
            "range": "± 199111.6159496959"
          }
        ]
      }
    ]
  }
}