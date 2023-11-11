window.BENCHMARK_DATA = {
  "lastUpdate": 1699693406930,
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
          "id": "19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:43:26+09:00",
          "tree_id": "eefe0b03257e037c93925843fe381f756e74b24b",
          "url": "https://github.com/moreal/libplanet/commit/19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec"
        },
        "date": 1699693115031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8721200.545454545,
            "unit": "ns",
            "range": "± 205327.17651029126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23111656.6,
            "unit": "ns",
            "range": "± 170755.8992646688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56278730.4117647,
            "unit": "ns",
            "range": "± 1154174.796884719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116780677.84615384,
            "unit": "ns",
            "range": "± 340123.5465750757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230743566.26666668,
            "unit": "ns",
            "range": "± 1510384.0039794266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438290.7241379311,
            "unit": "ns",
            "range": "± 78754.20637192564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2821541.9,
            "unit": "ns",
            "range": "± 64604.64420482152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2228689.850746269,
            "unit": "ns",
            "range": "± 103686.29164298603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9549917.506666666,
            "unit": "ns",
            "range": "± 480643.4086939672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623867.2264150945,
            "unit": "ns",
            "range": "± 146823.9102661156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768221.4102564105,
            "unit": "ns",
            "range": "± 131321.1208155349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4626019.8,
            "unit": "ns",
            "range": "± 79962.1416548392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603272.162790698,
            "unit": "ns",
            "range": "± 160057.48680469394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10855732.567567568,
            "unit": "ns",
            "range": "± 298156.6789024541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56669.31958762887,
            "unit": "ns",
            "range": "± 8537.41878383331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5550512.64375,
            "unit": "ns",
            "range": "± 64261.554176069374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1628532.426953125,
            "unit": "ns",
            "range": "± 3784.334740500186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204347.1545572917,
            "unit": "ns",
            "range": "± 1280.641438149949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643219.6358173075,
            "unit": "ns",
            "range": "± 6919.340010378155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824139.6990685096,
            "unit": "ns",
            "range": "± 1429.919111471862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756790.2211588542,
            "unit": "ns",
            "range": "± 758.2326673513143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283486.96,
            "unit": "ns",
            "range": "± 14346.764262218698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285272.8717948718,
            "unit": "ns",
            "range": "± 9771.64914212617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258817.88,
            "unit": "ns",
            "range": "± 18492.999926688048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4528395.066666666,
            "unit": "ns",
            "range": "± 55014.59312824795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162055.8666666667,
            "unit": "ns",
            "range": "± 34410.36617870233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25857.45918367347,
            "unit": "ns",
            "range": "± 2170.1524444926613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95576.39325842696,
            "unit": "ns",
            "range": "± 6585.904991684854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87356.58585858585,
            "unit": "ns",
            "range": "± 11865.64588574598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100181.375,
            "unit": "ns",
            "range": "± 10612.014067729284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6558.835051546392,
            "unit": "ns",
            "range": "± 781.2279020929752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21536.75,
            "unit": "ns",
            "range": "± 3790.723266635343"
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
          "id": "bdc54cc95e77010dc89a06755c029336b79e1cee",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:48:15+09:00",
          "tree_id": "205f42a35fb16ed872b1ad38c42f964c27bbf50d",
          "url": "https://github.com/moreal/libplanet/commit/bdc54cc95e77010dc89a06755c029336b79e1cee"
        },
        "date": 1699693401298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9202810.214285715,
            "unit": "ns",
            "range": "± 69277.69919809201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23795437.57142857,
            "unit": "ns",
            "range": "± 191604.5801105513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58988576.266666666,
            "unit": "ns",
            "range": "± 332617.63684371166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117371552.14285715,
            "unit": "ns",
            "range": "± 205344.1884300065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233037866.46666667,
            "unit": "ns",
            "range": "± 374635.9102364524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524323.6276595744,
            "unit": "ns",
            "range": "± 106266.60157571273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2950578.261904762,
            "unit": "ns",
            "range": "± 107150.44227537178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255193.511904762,
            "unit": "ns",
            "range": "± 119347.52788314944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9586896.181818182,
            "unit": "ns",
            "range": "± 407679.7984068383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3787503.214285714,
            "unit": "ns",
            "range": "± 37066.786578529325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3990248.3913043477,
            "unit": "ns",
            "range": "± 99822.70889328973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4766404.666666667,
            "unit": "ns",
            "range": "± 81433.44712416273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4626910,
            "unit": "ns",
            "range": "± 189358.0918728468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11092507.764705881,
            "unit": "ns",
            "range": "± 221928.76431346286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72408.07216494845,
            "unit": "ns",
            "range": "± 9575.452536355031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5552140.0671875,
            "unit": "ns",
            "range": "± 25912.19101328559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1650369.414453125,
            "unit": "ns",
            "range": "± 5316.900451210279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146247.9075520833,
            "unit": "ns",
            "range": "± 1061.1051972946645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711064.580208333,
            "unit": "ns",
            "range": "± 18194.937698131012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842420.2605919471,
            "unit": "ns",
            "range": "± 313.3897185673411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764418.1467633928,
            "unit": "ns",
            "range": "± 1229.5201563227204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304242.43548387097,
            "unit": "ns",
            "range": "± 13062.321001827577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302666.075,
            "unit": "ns",
            "range": "± 10582.459707259426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281927,
            "unit": "ns",
            "range": "± 5741.479643785215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4701060,
            "unit": "ns",
            "range": "± 32138.712755358272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4258671.285714285,
            "unit": "ns",
            "range": "± 44773.84978624598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30666.40206185567,
            "unit": "ns",
            "range": "± 3183.559893747727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120666.8125,
            "unit": "ns",
            "range": "± 9322.770678417894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114115.28,
            "unit": "ns",
            "range": "± 10939.790148191356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117531.60606060606,
            "unit": "ns",
            "range": "± 10867.535671334048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10105.395833333334,
            "unit": "ns",
            "range": "± 1392.1842851332326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30203.526315789473,
            "unit": "ns",
            "range": "± 3339.9341528803693"
          }
        ]
      }
    ]
  }
}