window.BENCHMARK_DATA = {
  "lastUpdate": 1681884862704,
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
          "id": "6d62e2c44ac4112e3090cbb9addbc49cc3b7834e",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T15:00:22+09:00",
          "tree_id": "9c0608e088bb72c8b7296be5f4fa365727e82700",
          "url": "https://github.com/moreal/libplanet/commit/6d62e2c44ac4112e3090cbb9addbc49cc3b7834e"
        },
        "date": 1681884859827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7969677.142857143,
            "unit": "ns",
            "range": "± 98681.2119495103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21379861.2,
            "unit": "ns",
            "range": "± 213799.89016507936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54048975.85714286,
            "unit": "ns",
            "range": "± 415970.7475036523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110758935,
            "unit": "ns",
            "range": "± 927881.8441983102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216323601.11764705,
            "unit": "ns",
            "range": "± 4210616.338721772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48479.42105263158,
            "unit": "ns",
            "range": "± 2955.1480813202575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497927.87,
            "unit": "ns",
            "range": "± 98093.2880797461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2705745.242424242,
            "unit": "ns",
            "range": "± 84029.90786954603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2351373.7682926827,
            "unit": "ns",
            "range": "± 119120.70126435236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5540458.2272727275,
            "unit": "ns",
            "range": "± 133382.56924170157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6085807.7671875,
            "unit": "ns",
            "range": "± 29239.363427098433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868000.2487444195,
            "unit": "ns",
            "range": "± 9945.373357102008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352241.562890625,
            "unit": "ns",
            "range": "± 5930.360362163628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617970.902604167,
            "unit": "ns",
            "range": "± 3256.3853169946783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819740.6407552083,
            "unit": "ns",
            "range": "± 887.0265309499441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755316.2327706473,
            "unit": "ns",
            "range": "± 1095.003955548227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334052.5625,
            "unit": "ns",
            "range": "± 5216.593421876643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281849.5,
            "unit": "ns",
            "range": "± 5450.43417860395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231208.88235294117,
            "unit": "ns",
            "range": "± 4424.289574077868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5652272.066666666,
            "unit": "ns",
            "range": "± 60832.08470449816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890934.5,
            "unit": "ns",
            "range": "± 47014.10022494888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18808.8375,
            "unit": "ns",
            "range": "± 1008.9759119924584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86685.5303030303,
            "unit": "ns",
            "range": "± 3960.156225433137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80347.20370370371,
            "unit": "ns",
            "range": "± 3354.24745309433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107178.42222222222,
            "unit": "ns",
            "range": "± 9039.11291011169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6259.855670103093,
            "unit": "ns",
            "range": "± 703.3986243839429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17744.144444444446,
            "unit": "ns",
            "range": "± 1007.1588508331176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3475164.8125,
            "unit": "ns",
            "range": "± 63447.82125202698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3889383.3181818184,
            "unit": "ns",
            "range": "± 93693.25412489945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300642.135135135,
            "unit": "ns",
            "range": "± 145332.0215931174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4579422.560975609,
            "unit": "ns",
            "range": "± 152376.54100845853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7562405.652173913,
            "unit": "ns",
            "range": "± 285983.0303069838"
          }
        ]
      }
    ]
  }
}