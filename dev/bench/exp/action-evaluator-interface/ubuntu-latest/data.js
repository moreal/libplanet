window.BENCHMARK_DATA = {
  "lastUpdate": 1681360980032,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c25b7a5803c12c85236b729b04683f2323cb656d",
          "message": "Merge pull request #3080 from moreal/features/explorer/state-query/states\n\nImplement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:59:19+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/moreal/libplanet/commit/c25b7a5803c12c85236b729b04683f2323cb656d"
        },
        "date": 1681360795975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7798514.466666667,
            "unit": "ns",
            "range": "± 69419.72718992642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19988536.64285714,
            "unit": "ns",
            "range": "± 57715.616614312705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51367378.333333336,
            "unit": "ns",
            "range": "± 245904.3765887948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100336852.07142857,
            "unit": "ns",
            "range": "± 444914.61540899397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200458922.2,
            "unit": "ns",
            "range": "± 1251615.8778992288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46650.8085106383,
            "unit": "ns",
            "range": "± 2768.1059138035735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381150.1573033708,
            "unit": "ns",
            "range": "± 70777.00224053569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2629971.814814815,
            "unit": "ns",
            "range": "± 71269.77771011359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244047.734939759,
            "unit": "ns",
            "range": "± 119460.16853849638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5513952.615384615,
            "unit": "ns",
            "range": "± 121579.77503551383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5898585.861979167,
            "unit": "ns",
            "range": "± 21690.847002207433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830075.834375,
            "unit": "ns",
            "range": "± 22897.815251252996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386662.35078125,
            "unit": "ns",
            "range": "± 617.0019353432144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580686.8016826925,
            "unit": "ns",
            "range": "± 1983.2289067704892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845261.3887369792,
            "unit": "ns",
            "range": "± 11474.271289385293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738978.2085336539,
            "unit": "ns",
            "range": "± 887.4913098630318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329282.6842105263,
            "unit": "ns",
            "range": "± 7234.8782993114655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269785.8387096774,
            "unit": "ns",
            "range": "± 7968.689223441013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257290.41666666666,
            "unit": "ns",
            "range": "± 12670.828487369641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5729831.8,
            "unit": "ns",
            "range": "± 47266.60461407036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4082808.9285714286,
            "unit": "ns",
            "range": "± 42012.90304448474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18466.968085106382,
            "unit": "ns",
            "range": "± 1843.6249965767838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87945.11111111111,
            "unit": "ns",
            "range": "± 4879.422844034568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79966.56382978724,
            "unit": "ns",
            "range": "± 5866.8864387449385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182650.125,
            "unit": "ns",
            "range": "± 13807.782888646534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5859.728260869565,
            "unit": "ns",
            "range": "± 633.3254133481039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18832.288659793816,
            "unit": "ns",
            "range": "± 1672.5043283374666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3245097.705882353,
            "unit": "ns",
            "range": "± 65931.6997323411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414848.1578947366,
            "unit": "ns",
            "range": "± 108209.59504729106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4319200.142857143,
            "unit": "ns",
            "range": "± 71101.72828783054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4311881.866666666,
            "unit": "ns",
            "range": "± 57125.61027103427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7380970.036585365,
            "unit": "ns",
            "range": "± 259699.7831167844"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "de6f56b6ee1c783305ef98c3980218f20c9d8e48",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-13T13:29:29+09:00",
          "tree_id": "c32ed736571213c8ad7b13750061103d821738a5",
          "url": "https://github.com/moreal/libplanet/commit/de6f56b6ee1c783305ef98c3980218f20c9d8e48"
        },
        "date": 1681360939222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7561111.066666666,
            "unit": "ns",
            "range": "± 10990.575582656955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19297934.2,
            "unit": "ns",
            "range": "± 170004.86554726266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49233390.76923077,
            "unit": "ns",
            "range": "± 330270.0160538227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100094200.66666667,
            "unit": "ns",
            "range": "± 759524.6164672128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200288213.53333333,
            "unit": "ns",
            "range": "± 1777893.4877662654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45423.90804597701,
            "unit": "ns",
            "range": "± 2068.2469019099467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371730.969387755,
            "unit": "ns",
            "range": "± 119109.0363457166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593843.8181818184,
            "unit": "ns",
            "range": "± 97002.50377954714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169359.230769231,
            "unit": "ns",
            "range": "± 118989.82241240233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5512899.30952381,
            "unit": "ns",
            "range": "± 196777.81211472486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6363031.944270833,
            "unit": "ns",
            "range": "± 24168.205938700983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979603.6309895834,
            "unit": "ns",
            "range": "± 5828.9695657530365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342928.6014322916,
            "unit": "ns",
            "range": "± 885.6326342164625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571651.9949776786,
            "unit": "ns",
            "range": "± 1883.3878250112255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819220.2147786458,
            "unit": "ns",
            "range": "± 606.7243071117322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750729.991015625,
            "unit": "ns",
            "range": "± 336.2705403647304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324133.07692307694,
            "unit": "ns",
            "range": "± 6244.574034619667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265774.7380952381,
            "unit": "ns",
            "range": "± 9713.564938156416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232520.2142857143,
            "unit": "ns",
            "range": "± 3470.656137889855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5632052.071428572,
            "unit": "ns",
            "range": "± 30395.83761348377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4003541.4,
            "unit": "ns",
            "range": "± 47818.83646311058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18511.40625,
            "unit": "ns",
            "range": "± 1931.6104956506877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88043.57,
            "unit": "ns",
            "range": "± 5993.064180181769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71849.625,
            "unit": "ns",
            "range": "± 1340.7411818343862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175812.64583333334,
            "unit": "ns",
            "range": "± 17429.779095728016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5237.744897959184,
            "unit": "ns",
            "range": "± 666.3393041631791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16412.526315789473,
            "unit": "ns",
            "range": "± 1410.8919152934918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231061.0714285714,
            "unit": "ns",
            "range": "± 42715.02372605665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338308.466666667,
            "unit": "ns",
            "range": "± 54591.44117751514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237156.8,
            "unit": "ns",
            "range": "± 71669.00140945576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4393101.46875,
            "unit": "ns",
            "range": "± 136536.61577523383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7262114.8,
            "unit": "ns",
            "range": "± 131711.21174600133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "dee69c0cc54aae593414d18ff2fb79d2f6ca100d",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-13T13:26:51+09:00",
          "tree_id": "e3e157b1bb65d9dd172a0b1eeb928f1084d5aa19",
          "url": "https://github.com/moreal/libplanet/commit/dee69c0cc54aae593414d18ff2fb79d2f6ca100d"
        },
        "date": 1681360976579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11060513.666666666,
            "unit": "ns",
            "range": "± 194308.9271997656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27559985.333333332,
            "unit": "ns",
            "range": "± 193062.810745869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68769730.46666667,
            "unit": "ns",
            "range": "± 408175.40449049714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130014079.13333334,
            "unit": "ns",
            "range": "± 1008460.23991712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280236334.4,
            "unit": "ns",
            "range": "± 1585959.884016923"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56817.8064516129,
            "unit": "ns",
            "range": "± 3880.7813289338264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758780.0206185568,
            "unit": "ns",
            "range": "± 123589.41877652958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3221873.289473684,
            "unit": "ns",
            "range": "± 111128.08894242276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2758205.4736842103,
            "unit": "ns",
            "range": "± 117800.44842961356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6981481.6,
            "unit": "ns",
            "range": "± 207084.59465215722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7085295.707589285,
            "unit": "ns",
            "range": "± 24979.180825634427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251298.4755208334,
            "unit": "ns",
            "range": "± 5766.640849509798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1617881.917903646,
            "unit": "ns",
            "range": "± 5027.253526265635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3148545.56796875,
            "unit": "ns",
            "range": "± 7505.127825290794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004607.7627604167,
            "unit": "ns",
            "range": "± 3645.8353946648185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921951.669921875,
            "unit": "ns",
            "range": "± 1759.7246935460564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396722.0625,
            "unit": "ns",
            "range": "± 12020.909583794988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336441.3125,
            "unit": "ns",
            "range": "± 13100.14386823103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288993.14285714284,
            "unit": "ns",
            "range": "± 5032.999699783617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7114055.785714285,
            "unit": "ns",
            "range": "± 80789.26408414822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5016363.461538462,
            "unit": "ns",
            "range": "± 62664.03118963779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24322.698924731183,
            "unit": "ns",
            "range": "± 2057.461599752314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111306.70833333333,
            "unit": "ns",
            "range": "± 8091.553492008509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99278.46875,
            "unit": "ns",
            "range": "± 7981.611708965638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 227705.8494623656,
            "unit": "ns",
            "range": "± 16308.10618116716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8210.884210526316,
            "unit": "ns",
            "range": "± 995.3315481313183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24192.785714285714,
            "unit": "ns",
            "range": "± 1936.7641758912914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4198280.16,
            "unit": "ns",
            "range": "± 109726.71026983357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4384793.157894737,
            "unit": "ns",
            "range": "± 94768.6559125626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5139471.714285715,
            "unit": "ns",
            "range": "± 146308.83182801475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5530475.315789473,
            "unit": "ns",
            "range": "± 179948.4467229592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8893392.2,
            "unit": "ns",
            "range": "± 131501.10345392543"
          }
        ]
      }
    ]
  }
}