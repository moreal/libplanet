window.BENCHMARK_DATA = {
  "lastUpdate": 1687401285049,
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
          "id": "83f0c1386a4231b79929d19b5e13a54bec60dd0e",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:00:56+09:00",
          "tree_id": "0a917410dd82fca67ee0369ee8390e01dda737df",
          "url": "https://github.com/moreal/libplanet/commit/83f0c1386a4231b79929d19b5e13a54bec60dd0e"
        },
        "date": 1687400707712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13516983.909090908,
            "unit": "ns",
            "range": "± 2694395.9797947197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32973110.389473684,
            "unit": "ns",
            "range": "± 12255592.79292124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60141452.635416664,
            "unit": "ns",
            "range": "± 3998273.0831845077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121014145.98888889,
            "unit": "ns",
            "range": "± 7569603.574108951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260906485.1527778,
            "unit": "ns",
            "range": "± 12763085.615780706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98788.21276595745,
            "unit": "ns",
            "range": "± 24745.121539785578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 418454.9166666667,
            "unit": "ns",
            "range": "± 76034.86679490731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 434223.7688172043,
            "unit": "ns",
            "range": "± 94911.94559193548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 392874.64285714284,
            "unit": "ns",
            "range": "± 82184.77168623489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5320211.8367346935,
            "unit": "ns",
            "range": "± 726127.2927798028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4650654.393939394,
            "unit": "ns",
            "range": "± 545400.0616703081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31887.89534883721,
            "unit": "ns",
            "range": "± 5359.827703615919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 158324.24210526317,
            "unit": "ns",
            "range": "± 32434.488235195873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143234.51063829788,
            "unit": "ns",
            "range": "± 25263.866474402617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 169265.95698924732,
            "unit": "ns",
            "range": "± 37512.02485607085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9800.575268817205,
            "unit": "ns",
            "range": "± 1319.2195752608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26846.94382022472,
            "unit": "ns",
            "range": "± 3602.4505654281256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2079249.9069767443,
            "unit": "ns",
            "range": "± 452796.1334668793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4356953.785714285,
            "unit": "ns",
            "range": "± 1113749.6767186192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3661799.6170212766,
            "unit": "ns",
            "range": "± 851595.9918407202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10152626.926966293,
            "unit": "ns",
            "range": "± 2930506.262758896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4036962.208791209,
            "unit": "ns",
            "range": "± 534670.5069141288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4141067.5656565656,
            "unit": "ns",
            "range": "± 491272.4057696683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5088255.892473118,
            "unit": "ns",
            "range": "± 554634.1505180505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5133906.208791208,
            "unit": "ns",
            "range": "± 771955.0285855966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8578455.958333334,
            "unit": "ns",
            "range": "± 836511.645957814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7871366.751930147,
            "unit": "ns",
            "range": "± 423959.05544545135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2272838.83984375,
            "unit": "ns",
            "range": "± 37819.13827685297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1557268.8635755565,
            "unit": "ns",
            "range": "± 77291.94049353446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3968082.0797991073,
            "unit": "ns",
            "range": "± 111719.14654220373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011156.3838588169,
            "unit": "ns",
            "range": "± 52906.89871148399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948754.6383120888,
            "unit": "ns",
            "range": "± 20422.702832532184"
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
          "id": "6cb5cae0c0ce106005466915a32fe73338374b68",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:17:46+09:00",
          "tree_id": "ac48fc533edf5d35f19fa337b454b75c076c0c48",
          "url": "https://github.com/moreal/libplanet/commit/6cb5cae0c0ce106005466915a32fe73338374b68"
        },
        "date": 1687401274819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9087018.386597939,
            "unit": "ns",
            "range": "± 590493.5265845932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22395755.78301887,
            "unit": "ns",
            "range": "± 925923.1128016636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57277951.0952381,
            "unit": "ns",
            "range": "± 2067063.3765745093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117108904.69565217,
            "unit": "ns",
            "range": "± 4495290.306238739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232764059.13157895,
            "unit": "ns",
            "range": "± 4976930.144315036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78483.7,
            "unit": "ns",
            "range": "± 6942.15088598696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361238.5,
            "unit": "ns",
            "range": "± 42979.57364798266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312466.0652173913,
            "unit": "ns",
            "range": "± 26124.102818520358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327575.3263157895,
            "unit": "ns",
            "range": "± 35008.36881480251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4528411.75,
            "unit": "ns",
            "range": "± 364702.12559832557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829599.2988505745,
            "unit": "ns",
            "range": "± 209684.73014660328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22371.340206185567,
            "unit": "ns",
            "range": "± 5373.887438900333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118607.59375,
            "unit": "ns",
            "range": "± 23103.50362132532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101655.59183673469,
            "unit": "ns",
            "range": "± 18629.825409968613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111573.67391304347,
            "unit": "ns",
            "range": "± 17214.56783351521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5817.641304347826,
            "unit": "ns",
            "range": "± 1407.3651836085205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18621.478494623654,
            "unit": "ns",
            "range": "± 3462.5248672109533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1820358.5842105264,
            "unit": "ns",
            "range": "± 193389.96045008762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431408.405263158,
            "unit": "ns",
            "range": "± 324376.87773460767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2841156.4646464647,
            "unit": "ns",
            "range": "± 296865.9713483824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7303987.916666667,
            "unit": "ns",
            "range": "± 567902.6813262003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3504561.505263158,
            "unit": "ns",
            "range": "± 249396.53091881154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3804195.0102040814,
            "unit": "ns",
            "range": "± 322532.65357266326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4570266.3133333335,
            "unit": "ns",
            "range": "± 219973.46254250227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4327897.369565218,
            "unit": "ns",
            "range": "± 252850.28311573647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7781160.393617021,
            "unit": "ns",
            "range": "± 301360.1616626823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6755798.856336806,
            "unit": "ns",
            "range": "± 143216.19834246597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069854.418247768,
            "unit": "ns",
            "range": "± 31309.178531972757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307720.7981305805,
            "unit": "ns",
            "range": "± 18415.822588131807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2986835.525275735,
            "unit": "ns",
            "range": "± 59958.48621593008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852760.8230698529,
            "unit": "ns",
            "range": "± 17256.76094546812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825682.6183268229,
            "unit": "ns",
            "range": "± 5007.3466289299095"
          }
        ]
      }
    ]
  }
}