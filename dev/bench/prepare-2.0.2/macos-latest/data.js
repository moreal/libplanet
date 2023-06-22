window.BENCHMARK_DATA = {
  "lastUpdate": 1687421221976,
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
        "date": 1687420630293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7846149.5227272725,
            "unit": "ns",
            "range": "± 252699.3446952684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19039637.391304348,
            "unit": "ns",
            "range": "± 465330.81267970864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45854814.23076923,
            "unit": "ns",
            "range": "± 311759.5202510941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92574596.3076923,
            "unit": "ns",
            "range": "± 700174.4012643546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193159425.2,
            "unit": "ns",
            "range": "± 2606453.1901206337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54169.09375,
            "unit": "ns",
            "range": "± 6055.631837307578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306069.6052631579,
            "unit": "ns",
            "range": "± 15193.991799022791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288488.86075949366,
            "unit": "ns",
            "range": "± 14050.721817149737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273971.9479166667,
            "unit": "ns",
            "range": "± 19209.78171024214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175251.8055555555,
            "unit": "ns",
            "range": "± 138913.9664550523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3452086.706896552,
            "unit": "ns",
            "range": "± 98307.54576923356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16791.8,
            "unit": "ns",
            "range": "± 2303.619268310919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81510.77173913043,
            "unit": "ns",
            "range": "± 6531.670045607559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80209.5054945055,
            "unit": "ns",
            "range": "± 9197.103313753649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101413.45652173914,
            "unit": "ns",
            "range": "± 15604.554762240388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5465.905882352941,
            "unit": "ns",
            "range": "± 696.7082573059682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16221.916666666666,
            "unit": "ns",
            "range": "± 1400.474207195577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478913.857142857,
            "unit": "ns",
            "range": "± 152469.5200625459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2853139.097826087,
            "unit": "ns",
            "range": "± 178326.7339220287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2411645.765957447,
            "unit": "ns",
            "range": "± 179307.2744550494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6538373.681818182,
            "unit": "ns",
            "range": "± 344582.83065447654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3076443.046875,
            "unit": "ns",
            "range": "± 141572.65540641372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3287578.4545454546,
            "unit": "ns",
            "range": "± 123177.41113493523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258258.47368421,
            "unit": "ns",
            "range": "± 144181.14149873302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153769.112244898,
            "unit": "ns",
            "range": "± 260801.57832059427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7396331.833333333,
            "unit": "ns",
            "range": "± 288987.40976536716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6213706.8859375,
            "unit": "ns",
            "range": "± 53409.432115793235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825746.823046875,
            "unit": "ns",
            "range": "± 11777.068237490157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232707.7248697917,
            "unit": "ns",
            "range": "± 13837.443219406548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687747.7259375,
            "unit": "ns",
            "range": "± 66598.82525103963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799930.6048177084,
            "unit": "ns",
            "range": "± 10452.811724097463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732561.2609719669,
            "unit": "ns",
            "range": "± 14811.55429330863"
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
        "date": 1687421211296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14335644.614583334,
            "unit": "ns",
            "range": "± 6411973.10908834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24661589.95238095,
            "unit": "ns",
            "range": "± 3385408.7571407803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58114446.825581394,
            "unit": "ns",
            "range": "± 10814800.210278047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 170245276.07216495,
            "unit": "ns",
            "range": "± 52438075.772826396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243277663.69662923,
            "unit": "ns",
            "range": "± 32519401.56988657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68622.61538461539,
            "unit": "ns",
            "range": "± 9797.962198300025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343437.7,
            "unit": "ns",
            "range": "± 36350.368956042934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327603.60869565216,
            "unit": "ns",
            "range": "± 33346.3470424568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326826.2087912088,
            "unit": "ns",
            "range": "± 27793.102423089906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303743.436619719,
            "unit": "ns",
            "range": "± 208751.20254994818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3911887.4470588234,
            "unit": "ns",
            "range": "± 211204.2717711765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16713.89285714286,
            "unit": "ns",
            "range": "± 2046.5728803654074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96569.58333333333,
            "unit": "ns",
            "range": "± 13550.646940987663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108445.37113402062,
            "unit": "ns",
            "range": "± 15770.202514895765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120251.4255319149,
            "unit": "ns",
            "range": "± 19960.776701352992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5312.586956521739,
            "unit": "ns",
            "range": "± 898.5689862913706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16404.670731707316,
            "unit": "ns",
            "range": "± 1592.85833656586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1753953.5107526882,
            "unit": "ns",
            "range": "± 270650.98472417006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3343216.032608696,
            "unit": "ns",
            "range": "± 418057.7000100873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790470.711764706,
            "unit": "ns",
            "range": "± 452696.183938761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7022065.152941177,
            "unit": "ns",
            "range": "± 632059.4959677359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3912021.875,
            "unit": "ns",
            "range": "± 894610.2252967113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3493492.011904762,
            "unit": "ns",
            "range": "± 208204.17569667034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4630605.9382716045,
            "unit": "ns",
            "range": "± 349990.11644942727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4644882.185393258,
            "unit": "ns",
            "range": "± 392434.4853545215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8604716.882978724,
            "unit": "ns",
            "range": "± 704344.4741675386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6755372.841796875,
            "unit": "ns",
            "range": "± 231487.1088304021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2240144.580017719,
            "unit": "ns",
            "range": "± 134708.53293253772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1528245.8584635416,
            "unit": "ns",
            "range": "± 67365.53329480923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251669.801254735,
            "unit": "ns",
            "range": "± 334285.5421517605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045448.4837147887,
            "unit": "ns",
            "range": "± 50974.92008923772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793785.7014160156,
            "unit": "ns",
            "range": "± 10478.14542839574"
          }
        ]
      }
    ]
  }
}