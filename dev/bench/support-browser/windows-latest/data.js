window.BENCHMARK_DATA = {
  "lastUpdate": 1685943409753,
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
          "id": "c57dc46d5cbbf97aaf69d4ddd0ef59648ac0c4da",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:05:41+09:00",
          "tree_id": "64d704b67d2435f9805369fd82df8f2240f1d30f",
          "url": "https://github.com/moreal/libplanet/commit/c57dc46d5cbbf97aaf69d4ddd0ef59648ac0c4da"
        },
        "date": 1685931847668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492622.9166666667,
            "unit": "ns",
            "range": "± 89690.96589977773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944493.5483870967,
            "unit": "ns",
            "range": "± 166131.12474818854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2507845.9183673467,
            "unit": "ns",
            "range": "± 157036.56489852065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6192400,
            "unit": "ns",
            "range": "± 293089.54056376487"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55256.52173913043,
            "unit": "ns",
            "range": "± 4383.016783038976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8269264.285714285,
            "unit": "ns",
            "range": "± 299348.64478130545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22710676,
            "unit": "ns",
            "range": "± 601103.4362459315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57365832.258064516,
            "unit": "ns",
            "range": "± 1746227.5150329252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114456580,
            "unit": "ns",
            "range": "± 2593117.3651763136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228465500,
            "unit": "ns",
            "range": "± 4976419.7022893205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5618786.197916667,
            "unit": "ns",
            "range": "± 47981.48701346003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841518.515625,
            "unit": "ns",
            "range": "± 19649.882626808692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391318.37890625,
            "unit": "ns",
            "range": "± 15088.73683331904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3105904.2131696427,
            "unit": "ns",
            "range": "± 7508.148191703297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994384.1796875,
            "unit": "ns",
            "range": "± 12082.591719065007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905986.171875,
            "unit": "ns",
            "range": "± 6874.843555285496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3660680,
            "unit": "ns",
            "range": "± 96961.43133569484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3737472.0588235296,
            "unit": "ns",
            "range": "± 176916.98352160698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4690027.586206896,
            "unit": "ns",
            "range": "± 205299.47897585027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622327.631578947,
            "unit": "ns",
            "range": "± 233680.27707314634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7610610.909090909,
            "unit": "ns",
            "range": "± 317392.5339694187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292158.6206896552,
            "unit": "ns",
            "range": "± 15911.269603679095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284630.76923076925,
            "unit": "ns",
            "range": "± 15906.80980871395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254433.33333333334,
            "unit": "ns",
            "range": "± 17532.07986981019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4663850,
            "unit": "ns",
            "range": "± 98590.28856839806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4029153.5714285714,
            "unit": "ns",
            "range": "± 172743.26611191817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20152.577319587628,
            "unit": "ns",
            "range": "± 1959.224590638749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97109.1836734694,
            "unit": "ns",
            "range": "± 9209.06195044606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83242.85714285714,
            "unit": "ns",
            "range": "± 9201.154118555023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108656.25,
            "unit": "ns",
            "range": "± 14079.210597637624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6465.263157894737,
            "unit": "ns",
            "range": "± 992.8219421097634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21581.720430107525,
            "unit": "ns",
            "range": "± 2931.5356651034836"
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
          "id": "18fa0f488c6104fb68e81908f921449c32997978",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:08:42+09:00",
          "tree_id": "9ab7b2e1c7d00a2db743845dc8e94f02b49b6b24",
          "url": "https://github.com/moreal/libplanet/commit/18fa0f488c6104fb68e81908f921449c32997978"
        },
        "date": 1685931890735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333613.75,
            "unit": "ns",
            "range": "± 65853.37518862779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602926.3157894737,
            "unit": "ns",
            "range": "± 89349.9275826943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232658.163265306,
            "unit": "ns",
            "range": "± 141362.57464404675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5294941.304347826,
            "unit": "ns",
            "range": "± 191537.95513171444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51250.5376344086,
            "unit": "ns",
            "range": "± 2984.2930725031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7414792.857142857,
            "unit": "ns",
            "range": "± 129181.49107887955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19829146.666666668,
            "unit": "ns",
            "range": "± 153274.78530248808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50435142.85714286,
            "unit": "ns",
            "range": "± 421052.8775751161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101480020,
            "unit": "ns",
            "range": "± 969822.8470042498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202690553.84615386,
            "unit": "ns",
            "range": "± 760935.451287191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4815684.791666667,
            "unit": "ns",
            "range": "± 13981.033044990465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531889.2838541667,
            "unit": "ns",
            "range": "± 3701.3639770240225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192103.9583333333,
            "unit": "ns",
            "range": "± 3747.3179353688856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648479.8270089286,
            "unit": "ns",
            "range": "± 8700.968449646492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820318.18359375,
            "unit": "ns",
            "range": "± 2602.54318918654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758320.4361979166,
            "unit": "ns",
            "range": "± 1923.6625924704238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264672,
            "unit": "ns",
            "range": "± 86755.8572470278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470386.6666666665,
            "unit": "ns",
            "range": "± 100647.57815519333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222893.75,
            "unit": "ns",
            "range": "± 76394.97774723153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4400583.333333333,
            "unit": "ns",
            "range": "± 88217.38690837071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6798518.421052632,
            "unit": "ns",
            "range": "± 198887.6524577186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272575.8620689655,
            "unit": "ns",
            "range": "± 10842.09325203876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262541.93548387097,
            "unit": "ns",
            "range": "± 11447.20666602931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244274.24242424243,
            "unit": "ns",
            "range": "± 11463.108862863723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4088271.4285714286,
            "unit": "ns",
            "range": "± 47655.14628067956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808657.1428571427,
            "unit": "ns",
            "range": "± 38590.80628427359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23353.191489361703,
            "unit": "ns",
            "range": "± 2154.799700177207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96225.77319587629,
            "unit": "ns",
            "range": "± 7352.086981918176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85543.87755102041,
            "unit": "ns",
            "range": "± 7296.402394493977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106672.1649484536,
            "unit": "ns",
            "range": "± 16045.03260532187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7068.041237113402,
            "unit": "ns",
            "range": "± 1004.318424744755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21931.9587628866,
            "unit": "ns",
            "range": "± 2827.268498913475"
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
          "id": "8e9322b423b93d0df7ddada4ab5f9df0502c8e3f",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:10:54+09:00",
          "tree_id": "5b035b200afc8070499b53bc27992081ee8d90f4",
          "url": "https://github.com/moreal/libplanet/commit/8e9322b423b93d0df7ddada4ab5f9df0502c8e3f"
        },
        "date": 1685932046958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416522.9166666667,
            "unit": "ns",
            "range": "± 123267.91572929925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569171.4285714286,
            "unit": "ns",
            "range": "± 109546.98736870149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2257932.3232323234,
            "unit": "ns",
            "range": "± 182253.46379972177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5491753.333333333,
            "unit": "ns",
            "range": "± 304244.0560847843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51088.88888888889,
            "unit": "ns",
            "range": "± 2362.7720384730937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6987162.962962963,
            "unit": "ns",
            "range": "± 166936.28021620002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19915818.75,
            "unit": "ns",
            "range": "± 383287.92087889573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50762693.333333336,
            "unit": "ns",
            "range": "± 728053.5659911165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104277328.57142857,
            "unit": "ns",
            "range": "± 1773044.6206492342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205534578.57142857,
            "unit": "ns",
            "range": "± 1425829.3679219023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789470.026041667,
            "unit": "ns",
            "range": "± 20204.250182875916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536779.0597098214,
            "unit": "ns",
            "range": "± 5758.2336108339505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197003.1640625,
            "unit": "ns",
            "range": "± 4984.01562538313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648709.0364583335,
            "unit": "ns",
            "range": "± 6273.551496464342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842300.5784254808,
            "unit": "ns",
            "range": "± 1661.0778493124258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779226.66015625,
            "unit": "ns",
            "range": "± 3550.9545890659806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326166.6666666665,
            "unit": "ns",
            "range": "± 79161.31841583573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573550,
            "unit": "ns",
            "range": "± 103140.71190181356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4305486.956521739,
            "unit": "ns",
            "range": "± 107265.5807896195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4482377.2727272725,
            "unit": "ns",
            "range": "± 104645.20070363012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6983382.608695652,
            "unit": "ns",
            "range": "± 176078.23068215477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281463.2653061224,
            "unit": "ns",
            "range": "± 10887.640046507458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265453.7313432836,
            "unit": "ns",
            "range": "± 12577.328429025714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237583,
            "unit": "ns",
            "range": "± 19506.8030350046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129771.4285714286,
            "unit": "ns",
            "range": "± 114715.07007184062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879050,
            "unit": "ns",
            "range": "± 49668.62111108907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22911.827956989247,
            "unit": "ns",
            "range": "± 2971.708974807096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110176.76767676767,
            "unit": "ns",
            "range": "± 13950.918543987895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81719.56521739131,
            "unit": "ns",
            "range": "± 10813.557212550666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98936.7469879518,
            "unit": "ns",
            "range": "± 9220.665695828506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6557.731958762886,
            "unit": "ns",
            "range": "± 1199.5515699927892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21932.291666666668,
            "unit": "ns",
            "range": "± 3064.516611376663"
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
          "id": "e912b75e868787fd9a4f9c3d14261844af37c817",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T11:12:54+09:00",
          "tree_id": "5b035b200afc8070499b53bc27992081ee8d90f4",
          "url": "https://github.com/moreal/libplanet/commit/e912b75e868787fd9a4f9c3d14261844af37c817"
        },
        "date": 1685932056388,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051863.6842105263,
            "unit": "ns",
            "range": "± 129093.15176269761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885769.8630136987,
            "unit": "ns",
            "range": "± 92371.52441955305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681501.0416666667,
            "unit": "ns",
            "range": "± 174298.12360906342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4109324.4680851065,
            "unit": "ns",
            "range": "± 398349.3772859732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34347.67441860465,
            "unit": "ns",
            "range": "± 1870.1196403493136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5199333.333333333,
            "unit": "ns",
            "range": "± 56316.46126599051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13012753.333333334,
            "unit": "ns",
            "range": "± 186530.27661813537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33133826.666666668,
            "unit": "ns",
            "range": "± 231843.29826928567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66657978.94736842,
            "unit": "ns",
            "range": "± 1453066.1981475002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135623607.69230768,
            "unit": "ns",
            "range": "± 840681.9508208187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753253.605769231,
            "unit": "ns",
            "range": "± 14261.76603037726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1151105.9375,
            "unit": "ns",
            "range": "± 5069.598155796118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 809338.90625,
            "unit": "ns",
            "range": "± 1841.8147831696174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957555.7552083333,
            "unit": "ns",
            "range": "± 3999.6195706702933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628261.0872395834,
            "unit": "ns",
            "range": "± 1129.066002889489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587043.8895089285,
            "unit": "ns",
            "range": "± 870.6947356233596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2617413.3333333335,
            "unit": "ns",
            "range": "± 32676.288184611934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2365477.777777778,
            "unit": "ns",
            "range": "± 61243.43188226758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2855831.25,
            "unit": "ns",
            "range": "± 54472.28920897915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3040986.6666666665,
            "unit": "ns",
            "range": "± 193938.94799797644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4815264.150943397,
            "unit": "ns",
            "range": "± 198915.7360197641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188773.2142857143,
            "unit": "ns",
            "range": "± 8082.247461317553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182742.3076923077,
            "unit": "ns",
            "range": "± 7249.7828541881745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147283.58208955225,
            "unit": "ns",
            "range": "± 6990.547666040874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2776720,
            "unit": "ns",
            "range": "± 48089.621689983316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484244.6808510637,
            "unit": "ns",
            "range": "± 94736.36143326026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10687.09677419355,
            "unit": "ns",
            "range": "± 1107.5065812398052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55816.84210526316,
            "unit": "ns",
            "range": "± 5022.601102666443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49851.041666666664,
            "unit": "ns",
            "range": "± 4521.341086370087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69505.81395348837,
            "unit": "ns",
            "range": "± 12066.398211573893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2950.5154639175257,
            "unit": "ns",
            "range": "± 720.8391682818088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10503.296703296703,
            "unit": "ns",
            "range": "± 1887.7647304830327"
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
          "id": "a86d2daf017aa65a7a0b32d237beffdc12395d8f",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T11:28:30+09:00",
          "tree_id": "e176512838743dea1d18aafeb02e7d79a4bee501",
          "url": "https://github.com/moreal/libplanet/commit/a86d2daf017aa65a7a0b32d237beffdc12395d8f"
        },
        "date": 1685932936394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296389,
            "unit": "ns",
            "range": "± 103668.70396029884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2450407.1428571427,
            "unit": "ns",
            "range": "± 101466.19653343197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2019405.3763440861,
            "unit": "ns",
            "range": "± 117247.16587433296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4918030.303030303,
            "unit": "ns",
            "range": "± 152113.13734530067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47371.42857142857,
            "unit": "ns",
            "range": "± 2180.2950800166245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6735114.285714285,
            "unit": "ns",
            "range": "± 58254.80973398555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18822607.14285714,
            "unit": "ns",
            "range": "± 292598.36600912316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46741645,
            "unit": "ns",
            "range": "± 1054218.0936224975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94676123.52941176,
            "unit": "ns",
            "range": "± 1835042.5279572583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190559210.86956522,
            "unit": "ns",
            "range": "± 4779823.686054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4658251.618303572,
            "unit": "ns",
            "range": "± 11152.19810781688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475037.8645833333,
            "unit": "ns",
            "range": "± 7973.889180465319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196361.3671875,
            "unit": "ns",
            "range": "± 6927.874864297655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586977.8645833335,
            "unit": "ns",
            "range": "± 7945.494159490636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822049.2396763393,
            "unit": "ns",
            "range": "± 3373.583269945064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765034.7005208334,
            "unit": "ns",
            "range": "± 3223.8275886492893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896791.6666666665,
            "unit": "ns",
            "range": "± 33887.20483479202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106090.566037736,
            "unit": "ns",
            "range": "± 128162.52191913767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3892715.909090909,
            "unit": "ns",
            "range": "± 144221.46397553783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3949217.2413793104,
            "unit": "ns",
            "range": "± 115722.89583608619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6368007.407407408,
            "unit": "ns",
            "range": "± 174635.7988807342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249357.14285714287,
            "unit": "ns",
            "range": "± 8154.186427996419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238081.94444444444,
            "unit": "ns",
            "range": "± 10715.571483697087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206895.2380952381,
            "unit": "ns",
            "range": "± 4884.923355639901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3796057.1428571427,
            "unit": "ns",
            "range": "± 54821.51057730918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3403053.3333333335,
            "unit": "ns",
            "range": "± 63046.33065868155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16892.708333333332,
            "unit": "ns",
            "range": "± 1135.1554302725212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79631.16883116883,
            "unit": "ns",
            "range": "± 4049.9597054610094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68519.04761904762,
            "unit": "ns",
            "range": "± 1557.7609083614363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79154.28571428571,
            "unit": "ns",
            "range": "± 3351.732656588565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4722.680412371134,
            "unit": "ns",
            "range": "± 660.7295769701561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16134.09090909091,
            "unit": "ns",
            "range": "± 915.4970214251078"
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
          "id": "7b3bfc625bd29d55d16821003cce00de9280d659",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T13:24:09+09:00",
          "tree_id": "7b038ef64c75fcdece5696fdd446259c03136ccd",
          "url": "https://github.com/moreal/libplanet/commit/7b3bfc625bd29d55d16821003cce00de9280d659"
        },
        "date": 1685940023308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346670.8333333333,
            "unit": "ns",
            "range": "± 108946.62325789747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498639.285714286,
            "unit": "ns",
            "range": "± 106740.4663463869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139993.6842105263,
            "unit": "ns",
            "range": "± 122570.17079288536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5344047.872340426,
            "unit": "ns",
            "range": "± 303171.12621359236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48831.914893617024,
            "unit": "ns",
            "range": "± 3455.125933809862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6847064.285714285,
            "unit": "ns",
            "range": "± 41514.99464313804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19367621.42857143,
            "unit": "ns",
            "range": "± 232672.36184607953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49566313.333333336,
            "unit": "ns",
            "range": "± 926236.1908488004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96963140,
            "unit": "ns",
            "range": "± 1621824.8737588336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192514893.75,
            "unit": "ns",
            "range": "± 3708936.1907818886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4746470.416666667,
            "unit": "ns",
            "range": "± 23057.812993233434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502309.0755208333,
            "unit": "ns",
            "range": "± 8833.695601870617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173047.34375,
            "unit": "ns",
            "range": "± 7665.954719176276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649865.4947916665,
            "unit": "ns",
            "range": "± 6569.053162210787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832580.44921875,
            "unit": "ns",
            "range": "± 3072.325397342715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760908.65234375,
            "unit": "ns",
            "range": "± 3182.5685700007484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3029112.5,
            "unit": "ns",
            "range": "± 141575.8721958942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3223238.095238095,
            "unit": "ns",
            "range": "± 111204.57077897944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4008990.909090909,
            "unit": "ns",
            "range": "± 125217.62646397961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999840,
            "unit": "ns",
            "range": "± 188504.88702533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691894.545454546,
            "unit": "ns",
            "range": "± 283395.96589968516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261744.18604651163,
            "unit": "ns",
            "range": "± 9600.62751732757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252242,
            "unit": "ns",
            "range": "± 9551.687317549968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223260.20408163266,
            "unit": "ns",
            "range": "± 13396.904857157706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3981275,
            "unit": "ns",
            "range": "± 102617.99253203285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3490217.2413793104,
            "unit": "ns",
            "range": "± 101735.31157218547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19267.021276595744,
            "unit": "ns",
            "range": "± 1686.594092824661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86588.04347826086,
            "unit": "ns",
            "range": "± 5394.967993087681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69130.43478260869,
            "unit": "ns",
            "range": "± 2617.0271144706153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98744.79166666667,
            "unit": "ns",
            "range": "± 16134.199504169734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5203.092783505154,
            "unit": "ns",
            "range": "± 870.3990474019447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19483.157894736843,
            "unit": "ns",
            "range": "± 2363.4923957125957"
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685940593118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368535.1063829786,
            "unit": "ns",
            "range": "± 103137.55790721354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651180,
            "unit": "ns",
            "range": "± 173300.0247716618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202321.649484536,
            "unit": "ns",
            "range": "± 134864.131649539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5690457.575757576,
            "unit": "ns",
            "range": "± 438951.4238130826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52607.21649484536,
            "unit": "ns",
            "range": "± 4746.758706007545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7271957.142857143,
            "unit": "ns",
            "range": "± 123091.0964366555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22619528.57142857,
            "unit": "ns",
            "range": "± 515561.0818737748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58360213.333333336,
            "unit": "ns",
            "range": "± 981806.0107101946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115145800,
            "unit": "ns",
            "range": "± 1361801.343244138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233149500,
            "unit": "ns",
            "range": "± 2296297.1513520833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5031361.272321428,
            "unit": "ns",
            "range": "± 19937.429956100696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1597075.7393973214,
            "unit": "ns",
            "range": "± 6254.728488119857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213525.9765625,
            "unit": "ns",
            "range": "± 5834.965835963103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2709846.9791666665,
            "unit": "ns",
            "range": "± 13679.065475593103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853106.1298076923,
            "unit": "ns",
            "range": "± 3340.5034211504435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782340.8482142857,
            "unit": "ns",
            "range": "± 2778.723896304512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3566123.529411765,
            "unit": "ns",
            "range": "± 144278.76571170866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779250.684931507,
            "unit": "ns",
            "range": "± 187887.37326985705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4624305.882352941,
            "unit": "ns",
            "range": "± 184182.05820520598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4758565,
            "unit": "ns",
            "range": "± 208395.27046993483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7333291.428571428,
            "unit": "ns",
            "range": "± 239079.95631713892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301620.61855670105,
            "unit": "ns",
            "range": "± 20181.52485434972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284609.4736842105,
            "unit": "ns",
            "range": "± 16321.282761984137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259933,
            "unit": "ns",
            "range": "± 26342.649119370333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303004.545454546,
            "unit": "ns",
            "range": "± 161017.477679888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952426.470588235,
            "unit": "ns",
            "range": "± 120550.26188984921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20938.144329896906,
            "unit": "ns",
            "range": "± 1865.2771967240035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92348.95833333333,
            "unit": "ns",
            "range": "± 8647.451645203942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75725.26315789473,
            "unit": "ns",
            "range": "± 6583.909600040129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115620.87912087912,
            "unit": "ns",
            "range": "± 15610.270952759252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7074.489795918367,
            "unit": "ns",
            "range": "± 1622.859333836601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22887.755102040817,
            "unit": "ns",
            "range": "± 3524.882547026855"
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
          "id": "4a3b31654e8675aec57d36e6b754d8227524f113",
          "message": "Configure rootDir",
          "timestamp": "2023-06-05T13:41:23+09:00",
          "tree_id": "3e5143ce4915e059a1229a3f503b857ab005f75d",
          "url": "https://github.com/moreal/libplanet/commit/4a3b31654e8675aec57d36e6b754d8227524f113"
        },
        "date": 1685940962738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371312.121212121,
            "unit": "ns",
            "range": "± 122595.6463527079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2526553.703703704,
            "unit": "ns",
            "range": "± 104997.95094669654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2116792.222222222,
            "unit": "ns",
            "range": "± 115940.754172777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5092610.204081632,
            "unit": "ns",
            "range": "± 194411.23429140478"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46342.1686746988,
            "unit": "ns",
            "range": "± 2391.301333743377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6855653.333333333,
            "unit": "ns",
            "range": "± 80899.54853014293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19066343.333333332,
            "unit": "ns",
            "range": "± 271845.8582849234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47962153.333333336,
            "unit": "ns",
            "range": "± 778137.1563517823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99368690.47619048,
            "unit": "ns",
            "range": "± 2324068.4219499133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187299258.82352942,
            "unit": "ns",
            "range": "± 3765973.5705158007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4717001.897321428,
            "unit": "ns",
            "range": "± 21637.24815378092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1491997.3697916667,
            "unit": "ns",
            "range": "± 6812.371549729413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164211.7578125,
            "unit": "ns",
            "range": "± 7202.103192276161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600818.0803571427,
            "unit": "ns",
            "range": "± 8131.066073878541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815747.3557692308,
            "unit": "ns",
            "range": "± 1842.646142063529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761713.9778645834,
            "unit": "ns",
            "range": "± 2057.95247484727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2949983.6363636362,
            "unit": "ns",
            "range": "± 125671.50854750673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3137838.709677419,
            "unit": "ns",
            "range": "± 86919.39053866462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3843358.695652174,
            "unit": "ns",
            "range": "± 131486.56133458734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3874658.9743589745,
            "unit": "ns",
            "range": "± 197949.24669991614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6142536.842105263,
            "unit": "ns",
            "range": "± 131779.63596906903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252243.75,
            "unit": "ns",
            "range": "± 6326.540995499985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241643.5483870968,
            "unit": "ns",
            "range": "± 8630.761244615374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219300,
            "unit": "ns",
            "range": "± 7070.984622343041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3796664.285714286,
            "unit": "ns",
            "range": "± 55730.08588300823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3476538.709677419,
            "unit": "ns",
            "range": "± 104615.07755392099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18108.42105263158,
            "unit": "ns",
            "range": "± 1465.610261239305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82020.87912087912,
            "unit": "ns",
            "range": "± 5518.967626558762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68990.90909090909,
            "unit": "ns",
            "range": "± 1613.60557253715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87746.8085106383,
            "unit": "ns",
            "range": "± 11508.610167367862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5297.938144329897,
            "unit": "ns",
            "range": "± 1070.8232212340288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17894.791666666668,
            "unit": "ns",
            "range": "± 1990.4175595596794"
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
          "id": "189e1b8200b8f33eaa8c7d965a59cf2d7fea6770",
          "message": "Use test.alias to bypass import-map error",
          "timestamp": "2023-06-05T14:07:14+09:00",
          "tree_id": "557fe4e48fec937f55cdcf6ed227382edb31ed5b",
          "url": "https://github.com/moreal/libplanet/commit/189e1b8200b8f33eaa8c7d965a59cf2d7fea6770"
        },
        "date": 1685943381405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1766424.4897959183,
            "unit": "ns",
            "range": "± 211240.38491445986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3155972.9166666665,
            "unit": "ns",
            "range": "± 348948.43608797796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2625726.0416666665,
            "unit": "ns",
            "range": "± 271308.4984195906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6316544.791666667,
            "unit": "ns",
            "range": "± 708955.0494057086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63988.04347826087,
            "unit": "ns",
            "range": "± 12297.116988946927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8174907.142857143,
            "unit": "ns",
            "range": "± 506708.921353652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24509234.615384616,
            "unit": "ns",
            "range": "± 846273.244270201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59573089,
            "unit": "ns",
            "range": "± 4511447.83631339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136130901.58730158,
            "unit": "ns",
            "range": "± 5776252.291047903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232785618.36734694,
            "unit": "ns",
            "range": "± 16667114.517035905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5637162.216796875,
            "unit": "ns",
            "range": "± 292161.5266223308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844559.3378631163,
            "unit": "ns",
            "range": "± 90134.47496719116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344557.9140625,
            "unit": "ns",
            "range": "± 93837.74580315912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2914324.46484375,
            "unit": "ns",
            "range": "± 218224.95287344386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972187.255859375,
            "unit": "ns",
            "range": "± 65584.21573234555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931877.822265625,
            "unit": "ns",
            "range": "± 62316.865990037484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3695414.8936170214,
            "unit": "ns",
            "range": "± 305496.17950110853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202792.783505155,
            "unit": "ns",
            "range": "± 429137.46225408895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5311709.278350515,
            "unit": "ns",
            "range": "± 407008.0819433222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4898275.268817204,
            "unit": "ns",
            "range": "± 410574.8045637847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8355470.3125,
            "unit": "ns",
            "range": "± 383971.295091012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322702.0833333333,
            "unit": "ns",
            "range": "± 38333.30551105017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313279.1208791209,
            "unit": "ns",
            "range": "± 33608.76379254381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264651.6129032258,
            "unit": "ns",
            "range": "± 33459.9715848239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116007.1428571427,
            "unit": "ns",
            "range": "± 404708.2174711304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4280235,
            "unit": "ns",
            "range": "± 445986.09104891476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29454,
            "unit": "ns",
            "range": "± 9953.228195673579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104690.4255319149,
            "unit": "ns",
            "range": "± 20005.531864794786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103110.52631578948,
            "unit": "ns",
            "range": "± 22370.556607101535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139017.8947368421,
            "unit": "ns",
            "range": "± 27360.189975961734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6237.037037037037,
            "unit": "ns",
            "range": "± 1495.196010933386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29965.30612244898,
            "unit": "ns",
            "range": "± 8946.24383589573"
          }
        ]
      }
    ]
  }
}