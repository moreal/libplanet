window.BENCHMARK_DATA = {
  "lastUpdate": 1687250192071,
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
          "id": "04c30457cf95a606952fee8daaae44888a6af52f",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:11:16+09:00",
          "tree_id": "49b35c1dbf7c6846c137a2dd9dcf6be71f01db05",
          "url": "https://github.com/moreal/libplanet/commit/04c30457cf95a606952fee8daaae44888a6af52f"
        },
        "date": 1687249707500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405723.9436619717,
            "unit": "ns",
            "range": "± 68678.97882756252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773913.1578947366,
            "unit": "ns",
            "range": "± 139967.91188659897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459200,
            "unit": "ns",
            "range": "± 50064.18380439254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5395258.333333333,
            "unit": "ns",
            "range": "± 131177.94060530633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50640.217391304344,
            "unit": "ns",
            "range": "± 4127.076494539705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7888255,
            "unit": "ns",
            "range": "± 174250.57720964582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21018314.285714287,
            "unit": "ns",
            "range": "± 165249.0188828915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53679060,
            "unit": "ns",
            "range": "± 648010.9377383775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107176226.66666667,
            "unit": "ns",
            "range": "± 1263170.311142714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211975714.2857143,
            "unit": "ns",
            "range": "± 1309339.5885872229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4960003.515625,
            "unit": "ns",
            "range": "± 18612.57692299364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568124.037388393,
            "unit": "ns",
            "range": "± 5568.7683903287025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214456.6145833333,
            "unit": "ns",
            "range": "± 4712.852534726582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678991.8489583335,
            "unit": "ns",
            "range": "± 9547.108866234907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845970.80078125,
            "unit": "ns",
            "range": "± 2361.121653913509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761360.21484375,
            "unit": "ns",
            "range": "± 2606.39887840294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508766.6666666665,
            "unit": "ns",
            "range": "± 49291.86642071991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3642421.212121212,
            "unit": "ns",
            "range": "± 113169.23377616749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433805.263157895,
            "unit": "ns",
            "range": "± 98303.608352922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4471541.538461538,
            "unit": "ns",
            "range": "± 205936.38800330102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6996570.833333333,
            "unit": "ns",
            "range": "± 178373.26880831193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268052.45901639346,
            "unit": "ns",
            "range": "± 12003.23021186904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269441.17647058825,
            "unit": "ns",
            "range": "± 8691.79751423838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252955,
            "unit": "ns",
            "range": "± 17151.313375512982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276850,
            "unit": "ns",
            "range": "± 46605.33148768414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926226.6666666665,
            "unit": "ns",
            "range": "± 46913.95568586429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21441.935483870966,
            "unit": "ns",
            "range": "± 2385.97908900806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96538.70967741935,
            "unit": "ns",
            "range": "± 6307.122134644166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85356,
            "unit": "ns",
            "range": "± 9295.223276370276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104583.67346938775,
            "unit": "ns",
            "range": "± 17885.268336815843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6307.216494845361,
            "unit": "ns",
            "range": "± 1137.5455506154847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22341.41414141414,
            "unit": "ns",
            "range": "± 2722.806554057483"
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
          "id": "1fb37864f72f21ed37dffd50ef4508d1ab333e57",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:07:10+09:00",
          "tree_id": "582617ebad48b62bccae5014cb8031065aa34f37",
          "url": "https://github.com/moreal/libplanet/commit/1fb37864f72f21ed37dffd50ef4508d1ab333e57"
        },
        "date": 1687250167685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2027098.888888889,
            "unit": "ns",
            "range": "± 244904.87513301996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4118841.052631579,
            "unit": "ns",
            "range": "± 490846.782545277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3267468.085106383,
            "unit": "ns",
            "range": "± 345290.4441168975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8663073.19587629,
            "unit": "ns",
            "range": "± 1027275.9898265194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67154.34782608696,
            "unit": "ns",
            "range": "± 13807.38306278647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11485645.744680852,
            "unit": "ns",
            "range": "± 1039422.6723310836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30381959,
            "unit": "ns",
            "range": "± 2798563.676302939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76822017.17171717,
            "unit": "ns",
            "range": "± 4736219.695117237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151702781.8181818,
            "unit": "ns",
            "range": "± 7775375.10431638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309664613.5135135,
            "unit": "ns",
            "range": "± 10477360.377185822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7127044.010416667,
            "unit": "ns",
            "range": "± 158368.1218792065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242162.364783654,
            "unit": "ns",
            "range": "± 60059.606152843255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1687906.387867647,
            "unit": "ns",
            "range": "± 33075.27882023544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3908467.0372596155,
            "unit": "ns",
            "range": "± 159252.12473085892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1260097.783203125,
            "unit": "ns",
            "range": "± 24446.163152864123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1127038.9038085938,
            "unit": "ns",
            "range": "± 21479.040336768943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4627127.173913044,
            "unit": "ns",
            "range": "± 470742.0856811997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4964417.894736842,
            "unit": "ns",
            "range": "± 546112.0261465624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6366684.5360824745,
            "unit": "ns",
            "range": "± 650775.5670064319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5995348.9130434785,
            "unit": "ns",
            "range": "± 599401.8845729256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10463268.75,
            "unit": "ns",
            "range": "± 1038801.0920806229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351785.55555555556,
            "unit": "ns",
            "range": "± 45471.63472203998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369522.44897959183,
            "unit": "ns",
            "range": "± 79709.8818468812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339658.76288659795,
            "unit": "ns",
            "range": "± 75898.8715229259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5848933.333333333,
            "unit": "ns",
            "range": "± 447459.358146617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5218836.956521739,
            "unit": "ns",
            "range": "± 457322.404301768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25541.666666666668,
            "unit": "ns",
            "range": "± 6373.673924687832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112750,
            "unit": "ns",
            "range": "± 23469.627321144377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118840.86021505376,
            "unit": "ns",
            "range": "± 28167.670477367352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146936.95652173914,
            "unit": "ns",
            "range": "± 31483.858475123492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8520,
            "unit": "ns",
            "range": "± 1929.7557997862089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20976.829268292684,
            "unit": "ns",
            "range": "± 2646.465090769885"
          }
        ]
      }
    ]
  }
}