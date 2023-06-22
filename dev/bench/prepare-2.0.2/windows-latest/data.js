window.BENCHMARK_DATA = {
  "lastUpdate": 1687424722287,
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
        "date": 1687420858209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380281.6326530613,
            "unit": "ns",
            "range": "± 191558.63323912342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564394.3298969073,
            "unit": "ns",
            "range": "± 264952.75403089647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2205520.618556701,
            "unit": "ns",
            "range": "± 291726.2447263074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5736711.111111111,
            "unit": "ns",
            "range": "± 510143.5628048265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48142.55319148936,
            "unit": "ns",
            "range": "± 5419.2506199738045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7357929.787234043,
            "unit": "ns",
            "range": "± 614715.6746078276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19868027.272727273,
            "unit": "ns",
            "range": "± 1364423.7719090977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51255012,
            "unit": "ns",
            "range": "± 3333867.656668119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100547723.40425532,
            "unit": "ns",
            "range": "± 5736100.652909305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210340184.6153846,
            "unit": "ns",
            "range": "± 10835623.038692484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4980191.652960527,
            "unit": "ns",
            "range": "± 99106.28428436085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1631497.0886230469,
            "unit": "ns",
            "range": "± 49843.16748750449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232558.7222450657,
            "unit": "ns",
            "range": "± 42330.60636456938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726289.658717105,
            "unit": "ns",
            "range": "± 59857.183743065034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886730.7965959822,
            "unit": "ns",
            "range": "± 38138.9674854905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843935.58984375,
            "unit": "ns",
            "range": "± 21560.238192239405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260442,
            "unit": "ns",
            "range": "± 370814.38363023446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3299907.1428571427,
            "unit": "ns",
            "range": "± 335175.10156832985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4117181.6326530613,
            "unit": "ns",
            "range": "± 402592.0635179191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4145420,
            "unit": "ns",
            "range": "± 363128.36197786493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6951618.556701031,
            "unit": "ns",
            "range": "± 586418.6044559482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267126.0416666667,
            "unit": "ns",
            "range": "± 34822.94236122191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250175.51020408163,
            "unit": "ns",
            "range": "± 29959.17862287995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231948.48484848486,
            "unit": "ns",
            "range": "± 29988.043071743235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4008970.8333333335,
            "unit": "ns",
            "range": "± 369266.7522242499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3780902.02020202,
            "unit": "ns",
            "range": "± 308729.87531861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18689.130434782608,
            "unit": "ns",
            "range": "± 2481.7778332415332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80454.94505494506,
            "unit": "ns",
            "range": "± 8743.076800611552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77175.25773195876,
            "unit": "ns",
            "range": "± 10428.506913422409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95451.02040816327,
            "unit": "ns",
            "range": "± 19297.85119653748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4673.684210526316,
            "unit": "ns",
            "range": "± 752.3312034215099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16779.166666666668,
            "unit": "ns",
            "range": "± 1920.631292414947"
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
        "date": 1687421226551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751545.3608247424,
            "unit": "ns",
            "range": "± 172121.4396996944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3195818.3673469387,
            "unit": "ns",
            "range": "± 338221.9552296522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2674563.2653061226,
            "unit": "ns",
            "range": "± 268276.65839721175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6738537.755102041,
            "unit": "ns",
            "range": "± 571160.3690002993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65296.84210526316,
            "unit": "ns",
            "range": "± 12539.329214740921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8959320.408163264,
            "unit": "ns",
            "range": "± 596356.5946921535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25202569.09090909,
            "unit": "ns",
            "range": "± 1031020.2257370063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63231982.85714286,
            "unit": "ns",
            "range": "± 2023057.2296411588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125220294.73684211,
            "unit": "ns",
            "range": "± 4296984.941444242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249345710.52631578,
            "unit": "ns",
            "range": "± 5467947.798142954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6405439.611037234,
            "unit": "ns",
            "range": "± 249433.04654230154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2079501.318359375,
            "unit": "ns",
            "range": "± 38594.22302338404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1548087.40234375,
            "unit": "ns",
            "range": "± 28189.938666019327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360549.3785511362,
            "unit": "ns",
            "range": "± 80372.48722733682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1109090.2994791667,
            "unit": "ns",
            "range": "± 35959.672993813314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1049806.6539417615,
            "unit": "ns",
            "range": "± 39371.3119335215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3693234.0206185565,
            "unit": "ns",
            "range": "± 264166.2189349247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3977701.0204081633,
            "unit": "ns",
            "range": "± 411468.14497460786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5339009.47368421,
            "unit": "ns",
            "range": "± 334304.02301335166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5243115.306122449,
            "unit": "ns",
            "range": "± 358222.2858114319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9004998.113207547,
            "unit": "ns",
            "range": "± 375772.461578795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339298.93617021275,
            "unit": "ns",
            "range": "± 32100.83740803279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317347.87234042556,
            "unit": "ns",
            "range": "± 33692.686832041494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295274.7368421053,
            "unit": "ns",
            "range": "± 32221.47746926499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4879559.183673469,
            "unit": "ns",
            "range": "± 389138.3444231083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4348697.959183673,
            "unit": "ns",
            "range": "± 335999.4501651097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31622.222222222223,
            "unit": "ns",
            "range": "± 10309.392938793238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115240.8163265306,
            "unit": "ns",
            "range": "± 16235.171421309915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124777.55102040817,
            "unit": "ns",
            "range": "± 28760.1726713349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143723.91304347827,
            "unit": "ns",
            "range": "± 25076.97323676903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7458.163265306122,
            "unit": "ns",
            "range": "± 2013.7119374141062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26820.618556701033,
            "unit": "ns",
            "range": "± 7240.423821393473"
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
        "date": 1687424704777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326089.898989899,
            "unit": "ns",
            "range": "± 107333.86830205821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2386695.5555555555,
            "unit": "ns",
            "range": "± 84036.40703332519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047016.1290322582,
            "unit": "ns",
            "range": "± 115934.80954016186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4966076.595744681,
            "unit": "ns",
            "range": "± 192334.31855107643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41865.78947368421,
            "unit": "ns",
            "range": "± 1997.0346437708715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6781757.142857143,
            "unit": "ns",
            "range": "± 23745.824387124907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17224171.42857143,
            "unit": "ns",
            "range": "± 131900.4311451018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44132192.85714286,
            "unit": "ns",
            "range": "± 372877.53086231684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88622443.33333333,
            "unit": "ns",
            "range": "± 871142.1144243972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176950506.66666666,
            "unit": "ns",
            "range": "± 1955030.8720495098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886582.331730769,
            "unit": "ns",
            "range": "± 6188.411214818744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502179.8828125,
            "unit": "ns",
            "range": "± 2115.6063835366085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147052.4674479167,
            "unit": "ns",
            "range": "± 1643.55860148202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594413.4114583335,
            "unit": "ns",
            "range": "± 28034.43798953492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822506.4127604166,
            "unit": "ns",
            "range": "± 3138.2178251659802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753787.8380408654,
            "unit": "ns",
            "range": "± 803.9237869029345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2926306.6666666665,
            "unit": "ns",
            "range": "± 40047.53366164953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3088042.1052631577,
            "unit": "ns",
            "range": "± 67227.76638487563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3862287.5,
            "unit": "ns",
            "range": "± 75730.10739901711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3751264.6153846155,
            "unit": "ns",
            "range": "± 134192.66749571447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6356856.666666667,
            "unit": "ns",
            "range": "± 177009.5120828711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249209.67741935485,
            "unit": "ns",
            "range": "± 10977.663009044205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233583.67346938775,
            "unit": "ns",
            "range": "± 9206.59516639149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210601.61290322582,
            "unit": "ns",
            "range": "± 9514.449613837733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3798406.6666666665,
            "unit": "ns",
            "range": "± 36073.7828557501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3424013.3333333335,
            "unit": "ns",
            "range": "± 50566.94101692848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16609.278350515466,
            "unit": "ns",
            "range": "± 1731.2737648324862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80285.5421686747,
            "unit": "ns",
            "range": "± 4275.3728272777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65839.58333333333,
            "unit": "ns",
            "range": "± 2599.5694883620044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77183.33333333333,
            "unit": "ns",
            "range": "± 5295.941842580978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4143.877551020408,
            "unit": "ns",
            "range": "± 635.8801557530622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15946.236559139785,
            "unit": "ns",
            "range": "± 1387.1741011530498"
          }
        ]
      }
    ]
  }
}