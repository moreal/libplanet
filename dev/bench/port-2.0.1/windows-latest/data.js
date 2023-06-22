window.BENCHMARK_DATA = {
  "lastUpdate": 1687421317334,
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
          "id": "3b6b324ac8dae955adf7e184ba10ce4852886b5c",
          "message": "Port changes from Libplanet 2.0.1 release",
          "timestamp": "2023-06-22T16:52:10+09:00",
          "tree_id": "2a8974f25dadb3cc9375aa368fbc8550d0537f82",
          "url": "https://github.com/moreal/libplanet/commit/3b6b324ac8dae955adf7e184ba10ce4852886b5c"
        },
        "date": 1687421300724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393717.894736842,
            "unit": "ns",
            "range": "± 109931.60734471711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2655487.1794871795,
            "unit": "ns",
            "range": "± 137008.60278134813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2283985.4166666665,
            "unit": "ns",
            "range": "± 131608.8094789104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500204.166666667,
            "unit": "ns",
            "range": "± 270973.2955178477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48977.83505154639,
            "unit": "ns",
            "range": "± 3336.1574162263273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7423900,
            "unit": "ns",
            "range": "± 124072.8880072578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20696792.307692308,
            "unit": "ns",
            "range": "± 227988.62347910576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52446326.666666664,
            "unit": "ns",
            "range": "± 550567.6881529602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103126480,
            "unit": "ns",
            "range": "± 922387.3490645271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209407656.66666666,
            "unit": "ns",
            "range": "± 2714359.3941603727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937739.973958333,
            "unit": "ns",
            "range": "± 22434.733275397033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562817.3046875,
            "unit": "ns",
            "range": "± 4313.646919088584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206215.9244791667,
            "unit": "ns",
            "range": "± 2531.470934250859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667790.7682291665,
            "unit": "ns",
            "range": "± 7641.071592212129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914271.3997395834,
            "unit": "ns",
            "range": "± 2262.4832895972036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777433.7825520834,
            "unit": "ns",
            "range": "± 2964.063462586324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270483.673469388,
            "unit": "ns",
            "range": "± 124435.34523823134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503396.5517241377,
            "unit": "ns",
            "range": "± 100263.93911913059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4252859.090909091,
            "unit": "ns",
            "range": "± 159518.08575479855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4343084.782608695,
            "unit": "ns",
            "range": "± 163892.17453678543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857062.162162162,
            "unit": "ns",
            "range": "± 229102.58904321946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270528.94736842107,
            "unit": "ns",
            "range": "± 8946.081971779808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259580.48780487804,
            "unit": "ns",
            "range": "± 8405.659388536842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239297.9797979798,
            "unit": "ns",
            "range": "± 15939.918954790894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080841.6666666665,
            "unit": "ns",
            "range": "± 45610.853140918385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785050,
            "unit": "ns",
            "range": "± 78585.60899539095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19551.063829787236,
            "unit": "ns",
            "range": "± 1350.8853871499546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88315.78947368421,
            "unit": "ns",
            "range": "± 5833.839577030407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77370.65217391304,
            "unit": "ns",
            "range": "± 5888.665552362238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99021.42857142857,
            "unit": "ns",
            "range": "± 16535.125062264942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5805.102040816327,
            "unit": "ns",
            "range": "± 1118.3910063517928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19905.434782608696,
            "unit": "ns",
            "range": "± 1965.1560422585344"
          }
        ]
      }
    ]
  }
}