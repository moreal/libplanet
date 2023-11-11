window.BENCHMARK_DATA = {
  "lastUpdate": 1699693273844,
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
          "id": "19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:43:26+09:00",
          "tree_id": "eefe0b03257e037c93925843fe381f756e74b24b",
          "url": "https://github.com/moreal/libplanet/commit/19a04e99b088fb9c3a7c3a4fe1a85cd1c63938ec"
        },
        "date": 1699692991153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625535.636363637,
            "unit": "ns",
            "range": "± 153983.58028004633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18486402.714285713,
            "unit": "ns",
            "range": "± 157436.83000708988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45763379.78571428,
            "unit": "ns",
            "range": "± 444231.3085129237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91077616.61538461,
            "unit": "ns",
            "range": "± 1214202.4095768614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184916523.6,
            "unit": "ns",
            "range": "± 2275165.1933932747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34759.944444444445,
            "unit": "ns",
            "range": "± 2643.8524766384407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216085.60416666666,
            "unit": "ns",
            "range": "± 16655.855520051336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211845.46808510637,
            "unit": "ns",
            "range": "± 14270.253579930864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194202.6875,
            "unit": "ns",
            "range": "± 18531.400581211226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3679881.6052631577,
            "unit": "ns",
            "range": "± 78896.91042950691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3493014.85483871,
            "unit": "ns",
            "range": "± 106304.13144826448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16805.69387755102,
            "unit": "ns",
            "range": "± 3847.215488990059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86360.59574468085,
            "unit": "ns",
            "range": "± 13496.564440841537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83458.44897959183,
            "unit": "ns",
            "range": "± 15825.607468917482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69942.86315789474,
            "unit": "ns",
            "range": "± 11227.9846997244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3469.434065934066,
            "unit": "ns",
            "range": "± 607.7729803178121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11604.75,
            "unit": "ns",
            "range": "± 650.3514213595353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1086077.888888889,
            "unit": "ns",
            "range": "± 87164.83473655414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2309954.9404761903,
            "unit": "ns",
            "range": "± 119295.3561450214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635846.3505154639,
            "unit": "ns",
            "range": "± 116268.95806052459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7701934.602564103,
            "unit": "ns",
            "range": "± 412148.8007303235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3131894.222222222,
            "unit": "ns",
            "range": "± 65956.85424984994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2952247.596153846,
            "unit": "ns",
            "range": "± 119743.3100775317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3559108.75,
            "unit": "ns",
            "range": "± 98870.1959067488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3525167.98,
            "unit": "ns",
            "range": "± 138466.03459085524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11118112.460674157,
            "unit": "ns",
            "range": "± 918973.7539237607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4689628.229940878,
            "unit": "ns",
            "range": "± 156073.28325449728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381403.8192608173,
            "unit": "ns",
            "range": "± 17556.147363059863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877080.9731119792,
            "unit": "ns",
            "range": "± 7193.275635561413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974647.43984375,
            "unit": "ns",
            "range": "± 20676.689811489377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626074.5344587053,
            "unit": "ns",
            "range": "± 4239.55304418203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575194.5139322917,
            "unit": "ns",
            "range": "± 8649.009953473938"
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
          "id": "bdc54cc95e77010dc89a06755c029336b79e1cee",
          "message": "@planetarium/tx: export encodeFungibleAssetValue",
          "timestamp": "2023-11-11T17:48:15+09:00",
          "tree_id": "205f42a35fb16ed872b1ad38c42f964c27bbf50d",
          "url": "https://github.com/moreal/libplanet/commit/bdc54cc95e77010dc89a06755c029336b79e1cee"
        },
        "date": 1699693260726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8067548.25,
            "unit": "ns",
            "range": "± 104387.2119642013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18801697.73809524,
            "unit": "ns",
            "range": "± 431311.1630069299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46756661.96666667,
            "unit": "ns",
            "range": "± 435879.38474321517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94083972.63333334,
            "unit": "ns",
            "range": "± 1411454.6770665802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193351478.06666666,
            "unit": "ns",
            "range": "± 2982249.9657151587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36554.93258426966,
            "unit": "ns",
            "range": "± 3334.0242602792714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230972.4842105263,
            "unit": "ns",
            "range": "± 20227.034704932285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220547.67676767678,
            "unit": "ns",
            "range": "± 15032.667407491284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197634.2323232323,
            "unit": "ns",
            "range": "± 12093.558170405655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3775584.230769231,
            "unit": "ns",
            "range": "± 61350.63242699547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3450718.4615384615,
            "unit": "ns",
            "range": "± 28579.91283697749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13458.033707865168,
            "unit": "ns",
            "range": "± 1054.5343268846875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63138.09375,
            "unit": "ns",
            "range": "± 7097.065427756409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56310.89772727273,
            "unit": "ns",
            "range": "± 4664.688628506121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64589.47368421053,
            "unit": "ns",
            "range": "± 9073.454804083554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3482.8804347826085,
            "unit": "ns",
            "range": "± 467.42201188584744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12752.902173913044,
            "unit": "ns",
            "range": "± 1215.237651969545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1135041.1,
            "unit": "ns",
            "range": "± 132917.00717190164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471341.47,
            "unit": "ns",
            "range": "± 207851.53582754152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683495.030612245,
            "unit": "ns",
            "range": "± 131585.06608058544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7772235.476744186,
            "unit": "ns",
            "range": "± 445056.44967130065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2963461.1016949154,
            "unit": "ns",
            "range": "± 123129.71414279345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3050831.023809524,
            "unit": "ns",
            "range": "± 110752.25443969539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3690446.717391304,
            "unit": "ns",
            "range": "± 202093.15692618536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3561386.2278481014,
            "unit": "ns",
            "range": "± 184093.07248320454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11184141.968085106,
            "unit": "ns",
            "range": "± 1065960.1341202622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4390570.501502404,
            "unit": "ns",
            "range": "± 60499.75972567666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1423896.8885323661,
            "unit": "ns",
            "range": "± 14072.910780793009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897575.5301339285,
            "unit": "ns",
            "range": "± 9904.383444277017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009833.8323759192,
            "unit": "ns",
            "range": "± 40256.59899629068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 683466.3869042969,
            "unit": "ns",
            "range": "± 57378.01982173063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559574.6120954241,
            "unit": "ns",
            "range": "± 5165.368850487242"
          }
        ]
      }
    ]
  }
}