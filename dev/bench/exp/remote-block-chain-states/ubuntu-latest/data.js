window.BENCHMARK_DATA = {
  "lastUpdate": 1681359407600,
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
        "date": 1681359405096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7648408.533333333,
            "unit": "ns",
            "range": "± 101277.63013043943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20781280.533333335,
            "unit": "ns",
            "range": "± 355871.43555340054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52270249.88888889,
            "unit": "ns",
            "range": "± 1052880.5223338432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103626720,
            "unit": "ns",
            "range": "± 2272139.288757763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204646132.33333334,
            "unit": "ns",
            "range": "± 2409124.9187993156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46498.05063291139,
            "unit": "ns",
            "range": "± 2178.550287778044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391955.7835051545,
            "unit": "ns",
            "range": "± 82082.87938282598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2623633.3333333335,
            "unit": "ns",
            "range": "± 69447.16218381148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2238124.240506329,
            "unit": "ns",
            "range": "± 114903.80790383054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5438177.689655173,
            "unit": "ns",
            "range": "± 132863.23400912882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5823505.793269231,
            "unit": "ns",
            "range": "± 44869.593582901034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832869.7452566964,
            "unit": "ns",
            "range": "± 9671.52964677752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352217.4705729166,
            "unit": "ns",
            "range": "± 7423.9393157560735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577001.892838542,
            "unit": "ns",
            "range": "± 9401.075653167976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836954.3461588542,
            "unit": "ns",
            "range": "± 3301.9475641506483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744312.7822265625,
            "unit": "ns",
            "range": "± 1455.5603079739951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329503.70967741933,
            "unit": "ns",
            "range": "± 9549.426520978623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272050.8181818182,
            "unit": "ns",
            "range": "± 10222.777345900075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230766.92857142858,
            "unit": "ns",
            "range": "± 3208.555737022877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5701098.666666667,
            "unit": "ns",
            "range": "± 80794.08085520928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4086806.466666667,
            "unit": "ns",
            "range": "± 61895.84590822907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18058.065789473683,
            "unit": "ns",
            "range": "± 859.5934594993352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88948.82608695653,
            "unit": "ns",
            "range": "± 4212.5463445051355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75362.5,
            "unit": "ns",
            "range": "± 2044.568047290185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185063.84536082475,
            "unit": "ns",
            "range": "± 17358.56207222882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5536.479166666667,
            "unit": "ns",
            "range": "± 625.6251774979155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17155.09677419355,
            "unit": "ns",
            "range": "± 1441.3675123820262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497285.9523809524,
            "unit": "ns",
            "range": "± 79568.74110319717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564730.7647058824,
            "unit": "ns",
            "range": "± 71570.98161574408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554413.533333333,
            "unit": "ns",
            "range": "± 67945.35798594408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4421462.095238095,
            "unit": "ns",
            "range": "± 152795.48076700428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7187899.866666666,
            "unit": "ns",
            "range": "± 207113.6931254198"
          }
        ]
      }
    ]
  }
}