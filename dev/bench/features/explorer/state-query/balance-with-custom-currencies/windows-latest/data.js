window.BENCHMARK_DATA = {
  "lastUpdate": 1681451274053,
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
      }
    ]
  }
}