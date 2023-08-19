window.BENCHMARK_DATA = {
  "lastUpdate": 1692425014095,
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
          "id": "2988fdbc9e1a7d2f94d5348b3cd66c07ed1c27df",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-07T11:00:48+09:00",
          "tree_id": "334ca507a1e73baa34b37b6338099eec139bde8a",
          "url": "https://github.com/moreal/libplanet/commit/2988fdbc9e1a7d2f94d5348b3cd66c07ed1c27df"
        },
        "date": 1691374837011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567012.5,
            "unit": "ns",
            "range": "± 252279.935681315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2784821.052631579,
            "unit": "ns",
            "range": "± 364258.2027566105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1902720.4081632653,
            "unit": "ns",
            "range": "± 296177.0322367586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5289594.845360825,
            "unit": "ns",
            "range": "± 761176.8241199409"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61273.15789473684,
            "unit": "ns",
            "range": "± 13057.153029690719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7779010.752688172,
            "unit": "ns",
            "range": "± 709821.05942615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23568496,
            "unit": "ns",
            "range": "± 1912725.202634168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60283442.85714286,
            "unit": "ns",
            "range": "± 3812035.120753174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120035981.42857143,
            "unit": "ns",
            "range": "± 5840117.14512479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237660713.33333334,
            "unit": "ns",
            "range": "± 8926753.838821204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5744440.885416667,
            "unit": "ns",
            "range": "± 106590.58215205724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827412.3828125,
            "unit": "ns",
            "range": "± 39483.30863623993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338800.3018465908,
            "unit": "ns",
            "range": "± 32206.26456762464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2959477.640964674,
            "unit": "ns",
            "range": "± 71480.30273269933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973786.9010416666,
            "unit": "ns",
            "range": "± 14769.60074965669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896366.9291834678,
            "unit": "ns",
            "range": "± 26749.438263298747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254110.7526881723,
            "unit": "ns",
            "range": "± 289600.56166711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587306.3829787234,
            "unit": "ns",
            "range": "± 427397.3162998627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4635503.125,
            "unit": "ns",
            "range": "± 427562.2260537363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3993939.7849462368,
            "unit": "ns",
            "range": "± 344477.06370917114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7285913.684210527,
            "unit": "ns",
            "range": "± 695364.9247988695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332561.2244897959,
            "unit": "ns",
            "range": "± 49356.25151319354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292973.40425531915,
            "unit": "ns",
            "range": "± 37354.66223160063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252584.04255319148,
            "unit": "ns",
            "range": "± 35692.71876348666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4141409.340659341,
            "unit": "ns",
            "range": "± 296000.10359533544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3957132.474226804,
            "unit": "ns",
            "range": "± 322675.5965782783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32025.757575757576,
            "unit": "ns",
            "range": "± 10262.395102837998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105762.76595744681,
            "unit": "ns",
            "range": "± 16019.061119458163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116619.79166666667,
            "unit": "ns",
            "range": "± 21662.27922008143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139535.7894736842,
            "unit": "ns",
            "range": "± 26951.334849464747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7475.903614457831,
            "unit": "ns",
            "range": "± 1264.0035467538405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30168.42105263158,
            "unit": "ns",
            "range": "± 10187.719590719335"
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "d6c6b5b9afb0d13a1a68222d97177acf58349e8c",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-18T17:25:38+09:00",
          "tree_id": "031ce9e5ebea4204c0e6074a2d2f5ff7e57d4ea1",
          "url": "https://github.com/moreal/libplanet/commit/d6c6b5b9afb0d13a1a68222d97177acf58349e8c"
        },
        "date": 1692348541689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660023.7113402062,
            "unit": "ns",
            "range": "± 236872.85697060314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3223671.875,
            "unit": "ns",
            "range": "± 318701.5131181774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2044520,
            "unit": "ns",
            "range": "± 224219.87954456385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5689945.360824742,
            "unit": "ns",
            "range": "± 445419.6006343857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64235.71428571428,
            "unit": "ns",
            "range": "± 18272.97170263668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8416174.193548387,
            "unit": "ns",
            "range": "± 819917.1314043063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25481394.680851065,
            "unit": "ns",
            "range": "± 1409343.7016307418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64176025,
            "unit": "ns",
            "range": "± 1467067.2825223007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122852034.375,
            "unit": "ns",
            "range": "± 7056331.204525746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254271052.8301887,
            "unit": "ns",
            "range": "± 10606191.594220288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5228683.345170454,
            "unit": "ns",
            "range": "± 126239.40732995268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668077.3307291667,
            "unit": "ns",
            "range": "± 30687.292236785026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1241626.2643914474,
            "unit": "ns",
            "range": "± 25417.534564380356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203305.8143028845,
            "unit": "ns",
            "range": "± 86800.11513496371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012268.0261948529,
            "unit": "ns",
            "range": "± 20218.27905766962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948599.0751378676,
            "unit": "ns",
            "range": "± 30599.153200642217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3729547.9166666665,
            "unit": "ns",
            "range": "± 314698.16950587893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3864778.494623656,
            "unit": "ns",
            "range": "± 358033.4046989442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5007429.347826087,
            "unit": "ns",
            "range": "± 414711.1695917839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452333.333333333,
            "unit": "ns",
            "range": "± 350601.64634566376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7512531.25,
            "unit": "ns",
            "range": "± 595610.8509337284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320396.875,
            "unit": "ns",
            "range": "± 41836.72889780487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307170.652173913,
            "unit": "ns",
            "range": "± 33072.997976814724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272816.16161616164,
            "unit": "ns",
            "range": "± 38496.216901517946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4747663.265306123,
            "unit": "ns",
            "range": "± 419882.8143802842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4342837.894736842,
            "unit": "ns",
            "range": "± 360457.8088389368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26025.252525252527,
            "unit": "ns",
            "range": "± 8231.142250119527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105378.72340425532,
            "unit": "ns",
            "range": "± 23470.997304797507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127326.04166666667,
            "unit": "ns",
            "range": "± 19708.722326564297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130312.24489795919,
            "unit": "ns",
            "range": "± 28801.618888155954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7214.634146341464,
            "unit": "ns",
            "range": "± 1337.5970670876043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25858,
            "unit": "ns",
            "range": "± 9107.175326315093"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "653855c8e0e9880389ab5bb01d1ce28420897860",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-19T03:10:19+09:00",
          "tree_id": "bce0cdd4497ae5138a6e386717ce6cc4f186842f",
          "url": "https://github.com/moreal/libplanet/commit/653855c8e0e9880389ab5bb01d1ce28420897860"
        },
        "date": 1692383350455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514379.5918367347,
            "unit": "ns",
            "range": "± 135668.50135394544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809806.6666666665,
            "unit": "ns",
            "range": "± 124397.51055695754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1917045.4545454546,
            "unit": "ns",
            "range": "± 159105.50746167844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4881194.545454546,
            "unit": "ns",
            "range": "± 207239.9025089502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63125.82417582418,
            "unit": "ns",
            "range": "± 4808.842333760235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8591050,
            "unit": "ns",
            "range": "± 60341.11686582694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22150700,
            "unit": "ns",
            "range": "± 167774.7384356264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55648215.384615384,
            "unit": "ns",
            "range": "± 230306.06029858705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111672678.57142857,
            "unit": "ns",
            "range": "± 848632.5236960491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222569820,
            "unit": "ns",
            "range": "± 1222150.9499940784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4737684.375,
            "unit": "ns",
            "range": "± 18158.388788421234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1471281.3541666667,
            "unit": "ns",
            "range": "± 2746.800786543097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089285.078125,
            "unit": "ns",
            "range": "± 3223.9417871901223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2806731.9754464286,
            "unit": "ns",
            "range": "± 10462.757614277485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869161.4127604166,
            "unit": "ns",
            "range": "± 2252.6131123834252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784668.6393229166,
            "unit": "ns",
            "range": "± 2232.3667481127995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3688220,
            "unit": "ns",
            "range": "± 36329.44889676772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3883750,
            "unit": "ns",
            "range": "± 63701.99550068452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4567768.9655172415,
            "unit": "ns",
            "range": "± 119973.87841719153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194823.684210527,
            "unit": "ns",
            "range": "± 80255.23065061633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6465283.783783784,
            "unit": "ns",
            "range": "± 209830.15156909052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302973.1707317073,
            "unit": "ns",
            "range": "± 10400.649604477692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293775,
            "unit": "ns",
            "range": "± 6699.008174820791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280657.14285714284,
            "unit": "ns",
            "range": "± 3289.5438743234454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408569.230769231,
            "unit": "ns",
            "range": "± 15590.13494785429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4070385.714285714,
            "unit": "ns",
            "range": "± 38191.13584515204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30896.842105263157,
            "unit": "ns",
            "range": "± 2766.726794545333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122551.02040816327,
            "unit": "ns",
            "range": "± 8046.776839501259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117370,
            "unit": "ns",
            "range": "± 7221.257899879055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122162.24489795919,
            "unit": "ns",
            "range": "± 16051.484597851899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9560.21505376344,
            "unit": "ns",
            "range": "± 1034.00233211265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28842.391304347828,
            "unit": "ns",
            "range": "± 2031.52266261412"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "c6f77bf3e74c531ebadf40ee7e1e0d098cac894d",
          "message": "feat(#3354): support read-only mode",
          "timestamp": "2023-08-19T14:47:35+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/moreal/libplanet/commit/c6f77bf3e74c531ebadf40ee7e1e0d098cac894d"
        },
        "date": 1692424991859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362038.775510204,
            "unit": "ns",
            "range": "± 106348.33412743728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497458.3333333335,
            "unit": "ns",
            "range": "± 97338.43096045862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1745725.5102040817,
            "unit": "ns",
            "range": "± 137929.15431685123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4474923.333333333,
            "unit": "ns",
            "range": "± 200111.6390677851"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47264.89361702128,
            "unit": "ns",
            "range": "± 3397.6496445102366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7271766.666666667,
            "unit": "ns",
            "range": "± 113975.14557798911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20319583.333333332,
            "unit": "ns",
            "range": "± 410673.74950124556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51789079.31034483,
            "unit": "ns",
            "range": "± 1504051.9867485848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100688156.25,
            "unit": "ns",
            "range": "± 1834336.499107602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210687320,
            "unit": "ns",
            "range": "± 4245671.098102531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4568905.301339285,
            "unit": "ns",
            "range": "± 38993.40377514183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1450123.2700892857,
            "unit": "ns",
            "range": "± 11633.240359103858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076718.1119791667,
            "unit": "ns",
            "range": "± 12766.405828994528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687555.108173077,
            "unit": "ns",
            "range": "± 16452.27140261664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847465.1432291666,
            "unit": "ns",
            "range": "± 6984.510548956364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779928.41796875,
            "unit": "ns",
            "range": "± 5298.339819450684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295390.1408450706,
            "unit": "ns",
            "range": "± 159445.02604339801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586593.75,
            "unit": "ns",
            "range": "± 64315.819399273765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4090921.276595745,
            "unit": "ns",
            "range": "± 159008.35900391365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3751457.8947368423,
            "unit": "ns",
            "range": "± 126173.37413810422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6068700,
            "unit": "ns",
            "range": "± 186445.81328182883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256903.50877192983,
            "unit": "ns",
            "range": "± 11093.272815287017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248464.58333333334,
            "unit": "ns",
            "range": "± 9067.81752773577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214030.76923076922,
            "unit": "ns",
            "range": "± 9986.520963856154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104835.714285714,
            "unit": "ns",
            "range": "± 52063.83075156372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702530.769230769,
            "unit": "ns",
            "range": "± 54889.37943135242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20967.777777777777,
            "unit": "ns",
            "range": "± 2283.985663672208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85277.55102040817,
            "unit": "ns",
            "range": "± 6007.032487134874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71040.625,
            "unit": "ns",
            "range": "± 3191.5920667646296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86421.21212121213,
            "unit": "ns",
            "range": "± 15419.953100376497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5251.0204081632655,
            "unit": "ns",
            "range": "± 943.6980228558815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18421.27659574468,
            "unit": "ns",
            "range": "± 1504.1785769945539"
          }
        ]
      }
    ]
  }
}