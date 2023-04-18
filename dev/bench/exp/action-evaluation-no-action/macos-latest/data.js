window.BENCHMARK_DATA = {
  "lastUpdate": 1681480946438,
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
      }
    ]
  }
}