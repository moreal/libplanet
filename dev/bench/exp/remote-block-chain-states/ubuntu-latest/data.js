window.BENCHMARK_DATA = {
  "lastUpdate": 1681359866045,
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "22b444d9ad90949c7a24184b7555ef274c6ab02a",
          "message": "Introduce `RemoteBlockChainStates`",
          "timestamp": "2023-04-13T13:08:33+09:00",
          "tree_id": "dd920a5ad0aa3d3799c5d5edaa767a05cbc657e3",
          "url": "https://github.com/moreal/libplanet/commit/22b444d9ad90949c7a24184b7555ef274c6ab02a"
        },
        "date": 1681359862522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7602224.142857143,
            "unit": "ns",
            "range": "± 21553.789960708298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19484543.933333334,
            "unit": "ns",
            "range": "± 112186.050435023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50622575.85714286,
            "unit": "ns",
            "range": "± 202200.6753202818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99902685.61538461,
            "unit": "ns",
            "range": "± 228058.5117565002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202918760.93333334,
            "unit": "ns",
            "range": "± 1122042.6138631194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50542.989690721646,
            "unit": "ns",
            "range": "± 6045.903712250904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418122.8636363635,
            "unit": "ns",
            "range": "± 80427.75842456124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2721789.24,
            "unit": "ns",
            "range": "± 109618.34004912178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2323154.6395348837,
            "unit": "ns",
            "range": "± 125386.33375141598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5612592.366666666,
            "unit": "ns",
            "range": "± 162654.1980319372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178540.510044643,
            "unit": "ns",
            "range": "± 70429.68414892883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942821.015904018,
            "unit": "ns",
            "range": "± 2794.3316678804767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347514.3952287945,
            "unit": "ns",
            "range": "± 4893.946730763366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533110.880859375,
            "unit": "ns",
            "range": "± 5333.075876730671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808408.933203125,
            "unit": "ns",
            "range": "± 3848.223318290467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752823.0694110577,
            "unit": "ns",
            "range": "± 1240.895091478393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347356.32258064515,
            "unit": "ns",
            "range": "± 10444.98693277337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280017.3918918919,
            "unit": "ns",
            "range": "± 14016.510473652688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259684.52173913043,
            "unit": "ns",
            "range": "± 19536.896102175866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6037669.8125,
            "unit": "ns",
            "range": "± 114675.01651956498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4032349.153846154,
            "unit": "ns",
            "range": "± 26595.34551021461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20733.936170212764,
            "unit": "ns",
            "range": "± 2118.599541533823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85763.96666666666,
            "unit": "ns",
            "range": "± 5508.842214970238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74612.08333333333,
            "unit": "ns",
            "range": "± 1783.1787180705444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 217487.92222222223,
            "unit": "ns",
            "range": "± 12039.88556930557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4880.412371134021,
            "unit": "ns",
            "range": "± 951.4943482992217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18447.787234042553,
            "unit": "ns",
            "range": "± 2585.4746194862014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361531.210526316,
            "unit": "ns",
            "range": "± 41890.270850798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3620095.0625,
            "unit": "ns",
            "range": "± 68544.5521681276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4316697.0625,
            "unit": "ns",
            "range": "± 79499.08913144331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407761.27027027,
            "unit": "ns",
            "range": "± 148679.09184692017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7261134.071428572,
            "unit": "ns",
            "range": "± 81557.90783190544"
          }
        ]
      }
    ]
  }
}