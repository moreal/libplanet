window.BENCHMARK_DATA = {
  "lastUpdate": 1682412864695,
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
          "id": "66cd4ec41dba46d1f34b718f977714284c443b06",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:16:18+09:00",
          "tree_id": "65975546470a4d2376acc0fcd547625311518773",
          "url": "https://github.com/moreal/libplanet/commit/66cd4ec41dba46d1f34b718f977714284c443b06"
        },
        "date": 1681479473063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8767977.214285715,
            "unit": "ns",
            "range": "± 105419.25026525758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23679959.42857143,
            "unit": "ns",
            "range": "± 227877.05794664277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57103947.2,
            "unit": "ns",
            "range": "± 769120.4459166513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115867538.1,
            "unit": "ns",
            "range": "± 740213.4927867384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240436297.43103448,
            "unit": "ns",
            "range": "± 6966566.965949364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71573,
            "unit": "ns",
            "range": "± 9354.066830725778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 453081.8076923077,
            "unit": "ns",
            "range": "± 15593.308431830703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381540.8076923077,
            "unit": "ns",
            "range": "± 19571.146979977646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350564.0333333333,
            "unit": "ns",
            "range": "± 22901.840540430934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6769010.352941177,
            "unit": "ns",
            "range": "± 321698.1414423862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4773221.662162162,
            "unit": "ns",
            "range": "± 207574.2249490184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22898.346153846152,
            "unit": "ns",
            "range": "± 2454.149202758811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108840.05376344085,
            "unit": "ns",
            "range": "± 12108.859253496637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102428.0425531915,
            "unit": "ns",
            "range": "± 10172.463141430453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 279174.3842105263,
            "unit": "ns",
            "range": "± 27922.162107218155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6704.373684210526,
            "unit": "ns",
            "range": "± 877.0120967906505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20316.010869565216,
            "unit": "ns",
            "range": "± 1987.7881987167236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1993027.1505376345,
            "unit": "ns",
            "range": "± 255715.76143729457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3686707.7988505745,
            "unit": "ns",
            "range": "± 354977.2848285627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3224438.340659341,
            "unit": "ns",
            "range": "± 365384.71764399594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8538041.376543209,
            "unit": "ns",
            "range": "± 558160.6341668674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3909481.0172413792,
            "unit": "ns",
            "range": "± 89629.26766472972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4093534.6507936507,
            "unit": "ns",
            "range": "± 167201.58781766114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5460496.806451613,
            "unit": "ns",
            "range": "± 164048.37960175434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5309717.684210527,
            "unit": "ns",
            "range": "± 178331.46967206203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9739043.911764706,
            "unit": "ns",
            "range": "± 292647.7462847398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7224358.860576923,
            "unit": "ns",
            "range": "± 77505.77032582935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2265075.410714286,
            "unit": "ns",
            "range": "± 8428.466109467612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466246.6240234375,
            "unit": "ns",
            "range": "± 4998.288390213665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3286228.44296875,
            "unit": "ns",
            "range": "± 27138.808939377137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1093614.4996995192,
            "unit": "ns",
            "range": "± 6923.834068203652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867205.5916666667,
            "unit": "ns",
            "range": "± 8967.700068499518"
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
          "id": "2306ec5bfff95ae38f4ecca45447b50fa9d13d4c",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-14T22:43:57+09:00",
          "tree_id": "26abe037d1fb1689b252969e1fa969d97ebba9cd",
          "url": "https://github.com/moreal/libplanet/commit/2306ec5bfff95ae38f4ecca45447b50fa9d13d4c"
        },
        "date": 1681480936038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8531932.725806452,
            "unit": "ns",
            "range": "± 237839.53670093202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23264443.068181816,
            "unit": "ns",
            "range": "± 3805802.8553090687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50114998.23913044,
            "unit": "ns",
            "range": "± 1250265.382499514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96826321.83333333,
            "unit": "ns",
            "range": "± 1505291.7044785547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208784089.36206895,
            "unit": "ns",
            "range": "± 9009941.200251954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74673.08333333333,
            "unit": "ns",
            "range": "± 10393.647015736067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389004.47826086957,
            "unit": "ns",
            "range": "± 18453.72745274666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351493.07608695654,
            "unit": "ns",
            "range": "± 38597.082475357274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321896.1685393258,
            "unit": "ns",
            "range": "± 26699.408387740776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5956279.317204301,
            "unit": "ns",
            "range": "± 469380.8305801689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4436296.573170732,
            "unit": "ns",
            "range": "± 431329.247008544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19281.760869565216,
            "unit": "ns",
            "range": "± 2926.0915212173204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94889.91666666667,
            "unit": "ns",
            "range": "± 13582.017631425415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115625.68817204301,
            "unit": "ns",
            "range": "± 13245.641173919372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258386.27956989247,
            "unit": "ns",
            "range": "± 24653.203023386137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8785.063829787234,
            "unit": "ns",
            "range": "± 1755.7296177104279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19126.541666666668,
            "unit": "ns",
            "range": "± 2192.5899221392647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687439.0164835164,
            "unit": "ns",
            "range": "± 169302.98295162778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320916.7209302327,
            "unit": "ns",
            "range": "± 345778.9304047467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3171723.202247191,
            "unit": "ns",
            "range": "± 743664.5969856606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7644729.879518072,
            "unit": "ns",
            "range": "± 755950.1149358803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180093.8974358975,
            "unit": "ns",
            "range": "± 110816.54018901188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3330672.988235294,
            "unit": "ns",
            "range": "± 196910.4564468505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4637211,
            "unit": "ns",
            "range": "± 61112.96656329708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379375.341269841,
            "unit": "ns",
            "range": "± 199838.29910263064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8212385.692307692,
            "unit": "ns",
            "range": "± 319652.2331350081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6401452.871582031,
            "unit": "ns",
            "range": "± 118326.52547247245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1981178.0395220588,
            "unit": "ns",
            "range": "± 34257.67449308446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291622.9466796876,
            "unit": "ns",
            "range": "± 16064.788158837162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2510356.6920123925,
            "unit": "ns",
            "range": "± 72757.43133720913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790951.2155859375,
            "unit": "ns",
            "range": "± 20838.48799035806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727477.1063802083,
            "unit": "ns",
            "range": "± 12673.212252578292"
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
          "id": "cd6c759315e0de39476267f3b7078839ade03d40",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-20T13:18:05+09:00",
          "tree_id": "7c63208914b931bfb0d3ea09f267360dfe37dc8e",
          "url": "https://github.com/moreal/libplanet/commit/cd6c759315e0de39476267f3b7078839ade03d40"
        },
        "date": 1681965155916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7645725.794117647,
            "unit": "ns",
            "range": "± 245527.07933558445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18657789.208333332,
            "unit": "ns",
            "range": "± 479043.3740076679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46846065.5,
            "unit": "ns",
            "range": "± 944326.6552878238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94581247.64285715,
            "unit": "ns",
            "range": "± 1340892.3240415235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194657292.26666668,
            "unit": "ns",
            "range": "± 2968612.4753964357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55236.13043478261,
            "unit": "ns",
            "range": "± 6245.473445162374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360518.7972972973,
            "unit": "ns",
            "range": "± 18053.47303890772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295961.9857142857,
            "unit": "ns",
            "range": "± 13787.28822691275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266144.7971014493,
            "unit": "ns",
            "range": "± 12307.760637069736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5320209.619047619,
            "unit": "ns",
            "range": "± 121308.95934780588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3603516.8846153845,
            "unit": "ns",
            "range": "± 98206.41699688545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17680.080459770114,
            "unit": "ns",
            "range": "± 1473.7909685679122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86747.82978723405,
            "unit": "ns",
            "range": "± 7959.272528002615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85007.70212765958,
            "unit": "ns",
            "range": "± 7733.359917218565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109247.1,
            "unit": "ns",
            "range": "± 13727.503677700344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5886.282352941176,
            "unit": "ns",
            "range": "± 526.4718283008102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16723.30769230769,
            "unit": "ns",
            "range": "± 1526.0210694068103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565946.394736842,
            "unit": "ns",
            "range": "± 184706.2133357148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2899699.0853658537,
            "unit": "ns",
            "range": "± 153484.59626535667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2517255.9896907215,
            "unit": "ns",
            "range": "± 231321.98586293697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6448588.290697674,
            "unit": "ns",
            "range": "± 213852.57405729615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3806559.3378378376,
            "unit": "ns",
            "range": "± 128978.06569476015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3385654.96,
            "unit": "ns",
            "range": "± 89797.56968754779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347065.6875,
            "unit": "ns",
            "range": "± 169710.92734852404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4532248.525,
            "unit": "ns",
            "range": "± 236358.35262492628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7957996.6,
            "unit": "ns",
            "range": "± 289920.87755238573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6045326.332291666,
            "unit": "ns",
            "range": "± 47516.828867214754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851044.2391183036,
            "unit": "ns",
            "range": "± 10650.250395188192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224645.6084635416,
            "unit": "ns",
            "range": "± 6549.77721688965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2399776.0549665177,
            "unit": "ns",
            "range": "± 13489.224457225924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851659.7802734375,
            "unit": "ns",
            "range": "± 3119.536608400387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785761.0433175223,
            "unit": "ns",
            "range": "± 6040.089152456945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "e919b337ef3820d37bbd3716341bbb4c460eaae0",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-20T14:40:13+09:00",
          "tree_id": "19a0036b34d31080b0617c0b75ffdc63eeca8a0c",
          "url": "https://github.com/moreal/libplanet/commit/e919b337ef3820d37bbd3716341bbb4c460eaae0"
        },
        "date": 1681970613750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9541673.914141415,
            "unit": "ns",
            "range": "± 801126.0771093477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22640613.969072163,
            "unit": "ns",
            "range": "± 1421636.1233772053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58169866.18518519,
            "unit": "ns",
            "range": "± 3051652.604792148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113865773.9710145,
            "unit": "ns",
            "range": "± 5496845.81021655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240847488.23333332,
            "unit": "ns",
            "range": "± 7132199.133752376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80149.81395348837,
            "unit": "ns",
            "range": "± 6782.481047889442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 425800.05555555556,
            "unit": "ns",
            "range": "± 35133.5612309962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384949.12765957444,
            "unit": "ns",
            "range": "± 48397.940766918495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 375328.87362637365,
            "unit": "ns",
            "range": "± 41917.61915807092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6072206.258064516,
            "unit": "ns",
            "range": "± 369637.7009507419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4150209.0760869565,
            "unit": "ns",
            "range": "± 277508.93626970577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26872.39010989011,
            "unit": "ns",
            "range": "± 3880.390554371641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123966.27777777778,
            "unit": "ns",
            "range": "± 29374.661974453065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125814.13541666667,
            "unit": "ns",
            "range": "± 19027.947093196086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 170014.30681818182,
            "unit": "ns",
            "range": "± 39330.838858421004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10285.015789473684,
            "unit": "ns",
            "range": "± 1843.8721390523726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23232.297872340427,
            "unit": "ns",
            "range": "± 5242.578142704314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1884011.9157303371,
            "unit": "ns",
            "range": "± 397438.766169474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3799894.3103448274,
            "unit": "ns",
            "range": "± 746939.5582750322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3043661.5494505493,
            "unit": "ns",
            "range": "± 411092.7285599595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9715015.880434783,
            "unit": "ns",
            "range": "± 2691361.1707746577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4713050.527777778,
            "unit": "ns",
            "range": "± 231892.77134777475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3917857.6588235293,
            "unit": "ns",
            "range": "± 313928.7006051789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4943662.397959184,
            "unit": "ns",
            "range": "± 310958.7084456726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5018646.09375,
            "unit": "ns",
            "range": "± 342411.4549513902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9511902.18556701,
            "unit": "ns",
            "range": "± 1146341.3393883035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6719619.789351852,
            "unit": "ns",
            "range": "± 185618.51716843602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2024132.9174107143,
            "unit": "ns",
            "range": "± 28592.156942885606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391976.9116950757,
            "unit": "ns",
            "range": "± 43058.36960335001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3034100.017020089,
            "unit": "ns",
            "range": "± 53090.18277234856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890485.5418669871,
            "unit": "ns",
            "range": "± 30580.718350936157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789031.2029206032,
            "unit": "ns",
            "range": "± 40859.54102597904"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d1d171d78d7909c03524821d6691fd7fb14573a7",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-21T15:45:37+09:00",
          "tree_id": "b7a1fd628eb4ffdd67cfd3b87c96c8de5f7c6217",
          "url": "https://github.com/moreal/libplanet/commit/d1d171d78d7909c03524821d6691fd7fb14573a7"
        },
        "date": 1682060396468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7487865.769230769,
            "unit": "ns",
            "range": "± 77786.92904033198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18782938.78125,
            "unit": "ns",
            "range": "± 571707.7216831835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46642249.9,
            "unit": "ns",
            "range": "± 1058650.1313860372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94358633.625,
            "unit": "ns",
            "range": "± 2369334.518780387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190463161.80769232,
            "unit": "ns",
            "range": "± 1352764.6873829896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55741.46875,
            "unit": "ns",
            "range": "± 7241.0056715801065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361374.8846153846,
            "unit": "ns",
            "range": "± 17592.668202223518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289417.96078431373,
            "unit": "ns",
            "range": "± 11761.370523813597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270790.39795918367,
            "unit": "ns",
            "range": "± 9838.035684790133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5365429.55,
            "unit": "ns",
            "range": "± 123285.45879059662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3592419.6666666665,
            "unit": "ns",
            "range": "± 84842.24730070116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17375.34117647059,
            "unit": "ns",
            "range": "± 1637.4802692591095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83284.59278350516,
            "unit": "ns",
            "range": "± 7420.658076840952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83730.15909090909,
            "unit": "ns",
            "range": "± 6845.573082290034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109562.46391752578,
            "unit": "ns",
            "range": "± 14870.556993366297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5272.325581395349,
            "unit": "ns",
            "range": "± 795.7992570086632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15985.288888888888,
            "unit": "ns",
            "range": "± 1575.3126352415134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553499.9270833333,
            "unit": "ns",
            "range": "± 189373.31776741077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912467.434782609,
            "unit": "ns",
            "range": "± 138695.2817574512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366484.9270833335,
            "unit": "ns",
            "range": "± 173199.20479997012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6839019.164705883,
            "unit": "ns",
            "range": "± 367620.69440336927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555388.06,
            "unit": "ns",
            "range": "± 91571.21690615088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3233945.206896552,
            "unit": "ns",
            "range": "± 181453.84843126044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4343124.478260869,
            "unit": "ns",
            "range": "± 108923.33326739066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4431580.3877551025,
            "unit": "ns",
            "range": "± 449903.4234627215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7935487.016666667,
            "unit": "ns",
            "range": "± 351489.12635342596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6047452.835416666,
            "unit": "ns",
            "range": "± 49810.433415192405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867028.035907452,
            "unit": "ns",
            "range": "± 7777.556173711507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230645.6393229167,
            "unit": "ns",
            "range": "± 9213.327869810495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2372010.8630022323,
            "unit": "ns",
            "range": "± 16896.5828887137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831269.1657366072,
            "unit": "ns",
            "range": "± 3746.6503690896866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 703404.3568359375,
            "unit": "ns",
            "range": "± 3972.7133511607485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "52f53b69ad79116acddf0d24f178abc964d3fc9a",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-21T18:25:48+09:00",
          "tree_id": "7776f573b66fa10d51aa104723017fad129058a1",
          "url": "https://github.com/moreal/libplanet/commit/52f53b69ad79116acddf0d24f178abc964d3fc9a"
        },
        "date": 1682070719056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9567174.201149425,
            "unit": "ns",
            "range": "± 1244508.8815083504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24343331.879518073,
            "unit": "ns",
            "range": "± 2786221.295052177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56929429.72988506,
            "unit": "ns",
            "range": "± 3950313.949052436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129555762.14367816,
            "unit": "ns",
            "range": "± 18343256.719691444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281945766.09574467,
            "unit": "ns",
            "range": "± 24860608.342721336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77630.3735632184,
            "unit": "ns",
            "range": "± 7738.615321133299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 476284.15625,
            "unit": "ns",
            "range": "± 71628.21324139167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395281.0408163265,
            "unit": "ns",
            "range": "± 70301.19866059803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380227.375,
            "unit": "ns",
            "range": "± 50309.224948627256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6085780.010309278,
            "unit": "ns",
            "range": "± 454698.41194160626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4034708.398989899,
            "unit": "ns",
            "range": "± 258481.45597321005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25497.42391304348,
            "unit": "ns",
            "range": "± 4513.031076742288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111761.75,
            "unit": "ns",
            "range": "± 18611.48708897701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124936.92708333333,
            "unit": "ns",
            "range": "± 15491.238025171584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146938.48936170212,
            "unit": "ns",
            "range": "± 23295.70584350681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10243.815789473685,
            "unit": "ns",
            "range": "± 1780.2589416194842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22841.010638297874,
            "unit": "ns",
            "range": "± 4783.709996210326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657249.1631578947,
            "unit": "ns",
            "range": "± 190771.28962516092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3132418.888888889,
            "unit": "ns",
            "range": "± 164386.62424023435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2655722.925531915,
            "unit": "ns",
            "range": "± 275944.3638976746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7275109.20212766,
            "unit": "ns",
            "range": "± 450734.1951935605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4634130.572164948,
            "unit": "ns",
            "range": "± 763357.5100768675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4892137.544943821,
            "unit": "ns",
            "range": "± 1016644.1186631334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5748632.489473684,
            "unit": "ns",
            "range": "± 770789.2444975999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5448466.188172043,
            "unit": "ns",
            "range": "± 1141814.5692401195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9404808.01111111,
            "unit": "ns",
            "range": "± 862550.3205439537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7303107.649720149,
            "unit": "ns",
            "range": "± 344743.99561669043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153841.1640625,
            "unit": "ns",
            "range": "± 54084.91492386033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466436.9751790364,
            "unit": "ns",
            "range": "± 51383.5058277304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245600.861702967,
            "unit": "ns",
            "range": "± 339900.958382768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952341.416545759,
            "unit": "ns",
            "range": "± 44023.771998966215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899857.9330999824,
            "unit": "ns",
            "range": "± 49667.73962842069"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "ebb2bccc219cc26c51b720b940f3c6e0d0d7231c",
          "message": "Treat block action as `null` in `IActionEvaluation`",
          "timestamp": "2023-04-25T15:57:56+09:00",
          "tree_id": "1cd821370e9d888e005212d77caf22a00d8c0d12",
          "url": "https://github.com/moreal/libplanet/commit/ebb2bccc219cc26c51b720b940f3c6e0d0d7231c"
        },
        "date": 1682406780567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696394.3125,
            "unit": "ns",
            "range": "± 145675.6915502005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19416634.770833332,
            "unit": "ns",
            "range": "± 764058.8094242328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50285503.765957445,
            "unit": "ns",
            "range": "± 1958661.8229186942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96941582.5,
            "unit": "ns",
            "range": "± 4314665.986790654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201816869.15789473,
            "unit": "ns",
            "range": "± 8749586.735044403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61400.8969072165,
            "unit": "ns",
            "range": "± 10250.929892255035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357081.91509433964,
            "unit": "ns",
            "range": "± 13793.184769791707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319455.0606060606,
            "unit": "ns",
            "range": "± 24978.735698964803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312654.9696969697,
            "unit": "ns",
            "range": "± 28311.177874506197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275692.307692308,
            "unit": "ns",
            "range": "± 51225.09550728792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3563948.5384615385,
            "unit": "ns",
            "range": "± 93833.90896663349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22168.889473684212,
            "unit": "ns",
            "range": "± 3937.3780786115226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97697.48969072165,
            "unit": "ns",
            "range": "± 12120.384994998134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95730.06185567011,
            "unit": "ns",
            "range": "± 10490.73241982977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124436.46153846153,
            "unit": "ns",
            "range": "± 12450.234027526187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7397.71875,
            "unit": "ns",
            "range": "± 1362.2201746693945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16508.8,
            "unit": "ns",
            "range": "± 1666.1499017909812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590678.3163265307,
            "unit": "ns",
            "range": "± 165143.10483682423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2918606.3076923075,
            "unit": "ns",
            "range": "± 150637.81614735507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2501280.8969072164,
            "unit": "ns",
            "range": "± 250973.71393660948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6836026.808080808,
            "unit": "ns",
            "range": "± 418688.16130459914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351992.566666667,
            "unit": "ns",
            "range": "± 59262.90911989033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469347.904761905,
            "unit": "ns",
            "range": "± 124919.32063473757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374448.612903226,
            "unit": "ns",
            "range": "± 130952.95001352647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4349878.285714285,
            "unit": "ns",
            "range": "± 199658.93333466552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7639544.068181818,
            "unit": "ns",
            "range": "± 270772.8479043847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431293.30859375,
            "unit": "ns",
            "range": "± 165049.82230820088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986224.785546875,
            "unit": "ns",
            "range": "± 28032.98169178272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231402.5095052083,
            "unit": "ns",
            "range": "± 20752.939040855345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623499.776785714,
            "unit": "ns",
            "range": "± 11234.611202602973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 751924.2211914062,
            "unit": "ns",
            "range": "± 5789.098473988066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721190.0502554086,
            "unit": "ns",
            "range": "± 3874.3089353450596"
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
          "id": "21a2e69d0ccfa796b993db8859c4028f33b5faec",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-25T16:35:15+09:00",
          "tree_id": "3a0de745647134d4105383210253f90f5ec0efa5",
          "url": "https://github.com/moreal/libplanet/commit/21a2e69d0ccfa796b993db8859c4028f33b5faec"
        },
        "date": 1682409721468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9100864.423913043,
            "unit": "ns",
            "range": "± 655102.3659515372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22877464.944444444,
            "unit": "ns",
            "range": "± 1724039.7367757966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62394552.212765954,
            "unit": "ns",
            "range": "± 4169712.701555159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118630326.12765957,
            "unit": "ns",
            "range": "± 6808304.230211118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261637329.19444445,
            "unit": "ns",
            "range": "± 12787269.299149895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81864.91176470589,
            "unit": "ns",
            "range": "± 8247.782646168083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441755.56842105265,
            "unit": "ns",
            "range": "± 88317.24967214606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 435034.97872340423,
            "unit": "ns",
            "range": "± 87177.35985340629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368381.42045454547,
            "unit": "ns",
            "range": "± 47958.82773610283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4457196.811111111,
            "unit": "ns",
            "range": "± 256756.51252791553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4346714.647368421,
            "unit": "ns",
            "range": "± 394871.52130459296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26997.079545454544,
            "unit": "ns",
            "range": "± 4479.412179779665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127722.57777777778,
            "unit": "ns",
            "range": "± 20996.624268659853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133108.89784946237,
            "unit": "ns",
            "range": "± 24033.610222543044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145843.88461538462,
            "unit": "ns",
            "range": "± 29600.677293215675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11725,
            "unit": "ns",
            "range": "± 1436.4508794990113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27357.447916666668,
            "unit": "ns",
            "range": "± 8387.705254051178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1851961.902173913,
            "unit": "ns",
            "range": "± 270578.2016301127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3457896.840425532,
            "unit": "ns",
            "range": "± 322270.47779293754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2938998.93877551,
            "unit": "ns",
            "range": "± 349823.21634873457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7722328.329787234,
            "unit": "ns",
            "range": "± 771126.4060053575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4179306.564516129,
            "unit": "ns",
            "range": "± 371227.5629595506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4098792.776595745,
            "unit": "ns",
            "range": "± 421579.48146970663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5387070.159793815,
            "unit": "ns",
            "range": "± 516724.22106168995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5182254.427083333,
            "unit": "ns",
            "range": "± 575915.3378961135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9390995.051724138,
            "unit": "ns",
            "range": "± 980369.8634241552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7724694.429259418,
            "unit": "ns",
            "range": "± 382148.92583233776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2460582.052734375,
            "unit": "ns",
            "range": "± 51088.24295873907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358511.1332632212,
            "unit": "ns",
            "range": "± 17024.236592696187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3284268.1915234374,
            "unit": "ns",
            "range": "± 267904.17140473414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041092.861328125,
            "unit": "ns",
            "range": "± 47872.64876178918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996411.1830512153,
            "unit": "ns",
            "range": "± 62452.001495563265"
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
          "id": "d7b01b3eed2d7f7c629940c82845a18883d1974e",
          "message": "Use `IActionEvaluation` interface",
          "timestamp": "2023-04-25T17:31:27+09:00",
          "tree_id": "a4621399f72f951ae0ea8d4674ee67b6b05f01f6",
          "url": "https://github.com/moreal/libplanet/commit/d7b01b3eed2d7f7c629940c82845a18883d1974e"
        },
        "date": 1682412855310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9785211.409090908,
            "unit": "ns",
            "range": "± 1372941.9031243639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21373659.47368421,
            "unit": "ns",
            "range": "± 428335.85641194234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55640929.725,
            "unit": "ns",
            "range": "± 5211143.527906888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114619871.57954545,
            "unit": "ns",
            "range": "± 13959435.317129793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220572655,
            "unit": "ns",
            "range": "± 6220937.856819203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76196.07368421053,
            "unit": "ns",
            "range": "± 9624.970581046064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376347.14130434784,
            "unit": "ns",
            "range": "± 53949.54890676611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350004.1505376344,
            "unit": "ns",
            "range": "± 36946.521079370876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342377.367816092,
            "unit": "ns",
            "range": "± 28281.779009335776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4685686.9375,
            "unit": "ns",
            "range": "± 350908.12679622875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3960433.6224489794,
            "unit": "ns",
            "range": "± 289780.84535280603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24636.344444444443,
            "unit": "ns",
            "range": "± 3504.5838295334315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118627.1404494382,
            "unit": "ns",
            "range": "± 16390.17695647942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124873.0989010989,
            "unit": "ns",
            "range": "± 14114.923993226259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139551.94623655913,
            "unit": "ns",
            "range": "± 23175.02794631099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9639.13440860215,
            "unit": "ns",
            "range": "± 1414.1175446572772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23690.905263157896,
            "unit": "ns",
            "range": "± 3625.037452700681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1717340.081632653,
            "unit": "ns",
            "range": "± 201943.11701601208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3025587.3098591547,
            "unit": "ns",
            "range": "± 132584.86933794428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2683201.015151515,
            "unit": "ns",
            "range": "± 225787.86992067032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6961479.285714285,
            "unit": "ns",
            "range": "± 194986.67335722034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3900860.159090909,
            "unit": "ns",
            "range": "± 310914.7745010759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3892642.397959184,
            "unit": "ns",
            "range": "± 376198.3741892143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4878886.5227272725,
            "unit": "ns",
            "range": "± 404164.11930477177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4738351.094736842,
            "unit": "ns",
            "range": "± 390746.0709047113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8803383.25510204,
            "unit": "ns",
            "range": "± 809218.8485641513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7360006.153645833,
            "unit": "ns",
            "range": "± 84048.29943578267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207098.091532939,
            "unit": "ns",
            "range": "± 74490.1786045242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413395.9484592015,
            "unit": "ns",
            "range": "± 53481.473544005596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2938984.9807535806,
            "unit": "ns",
            "range": "± 229927.8473434465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001434.717462713,
            "unit": "ns",
            "range": "± 36003.11653043055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808319.2259537338,
            "unit": "ns",
            "range": "± 39241.47296704327"
          }
        ]
      }
    ]
  }
}