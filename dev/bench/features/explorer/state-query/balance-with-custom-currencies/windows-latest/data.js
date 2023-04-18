window.BENCHMARK_DATA = {
  "lastUpdate": 1681796647414,
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
          "id": "9a1dcd6abface24cd498377a42e7c1bb0d80f66f",
          "message": "WIP",
          "timestamp": "2023-04-14T13:35:00+09:00",
          "tree_id": "d85f9b539fcbd0a307852f4edbfbe8c7da27daac",
          "url": "https://github.com/moreal/libplanet/commit/9a1dcd6abface24cd498377a42e7c1bb0d80f66f"
        },
        "date": 1681447799191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285041.6666666667,
            "unit": "ns",
            "range": "± 129969.65772758098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2322783.3333333335,
            "unit": "ns",
            "range": "± 113661.67240828321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2043547.4226804124,
            "unit": "ns",
            "range": "± 162648.514885104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5164712.820512821,
            "unit": "ns",
            "range": "± 265375.1142478723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52051.02040816326,
            "unit": "ns",
            "range": "± 7260.871619853334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7842033.333333333,
            "unit": "ns",
            "range": "± 180379.93328897018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18716480,
            "unit": "ns",
            "range": "± 137471.80594060526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48052278.571428575,
            "unit": "ns",
            "range": "± 465130.68829932326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96195000,
            "unit": "ns",
            "range": "± 2285478.217791629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193552293.33333334,
            "unit": "ns",
            "range": "± 2229922.8232854884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5191467.578125,
            "unit": "ns",
            "range": "± 17025.88023201826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549223.9192708333,
            "unit": "ns",
            "range": "± 3629.225442502272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049148.4895833333,
            "unit": "ns",
            "range": "± 4628.572225593037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2903633.6458333335,
            "unit": "ns",
            "range": "± 46484.48197107165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869329.2708333334,
            "unit": "ns",
            "range": "± 16066.963847788104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766842.5390625,
            "unit": "ns",
            "range": "± 14079.368552440454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3023805.6603773586,
            "unit": "ns",
            "range": "± 124849.7888465827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3172547.727272727,
            "unit": "ns",
            "range": "± 109554.5218168951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3977043.75,
            "unit": "ns",
            "range": "± 77340.67466949932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4001465.6716417912,
            "unit": "ns",
            "range": "± 184340.20472060892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6632454.166666667,
            "unit": "ns",
            "range": "± 123700.6167752599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281376,
            "unit": "ns",
            "range": "± 25251.459083755653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224622.44897959183,
            "unit": "ns",
            "range": "± 16077.707757145427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223650,
            "unit": "ns",
            "range": "± 5434.348429861933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5126593.75,
            "unit": "ns",
            "range": "± 99457.7194506959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745846.153846154,
            "unit": "ns",
            "range": "± 23525.043938485906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15351.020408163266,
            "unit": "ns",
            "range": "± 3394.454085071955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72094.89795918367,
            "unit": "ns",
            "range": "± 12857.533171951409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81783.83838383839,
            "unit": "ns",
            "range": "± 14646.220568911478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166925,
            "unit": "ns",
            "range": "± 18454.923747507488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6461.616161616162,
            "unit": "ns",
            "range": "± 1300.9185978006014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16245.454545454546,
            "unit": "ns",
            "range": "± 3381.3797669020914"
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
          "id": "5c7f1a1765edf3eb32ab51ef591209e78356b6da",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T14:33:16+09:00",
          "tree_id": "d0f2a4cc0bc97b956eab5bc01c8993aef7ff3829",
          "url": "https://github.com/moreal/libplanet/commit/5c7f1a1765edf3eb32ab51ef591209e78356b6da"
        },
        "date": 1681451258945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1295503.092783505,
            "unit": "ns",
            "range": "± 109345.43357864431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2466418.1818181816,
            "unit": "ns",
            "range": "± 115672.61215515625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2122530.9278350514,
            "unit": "ns",
            "range": "± 163309.45596781943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5463051.515151516,
            "unit": "ns",
            "range": "± 379197.53275795677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46415.27777777778,
            "unit": "ns",
            "range": "± 2302.0908880763172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6799364.285714285,
            "unit": "ns",
            "range": "± 63370.63876230739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18473014.285714287,
            "unit": "ns",
            "range": "± 320276.90388917393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46879805.2631579,
            "unit": "ns",
            "range": "± 1014734.1827480864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92316643.75,
            "unit": "ns",
            "range": "± 1765551.022945811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184542778.57142857,
            "unit": "ns",
            "range": "± 1883294.0769499396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4724512.5,
            "unit": "ns",
            "range": "± 26278.16477054947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499100.9895833333,
            "unit": "ns",
            "range": "± 8302.30645863834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162591.2760416667,
            "unit": "ns",
            "range": "± 5271.691269900219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646854.1165865385,
            "unit": "ns",
            "range": "± 6318.711609143155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812769.51171875,
            "unit": "ns",
            "range": "± 2639.67221228467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762013.359375,
            "unit": "ns",
            "range": "± 2339.8969022980773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901142.4242424243,
            "unit": "ns",
            "range": "± 89324.25143229241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3112637.313432836,
            "unit": "ns",
            "range": "± 143398.5987799983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3766290,
            "unit": "ns",
            "range": "± 79791.07615099155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4018832.4324324327,
            "unit": "ns",
            "range": "± 135370.28857925223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6693545.945945946,
            "unit": "ns",
            "range": "± 227170.6120892335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300125.43859649124,
            "unit": "ns",
            "range": "± 12985.834049644724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254627.58620689655,
            "unit": "ns",
            "range": "± 7343.116142333782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210985.7142857143,
            "unit": "ns",
            "range": "± 5454.981704536266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5141420,
            "unit": "ns",
            "range": "± 39503.204210002295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3570400,
            "unit": "ns",
            "range": "± 72788.5121430573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18508.163265306124,
            "unit": "ns",
            "range": "± 1801.240893543891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86075.25773195876,
            "unit": "ns",
            "range": "± 5809.654875862447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76813.1313131313,
            "unit": "ns",
            "range": "± 5434.1446290955355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 170792.85714285713,
            "unit": "ns",
            "range": "± 15344.464061008703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6350.515463917526,
            "unit": "ns",
            "range": "± 690.7308495566199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18717.708333333332,
            "unit": "ns",
            "range": "± 1762.5337498323954"
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
          "id": "f534d63198f2d4187f0e80a8087b3eae23dde0d9",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:19:02+09:00",
          "tree_id": "038d31e223894411cd7585265e09bfe79bf42ecd",
          "url": "https://github.com/moreal/libplanet/commit/f534d63198f2d4187f0e80a8087b3eae23dde0d9"
        },
        "date": 1681457750702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490927,
            "unit": "ns",
            "range": "± 136303.06906806515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580486.5853658537,
            "unit": "ns",
            "range": "± 92021.05942689847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312163.9175257734,
            "unit": "ns",
            "range": "± 194702.2760233167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5608604.761904762,
            "unit": "ns",
            "range": "± 200307.53301273828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61244.845360824744,
            "unit": "ns",
            "range": "± 5051.740028899708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8087393.333333333,
            "unit": "ns",
            "range": "± 140921.80438945902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20444366.666666668,
            "unit": "ns",
            "range": "± 205171.05639186144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51534153.333333336,
            "unit": "ns",
            "range": "± 490829.9456265984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103540100,
            "unit": "ns",
            "range": "± 1560055.0503107253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209457500,
            "unit": "ns",
            "range": "± 2051748.6886893485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4927672.1875,
            "unit": "ns",
            "range": "± 34331.62344886861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549806.8294270833,
            "unit": "ns",
            "range": "± 4384.426785340511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192427.5065104167,
            "unit": "ns",
            "range": "± 5382.699843673957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694640.1692708335,
            "unit": "ns",
            "range": "± 7911.600640651003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841619.6223958334,
            "unit": "ns",
            "range": "± 2924.8526487081926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765845.9244791666,
            "unit": "ns",
            "range": "± 2409.042025370118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391736.8421052634,
            "unit": "ns",
            "range": "± 49695.36319222365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624920,
            "unit": "ns",
            "range": "± 60013.11999411938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4227478.787878788,
            "unit": "ns",
            "range": "± 133278.37352130632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4455260.52631579,
            "unit": "ns",
            "range": "± 137267.89853160523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7401296.96969697,
            "unit": "ns",
            "range": "± 230494.71046648838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350578.94736842107,
            "unit": "ns",
            "range": "± 11959.575105322838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294452.9411764706,
            "unit": "ns",
            "range": "± 6005.530539329854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259605.08474576272,
            "unit": "ns",
            "range": "± 11444.911890545489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5507106.666666667,
            "unit": "ns",
            "range": "± 43269.31388189006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3903700,
            "unit": "ns",
            "range": "± 48464.93577835423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26488.775510204083,
            "unit": "ns",
            "range": "± 2361.4988536272313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119694.79166666667,
            "unit": "ns",
            "range": "± 9430.564751651287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122580,
            "unit": "ns",
            "range": "± 7425.84892946472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225015.306122449,
            "unit": "ns",
            "range": "± 22528.41208199661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11875.510204081633,
            "unit": "ns",
            "range": "± 1384.230868689522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28938.144329896906,
            "unit": "ns",
            "range": "± 2636.93490387708"
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
          "id": "a77e01291c0fde9c2b15dcb06ac6d481a01613c3",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:21:37+09:00",
          "tree_id": "f6c324f450bf364fd8e451740a8773529d572796",
          "url": "https://github.com/moreal/libplanet/commit/a77e01291c0fde9c2b15dcb06ac6d481a01613c3"
        },
        "date": 1681458106512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404422.6804123712,
            "unit": "ns",
            "range": "± 229454.07787886565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2554863.9175257734,
            "unit": "ns",
            "range": "± 266501.0538540635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2216480.85106383,
            "unit": "ns",
            "range": "± 255984.99001552103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720222.916666667,
            "unit": "ns",
            "range": "± 537630.4521213858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54992.55319148936,
            "unit": "ns",
            "range": "± 13830.931824412586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555544.565217392,
            "unit": "ns",
            "range": "± 491226.15600532206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17735517.91044776,
            "unit": "ns",
            "range": "± 839962.1232307053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46451067.346938774,
            "unit": "ns",
            "range": "± 3481937.578973988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89000585.36585365,
            "unit": "ns",
            "range": "± 3148530.4571784735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184347143.1818182,
            "unit": "ns",
            "range": "± 6866705.411787958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4742119.215029762,
            "unit": "ns",
            "range": "± 109860.71227660458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521067.4262152778,
            "unit": "ns",
            "range": "± 30343.245597427704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160709.0284778227,
            "unit": "ns",
            "range": "± 34372.58586296402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629986.25,
            "unit": "ns",
            "range": "± 68311.14289392561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843691.4501953125,
            "unit": "ns",
            "range": "± 19399.35712718037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812440.8072916666,
            "unit": "ns",
            "range": "± 14950.775316698866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2929346.3157894737,
            "unit": "ns",
            "range": "± 242910.7382727184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3161357.1428571427,
            "unit": "ns",
            "range": "± 277484.4938548764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3919100,
            "unit": "ns",
            "range": "± 290845.66283827706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3993554.5454545454,
            "unit": "ns",
            "range": "± 356999.1008599914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7032907.291666667,
            "unit": "ns",
            "range": "± 420515.35480940813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306691.3043478261,
            "unit": "ns",
            "range": "± 37877.441609688554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255711.22448979592,
            "unit": "ns",
            "range": "± 38401.108453323715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229997.9797979798,
            "unit": "ns",
            "range": "± 33482.947166866594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5181124.742268041,
            "unit": "ns",
            "range": "± 298297.17565951456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636221.4285714286,
            "unit": "ns",
            "range": "± 306149.0241696027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22891.91919191919,
            "unit": "ns",
            "range": "± 10276.083554442968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86992.92929292929,
            "unit": "ns",
            "range": "± 22583.45182725008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78514.28571428571,
            "unit": "ns",
            "range": "± 17394.589750187257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175268.3673469388,
            "unit": "ns",
            "range": "± 38253.106057942015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4444.943820224719,
            "unit": "ns",
            "range": "± 634.4308895586257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20794,
            "unit": "ns",
            "range": "± 9779.000589285826"
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
          "id": "c73507309acdb3ba10a2754f374b1c797d605bc6",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:52:56+09:00",
          "tree_id": "24a44ad3d76f4b9a2d5817a012cf70fd9ab050c5",
          "url": "https://github.com/moreal/libplanet/commit/c73507309acdb3ba10a2754f374b1c797d605bc6"
        },
        "date": 1681459665092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362867.3469387756,
            "unit": "ns",
            "range": "± 111874.4692096009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539226,
            "unit": "ns",
            "range": "± 100262.03996100846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248752.0408163266,
            "unit": "ns",
            "range": "± 163811.57029588122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5225091.666666667,
            "unit": "ns",
            "range": "± 157975.65160492298"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43513.82978723404,
            "unit": "ns",
            "range": "± 3781.5796057735065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7175757.142857143,
            "unit": "ns",
            "range": "± 42675.87526542754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18161092.85714286,
            "unit": "ns",
            "range": "± 45179.1896322209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46795300,
            "unit": "ns",
            "range": "± 432624.0878968385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92655373.07692307,
            "unit": "ns",
            "range": "± 391990.3509736053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185827442.85714287,
            "unit": "ns",
            "range": "± 1964060.7861947992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969025.78125,
            "unit": "ns",
            "range": "± 23700.550652644008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523796.1388221155,
            "unit": "ns",
            "range": "± 5288.285618460997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1128774.1489955357,
            "unit": "ns",
            "range": "± 3204.7118476832547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573293.2421875,
            "unit": "ns",
            "range": "± 6839.048445823584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853410.6315104166,
            "unit": "ns",
            "range": "± 2697.29669178928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741053.8853236607,
            "unit": "ns",
            "range": "± 1090.5619445549478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3118813.3333333335,
            "unit": "ns",
            "range": "± 52069.388685630234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3264877.777777778,
            "unit": "ns",
            "range": "± 67621.3467475154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3926740,
            "unit": "ns",
            "range": "± 69750.12339978844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4269532.258064516,
            "unit": "ns",
            "range": "± 127486.8421631471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6712250,
            "unit": "ns",
            "range": "± 197908.01895203046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319795,
            "unit": "ns",
            "range": "± 7328.277962436799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247860.67415730338,
            "unit": "ns",
            "range": "± 13651.070703740754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242005.10204081633,
            "unit": "ns",
            "range": "± 16795.110803346815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5265092.857142857,
            "unit": "ns",
            "range": "± 59248.93331445806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729542.8571428573,
            "unit": "ns",
            "range": "± 43958.454411929844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19014.736842105263,
            "unit": "ns",
            "range": "± 2328.499124906868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94218.18181818182,
            "unit": "ns",
            "range": "± 11396.637202158592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86013,
            "unit": "ns",
            "range": "± 12975.117250983425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 168010.20408163266,
            "unit": "ns",
            "range": "± 23525.155388230607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6125.773195876289,
            "unit": "ns",
            "range": "± 1094.1395354451167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19377.551020408162,
            "unit": "ns",
            "range": "± 2426.2112762832294"
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
          "id": "08ac4f5eae06ea85487e9c954a9211dd873854f7",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-14T16:51:43+09:00",
          "tree_id": "78f9a1a5fcd730f162e85c248eccc2c98abfd48e",
          "url": "https://github.com/moreal/libplanet/commit/08ac4f5eae06ea85487e9c954a9211dd873854f7"
        },
        "date": 1681459989460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612502.0833333333,
            "unit": "ns",
            "range": "± 253302.86884288365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095229.0322580645,
            "unit": "ns",
            "range": "± 342474.8234417307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645617.8947368423,
            "unit": "ns",
            "range": "± 349922.75651554245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7015527.659574468,
            "unit": "ns",
            "range": "± 775855.5224394809"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64959.79381443299,
            "unit": "ns",
            "range": "± 19241.673847590406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7993113.541666667,
            "unit": "ns",
            "range": "± 795905.8143986888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21667051.020408165,
            "unit": "ns",
            "range": "± 2182814.2349211043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57362397,
            "unit": "ns",
            "range": "± 4575747.535118435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113810141.37931034,
            "unit": "ns",
            "range": "± 4924878.536716983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231194823.23232323,
            "unit": "ns",
            "range": "± 14346493.632917859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6013661.053240741,
            "unit": "ns",
            "range": "± 166237.8280844901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832638.8997395833,
            "unit": "ns",
            "range": "± 46796.16472521076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1498904.9907483552,
            "unit": "ns",
            "range": "± 31706.42424779202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3142167.4296875,
            "unit": "ns",
            "range": "± 125028.19944609042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041009.94140625,
            "unit": "ns",
            "range": "± 18775.82325512605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963616.064453125,
            "unit": "ns",
            "range": "± 18641.94553251358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363781.052631579,
            "unit": "ns",
            "range": "± 345906.7917421516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3616523.4693877553,
            "unit": "ns",
            "range": "± 483534.3804450469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493312.903225807,
            "unit": "ns",
            "range": "± 514003.7876754806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4836828.571428572,
            "unit": "ns",
            "range": "± 552978.3334992318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8845622.448979592,
            "unit": "ns",
            "range": "± 1161396.05865435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409451.0416666667,
            "unit": "ns",
            "range": "± 54513.210363788574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319114.89361702127,
            "unit": "ns",
            "range": "± 54800.421781295765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266459.375,
            "unit": "ns",
            "range": "± 50546.167699232625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6183115.957446809,
            "unit": "ns",
            "range": "± 712970.1031755762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4600123.711340206,
            "unit": "ns",
            "range": "± 618740.0104872393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27032.98969072165,
            "unit": "ns",
            "range": "± 10675.533960586825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122921.42857142857,
            "unit": "ns",
            "range": "± 26086.91756496418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95337.8947368421,
            "unit": "ns",
            "range": "± 26222.38031840874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 237188.54166666666,
            "unit": "ns",
            "range": "± 39353.052098024426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6484.883720930233,
            "unit": "ns",
            "range": "± 1347.4610060371683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26057.731958762888,
            "unit": "ns",
            "range": "± 10054.816787775839"
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
          "id": "7ae3bc5559f8e6b976f6a7e294668978dbc34fbe",
          "message": "Support custom currencies in `StateQuery`",
          "timestamp": "2023-04-18T11:51:13+09:00",
          "tree_id": "8392a80505f00566b10be9d745188aee6a787c22",
          "url": "https://github.com/moreal/libplanet/commit/7ae3bc5559f8e6b976f6a7e294668978dbc34fbe"
        },
        "date": 1681787214875,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441749,
            "unit": "ns",
            "range": "± 123814.27888396215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2654177.8947368423,
            "unit": "ns",
            "range": "± 161071.06940656982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305761,
            "unit": "ns",
            "range": "± 163709.17172865057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5348300,
            "unit": "ns",
            "range": "± 133234.0865476317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55786.73469387755,
            "unit": "ns",
            "range": "± 4999.580142270961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7567335.714285715,
            "unit": "ns",
            "range": "± 114274.86840705857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19824221.42857143,
            "unit": "ns",
            "range": "± 128615.19935643107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50967860,
            "unit": "ns",
            "range": "± 420694.27277163777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102187515.38461539,
            "unit": "ns",
            "range": "± 553378.2384080439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205073360,
            "unit": "ns",
            "range": "± 1632152.3190472845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902354.910714285,
            "unit": "ns",
            "range": "± 25012.15672995399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526049.037388393,
            "unit": "ns",
            "range": "± 3139.9000529244418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182478.1947544643,
            "unit": "ns",
            "range": "± 4320.216286573757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650199.8567708335,
            "unit": "ns",
            "range": "± 8764.426297444414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842073.5091145834,
            "unit": "ns",
            "range": "± 2366.0037212407824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763429.9869791666,
            "unit": "ns",
            "range": "± 1956.2473283056217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358935.714285714,
            "unit": "ns",
            "range": "± 41301.56650303225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542245.098039216,
            "unit": "ns",
            "range": "± 139997.16184798247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4093074.285714286,
            "unit": "ns",
            "range": "± 133550.33935882433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4376831.707317073,
            "unit": "ns",
            "range": "± 157797.0982607481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7071215,
            "unit": "ns",
            "range": "± 153088.11454776453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331075.8064516129,
            "unit": "ns",
            "range": "± 15021.554846110697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273242.1052631579,
            "unit": "ns",
            "range": "± 13847.96748655816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237329.85074626867,
            "unit": "ns",
            "range": "± 11244.028919431956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5422164.285714285,
            "unit": "ns",
            "range": "± 72107.1703160581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3767623.076923077,
            "unit": "ns",
            "range": "± 35455.49214264164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25747.82608695652,
            "unit": "ns",
            "range": "± 2024.9258980265931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105744.89795918367,
            "unit": "ns",
            "range": "± 8779.338119957101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102233.33333333333,
            "unit": "ns",
            "range": "± 9571.023445583987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 201117.58241758242,
            "unit": "ns",
            "range": "± 13941.413872237665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9457.575757575758,
            "unit": "ns",
            "range": "± 1496.1918264203705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24623.655913978495,
            "unit": "ns",
            "range": "± 2383.7036331626227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2cc602ced559d738e8ba1632c84fb5d79ef9816",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T13:29:22+09:00",
          "tree_id": "eaf1811621b3e736a563f33774ac185fa35d0024",
          "url": "https://github.com/moreal/libplanet/commit/e2cc602ced559d738e8ba1632c84fb5d79ef9816"
        },
        "date": 1681793106680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340338.775510204,
            "unit": "ns",
            "range": "± 152166.5288477658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411896.7741935486,
            "unit": "ns",
            "range": "± 72664.21165824328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128682.6530612246,
            "unit": "ns",
            "range": "± 164793.4152081978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5453010,
            "unit": "ns",
            "range": "± 418441.1186749933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46387.234042553195,
            "unit": "ns",
            "range": "± 3345.2336190676538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6716257.142857143,
            "unit": "ns",
            "range": "± 23267.928217107845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17808023.076923076,
            "unit": "ns",
            "range": "± 179668.89061941206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45114134.782608695,
            "unit": "ns",
            "range": "± 1139779.8386326018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90483853.33333333,
            "unit": "ns",
            "range": "± 1634011.8979574984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180159853.33333334,
            "unit": "ns",
            "range": "± 3206987.141242577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4712530.416666667,
            "unit": "ns",
            "range": "± 24969.826008773784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493549.6512276786,
            "unit": "ns",
            "range": "± 12336.251036513077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159394.2643229167,
            "unit": "ns",
            "range": "± 6569.408738428709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653605.3125,
            "unit": "ns",
            "range": "± 13981.249240558775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828892.5065104166,
            "unit": "ns",
            "range": "± 2469.4143109849338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741270.9244791666,
            "unit": "ns",
            "range": "± 3099.3148970605025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2882645.1612903224,
            "unit": "ns",
            "range": "± 87585.04757742492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3036069.230769231,
            "unit": "ns",
            "range": "± 44484.25535354025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3805241.379310345,
            "unit": "ns",
            "range": "± 110314.18933871621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3915106.896551724,
            "unit": "ns",
            "range": "± 114219.64095246642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6463573.076923077,
            "unit": "ns",
            "range": "± 130758.49664994563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290307.8947368421,
            "unit": "ns",
            "range": "± 9461.883178623455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236394.87179487178,
            "unit": "ns",
            "range": "± 7310.840858757513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202884.61538461538,
            "unit": "ns",
            "range": "± 1538.3140954987887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5134583.333333333,
            "unit": "ns",
            "range": "± 106846.08638818077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3482228.5714285714,
            "unit": "ns",
            "range": "± 56742.13505068248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17015.05376344086,
            "unit": "ns",
            "range": "± 1202.3479056448298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81314.73684210527,
            "unit": "ns",
            "range": "± 4990.181176539791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72182,
            "unit": "ns",
            "range": "± 5152.41200749217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157346.875,
            "unit": "ns",
            "range": "± 13440.26905373706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5254.166666666667,
            "unit": "ns",
            "range": "± 796.8248393225474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17637.23404255319,
            "unit": "ns",
            "range": "± 1978.9746472131758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "2ff48faa63b22e7cea06e59da6eef533e1f154ac",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T14:00:28+09:00",
          "tree_id": "26a2576bebb4b708b1bcc6ad9a11cc93782d1a2f",
          "url": "https://github.com/moreal/libplanet/commit/2ff48faa63b22e7cea06e59da6eef533e1f154ac"
        },
        "date": 1681795030534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369546.1538461538,
            "unit": "ns",
            "range": "± 59794.71150560442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475696.93877551,
            "unit": "ns",
            "range": "± 95067.64061717848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145610.3092783503,
            "unit": "ns",
            "range": "± 124686.42207933075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5164983.333333333,
            "unit": "ns",
            "range": "± 183433.05406933412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49566.666666666664,
            "unit": "ns",
            "range": "± 3116.8022299066197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7466411.904761905,
            "unit": "ns",
            "range": "± 172940.42175324564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19965780,
            "unit": "ns",
            "range": "± 290236.4632010054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50568953.84615385,
            "unit": "ns",
            "range": "± 378416.0466457182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100587266.66666667,
            "unit": "ns",
            "range": "± 943563.2204321981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202366026.66666666,
            "unit": "ns",
            "range": "± 1780359.623168736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828911.692708333,
            "unit": "ns",
            "range": "± 17336.51270699897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528708.7890625,
            "unit": "ns",
            "range": "± 3350.359230620741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175498.5807291667,
            "unit": "ns",
            "range": "± 3538.548362602928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687655.2864583335,
            "unit": "ns",
            "range": "± 14165.15557827494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844580.6184895834,
            "unit": "ns",
            "range": "± 5731.611089908535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777914.2857142857,
            "unit": "ns",
            "range": "± 2518.917969355468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316557.1428571427,
            "unit": "ns",
            "range": "± 55330.45780074081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3493925.4901960786,
            "unit": "ns",
            "range": "± 136364.37488308633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4022268.9655172415,
            "unit": "ns",
            "range": "± 115596.77486680116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4528233.333333333,
            "unit": "ns",
            "range": "± 95286.10169626307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7171411.764705882,
            "unit": "ns",
            "range": "± 275112.71700672706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330372.0930232558,
            "unit": "ns",
            "range": "± 11339.339982081667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264759.2105263158,
            "unit": "ns",
            "range": "± 13484.343292689033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229260.52631578947,
            "unit": "ns",
            "range": "± 11574.092666495788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5363957.142857143,
            "unit": "ns",
            "range": "± 68863.25037890131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3864853.3333333335,
            "unit": "ns",
            "range": "± 57329.02364754656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25367.01030927835,
            "unit": "ns",
            "range": "± 2440.744492358007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103482.47422680413,
            "unit": "ns",
            "range": "± 7878.702969467733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89789.898989899,
            "unit": "ns",
            "range": "± 9067.811370497146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 200251.54639175258,
            "unit": "ns",
            "range": "± 20038.583165785356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8866.326530612245,
            "unit": "ns",
            "range": "± 1314.1532397857513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22986.59793814433,
            "unit": "ns",
            "range": "± 3089.72183436401"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5648f532e065fd41e9d7612f934722cbfba8860c",
          "message": "Correct error message in `CurrencyInput` type\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-04-18T14:28:02+09:00",
          "tree_id": "d2b19ea68fcff95a931ffecf0f56685f3c450591",
          "url": "https://github.com/moreal/libplanet/commit/5648f532e065fd41e9d7612f934722cbfba8860c"
        },
        "date": 1681796633392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407172.7272727273,
            "unit": "ns",
            "range": "± 124617.3988066804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2473239.285714286,
            "unit": "ns",
            "range": "± 68521.33130577182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2418818.1818181816,
            "unit": "ns",
            "range": "± 58482.25320038498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5375384.31372549,
            "unit": "ns",
            "range": "± 218250.62325001412"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42461.03896103896,
            "unit": "ns",
            "range": "± 2173.1710909561007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6863166.666666667,
            "unit": "ns",
            "range": "± 44563.88138178186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17650660,
            "unit": "ns",
            "range": "± 83401.67692729994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44962966.666666664,
            "unit": "ns",
            "range": "± 236705.82305187735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90249923.33333333,
            "unit": "ns",
            "range": "± 662560.2554449204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180467266.66666666,
            "unit": "ns",
            "range": "± 985744.8073604524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853941.629464285,
            "unit": "ns",
            "range": "± 12281.707878391131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511371.58203125,
            "unit": "ns",
            "range": "± 8137.000401518481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227891.1830357143,
            "unit": "ns",
            "range": "± 1094.834980449342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605474.84375,
            "unit": "ns",
            "range": "± 17707.214141352248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820134.8079427084,
            "unit": "ns",
            "range": "± 1751.8743871856886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742604.1731770834,
            "unit": "ns",
            "range": "± 645.612467863682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3005781.25,
            "unit": "ns",
            "range": "± 57291.63078786756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3190953.5714285714,
            "unit": "ns",
            "range": "± 82609.52542217025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4005838.888888889,
            "unit": "ns",
            "range": "± 76439.89671930173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173192.8571428573,
            "unit": "ns",
            "range": "± 71026.2623615726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6719830.434782608,
            "unit": "ns",
            "range": "± 159242.32087888347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308914.28571428574,
            "unit": "ns",
            "range": "± 6578.167352255924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255604,
            "unit": "ns",
            "range": "± 9978.997536663424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242287.25490196078,
            "unit": "ns",
            "range": "± 9817.962330021717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5306653.333333333,
            "unit": "ns",
            "range": "± 51115.23209749665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3665180,
            "unit": "ns",
            "range": "± 41107.63224233948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19297.872340425532,
            "unit": "ns",
            "range": "± 1789.153624819629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87483.50515463918,
            "unit": "ns",
            "range": "± 7713.647002936461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74628.42105263157,
            "unit": "ns",
            "range": "± 5460.704170122624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155736.4705882353,
            "unit": "ns",
            "range": "± 9802.111617241602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5743.434343434344,
            "unit": "ns",
            "range": "± 996.9506175887219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16593.684210526317,
            "unit": "ns",
            "range": "± 1533.9290758879379"
          }
        ]
      }
    ]
  }
}