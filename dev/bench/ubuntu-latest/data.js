window.BENCHMARK_DATA = {
  "lastUpdate": 1675381323961,
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
          "id": "c017c13eaba31d9a63c30de6c69e47aaa70561d6",
          "message": "Update build.ps",
          "timestamp": "2023-02-03T08:22:16+09:00",
          "tree_id": "8560dc88889cf5961915d94fa61514c0a1634499",
          "url": "https://github.com/moreal/libplanet/commit/c017c13eaba31d9a63c30de6c69e47aaa70561d6"
        },
        "date": 1675380792223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108664.97777777778,
            "unit": "ns",
            "range": "± 4127.7865380904095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018776.959134615,
            "unit": "ns",
            "range": "± 23886.282350109374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847380.6143973214,
            "unit": "ns",
            "range": "± 1019.1018358347023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385338.9188058036,
            "unit": "ns",
            "range": "± 940.895678541746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581688.826302083,
            "unit": "ns",
            "range": "± 1008.5406179443739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813030.5591517857,
            "unit": "ns",
            "range": "± 747.5997427720744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764865.0568498884,
            "unit": "ns",
            "range": "± 412.67540753143885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94223.9052631579,
            "unit": "ns",
            "range": "± 8247.170055022592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199576.0588235294,
            "unit": "ns",
            "range": "± 8842.912321449669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185997.2,
            "unit": "ns",
            "range": "± 5490.224556678772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3816563.714285714,
            "unit": "ns",
            "range": "± 33163.51700154988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9394188.42857143,
            "unit": "ns",
            "range": "± 45461.23614298617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18814.92391304348,
            "unit": "ns",
            "range": "± 1659.6316831807858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54004.375,
            "unit": "ns",
            "range": "± 5788.605906615621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44456.336734693876,
            "unit": "ns",
            "range": "± 4411.438323417552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95057.52631578948,
            "unit": "ns",
            "range": "± 15179.062088622524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5252.041666666667,
            "unit": "ns",
            "range": "± 826.2751156041594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19023.66304347826,
            "unit": "ns",
            "range": "± 1904.5281742550555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4453214.184709822,
            "unit": "ns",
            "range": "± 30920.363100755818"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5591179.534883721,
            "unit": "ns",
            "range": "± 180456.8360326684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26229544.714285713,
            "unit": "ns",
            "range": "± 404525.60563919594"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6344788.888888889,
            "unit": "ns",
            "range": "± 129535.18449980566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29070193.8,
            "unit": "ns",
            "range": "± 318921.34248906665"
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
          "id": "bf423acffa67c1d840346f19fcc9dc674aa943e0",
          "message": "Deploy on every push",
          "timestamp": "2023-02-03T08:24:40+09:00",
          "tree_id": "528c30f9a365fbd119edcdad71cb8022842c4531",
          "url": "https://github.com/moreal/libplanet/commit/bf423acffa67c1d840346f19fcc9dc674aa943e0"
        },
        "date": 1675380982402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106780.2,
            "unit": "ns",
            "range": "± 1813.877504133066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5935742.293229166,
            "unit": "ns",
            "range": "± 15557.735063660783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874004.769921875,
            "unit": "ns",
            "range": "± 4369.900468976739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341590.3924386161,
            "unit": "ns",
            "range": "± 575.8697504718554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623312.6158854165,
            "unit": "ns",
            "range": "± 1384.7230671687591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829548.1677083333,
            "unit": "ns",
            "range": "± 398.34937527064284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745289.5407714844,
            "unit": "ns",
            "range": "± 390.81292649185616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89105.34736842105,
            "unit": "ns",
            "range": "± 7549.130069324771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202006.5873015873,
            "unit": "ns",
            "range": "± 9145.7145625255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188452.22222222222,
            "unit": "ns",
            "range": "± 5194.8301840412105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3824111.1333333333,
            "unit": "ns",
            "range": "± 34238.71017652944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9281877.666666666,
            "unit": "ns",
            "range": "± 59371.16503905947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17239.337078651686,
            "unit": "ns",
            "range": "± 1048.3346202410346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48986.2625,
            "unit": "ns",
            "range": "± 2496.803281482955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40737.83018867925,
            "unit": "ns",
            "range": "± 1598.74443206884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87500.05208333333,
            "unit": "ns",
            "range": "± 13462.917453720047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4757.731958762886,
            "unit": "ns",
            "range": "± 465.4377535240328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16954.141176470588,
            "unit": "ns",
            "range": "± 942.8366791981825"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4372858.4453125,
            "unit": "ns",
            "range": "± 12219.442162566893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5596362.979166667,
            "unit": "ns",
            "range": "± 220407.6678979002"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25275716.35714286,
            "unit": "ns",
            "range": "± 225714.03170370145"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6216146.025641026,
            "unit": "ns",
            "range": "± 203275.233276991"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28648381.904761903,
            "unit": "ns",
            "range": "± 668416.0715238604"
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
          "id": "a547681bc93142d1c5952daa82b715e70db05c7c",
          "message": "Deploy when moreal/libplanet",
          "timestamp": "2023-02-03T08:23:28+09:00",
          "tree_id": "79afe5566a97cbabfe03601ffb0436006ec24e52",
          "url": "https://github.com/moreal/libplanet/commit/a547681bc93142d1c5952daa82b715e70db05c7c"
        },
        "date": 1675381278242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127063.28723404255,
            "unit": "ns",
            "range": "± 21105.36288552065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6284535.955078125,
            "unit": "ns",
            "range": "± 157240.54996418007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007971.7236328125,
            "unit": "ns",
            "range": "± 66810.22874496851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1553629.1903002635,
            "unit": "ns",
            "range": "± 82457.9655104006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2826733.8955078125,
            "unit": "ns",
            "range": "± 69254.10910643547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951692.174659242,
            "unit": "ns",
            "range": "± 36823.470787346014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 834170.9370117188,
            "unit": "ns",
            "range": "± 14428.266076694938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109378.88659793814,
            "unit": "ns",
            "range": "± 19766.642199188915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250876.3298969072,
            "unit": "ns",
            "range": "± 40586.948712948775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203190.5744680851,
            "unit": "ns",
            "range": "± 32650.374784356016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4141904.36,
            "unit": "ns",
            "range": "± 424703.30877678574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10461396.306122448,
            "unit": "ns",
            "range": "± 1029188.3567895443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27474.676767676767,
            "unit": "ns",
            "range": "± 10007.279045497571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67033.07291666667,
            "unit": "ns",
            "range": "± 15229.16302724535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63479.10101010101,
            "unit": "ns",
            "range": "± 14464.835396606395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119783.97938144329,
            "unit": "ns",
            "range": "± 33665.14730863464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5095.121951219512,
            "unit": "ns",
            "range": "± 841.0608291185764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29592.673469387755,
            "unit": "ns",
            "range": "± 11542.432499953808"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5947821.163515625,
            "unit": "ns",
            "range": "± 375145.9327548322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6254453.110526316,
            "unit": "ns",
            "range": "± 491041.6992256251"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30964341.98,
            "unit": "ns",
            "range": "± 2746520.720388053"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7401608.326530612,
            "unit": "ns",
            "range": "± 809695.0981400699"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38178093.15,
            "unit": "ns",
            "range": "± 3189905.8222292853"
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
          "id": "b48737cfa2b18324a2bed25b80bc27076741b9ce",
          "message": "Deploy on every push",
          "timestamp": "2023-02-03T08:25:36+09:00",
          "tree_id": "528c30f9a365fbd119edcdad71cb8022842c4531",
          "url": "https://github.com/moreal/libplanet/commit/b48737cfa2b18324a2bed25b80bc27076741b9ce"
        },
        "date": 1675381322413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135662.5875,
            "unit": "ns",
            "range": "± 7110.843907782986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7097703.070833334,
            "unit": "ns",
            "range": "± 23727.76181374682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2236989.2666666666,
            "unit": "ns",
            "range": "± 6362.990769561308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1623011.302734375,
            "unit": "ns",
            "range": "± 3367.411465194161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3217333.8559895833,
            "unit": "ns",
            "range": "± 8560.332367382178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019357.8505859375,
            "unit": "ns",
            "range": "± 1433.162421377412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920729.5858072917,
            "unit": "ns",
            "range": "± 2727.7039793295994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124016.18390804598,
            "unit": "ns",
            "range": "± 8214.274701564424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259728.9411764706,
            "unit": "ns",
            "range": "± 12371.024086619183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243907.73913043478,
            "unit": "ns",
            "range": "± 14086.718004949895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4899428.962962963,
            "unit": "ns",
            "range": "± 134071.4131663482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11901381.866666667,
            "unit": "ns",
            "range": "± 165454.73667435744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28037.217391304348,
            "unit": "ns",
            "range": "± 2399.635942287579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69148.43181818182,
            "unit": "ns",
            "range": "± 5524.112084049063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53495.48780487805,
            "unit": "ns",
            "range": "± 1885.2942757292722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124364.07216494845,
            "unit": "ns",
            "range": "± 18205.878956195844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7638.604166666667,
            "unit": "ns",
            "range": "± 781.0353382283052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27887.85393258427,
            "unit": "ns",
            "range": "± 2058.572677137784"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6264011.75984375,
            "unit": "ns",
            "range": "± 418029.64241183706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7462552.347826087,
            "unit": "ns",
            "range": "± 185708.17701060124"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 37154980.64444444,
            "unit": "ns",
            "range": "± 2059945.7887404878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8769245.436170213,
            "unit": "ns",
            "range": "± 887553.5988978758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40980879.60526316,
            "unit": "ns",
            "range": "± 1984697.8499289616"
          }
        ]
      }
    ]
  }
}