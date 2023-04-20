window.BENCHMARK_DATA = {
  "lastUpdate": 1681965123014,
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
      }
    ]
  }
}