window.BENCHMARK_DATA = {
  "lastUpdate": 1689821846039,
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
          "id": "08b4f59855bee5a03b1da544e4eb9adedead715e",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:38:05+09:00",
          "tree_id": "4cb596b9a792d1fd5a4b53708adfd6f71e0c5a2a",
          "url": "https://github.com/moreal/libplanet/commit/08b4f59855bee5a03b1da544e4eb9adedead715e"
        },
        "date": 1689821839747,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356618.0967741936,
            "unit": "ns",
            "range": "± 26190.73392071613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344380.3787878788,
            "unit": "ns",
            "range": "± 16143.000463420816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321408.36486486485,
            "unit": "ns",
            "range": "± 16045.812759459252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5332065.971014493,
            "unit": "ns",
            "range": "± 255329.06412072215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4761272.8852459015,
            "unit": "ns",
            "range": "± 206517.90741976013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23208.19191919192,
            "unit": "ns",
            "range": "± 5998.598152011999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104265.86315789474,
            "unit": "ns",
            "range": "± 9263.656403949617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128750.1875,
            "unit": "ns",
            "range": "± 8777.550597449694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135094.6875,
            "unit": "ns",
            "range": "± 15224.56164596676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12558.244897959185,
            "unit": "ns",
            "range": "± 5742.7623710847465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22772.49,
            "unit": "ns",
            "range": "± 5186.183235815579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1853959.030927835,
            "unit": "ns",
            "range": "± 205550.9069966232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389246.2978723403,
            "unit": "ns",
            "range": "± 204295.28462612507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2269248.831578947,
            "unit": "ns",
            "range": "± 150170.56038644808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6730696.81443299,
            "unit": "ns",
            "range": "± 602698.86006336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7490334.737792969,
            "unit": "ns",
            "range": "± 145533.0202088357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2284323.034598214,
            "unit": "ns",
            "range": "± 25880.861504197157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1637850.4328125,
            "unit": "ns",
            "range": "± 22200.621469623362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3279006.2140625,
            "unit": "ns",
            "range": "± 56618.67484167818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036176.890625,
            "unit": "ns",
            "range": "± 18522.059927513157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 947793.8565104167,
            "unit": "ns",
            "range": "± 8143.540823837017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4174742.8181818184,
            "unit": "ns",
            "range": "± 186276.7360386079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4397401.298701298,
            "unit": "ns",
            "range": "± 224976.380709472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5311563.178082191,
            "unit": "ns",
            "range": "± 262577.8911464676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4965678.5,
            "unit": "ns",
            "range": "± 276009.1625662904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8499346.56701031,
            "unit": "ns",
            "range": "± 533402.652736184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9943547.756756756,
            "unit": "ns",
            "range": "± 307499.92232947575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25775893.111111112,
            "unit": "ns",
            "range": "± 543185.1995509113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63575475.15384615,
            "unit": "ns",
            "range": "± 689986.7929232228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131745886,
            "unit": "ns",
            "range": "± 2212367.109895678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269045140.84615386,
            "unit": "ns",
            "range": "± 3842591.9910739036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73639.40425531915,
            "unit": "ns",
            "range": "± 9157.81922122204"
          }
        ]
      }
    ]
  }
}