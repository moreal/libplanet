window.BENCHMARK_DATA = {
  "lastUpdate": 1685700312670,
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685700307665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550019.5208333333,
            "unit": "ns",
            "range": "± 209995.38429157907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103548.9587628865,
            "unit": "ns",
            "range": "± 321058.99360845395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358857.3673469387,
            "unit": "ns",
            "range": "± 205006.26401887595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6117647.234693877,
            "unit": "ns",
            "range": "± 577960.8320405512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248182.897959184,
            "unit": "ns",
            "range": "± 373224.33999280055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3472372.4516129033,
            "unit": "ns",
            "range": "± 383489.0507733909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460430.591836735,
            "unit": "ns",
            "range": "± 497410.8920740412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4181350.14893617,
            "unit": "ns",
            "range": "± 396952.2820477051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7446792.87,
            "unit": "ns",
            "range": "± 898818.7951136699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7709461.214285715,
            "unit": "ns",
            "range": "± 585748.3559576744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21881927.24,
            "unit": "ns",
            "range": "± 3359657.655105411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52266971.06315789,
            "unit": "ns",
            "range": "± 3550485.6272034827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106233252.03157894,
            "unit": "ns",
            "range": "± 9281847.316163804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206638870.3857143,
            "unit": "ns",
            "range": "± 9967516.055722537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6531562.12360491,
            "unit": "ns",
            "range": "± 181122.85441246777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2078609.0817945076,
            "unit": "ns",
            "range": "± 64058.145585997496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543526.4454848345,
            "unit": "ns",
            "range": "± 48767.605051875384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909548.8830566406,
            "unit": "ns",
            "range": "± 44955.461801494195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009555.9662543403,
            "unit": "ns",
            "range": "± 28071.190749389327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901752.490764509,
            "unit": "ns",
            "range": "± 29260.893786002805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60042.85263157895,
            "unit": "ns",
            "range": "± 14702.663321453325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316465,
            "unit": "ns",
            "range": "± 58164.46465157297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297372.42268041236,
            "unit": "ns",
            "range": "± 49973.47685727797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262631.31313131313,
            "unit": "ns",
            "range": "± 39244.21918735852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242640.234693877,
            "unit": "ns",
            "range": "± 421227.2837497493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788757.8469387754,
            "unit": "ns",
            "range": "± 366927.46423078224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27748.39,
            "unit": "ns",
            "range": "± 10600.632666363452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97994.70967741935,
            "unit": "ns",
            "range": "± 17657.30626495338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89327.88659793814,
            "unit": "ns",
            "range": "± 20865.581183432747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110660.71875,
            "unit": "ns",
            "range": "± 27971.294020723282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4774.247191011236,
            "unit": "ns",
            "range": "± 650.1012382855681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25887.121212121212,
            "unit": "ns",
            "range": "± 9797.576441549962"
          }
        ]
      }
    ]
  }
}