window.BENCHMARK_DATA = {
  "lastUpdate": 1691374788381,
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
        "date": 1691373966096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452669.5652173914,
            "unit": "ns",
            "range": "± 78353.7452405147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730993.220338983,
            "unit": "ns",
            "range": "± 120075.40858288662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1846997.9797979798,
            "unit": "ns",
            "range": "± 109852.81059616608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4900121.739130435,
            "unit": "ns",
            "range": "± 186808.17929159725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47874.73684210526,
            "unit": "ns",
            "range": "± 4571.3252517919545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7435833.333333333,
            "unit": "ns",
            "range": "± 189621.66833315563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20438500,
            "unit": "ns",
            "range": "± 386271.5918452542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52420900,
            "unit": "ns",
            "range": "± 678407.7019020347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102847537.5,
            "unit": "ns",
            "range": "± 2006209.5925318138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210801792.85714287,
            "unit": "ns",
            "range": "± 3247023.244915561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4947293.359375,
            "unit": "ns",
            "range": "± 23047.322347353336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563060.7942708333,
            "unit": "ns",
            "range": "± 4763.201638329312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1209112.3697916667,
            "unit": "ns",
            "range": "± 7642.428982213361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716384.6875,
            "unit": "ns",
            "range": "± 8291.260256886528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861308.6393229166,
            "unit": "ns",
            "range": "± 2398.2605173246634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780501.3346354166,
            "unit": "ns",
            "range": "± 1961.6898585863605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3323268.867924528,
            "unit": "ns",
            "range": "± 137391.4285432512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3456338.888888889,
            "unit": "ns",
            "range": "± 192458.46637560645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4288651.724137931,
            "unit": "ns",
            "range": "± 123336.36533795831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3975600,
            "unit": "ns",
            "range": "± 102260.06062974929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6221205.714285715,
            "unit": "ns",
            "range": "± 203145.7459166537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278431.48148148146,
            "unit": "ns",
            "range": "± 6809.045851887429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260171.42857142858,
            "unit": "ns",
            "range": "± 10393.888428623171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236116.66666666666,
            "unit": "ns",
            "range": "± 15619.552111480833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4134038.888888889,
            "unit": "ns",
            "range": "± 87067.93249687881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828742.8571428573,
            "unit": "ns",
            "range": "± 50239.33050579327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21476.041666666668,
            "unit": "ns",
            "range": "± 2333.3619202509485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92723.4693877551,
            "unit": "ns",
            "range": "± 6268.540352309919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81100,
            "unit": "ns",
            "range": "± 6952.509712639589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99266.66666666667,
            "unit": "ns",
            "range": "± 18107.274878036507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5582.65306122449,
            "unit": "ns",
            "range": "± 1402.6503271479548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21232.978723404256,
            "unit": "ns",
            "range": "± 2373.346092958587"
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
        "date": 1691374763109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323601,
            "unit": "ns",
            "range": "± 114847.48208125436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2305541.6666666665,
            "unit": "ns",
            "range": "± 68168.86752763318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774955.7142857143,
            "unit": "ns",
            "range": "± 57742.434915025595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4399464.285714285,
            "unit": "ns",
            "range": "± 212997.0647111583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43060.256410256414,
            "unit": "ns",
            "range": "± 2113.4903576410024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6703835.714285715,
            "unit": "ns",
            "range": "± 14993.363000539073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16984607.14285714,
            "unit": "ns",
            "range": "± 82119.8604694168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43710746.666666664,
            "unit": "ns",
            "range": "± 219891.06025701086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87168028.57142857,
            "unit": "ns",
            "range": "± 606842.5818289937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174875913.33333334,
            "unit": "ns",
            "range": "± 1621624.013964602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4980735.15625,
            "unit": "ns",
            "range": "± 13963.361412959981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514428.2421875,
            "unit": "ns",
            "range": "± 3374.6390342837817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157100.1432291667,
            "unit": "ns",
            "range": "± 1875.3410907820164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513953.4114583335,
            "unit": "ns",
            "range": "± 5945.204091713509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804867.2770182291,
            "unit": "ns",
            "range": "± 436.77078204282896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754120.5989583334,
            "unit": "ns",
            "range": "± 1397.8227790900562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2895047.3684210526,
            "unit": "ns",
            "range": "± 30618.428880896274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3028126.6666666665,
            "unit": "ns",
            "range": "± 31500.690846543726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3893256.25,
            "unit": "ns",
            "range": "± 75526.61313515036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3303002.830188679,
            "unit": "ns",
            "range": "± 136445.06869316366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5756730.769230769,
            "unit": "ns",
            "range": "± 200931.2453157287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246411.11111111112,
            "unit": "ns",
            "range": "± 8288.415305884973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231043.58974358975,
            "unit": "ns",
            "range": "± 8076.893451523331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206854.54545454544,
            "unit": "ns",
            "range": "± 7703.501304389001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3844366.6666666665,
            "unit": "ns",
            "range": "± 36757.791529079084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3459000,
            "unit": "ns",
            "range": "± 56653.555345921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16441.23711340206,
            "unit": "ns",
            "range": "± 1761.5542721154654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77294.31818181818,
            "unit": "ns",
            "range": "± 4178.086179996976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66392.1052631579,
            "unit": "ns",
            "range": "± 2099.4698917722153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82519.19191919192,
            "unit": "ns",
            "range": "± 15334.259873595285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3844.8979591836733,
            "unit": "ns",
            "range": "± 642.1809567660081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15935.714285714286,
            "unit": "ns",
            "range": "± 2102.784114199039"
          }
        ]
      }
    ]
  }
}