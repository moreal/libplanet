window.BENCHMARK_DATA = {
  "lastUpdate": 1685701204434,
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
      }
    ]
  }
}