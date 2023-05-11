window.BENCHMARK_DATA = {
  "lastUpdate": 1683796947744,
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
          "id": "6a3446beb0b2fcedb89f6d11954a5419d96cf1b5",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T16:49:19+09:00",
          "tree_id": "a437fefa22201bdf1e35307d13475b2fd118e8d9",
          "url": "https://github.com/moreal/libplanet/commit/6a3446beb0b2fcedb89f6d11954a5419d96cf1b5"
        },
        "date": 1683792118391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183661.1333333333,
            "unit": "ns",
            "range": "± 29835.133143581545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390703.4,
            "unit": "ns",
            "range": "± 48781.72481985441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205768.923076923,
            "unit": "ns",
            "range": "± 40011.55650863372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4126665.918918919,
            "unit": "ns",
            "range": "± 140071.109038782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6614202.333333333,
            "unit": "ns",
            "range": "± 121321.09008957926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279758.93333333335,
            "unit": "ns",
            "range": "± 4962.236829533728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263136.3023255814,
            "unit": "ns",
            "range": "± 9658.484514700469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226476.68181818182,
            "unit": "ns",
            "range": "± 5204.383000678266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188025.1333333333,
            "unit": "ns",
            "range": "± 32612.738354528778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764966.8,
            "unit": "ns",
            "range": "± 35491.624446983464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17070.463157894737,
            "unit": "ns",
            "range": "± 1145.9425444225296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82212.0412371134,
            "unit": "ns",
            "range": "± 5654.056589294845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70078.14285714286,
            "unit": "ns",
            "range": "± 1150.4419790901006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84166.16326530612,
            "unit": "ns",
            "range": "± 11324.263255609523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4234.693877551021,
            "unit": "ns",
            "range": "± 387.9903391337189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15682.978723404256,
            "unit": "ns",
            "range": "± 1642.356581052782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5875737.575721154,
            "unit": "ns",
            "range": "± 12652.549807143105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850869.5975260416,
            "unit": "ns",
            "range": "± 2907.7433642917895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335802.4434988839,
            "unit": "ns",
            "range": "± 954.5916577067117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565969.230168269,
            "unit": "ns",
            "range": "± 1151.2534994181517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813205.3587239584,
            "unit": "ns",
            "range": "± 612.0757218526302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744635.6526692709,
            "unit": "ns",
            "range": "± 645.3034697218668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7580470.933333334,
            "unit": "ns",
            "range": "± 92311.89329152915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19502691.866666667,
            "unit": "ns",
            "range": "± 95601.50810889564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49465990.13333333,
            "unit": "ns",
            "range": "± 374004.5593604569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99510740.85714285,
            "unit": "ns",
            "range": "± 535335.1209355267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197908283.06666666,
            "unit": "ns",
            "range": "± 1743767.0359885672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342842.18,
            "unit": "ns",
            "range": "± 95986.51727599745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553432.888888889,
            "unit": "ns",
            "range": "± 54621.17653210734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2129004.305882353,
            "unit": "ns",
            "range": "± 114025.82904147552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5305236.488888889,
            "unit": "ns",
            "range": "± 201451.5070964657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44182.543209876545,
            "unit": "ns",
            "range": "± 1983.2168631379093"
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
          "id": "5d48171ccc1c143e964653be710b13f7b90fe711",
          "message": "Make `CurrencyInputType.totalSupplyTrackable` optional",
          "timestamp": "2023-05-11T18:09:34+09:00",
          "tree_id": "9eeaa2de38d3805de08ef1f4822a8d1989be74a0",
          "url": "https://github.com/moreal/libplanet/commit/5d48171ccc1c143e964653be710b13f7b90fe711"
        },
        "date": 1683796943745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331087.3333333335,
            "unit": "ns",
            "range": "± 71240.51941603645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389462.4324324327,
            "unit": "ns",
            "range": "± 106047.61524730832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4292832.214285715,
            "unit": "ns",
            "range": "± 32282.998028680362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283867.857142857,
            "unit": "ns",
            "range": "± 156192.0423507114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6830947.275862069,
            "unit": "ns",
            "range": "± 198387.2119514001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282931,
            "unit": "ns",
            "range": "± 9471.14277562061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269006.0540540541,
            "unit": "ns",
            "range": "± 8557.056003173138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239963.42105263157,
            "unit": "ns",
            "range": "± 5206.558805069167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4286875,
            "unit": "ns",
            "range": "± 30782.22371634442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793249.1428571427,
            "unit": "ns",
            "range": "± 23008.59691793196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19634.891304347828,
            "unit": "ns",
            "range": "± 1552.0649446627638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95196.23711340207,
            "unit": "ns",
            "range": "± 7744.832323842885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75183.71428571429,
            "unit": "ns",
            "range": "± 4796.24145737684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107007.42857142857,
            "unit": "ns",
            "range": "± 1650.3433542185055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4687.765306122449,
            "unit": "ns",
            "range": "± 436.7963455017907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18604.308510638297,
            "unit": "ns",
            "range": "± 1910.9572561887808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5960888.845424107,
            "unit": "ns",
            "range": "± 9182.731144984768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858922.1734095982,
            "unit": "ns",
            "range": "± 1228.0726737010446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352081.1239483173,
            "unit": "ns",
            "range": "± 968.8636336255967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553728.719010417,
            "unit": "ns",
            "range": "± 2740.471559195839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796988.1249302456,
            "unit": "ns",
            "range": "± 576.9928843387193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749265.123046875,
            "unit": "ns",
            "range": "± 406.21448052420794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7623418.866666666,
            "unit": "ns",
            "range": "± 39692.30296357697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19674306,
            "unit": "ns",
            "range": "± 72917.13786104166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50600605.666666664,
            "unit": "ns",
            "range": "± 321060.3310030835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100321721.07142857,
            "unit": "ns",
            "range": "± 234709.83429511567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198926173.64285713,
            "unit": "ns",
            "range": "± 728812.4777740638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396833.7684210527,
            "unit": "ns",
            "range": "± 106492.42426101658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2634145.9444444445,
            "unit": "ns",
            "range": "± 43116.453595394305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199005.870588235,
            "unit": "ns",
            "range": "± 117627.98868343046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5285546.333333333,
            "unit": "ns",
            "range": "± 184391.6295255025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44946.25274725275,
            "unit": "ns",
            "range": "± 2434.1061128764227"
          }
        ]
      }
    ]
  }
}