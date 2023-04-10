window.BENCHMARK_DATA = {
  "lastUpdate": 1681099968601,
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
          "id": "268a2d064f86e8a6f2605cb5d7109b33d00dc625",
          "message": "Move `Transaction<T>.Serialize()` to `TransactionExtensions<T>.Serialize(ITransaction)`",
          "timestamp": "2023-04-10T12:56:42+09:00",
          "tree_id": "a86f6dec8cac90fa33a6fbd3735e61aa1aac0e69",
          "url": "https://github.com/moreal/libplanet/commit/268a2d064f86e8a6f2605cb5d7109b33d00dc625"
        },
        "date": 1681099953362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1432763.6363636365,
            "unit": "ns",
            "range": "± 129585.7351170475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2477694.736842105,
            "unit": "ns",
            "range": "± 67428.44033599689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2228917.1717171716,
            "unit": "ns",
            "range": "± 179491.13561217376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695750,
            "unit": "ns",
            "range": "± 370825.19242000446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49169.47368421053,
            "unit": "ns",
            "range": "± 3561.916579602166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6998426.923076923,
            "unit": "ns",
            "range": "± 68235.70856286994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19590193.333333332,
            "unit": "ns",
            "range": "± 258804.75670906456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49589266.666666664,
            "unit": "ns",
            "range": "± 511442.72080719523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96270764.28571428,
            "unit": "ns",
            "range": "± 580087.4782931687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196202400,
            "unit": "ns",
            "range": "± 4183392.797015079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834293.489583333,
            "unit": "ns",
            "range": "± 22400.245946714676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543075.1692708333,
            "unit": "ns",
            "range": "± 7145.578844391244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177675.8463541667,
            "unit": "ns",
            "range": "± 4520.4149488498715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628551.7020089286,
            "unit": "ns",
            "range": "± 5845.005910023407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824732.6106770834,
            "unit": "ns",
            "range": "± 3803.5679022459026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756381.6471354166,
            "unit": "ns",
            "range": "± 3225.5500656959416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121444.117647059,
            "unit": "ns",
            "range": "± 99163.61805706545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349893.3333333335,
            "unit": "ns",
            "range": "± 99053.36399911024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3936308.3333333335,
            "unit": "ns",
            "range": "± 99903.59229588888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141058.163265306,
            "unit": "ns",
            "range": "± 272594.09268299234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857955,
            "unit": "ns",
            "range": "± 238876.1656977555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308881.8181818182,
            "unit": "ns",
            "range": "± 9772.776426937695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252171.11111111112,
            "unit": "ns",
            "range": "± 9428.622337962168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217963.26530612246,
            "unit": "ns",
            "range": "± 8614.104080845917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5318614.285714285,
            "unit": "ns",
            "range": "± 80858.56462074672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3566785.714285714,
            "unit": "ns",
            "range": "± 54249.29431859859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22325.263157894737,
            "unit": "ns",
            "range": "± 1642.3237572501407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93107.14285714286,
            "unit": "ns",
            "range": "± 6461.3561820518935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85791.83673469388,
            "unit": "ns",
            "range": "± 7679.07416924599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 188687.75510204083,
            "unit": "ns",
            "range": "± 18180.868302368468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7673.19587628866,
            "unit": "ns",
            "range": "± 1182.7330164987159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19787.23404255319,
            "unit": "ns",
            "range": "± 1767.7659823322228"
          }
        ]
      }
    ]
  }
}