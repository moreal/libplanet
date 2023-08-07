window.BENCHMARK_DATA = {
  "lastUpdate": 1691373995623,
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
      }
    ]
  }
}