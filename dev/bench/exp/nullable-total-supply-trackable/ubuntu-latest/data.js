window.BENCHMARK_DATA = {
  "lastUpdate": 1683792122446,
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
      }
    ]
  }
}