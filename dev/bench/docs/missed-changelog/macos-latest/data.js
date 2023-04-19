window.BENCHMARK_DATA = {
  "lastUpdate": 1681884995616,
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
          "id": "6d62e2c44ac4112e3090cbb9addbc49cc3b7834e",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T15:00:22+09:00",
          "tree_id": "9c0608e088bb72c8b7296be5f4fa365727e82700",
          "url": "https://github.com/moreal/libplanet/commit/6d62e2c44ac4112e3090cbb9addbc49cc3b7834e"
        },
        "date": 1681884987988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8467310.053191489,
            "unit": "ns",
            "range": "± 306815.00494674296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21379967.416666668,
            "unit": "ns",
            "range": "± 547760.3567618834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53546614.41304348,
            "unit": "ns",
            "range": "± 1344088.5203217193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105052262.35714285,
            "unit": "ns",
            "range": "± 1464649.4270230206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212764157.85714287,
            "unit": "ns",
            "range": "± 3736467.613559463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75995.79787234042,
            "unit": "ns",
            "range": "± 7775.797448064652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 415896.8116883117,
            "unit": "ns",
            "range": "± 21284.292148671353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331768.36842105264,
            "unit": "ns",
            "range": "± 11452.42478083124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332258.75,
            "unit": "ns",
            "range": "± 11517.26835657813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5567566.153846154,
            "unit": "ns",
            "range": "± 70405.3536314843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860712.3125,
            "unit": "ns",
            "range": "± 75227.03124650408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24232.41052631579,
            "unit": "ns",
            "range": "± 3449.1663886341817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117636.10638297872,
            "unit": "ns",
            "range": "± 15112.288872005016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123452.54166666667,
            "unit": "ns",
            "range": "± 8021.238965746754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144779.5157894737,
            "unit": "ns",
            "range": "± 16623.433774800367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9303.577319587628,
            "unit": "ns",
            "range": "± 1018.7455095509579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23657.2,
            "unit": "ns",
            "range": "± 2973.355102566366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682242.425531915,
            "unit": "ns",
            "range": "± 228096.92020838018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096785.945945946,
            "unit": "ns",
            "range": "± 153849.7887486489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2725080.68556701,
            "unit": "ns",
            "range": "± 310828.75189621863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6837121.303030303,
            "unit": "ns",
            "range": "± 207844.13013624607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407409.223404255,
            "unit": "ns",
            "range": "± 130136.99803980856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542905.2613636362,
            "unit": "ns",
            "range": "± 207669.38103588467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600583.928571428,
            "unit": "ns",
            "range": "± 78102.65906309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4516209.359550562,
            "unit": "ns",
            "range": "± 245024.35248419916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8301194.275862069,
            "unit": "ns",
            "range": "± 160377.35133982706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6826656.97109375,
            "unit": "ns",
            "range": "± 57788.19000429168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015061.7958333334,
            "unit": "ns",
            "range": "± 13985.055114684288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315083.0076622595,
            "unit": "ns",
            "range": "± 7984.228031514208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755504.1896158853,
            "unit": "ns",
            "range": "± 70813.53122672117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798374.9365885417,
            "unit": "ns",
            "range": "± 4032.525451926479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812799.8610491072,
            "unit": "ns",
            "range": "± 2749.296440594934"
          }
        ]
      }
    ]
  }
}