window.BENCHMARK_DATA = {
  "lastUpdate": 1687403845924,
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
          "id": "62c8213608a0eb8df2425c4b193d2415ce8f6357",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:51:58+09:00",
          "tree_id": "ff0d929b4c24e4a1594405447176ac082ee1465c",
          "url": "https://github.com/moreal/libplanet/commit/62c8213608a0eb8df2425c4b193d2415ce8f6357"
        },
        "date": 1687403705282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9357682.464285715,
            "unit": "ns",
            "range": "± 261098.9747321576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23848686.333333332,
            "unit": "ns",
            "range": "± 1003793.6474383869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59714496.95652174,
            "unit": "ns",
            "range": "± 1494793.2896915115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119701211.575,
            "unit": "ns",
            "range": "± 4206762.576137464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237570440.17142856,
            "unit": "ns",
            "range": "± 7631219.675688828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69247.02105263158,
            "unit": "ns",
            "range": "± 8780.097493738442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384714.9022988506,
            "unit": "ns",
            "range": "± 21225.394931247723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356506.6307692308,
            "unit": "ns",
            "range": "± 15833.954642209206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326695.2988505747,
            "unit": "ns",
            "range": "± 20581.809342636196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4822052.866666666,
            "unit": "ns",
            "range": "± 169699.64080995362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4419653.947368421,
            "unit": "ns",
            "range": "± 94495.42337446455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19788.136842105265,
            "unit": "ns",
            "range": "± 1482.7411045771573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99060.1105263158,
            "unit": "ns",
            "range": "± 7673.375771436927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93533.84375,
            "unit": "ns",
            "range": "± 9716.816210573594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122070.13333333333,
            "unit": "ns",
            "range": "± 10041.305042370366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7256.367346938776,
            "unit": "ns",
            "range": "± 1202.22485664417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19329.957446808512,
            "unit": "ns",
            "range": "± 1658.9069510865593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2111149.540229885,
            "unit": "ns",
            "range": "± 336509.2021273922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3822387.9775280897,
            "unit": "ns",
            "range": "± 443816.3012881204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3285535.813186813,
            "unit": "ns",
            "range": "± 485639.95144638023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8554146.255555555,
            "unit": "ns",
            "range": "± 1254150.6545449826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3860553.988235294,
            "unit": "ns",
            "range": "± 207482.0094029666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4384106.36746988,
            "unit": "ns",
            "range": "± 338913.86748591845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5747868.4375,
            "unit": "ns",
            "range": "± 278096.9675726843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5306022.3977272725,
            "unit": "ns",
            "range": "± 512221.3064786231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9532853.07142857,
            "unit": "ns",
            "range": "± 915175.6988176798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7294990.627704327,
            "unit": "ns",
            "range": "± 78812.09086183656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2281476.308035714,
            "unit": "ns",
            "range": "± 16609.460594602042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454542.466045673,
            "unit": "ns",
            "range": "± 17575.04589658129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2938318.6163504464,
            "unit": "ns",
            "range": "± 27843.50188042835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041738.1813401442,
            "unit": "ns",
            "range": "± 8082.924037255834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892839.8577473959,
            "unit": "ns",
            "range": "± 7762.211454548699"
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
          "id": "d13ea4bcc94cb044e99a9d41220b81c08bfba37d",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T11:54:06+09:00",
          "tree_id": "e5d6b8ba344b9121fb0210401ecc59e6b6538cf9",
          "url": "https://github.com/moreal/libplanet/commit/d13ea4bcc94cb044e99a9d41220b81c08bfba37d"
        },
        "date": 1687403834764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9885968.8814433,
            "unit": "ns",
            "range": "± 736007.7830951478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22841005.17,
            "unit": "ns",
            "range": "± 1706692.6625180442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59629349.05405405,
            "unit": "ns",
            "range": "± 2975316.9413170354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121801200.57017544,
            "unit": "ns",
            "range": "± 5254952.810018734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238340561.2857143,
            "unit": "ns",
            "range": "± 16303872.34343456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75644.4268292683,
            "unit": "ns",
            "range": "± 7113.100306468944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349967.7365591398,
            "unit": "ns",
            "range": "± 34749.5670878251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311411.74210526317,
            "unit": "ns",
            "range": "± 39873.30808328538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300008.3085106383,
            "unit": "ns",
            "range": "± 26618.219351441076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4619121.479166667,
            "unit": "ns",
            "range": "± 425774.9203776934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4214368.474747474,
            "unit": "ns",
            "range": "± 483199.95823169214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21432.81868131868,
            "unit": "ns",
            "range": "± 4440.95632313362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126534.7808988764,
            "unit": "ns",
            "range": "± 21396.990233329532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125839.5,
            "unit": "ns",
            "range": "± 25096.686651512595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122523.20430107527,
            "unit": "ns",
            "range": "± 14556.548024230211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8071.921348314607,
            "unit": "ns",
            "range": "± 941.7328711273691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23530.466666666667,
            "unit": "ns",
            "range": "± 3250.506033033398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1861088.6129032257,
            "unit": "ns",
            "range": "± 343125.97129986965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3365193.7252747254,
            "unit": "ns",
            "range": "± 399933.7475647148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2811240.8146067415,
            "unit": "ns",
            "range": "± 296380.65381086274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7535098.408045977,
            "unit": "ns",
            "range": "± 1161867.807045577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3519356.777777778,
            "unit": "ns",
            "range": "± 264221.54113555077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3778670.6666666665,
            "unit": "ns",
            "range": "± 389480.9462322034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4917529.118556701,
            "unit": "ns",
            "range": "± 337891.34040680167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680770.214285715,
            "unit": "ns",
            "range": "± 391499.07969569654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8169263.175257732,
            "unit": "ns",
            "range": "± 622172.9004323111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6635335.229947916,
            "unit": "ns",
            "range": "± 116724.16144628449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166446.4765625,
            "unit": "ns",
            "range": "± 45695.899315117764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392299.894822141,
            "unit": "ns",
            "range": "± 53820.56950563365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2927500.0535481772,
            "unit": "ns",
            "range": "± 251398.2786943692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888865.748799092,
            "unit": "ns",
            "range": "± 44025.56463367913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 985084.99453125,
            "unit": "ns",
            "range": "± 25257.93574223319"
          }
        ]
      }
    ]
  }
}