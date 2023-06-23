window.BENCHMARK_DATA = {
  "lastUpdate": 1687495568932,
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
          "id": "69f446ee0b976aff6ca26ae843a5309a872363c3",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T12:19:12+09:00",
          "tree_id": "2f34d8a134944d8fe02e84d4439b7a324c9a698e",
          "url": "https://github.com/moreal/libplanet/commit/69f446ee0b976aff6ca26ae843a5309a872363c3"
        },
        "date": 1687405384682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9189832.606741574,
            "unit": "ns",
            "range": "± 930525.8083345651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20866093.533333335,
            "unit": "ns",
            "range": "± 762502.6435593698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51819431.346938774,
            "unit": "ns",
            "range": "± 2054136.9566447847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105968464.58163266,
            "unit": "ns",
            "range": "± 4182489.078301161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222196614.45918366,
            "unit": "ns",
            "range": "± 8314620.156094857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69682.04347826086,
            "unit": "ns",
            "range": "± 12842.734882486095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330174.5257731959,
            "unit": "ns",
            "range": "± 23426.34333665698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336754.79347826086,
            "unit": "ns",
            "range": "± 34299.18567563703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 389666.55102040817,
            "unit": "ns",
            "range": "± 74562.98799059087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4589797.340659341,
            "unit": "ns",
            "range": "± 376490.3954716573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4071885.724489796,
            "unit": "ns",
            "range": "± 284707.6651150953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17818.802197802197,
            "unit": "ns",
            "range": "± 2431.494922972195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97919.38541666667,
            "unit": "ns",
            "range": "± 19206.12842482688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106129.91666666667,
            "unit": "ns",
            "range": "± 18693.138754023974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117170.92105263157,
            "unit": "ns",
            "range": "± 21132.880131962433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6573.978494623656,
            "unit": "ns",
            "range": "± 788.738205017502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17267.956521739132,
            "unit": "ns",
            "range": "± 3386.0828495509286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747161.2586206896,
            "unit": "ns",
            "range": "± 224858.6620191058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3359284.5113636362,
            "unit": "ns",
            "range": "± 413342.35660613404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2889069.418604651,
            "unit": "ns",
            "range": "± 346451.23249503475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7205953.876404494,
            "unit": "ns",
            "range": "± 817384.4265280765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469628.282608696,
            "unit": "ns",
            "range": "± 300109.69807327713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3661147.1612903224,
            "unit": "ns",
            "range": "± 243613.4739755605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4627138.072916667,
            "unit": "ns",
            "range": "± 329737.5591574463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4567304.168421052,
            "unit": "ns",
            "range": "± 490722.61042598233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7931294.867647059,
            "unit": "ns",
            "range": "± 362725.96898752294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6916688.485677083,
            "unit": "ns",
            "range": "± 137995.9877978477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2092541.4142252605,
            "unit": "ns",
            "range": "± 52915.20352576902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372365.131796875,
            "unit": "ns",
            "range": "± 30607.472997128803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3109923.687734375,
            "unit": "ns",
            "range": "± 261865.01427256956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937433.9368489584,
            "unit": "ns",
            "range": "± 13054.129654525741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794093.505859375,
            "unit": "ns",
            "range": "± 6063.169204303327"
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
          "id": "23d7115798b4e69f093d0d69ec425cd53d51592c",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-22T12:31:51+09:00",
          "tree_id": "8bd161622abdec7c446fd3590ecaa14d332a5db9",
          "url": "https://github.com/moreal/libplanet/commit/23d7115798b4e69f093d0d69ec425cd53d51592c"
        },
        "date": 1687405777962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9167885.625,
            "unit": "ns",
            "range": "± 229628.87542857582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23972014.666666668,
            "unit": "ns",
            "range": "± 444719.9119877374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57600987.93333333,
            "unit": "ns",
            "range": "± 827236.6601155981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118672458.03333333,
            "unit": "ns",
            "range": "± 1814849.6989475414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230241396.53333333,
            "unit": "ns",
            "range": "± 3743285.487618595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67603.00537634408,
            "unit": "ns",
            "range": "± 5338.910291484045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370428.8965517241,
            "unit": "ns",
            "range": "± 15089.62981268419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354794.05376344087,
            "unit": "ns",
            "range": "± 19455.510623943603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309922.6923076923,
            "unit": "ns",
            "range": "± 4131.322273893582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4804025.263157895,
            "unit": "ns",
            "range": "± 105739.16872024823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4350239.357142857,
            "unit": "ns",
            "range": "± 41088.047924515144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19549.695652173912,
            "unit": "ns",
            "range": "± 1347.0675577919674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98335.09375,
            "unit": "ns",
            "range": "± 7206.835017541735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93059.38775510204,
            "unit": "ns",
            "range": "± 9669.777809452418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116801.29032258065,
            "unit": "ns",
            "range": "± 12898.994788591124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5905.907216494846,
            "unit": "ns",
            "range": "± 884.8676817571161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18683.712765957447,
            "unit": "ns",
            "range": "± 1379.4619071103816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1917801.6210526316,
            "unit": "ns",
            "range": "± 215300.49923453986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3568302.964285714,
            "unit": "ns",
            "range": "± 143029.0166128365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3022966.092783505,
            "unit": "ns",
            "range": "± 244333.8975221324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7832352.48245614,
            "unit": "ns",
            "range": "± 320165.0590186418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4032457.9166666665,
            "unit": "ns",
            "range": "± 52271.67121779746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4339533.777777778,
            "unit": "ns",
            "range": "± 87582.52746615319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5248698.91025641,
            "unit": "ns",
            "range": "± 180853.39493979182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5352840.5,
            "unit": "ns",
            "range": "± 153041.28376910908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8883078.23076923,
            "unit": "ns",
            "range": "± 303452.60719881963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6944514.295036765,
            "unit": "ns",
            "range": "± 140751.42248528768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2346969.6866629464,
            "unit": "ns",
            "range": "± 8284.660006249358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1479665.3888020834,
            "unit": "ns",
            "range": "± 8431.386320103502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198481.4670758927,
            "unit": "ns",
            "range": "± 11065.031765914131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030881.714704241,
            "unit": "ns",
            "range": "± 4808.3332903438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 871943.829296875,
            "unit": "ns",
            "range": "± 5304.970433344464"
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
          "id": "c2207d09ce017f70b1b9a0f88d758cd796d58121",
          "message": "fix(@planetarium/tx): remove separate actions",
          "timestamp": "2023-06-23T13:28:37+09:00",
          "tree_id": "64788bd2d3e7acefd768e41ba0daec95c847c3ed",
          "url": "https://github.com/moreal/libplanet/commit/c2207d09ce017f70b1b9a0f88d758cd796d58121"
        },
        "date": 1687495556348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9061002.924731182,
            "unit": "ns",
            "range": "± 614552.1160837598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22370218.044444446,
            "unit": "ns",
            "range": "± 1234730.7088826091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56367813.510526314,
            "unit": "ns",
            "range": "± 3623098.0211074958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110009616.16129032,
            "unit": "ns",
            "range": "± 4991410.926706603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215061331.8846154,
            "unit": "ns",
            "range": "± 5387112.007233435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73056.48421052631,
            "unit": "ns",
            "range": "± 13103.741815663057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343759.13402061857,
            "unit": "ns",
            "range": "± 26352.159901447067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329665.021978022,
            "unit": "ns",
            "range": "± 22822.893406002087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327052.6395348837,
            "unit": "ns",
            "range": "± 25244.723370922857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5097171.171717172,
            "unit": "ns",
            "range": "± 1025645.0891661966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693130.6666666665,
            "unit": "ns",
            "range": "± 77288.22441108119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19380.212765957447,
            "unit": "ns",
            "range": "± 2396.783350109509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92774.32653061225,
            "unit": "ns",
            "range": "± 12457.656809819719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101819.29292929293,
            "unit": "ns",
            "range": "± 12601.163996487707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124450.86734693877,
            "unit": "ns",
            "range": "± 18415.59375329358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7580.115789473684,
            "unit": "ns",
            "range": "± 1198.7969045526693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19172.25,
            "unit": "ns",
            "range": "± 3557.3839833429643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762734.8265306123,
            "unit": "ns",
            "range": "± 257017.06792921037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3385350.6666666665,
            "unit": "ns",
            "range": "± 365094.1911098002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2868489.8229166665,
            "unit": "ns",
            "range": "± 319712.7507739769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7256979.043956044,
            "unit": "ns",
            "range": "± 584161.0462735599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3572343.1075268816,
            "unit": "ns",
            "range": "± 358190.51445738925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580324.188888889,
            "unit": "ns",
            "range": "± 270879.50987501215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4419302.904761905,
            "unit": "ns",
            "range": "± 99922.92507373108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634877.421052632,
            "unit": "ns",
            "range": "± 541845.8917493521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8287003.893617021,
            "unit": "ns",
            "range": "± 586406.3148789756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6686684.527901785,
            "unit": "ns",
            "range": "± 118293.75786751282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1978789.584263393,
            "unit": "ns",
            "range": "± 32904.82886991847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314049.2325892858,
            "unit": "ns",
            "range": "± 40087.57847982217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689677.1056640623,
            "unit": "ns",
            "range": "± 60764.794307584256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895373.3012982537,
            "unit": "ns",
            "range": "± 17737.327121324193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 819270.9248190487,
            "unit": "ns",
            "range": "± 39140.09287981063"
          }
        ]
      }
    ]
  }
}