window.BENCHMARK_DATA = {
  "lastUpdate": 1700666313545,
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
          "id": "0fb72889e2b83ce1316cc06674214ec0053ce91f",
          "message": "@planetarium/tx: Remove useless template variable",
          "timestamp": "2023-11-23T00:00:10+09:00",
          "tree_id": "c7720e957e7c8e0fc67a1641937f836af77cde6e",
          "url": "https://github.com/moreal/libplanet/commit/0fb72889e2b83ce1316cc06674214ec0053ce91f"
        },
        "date": 1700665940815,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050075,
            "unit": "ns",
            "range": "± 171733.53206197897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815312.0481927712,
            "unit": "ns",
            "range": "± 96433.59069352562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610576.530612245,
            "unit": "ns",
            "range": "± 136047.98789588796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6113406.818181818,
            "unit": "ns",
            "range": "± 384357.9658729471"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36997.72727272727,
            "unit": "ns",
            "range": "± 4838.0668998127485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4977876.923076923,
            "unit": "ns",
            "range": "± 37673.77854348552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13503350,
            "unit": "ns",
            "range": "± 147070.10887014712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32501643.333333332,
            "unit": "ns",
            "range": "± 349580.80706278293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65295146.666666664,
            "unit": "ns",
            "range": "± 953882.5802751515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130389771.42857143,
            "unit": "ns",
            "range": "± 2116013.304243682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308302.2321428573,
            "unit": "ns",
            "range": "± 36403.89439005447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059632.2716346155,
            "unit": "ns",
            "range": "± 4775.682087162588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725276.2416294643,
            "unit": "ns",
            "range": "± 1738.7000289917037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925903.3984375,
            "unit": "ns",
            "range": "± 4459.733898916951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605226.708984375,
            "unit": "ns",
            "range": "± 1248.307339578283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555608.7239583334,
            "unit": "ns",
            "range": "± 2285.6364952911094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2036685.7142857143,
            "unit": "ns",
            "range": "± 53599.11610048478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262977.3333333335,
            "unit": "ns",
            "range": "± 113382.78692628424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2893365,
            "unit": "ns",
            "range": "± 66439.58296234653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2767696.296296296,
            "unit": "ns",
            "range": "± 141280.7138682103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6684196.875,
            "unit": "ns",
            "range": "± 307503.543904601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181450,
            "unit": "ns",
            "range": "± 7546.009816515176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170415.38461538462,
            "unit": "ns",
            "range": "± 6922.680811317578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143114.8148148148,
            "unit": "ns",
            "range": "± 3966.9503597467865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2753026.6666666665,
            "unit": "ns",
            "range": "± 42712.06699126918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2509981.25,
            "unit": "ns",
            "range": "± 47029.0154231052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12643.8202247191,
            "unit": "ns",
            "range": "± 1568.0731557740025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54483.333333333336,
            "unit": "ns",
            "range": "± 4957.873094178342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54679.38144329897,
            "unit": "ns",
            "range": "± 8814.865972514957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57694.505494505494,
            "unit": "ns",
            "range": "± 10385.816852669399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2531.25,
            "unit": "ns",
            "range": "± 467.9884164108518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15580.808080808081,
            "unit": "ns",
            "range": "± 5451.9174078460555"
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
          "id": "ea3137e08fe0dcf36afa0312c2d8086ff14cde70",
          "message": "Update CHANGELOG",
          "timestamp": "2023-11-23T00:05:57+09:00",
          "tree_id": "45d408daad4ab30f3349601a6d0d8c90bee226ea",
          "url": "https://github.com/moreal/libplanet/commit/ea3137e08fe0dcf36afa0312c2d8086ff14cde70"
        },
        "date": 1700666294840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989571.4285714285,
            "unit": "ns",
            "range": "± 124857.59661706486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692003.5714285714,
            "unit": "ns",
            "range": "± 70479.6500978976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510395,
            "unit": "ns",
            "range": "± 166628.3721915086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5447750,
            "unit": "ns",
            "range": "± 167609.96005511552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32910.71428571428,
            "unit": "ns",
            "range": "± 1550.3608485631062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4788393.333333333,
            "unit": "ns",
            "range": "± 42093.49231458582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12885469.23076923,
            "unit": "ns",
            "range": "± 123619.28372099681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31344635.714285713,
            "unit": "ns",
            "range": "± 224630.8685107906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63726780,
            "unit": "ns",
            "range": "± 652694.0633142869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125125440,
            "unit": "ns",
            "range": "± 664713.4772645602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3270922.716346154,
            "unit": "ns",
            "range": "± 7485.677168571471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035176.7438616072,
            "unit": "ns",
            "range": "± 3856.25843158122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732767.1809895834,
            "unit": "ns",
            "range": "± 4832.661106347763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1886151.2630208333,
            "unit": "ns",
            "range": "± 2633.2317808458397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619114.453125,
            "unit": "ns",
            "range": "± 1205.4109711914573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556373.9518229166,
            "unit": "ns",
            "range": "± 1631.399291469048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097844.117647059,
            "unit": "ns",
            "range": "± 66317.54277339361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192597.0588235296,
            "unit": "ns",
            "range": "± 55979.68508845415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2802882.7586206896,
            "unit": "ns",
            "range": "± 80696.06588465812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2681244.230769231,
            "unit": "ns",
            "range": "± 106185.32894760183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650540,
            "unit": "ns",
            "range": "± 371550.0800058869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165503.84615384616,
            "unit": "ns",
            "range": "± 6737.86378954454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155029.6875,
            "unit": "ns",
            "range": "± 6722.803640571584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139852.38095238095,
            "unit": "ns",
            "range": "± 2530.537304135042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2656013.3333333335,
            "unit": "ns",
            "range": "± 47775.87356855022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2399893.75,
            "unit": "ns",
            "range": "± 36490.792788501225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9204.545454545454,
            "unit": "ns",
            "range": "± 740.5976292730409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51460,
            "unit": "ns",
            "range": "± 5284.32849656174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43975.38461538462,
            "unit": "ns",
            "range": "± 1951.2040168533417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45484.269662921346,
            "unit": "ns",
            "range": "± 4948.918588861898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1968.75,
            "unit": "ns",
            "range": "± 273.11555294995173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9135.106382978724,
            "unit": "ns",
            "range": "± 1079.197974484229"
          }
        ]
      }
    ]
  }
}