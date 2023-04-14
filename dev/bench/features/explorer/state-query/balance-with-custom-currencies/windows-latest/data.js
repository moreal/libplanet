window.BENCHMARK_DATA = {
  "lastUpdate": 1681458124469,
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
      }
    ]
  }
}