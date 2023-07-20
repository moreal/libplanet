window.BENCHMARK_DATA = {
  "lastUpdate": 1689822555700,
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
          "id": "2684d645c3f7733b591bcfd60204306818e24684",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:52:20+09:00",
          "tree_id": "998eb7d8985e43459dd5b7a593f89c471b8127c7",
          "url": "https://github.com/moreal/libplanet/commit/2684d645c3f7733b591bcfd60204306818e24684"
        },
        "date": 1689822549643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289418.5675675676,
            "unit": "ns",
            "range": "± 9832.033522964448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278980.234375,
            "unit": "ns",
            "range": "± 12924.82904218053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238925.78260869565,
            "unit": "ns",
            "range": "± 5920.474827061223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4323522.384615385,
            "unit": "ns",
            "range": "± 47096.618644616196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4032833.785714286,
            "unit": "ns",
            "range": "± 38763.91849919314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19645.042553191488,
            "unit": "ns",
            "range": "± 1931.171363934188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84571.3440860215,
            "unit": "ns",
            "range": "± 4937.076069846234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71876.5,
            "unit": "ns",
            "range": "± 996.3480133148074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95691.51020408163,
            "unit": "ns",
            "range": "± 12550.610386639146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4905.462365591397,
            "unit": "ns",
            "range": "± 657.4574967108517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18101.372340425532,
            "unit": "ns",
            "range": "± 1641.5847705179938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779181.6701030927,
            "unit": "ns",
            "range": "± 192544.6110457112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3169957.72,
            "unit": "ns",
            "range": "± 84186.03900317043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149126.3714285716,
            "unit": "ns",
            "range": "± 103413.9117111246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5858931.12244898,
            "unit": "ns",
            "range": "± 231829.73848284944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6373984.572395833,
            "unit": "ns",
            "range": "± 89147.0131308148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1973135.7479166666,
            "unit": "ns",
            "range": "± 2182.38721687644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399929.0229166667,
            "unit": "ns",
            "range": "± 4659.150804787369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2753080.888769531,
            "unit": "ns",
            "range": "± 97081.47911262827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848361.087751116,
            "unit": "ns",
            "range": "± 2782.3558123643206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773054.9794921875,
            "unit": "ns",
            "range": "± 1144.8947008723444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467950.3333333335,
            "unit": "ns",
            "range": "± 108223.22284942666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3601246.230769231,
            "unit": "ns",
            "range": "± 59643.25638068655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4296293.466666667,
            "unit": "ns",
            "range": "± 68353.42344114016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3909354.455882353,
            "unit": "ns",
            "range": "± 186002.47146732552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6395329,
            "unit": "ns",
            "range": "± 129685.4606610741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7849888.076923077,
            "unit": "ns",
            "range": "± 42372.1343110885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21465194.133333333,
            "unit": "ns",
            "range": "± 276723.5562134339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53678478.266666666,
            "unit": "ns",
            "range": "± 979620.7372057287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109113988.6,
            "unit": "ns",
            "range": "± 3195462.556106949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210939102.46666667,
            "unit": "ns",
            "range": "± 3174947.5211677994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64102.121212121216,
            "unit": "ns",
            "range": "± 15852.799886785418"
          }
        ]
      }
    ]
  }
}