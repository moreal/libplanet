window.BENCHMARK_DATA = {
  "lastUpdate": 1702347494317,
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
          "id": "6f5bdd066834ae1fa6cd68631b4f78d5906b8b05",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:14:05+09:00",
          "tree_id": "8ff2cd2db84ebaeec14e71ddbef72ac765e82998",
          "url": "https://github.com/moreal/libplanet/commit/6f5bdd066834ae1fa6cd68631b4f78d5906b8b05"
        },
        "date": 1702337655706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8282189.183908046,
            "unit": "ns",
            "range": "± 573854.7478876702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20251059.3,
            "unit": "ns",
            "range": "± 378310.1348629568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55869589.0319149,
            "unit": "ns",
            "range": "± 6612616.384462749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106486673.15591398,
            "unit": "ns",
            "range": "± 9414830.614159957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219592499.42222223,
            "unit": "ns",
            "range": "± 15960280.834106095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60739.13043478261,
            "unit": "ns",
            "range": "± 14264.348653558363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234628.2808988764,
            "unit": "ns",
            "range": "± 21063.27430138057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239711.8764044944,
            "unit": "ns",
            "range": "± 18487.198305867216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227522.31395348837,
            "unit": "ns",
            "range": "± 23986.719736756113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142166.3333333335,
            "unit": "ns",
            "range": "± 168463.31792347753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3661137.9776119404,
            "unit": "ns",
            "range": "± 163569.43524585274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16157.725274725275,
            "unit": "ns",
            "range": "± 2985.0488217333846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76408.91011235955,
            "unit": "ns",
            "range": "± 12640.263633291082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69373.05376344085,
            "unit": "ns",
            "range": "± 7185.552758329052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78104.08421052631,
            "unit": "ns",
            "range": "± 14682.619990317367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5693,
            "unit": "ns",
            "range": "± 1411.5017785441623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23159.884615384617,
            "unit": "ns",
            "range": "± 3983.0704035098647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1175586.9065934066,
            "unit": "ns",
            "range": "± 129981.6292944659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2552054.938202247,
            "unit": "ns",
            "range": "± 261197.1884468599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2669552.138297872,
            "unit": "ns",
            "range": "± 768261.5483810521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23780246.829787236,
            "unit": "ns",
            "range": "± 5113727.500972748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2895858.12,
            "unit": "ns",
            "range": "± 116361.0933769233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3083508.8085106383,
            "unit": "ns",
            "range": "± 116738.72393747282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3743750.9340659343,
            "unit": "ns",
            "range": "± 209266.51817987734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4284768.5322580645,
            "unit": "ns",
            "range": "± 703541.4475344882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22990823.64893617,
            "unit": "ns",
            "range": "± 3278162.9104869217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5462876.440185547,
            "unit": "ns",
            "range": "± 473227.9537804214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1620974.3397420247,
            "unit": "ns",
            "range": "± 206767.26430058733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033654.9749609375,
            "unit": "ns",
            "range": "± 111969.89855027963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2329030.626579122,
            "unit": "ns",
            "range": "± 215555.52913859737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640073.5986979167,
            "unit": "ns",
            "range": "± 8845.405922432845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568967.6440054086,
            "unit": "ns",
            "range": "± 4241.728874900725"
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
          "id": "5741cd22fabcd68d385ea4acceab09785dd2bd42",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:20:03+09:00",
          "tree_id": "6e883b31e2df2350856f95e4ee822186a69e5fcc",
          "url": "https://github.com/moreal/libplanet/commit/5741cd22fabcd68d385ea4acceab09785dd2bd42"
        },
        "date": 1702337991782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11948400.550561797,
            "unit": "ns",
            "range": "± 2148219.220514845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28707469.676767677,
            "unit": "ns",
            "range": "± 4087405.3180836528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69706499.33333333,
            "unit": "ns",
            "range": "± 10486251.957149478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138362960.34408602,
            "unit": "ns",
            "range": "± 21090514.29733578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 321145228.8947368,
            "unit": "ns",
            "range": "± 57862936.77846604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75489.4,
            "unit": "ns",
            "range": "± 19496.662695544328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232523.87634408602,
            "unit": "ns",
            "range": "± 16154.338518015888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238433,
            "unit": "ns",
            "range": "± 26022.208119135554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212770.5806451613,
            "unit": "ns",
            "range": "± 6404.912212639054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4046482.653846154,
            "unit": "ns",
            "range": "± 62526.82891347009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750757.7795698927,
            "unit": "ns",
            "range": "± 261535.93534513717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14954.055555555555,
            "unit": "ns",
            "range": "± 1272.9605002046012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70770.08333333333,
            "unit": "ns",
            "range": "± 10873.525154115981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66736.6836734694,
            "unit": "ns",
            "range": "± 6878.136183045099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74936.25806451614,
            "unit": "ns",
            "range": "± 8962.753580068273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7893.277777777777,
            "unit": "ns",
            "range": "± 1121.460664979441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26116.170103092783,
            "unit": "ns",
            "range": "± 5510.669062376579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846308.5806451612,
            "unit": "ns",
            "range": "± 453109.6392806129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3491563.005263158,
            "unit": "ns",
            "range": "± 861643.5159070714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2718057.33,
            "unit": "ns",
            "range": "± 691101.1598731996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28281113.69387755,
            "unit": "ns",
            "range": "± 5244504.135377667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3334663.75,
            "unit": "ns",
            "range": "± 74058.78126253567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5291324.277777778,
            "unit": "ns",
            "range": "± 1491117.3138446491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5435182.293814433,
            "unit": "ns",
            "range": "± 1214193.2417679648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5535844.770833333,
            "unit": "ns",
            "range": "± 1739893.8068382912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34101044.97752809,
            "unit": "ns",
            "range": "± 10192192.38570417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4544995.765625,
            "unit": "ns",
            "range": "± 153325.84352605313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1357780.398158482,
            "unit": "ns",
            "range": "± 16939.86193475673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890297.209765625,
            "unit": "ns",
            "range": "± 16473.9172214477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964082.6067708333,
            "unit": "ns",
            "range": "± 33130.39974927625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641816.2634698276,
            "unit": "ns",
            "range": "± 18654.662387195458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600422.6186523438,
            "unit": "ns",
            "range": "± 11531.475693594679"
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
          "id": "f7255bf40a32c63c7de920979f61e6c038e4cc99",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T10:43:35+09:00",
          "tree_id": "5a10ef13db4bd35dfc56e31c3fad4b8b93d593b9",
          "url": "https://github.com/moreal/libplanet/commit/f7255bf40a32c63c7de920979f61e6c038e4cc99"
        },
        "date": 1702346387334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750213.6,
            "unit": "ns",
            "range": "± 91270.03198656486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19122472.555555556,
            "unit": "ns",
            "range": "± 328694.43724855426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47810447.166666664,
            "unit": "ns",
            "range": "± 1209288.5400799375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105998378.2586207,
            "unit": "ns",
            "range": "± 4500381.711466844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219914395.0652174,
            "unit": "ns",
            "range": "± 5464956.01614866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51937.943181818184,
            "unit": "ns",
            "range": "± 10659.789211387686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248425.02173913043,
            "unit": "ns",
            "range": "± 24326.571153071618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250870.39772727274,
            "unit": "ns",
            "range": "± 24513.01613407497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244303.27659574468,
            "unit": "ns",
            "range": "± 18554.987973503663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241863.414893617,
            "unit": "ns",
            "range": "± 263397.7086795617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829620.487804878,
            "unit": "ns",
            "range": "± 202887.15847511098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22901.14893617021,
            "unit": "ns",
            "range": "± 2387.5925595184103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87808.14130434782,
            "unit": "ns",
            "range": "± 9471.230561149434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91386.8021978022,
            "unit": "ns",
            "range": "± 6383.150483403388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65681.71134020618,
            "unit": "ns",
            "range": "± 9461.575521725097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5586.268041237114,
            "unit": "ns",
            "range": "± 1162.098537448022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14112.936170212766,
            "unit": "ns",
            "range": "± 2553.3291521703204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1169928.5823529412,
            "unit": "ns",
            "range": "± 135598.96021182777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2833553.870967742,
            "unit": "ns",
            "range": "± 818684.719412369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1822958.7894736843,
            "unit": "ns",
            "range": "± 92380.3002401581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24026947.393258426,
            "unit": "ns",
            "range": "± 6135675.089331589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073871.907216495,
            "unit": "ns",
            "range": "± 231040.38880680953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3159623.489361702,
            "unit": "ns",
            "range": "± 181461.37992939877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3933334.264367816,
            "unit": "ns",
            "range": "± 211927.51334663876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4055768.1170212766,
            "unit": "ns",
            "range": "± 278650.1783204593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25010144.395833332,
            "unit": "ns",
            "range": "± 3673542.3459736523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4963463.245605469,
            "unit": "ns",
            "range": "± 193055.62935254315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1384734.978515625,
            "unit": "ns",
            "range": "± 19517.4024804323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900751.3756760817,
            "unit": "ns",
            "range": "± 2418.769017332342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2060036.928744612,
            "unit": "ns",
            "range": "± 59818.976363852256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 659719.732524671,
            "unit": "ns",
            "range": "± 14019.874501664415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600238.2192993164,
            "unit": "ns",
            "range": "± 23496.465544262515"
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
          "id": "c92c558bb7b1c94abde5a32a3c195737ef0e6998",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T10:55:18+09:00",
          "tree_id": "2a523adfd569488b33323494a4e518d39a7e6180",
          "url": "https://github.com/moreal/libplanet/commit/c92c558bb7b1c94abde5a32a3c195737ef0e6998"
        },
        "date": 1702347465005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9466432.57142857,
            "unit": "ns",
            "range": "± 267197.8221881792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21172212.36868687,
            "unit": "ns",
            "range": "± 1252861.2143261638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46753382.666666664,
            "unit": "ns",
            "range": "± 672526.0717898983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96103156.18666667,
            "unit": "ns",
            "range": "± 4842780.582702621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199518347.10344827,
            "unit": "ns",
            "range": "± 8754186.684584543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54610.69662921348,
            "unit": "ns",
            "range": "± 9257.407665810728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283106.1875,
            "unit": "ns",
            "range": "± 26821.577347671133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308972.15555555554,
            "unit": "ns",
            "range": "± 59401.36270202522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232272.52,
            "unit": "ns",
            "range": "± 31354.809424554012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4586917.489361702,
            "unit": "ns",
            "range": "± 558647.6912337949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196031.054347826,
            "unit": "ns",
            "range": "± 389992.326616717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24646.115384615383,
            "unit": "ns",
            "range": "± 4688.197577769642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95019.70652173914,
            "unit": "ns",
            "range": "± 12674.269138204747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75187.6,
            "unit": "ns",
            "range": "± 15162.385891049304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85169.16842105263,
            "unit": "ns",
            "range": "± 13214.697913688982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6824.45652173913,
            "unit": "ns",
            "range": "± 1376.910292696232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18317.08585858586,
            "unit": "ns",
            "range": "± 4456.535984349053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349422.5612244897,
            "unit": "ns",
            "range": "± 195630.14355017003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730625.0178571427,
            "unit": "ns",
            "range": "± 117257.24577192598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329309.688888889,
            "unit": "ns",
            "range": "± 195069.7032909953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23310222.653061226,
            "unit": "ns",
            "range": "± 4889527.885706968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2858437.865079365,
            "unit": "ns",
            "range": "± 116911.39446017497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3028553.75,
            "unit": "ns",
            "range": "± 66625.20372547109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3626207.234567901,
            "unit": "ns",
            "range": "± 186322.71555518077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3773774.5531914895,
            "unit": "ns",
            "range": "± 231692.26108073065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26434494.708333332,
            "unit": "ns",
            "range": "± 6582921.2418991495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4971712.153539541,
            "unit": "ns",
            "range": "± 369556.0782571928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934799.6467578125,
            "unit": "ns",
            "range": "± 515781.3071225616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1114756.3729679608,
            "unit": "ns",
            "range": "± 79271.83486658856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2428023.6218621926,
            "unit": "ns",
            "range": "± 107804.0351771211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 738450.0102174673,
            "unit": "ns",
            "range": "± 34923.75064911603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 672351.848568565,
            "unit": "ns",
            "range": "± 34206.23753553291"
          }
        ]
      }
    ]
  }
}