window.BENCHMARK_DATA = {
  "lastUpdate": 1681360089724,
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
          "id": "8687b2d8e45747fa25468021146cbe8ac030db56",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-13T13:03:30+09:00",
          "tree_id": "378f692c4ebe01c5e3b50d4627644fcdf0663ff7",
          "url": "https://github.com/moreal/libplanet/commit/8687b2d8e45747fa25468021146cbe8ac030db56"
        },
        "date": 1681360082177,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9230800.21,
            "unit": "ns",
            "range": "± 671109.2278924872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23738563.810526315,
            "unit": "ns",
            "range": "± 1610152.1800435267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57079974.7972973,
            "unit": "ns",
            "range": "± 2771933.7151451814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115986832.83333333,
            "unit": "ns",
            "range": "± 2951209.865168472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240577275.66129032,
            "unit": "ns",
            "range": "± 10869895.152847128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81635.41666666667,
            "unit": "ns",
            "range": "± 5688.410416387081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 488085.4292929293,
            "unit": "ns",
            "range": "± 91084.48199653211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395514.5869565217,
            "unit": "ns",
            "range": "± 53078.9432355557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 388663.36315789475,
            "unit": "ns",
            "range": "± 63976.513502772534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6351070.020833333,
            "unit": "ns",
            "range": "± 625466.8102905471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4740154.530612245,
            "unit": "ns",
            "range": "± 460540.0465970942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24993.60465116279,
            "unit": "ns",
            "range": "± 3697.1986948119634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129909.14736842105,
            "unit": "ns",
            "range": "± 29260.93010584083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115133.44086021505,
            "unit": "ns",
            "range": "± 17873.803194633372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 274456.26288659795,
            "unit": "ns",
            "range": "± 33014.9541343809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8955.351063829787,
            "unit": "ns",
            "range": "± 1238.6113969414557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22930.135416666668,
            "unit": "ns",
            "range": "± 5367.20705104971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1946299.5416666667,
            "unit": "ns",
            "range": "± 316629.36628420156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3455416.7989690723,
            "unit": "ns",
            "range": "± 357173.1102821258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2914811.2934782607,
            "unit": "ns",
            "range": "± 397957.1765613647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7837039.870786517,
            "unit": "ns",
            "range": "± 609571.4765970731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3826125.3229166665,
            "unit": "ns",
            "range": "± 395432.83070515865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4197013.416666667,
            "unit": "ns",
            "range": "± 630292.8809209367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5195994.580808081,
            "unit": "ns",
            "range": "± 571960.070602972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4878555.315217392,
            "unit": "ns",
            "range": "± 466729.7034391469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10318167.138297873,
            "unit": "ns",
            "range": "± 1190378.6708768946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7548738.896110373,
            "unit": "ns",
            "range": "± 770296.0106775846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2358079.653843119,
            "unit": "ns",
            "range": "± 145586.61212055536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467563.4506835938,
            "unit": "ns",
            "range": "± 31259.56173669137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3620455.2933984376,
            "unit": "ns",
            "range": "± 218628.2876149874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 916398.5600219726,
            "unit": "ns",
            "range": "± 47841.09618060985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 833872.9450737847,
            "unit": "ns",
            "range": "± 29296.269604262445"
          }
        ]
      }
    ]
  }
}