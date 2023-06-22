window.BENCHMARK_DATA = {
  "lastUpdate": 1687424567986,
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
          "id": "bee9a7bac3e4b3128f995685deb97b7a6e028e4c",
          "message": "Prepare 2.0.2",
          "timestamp": "2023-06-22T16:42:24+09:00",
          "tree_id": "c91fb476bde373feb45b1f1a4a2f8685fdebd3f8",
          "url": "https://github.com/moreal/libplanet/commit/bee9a7bac3e4b3128f995685deb97b7a6e028e4c"
        },
        "date": 1687420607246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806452.7586206896,
            "unit": "ns",
            "range": "± 109237.67346663852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959424.5789473685,
            "unit": "ns",
            "range": "± 80212.05511941166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4764111.357142857,
            "unit": "ns",
            "range": "± 53161.35605523873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5018608.0322580645,
            "unit": "ns",
            "range": "± 152890.9679450215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7587033.266666667,
            "unit": "ns",
            "range": "± 136288.635794178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8341857.571428572,
            "unit": "ns",
            "range": "± 99518.39003668872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23430614.07142857,
            "unit": "ns",
            "range": "± 157604.08054531127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58369981.86666667,
            "unit": "ns",
            "range": "± 373083.60284312884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117145730.53333333,
            "unit": "ns",
            "range": "± 578315.3996001622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230697335.6,
            "unit": "ns",
            "range": "± 1007861.1046588995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305709.69811320753,
            "unit": "ns",
            "range": "± 11994.277548360791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308220.3333333333,
            "unit": "ns",
            "range": "± 6591.027787387764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282620.7021276596,
            "unit": "ns",
            "range": "± 10953.615745923498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4745183.428571428,
            "unit": "ns",
            "range": "± 34233.73367514358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4369817.4,
            "unit": "ns",
            "range": "± 62966.964067108805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23825.34375,
            "unit": "ns",
            "range": "± 1929.5447285666828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102309.45918367348,
            "unit": "ns",
            "range": "± 8813.299355476624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89621.57142857143,
            "unit": "ns",
            "range": "± 7191.065149154291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115875.09183673469,
            "unit": "ns",
            "range": "± 14740.55073184435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6872.715789473684,
            "unit": "ns",
            "range": "± 1056.2362290494257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21641.129032258064,
            "unit": "ns",
            "range": "± 2083.2674650643858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51047.358695652176,
            "unit": "ns",
            "range": "± 3582.90954755594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6161425.7390625,
            "unit": "ns",
            "range": "± 27254.497277337392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930136.544921875,
            "unit": "ns",
            "range": "± 1338.9806622829328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405016.546875,
            "unit": "ns",
            "range": "± 4095.561932470062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645514.457356771,
            "unit": "ns",
            "range": "± 2168.3354267624886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838804.3597005209,
            "unit": "ns",
            "range": "± 297.67569733974454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776178.5210286458,
            "unit": "ns",
            "range": "± 316.08636355530217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543416.25,
            "unit": "ns",
            "range": "± 84080.10524292248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990663.160714286,
            "unit": "ns",
            "range": "± 127286.02567771629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504002.56097561,
            "unit": "ns",
            "range": "± 132308.0071001647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5837098.482758621,
            "unit": "ns",
            "range": "± 170378.74112434263"
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
          "id": "877ed9c53ee71527d5d55aaf185359e358d4d9e6",
          "message": "Version bump",
          "timestamp": "2023-06-22T16:43:12+09:00",
          "tree_id": "c91fb476bde373feb45b1f1a4a2f8685fdebd3f8",
          "url": "https://github.com/moreal/libplanet/commit/877ed9c53ee71527d5d55aaf185359e358d4d9e6"
        },
        "date": 1687420667432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3712357.5714285714,
            "unit": "ns",
            "range": "± 46125.90185854079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941696.4210526315,
            "unit": "ns",
            "range": "± 72203.10618458015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4809951.05882353,
            "unit": "ns",
            "range": "± 95601.98035571136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4877532.916666667,
            "unit": "ns",
            "range": "± 162259.29899804114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7574644.769230769,
            "unit": "ns",
            "range": "± 206201.02249975535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6139352.671354166,
            "unit": "ns",
            "range": "± 28061.067911728365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923922.3131975445,
            "unit": "ns",
            "range": "± 3309.496241551069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399056.650390625,
            "unit": "ns",
            "range": "± 2701.836670127811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2677076.812239583,
            "unit": "ns",
            "range": "± 4655.047661416111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865114.3646065848,
            "unit": "ns",
            "range": "± 883.8344355645496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779139.8197916667,
            "unit": "ns",
            "range": "± 790.2112984322084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301806.84444444446,
            "unit": "ns",
            "range": "± 11426.147111610353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294784.6,
            "unit": "ns",
            "range": "± 5334.4926362039605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274258.7802197802,
            "unit": "ns",
            "range": "± 15370.944502030228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4698269.2,
            "unit": "ns",
            "range": "± 66510.58916572179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4214546.2,
            "unit": "ns",
            "range": "± 36431.26360735476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23686.9793814433,
            "unit": "ns",
            "range": "± 2725.612683337537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102242.08333333333,
            "unit": "ns",
            "range": "± 8100.160109745288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89566.1649484536,
            "unit": "ns",
            "range": "± 7869.385242667219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108388.8,
            "unit": "ns",
            "range": "± 14637.669380963041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6750.606060606061,
            "unit": "ns",
            "range": "± 1289.1108850058033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23534.729166666668,
            "unit": "ns",
            "range": "± 2083.4026999329058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583935.9090909092,
            "unit": "ns",
            "range": "± 119730.67245621809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059333.0434782607,
            "unit": "ns",
            "range": "± 116142.17557286442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505463,
            "unit": "ns",
            "range": "± 124025.64165371787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6149840.470588235,
            "unit": "ns",
            "range": "± 246332.4361654675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53734.47368421053,
            "unit": "ns",
            "range": "± 4512.629763189006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9079759.363636363,
            "unit": "ns",
            "range": "± 281646.7218382607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23017898.2,
            "unit": "ns",
            "range": "± 243482.91283261983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58759389.266666666,
            "unit": "ns",
            "range": "± 502237.34513069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115368008.66666667,
            "unit": "ns",
            "range": "± 1068936.6777327743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231799409.8,
            "unit": "ns",
            "range": "± 2552866.046577404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "beebe4293329363947deee7f6cc6c73f6d37a776",
          "message": "Update CHANGES.md",
          "timestamp": "2023-06-22T17:50:32+09:00",
          "tree_id": "9760d78f94a110ad84c6768b3f4146663ffaf49c",
          "url": "https://github.com/moreal/libplanet/commit/beebe4293329363947deee7f6cc6c73f6d37a776"
        },
        "date": 1687424563179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3237624.6153846155,
            "unit": "ns",
            "range": "± 61144.08531792878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444136.7,
            "unit": "ns",
            "range": "± 97864.37559727661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4247291.8,
            "unit": "ns",
            "range": "± 64991.92422491538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4147099.653846154,
            "unit": "ns",
            "range": "± 99141.23753189378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6665170.25,
            "unit": "ns",
            "range": "± 55669.429863215366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6034667.478236607,
            "unit": "ns",
            "range": "± 24998.245644846724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926110.012890625,
            "unit": "ns",
            "range": "± 5074.219707197829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349518.4287109375,
            "unit": "ns",
            "range": "± 1735.937667107387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577287.9012276786,
            "unit": "ns",
            "range": "± 5698.625974418962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809596.5874720982,
            "unit": "ns",
            "range": "± 947.8854844259308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745832.6819196428,
            "unit": "ns",
            "range": "± 1269.437661155996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293957.488372093,
            "unit": "ns",
            "range": "± 10765.041433517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291690.03773584904,
            "unit": "ns",
            "range": "± 12015.823355959656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229423.18421052632,
            "unit": "ns",
            "range": "± 4175.060749551635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163265.1333333333,
            "unit": "ns",
            "range": "± 52339.57842489026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750321.0714285714,
            "unit": "ns",
            "range": "± 32501.259827568545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15808.537634408602,
            "unit": "ns",
            "range": "± 1283.2746288401318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79818.2,
            "unit": "ns",
            "range": "± 3320.0580288986266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69319.86666666667,
            "unit": "ns",
            "range": "± 1225.3361560151955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83806.71590909091,
            "unit": "ns",
            "range": "± 8071.823876205403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4577.072916666667,
            "unit": "ns",
            "range": "± 679.0871464855817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15795.734042553191,
            "unit": "ns",
            "range": "± 921.8768277244578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292920.3578947368,
            "unit": "ns",
            "range": "± 81232.19231352824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528713.21875,
            "unit": "ns",
            "range": "± 66779.3151998694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2081781.1647058823,
            "unit": "ns",
            "range": "± 110017.82183332271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5271723.264705882,
            "unit": "ns",
            "range": "± 167306.6677769442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44561.7037037037,
            "unit": "ns",
            "range": "± 2033.6980137451849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608072.928571428,
            "unit": "ns",
            "range": "± 11659.29187363047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19182054.333333332,
            "unit": "ns",
            "range": "± 57389.94449212792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48764432,
            "unit": "ns",
            "range": "± 306682.7520248546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101291617.13333334,
            "unit": "ns",
            "range": "± 483413.9253057905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218580515.86666667,
            "unit": "ns",
            "range": "± 1878374.1888311615"
          }
        ]
      }
    ]
  }
}