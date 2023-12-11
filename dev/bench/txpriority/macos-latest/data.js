window.BENCHMARK_DATA = {
  "lastUpdate": 1702337671632,
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
          "id": "6f5bdd066834ae1fa6cd68631b4f78d5906b8b05",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:14:05+09:00",
          "tree_id": "8ff2cd2db84ebaeec14e71ddbef72ac765e82998",
          "url": "https://github.com/moreal/libplanet/commit/6f5bdd066834ae1fa6cd68631b4f78d5906b8b05"
        },
        "date": 1702337655706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8282189.183908046,
            "unit": "ns",
            "range": "± 573854.7478876702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20251059.3,
            "unit": "ns",
            "range": "± 378310.1348629568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55869589.0319149,
            "unit": "ns",
            "range": "± 6612616.384462749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106486673.15591398,
            "unit": "ns",
            "range": "± 9414830.614159957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219592499.42222223,
            "unit": "ns",
            "range": "± 15960280.834106095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60739.13043478261,
            "unit": "ns",
            "range": "± 14264.348653558363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234628.2808988764,
            "unit": "ns",
            "range": "± 21063.27430138057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239711.8764044944,
            "unit": "ns",
            "range": "± 18487.198305867216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227522.31395348837,
            "unit": "ns",
            "range": "± 23986.719736756113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142166.3333333335,
            "unit": "ns",
            "range": "± 168463.31792347753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3661137.9776119404,
            "unit": "ns",
            "range": "± 163569.43524585274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16157.725274725275,
            "unit": "ns",
            "range": "± 2985.0488217333846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76408.91011235955,
            "unit": "ns",
            "range": "± 12640.263633291082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69373.05376344085,
            "unit": "ns",
            "range": "± 7185.552758329052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78104.08421052631,
            "unit": "ns",
            "range": "± 14682.619990317367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5693,
            "unit": "ns",
            "range": "± 1411.5017785441623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23159.884615384617,
            "unit": "ns",
            "range": "± 3983.0704035098647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1175586.9065934066,
            "unit": "ns",
            "range": "± 129981.6292944659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2552054.938202247,
            "unit": "ns",
            "range": "± 261197.1884468599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2669552.138297872,
            "unit": "ns",
            "range": "± 768261.5483810521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23780246.829787236,
            "unit": "ns",
            "range": "± 5113727.500972748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2895858.12,
            "unit": "ns",
            "range": "± 116361.0933769233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3083508.8085106383,
            "unit": "ns",
            "range": "± 116738.72393747282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3743750.9340659343,
            "unit": "ns",
            "range": "± 209266.51817987734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4284768.5322580645,
            "unit": "ns",
            "range": "± 703541.4475344882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22990823.64893617,
            "unit": "ns",
            "range": "± 3278162.9104869217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5462876.440185547,
            "unit": "ns",
            "range": "± 473227.9537804214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1620974.3397420247,
            "unit": "ns",
            "range": "± 206767.26430058733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1033654.9749609375,
            "unit": "ns",
            "range": "± 111969.89855027963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2329030.626579122,
            "unit": "ns",
            "range": "± 215555.52913859737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640073.5986979167,
            "unit": "ns",
            "range": "± 8845.405922432845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568967.6440054086,
            "unit": "ns",
            "range": "± 4241.728874900725"
          }
        ]
      }
    ]
  }
}