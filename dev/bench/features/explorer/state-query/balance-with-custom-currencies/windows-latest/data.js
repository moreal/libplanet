window.BENCHMARK_DATA = {
  "lastUpdate": 1681447811633,
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
          "id": "9a1dcd6abface24cd498377a42e7c1bb0d80f66f",
          "message": "WIP",
          "timestamp": "2023-04-14T13:35:00+09:00",
          "tree_id": "d85f9b539fcbd0a307852f4edbfbe8c7da27daac",
          "url": "https://github.com/moreal/libplanet/commit/9a1dcd6abface24cd498377a42e7c1bb0d80f66f"
        },
        "date": 1681447799191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285041.6666666667,
            "unit": "ns",
            "range": "± 129969.65772758098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2322783.3333333335,
            "unit": "ns",
            "range": "± 113661.67240828321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2043547.4226804124,
            "unit": "ns",
            "range": "± 162648.514885104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5164712.820512821,
            "unit": "ns",
            "range": "± 265375.1142478723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52051.02040816326,
            "unit": "ns",
            "range": "± 7260.871619853334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7842033.333333333,
            "unit": "ns",
            "range": "± 180379.93328897018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18716480,
            "unit": "ns",
            "range": "± 137471.80594060526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48052278.571428575,
            "unit": "ns",
            "range": "± 465130.68829932326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96195000,
            "unit": "ns",
            "range": "± 2285478.217791629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193552293.33333334,
            "unit": "ns",
            "range": "± 2229922.8232854884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5191467.578125,
            "unit": "ns",
            "range": "± 17025.88023201826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549223.9192708333,
            "unit": "ns",
            "range": "± 3629.225442502272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049148.4895833333,
            "unit": "ns",
            "range": "± 4628.572225593037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2903633.6458333335,
            "unit": "ns",
            "range": "± 46484.48197107165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869329.2708333334,
            "unit": "ns",
            "range": "± 16066.963847788104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766842.5390625,
            "unit": "ns",
            "range": "± 14079.368552440454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3023805.6603773586,
            "unit": "ns",
            "range": "± 124849.7888465827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3172547.727272727,
            "unit": "ns",
            "range": "± 109554.5218168951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3977043.75,
            "unit": "ns",
            "range": "± 77340.67466949932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4001465.6716417912,
            "unit": "ns",
            "range": "± 184340.20472060892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6632454.166666667,
            "unit": "ns",
            "range": "± 123700.6167752599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281376,
            "unit": "ns",
            "range": "± 25251.459083755653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224622.44897959183,
            "unit": "ns",
            "range": "± 16077.707757145427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223650,
            "unit": "ns",
            "range": "± 5434.348429861933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5126593.75,
            "unit": "ns",
            "range": "± 99457.7194506959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745846.153846154,
            "unit": "ns",
            "range": "± 23525.043938485906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15351.020408163266,
            "unit": "ns",
            "range": "± 3394.454085071955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72094.89795918367,
            "unit": "ns",
            "range": "± 12857.533171951409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81783.83838383839,
            "unit": "ns",
            "range": "± 14646.220568911478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166925,
            "unit": "ns",
            "range": "± 18454.923747507488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6461.616161616162,
            "unit": "ns",
            "range": "± 1300.9185978006014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16245.454545454546,
            "unit": "ns",
            "range": "± 3381.3797669020914"
          }
        ]
      }
    ]
  }
}