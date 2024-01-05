window.BENCHMARK_DATA = {
  "lastUpdate": 1704439661442,
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
          "id": "76a4c7cff0f08f0b39b4f234e58fec345a6c3b80",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:57:38+09:00",
          "tree_id": "da2eabc4a2cbae8c2835a7da552df63cf85b46e1",
          "url": "https://github.com/moreal/libplanet/commit/76a4c7cff0f08f0b39b4f234e58fec345a6c3b80"
        },
        "date": 1704233429137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036755.5555555555,
            "unit": "ns",
            "range": "± 109092.96468292834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1791877.1186440678,
            "unit": "ns",
            "range": "± 79062.56106555303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1629540.206185567,
            "unit": "ns",
            "range": "± 166344.50112379342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11087440.65934066,
            "unit": "ns",
            "range": "± 911380.3821039846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36955.494505494506,
            "unit": "ns",
            "range": "± 2823.487309353557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5376286.666666667,
            "unit": "ns",
            "range": "± 62250.94223804014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13779969.23076923,
            "unit": "ns",
            "range": "± 122260.03970100904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33636771.428571425,
            "unit": "ns",
            "range": "± 315168.84712452494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67653506.66666667,
            "unit": "ns",
            "range": "± 503996.9181689602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138485500,
            "unit": "ns",
            "range": "± 1259518.8531453474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3384587.3046875,
            "unit": "ns",
            "range": "± 6064.749878371126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043468.8616071428,
            "unit": "ns",
            "range": "± 2362.943300090403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728625.1727764423,
            "unit": "ns",
            "range": "± 1187.5175837194358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909264.1183035714,
            "unit": "ns",
            "range": "± 5152.800976144931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623996.8674879808,
            "unit": "ns",
            "range": "± 768.1631846170069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554689.8307291666,
            "unit": "ns",
            "range": "± 1632.3508249126116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295742.3076923075,
            "unit": "ns",
            "range": "± 79194.70139311682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2369906.976744186,
            "unit": "ns",
            "range": "± 63555.736301554876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2939829.1666666665,
            "unit": "ns",
            "range": "± 66786.2162241299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2972750.7462686566,
            "unit": "ns",
            "range": "± 120915.7349626419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12593964.835164836,
            "unit": "ns",
            "range": "± 1539859.0302992477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185268.42105263157,
            "unit": "ns",
            "range": "± 7473.337318540608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180559.78260869565,
            "unit": "ns",
            "range": "± 12114.481931956243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150992.3076923077,
            "unit": "ns",
            "range": "± 7408.713179023126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2940120,
            "unit": "ns",
            "range": "± 49070.6225760383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2631706.6666666665,
            "unit": "ns",
            "range": "± 38308.34423588728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13000,
            "unit": "ns",
            "range": "± 1852.6628270038232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61858.94736842105,
            "unit": "ns",
            "range": "± 8757.08217626632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46136.92307692308,
            "unit": "ns",
            "range": "± 2154.8324493137243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59196.25,
            "unit": "ns",
            "range": "± 7315.346167951454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3056.122448979592,
            "unit": "ns",
            "range": "± 803.6086556587175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12425.531914893618,
            "unit": "ns",
            "range": "± 1998.9748001559844"
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
          "id": "8d3c69a0d7f8fc0083d382a1eeffe288cbc3aa18",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T06:59:56+09:00",
          "tree_id": "bf99d0523325474b69191e39aac516cb577b9fb1",
          "url": "https://github.com/moreal/libplanet/commit/8d3c69a0d7f8fc0083d382a1eeffe288cbc3aa18"
        },
        "date": 1704233477859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1067280.808080808,
            "unit": "ns",
            "range": "± 137519.18209558367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2167171.4285714286,
            "unit": "ns",
            "range": "± 30703.900493170335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592096.8421052631,
            "unit": "ns",
            "range": "± 145208.23305642288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10960095.054945055,
            "unit": "ns",
            "range": "± 878419.0952771329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34571.60493827161,
            "unit": "ns",
            "range": "± 1788.1718714864376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5090764.285714285,
            "unit": "ns",
            "range": "± 42290.749254742135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13521415.384615384,
            "unit": "ns",
            "range": "± 174825.48844563944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33578900,
            "unit": "ns",
            "range": "± 364896.43578165275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66599440,
            "unit": "ns",
            "range": "± 723618.3107925653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131348766.66666667,
            "unit": "ns",
            "range": "± 923478.4564481239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3341811.5625,
            "unit": "ns",
            "range": "± 7031.6067862727095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1092828.4895833333,
            "unit": "ns",
            "range": "± 1810.1614158972648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730228.4254807692,
            "unit": "ns",
            "range": "± 899.083175148788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973879.3569711538,
            "unit": "ns",
            "range": "± 3818.3491043331933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615940.2762276785,
            "unit": "ns",
            "range": "± 1049.4250177954214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557127.1135602678,
            "unit": "ns",
            "range": "± 1365.740584589294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166090.909090909,
            "unit": "ns",
            "range": "± 50678.52845883794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273651.6129032257,
            "unit": "ns",
            "range": "± 39344.75713457251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2856265.217391304,
            "unit": "ns",
            "range": "± 69874.03346994994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2973536,
            "unit": "ns",
            "range": "± 70637.78427064844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12350934.40860215,
            "unit": "ns",
            "range": "± 1590130.333015848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184227.39726027398,
            "unit": "ns",
            "range": "± 9156.847168982536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175544.73684210525,
            "unit": "ns",
            "range": "± 6036.317893605342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145200,
            "unit": "ns",
            "range": "± 3785.8034407913588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2903093.3333333335,
            "unit": "ns",
            "range": "± 38391.78607586834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2536450,
            "unit": "ns",
            "range": "± 41193.628148052216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12788.172043010753,
            "unit": "ns",
            "range": "± 1611.4299255202147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59194.444444444445,
            "unit": "ns",
            "range": "± 5160.7716762739765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46665.217391304344,
            "unit": "ns",
            "range": "± 3219.3929802080547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67879.59183673469,
            "unit": "ns",
            "range": "± 13929.29094474797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3453.6082474226805,
            "unit": "ns",
            "range": "± 815.0999243024982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11895.555555555555,
            "unit": "ns",
            "range": "± 1547.6630524262034"
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
          "id": "caac4fd21bcf2fe773b62d806bc5441e94544e30",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-03T07:01:07+09:00",
          "tree_id": "7ed86ebe8a9b616fbcc0d9f7ea3f8e81b20d7f3b",
          "url": "https://github.com/moreal/libplanet/commit/caac4fd21bcf2fe773b62d806bc5441e94544e30"
        },
        "date": 1704233603427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949064.9484536082,
            "unit": "ns",
            "range": "± 91854.5068314981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698576.3636363635,
            "unit": "ns",
            "range": "± 62185.15651050249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1478216.1616161617,
            "unit": "ns",
            "range": "± 129894.57947486955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10741082.795698924,
            "unit": "ns",
            "range": "± 1050689.030508661"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34409.09090909091,
            "unit": "ns",
            "range": "± 1632.6219848619417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5161450,
            "unit": "ns",
            "range": "± 33258.075942312345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12856266.666666666,
            "unit": "ns",
            "range": "± 53595.291193305755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31332264.285714287,
            "unit": "ns",
            "range": "± 246124.767006626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63185957.14285714,
            "unit": "ns",
            "range": "± 454845.03314406343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128791676.92307693,
            "unit": "ns",
            "range": "± 818599.9299147357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335411.356026786,
            "unit": "ns",
            "range": "± 6451.227716992874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049559.9190848214,
            "unit": "ns",
            "range": "± 1413.3790797194943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722060,
            "unit": "ns",
            "range": "± 1735.731814092436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920991.392299107,
            "unit": "ns",
            "range": "± 6572.516139688639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607360.9635416666,
            "unit": "ns",
            "range": "± 1419.4002986042847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569475,
            "unit": "ns",
            "range": "± 1992.2390451468077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096386.3636363635,
            "unit": "ns",
            "range": "± 75281.39950911341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237528.2608695654,
            "unit": "ns",
            "range": "± 84745.94428327393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2789017.6470588236,
            "unit": "ns",
            "range": "± 56320.82469315988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2741859.6153846155,
            "unit": "ns",
            "range": "± 112514.66703451771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12263259.139784947,
            "unit": "ns",
            "range": "± 1477819.5362731393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169203.94736842104,
            "unit": "ns",
            "range": "± 8435.86693097947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158574.1379310345,
            "unit": "ns",
            "range": "± 6359.729673854142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140590.47619047618,
            "unit": "ns",
            "range": "± 4593.251121512184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2805680,
            "unit": "ns",
            "range": "± 36794.10278835455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460147.3684210526,
            "unit": "ns",
            "range": "± 54336.33292764052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9732.954545454546,
            "unit": "ns",
            "range": "± 1173.923727271225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49905.494505494506,
            "unit": "ns",
            "range": "± 3493.3703126974874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43681.48148148148,
            "unit": "ns",
            "range": "± 1620.3975838784977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49101.041666666664,
            "unit": "ns",
            "range": "± 8987.599583422141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2610.824742268041,
            "unit": "ns",
            "range": "± 691.2483726670005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9160.439560439561,
            "unit": "ns",
            "range": "± 949.1375173609074"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "d0f3757019be6547a42ca257a0e30bdfd7519e69",
          "message": "ci(gh-actions): bump `tj-actions/changed-files` action",
          "timestamp": "2024-01-05T16:16:27+09:00",
          "tree_id": "cfbe8cf86db0c7ffdfa9ba174e7acc0a59ddadc4",
          "url": "https://github.com/moreal/libplanet/commit/d0f3757019be6547a42ca257a0e30bdfd7519e69"
        },
        "date": 1704439646244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001942.3913043478,
            "unit": "ns",
            "range": "± 102927.77285547403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748554.054054054,
            "unit": "ns",
            "range": "± 59305.31452011978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1550865.9793814432,
            "unit": "ns",
            "range": "± 186375.5482255507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10853865.957446808,
            "unit": "ns",
            "range": "± 886651.2343090499"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34347.22222222222,
            "unit": "ns",
            "range": "± 1704.6723052339453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4913985.714285715,
            "unit": "ns",
            "range": "± 24442.360994572744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13171314.285714285,
            "unit": "ns",
            "range": "± 138951.85584136055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33251966.666666668,
            "unit": "ns",
            "range": "± 430623.44449922943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66453714.28571428,
            "unit": "ns",
            "range": "± 410091.20159590547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131012506.66666667,
            "unit": "ns",
            "range": "± 1633592.017377073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318282.7604166665,
            "unit": "ns",
            "range": "± 10633.009651520388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062296.1495535714,
            "unit": "ns",
            "range": "± 3029.0925910060687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733847.7678571428,
            "unit": "ns",
            "range": "± 1843.3394438676528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1887266.1690848214,
            "unit": "ns",
            "range": "± 3273.2357020992567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608639.6033653846,
            "unit": "ns",
            "range": "± 1198.5576913307418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552224.7746394231,
            "unit": "ns",
            "range": "± 780.08026584731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210835.135135135,
            "unit": "ns",
            "range": "± 75068.55465438175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2261432.6530612246,
            "unit": "ns",
            "range": "± 54702.97214562136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858700,
            "unit": "ns",
            "range": "± 61107.79982948167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2837818.75,
            "unit": "ns",
            "range": "± 147882.17606736018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12475280,
            "unit": "ns",
            "range": "± 1511509.130440255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177828.57142857142,
            "unit": "ns",
            "range": "± 6880.740028029931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166804,
            "unit": "ns",
            "range": "± 8167.427726994324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142123.33333333334,
            "unit": "ns",
            "range": "± 4133.707806544272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2914064.285714286,
            "unit": "ns",
            "range": "± 42811.38610486445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470093.3333333335,
            "unit": "ns",
            "range": "± 32890.26053553298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12209.89010989011,
            "unit": "ns",
            "range": "± 1432.9499444661503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56951.6129032258,
            "unit": "ns",
            "range": "± 4840.805109627624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46467.03296703297,
            "unit": "ns",
            "range": "± 3052.2143125954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64234.343434343435,
            "unit": "ns",
            "range": "± 14056.004321025448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2782.978723404255,
            "unit": "ns",
            "range": "± 496.577165466626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11306.593406593407,
            "unit": "ns",
            "range": "± 1277.7412533931551"
          }
        ]
      }
    ]
  }
}