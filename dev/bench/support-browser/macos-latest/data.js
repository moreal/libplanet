window.BENCHMARK_DATA = {
  "lastUpdate": 1685929909957,
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
      }
    ]
  }
}