window.BENCHMARK_DATA = {
  "lastUpdate": 1682412519337,
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
          "id": "66cd4ec41dba46d1f34b718f977714284c443b06",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:16:18+09:00",
          "tree_id": "65975546470a4d2376acc0fcd547625311518773",
          "url": "https://github.com/moreal/libplanet/commit/66cd4ec41dba46d1f34b718f977714284c443b06"
        },
        "date": 1681479038631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7594387.533333333,
            "unit": "ns",
            "range": "± 34999.55498057218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19437022.266666666,
            "unit": "ns",
            "range": "± 80794.198612866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50183290.46666667,
            "unit": "ns",
            "range": "± 216244.04437674006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99768466.93333334,
            "unit": "ns",
            "range": "± 651007.8375922176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198464301,
            "unit": "ns",
            "range": "± 935188.1208727853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45254.68421052631,
            "unit": "ns",
            "range": "± 2297.828471756331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369686.7040816327,
            "unit": "ns",
            "range": "± 97000.04861527203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2545355.5714285714,
            "unit": "ns",
            "range": "± 39415.354518286375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2190055.670886076,
            "unit": "ns",
            "range": "± 108757.4718826277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5509405.634146341,
            "unit": "ns",
            "range": "± 195645.96457527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6173424.7796875,
            "unit": "ns",
            "range": "± 46148.79283147224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869803.5160435268,
            "unit": "ns",
            "range": "± 8159.789928463912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354277.0256510417,
            "unit": "ns",
            "range": "± 666.8784051339571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536913.638541667,
            "unit": "ns",
            "range": "± 1659.1290877842464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809141.0178571428,
            "unit": "ns",
            "range": "± 493.30224289866095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723195.173967634,
            "unit": "ns",
            "range": "± 444.079572744492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321188.5789473684,
            "unit": "ns",
            "range": "± 7107.74758286719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264770.9210526316,
            "unit": "ns",
            "range": "± 7974.925509714229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234504.7142857143,
            "unit": "ns",
            "range": "± 3392.1989108172074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5582384.857142857,
            "unit": "ns",
            "range": "± 19568.15602278018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961558.8571428573,
            "unit": "ns",
            "range": "± 18202.791425227333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18238.3125,
            "unit": "ns",
            "range": "± 1602.4517683028223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87082.15384615384,
            "unit": "ns",
            "range": "± 4055.522004127402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73996.78571428571,
            "unit": "ns",
            "range": "± 2683.593336715552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 178000.16326530612,
            "unit": "ns",
            "range": "± 16040.006286919272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5061.773195876289,
            "unit": "ns",
            "range": "± 637.2602736381644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16722.926315789475,
            "unit": "ns",
            "range": "± 1390.945218510009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230091.6,
            "unit": "ns",
            "range": "± 36015.94523025283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430693.65,
            "unit": "ns",
            "range": "± 78937.13812786996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4260557.882352941,
            "unit": "ns",
            "range": "± 82379.66256674212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4338821.675,
            "unit": "ns",
            "range": "± 135003.45073355935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7236109.904761905,
            "unit": "ns",
            "range": "± 144170.07697192393"
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
          "id": "2306ec5bfff95ae38f4ecca45447b50fa9d13d4c",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:43:57+09:00",
          "tree_id": "26abe037d1fb1689b252969e1fa969d97ebba9cd",
          "url": "https://github.com/moreal/libplanet/commit/2306ec5bfff95ae38f4ecca45447b50fa9d13d4c"
        },
        "date": 1681480687303,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8051067.428571428,
            "unit": "ns",
            "range": "± 127408.7489827157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21909407.466666665,
            "unit": "ns",
            "range": "± 282152.066608686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56684736.333333336,
            "unit": "ns",
            "range": "± 418727.34446375316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111160578.33333333,
            "unit": "ns",
            "range": "± 474852.0196566004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223595619.13333333,
            "unit": "ns",
            "range": "± 1303279.9473602783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51132.46808510638,
            "unit": "ns",
            "range": "± 3165.0258783773706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496631.7789473685,
            "unit": "ns",
            "range": "± 106077.72752894895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2701456.7,
            "unit": "ns",
            "range": "± 80664.0545605555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2396967.506329114,
            "unit": "ns",
            "range": "± 118402.58366440747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5783973.205882353,
            "unit": "ns",
            "range": "± 181258.88109932866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926379.611979167,
            "unit": "ns",
            "range": "± 18821.328793485063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857958.875390625,
            "unit": "ns",
            "range": "± 3166.0636638417036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370621.7734375,
            "unit": "ns",
            "range": "± 3681.478645205634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683274.2919270834,
            "unit": "ns",
            "range": "± 1692.7983430768472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862982.7645833333,
            "unit": "ns",
            "range": "± 2263.9954153429067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771231.8810686384,
            "unit": "ns",
            "range": "± 431.3563708092503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351107.6296296296,
            "unit": "ns",
            "range": "± 9786.171665035816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287147.69444444444,
            "unit": "ns",
            "range": "± 9059.958838819915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251077.35593220338,
            "unit": "ns",
            "range": "± 11075.55293048413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5828307.714285715,
            "unit": "ns",
            "range": "± 39966.680995026865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108739,
            "unit": "ns",
            "range": "± 47265.02245521848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24192.936842105264,
            "unit": "ns",
            "range": "± 2762.2048116496653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103211.51041666667,
            "unit": "ns",
            "range": "± 7991.42356594973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83627.39705882352,
            "unit": "ns",
            "range": "± 4008.5513486318328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 203287.4842105263,
            "unit": "ns",
            "range": "± 14926.191603497608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.421052631579,
            "unit": "ns",
            "range": "± 710.0357584484574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20678.567010309278,
            "unit": "ns",
            "range": "± 1925.4238218897012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3551236,
            "unit": "ns",
            "range": "± 72367.13791580402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3853598.153846154,
            "unit": "ns",
            "range": "± 58141.775634859645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4320576.333333333,
            "unit": "ns",
            "range": "± 79429.99389099692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4698561.106382979,
            "unit": "ns",
            "range": "± 163964.67118854198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7772597.558139535,
            "unit": "ns",
            "range": "± 283407.55301956617"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "cd6c759315e0de39476267f3b7078839ade03d40",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-20T13:18:05+09:00",
          "tree_id": "7c63208914b931bfb0d3ea09f267360dfe37dc8e",
          "url": "https://github.com/moreal/libplanet/commit/cd6c759315e0de39476267f3b7078839ade03d40"
        },
        "date": 1681965120039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8590108.8,
            "unit": "ns",
            "range": "± 80803.24031709903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22445301.266666666,
            "unit": "ns",
            "range": "± 177025.79433173276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55625765.06666667,
            "unit": "ns",
            "range": "± 282564.6508468629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111125075.8,
            "unit": "ns",
            "range": "± 387990.08648403076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222637761.93333334,
            "unit": "ns",
            "range": "± 559046.2582799217"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54504.836956521736,
            "unit": "ns",
            "range": "± 3784.9030538404613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535420.3505154639,
            "unit": "ns",
            "range": "± 110786.14572595872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792470.6785714286,
            "unit": "ns",
            "range": "± 77811.82634719127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2412434.911392405,
            "unit": "ns",
            "range": "± 115456.81561043637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5998040.29032258,
            "unit": "ns",
            "range": "± 182887.96582538236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6041904.680803572,
            "unit": "ns",
            "range": "± 35482.502831571706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865119.0661458333,
            "unit": "ns",
            "range": "± 1493.7940416916006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351551.4104166667,
            "unit": "ns",
            "range": "± 3025.3835117752215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631958.299609375,
            "unit": "ns",
            "range": "± 3111.794194482887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828765.5580357143,
            "unit": "ns",
            "range": "± 466.5620168611126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747029.4845842634,
            "unit": "ns",
            "range": "± 288.75723774088067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357407.4166666667,
            "unit": "ns",
            "range": "± 8925.969775186124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291837.5652173913,
            "unit": "ns",
            "range": "± 10158.219499831814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251459.33333333334,
            "unit": "ns",
            "range": "± 4468.900498631254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5906586.357142857,
            "unit": "ns",
            "range": "± 55515.714718526244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3972245.3571428573,
            "unit": "ns",
            "range": "± 43556.05552460688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24687.387096774193,
            "unit": "ns",
            "range": "± 1620.4650166746824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105428.8762886598,
            "unit": "ns",
            "range": "± 7460.757913992568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100494.24742268042,
            "unit": "ns",
            "range": "± 5799.665387314255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120743.46391752578,
            "unit": "ns",
            "range": "± 14386.888819238231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8812.453608247422,
            "unit": "ns",
            "range": "± 1044.9569570543179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24395.98947368421,
            "unit": "ns",
            "range": "± 1564.6959156330206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3639151.4166666665,
            "unit": "ns",
            "range": "± 32097.926255468825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3880037.1578947366,
            "unit": "ns",
            "range": "± 83369.07214193413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4409728.733333333,
            "unit": "ns",
            "range": "± 79168.93058108326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4873964.235294118,
            "unit": "ns",
            "range": "± 97750.99991913728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7476045.105263158,
            "unit": "ns",
            "range": "± 158542.4156540853"
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
          "id": "e919b337ef3820d37bbd3716341bbb4c460eaae0",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-20T14:40:13+09:00",
          "tree_id": "19a0036b34d31080b0617c0b75ffdc63eeca8a0c",
          "url": "https://github.com/moreal/libplanet/commit/e919b337ef3820d37bbd3716341bbb4c460eaae0"
        },
        "date": 1681970192992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10611534.857142856,
            "unit": "ns",
            "range": "± 151500.1354550586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27636331.6,
            "unit": "ns",
            "range": "± 391519.87332296243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64889769.93333333,
            "unit": "ns",
            "range": "± 439503.4049787599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135836122,
            "unit": "ns",
            "range": "± 1086355.8231314877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259165469.06666666,
            "unit": "ns",
            "range": "± 1563217.2780725774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57117.13684210526,
            "unit": "ns",
            "range": "± 4371.5228069046825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718670.08045977,
            "unit": "ns",
            "range": "± 89936.80664729016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3167192.379310345,
            "unit": "ns",
            "range": "± 91790.03341766071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790208.3333333335,
            "unit": "ns",
            "range": "± 122905.94882437284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6949746.081081081,
            "unit": "ns",
            "range": "± 231276.10440654145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7050133.341666667,
            "unit": "ns",
            "range": "± 47233.837877708946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2205335.456770833,
            "unit": "ns",
            "range": "± 7838.63370415985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1618555.2583984374,
            "unit": "ns",
            "range": "± 6816.241992941488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093356.767447917,
            "unit": "ns",
            "range": "± 9604.42817381868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994408.1799479167,
            "unit": "ns",
            "range": "± 3834.2504152222627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908520.3553385417,
            "unit": "ns",
            "range": "± 2405.1741141989496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407393.77777777775,
            "unit": "ns",
            "range": "± 11272.370504684088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330928.82,
            "unit": "ns",
            "range": "± 12594.90389928581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289568.53571428574,
            "unit": "ns",
            "range": "± 12309.923133892333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6941167.076923077,
            "unit": "ns",
            "range": "± 103588.63907097593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4621898.714285715,
            "unit": "ns",
            "range": "± 56532.772384259995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25445.736842105263,
            "unit": "ns",
            "range": "± 1946.6750661037197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111895.5,
            "unit": "ns",
            "range": "± 6131.765519881252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103327.85858585859,
            "unit": "ns",
            "range": "± 9639.558440020657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125086.23469387754,
            "unit": "ns",
            "range": "± 15100.225812335597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8072.371134020618,
            "unit": "ns",
            "range": "± 861.440016769252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24290.083333333332,
            "unit": "ns",
            "range": "± 2296.6983334969614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4229203.92,
            "unit": "ns",
            "range": "± 108867.01340470402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4490339.933333334,
            "unit": "ns",
            "range": "± 82361.29387857126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5875145.666666667,
            "unit": "ns",
            "range": "± 88512.85947950216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5457359.464285715,
            "unit": "ns",
            "range": "± 138657.02632447743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8846345.954545455,
            "unit": "ns",
            "range": "± 208166.60376760893"
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d1d171d78d7909c03524821d6691fd7fb14573a7",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-21T15:45:37+09:00",
          "tree_id": "b7a1fd628eb4ffdd67cfd3b87c96c8de5f7c6217",
          "url": "https://github.com/moreal/libplanet/commit/d1d171d78d7909c03524821d6691fd7fb14573a7"
        },
        "date": 1682060567026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7339070.752688172,
            "unit": "ns",
            "range": "± 487880.8356990745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18668516.536842104,
            "unit": "ns",
            "range": "± 1219906.3850266912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48805302.45205479,
            "unit": "ns",
            "range": "± 2425751.814956843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104983223.56565657,
            "unit": "ns",
            "range": "± 8998025.268705633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198824506.8888889,
            "unit": "ns",
            "range": "± 9102281.013529107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55552.95698924731,
            "unit": "ns",
            "range": "± 13963.539717167441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357945.6979166667,
            "unit": "ns",
            "range": "± 181192.92120750132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2635060.5208333335,
            "unit": "ns",
            "range": "± 234071.18552557242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2256105.8020833335,
            "unit": "ns",
            "range": "± 287887.76675852877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6289786.136842106,
            "unit": "ns",
            "range": "± 671500.1121101222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5649386.340711806,
            "unit": "ns",
            "range": "± 111952.08738573626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843930.8098028274,
            "unit": "ns",
            "range": "± 38752.44734068104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348432.5784505208,
            "unit": "ns",
            "range": "± 39648.34708404886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680885.35453125,
            "unit": "ns",
            "range": "± 106530.5648325294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904744.0581287203,
            "unit": "ns",
            "range": "± 18894.868884301843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792844.4245749081,
            "unit": "ns",
            "range": "± 25263.009546037327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335914.0105263158,
            "unit": "ns",
            "range": "± 38684.11694533448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295395.62765957444,
            "unit": "ns",
            "range": "± 43085.57744617825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252455.27083333334,
            "unit": "ns",
            "range": "± 38158.53887484058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5642461.076086956,
            "unit": "ns",
            "range": "± 510527.31406941236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634343.414893617,
            "unit": "ns",
            "range": "± 313767.0557304427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25842.8125,
            "unit": "ns",
            "range": "± 11296.463000531114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91197.03092783505,
            "unit": "ns",
            "range": "± 16134.213505682581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77641.13978494624,
            "unit": "ns",
            "range": "± 14561.463295878073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110787.98958333333,
            "unit": "ns",
            "range": "± 25692.315951208682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4470.511363636364,
            "unit": "ns",
            "range": "± 521.9710872848588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25893.34,
            "unit": "ns",
            "range": "± 10858.261853965996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374319.163265306,
            "unit": "ns",
            "range": "± 356667.1331118132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440369.2268041237,
            "unit": "ns",
            "range": "± 354800.071954483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4953456.319587629,
            "unit": "ns",
            "range": "± 395173.2871266084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4100174.3695652173,
            "unit": "ns",
            "range": "± 368660.8507696953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7327253.64893617,
            "unit": "ns",
            "range": "± 720287.4817322656"
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "52f53b69ad79116acddf0d24f178abc964d3fc9a",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-21T18:25:48+09:00",
          "tree_id": "7776f573b66fa10d51aa104723017fad129058a1",
          "url": "https://github.com/moreal/libplanet/commit/52f53b69ad79116acddf0d24f178abc964d3fc9a"
        },
        "date": 1682069966550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7723236.466666667,
            "unit": "ns",
            "range": "± 85754.36320666695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19468869.466666665,
            "unit": "ns",
            "range": "± 166729.57812272228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50044411.53333333,
            "unit": "ns",
            "range": "± 560564.7841485875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99814316.42857143,
            "unit": "ns",
            "range": "± 1149633.2997527593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201106929.73333332,
            "unit": "ns",
            "range": "± 1573756.1702028352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49766.4693877551,
            "unit": "ns",
            "range": "± 6579.134020356792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407535.7916666667,
            "unit": "ns",
            "range": "± 119280.22858329228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2639718.5862068967,
            "unit": "ns",
            "range": "± 76565.2166356598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2222758.369047619,
            "unit": "ns",
            "range": "± 117588.00761344975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5704901.365853659,
            "unit": "ns",
            "range": "± 187887.15100316948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5911140.616536458,
            "unit": "ns",
            "range": "± 14811.158976123099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1824671.244419643,
            "unit": "ns",
            "range": "± 1593.1088244920713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346010.6014229911,
            "unit": "ns",
            "range": "± 845.6551150823905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568836.640066964,
            "unit": "ns",
            "range": "± 2825.2695354262332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798492.5436848958,
            "unit": "ns",
            "range": "± 405.3544563701921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742492.4814453125,
            "unit": "ns",
            "range": "± 427.05052712211267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332643.56140350876,
            "unit": "ns",
            "range": "± 14321.077106859895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271997.1081081081,
            "unit": "ns",
            "range": "± 13607.361671513892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246876,
            "unit": "ns",
            "range": "± 15969.200885112909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5634387.2,
            "unit": "ns",
            "range": "± 60069.05412011841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3902750.6428571427,
            "unit": "ns",
            "range": "± 54670.60630245491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20099.0206185567,
            "unit": "ns",
            "range": "± 2432.590166106307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95044.26530612246,
            "unit": "ns",
            "range": "± 11629.04576095263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83305.4693877551,
            "unit": "ns",
            "range": "± 10306.510555918496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107533.07142857143,
            "unit": "ns",
            "range": "± 13872.0212578539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6235.082474226804,
            "unit": "ns",
            "range": "± 1017.6700172258596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20457.333333333332,
            "unit": "ns",
            "range": "± 2474.0485493541564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287856.3125,
            "unit": "ns",
            "range": "± 98983.2928533535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419949.6964285714,
            "unit": "ns",
            "range": "± 141218.32511693885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297466.466666667,
            "unit": "ns",
            "range": "± 76624.29404090236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328675.369863014,
            "unit": "ns",
            "range": "± 214625.25769061773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7353481.6875,
            "unit": "ns",
            "range": "± 198002.30061687823"
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
          "id": "ebb2bccc219cc26c51b720b940f3c6e0d0d7231c",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-25T15:57:56+09:00",
          "tree_id": "1cd821370e9d888e005212d77caf22a00d8c0d12",
          "url": "https://github.com/moreal/libplanet/commit/ebb2bccc219cc26c51b720b940f3c6e0d0d7231c"
        },
        "date": 1682406994346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10897461.8,
            "unit": "ns",
            "range": "± 200104.9433776473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26964640.230769232,
            "unit": "ns",
            "range": "± 248637.2324194273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71151740.84615384,
            "unit": "ns",
            "range": "± 644186.7056966542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139145440,
            "unit": "ns",
            "range": "± 911921.225986442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281366887.4705882,
            "unit": "ns",
            "range": "± 4817809.735709515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87075.58888888889,
            "unit": "ns",
            "range": "± 5206.652749277653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1875832.5,
            "unit": "ns",
            "range": "± 144154.16461582936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3659333.111111111,
            "unit": "ns",
            "range": "± 167823.81827698983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3003771.6195652173,
            "unit": "ns",
            "range": "± 218285.25957607478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7717266.608695652,
            "unit": "ns",
            "range": "± 371563.1321769605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7774265.987980769,
            "unit": "ns",
            "range": "± 63558.81249237411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2366690.4425223214,
            "unit": "ns",
            "range": "± 25699.710876817677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1696681.279296875,
            "unit": "ns",
            "range": "± 11960.838221058555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3364241.701622596,
            "unit": "ns",
            "range": "± 86321.96814334043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061607.7821614584,
            "unit": "ns",
            "range": "± 13674.532265272732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978723.671735491,
            "unit": "ns",
            "range": "± 8246.239457561682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 413073.95945945947,
            "unit": "ns",
            "range": "± 20714.34176751334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 407570.6,
            "unit": "ns",
            "range": "± 18964.69729672082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368036.1666666667,
            "unit": "ns",
            "range": "± 10685.642323595532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5922852.166666667,
            "unit": "ns",
            "range": "± 123931.02997006512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5362514.08,
            "unit": "ns",
            "range": "± 140398.1138764929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34443.39772727273,
            "unit": "ns",
            "range": "± 2478.4739582722787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 156312.52173913043,
            "unit": "ns",
            "range": "± 9719.035387714877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139829.29213483146,
            "unit": "ns",
            "range": "± 9762.729399239655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151269.7052631579,
            "unit": "ns",
            "range": "± 14606.782437922522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11381.736842105263,
            "unit": "ns",
            "range": "± 1282.926045616752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32979.395348837206,
            "unit": "ns",
            "range": "± 2763.538474616193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4581810.790697674,
            "unit": "ns",
            "range": "± 145832.94610542737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4877058.025,
            "unit": "ns",
            "range": "± 172965.6888025717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5921041.857142857,
            "unit": "ns",
            "range": "± 130386.38252949796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5870110.98,
            "unit": "ns",
            "range": "± 223931.2463791464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9383316.5,
            "unit": "ns",
            "range": "± 218375.0992111967"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "21a2e69d0ccfa796b993db8859c4028f33b5faec",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-25T16:35:15+09:00",
          "tree_id": "3a0de745647134d4105383210253f90f5ec0efa5",
          "url": "https://github.com/moreal/libplanet/commit/21a2e69d0ccfa796b993db8859c4028f33b5faec"
        },
        "date": 1682409127670,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8983590.01724138,
            "unit": "ns",
            "range": "± 392529.8610414822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24528614.611111112,
            "unit": "ns",
            "range": "± 522220.84719095606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63951234.60294118,
            "unit": "ns",
            "range": "± 3026915.6805294133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123707824.6,
            "unit": "ns",
            "range": "± 2051175.0045472125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240199652.625,
            "unit": "ns",
            "range": "± 6057430.898484243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53490.63043478261,
            "unit": "ns",
            "range": "± 4587.052923311584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662814.8686868686,
            "unit": "ns",
            "range": "± 151622.92260270088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3162808.33,
            "unit": "ns",
            "range": "± 247004.76409563536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2595239.6666666665,
            "unit": "ns",
            "range": "± 192094.90888372238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6580200.797979798,
            "unit": "ns",
            "range": "± 458118.2832463816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6489755.78125,
            "unit": "ns",
            "range": "± 95872.94070974899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064573.9497395833,
            "unit": "ns",
            "range": "± 31213.536828256325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486177.6410435268,
            "unit": "ns",
            "range": "± 14318.617505812574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2863182.5283203125,
            "unit": "ns",
            "range": "± 21805.468327732917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934280.0932291667,
            "unit": "ns",
            "range": "± 10886.681577709636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858126.3606119792,
            "unit": "ns",
            "range": "± 9270.417805462199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352974.4285714286,
            "unit": "ns",
            "range": "± 11025.289686165417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304485.7731958763,
            "unit": "ns",
            "range": "± 28932.938210449534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264072.64646464644,
            "unit": "ns",
            "range": "± 24918.02554676529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4812032.11,
            "unit": "ns",
            "range": "± 311871.11645422044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4200257.606060606,
            "unit": "ns",
            "range": "± 310245.4239343432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21396.03125,
            "unit": "ns",
            "range": "± 2068.8260258728737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97427.6,
            "unit": "ns",
            "range": "± 9520.183936181249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86658.44329896907,
            "unit": "ns",
            "range": "± 9410.854855087413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105655.9587628866,
            "unit": "ns",
            "range": "± 17796.42696870494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6306.336842105263,
            "unit": "ns",
            "range": "± 712.1736820575818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22458.094736842104,
            "unit": "ns",
            "range": "± 1760.7257756070078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3763078.02020202,
            "unit": "ns",
            "range": "± 280009.8840762364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3868534.04,
            "unit": "ns",
            "range": "± 308459.27814568946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4619443.46,
            "unit": "ns",
            "range": "± 331698.53333655937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4797326.178947369,
            "unit": "ns",
            "range": "± 363806.44410198013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8230439.7,
            "unit": "ns",
            "range": "± 515161.6300585828"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d7b01b3eed2d7f7c629940c82845a18883d1974e",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-25T17:31:27+09:00",
          "tree_id": "a4621399f72f951ae0ea8d4674ee67b6b05f01f6",
          "url": "https://github.com/moreal/libplanet/commit/d7b01b3eed2d7f7c629940c82845a18883d1974e"
        },
        "date": 1682412514774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8493301.88172043,
            "unit": "ns",
            "range": "± 480090.84878065676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24020589.45238095,
            "unit": "ns",
            "range": "± 861846.3341068832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64137040.56521739,
            "unit": "ns",
            "range": "± 1569704.3427369264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121995543.04347827,
            "unit": "ns",
            "range": "± 3079751.0988006433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235275719.43333334,
            "unit": "ns",
            "range": "± 10377848.669375675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54387.36046511628,
            "unit": "ns",
            "range": "± 3849.9217560048896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1581128.5416666667,
            "unit": "ns",
            "range": "± 117949.34359380206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3061248.1717171716,
            "unit": "ns",
            "range": "± 254677.83501362125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2545438.94,
            "unit": "ns",
            "range": "± 214593.5750425954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6708678.26,
            "unit": "ns",
            "range": "± 590680.1327408599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6880419.482291667,
            "unit": "ns",
            "range": "± 125520.88225955324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2139209.051171875,
            "unit": "ns",
            "range": "± 22935.04904768486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1563315.5029947916,
            "unit": "ns",
            "range": "± 16399.380618183965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2996647.998828125,
            "unit": "ns",
            "range": "± 50042.14426598649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961585.8443033855,
            "unit": "ns",
            "range": "± 16857.85335303623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863800.7717773437,
            "unit": "ns",
            "range": "± 12874.62803966447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338986.95,
            "unit": "ns",
            "range": "± 14209.947015520445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318536.44897959183,
            "unit": "ns",
            "range": "± 18755.141906705718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271004.1129032258,
            "unit": "ns",
            "range": "± 12197.427488929774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5035772.795918368,
            "unit": "ns",
            "range": "± 198547.0693600323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4451106.416666667,
            "unit": "ns",
            "range": "± 174671.64679524588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24843.32608695652,
            "unit": "ns",
            "range": "± 2229.4184335470686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105041.82291666667,
            "unit": "ns",
            "range": "± 8430.702951268178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92984.95918367348,
            "unit": "ns",
            "range": "± 7820.154156360645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113841.01030927835,
            "unit": "ns",
            "range": "± 15958.847068642184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7530.474226804124,
            "unit": "ns",
            "range": "± 1082.9722516141967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21943.308510638297,
            "unit": "ns",
            "range": "± 1687.9484845792708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3775481.7653061226,
            "unit": "ns",
            "range": "± 219519.49062059575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4129843.274509804,
            "unit": "ns",
            "range": "± 167371.46840367722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4898806.976744186,
            "unit": "ns",
            "range": "± 264704.91444532224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5157652.0813953485,
            "unit": "ns",
            "range": "± 279658.3291948027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8412252.142857144,
            "unit": "ns",
            "range": "± 381383.9243525821"
          }
        ]
      }
    ]
  }
}