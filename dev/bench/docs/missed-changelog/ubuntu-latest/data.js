window.BENCHMARK_DATA = {
  "lastUpdate": 1681889514833,
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "4077a2a6d68026318d1e9054a4eac4da82767914",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T16:17:58+09:00",
          "tree_id": "ce1dd1a1ae96561528196536bc85094c31f74aee",
          "url": "https://github.com/moreal/libplanet/commit/4077a2a6d68026318d1e9054a4eac4da82767914"
        },
        "date": 1681889511827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7994746.678571428,
            "unit": "ns",
            "range": "± 225832.06301423017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21635045.266666666,
            "unit": "ns",
            "range": "± 250572.2176814121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55120934.2,
            "unit": "ns",
            "range": "± 476880.0432549948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110830028.46666667,
            "unit": "ns",
            "range": "± 572205.4656127673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218494825.26666668,
            "unit": "ns",
            "range": "± 1935949.2116684357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50589.54945054945,
            "unit": "ns",
            "range": "± 3128.727669210446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535877.47,
            "unit": "ns",
            "range": "± 123970.9409487819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2834822.1774193547,
            "unit": "ns",
            "range": "± 122758.98727361437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2414161.090909091,
            "unit": "ns",
            "range": "± 121691.29788009342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764759.666666667,
            "unit": "ns",
            "range": "± 122131.57657215436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5903255.287946428,
            "unit": "ns",
            "range": "± 25401.412780634593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878870.3671875,
            "unit": "ns",
            "range": "± 2685.872625769589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366910.002734375,
            "unit": "ns",
            "range": "± 2885.396383994424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607290.304129464,
            "unit": "ns",
            "range": "± 1968.7348465384134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824351.123186384,
            "unit": "ns",
            "range": "± 487.7570271642278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757316.9202008928,
            "unit": "ns",
            "range": "± 318.388046980151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335624.7083333333,
            "unit": "ns",
            "range": "± 8397.725652140773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278978.70588235295,
            "unit": "ns",
            "range": "± 8554.941455370272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234660.2142857143,
            "unit": "ns",
            "range": "± 4102.978189982556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5764742.692307692,
            "unit": "ns",
            "range": "± 45632.67940921399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927758.2666666666,
            "unit": "ns",
            "range": "± 52926.630667188256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21998.25773195876,
            "unit": "ns",
            "range": "± 1631.6151780160365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101092.06818181818,
            "unit": "ns",
            "range": "± 5532.604293744482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83367.8125,
            "unit": "ns",
            "range": "± 5429.539942345605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107089.1237113402,
            "unit": "ns",
            "range": "± 13748.895776311252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6225.855670103093,
            "unit": "ns",
            "range": "± 780.1306112559338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18521.072916666668,
            "unit": "ns",
            "range": "± 1775.7726042474058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3542976.388888889,
            "unit": "ns",
            "range": "± 71908.37108688586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667647.2413793104,
            "unit": "ns",
            "range": "± 106555.17303177972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4314668.6,
            "unit": "ns",
            "range": "± 152263.92290291426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4647153.531914894,
            "unit": "ns",
            "range": "± 180379.26847531335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7543157.4,
            "unit": "ns",
            "range": "± 149537.36455566093"
          }
        ]
      }
    ]
  }
}