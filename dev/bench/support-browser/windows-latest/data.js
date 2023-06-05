window.BENCHMARK_DATA = {
  "lastUpdate": 1685931268460,
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685700193524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365597.93814433,
            "unit": "ns",
            "range": "± 111027.52472114502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2474693.1818181816,
            "unit": "ns",
            "range": "± 92078.66555345873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110447.8723404254,
            "unit": "ns",
            "range": "± 122531.03598831859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970310.256410256,
            "unit": "ns",
            "range": "± 172776.1295569193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43184.931506849316,
            "unit": "ns",
            "range": "± 2159.0681653124693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6900135.714285715,
            "unit": "ns",
            "range": "± 88275.43091538384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17710973.333333332,
            "unit": "ns",
            "range": "± 119265.7085590625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45147113.333333336,
            "unit": "ns",
            "range": "± 322616.9530278165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89941113.33333333,
            "unit": "ns",
            "range": "± 470476.5894686953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178827650,
            "unit": "ns",
            "range": "± 728482.0527328358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773803.671875,
            "unit": "ns",
            "range": "± 12991.51420290105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518195.3575721155,
            "unit": "ns",
            "range": "± 2470.0433286012576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146918.0814302885,
            "unit": "ns",
            "range": "± 1126.189295428071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624175.1116071427,
            "unit": "ns",
            "range": "± 20386.186901559686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837398.7565104166,
            "unit": "ns",
            "range": "± 4462.019042492021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743523.1515066965,
            "unit": "ns",
            "range": "± 1860.7503596570484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2975835.714285714,
            "unit": "ns",
            "range": "± 36727.978376224244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3144262.5,
            "unit": "ns",
            "range": "± 95998.5811387083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3973731.5789473685,
            "unit": "ns",
            "range": "± 85694.52888429783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006650,
            "unit": "ns",
            "range": "± 93773.14438950873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6368841.176470588,
            "unit": "ns",
            "range": "± 127529.00679268781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264840,
            "unit": "ns",
            "range": "± 11116.714142827157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246509.52380952382,
            "unit": "ns",
            "range": "± 8946.754678647845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220279,
            "unit": "ns",
            "range": "± 13523.016630466695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3856060,
            "unit": "ns",
            "range": "± 29018.95439683715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477150,
            "unit": "ns",
            "range": "± 23975.396042289176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18427.835051546394,
            "unit": "ns",
            "range": "± 1703.045205656206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81311.62790697675,
            "unit": "ns",
            "range": "± 4409.89311874352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67739.2156862745,
            "unit": "ns",
            "range": "± 2748.0231754024603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90566.32653061225,
            "unit": "ns",
            "range": "± 13773.6484088355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4495.876288659794,
            "unit": "ns",
            "range": "± 555.4498037951606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17180.645161290322,
            "unit": "ns",
            "range": "± 1864.3834547107413"
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
          "id": "8e56a5085599c575d16bfaebcf0f4da7d262eb63",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-02T19:00:29+09:00",
          "tree_id": "8a8c5bd975f09ec17d079932c35ee74d95ef6297",
          "url": "https://github.com/moreal/libplanet/commit/8e56a5085599c575d16bfaebcf0f4da7d262eb63"
        },
        "date": 1685701185220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1771826.2626262626,
            "unit": "ns",
            "range": "± 157044.82499700043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3165346.0317460317,
            "unit": "ns",
            "range": "± 143778.13646142988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2679336.170212766,
            "unit": "ns",
            "range": "± 225819.18490032235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6717408.695652174,
            "unit": "ns",
            "range": "± 375988.9806230075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60794.38202247191,
            "unit": "ns",
            "range": "± 4083.123791639797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9466316.216216216,
            "unit": "ns",
            "range": "± 291055.2768361608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23782846.153846152,
            "unit": "ns",
            "range": "± 279451.7657109619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60083183.333333336,
            "unit": "ns",
            "range": "± 454906.5395188002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123743269.23076923,
            "unit": "ns",
            "range": "± 3374659.039460933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250157000,
            "unit": "ns",
            "range": "± 8408715.214816643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6160321.484375,
            "unit": "ns",
            "range": "± 87021.51516255563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941492.0768229167,
            "unit": "ns",
            "range": "± 30694.06221288776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1461809.9834735577,
            "unit": "ns",
            "range": "± 17286.667613299986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276909.6435546875,
            "unit": "ns",
            "range": "± 63675.01128311067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1055189.9348958333,
            "unit": "ns",
            "range": "± 18400.97756778323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955204.0649414062,
            "unit": "ns",
            "range": "± 18207.14405176389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4021608,
            "unit": "ns",
            "range": "± 104890.7960690546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4181918.5185185187,
            "unit": "ns",
            "range": "± 114743.14471574874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5081566.666666667,
            "unit": "ns",
            "range": "± 131204.55843394372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5021838.181818182,
            "unit": "ns",
            "range": "± 213777.35345093234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8165196,
            "unit": "ns",
            "range": "± 328753.5855069469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329251.35135135136,
            "unit": "ns",
            "range": "± 11018.358962850787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309856.6037735849,
            "unit": "ns",
            "range": "± 12941.309965704671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301926.41509433964,
            "unit": "ns",
            "range": "± 12465.986815568256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4937826.666666667,
            "unit": "ns",
            "range": "± 72474.25618468816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4610238.29787234,
            "unit": "ns",
            "range": "± 175806.1884368464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28286.956521739132,
            "unit": "ns",
            "range": "± 2461.537864309532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120495.83333333333,
            "unit": "ns",
            "range": "± 9957.498276666915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110141.41414141415,
            "unit": "ns",
            "range": "± 11073.658854632356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123700,
            "unit": "ns",
            "range": "± 18259.49745507329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8487.755102040815,
            "unit": "ns",
            "range": "± 1443.0255519326056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27256.989247311827,
            "unit": "ns",
            "range": "± 3084.5829063918613"
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
          "id": "f03f27e6d0ef993d58065ea0e782d61e46880510",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-05T10:18:56+09:00",
          "tree_id": "8de438f784d35d1612351fc2ad541d76649ea1d9",
          "url": "https://github.com/moreal/libplanet/commit/f03f27e6d0ef993d58065ea0e782d61e46880510"
        },
        "date": 1685928990505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1361961.7647058824,
            "unit": "ns",
            "range": "± 62044.974129656795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517937.5,
            "unit": "ns",
            "range": "± 115597.76251473339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157958.163265306,
            "unit": "ns",
            "range": "± 133068.4312934548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5238095.180722891,
            "unit": "ns",
            "range": "± 279544.1009335293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46903.333333333336,
            "unit": "ns",
            "range": "± 2985.901328170948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890692.857142857,
            "unit": "ns",
            "range": "± 33001.432702832164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20148928.57142857,
            "unit": "ns",
            "range": "± 318478.02104715153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50152450,
            "unit": "ns",
            "range": "± 1098047.7602018095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100330040,
            "unit": "ns",
            "range": "± 1676560.7776465656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199896526.66666666,
            "unit": "ns",
            "range": "± 2342522.3342331126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4765981.744791667,
            "unit": "ns",
            "range": "± 19282.249572220127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1485728.1510416667,
            "unit": "ns",
            "range": "± 8451.081563480788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178623.744419643,
            "unit": "ns",
            "range": "± 3530.9969361947533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612048.4895833335,
            "unit": "ns",
            "range": "± 6927.3674239445145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901998.671875,
            "unit": "ns",
            "range": "± 3967.321117419434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771622.1549479166,
            "unit": "ns",
            "range": "± 2002.9009852085094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3157106.896551724,
            "unit": "ns",
            "range": "± 90629.21293078299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345729.0322580645,
            "unit": "ns",
            "range": "± 98728.28434158197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4100411.111111111,
            "unit": "ns",
            "range": "± 123666.9023229689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390496.666666667,
            "unit": "ns",
            "range": "± 130338.63450135637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6870259.322033898,
            "unit": "ns",
            "range": "± 303623.7611201959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267140.65934065933,
            "unit": "ns",
            "range": "± 14870.193737226888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252304.08163265305,
            "unit": "ns",
            "range": "± 10027.876960081363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218830.30303030304,
            "unit": "ns",
            "range": "± 10291.011308560193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3853861.5384615385,
            "unit": "ns",
            "range": "± 55625.481847524075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582853.3333333335,
            "unit": "ns",
            "range": "± 63608.66817240137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19223.40425531915,
            "unit": "ns",
            "range": "± 1653.4210563734564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87376.5306122449,
            "unit": "ns",
            "range": "± 7522.55441672983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73928.72340425532,
            "unit": "ns",
            "range": "± 4240.501652724378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86947.91666666667,
            "unit": "ns",
            "range": "± 13243.81865083256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4973.469387755102,
            "unit": "ns",
            "range": "± 799.2975034699092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17329.166666666668,
            "unit": "ns",
            "range": "± 1423.8507215270083"
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
          "id": "bdbadf16e97afca55cc60c5f2a16466750c2ed16",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-05T10:29:24+09:00",
          "tree_id": "6f599bca23e3baf111d0e42737d91aa2c37ead46",
          "url": "https://github.com/moreal/libplanet/commit/bdbadf16e97afca55cc60c5f2a16466750c2ed16"
        },
        "date": 1685929346456,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1093526.2626262626,
            "unit": "ns",
            "range": "± 131844.64465288154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877745.945945946,
            "unit": "ns",
            "range": "± 93501.77961706762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728614.4329896907,
            "unit": "ns",
            "range": "± 181705.51724659392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3803111.86440678,
            "unit": "ns",
            "range": "± 147463.65546939045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34349.47368421053,
            "unit": "ns",
            "range": "± 2380.232139769928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5105733.333333333,
            "unit": "ns",
            "range": "± 69480.35350953191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12890480,
            "unit": "ns",
            "range": "± 108392.85822546482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32958873.333333332,
            "unit": "ns",
            "range": "± 530061.1372644624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66833813.333333336,
            "unit": "ns",
            "range": "± 456698.2887556958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131271273.33333333,
            "unit": "ns",
            "range": "± 874953.5493520838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3580973.2291666665,
            "unit": "ns",
            "range": "± 8248.323208211985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1127957.0703125,
            "unit": "ns",
            "range": "± 3370.0454273210294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 807633.8657924107,
            "unit": "ns",
            "range": "± 853.6615555689557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968479.609375,
            "unit": "ns",
            "range": "± 2325.020214643365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638593.9243861607,
            "unit": "ns",
            "range": "± 696.7920630235815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571924.5744977678,
            "unit": "ns",
            "range": "± 824.359398429891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153904.761904762,
            "unit": "ns",
            "range": "± 77660.70655501954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301227.3333333335,
            "unit": "ns",
            "range": "± 108608.97077743316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2897140,
            "unit": "ns",
            "range": "± 76584.92562726254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2898768.493150685,
            "unit": "ns",
            "range": "± 135781.86640170772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4725154.838709678,
            "unit": "ns",
            "range": "± 204652.38134289527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182045.0704225352,
            "unit": "ns",
            "range": "± 8934.328477961435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174653.44827586206,
            "unit": "ns",
            "range": "± 7466.045138227441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145180,
            "unit": "ns",
            "range": "± 2642.5636902717893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702414.285714286,
            "unit": "ns",
            "range": "± 37802.215180164676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486236.8421052634,
            "unit": "ns",
            "range": "± 52559.01667571539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10900,
            "unit": "ns",
            "range": "± 1559.2551413237927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57061.290322580644,
            "unit": "ns",
            "range": "± 4866.032046975024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45793.023255813954,
            "unit": "ns",
            "range": "± 2491.8120360456996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63555.747126436785,
            "unit": "ns",
            "range": "± 8489.998990903588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2810.3092783505153,
            "unit": "ns",
            "range": "± 744.9111434821262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10737.234042553191,
            "unit": "ns",
            "range": "± 1739.5453640728524"
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
          "id": "343c0273ef936f1d6c04f2f40221897fd10a333b",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T10:47:21+09:00",
          "tree_id": "7b4a51301048797660335c54ce06a3a38b5d9f8a",
          "url": "https://github.com/moreal/libplanet/commit/343c0273ef936f1d6c04f2f40221897fd10a333b"
        },
        "date": 1685930653209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363886.4583333333,
            "unit": "ns",
            "range": "± 107341.94806641522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630752.7027027025,
            "unit": "ns",
            "range": "± 128707.40548030657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132220.253164557,
            "unit": "ns",
            "range": "± 108221.69243158046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5418732.653061224,
            "unit": "ns",
            "range": "± 321109.3290311368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50974.444444444445,
            "unit": "ns",
            "range": "± 2859.934827225967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7303589.583333333,
            "unit": "ns",
            "range": "± 285747.03083998134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19744680,
            "unit": "ns",
            "range": "± 332619.3925280279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49870366.666666664,
            "unit": "ns",
            "range": "± 848776.9248131326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101037393.33333333,
            "unit": "ns",
            "range": "± 1137830.8739920552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201507676.66666666,
            "unit": "ns",
            "range": "± 1444200.7999813138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4867431.484375,
            "unit": "ns",
            "range": "± 27677.68882237839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528815.1692708333,
            "unit": "ns",
            "range": "± 3503.7395714888366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164484.193638393,
            "unit": "ns",
            "range": "± 4910.780814336976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630781.9196428573,
            "unit": "ns",
            "range": "± 9001.415109388305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828439.8828125,
            "unit": "ns",
            "range": "± 3302.774825700255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764033.30078125,
            "unit": "ns",
            "range": "± 2640.862602320809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3302113.3333333335,
            "unit": "ns",
            "range": "± 97449.5014524617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3422900,
            "unit": "ns",
            "range": "± 95939.43602406356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236162.222222222,
            "unit": "ns",
            "range": "± 157396.65915492398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4298537.931034483,
            "unit": "ns",
            "range": "± 187760.90229526488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6831663.888888889,
            "unit": "ns",
            "range": "± 226131.63821453045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269629.4117647059,
            "unit": "ns",
            "range": "± 11027.09923992066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259274.57627118644,
            "unit": "ns",
            "range": "± 11301.351661917426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245630.1204819277,
            "unit": "ns",
            "range": "± 13063.575640761315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4034050,
            "unit": "ns",
            "range": "± 58172.70264766228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785520,
            "unit": "ns",
            "range": "± 66605.82557104145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22680.76923076923,
            "unit": "ns",
            "range": "± 1620.061199645955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96315.46391752578,
            "unit": "ns",
            "range": "± 6662.9938873568935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86343,
            "unit": "ns",
            "range": "± 9026.89869224198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104303.15789473684,
            "unit": "ns",
            "range": "± 12515.543124804717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7201.0204081632655,
            "unit": "ns",
            "range": "± 992.6788600382511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22884.042553191488,
            "unit": "ns",
            "range": "± 3072.153921697261"
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
          "id": "e2f7b554eb7c494d9694f87bfbc2fd40f161e163",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T10:54:57+09:00",
          "tree_id": "bb38724cd7c3aeed7e8399e331813e95036c949e",
          "url": "https://github.com/moreal/libplanet/commit/e2f7b554eb7c494d9694f87bfbc2fd40f161e163"
        },
        "date": 1685931249071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625033.8383838383,
            "unit": "ns",
            "range": "± 125740.85572065019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2992927.5,
            "unit": "ns",
            "range": "± 104084.19665631159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2528501.1363636362,
            "unit": "ns",
            "range": "± 138441.03022322734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6100914.893617021,
            "unit": "ns",
            "range": "± 234169.886285413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54966.85393258427,
            "unit": "ns",
            "range": "± 3244.654203282131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8605370.967741935,
            "unit": "ns",
            "range": "± 259384.1979169746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23143934.615384616,
            "unit": "ns",
            "range": "± 302118.6545221205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59129657.14285714,
            "unit": "ns",
            "range": "± 1037662.706955682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116488026.66666667,
            "unit": "ns",
            "range": "± 1532741.0085327837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237216011.1111111,
            "unit": "ns",
            "range": "± 4996628.357895763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5708740.204326923,
            "unit": "ns",
            "range": "± 31898.2810114197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847467.0963541667,
            "unit": "ns",
            "range": "± 28004.100325519055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393821.40625,
            "unit": "ns",
            "range": "± 15041.577924383335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173200.15625,
            "unit": "ns",
            "range": "± 15957.157063539462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977133.8727678572,
            "unit": "ns",
            "range": "± 3206.660196970849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918314.6419270834,
            "unit": "ns",
            "range": "± 5583.698227056467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3714783.0508474577,
            "unit": "ns",
            "range": "± 164375.86884788587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3939106.896551724,
            "unit": "ns",
            "range": "± 103035.19485743862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4892067.857142857,
            "unit": "ns",
            "range": "± 125159.9333995166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4874676.923076923,
            "unit": "ns",
            "range": "± 145813.94681243712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7922071.794871795,
            "unit": "ns",
            "range": "± 275097.4735852902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312184.54545454547,
            "unit": "ns",
            "range": "± 12407.16964443779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299777.77777777775,
            "unit": "ns",
            "range": "± 11096.90556557607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278233.75,
            "unit": "ns",
            "range": "± 14551.027139785865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4718100,
            "unit": "ns",
            "range": "± 70001.46152320404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4400620,
            "unit": "ns",
            "range": "± 65716.56890443557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23513.157894736843,
            "unit": "ns",
            "range": "± 2237.6399341279266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103088.54166666667,
            "unit": "ns",
            "range": "± 8199.52334675834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84190.69767441861,
            "unit": "ns",
            "range": "± 3106.430653728333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107732.97872340426,
            "unit": "ns",
            "range": "± 13985.433192055043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6284.375,
            "unit": "ns",
            "range": "± 965.9822516621699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22081.720430107525,
            "unit": "ns",
            "range": "± 2139.176306155526"
          }
        ]
      }
    ]
  }
}