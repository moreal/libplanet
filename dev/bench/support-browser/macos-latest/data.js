window.BENCHMARK_DATA = {
  "lastUpdate": 1685943905375,
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
        "date": 1685929638443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11749621.747311829,
            "unit": "ns",
            "range": "± 4183093.5529758795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27604399.61827957,
            "unit": "ns",
            "range": "± 7492676.528985102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54748077.76923077,
            "unit": "ns",
            "range": "± 903554.1248780796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139305571.5425532,
            "unit": "ns",
            "range": "± 33077978.270894136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246218502.79032257,
            "unit": "ns",
            "range": "± 26562754.11156622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92750.66483516483,
            "unit": "ns",
            "range": "± 12983.38661201198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390095.67415730335,
            "unit": "ns",
            "range": "± 67875.52391858325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377175.1630434783,
            "unit": "ns",
            "range": "± 76961.40597032495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334123.55494505493,
            "unit": "ns",
            "range": "± 28697.96073605333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806885.777777778,
            "unit": "ns",
            "range": "± 505472.6460654475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4134030.032608696,
            "unit": "ns",
            "range": "± 258886.9121384921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22001.809278350516,
            "unit": "ns",
            "range": "± 4542.841932096821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98243.68478260869,
            "unit": "ns",
            "range": "± 11599.70911527038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120539.56382978724,
            "unit": "ns",
            "range": "± 24223.16475767777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139859.69892473117,
            "unit": "ns",
            "range": "± 26903.71990433622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8479.282608695652,
            "unit": "ns",
            "range": "± 1992.1046732400298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25687.36813186813,
            "unit": "ns",
            "range": "± 5492.264965302043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2011878.7325581396,
            "unit": "ns",
            "range": "± 472501.20989927073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3644399.1136363638,
            "unit": "ns",
            "range": "± 460440.6322561788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3216037.4239130435,
            "unit": "ns",
            "range": "± 600277.724503595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8880655.925531914,
            "unit": "ns",
            "range": "± 2751227.5112924487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3840429.6627906975,
            "unit": "ns",
            "range": "± 547634.3423968138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4108837.9606741574,
            "unit": "ns",
            "range": "± 827889.1726398509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4907256.893258427,
            "unit": "ns",
            "range": "± 461534.4248571975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5264476.380434782,
            "unit": "ns",
            "range": "± 828799.956546586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8433536.011904761,
            "unit": "ns",
            "range": "± 706232.9524297222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8572348.735704787,
            "unit": "ns",
            "range": "± 615304.2429346748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2670624.640058877,
            "unit": "ns",
            "range": "± 127489.07786803783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1641613.5929778344,
            "unit": "ns",
            "range": "± 60586.61586432348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3795697.283564815,
            "unit": "ns",
            "range": "± 157810.31479583087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905022.9248798077,
            "unit": "ns",
            "range": "± 14335.994140239723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836477.0338134766,
            "unit": "ns",
            "range": "± 14656.946349509732"
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
        "date": 1685929899144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8764065.966666667,
            "unit": "ns",
            "range": "± 147485.7212322926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27995057.192307692,
            "unit": "ns",
            "range": "± 8269701.84276447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58858428.95402299,
            "unit": "ns",
            "range": "± 9700654.734078897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121725442.12222221,
            "unit": "ns",
            "range": "± 25861059.370801482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228368619.58620688,
            "unit": "ns",
            "range": "± 22908909.308936227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82382.71111111112,
            "unit": "ns",
            "range": "± 7948.893489873813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372724.7365591398,
            "unit": "ns",
            "range": "± 54752.081265463814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351258.1630434783,
            "unit": "ns",
            "range": "± 39543.572261126414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317874.1511627907,
            "unit": "ns",
            "range": "± 20934.337982489826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4253964.341269841,
            "unit": "ns",
            "range": "± 193419.67145922297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000160.080645161,
            "unit": "ns",
            "range": "± 178151.26248739872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20851.166666666668,
            "unit": "ns",
            "range": "± 3297.2641964452014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109941.61855670103,
            "unit": "ns",
            "range": "± 20341.661291875895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113778.65263157895,
            "unit": "ns",
            "range": "± 16711.573464358382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129477.76041666667,
            "unit": "ns",
            "range": "± 21564.768903173037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7771.760416666667,
            "unit": "ns",
            "range": "± 1248.9724091579124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20569.739583333332,
            "unit": "ns",
            "range": "± 3555.2946143220247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1788219.255319149,
            "unit": "ns",
            "range": "± 221839.42862897195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3205933.6379310344,
            "unit": "ns",
            "range": "± 224609.64626234784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617789.3684210526,
            "unit": "ns",
            "range": "± 132112.37196027147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9618391.706185566,
            "unit": "ns",
            "range": "± 2795085.0743457815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3385708.931578947,
            "unit": "ns",
            "range": "± 230613.55403370468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3777631.215909091,
            "unit": "ns",
            "range": "± 390015.55096480204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4838280.277777778,
            "unit": "ns",
            "range": "± 476310.6894008193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5099777.098901099,
            "unit": "ns",
            "range": "± 844278.718906553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8768449.794117646,
            "unit": "ns",
            "range": "± 1482435.3999744074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8235154.961381392,
            "unit": "ns",
            "range": "± 901649.812297996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2413355.8669354836,
            "unit": "ns",
            "range": "± 420161.1437613714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336759.5603966345,
            "unit": "ns",
            "range": "± 20235.279939669086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2742942.3427083334,
            "unit": "ns",
            "range": "± 50514.76151973725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845755.9565662203,
            "unit": "ns",
            "range": "± 19195.35871243532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868681.5936957465,
            "unit": "ns",
            "range": "± 18535.58478390357"
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
        "date": 1685931225515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8177832.065217392,
            "unit": "ns",
            "range": "± 392674.75846177596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27280933.112903226,
            "unit": "ns",
            "range": "± 6422232.446163085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70375612.48387097,
            "unit": "ns",
            "range": "± 22242402.1207425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152714058.5612245,
            "unit": "ns",
            "range": "± 66739069.97460619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252052974.11956522,
            "unit": "ns",
            "range": "± 31733848.896455277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77524.31818181818,
            "unit": "ns",
            "range": "± 7787.831775254626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333158.52127659577,
            "unit": "ns",
            "range": "± 26906.498742800344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332133.0561797753,
            "unit": "ns",
            "range": "± 40657.30094403251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319206.5714285714,
            "unit": "ns",
            "range": "± 29574.150717642617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4416983.735294118,
            "unit": "ns",
            "range": "± 238087.92503049152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010255.4631578946,
            "unit": "ns",
            "range": "± 272614.62130141724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21120.752631578947,
            "unit": "ns",
            "range": "± 4857.152985750776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95070.35051546391,
            "unit": "ns",
            "range": "± 13125.928559249656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106459.45263157894,
            "unit": "ns",
            "range": "± 17197.25950939191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118189.48901098901,
            "unit": "ns",
            "range": "± 20471.082175430078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6766.597826086957,
            "unit": "ns",
            "range": "± 1175.6256791928458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20756,
            "unit": "ns",
            "range": "± 3632.4968914875435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723636.331460674,
            "unit": "ns",
            "range": "± 250259.7726357752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3360180.3735632184,
            "unit": "ns",
            "range": "± 552180.525822994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3075751.9269662923,
            "unit": "ns",
            "range": "± 767163.0468707106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8663750.282608695,
            "unit": "ns",
            "range": "± 2236151.6184648243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3990551.414893617,
            "unit": "ns",
            "range": "± 958477.996752823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4029677.7298850575,
            "unit": "ns",
            "range": "± 913111.6430136621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5025791.922222222,
            "unit": "ns",
            "range": "± 815833.2598100496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4791835.4069767445,
            "unit": "ns",
            "range": "± 577822.5640083158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8026699.681318682,
            "unit": "ns",
            "range": "± 552319.8745977004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6784916.069010417,
            "unit": "ns",
            "range": "± 85152.55424464562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2280546.850832761,
            "unit": "ns",
            "range": "± 256432.3022535518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1554225.6933486436,
            "unit": "ns",
            "range": "± 174558.31149421504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3113362.7676788014,
            "unit": "ns",
            "range": "± 225147.17661158319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092995.7904730903,
            "unit": "ns",
            "range": "± 79981.02493819692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 830477.1517358897,
            "unit": "ns",
            "range": "± 50346.80950446562"
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
        "date": 1685931630447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8659564.43478261,
            "unit": "ns",
            "range": "± 729125.6697054749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20685638.24137931,
            "unit": "ns",
            "range": "± 897077.5734021597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51282830.01754386,
            "unit": "ns",
            "range": "± 2219206.287730943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104157213.91666667,
            "unit": "ns",
            "range": "± 2595086.6162413605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229566586.1470588,
            "unit": "ns",
            "range": "± 6675669.248686362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70337.13978494624,
            "unit": "ns",
            "range": "± 9874.758338915788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352693.7395833333,
            "unit": "ns",
            "range": "± 29888.640627905796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379500.4574468085,
            "unit": "ns",
            "range": "± 60021.15841126716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349830.75268817204,
            "unit": "ns",
            "range": "± 34365.46168999382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635152.895348838,
            "unit": "ns",
            "range": "± 413994.1739820609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4133404.788235294,
            "unit": "ns",
            "range": "± 449144.5644892791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26896.021505376346,
            "unit": "ns",
            "range": "± 4338.125875101845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115478.3595505618,
            "unit": "ns",
            "range": "± 18354.61823557765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116628.94705882353,
            "unit": "ns",
            "range": "± 11762.752093858335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124168.85263157895,
            "unit": "ns",
            "range": "± 18432.526679393744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8462.936842105262,
            "unit": "ns",
            "range": "± 1642.9430637920057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24770.3125,
            "unit": "ns",
            "range": "± 4162.188746858278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1823036.543478261,
            "unit": "ns",
            "range": "± 317373.29987510515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3588500.211764706,
            "unit": "ns",
            "range": "± 511095.27259404224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2755722.353932584,
            "unit": "ns",
            "range": "± 375672.9257128452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9122539.347368421,
            "unit": "ns",
            "range": "± 3003033.3822373133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3695070.616161616,
            "unit": "ns",
            "range": "± 351119.0607155783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4013404.3842105265,
            "unit": "ns",
            "range": "± 568410.0741953686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4784324.396907217,
            "unit": "ns",
            "range": "± 367107.9171680562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4684547.372340426,
            "unit": "ns",
            "range": "± 634285.6975553264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7976041.977777778,
            "unit": "ns",
            "range": "± 499569.60004493437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650071.346961806,
            "unit": "ns",
            "range": "± 939938.2928730913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317178.719994849,
            "unit": "ns",
            "range": "± 189939.39774620897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1551041.6727549795,
            "unit": "ns",
            "range": "± 171232.17112080439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2811151.4558432666,
            "unit": "ns",
            "range": "± 216182.8980725796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922502.364894701,
            "unit": "ns",
            "range": "± 20039.077636786627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798932.0421316965,
            "unit": "ns",
            "range": "± 18858.310554196534"
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
        "date": 1685931974481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8247700.3875,
            "unit": "ns",
            "range": "± 427971.6211312779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20642025.28888889,
            "unit": "ns",
            "range": "± 769299.9150720095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51524787.862068966,
            "unit": "ns",
            "range": "± 1497527.5124044758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103867793,
            "unit": "ns",
            "range": "± 2513506.189053526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213223967.5,
            "unit": "ns",
            "range": "± 2683953.7370250737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75376.1978021978,
            "unit": "ns",
            "range": "± 15195.993150403372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339778.44736842107,
            "unit": "ns",
            "range": "± 31656.868656173527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321382.11855670105,
            "unit": "ns",
            "range": "± 30168.473272483792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304319.8602150538,
            "unit": "ns",
            "range": "± 19116.176222833412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256812.243902439,
            "unit": "ns",
            "range": "± 150113.2375761346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824032.888888889,
            "unit": "ns",
            "range": "± 80384.82669899902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18231.434065934067,
            "unit": "ns",
            "range": "± 1762.6290704651503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93474.36,
            "unit": "ns",
            "range": "± 11682.69423706568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97653,
            "unit": "ns",
            "range": "± 7979.991407681256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117734.03092783505,
            "unit": "ns",
            "range": "± 16083.591377973291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6996.541237113402,
            "unit": "ns",
            "range": "± 1008.77516405546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17820.706521739132,
            "unit": "ns",
            "range": "± 1497.7000868954601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659989.5208333333,
            "unit": "ns",
            "range": "± 180869.3501492447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3225656.090909091,
            "unit": "ns",
            "range": "± 290877.432913116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643167.4270833335,
            "unit": "ns",
            "range": "± 277139.5506432301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6963474.936842105,
            "unit": "ns",
            "range": "± 510718.891473782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3345948.2021276597,
            "unit": "ns",
            "range": "± 129700.31244991274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388289.393258427,
            "unit": "ns",
            "range": "± 183264.82390008096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4532151.132352941,
            "unit": "ns",
            "range": "± 214719.3657374288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4443714.220588235,
            "unit": "ns",
            "range": "± 212176.46197691243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7820574.136363637,
            "unit": "ns",
            "range": "± 365613.00166158826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6578075.270833333,
            "unit": "ns",
            "range": "± 97457.05357587754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2010283.393329327,
            "unit": "ns",
            "range": "± 14333.217739530779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330138.5541294643,
            "unit": "ns",
            "range": "± 13428.768310983012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599807.104073661,
            "unit": "ns",
            "range": "± 24858.103154028086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903255.5526692708,
            "unit": "ns",
            "range": "± 10198.528753288334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826558.5630208333,
            "unit": "ns",
            "range": "± 9366.741883501354"
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
        "date": 1685932366994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8774121.466666667,
            "unit": "ns",
            "range": "± 114950.36350397173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23718245.5,
            "unit": "ns",
            "range": "± 434995.17877755186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55791174.71428572,
            "unit": "ns",
            "range": "± 320720.2058200547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115146510.28571428,
            "unit": "ns",
            "range": "± 727109.9744179194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225176070.25,
            "unit": "ns",
            "range": "± 2133746.6052970225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65334.954545454544,
            "unit": "ns",
            "range": "± 4456.8087338211135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375418.1630434783,
            "unit": "ns",
            "range": "± 27037.412140566244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360345.5909090909,
            "unit": "ns",
            "range": "± 16918.24269377451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327471.92783505155,
            "unit": "ns",
            "range": "± 20811.61448278712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4972549.533333333,
            "unit": "ns",
            "range": "± 71820.0146088089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4419138.538461538,
            "unit": "ns",
            "range": "± 47683.59477433055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21145.021276595744,
            "unit": "ns",
            "range": "± 1765.4118589724337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104274.47311827957,
            "unit": "ns",
            "range": "± 7645.5510487435395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124721.9696969697,
            "unit": "ns",
            "range": "± 20912.021844908486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136453.29032258064,
            "unit": "ns",
            "range": "± 17714.83829497099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7758.697916666667,
            "unit": "ns",
            "range": "± 1401.4259363781973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20066.34946236559,
            "unit": "ns",
            "range": "± 1572.508111171702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789279.3152173914,
            "unit": "ns",
            "range": "± 149570.04350029372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3470979.3880597013,
            "unit": "ns",
            "range": "± 163402.9493741789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2958012.65,
            "unit": "ns",
            "range": "± 297835.22909784387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7600393.478723404,
            "unit": "ns",
            "range": "± 294390.34336038836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3876359.888888889,
            "unit": "ns",
            "range": "± 80946.48370747537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3927183.393442623,
            "unit": "ns",
            "range": "± 171042.46541665986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5039182.671428571,
            "unit": "ns",
            "range": "± 152900.87661859381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4978963.897058823,
            "unit": "ns",
            "range": "± 237966.85958707673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9039175.913043479,
            "unit": "ns",
            "range": "± 346915.588375525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7592338.083333333,
            "unit": "ns",
            "range": "± 57708.37898175133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2364351.693917411,
            "unit": "ns",
            "range": "± 11721.16432966267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511738.0606770834,
            "unit": "ns",
            "range": "± 10934.450639629318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934376.24765625,
            "unit": "ns",
            "range": "± 8852.28772800667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015450.2340959822,
            "unit": "ns",
            "range": "± 4917.377660963123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875213.4126953125,
            "unit": "ns",
            "range": "± 2990.137986774281"
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
        "date": 1685932482301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9242959.93678161,
            "unit": "ns",
            "range": "± 1045631.2821181023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24615508.340425532,
            "unit": "ns",
            "range": "± 3697509.164143624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68488312.9673913,
            "unit": "ns",
            "range": "± 17920830.094424877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116653039.8045977,
            "unit": "ns",
            "range": "± 13301826.456547197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239040063.1470588,
            "unit": "ns",
            "range": "± 29918014.385527693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81971.38202247191,
            "unit": "ns",
            "range": "± 7918.5739167559495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371506.74725274724,
            "unit": "ns",
            "range": "± 39877.382508716895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374021.0117647059,
            "unit": "ns",
            "range": "± 59017.134344409256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344016.1411764706,
            "unit": "ns",
            "range": "± 22968.404040039408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4631364.4,
            "unit": "ns",
            "range": "± 503102.0205918835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4325189.447058824,
            "unit": "ns",
            "range": "± 419968.6646809698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30253.20588235294,
            "unit": "ns",
            "range": "± 6827.964239981414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127547.73913043478,
            "unit": "ns",
            "range": "± 11216.836847581637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143791.13333333333,
            "unit": "ns",
            "range": "± 26292.632703409607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153818.72340425532,
            "unit": "ns",
            "range": "± 34653.766477288686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9435.072916666666,
            "unit": "ns",
            "range": "± 1284.9315996113662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29430.69230769231,
            "unit": "ns",
            "range": "± 4981.111227409909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1832438.85,
            "unit": "ns",
            "range": "± 247534.22377757606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3450973.1704545454,
            "unit": "ns",
            "range": "± 398026.5136296833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2821106.5056179776,
            "unit": "ns",
            "range": "± 319005.6437847543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9734722.541666666,
            "unit": "ns",
            "range": "± 3613278.5345883626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3942184.077777778,
            "unit": "ns",
            "range": "± 692551.7489758028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3935115.1413043477,
            "unit": "ns",
            "range": "± 662942.3598951522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4850734.422222222,
            "unit": "ns",
            "range": "± 559411.6376073917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5942596.173913044,
            "unit": "ns",
            "range": "± 1624113.114971372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10058957.123655913,
            "unit": "ns",
            "range": "± 3079588.308065491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7663167.918154762,
            "unit": "ns",
            "range": "± 177363.3362303826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2230644.2067020717,
            "unit": "ns",
            "range": "± 134073.99216978718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1525608.0936075847,
            "unit": "ns",
            "range": "± 106515.17111433693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025908.3908305923,
            "unit": "ns",
            "range": "± 288271.3900573709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019654.6605718085,
            "unit": "ns",
            "range": "± 62249.57210906479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910671.6308795103,
            "unit": "ns",
            "range": "± 61011.903990116836"
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
        "date": 1685932724157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10068245.17857143,
            "unit": "ns",
            "range": "± 1340213.1636379482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25228947.122222222,
            "unit": "ns",
            "range": "± 4013235.8463108675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66200363.03333333,
            "unit": "ns",
            "range": "± 13554182.735813972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129409548.10752688,
            "unit": "ns",
            "range": "± 30018262.074019283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234244940.32417583,
            "unit": "ns",
            "range": "± 22361969.29149223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83568.97126436782,
            "unit": "ns",
            "range": "± 10027.547744274247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 419998.0172413793,
            "unit": "ns",
            "range": "± 73751.08971317315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382193.5862068966,
            "unit": "ns",
            "range": "± 46703.664030992346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 395394.01086956525,
            "unit": "ns",
            "range": "± 67183.04163875766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5167438.130434782,
            "unit": "ns",
            "range": "± 750473.965748609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4267112.584269663,
            "unit": "ns",
            "range": "± 386156.8742021648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31555.114457831325,
            "unit": "ns",
            "range": "± 4219.130822613231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 148055.8021978022,
            "unit": "ns",
            "range": "± 43551.56523509925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133015.29775280898,
            "unit": "ns",
            "range": "± 17430.577509065508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149353.03846153847,
            "unit": "ns",
            "range": "± 30194.272145670904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10782.60752688172,
            "unit": "ns",
            "range": "± 1548.8498500104881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26153.994736842105,
            "unit": "ns",
            "range": "± 6614.274440956555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829407.2222222222,
            "unit": "ns",
            "range": "± 368265.43748701236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512123.4505494507,
            "unit": "ns",
            "range": "± 495042.91391313326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3161816.7252747254,
            "unit": "ns",
            "range": "± 743700.8773956259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8961770.532608695,
            "unit": "ns",
            "range": "± 2786373.1663762904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585432.080645161,
            "unit": "ns",
            "range": "± 400126.0048837421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4175715.2528089886,
            "unit": "ns",
            "range": "± 777919.853441262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5133427.342105263,
            "unit": "ns",
            "range": "± 655711.4336828928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4982625.596774193,
            "unit": "ns",
            "range": "± 571151.3199817666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10256761.863636363,
            "unit": "ns",
            "range": "± 3043150.517005899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7386204.868832237,
            "unit": "ns",
            "range": "± 553350.0242755092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2051135.68625,
            "unit": "ns",
            "range": "± 54664.491231693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382590.022330729,
            "unit": "ns",
            "range": "± 37600.751341504445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3405109.080400069,
            "unit": "ns",
            "range": "± 281689.6865775836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044882.0215056046,
            "unit": "ns",
            "range": "± 73108.25500657578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923389.1990979381,
            "unit": "ns",
            "range": "± 78774.95351084556"
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
        "date": 1685933263021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8433065.974683544,
            "unit": "ns",
            "range": "± 434221.6255857812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20811536.2,
            "unit": "ns",
            "range": "± 460931.9231023738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54667611.35,
            "unit": "ns",
            "range": "± 1927139.40254237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106599446.86666666,
            "unit": "ns",
            "range": "± 3133400.7493445296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213719724.3181818,
            "unit": "ns",
            "range": "± 4798313.5984019535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69358.7947368421,
            "unit": "ns",
            "range": "± 7342.217321000637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348890.9775280899,
            "unit": "ns",
            "range": "± 42693.92899197984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370299.98421052634,
            "unit": "ns",
            "range": "± 68694.20351663102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 366166.1875,
            "unit": "ns",
            "range": "± 70350.9153806174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4552090.770833333,
            "unit": "ns",
            "range": "± 376379.00187920826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863078.0384615385,
            "unit": "ns",
            "range": "± 102203.06257152211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20916.31182795699,
            "unit": "ns",
            "range": "± 3384.0297690465663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90489.97368421052,
            "unit": "ns",
            "range": "± 10376.530706709196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105946.15463917526,
            "unit": "ns",
            "range": "± 12678.545132378333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113639.82795698925,
            "unit": "ns",
            "range": "± 11504.281642089361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.010416666667,
            "unit": "ns",
            "range": "± 1372.0429216455725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17389.373626373625,
            "unit": "ns",
            "range": "± 3151.852815402929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615635.4591836734,
            "unit": "ns",
            "range": "± 174599.22316711541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975594.012820513,
            "unit": "ns",
            "range": "± 147147.85382222483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581888.61,
            "unit": "ns",
            "range": "± 207747.50047068208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6363543.018518519,
            "unit": "ns",
            "range": "± 264622.37134334847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3563051.7849462368,
            "unit": "ns",
            "range": "± 372467.5015054815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3655255.9183673467,
            "unit": "ns",
            "range": "± 354354.1778119702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4825115.19072165,
            "unit": "ns",
            "range": "± 477996.3086741919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4882432.265957447,
            "unit": "ns",
            "range": "± 516847.3636131243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8280032.494736842,
            "unit": "ns",
            "range": "± 616345.8240889014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6319556.044791667,
            "unit": "ns",
            "range": "± 68066.30730973437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017355.2522194602,
            "unit": "ns",
            "range": "± 68160.54933960667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282155.427734375,
            "unit": "ns",
            "range": "± 19341.84889538345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2810631.4165364583,
            "unit": "ns",
            "range": "± 83247.79419134418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882051.4408052885,
            "unit": "ns",
            "range": "± 14007.761336675196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715296.875078125,
            "unit": "ns",
            "range": "± 18473.582777457712"
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
        "date": 1685940228057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8593995.933333334,
            "unit": "ns",
            "range": "± 322201.3804961961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21095166.66101695,
            "unit": "ns",
            "range": "± 932955.2625923785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54763086.57377049,
            "unit": "ns",
            "range": "± 2471923.667612672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111084734.8172043,
            "unit": "ns",
            "range": "± 6742441.505759569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227539745.45714286,
            "unit": "ns",
            "range": "± 10928732.187451461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76746.43478260869,
            "unit": "ns",
            "range": "± 10717.987553337714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339026.9052631579,
            "unit": "ns",
            "range": "± 30482.9531297774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355982.05555555556,
            "unit": "ns",
            "range": "± 29666.524087703925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338115.3241758242,
            "unit": "ns",
            "range": "± 25563.8781141557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4380087.221311475,
            "unit": "ns",
            "range": "± 195369.35205861836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3984182.4782608696,
            "unit": "ns",
            "range": "± 150726.18836548744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24798.24742268041,
            "unit": "ns",
            "range": "± 4921.922033174065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119751.95555555556,
            "unit": "ns",
            "range": "± 11095.585835444215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122602.96808510639,
            "unit": "ns",
            "range": "± 15437.275122180574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130173.12903225806,
            "unit": "ns",
            "range": "± 16263.677840396778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9088.310526315789,
            "unit": "ns",
            "range": "± 1666.7552903051956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25910.866666666665,
            "unit": "ns",
            "range": "± 3580.714310916818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792312.2842105264,
            "unit": "ns",
            "range": "± 303040.53762378386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3296993.8842105265,
            "unit": "ns",
            "range": "± 246315.39577195526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2741056.5786516853,
            "unit": "ns",
            "range": "± 251812.96324667893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7056649.010869565,
            "unit": "ns",
            "range": "± 564314.1928647589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452165.727272727,
            "unit": "ns",
            "range": "± 241409.21719653124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531398.0616438356,
            "unit": "ns",
            "range": "± 174127.52576871053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4588837.409090909,
            "unit": "ns",
            "range": "± 180315.06355299664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4532308.382978723,
            "unit": "ns",
            "range": "± 434693.99666943704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8000858.215053763,
            "unit": "ns",
            "range": "± 476883.70059975225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7394439.902832031,
            "unit": "ns",
            "range": "± 226768.20141095074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2184084.174926758,
            "unit": "ns",
            "range": "± 99689.36042604351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393826.6380828372,
            "unit": "ns",
            "range": "± 63487.920779409345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2747122.176731419,
            "unit": "ns",
            "range": "± 92599.5632553668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848595.0413876488,
            "unit": "ns",
            "range": "± 20094.335081797653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780417.1921037947,
            "unit": "ns",
            "range": "± 10394.545131772024"
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
        "date": 1685940762585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8809026.221649485,
            "unit": "ns",
            "range": "± 518849.3852137661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21669594.743243244,
            "unit": "ns",
            "range": "± 1082878.7630520186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55385253.29545455,
            "unit": "ns",
            "range": "± 3098863.492780621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108100591.96938775,
            "unit": "ns",
            "range": "± 4308325.257175297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202048136.8,
            "unit": "ns",
            "range": "± 1936400.6216565531"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77470.84523809524,
            "unit": "ns",
            "range": "± 5635.685197955877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406944.90449438203,
            "unit": "ns",
            "range": "± 89729.03565428618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332364.3789473684,
            "unit": "ns",
            "range": "± 44023.28064016761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331494.9651162791,
            "unit": "ns",
            "range": "± 31496.73214933581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4177486.533333333,
            "unit": "ns",
            "range": "± 144801.5192481513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002002.7413793104,
            "unit": "ns",
            "range": "± 270604.62137831555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25316.612359550563,
            "unit": "ns",
            "range": "± 5092.0129156048315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118371.64444444445,
            "unit": "ns",
            "range": "± 16582.862745571165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121081.34090909091,
            "unit": "ns",
            "range": "± 8840.231122331486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131498.90860215054,
            "unit": "ns",
            "range": "± 22625.79704876933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8761.091397849463,
            "unit": "ns",
            "range": "± 1629.1992380665122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22306.9,
            "unit": "ns",
            "range": "± 5152.080945456828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1828999.670212766,
            "unit": "ns",
            "range": "± 319685.965283755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3384787.1511627906,
            "unit": "ns",
            "range": "± 428066.7030279762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2796689.163043478,
            "unit": "ns",
            "range": "± 351507.9826910686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8099666.077777778,
            "unit": "ns",
            "range": "± 1775925.6773165325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3337699.621212121,
            "unit": "ns",
            "range": "± 157031.0476305944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514815.6014492754,
            "unit": "ns",
            "range": "± 158161.3647234391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4785620.884210526,
            "unit": "ns",
            "range": "± 356221.8649595993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562578.577319588,
            "unit": "ns",
            "range": "± 395581.35277417005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8226278.043956044,
            "unit": "ns",
            "range": "± 603774.4148553776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8351273.83198736,
            "unit": "ns",
            "range": "± 1048771.5013531246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2587961.1692708335,
            "unit": "ns",
            "range": "± 449775.1608229358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493678.467762706,
            "unit": "ns",
            "range": "± 128328.030538248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3325027.2170046545,
            "unit": "ns",
            "range": "± 259149.32660016714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966336.1307373047,
            "unit": "ns",
            "range": "± 17946.377066982113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 959908.6605859376,
            "unit": "ns",
            "range": "± 66045.43291602771"
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
        "date": 1685941008244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750636.888888889,
            "unit": "ns",
            "range": "± 352764.5754533894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22984510,
            "unit": "ns",
            "range": "± 490445.8238211913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47577035.5,
            "unit": "ns",
            "range": "± 828298.3362571865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92163303.57142857,
            "unit": "ns",
            "range": "± 1432473.3397363115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199615353.82352942,
            "unit": "ns",
            "range": "± 3401511.1201731395"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64577.8125,
            "unit": "ns",
            "range": "± 10546.962271880642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306269.6777777778,
            "unit": "ns",
            "range": "± 18115.828298478376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293438.3548387097,
            "unit": "ns",
            "range": "± 22188.654640939698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284975.46153846156,
            "unit": "ns",
            "range": "± 15995.654640702121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080957.0344827585,
            "unit": "ns",
            "range": "± 118522.68562524304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3556378.7083333335,
            "unit": "ns",
            "range": "± 92199.14929178372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17080.89534883721,
            "unit": "ns",
            "range": "± 1730.3681028244337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83267.35106382979,
            "unit": "ns",
            "range": "± 7800.24916159451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91378.39690721649,
            "unit": "ns",
            "range": "± 16086.651460064475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118008.15625,
            "unit": "ns",
            "range": "± 18607.640537284748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8147.768421052631,
            "unit": "ns",
            "range": "± 1067.4912571532116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22285.041666666668,
            "unit": "ns",
            "range": "± 4201.203516579422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535776.2087912087,
            "unit": "ns",
            "range": "± 162298.08095849893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947234.6744186045,
            "unit": "ns",
            "range": "± 228132.9053286801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2478800.2934782607,
            "unit": "ns",
            "range": "± 295651.14068946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6516397.44117647,
            "unit": "ns",
            "range": "± 375194.7406756909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069702.282608696,
            "unit": "ns",
            "range": "± 116255.418684065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3249724.381818182,
            "unit": "ns",
            "range": "± 138384.81642794472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276475.804878049,
            "unit": "ns",
            "range": "± 147241.12276945927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4214108.275862069,
            "unit": "ns",
            "range": "± 369377.7727971381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7661451.550561798,
            "unit": "ns",
            "range": "± 461580.9698888901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6691972.8359375,
            "unit": "ns",
            "range": "± 131347.8492805707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086008.2993861607,
            "unit": "ns",
            "range": "± 54872.18897390264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323484.333984375,
            "unit": "ns",
            "range": "± 13591.240272649206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2501627.7309782607,
            "unit": "ns",
            "range": "± 60321.97350531286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862811.4335493608,
            "unit": "ns",
            "range": "± 20557.483439772976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699946.39765625,
            "unit": "ns",
            "range": "± 9372.001599631018"
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
        "date": 1685943198602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10817092.58,
            "unit": "ns",
            "range": "± 1822170.4613995545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29968551.227272727,
            "unit": "ns",
            "range": "± 3806283.3643624787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71426026.32,
            "unit": "ns",
            "range": "± 8561574.259212442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147297035.18367347,
            "unit": "ns",
            "range": "± 11457168.019789658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300855969.97,
            "unit": "ns",
            "range": "± 22983961.729161073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105735.44791666667,
            "unit": "ns",
            "range": "± 24700.177930903883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 464568.6597938144,
            "unit": "ns",
            "range": "± 86235.84415208468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 440033.70408163266,
            "unit": "ns",
            "range": "± 87673.57523609705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 424711.7916666667,
            "unit": "ns",
            "range": "± 63248.37353497165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5881302.752525252,
            "unit": "ns",
            "range": "± 851615.9320945039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5444410.88,
            "unit": "ns",
            "range": "± 839134.1961921805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33090.34482758621,
            "unit": "ns",
            "range": "± 6115.06627172742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 154260.63917525773,
            "unit": "ns",
            "range": "± 22365.664931237032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 165850.3556701031,
            "unit": "ns",
            "range": "± 27621.979975189777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 163545.01075268816,
            "unit": "ns",
            "range": "± 33538.00426268379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11550.741379310344,
            "unit": "ns",
            "range": "± 1378.8190090302614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31270.732558139534,
            "unit": "ns",
            "range": "± 4984.701641727933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2206759.525252525,
            "unit": "ns",
            "range": "± 430805.2422401316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3990612.37,
            "unit": "ns",
            "range": "± 832100.1666290992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3446046.29,
            "unit": "ns",
            "range": "± 633076.4888792528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9132115.6,
            "unit": "ns",
            "range": "± 1252649.021985852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4877191.73,
            "unit": "ns",
            "range": "± 982673.4522982775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4912567.16,
            "unit": "ns",
            "range": "± 1027362.8626825808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5907236.25,
            "unit": "ns",
            "range": "± 1099872.9717041145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5949237.151515151,
            "unit": "ns",
            "range": "± 1096164.9443131764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10679747.75,
            "unit": "ns",
            "range": "± 1512090.478074932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9445848.409874355,
            "unit": "ns",
            "range": "± 639012.9153990499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2706832.898125,
            "unit": "ns",
            "range": "± 197461.73504370742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1729204.5674715908,
            "unit": "ns",
            "range": "± 64502.01790754953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4019700.1640625,
            "unit": "ns",
            "range": "± 196896.73800914467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1097016.9929942256,
            "unit": "ns",
            "range": "± 61312.207792555266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921888.9281445312,
            "unit": "ns",
            "range": "± 93138.12310121041"
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
          "id": "49ec6717198ed3fbbf82b764e3d52e27f4891a80",
          "message": "Remove unused code",
          "timestamp": "2023-06-05T14:27:39+09:00",
          "tree_id": "958f707149dd7dcff470db86afd7ba5f3ab62a53",
          "url": "https://github.com/moreal/libplanet/commit/49ec6717198ed3fbbf82b764e3d52e27f4891a80"
        },
        "date": 1685943894684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8295204.875,
            "unit": "ns",
            "range": "± 255052.04187441128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20475805.48148148,
            "unit": "ns",
            "range": "± 855683.2084376885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51584994.35185185,
            "unit": "ns",
            "range": "± 1143800.0370585122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103125078.13333334,
            "unit": "ns",
            "range": "± 2995590.1926603047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215703002.33333334,
            "unit": "ns",
            "range": "± 3539071.657450251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72529.83673469388,
            "unit": "ns",
            "range": "± 9379.864279999683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341002.1875,
            "unit": "ns",
            "range": "± 31931.350437202324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322306.27173913043,
            "unit": "ns",
            "range": "± 29229.19425720364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313602.9247311828,
            "unit": "ns",
            "range": "± 26566.824785008022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4335739.2,
            "unit": "ns",
            "range": "± 126871.15402763328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3811068.5263157897,
            "unit": "ns",
            "range": "± 129278.44597271777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18918.5,
            "unit": "ns",
            "range": "± 2796.881949128822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92385.66315789474,
            "unit": "ns",
            "range": "± 12040.962879970179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99246.16326530612,
            "unit": "ns",
            "range": "± 13137.397431456457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117951.13541666667,
            "unit": "ns",
            "range": "± 18624.81626648748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6485.413043478261,
            "unit": "ns",
            "range": "± 869.1818959111185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18807.17391304348,
            "unit": "ns",
            "range": "± 2292.552028763299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656083.4791666667,
            "unit": "ns",
            "range": "± 156742.12172623436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3158672.0853658537,
            "unit": "ns",
            "range": "± 159788.63162987205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2678382,
            "unit": "ns",
            "range": "± 279986.8203320441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6710581.046875,
            "unit": "ns",
            "range": "± 309440.6229309885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346546.7,
            "unit": "ns",
            "range": "± 134708.99986054597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419741.052631579,
            "unit": "ns",
            "range": "± 235261.8638537577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573024.588235294,
            "unit": "ns",
            "range": "± 184548.2177472518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4390790.032967033,
            "unit": "ns",
            "range": "± 264738.4193658777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7927429.491803279,
            "unit": "ns",
            "range": "± 336074.0712694957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6510778.419791667,
            "unit": "ns",
            "range": "± 118321.01144308735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055986.8484157985,
            "unit": "ns",
            "range": "± 67874.55114306444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355859.7415039062,
            "unit": "ns",
            "range": "± 30725.659859353782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711860.8085345645,
            "unit": "ns",
            "range": "± 127560.56509322126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841252.9508568548,
            "unit": "ns",
            "range": "± 23613.89379097319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827197.1911090353,
            "unit": "ns",
            "range": "± 19541.361106363212"
          }
        ]
      }
    ]
  }
}