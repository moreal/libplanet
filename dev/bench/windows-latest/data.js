window.BENCHMARK_DATA = {
  "lastUpdate": 1675381550956,
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
        "date": 1675381142537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116226.66666666667,
            "unit": "ns",
            "range": "± 15958.758646213368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5141986.339962121,
            "unit": "ns",
            "range": "± 160814.80147909423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636010.7333096592,
            "unit": "ns",
            "range": "± 33159.322811832695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242224.515625,
            "unit": "ns",
            "range": "± 32489.86951556802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785473.330965909,
            "unit": "ns",
            "range": "± 66113.80737652698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914935.8090049342,
            "unit": "ns",
            "range": "± 20180.862520096856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911463.0615234375,
            "unit": "ns",
            "range": "± 16393.311301462592"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5465084.522405661,
            "unit": "ns",
            "range": "± 226821.5515446158"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5774969.354838709,
            "unit": "ns",
            "range": "± 495536.0258166786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29267167,
            "unit": "ns",
            "range": "± 2655418.399000143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6321116,
            "unit": "ns",
            "range": "± 609753.2958185762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34927290.90909091,
            "unit": "ns",
            "range": "± 2823391.0107546905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107145.91836734694,
            "unit": "ns",
            "range": "± 22898.4227988235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205085.26315789475,
            "unit": "ns",
            "range": "± 31207.17991724754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189006.1855670103,
            "unit": "ns",
            "range": "± 31818.786426787865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3878990.909090909,
            "unit": "ns",
            "range": "± 464354.93969436025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9726962.886597939,
            "unit": "ns",
            "range": "± 878433.7118464019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28031.632653061224,
            "unit": "ns",
            "range": "± 10768.688832101801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57212.08791208791,
            "unit": "ns",
            "range": "± 13971.040167788631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51832.10526315789,
            "unit": "ns",
            "range": "± 13225.780586281528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118896.7741935484,
            "unit": "ns",
            "range": "± 26239.819771770137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4823.595505617977,
            "unit": "ns",
            "range": "± 638.8950817106954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27256,
            "unit": "ns",
            "range": "± 10064.281475404074"
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
        "date": 1675381367282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130075,
            "unit": "ns",
            "range": "± 22926.362669711867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5651817.763157895,
            "unit": "ns",
            "range": "± 123166.39351844134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909986.8489583333,
            "unit": "ns",
            "range": "± 22371.991980010436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394249.90234375,
            "unit": "ns",
            "range": "± 26298.2893393488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093675.390625,
            "unit": "ns",
            "range": "± 53829.30600726951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002626.3527199074,
            "unit": "ns",
            "range": "± 28101.83559674991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976217.2914566533,
            "unit": "ns",
            "range": "± 29182.8411553217"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5692762.1953125,
            "unit": "ns",
            "range": "± 341210.45616950706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6099777.777777778,
            "unit": "ns",
            "range": "± 672117.319623493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32077453,
            "unit": "ns",
            "range": "± 2468966.4074879675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6855054.639175258,
            "unit": "ns",
            "range": "± 612260.700876374"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36013061.8556701,
            "unit": "ns",
            "range": "± 2331824.700853179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115711,
            "unit": "ns",
            "range": "± 24719.51298513428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229444.44444444444,
            "unit": "ns",
            "range": "± 38770.45798927854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208478.125,
            "unit": "ns",
            "range": "± 42362.67523763666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504942.268041237,
            "unit": "ns",
            "range": "± 438013.46412787645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11645340.81632653,
            "unit": "ns",
            "range": "± 710771.7526015184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26275.51020408163,
            "unit": "ns",
            "range": "± 9216.134006494696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67816.49484536082,
            "unit": "ns",
            "range": "± 16896.509010815735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55875.78947368421,
            "unit": "ns",
            "range": "± 13294.373436216922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129910.41666666667,
            "unit": "ns",
            "range": "± 33395.04368888379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5698.863636363636,
            "unit": "ns",
            "range": "± 967.4583739516412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28892.929292929293,
            "unit": "ns",
            "range": "± 9116.594563417031"
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
        "date": 1675381540604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139760.41666666666,
            "unit": "ns",
            "range": "± 27980.784681697343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5983983.298399391,
            "unit": "ns",
            "range": "± 201738.28848366806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919569.5349351414,
            "unit": "ns",
            "range": "± 79002.29561989293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393187.5317382812,
            "unit": "ns",
            "range": "± 72781.03833945582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3195617.518028846,
            "unit": "ns",
            "range": "± 85292.52271520742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029762.8728693182,
            "unit": "ns",
            "range": "± 22387.865856604363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963703.9913054436,
            "unit": "ns",
            "range": "± 29034.177909882495"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5968884.684244792,
            "unit": "ns",
            "range": "± 340918.34745889466"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6155385.416666667,
            "unit": "ns",
            "range": "± 621535.0612931396"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31270383.83838384,
            "unit": "ns",
            "range": "± 2579938.9594387724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7061962.886597938,
            "unit": "ns",
            "range": "± 979998.8925716095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36564150.5050505,
            "unit": "ns",
            "range": "± 3042133.7624515626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116632.63157894737,
            "unit": "ns",
            "range": "± 24093.362033243713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233114.58333333334,
            "unit": "ns",
            "range": "± 36043.46200781457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250475.25773195876,
            "unit": "ns",
            "range": "± 48994.88712893042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347122.988505747,
            "unit": "ns",
            "range": "± 297731.2682101676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10788069.47368421,
            "unit": "ns",
            "range": "± 1092172.282808361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31056,
            "unit": "ns",
            "range": "± 11268.265262239882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65101.086956521736,
            "unit": "ns",
            "range": "± 12447.238049835736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65397.82608695652,
            "unit": "ns",
            "range": "± 13084.97148405959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143862.1052631579,
            "unit": "ns",
            "range": "± 26238.44093605333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5890.243902439024,
            "unit": "ns",
            "range": "± 1474.441493432328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30692.929292929293,
            "unit": "ns",
            "range": "± 10293.907971790122"
          }
        ]
      }
    ]
  }
}