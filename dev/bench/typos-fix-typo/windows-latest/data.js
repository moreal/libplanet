window.BENCHMARK_DATA = {
  "lastUpdate": 1687506721123,
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
          "id": "ad0c5c9824be30eb969ce3b4003f9fbcefcb262c",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:34:59+09:00",
          "tree_id": "6e70ad7a273bb935667e446f37f0df2611e0d32f",
          "url": "https://github.com/moreal/libplanet/commit/ad0c5c9824be30eb969ce3b4003f9fbcefcb262c"
        },
        "date": 1687506684172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314710,
            "unit": "ns",
            "range": "± 133691.27786724822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2387020,
            "unit": "ns",
            "range": "± 84209.41904805102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029236.8421052631,
            "unit": "ns",
            "range": "± 127169.86968570447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4806994.594594595,
            "unit": "ns",
            "range": "± 159222.00599223774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50545.26315789474,
            "unit": "ns",
            "range": "± 5602.787460151261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6911180,
            "unit": "ns",
            "range": "± 21103.2225027364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17652471.42857143,
            "unit": "ns",
            "range": "± 45460.4719013618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44411073.333333336,
            "unit": "ns",
            "range": "± 358623.80899900163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88562220,
            "unit": "ns",
            "range": "± 836639.3583856786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181656778.57142857,
            "unit": "ns",
            "range": "± 474834.03283280326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797127.34375,
            "unit": "ns",
            "range": "± 15479.918313949753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512057.0731026786,
            "unit": "ns",
            "range": "± 2792.751046537538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142236.049107143,
            "unit": "ns",
            "range": "± 4275.154701082831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581172.0703125,
            "unit": "ns",
            "range": "± 5542.3256833218165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818870.1627604166,
            "unit": "ns",
            "range": "± 1345.738755932067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734792.2819010416,
            "unit": "ns",
            "range": "± 850.7734232974592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3149580,
            "unit": "ns",
            "range": "± 45959.50391377174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3141142.1052631577,
            "unit": "ns",
            "range": "± 51830.1747782492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4031635.714285714,
            "unit": "ns",
            "range": "± 57754.182094897245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868253.5714285714,
            "unit": "ns",
            "range": "± 102538.5003832539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6326487.878787879,
            "unit": "ns",
            "range": "± 195026.02191370472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247244,
            "unit": "ns",
            "range": "± 8711.197579283007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233266.66666666666,
            "unit": "ns",
            "range": "± 8436.351849011824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205867.85714285713,
            "unit": "ns",
            "range": "± 5711.784670922401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3831460,
            "unit": "ns",
            "range": "± 26809.8009797057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3447160,
            "unit": "ns",
            "range": "± 39970.00303799267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15031.578947368422,
            "unit": "ns",
            "range": "± 1195.8494851114974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74489.43661971831,
            "unit": "ns",
            "range": "± 3110.281515657359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64984.84848484849,
            "unit": "ns",
            "range": "± 1674.6494431897554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74633.72093023256,
            "unit": "ns",
            "range": "± 6256.170797749659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3803.125,
            "unit": "ns",
            "range": "± 641.1261678935705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13783.505154639175,
            "unit": "ns",
            "range": "± 1135.752358238356"
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
          "id": "028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a",
          "message": "ci(gh-actions): check typos",
          "timestamp": "2023-06-23T16:31:07+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a"
        },
        "date": 1687506702716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683457.731958763,
            "unit": "ns",
            "range": "± 154892.55135620866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991406.896551724,
            "unit": "ns",
            "range": "± 87500.05686134676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2677770.1030927836,
            "unit": "ns",
            "range": "± 177399.58436919816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6521913.924050633,
            "unit": "ns",
            "range": "± 337751.1550718267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55428.40909090909,
            "unit": "ns",
            "range": "± 3060.0859751890293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8821271.42857143,
            "unit": "ns",
            "range": "± 106607.57245850084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24342192.85714286,
            "unit": "ns",
            "range": "± 208244.55469577003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62044685.71428572,
            "unit": "ns",
            "range": "± 367780.48136426095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124804906.66666667,
            "unit": "ns",
            "range": "± 2328884.064607114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244856221.42857143,
            "unit": "ns",
            "range": "± 2769234.789662069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877950.455729167,
            "unit": "ns",
            "range": "± 23026.452942612203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882686.732700893,
            "unit": "ns",
            "range": "± 20288.88901550374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403944.9739583333,
            "unit": "ns",
            "range": "± 11107.186531337326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3179384.140625,
            "unit": "ns",
            "range": "± 25836.987731904697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997822.3074776785,
            "unit": "ns",
            "range": "± 7932.924835640483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937224.12109375,
            "unit": "ns",
            "range": "± 8942.992573933105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4011665,
            "unit": "ns",
            "range": "± 89729.48394743884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4287920,
            "unit": "ns",
            "range": "± 56320.56462785152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5044793.75,
            "unit": "ns",
            "range": "± 155375.36014543162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5210500,
            "unit": "ns",
            "range": "± 72060.28459133793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8193644.444444444,
            "unit": "ns",
            "range": "± 304651.5517436239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313847.4576271186,
            "unit": "ns",
            "range": "± 13899.446229755458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306054.1666666667,
            "unit": "ns",
            "range": "± 7288.226310538333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277727.9569892473,
            "unit": "ns",
            "range": "± 15702.557016858596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4997153.846153846,
            "unit": "ns",
            "range": "± 46107.00625329111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4522992.307692308,
            "unit": "ns",
            "range": "± 50745.89411204387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24870.103092783505,
            "unit": "ns",
            "range": "± 2199.250106497175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105193.75,
            "unit": "ns",
            "range": "± 8910.039429294293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89118.75,
            "unit": "ns",
            "range": "± 6067.676439002088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112922.22222222222,
            "unit": "ns",
            "range": "± 20221.72278917794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.329896907217,
            "unit": "ns",
            "range": "± 1004.1548137784155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21641.489361702126,
            "unit": "ns",
            "range": "± 1950.539466292089"
          }
        ]
      }
    ]
  }
}