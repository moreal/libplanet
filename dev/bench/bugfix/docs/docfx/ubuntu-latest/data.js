window.BENCHMARK_DATA = {
  "lastUpdate": 1689823739006,
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "59a67f7718ac0b42c8d2c70a7bfa24aa63493350",
          "message": "docs: fix docfx toc configuration\n\n[skip changelog]",
          "timestamp": "2023-07-20T12:15:20+09:00",
          "tree_id": "928aecbdc413f3e401fdf1d048a54b7f234d66eb",
          "url": "https://github.com/moreal/libplanet/commit/59a67f7718ac0b42c8d2c70a7bfa24aa63493350"
        },
        "date": 1689823733708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274394.1777777778,
            "unit": "ns",
            "range": "± 9687.493944370866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256812.568627451,
            "unit": "ns",
            "range": "± 9105.810216021202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225285.38461538462,
            "unit": "ns",
            "range": "± 1749.0386187113165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4157799.7333333334,
            "unit": "ns",
            "range": "± 35528.45535717345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741057.846153846,
            "unit": "ns",
            "range": "± 19633.668955165398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16860.05,
            "unit": "ns",
            "range": "± 902.6972507891439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86103.375,
            "unit": "ns",
            "range": "± 3997.597466971444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69913.78787878787,
            "unit": "ns",
            "range": "± 2205.1809131788905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87179.8163265306,
            "unit": "ns",
            "range": "± 12186.091826633894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4270.854166666667,
            "unit": "ns",
            "range": "± 371.8863997220732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16465.65625,
            "unit": "ns",
            "range": "± 1493.381086684102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338837.2857142857,
            "unit": "ns",
            "range": "± 95550.55397973918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517311.8181818184,
            "unit": "ns",
            "range": "± 71768.9816239642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1721961.4189189188,
            "unit": "ns",
            "range": "± 81431.29645071371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4602044.708333333,
            "unit": "ns",
            "range": "± 117276.28234790705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6146283.488020834,
            "unit": "ns",
            "range": "± 27534.702420889334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893564.8209635417,
            "unit": "ns",
            "range": "± 10584.57987467061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353064.7485677083,
            "unit": "ns",
            "range": "± 1448.4067241584983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556828.34375,
            "unit": "ns",
            "range": "± 2554.9191680624976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814567.8021484375,
            "unit": "ns",
            "range": "± 432.6339099964634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734071.0509765625,
            "unit": "ns",
            "range": "± 848.2812557587102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307052.290322581,
            "unit": "ns",
            "range": "± 91321.67146418698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426010.6666666665,
            "unit": "ns",
            "range": "± 113996.24628130368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4272472.363636363,
            "unit": "ns",
            "range": "± 78028.7633404048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3738323.5490196077,
            "unit": "ns",
            "range": "± 130225.69486968595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6375255.428571428,
            "unit": "ns",
            "range": "± 108922.31106951997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7443326.866666666,
            "unit": "ns",
            "range": "± 20133.43999372567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19113060.6,
            "unit": "ns",
            "range": "± 106917.22512686424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48089058.86666667,
            "unit": "ns",
            "range": "± 366882.160287365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96878555.73333333,
            "unit": "ns",
            "range": "± 541273.5493750519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196888415.2,
            "unit": "ns",
            "range": "± 1536231.3650188707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45819.9010989011,
            "unit": "ns",
            "range": "± 2571.4219371777126"
          }
        ]
      }
    ]
  }
}