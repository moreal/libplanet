window.BENCHMARK_DATA = {
  "lastUpdate": 1687250904787,
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
          "id": "b6b582f14c4375b0a214cff73e439a4900b129ee",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:25:50+09:00",
          "tree_id": "69558e42b1bc6eb4aede6672b531714a5189f4af",
          "url": "https://github.com/moreal/libplanet/commit/b6b582f14c4375b0a214cff73e439a4900b129ee"
        },
        "date": 1687250571719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424087.878787879,
            "unit": "ns",
            "range": "± 133350.07424278618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2610136.8421052634,
            "unit": "ns",
            "range": "± 89636.75169607076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2241788.6075949366,
            "unit": "ns",
            "range": "± 116531.41976147932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5518126.056338028,
            "unit": "ns",
            "range": "± 270705.5714582008"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46837.5,
            "unit": "ns",
            "range": "± 3006.3179087416975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7310946.666666667,
            "unit": "ns",
            "range": "± 104886.32531505352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20119028.57142857,
            "unit": "ns",
            "range": "± 323680.04484146286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52118860,
            "unit": "ns",
            "range": "± 603258.9941310448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102177076.92307693,
            "unit": "ns",
            "range": "± 1439468.357388615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204662206.66666666,
            "unit": "ns",
            "range": "± 2938531.213151677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900469.739583333,
            "unit": "ns",
            "range": "± 21100.904043670584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560982.05078125,
            "unit": "ns",
            "range": "± 10412.75944323262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211713.099888393,
            "unit": "ns",
            "range": "± 4215.9981575628235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655658.9583333335,
            "unit": "ns",
            "range": "± 12390.850460093343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839425.6640625,
            "unit": "ns",
            "range": "± 2443.5963924077582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780131.0477120535,
            "unit": "ns",
            "range": "± 1160.5958111100174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234091.304347826,
            "unit": "ns",
            "range": "± 122806.31874095612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371453.1914893617,
            "unit": "ns",
            "range": "± 129137.07050542616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4144816,
            "unit": "ns",
            "range": "± 166848.70864202158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4190313.0434782607,
            "unit": "ns",
            "range": "± 101619.39822131235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6660075,
            "unit": "ns",
            "range": "± 220631.4566032168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259809.0909090909,
            "unit": "ns",
            "range": "± 8522.305021252423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262473.6842105263,
            "unit": "ns",
            "range": "± 5818.1556933889815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228192.59259259258,
            "unit": "ns",
            "range": "± 9642.61085469275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4109194.117647059,
            "unit": "ns",
            "range": "± 83760.3386946071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636847.0588235296,
            "unit": "ns",
            "range": "± 73960.4211525247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19078.494623655915,
            "unit": "ns",
            "range": "± 1662.7537048892584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84585.10638297872,
            "unit": "ns",
            "range": "± 6070.835577761671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83901.0101010101,
            "unit": "ns",
            "range": "± 8652.255751047214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88608.86075949368,
            "unit": "ns",
            "range": "± 4799.070152281311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.81443298969,
            "unit": "ns",
            "range": "± 807.7507909040914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19675.531914893618,
            "unit": "ns",
            "range": "± 2551.067083087261"
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
          "id": "bb312b1e05f7c31e85656237d69f6b5f68811bec",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:31:38+09:00",
          "tree_id": "3708c432454025c957577e290f20b4d46b44e6a8",
          "url": "https://github.com/moreal/libplanet/commit/bb312b1e05f7c31e85656237d69f6b5f68811bec"
        },
        "date": 1687250841408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371364.8936170214,
            "unit": "ns",
            "range": "± 89551.52983743562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656602.1505376343,
            "unit": "ns",
            "range": "± 149998.76737065613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244773.737373737,
            "unit": "ns",
            "range": "± 135588.73108453373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5124811.111111111,
            "unit": "ns",
            "range": "± 137727.55529370107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47328.260869565216,
            "unit": "ns",
            "range": "± 2999.4990822445757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7401235.714285715,
            "unit": "ns",
            "range": "± 80714.92672117343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20328403.846153848,
            "unit": "ns",
            "range": "± 187181.18502039948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50844481.25,
            "unit": "ns",
            "range": "± 974355.5800074564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101191066.66666667,
            "unit": "ns",
            "range": "± 2391026.9875794654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203726056.25,
            "unit": "ns",
            "range": "± 3712881.457658593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910807.142857143,
            "unit": "ns",
            "range": "± 39350.06970190432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543936.9921875,
            "unit": "ns",
            "range": "± 8749.21905887792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196264.6744791667,
            "unit": "ns",
            "range": "± 7753.838416690438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2724909.1145833335,
            "unit": "ns",
            "range": "± 7207.7483940567745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852382.4986049107,
            "unit": "ns",
            "range": "± 2558.914424937905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778574.7591145834,
            "unit": "ns",
            "range": "± 2207.6098778231853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250664.705882353,
            "unit": "ns",
            "range": "± 65190.01017388008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450546.875,
            "unit": "ns",
            "range": "± 222050.4266830658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4209500,
            "unit": "ns",
            "range": "± 182586.96753680345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4433150,
            "unit": "ns",
            "range": "± 120007.3064442328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6847818.918918919,
            "unit": "ns",
            "range": "± 202232.10240523942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271767.85714285716,
            "unit": "ns",
            "range": "± 7618.936135097067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258623.33333333334,
            "unit": "ns",
            "range": "± 5908.070653823861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223132.183908046,
            "unit": "ns",
            "range": "± 12224.09452824838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4205040,
            "unit": "ns",
            "range": "± 67334.62068547757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783733.3333333335,
            "unit": "ns",
            "range": "± 38931.57945406118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21336.666666666668,
            "unit": "ns",
            "range": "± 1365.2344738319957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94510.41666666667,
            "unit": "ns",
            "range": "± 5530.384571507838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77234.73684210527,
            "unit": "ns",
            "range": "± 5981.936789131103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97262.24489795919,
            "unit": "ns",
            "range": "± 15039.285430122172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5582.978723404255,
            "unit": "ns",
            "range": "± 939.6451283779289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18996.875,
            "unit": "ns",
            "range": "± 1392.5707484625993"
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
          "id": "bcc65cef468f37727c19a8c51582940ce1146465",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:33:56+09:00",
          "tree_id": "ee283f4e15d60dc1ac6aee6d58f5ffa36f59337b",
          "url": "https://github.com/moreal/libplanet/commit/bcc65cef468f37727c19a8c51582940ce1146465"
        },
        "date": 1687250888976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380318.1818181819,
            "unit": "ns",
            "range": "± 134180.23316483945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442254,
            "unit": "ns",
            "range": "± 97659.36679320106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139529,
            "unit": "ns",
            "range": "± 154065.92468974134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4900203.571428572,
            "unit": "ns",
            "range": "± 106913.80218607697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43115.18987341772,
            "unit": "ns",
            "range": "± 2236.932916683532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6763392.857142857,
            "unit": "ns",
            "range": "± 32165.233603181758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17769650,
            "unit": "ns",
            "range": "± 133237.91287982347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44759928.571428575,
            "unit": "ns",
            "range": "± 197772.08008043162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89123026.66666667,
            "unit": "ns",
            "range": "± 566501.088722528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180467506.66666666,
            "unit": "ns",
            "range": "± 1230107.787650373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4811409.933035715,
            "unit": "ns",
            "range": "± 9884.487640120422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509268.9192708333,
            "unit": "ns",
            "range": "± 1728.6121606963102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141113.5516826923,
            "unit": "ns",
            "range": "± 1102.6693137076231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555509.6223958335,
            "unit": "ns",
            "range": "± 9050.80002361536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797465.1157924107,
            "unit": "ns",
            "range": "± 1710.624992117188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725140.0130208334,
            "unit": "ns",
            "range": "± 915.1524369782609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2978686.3636363638,
            "unit": "ns",
            "range": "± 66574.97953760783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118344,
            "unit": "ns",
            "range": "± 78502.45792330327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3967958.3333333335,
            "unit": "ns",
            "range": "± 54653.32824155165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935653.125,
            "unit": "ns",
            "range": "± 120347.27434193206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6449110.869565218,
            "unit": "ns",
            "range": "± 240054.04042355024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255966.66666666666,
            "unit": "ns",
            "range": "± 11071.47772646538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241046.15384615384,
            "unit": "ns",
            "range": "± 9904.187301011341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210509.61538461538,
            "unit": "ns",
            "range": "± 8591.930998357877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3806785.714285714,
            "unit": "ns",
            "range": "± 31128.687168513305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3402166.6666666665,
            "unit": "ns",
            "range": "± 45724.074100860176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16177.551020408164,
            "unit": "ns",
            "range": "± 1751.4371484580731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77796.1038961039,
            "unit": "ns",
            "range": "± 3666.1840752032754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64826.470588235294,
            "unit": "ns",
            "range": "± 2076.3179565482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84829.89690721649,
            "unit": "ns",
            "range": "± 12486.652581760834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4227.659574468085,
            "unit": "ns",
            "range": "± 787.7290423455618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15163.684210526315,
            "unit": "ns",
            "range": "± 1667.372153784549"
          }
        ]
      }
    ]
  }
}