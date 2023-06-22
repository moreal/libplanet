window.BENCHMARK_DATA = {
  "lastUpdate": 1687419505099,
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
          "id": "6e58739e3aeeb89b0e3bef6244197f8b68fe0970",
          "message": "Release 2.0.1",
          "timestamp": "2023-06-22T16:13:44+09:00",
          "tree_id": "6cea483aef8aa810fc1a1aec2efecb1c78d25dc6",
          "url": "https://github.com/moreal/libplanet/commit/6e58739e3aeeb89b0e3bef6244197f8b68fe0970"
        },
        "date": 1687419482385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9117285.8375,
            "unit": "ns",
            "range": "± 1083840.72988185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22224248.655737706,
            "unit": "ns",
            "range": "± 819731.5102075168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55786557.43103448,
            "unit": "ns",
            "range": "± 5748250.701309834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104982380.7962963,
            "unit": "ns",
            "range": "± 2939699.3894317183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245475391.22580644,
            "unit": "ns",
            "range": "± 28627461.55990279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80263.75,
            "unit": "ns",
            "range": "± 10030.957915127296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363241.0376344086,
            "unit": "ns",
            "range": "± 33877.207113581586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358971.8522727273,
            "unit": "ns",
            "range": "± 39833.17100237392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335920.5494505495,
            "unit": "ns",
            "range": "± 49687.50447150532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4375203.773584906,
            "unit": "ns",
            "range": "± 181855.44327174575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958614.7733333334,
            "unit": "ns",
            "range": "± 199745.46246894923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26774.34693877551,
            "unit": "ns",
            "range": "± 3437.2476705200766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134628.16842105263,
            "unit": "ns",
            "range": "± 22307.042917816114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120736.93137254902,
            "unit": "ns",
            "range": "± 4908.305794283408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131936.5625,
            "unit": "ns",
            "range": "± 17033.062242722935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9233.677777777777,
            "unit": "ns",
            "range": "± 953.0595419552025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25144.911111111112,
            "unit": "ns",
            "range": "± 2880.416007112941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1812349.25,
            "unit": "ns",
            "range": "± 283623.6798479585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3514787.897727273,
            "unit": "ns",
            "range": "± 427114.46315909165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2775604.6304347827,
            "unit": "ns",
            "range": "± 375197.11758046073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11900564.224489795,
            "unit": "ns",
            "range": "± 5056420.65527775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3636728.088235294,
            "unit": "ns",
            "range": "± 515396.6177546295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3958395.897727273,
            "unit": "ns",
            "range": "± 511108.04018838116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4787834.415789474,
            "unit": "ns",
            "range": "± 422600.6454705692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5008051.188888889,
            "unit": "ns",
            "range": "± 795018.5871284853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7870114.7536231885,
            "unit": "ns",
            "range": "± 379275.5840333069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7625739.437118903,
            "unit": "ns",
            "range": "± 400523.16948279314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2245855.9961538464,
            "unit": "ns",
            "range": "± 104331.06621236715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388244.753963695,
            "unit": "ns",
            "range": "± 65877.86022445471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2955754.2121710526,
            "unit": "ns",
            "range": "± 64008.295722099305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852052.455485026,
            "unit": "ns",
            "range": "± 10323.120977604814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781704.6835239956,
            "unit": "ns",
            "range": "± 33102.67595024482"
          }
        ]
      }
    ]
  }
}