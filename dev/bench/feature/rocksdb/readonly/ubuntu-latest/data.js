window.BENCHMARK_DATA = {
  "lastUpdate": 1691374578294,
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
          "id": "a69d96d1bd4bc22a0afb4c17884ce41c61993088",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T11:03:19+09:00",
          "tree_id": "371aaa53049f0ad524b0b3206b8b236c1111564b",
          "url": "https://github.com/moreal/libplanet/commit/a69d96d1bd4bc22a0afb4c17884ce41c61993088"
        },
        "date": 1691374572932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225964.7333333334,
            "unit": "ns",
            "range": "± 46659.85463431319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3342244.8,
            "unit": "ns",
            "range": "± 37993.515652016205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4190699.2,
            "unit": "ns",
            "range": "± 53951.016082315684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3654530.075,
            "unit": "ns",
            "range": "± 129048.48218906693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6158794.045454546,
            "unit": "ns",
            "range": "± 148790.22713761983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7766557.428571428,
            "unit": "ns",
            "range": "± 60699.074763844736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19096568.666666668,
            "unit": "ns",
            "range": "± 184383.07688910942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48967186.333333336,
            "unit": "ns",
            "range": "± 392786.82116542314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97556730.07692307,
            "unit": "ns",
            "range": "± 977586.5469504872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196723871.66666666,
            "unit": "ns",
            "range": "± 2086224.6680672334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46776.59259259259,
            "unit": "ns",
            "range": "± 2467.0737310515156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6394169.692708333,
            "unit": "ns",
            "range": "± 29286.32000602302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917248.363671875,
            "unit": "ns",
            "range": "± 7119.754183192435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356486.6501302083,
            "unit": "ns",
            "range": "± 2515.829040019372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550399.2809709823,
            "unit": "ns",
            "range": "± 2789.778318999731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824039.3943359375,
            "unit": "ns",
            "range": "± 827.0318291579817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742887.4654296875,
            "unit": "ns",
            "range": "± 1072.593525156679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280394.8888888889,
            "unit": "ns",
            "range": "± 5261.580716285452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263778.5,
            "unit": "ns",
            "range": "± 8219.441979332472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229790.1052631579,
            "unit": "ns",
            "range": "± 5103.549700341875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179059.7333333334,
            "unit": "ns",
            "range": "± 39153.33309742729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829756.714285714,
            "unit": "ns",
            "range": "± 24198.861071192114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16963.22105263158,
            "unit": "ns",
            "range": "± 1317.4592745043788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83036.09333333334,
            "unit": "ns",
            "range": "± 3979.6538324716516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76092.30769230769,
            "unit": "ns",
            "range": "± 851.9209064045973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84772.63265306123,
            "unit": "ns",
            "range": "± 12447.990861268403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4071.276595744681,
            "unit": "ns",
            "range": "± 423.4071581786126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15895.77659574468,
            "unit": "ns",
            "range": "± 1031.0352158003839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352306.1263157895,
            "unit": "ns",
            "range": "± 90907.92510992859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2552487.074074074,
            "unit": "ns",
            "range": "± 70132.4961658705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1729962.75,
            "unit": "ns",
            "range": "± 87371.68326441162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4703791.382352941,
            "unit": "ns",
            "range": "± 147921.13858671032"
          }
        ]
      }
    ]
  }
}