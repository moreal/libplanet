window.BENCHMARK_DATA = {
  "lastUpdate": 1691373905153,
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
          "id": "779550635918e37d352669a232b9baa12f83dc0f",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T10:48:35+09:00",
          "tree_id": "bd06fb1d879a0b988d1dc1e6469cdf6bb2d1a17d",
          "url": "https://github.com/moreal/libplanet/commit/779550635918e37d352669a232b9baa12f83dc0f"
        },
        "date": 1691373898356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4285451.285714285,
            "unit": "ns",
            "range": "± 73998.82810966938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4471618.928571428,
            "unit": "ns",
            "range": "± 66919.64847080447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5364223.333333333,
            "unit": "ns",
            "range": "± 144965.5774950701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4926948.363636363,
            "unit": "ns",
            "range": "± 117957.9093852046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7757166.1875,
            "unit": "ns",
            "range": "± 234527.5587640708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9871696.92857143,
            "unit": "ns",
            "range": "± 279575.89494392823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26489532.266666666,
            "unit": "ns",
            "range": "± 207680.49873628572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66578038.15384615,
            "unit": "ns",
            "range": "± 302771.25369984243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133360303.86666666,
            "unit": "ns",
            "range": "± 1302375.435475219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263923960.86666667,
            "unit": "ns",
            "range": "± 2747776.153483495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56448.35365853659,
            "unit": "ns",
            "range": "± 3014.724254417249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7236069.377083333,
            "unit": "ns",
            "range": "± 32332.236316351922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2297371.32890625,
            "unit": "ns",
            "range": "± 3380.35428650152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1660601.175390625,
            "unit": "ns",
            "range": "± 3320.3882225987577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3166754.596028646,
            "unit": "ns",
            "range": "± 8540.755905887137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028591.9248046875,
            "unit": "ns",
            "range": "± 671.2827801790837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921304.1419921875,
            "unit": "ns",
            "range": "± 699.4006451395228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347396.35294117645,
            "unit": "ns",
            "range": "± 7042.094414493963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328064.76,
            "unit": "ns",
            "range": "± 7977.602403395815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300129.6666666667,
            "unit": "ns",
            "range": "± 7788.822976696726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5396273.6,
            "unit": "ns",
            "range": "± 74041.96566600399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4968482.571428572,
            "unit": "ns",
            "range": "± 58996.63676296013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25057.622448979593,
            "unit": "ns",
            "range": "± 2330.683831845695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106313.66129032258,
            "unit": "ns",
            "range": "± 4802.966450815301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95036.77142857143,
            "unit": "ns",
            "range": "± 3107.731734634407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112841.48453608247,
            "unit": "ns",
            "range": "± 14015.16460623501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7477.731958762886,
            "unit": "ns",
            "range": "± 723.2402568110855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23912.795698924732,
            "unit": "ns",
            "range": "± 2123.0610261720844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1743476.2837837837,
            "unit": "ns",
            "range": "± 81816.3538660338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3256404.9714285713,
            "unit": "ns",
            "range": "± 99700.96149117051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2231919.870588235,
            "unit": "ns",
            "range": "± 119799.04313700747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5796554.461538462,
            "unit": "ns",
            "range": "± 201020.16826714127"
          }
        ]
      }
    ]
  }
}