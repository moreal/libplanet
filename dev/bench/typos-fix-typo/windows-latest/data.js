window.BENCHMARK_DATA = {
  "lastUpdate": 1687507099537,
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
          "id": "9a382cb20532954b5e049176dcd81a078af6ae8f",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:34:43+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/9a382cb20532954b5e049176dcd81a078af6ae8f"
        },
        "date": 1687506989110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1812632.6530612244,
            "unit": "ns",
            "range": "± 182834.11388779755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3496572.0430107526,
            "unit": "ns",
            "range": "± 232004.5095914748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2768503.1914893617,
            "unit": "ns",
            "range": "± 222349.37511349295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7235307.291666667,
            "unit": "ns",
            "range": "± 699197.8631553509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62408.333333333336,
            "unit": "ns",
            "range": "± 13662.924605366517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9286214.141414141,
            "unit": "ns",
            "range": "± 628454.2355052675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25450747.05882353,
            "unit": "ns",
            "range": "± 486381.2921947747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65473251.35135135,
            "unit": "ns",
            "range": "± 2200464.144046486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128816904.3478261,
            "unit": "ns",
            "range": "± 3145167.1056166417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266226886.20689654,
            "unit": "ns",
            "range": "± 7710994.117711049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948811.614583333,
            "unit": "ns",
            "range": "± 62593.67729711657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953309.6114309211,
            "unit": "ns",
            "range": "± 41311.17332882118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482864.3880208333,
            "unit": "ns",
            "range": "± 30351.94029581191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3298300.167410714,
            "unit": "ns",
            "range": "± 48074.52320017363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1064699.6556332237,
            "unit": "ns",
            "range": "± 19052.31070031891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 997698.8671875,
            "unit": "ns",
            "range": "± 15599.986979405765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3842763.1578947366,
            "unit": "ns",
            "range": "± 306530.89950545557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4434062.765957447,
            "unit": "ns",
            "range": "± 388844.5162864337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5330705.555555556,
            "unit": "ns",
            "range": "± 344364.9411575062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5131940.625,
            "unit": "ns",
            "range": "± 369564.1384624596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8894669.072164949,
            "unit": "ns",
            "range": "± 535725.9633278054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346494.623655914,
            "unit": "ns",
            "range": "± 49970.09837543152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323929.347826087,
            "unit": "ns",
            "range": "± 44510.64457956856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290409.375,
            "unit": "ns",
            "range": "± 42620.62529642069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4944231.25,
            "unit": "ns",
            "range": "± 258092.99893581684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4516063.333333333,
            "unit": "ns",
            "range": "± 293873.40255684435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22017.441860465115,
            "unit": "ns",
            "range": "± 4486.953423648588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99672.82608695653,
            "unit": "ns",
            "range": "± 14884.634036045503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115784.73684210527,
            "unit": "ns",
            "range": "± 31186.551822182442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136705.26315789475,
            "unit": "ns",
            "range": "± 26941.36410176837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7495.789473684211,
            "unit": "ns",
            "range": "± 1687.3695876777956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21477.10843373494,
            "unit": "ns",
            "range": "± 4378.977642717055"
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
          "id": "4aeb55a981534c977bcf6b2b6faa489b5b39a653",
          "message": "ci(gh-actions): check typos\n\n[skip changelog]",
          "timestamp": "2023-06-23T16:37:43+09:00",
          "tree_id": "fd70e16d2e92951b7ac0ee80ca30552b67d76b40",
          "url": "https://github.com/moreal/libplanet/commit/4aeb55a981534c977bcf6b2b6faa489b5b39a653"
        },
        "date": 1687507080560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703175.2577319588,
            "unit": "ns",
            "range": "± 149173.44772593846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3097948.6486486485,
            "unit": "ns",
            "range": "± 102403.53081375234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645883.950617284,
            "unit": "ns",
            "range": "± 134724.1723455651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608120.689655173,
            "unit": "ns",
            "range": "± 288235.7141869296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60518.75,
            "unit": "ns",
            "range": "± 5420.92073166057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9592513.043478262,
            "unit": "ns",
            "range": "± 241778.6615600532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24914061.53846154,
            "unit": "ns",
            "range": "± 316370.4725435607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64792940.47619048,
            "unit": "ns",
            "range": "± 2347126.4204741023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127390193.75,
            "unit": "ns",
            "range": "± 2435314.8074307903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259850810.3448276,
            "unit": "ns",
            "range": "± 7518270.0886547435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5964221.394230769,
            "unit": "ns",
            "range": "± 51844.74225564524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941301.150173611,
            "unit": "ns",
            "range": "± 39263.66182312895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1475522.7278645833,
            "unit": "ns",
            "range": "± 25495.16625255825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276500.8333333335,
            "unit": "ns",
            "range": "± 54699.86806648199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046472.5873161765,
            "unit": "ns",
            "range": "± 20292.84960185152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946552.8459821428,
            "unit": "ns",
            "range": "± 11748.303487261386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4063978.048780488,
            "unit": "ns",
            "range": "± 110994.1879383671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4224097.368421053,
            "unit": "ns",
            "range": "± 124995.3371818803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5241357.142857143,
            "unit": "ns",
            "range": "± 90056.09119009975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5292838.636363637,
            "unit": "ns",
            "range": "± 187390.58974153065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8457446,
            "unit": "ns",
            "range": "± 336492.32105135865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326857.5,
            "unit": "ns",
            "range": "± 11355.782159831107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316881.8181818182,
            "unit": "ns",
            "range": "± 9961.283004257488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302932.14285714284,
            "unit": "ns",
            "range": "± 12824.934621741666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5087257.142857143,
            "unit": "ns",
            "range": "± 100929.66645852235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4634303.571428572,
            "unit": "ns",
            "range": "± 116665.99200485201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26725.25773195876,
            "unit": "ns",
            "range": "± 2444.2547828119245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119868.36734693877,
            "unit": "ns",
            "range": "± 11026.945413033276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108929.89690721649,
            "unit": "ns",
            "range": "± 10162.688753356293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124633.67346938775,
            "unit": "ns",
            "range": "± 20509.88669753899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7953.092783505154,
            "unit": "ns",
            "range": "± 1365.150602821857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25836.458333333332,
            "unit": "ns",
            "range": "± 2625.7478049286683"
          }
        ]
      }
    ]
  }
}