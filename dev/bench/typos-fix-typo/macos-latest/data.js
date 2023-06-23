window.BENCHMARK_DATA = {
  "lastUpdate": 1687506555682,
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
          "id": "028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a",
          "message": "ci(gh-actions): check typos",
          "timestamp": "2023-06-23T16:31:07+09:00",
          "tree_id": "ae98fcd9450527cd0ff2726ad223d06e52becba0",
          "url": "https://github.com/moreal/libplanet/commit/028e0895b1d2a5ab0c72f8409a8133c3c27a1e9a"
        },
        "date": 1687506536382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803598.64,
            "unit": "ns",
            "range": "± 199465.6823252812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20213959.96551724,
            "unit": "ns",
            "range": "± 581545.5324949374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50616112.90625,
            "unit": "ns",
            "range": "± 1571447.061743028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95321981.75641026,
            "unit": "ns",
            "range": "± 3307090.8277157303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207044049.81578946,
            "unit": "ns",
            "range": "± 6963255.848856595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60843.52577319588,
            "unit": "ns",
            "range": "± 8121.369887900666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315663.2159090909,
            "unit": "ns",
            "range": "± 17272.953575712218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305924.26288659795,
            "unit": "ns",
            "range": "± 19544.338494909676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297619.96,
            "unit": "ns",
            "range": "± 24451.83658980538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4052009.3518518517,
            "unit": "ns",
            "range": "± 111629.33153511763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3722341.6785714286,
            "unit": "ns",
            "range": "± 106213.34404240662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19027.64606741573,
            "unit": "ns",
            "range": "± 2362.829642950096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92445.73737373737,
            "unit": "ns",
            "range": "± 9929.637243498199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99181.79797979798,
            "unit": "ns",
            "range": "± 16362.984258891485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113728.59183673469,
            "unit": "ns",
            "range": "± 18781.276627247975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6230.677777777778,
            "unit": "ns",
            "range": "± 1023.6479800893828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18540.967741935485,
            "unit": "ns",
            "range": "± 3047.2199712682273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1711472.5360824743,
            "unit": "ns",
            "range": "± 205335.38080875465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2970579.9736842103,
            "unit": "ns",
            "range": "± 149343.51177483174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2469331.188888889,
            "unit": "ns",
            "range": "± 164271.1576566708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6520278.357142857,
            "unit": "ns",
            "range": "± 270801.66602686304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258454.289473684,
            "unit": "ns",
            "range": "± 107825.76871700912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400230.0222222223,
            "unit": "ns",
            "range": "± 126793.73972599767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4362752.869565218,
            "unit": "ns",
            "range": "± 167457.00425424083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4405368.688405797,
            "unit": "ns",
            "range": "± 211262.56193205723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7644363.478260869,
            "unit": "ns",
            "range": "± 366581.2803125743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6267266.468005952,
            "unit": "ns",
            "range": "± 144107.8874072235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893471.0161458333,
            "unit": "ns",
            "range": "± 28390.968959139293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270019.9515625,
            "unit": "ns",
            "range": "± 19603.78088345163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2470149.1944444445,
            "unit": "ns",
            "range": "± 51649.98986732855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864276.2478515625,
            "unit": "ns",
            "range": "± 10259.23008595522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704072.1973958333,
            "unit": "ns",
            "range": "± 9161.515849140635"
          }
        ]
      }
    ]
  }
}