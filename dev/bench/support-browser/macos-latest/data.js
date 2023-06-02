window.BENCHMARK_DATA = {
  "lastUpdate": 1685701553632,
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
        "date": 1685700574288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8938986.5,
            "unit": "ns",
            "range": "± 147836.96966929483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23230051.1,
            "unit": "ns",
            "range": "± 425413.573335038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58074157,
            "unit": "ns",
            "range": "± 1186068.1990462753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117471318.58823529,
            "unit": "ns",
            "range": "± 2277707.048711326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232406064.73333332,
            "unit": "ns",
            "range": "± 3986068.1025109277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65685.38764044944,
            "unit": "ns",
            "range": "± 6481.78215258701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374523,
            "unit": "ns",
            "range": "± 17381.49470886453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363736.50666666665,
            "unit": "ns",
            "range": "± 18348.73182846141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340929.5326086957,
            "unit": "ns",
            "range": "± 27232.666003905008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4874759.391304348,
            "unit": "ns",
            "range": "± 120735.64221311222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4432077,
            "unit": "ns",
            "range": "± 127674.7388724287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20251.965909090908,
            "unit": "ns",
            "range": "± 1396.782031958266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97710.75842696629,
            "unit": "ns",
            "range": "± 6221.165892134415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101236.76288659793,
            "unit": "ns",
            "range": "± 12206.261506884144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119826.79347826086,
            "unit": "ns",
            "range": "± 14638.262223874188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7459.762886597938,
            "unit": "ns",
            "range": "± 1093.0795352008533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20138.90322580645,
            "unit": "ns",
            "range": "± 1736.5887166994212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1969490.7674418604,
            "unit": "ns",
            "range": "± 256042.19562020607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3888944.388888889,
            "unit": "ns",
            "range": "± 582041.2595897709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3654056.989361702,
            "unit": "ns",
            "range": "± 903630.3524503971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8756413.005747126,
            "unit": "ns",
            "range": "± 1053947.9672391259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3913326.359375,
            "unit": "ns",
            "range": "± 179179.68599574972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4133902.0588235296,
            "unit": "ns",
            "range": "± 244646.94934593054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5239531.261904762,
            "unit": "ns",
            "range": "± 187270.1812521097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5263434.0322580645,
            "unit": "ns",
            "range": "± 353268.3615309315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9227321.25,
            "unit": "ns",
            "range": "± 515741.6784865923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217333.050130208,
            "unit": "ns",
            "range": "± 33423.99133986821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2290341.4235839844,
            "unit": "ns",
            "range": "± 44248.17120121693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1507340.6005859375,
            "unit": "ns",
            "range": "± 9824.936550343162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2967086.1007254464,
            "unit": "ns",
            "range": "± 52199.76185909397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975718.8763521635,
            "unit": "ns",
            "range": "± 11869.241582248975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888647.1665414664,
            "unit": "ns",
            "range": "± 8562.482201204477"
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
        "date": 1685701536110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9358341.372093024,
            "unit": "ns",
            "range": "± 1447717.505977175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21953272.775862068,
            "unit": "ns",
            "range": "± 2217136.6800946095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59346710.98863637,
            "unit": "ns",
            "range": "± 10704532.275165768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107901329.84117647,
            "unit": "ns",
            "range": "± 6330529.528870852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281454270.8010753,
            "unit": "ns",
            "range": "± 54998468.30126122"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80792.23809523809,
            "unit": "ns",
            "range": "± 6289.698654108567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389475.6489361702,
            "unit": "ns",
            "range": "± 54418.33505353765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389936.2580645161,
            "unit": "ns",
            "range": "± 70719.21959117515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 376304.4623655914,
            "unit": "ns",
            "range": "± 63384.12255353639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4684042.532608695,
            "unit": "ns",
            "range": "± 454503.10903375625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882658.904761905,
            "unit": "ns",
            "range": "± 207468.2034000658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23575.462365591397,
            "unit": "ns",
            "range": "± 3882.5817877080417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121456.7,
            "unit": "ns",
            "range": "± 13396.97417220719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126905.32417582418,
            "unit": "ns",
            "range": "± 13529.243735613285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136261.68085106384,
            "unit": "ns",
            "range": "± 18846.6169680127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9479.483516483517,
            "unit": "ns",
            "range": "± 1141.5710749531627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25888.402298850575,
            "unit": "ns",
            "range": "± 3237.195410686756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1787873.888888889,
            "unit": "ns",
            "range": "± 197568.7354431787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3300829.911764706,
            "unit": "ns",
            "range": "± 239088.05852413527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2856377.102272727,
            "unit": "ns",
            "range": "± 319061.38221123087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12961353.887755102,
            "unit": "ns",
            "range": "± 5930409.196453807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506163.215909091,
            "unit": "ns",
            "range": "± 234315.5313378943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3975879,
            "unit": "ns",
            "range": "± 662709.5731473016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4819545.194736842,
            "unit": "ns",
            "range": "± 483990.08146369655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4945235.681818182,
            "unit": "ns",
            "range": "± 558174.486209925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8490831.864197532,
            "unit": "ns",
            "range": "± 616021.8858712886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7448665.802734375,
            "unit": "ns",
            "range": "± 106177.25796602754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2183357.345145089,
            "unit": "ns",
            "range": "± 38450.32387143033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405111.6263521635,
            "unit": "ns",
            "range": "± 18585.774674168155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3274943.221653294,
            "unit": "ns",
            "range": "± 164178.44892717755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945604.7827935988,
            "unit": "ns",
            "range": "± 28116.057708164793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898202.6315307617,
            "unit": "ns",
            "range": "± 27946.341946600154"
          }
        ]
      }
    ]
  }
}