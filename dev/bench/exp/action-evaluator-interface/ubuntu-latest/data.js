window.BENCHMARK_DATA = {
  "lastUpdate": 1681798094933,
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
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "bc423d80e23460afed0d8371d38f89f8924adbbb",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-14T16:59:49+09:00",
          "tree_id": "7e96db594e8787d36932929ecac7ee6d732fa02f",
          "url": "https://github.com/moreal/libplanet/commit/bc423d80e23460afed0d8371d38f89f8924adbbb"
        },
        "date": 1681460026728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7985924.45,
            "unit": "ns",
            "range": "± 179994.88140981735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22185082.733333334,
            "unit": "ns",
            "range": "± 278649.44859099697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56345028.8,
            "unit": "ns",
            "range": "± 327554.8817352597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110905000.84615384,
            "unit": "ns",
            "range": "± 438888.92845928686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225130465.66666666,
            "unit": "ns",
            "range": "± 1253239.0912161327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49483.7323943662,
            "unit": "ns",
            "range": "± 2446.5721089939375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511156.611111111,
            "unit": "ns",
            "range": "± 78831.95790659012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2693420.3333333335,
            "unit": "ns",
            "range": "± 84501.14976202493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2439745.466666667,
            "unit": "ns",
            "range": "± 118230.88002595477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6235106.96,
            "unit": "ns",
            "range": "± 403542.6205325799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009331.987723215,
            "unit": "ns",
            "range": "± 29183.16683212651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841004.2186104911,
            "unit": "ns",
            "range": "± 2734.638141896538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367127.6158854167,
            "unit": "ns",
            "range": "± 3378.7404744675955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650418.750558036,
            "unit": "ns",
            "range": "± 4404.05419114157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825358.6245442708,
            "unit": "ns",
            "range": "± 1446.0293360478186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779308.3578125,
            "unit": "ns",
            "range": "± 672.7065156189074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361330.7826086957,
            "unit": "ns",
            "range": "± 8962.23165672338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296762.4923076923,
            "unit": "ns",
            "range": "± 13207.517167227008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239468.75,
            "unit": "ns",
            "range": "± 6644.279290511694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5867992.214285715,
            "unit": "ns",
            "range": "± 57855.20040474863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252456.214285715,
            "unit": "ns",
            "range": "± 51024.073205586115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24588.126315789475,
            "unit": "ns",
            "range": "± 2325.9912745766037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107521.16666666667,
            "unit": "ns",
            "range": "± 6963.0419799133115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94233.63541666667,
            "unit": "ns",
            "range": "± 5961.802692968828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234100.39175257733,
            "unit": "ns",
            "range": "± 21990.67997497117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7748.052083333333,
            "unit": "ns",
            "range": "± 1025.8098148322333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22533.22680412371,
            "unit": "ns",
            "range": "± 2466.5603855417885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569274.272727273,
            "unit": "ns",
            "range": "± 71689.05517194301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734422.466666667,
            "unit": "ns",
            "range": "± 63077.403270977506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285829.866666666,
            "unit": "ns",
            "range": "± 75390.85780959563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4663983.363636363,
            "unit": "ns",
            "range": "± 198729.7048704656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7773942.966666667,
            "unit": "ns",
            "range": "± 228868.48997027683"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "e17727e868a79ac97f31f6fedf73b1141434c03a",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T12:00:12+09:00",
          "tree_id": "8f59200e7040062a0cb82c6864fa5eb19690eb45",
          "url": "https://github.com/moreal/libplanet/commit/e17727e868a79ac97f31f6fedf73b1141434c03a"
        },
        "date": 1681788046976,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10212368.171875,
            "unit": "ns",
            "range": "± 468785.5784202867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28023945.646464646,
            "unit": "ns",
            "range": "± 1807553.2232368384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72487786.95348836,
            "unit": "ns",
            "range": "± 3632302.110677288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147440506.61290324,
            "unit": "ns",
            "range": "± 4410776.102442515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292162282.9574468,
            "unit": "ns",
            "range": "± 10794406.386046179"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71711.59550561798,
            "unit": "ns",
            "range": "± 12477.414899000423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942742.051020408,
            "unit": "ns",
            "range": "± 209846.0591512422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3850144.674698795,
            "unit": "ns",
            "range": "± 204395.87880296606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3068963.404255319,
            "unit": "ns",
            "range": "± 244389.8534745637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8291637.12371134,
            "unit": "ns",
            "range": "± 548746.2501911033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7524006.213169643,
            "unit": "ns",
            "range": "± 56075.51639183433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2474135.5918817935,
            "unit": "ns",
            "range": "± 60115.94365675754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1824879.1627604167,
            "unit": "ns",
            "range": "± 43266.75055840627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3510228.4638671875,
            "unit": "ns",
            "range": "± 76968.30234823826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103865.8645241477,
            "unit": "ns",
            "range": "± 26427.02642297734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993163.1872395833,
            "unit": "ns",
            "range": "± 18499.806828840698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 475007.1649484536,
            "unit": "ns",
            "range": "± 55330.81249002081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382148.311827957,
            "unit": "ns",
            "range": "± 42650.89625185488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347169.86315789475,
            "unit": "ns",
            "range": "± 46218.39121591596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7417690.324324325,
            "unit": "ns",
            "range": "± 369093.49596181995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5423030.279569892,
            "unit": "ns",
            "range": "± 324965.16688469745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32371.372340425532,
            "unit": "ns",
            "range": "± 10712.59833744558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123084.66292134831,
            "unit": "ns",
            "range": "± 18096.113313200098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94371.42045454546,
            "unit": "ns",
            "range": "± 13526.12399963012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264494.2150537634,
            "unit": "ns",
            "range": "± 44390.36810401295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6046.771739130435,
            "unit": "ns",
            "range": "± 1063.0111916053663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22998.904761904763,
            "unit": "ns",
            "range": "± 2420.133191689917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4235763.721649485,
            "unit": "ns",
            "range": "± 291169.07116190466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4508617,
            "unit": "ns",
            "range": "± 333728.4341941152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5618844.051546392,
            "unit": "ns",
            "range": "± 362676.12496127235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5624615.797979798,
            "unit": "ns",
            "range": "± 410939.8653236802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10255183.87628866,
            "unit": "ns",
            "range": "± 660258.563937238"
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "05cd79eaef024086fd58036f03984659ea916811",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T14:55:02+09:00",
          "tree_id": "caea6f4ba83e1b733e681746a3ec0fdd7c6dbb04",
          "url": "https://github.com/moreal/libplanet/commit/05cd79eaef024086fd58036f03984659ea916811"
        },
        "date": 1681798091693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7795160.928571428,
            "unit": "ns",
            "range": "± 49972.20657443078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19792186.866666667,
            "unit": "ns",
            "range": "± 49953.206933899164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50306150.571428575,
            "unit": "ns",
            "range": "± 203272.96707996985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100334763.66666667,
            "unit": "ns",
            "range": "± 276389.256562879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202203999.06666666,
            "unit": "ns",
            "range": "± 471895.57032015134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47957.208333333336,
            "unit": "ns",
            "range": "± 3241.90557970452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423162.969387755,
            "unit": "ns",
            "range": "± 97719.68947326648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636381.92,
            "unit": "ns",
            "range": "± 70307.27675527855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277211.422222222,
            "unit": "ns",
            "range": "± 127088.26334613508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5526575.846153846,
            "unit": "ns",
            "range": "± 146682.24811167637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5918442.65625,
            "unit": "ns",
            "range": "± 13968.533934265086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889697.3201822916,
            "unit": "ns",
            "range": "± 11657.64027578186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346163.8126502405,
            "unit": "ns",
            "range": "± 398.0626710757384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558233.746651786,
            "unit": "ns",
            "range": "± 888.5712091836207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794812.1041666666,
            "unit": "ns",
            "range": "± 543.0951252429115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737023.6768275669,
            "unit": "ns",
            "range": "± 600.5953205242288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341086.2,
            "unit": "ns",
            "range": "± 10206.217680312871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283776.23529411765,
            "unit": "ns",
            "range": "± 5816.225166822246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263446.5,
            "unit": "ns",
            "range": "± 8302.64270177474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5681328.2,
            "unit": "ns",
            "range": "± 36003.95311867058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3984555.6428571427,
            "unit": "ns",
            "range": "± 16570.15552411644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21281.208333333332,
            "unit": "ns",
            "range": "± 1905.9670948541234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94874.26595744681,
            "unit": "ns",
            "range": "± 5376.868585777517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83122.77083333333,
            "unit": "ns",
            "range": "± 5571.5935894389495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 193519.94897959183,
            "unit": "ns",
            "range": "± 15230.898141385043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6488.775510204082,
            "unit": "ns",
            "range": "± 855.7727144373733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21035.23157894737,
            "unit": "ns",
            "range": "± 1553.0384868203855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306270.9444444445,
            "unit": "ns",
            "range": "± 70562.4149900783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510347.434782609,
            "unit": "ns",
            "range": "± 86403.33573360047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4350208.357142857,
            "unit": "ns",
            "range": "± 122687.87718682097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668464.267857143,
            "unit": "ns",
            "range": "± 199158.86360933905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7505022.807692308,
            "unit": "ns",
            "range": "± 114254.0222689842"
          }
        ]
      }
    ]
  }
}