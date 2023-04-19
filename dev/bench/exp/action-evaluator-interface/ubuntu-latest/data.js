window.BENCHMARK_DATA = {
  "lastUpdate": 1681873226713,
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
          "id": "760b1c30c120e2811c3432bf3b3e5d944f8d9963",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T16:18:39+09:00",
          "tree_id": "5f79c48b62b6692fc22161cec81f95e63ee5bed9",
          "url": "https://github.com/moreal/libplanet/commit/760b1c30c120e2811c3432bf3b3e5d944f8d9963"
        },
        "date": 1681803187855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8434606.52,
            "unit": "ns",
            "range": "± 222044.95130155518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22407216.133333333,
            "unit": "ns",
            "range": "± 225831.87736388156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56303230.4,
            "unit": "ns",
            "range": "± 275499.392756344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112756830.2,
            "unit": "ns",
            "range": "± 481970.20666355954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223461800.86666667,
            "unit": "ns",
            "range": "± 716676.7805538148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56963.24742268041,
            "unit": "ns",
            "range": "± 6055.802159277579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495287.7555555555,
            "unit": "ns",
            "range": "± 82555.8447576393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958584.77,
            "unit": "ns",
            "range": "± 179371.04295550776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2432970.012195122,
            "unit": "ns",
            "range": "± 124736.11870105943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6013415.545454546,
            "unit": "ns",
            "range": "± 225741.28933705512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018390.0953125,
            "unit": "ns",
            "range": "± 49377.993175510266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838891.9739583333,
            "unit": "ns",
            "range": "± 1735.699140960372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374335.3307291667,
            "unit": "ns",
            "range": "± 3065.763083220614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607787.548377404,
            "unit": "ns",
            "range": "± 9467.477082196414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831917.6408691406,
            "unit": "ns",
            "range": "± 365.7253640002107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756346.8948800223,
            "unit": "ns",
            "range": "± 393.6558425289889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358923.6956521739,
            "unit": "ns",
            "range": "± 13591.020033454388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292833.1095890411,
            "unit": "ns",
            "range": "± 14519.440214914972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245285.98113207548,
            "unit": "ns",
            "range": "± 10089.495537992752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6010449.4,
            "unit": "ns",
            "range": "± 102474.19945862332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4218528.916666667,
            "unit": "ns",
            "range": "± 105780.79288707775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25662.22105263158,
            "unit": "ns",
            "range": "± 3210.48816855056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109117.5,
            "unit": "ns",
            "range": "± 12250.112027935487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95557.02061855671,
            "unit": "ns",
            "range": "± 10264.931020408132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 214740.1649484536,
            "unit": "ns",
            "range": "± 17186.45985136289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8862.275510204081,
            "unit": "ns",
            "range": "± 1518.517099358302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24488.77319587629,
            "unit": "ns",
            "range": "± 2815.063988708615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3693871.8,
            "unit": "ns",
            "range": "± 45971.32552736387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3969879.8666666667,
            "unit": "ns",
            "range": "± 61031.3044052765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4481882,
            "unit": "ns",
            "range": "± 146881.2049711082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4718043.074626866,
            "unit": "ns",
            "range": "± 222086.4113357213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7841161.217391305,
            "unit": "ns",
            "range": "± 182661.94516770754"
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
          "id": "0981cf98dd33440f8ea51834ee841bfb579ed0df",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-18T16:41:17+09:00",
          "tree_id": "8cc3cccb75796d7608f3ccb3e9eb707dfa6e153f",
          "url": "https://github.com/moreal/libplanet/commit/0981cf98dd33440f8ea51834ee841bfb579ed0df"
        },
        "date": 1681804936615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10579713.88,
            "unit": "ns",
            "range": "± 1096741.4376595332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27181484.6185567,
            "unit": "ns",
            "range": "± 2273909.170320553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70299812.82795699,
            "unit": "ns",
            "range": "± 3844742.1587636876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147609554.89873418,
            "unit": "ns",
            "range": "± 7638195.347115351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 305002961.37931037,
            "unit": "ns",
            "range": "± 13302657.348063847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75849.52631578948,
            "unit": "ns",
            "range": "± 18565.112324867267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1964234.9479166667,
            "unit": "ns",
            "range": "± 238877.07276440747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3776538.3085106383,
            "unit": "ns",
            "range": "± 303830.3276906417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2948243.791208791,
            "unit": "ns",
            "range": "± 241028.01229891728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8319999.869565218,
            "unit": "ns",
            "range": "± 564203.6794375237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7904348.223772322,
            "unit": "ns",
            "range": "± 139535.3307224735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2437804.7219669116,
            "unit": "ns",
            "range": "± 47256.24714284874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1762483.0894717262,
            "unit": "ns",
            "range": "± 36394.32310946714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3490368.55546875,
            "unit": "ns",
            "range": "± 51726.716624323984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1141400.765991211,
            "unit": "ns",
            "range": "± 17138.356953106755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1074365.9750976562,
            "unit": "ns",
            "range": "± 24648.01540970723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 509318.07216494845,
            "unit": "ns",
            "range": "± 60423.51587376244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379196.01086956525,
            "unit": "ns",
            "range": "± 51462.15664633759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 362703.2755102041,
            "unit": "ns",
            "range": "± 57630.37130362267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7737836.595744681,
            "unit": "ns",
            "range": "± 493188.3183526475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5658596.6344086025,
            "unit": "ns",
            "range": "± 391414.3504737099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29572.5,
            "unit": "ns",
            "range": "± 9301.540329429314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139126.93548387097,
            "unit": "ns",
            "range": "± 32811.44895386844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116984.5,
            "unit": "ns",
            "range": "± 33801.24950116794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 279132.8736842105,
            "unit": "ns",
            "range": "± 55086.69217160717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6575.566666666667,
            "unit": "ns",
            "range": "± 1545.580404780175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27614.25,
            "unit": "ns",
            "range": "± 7987.975117341986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4450096.680851064,
            "unit": "ns",
            "range": "± 545611.3349139919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4945603.270833333,
            "unit": "ns",
            "range": "± 408824.5161768189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5866102.29787234,
            "unit": "ns",
            "range": "± 514556.5614888229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5815658.468085106,
            "unit": "ns",
            "range": "± 672811.1030764269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11005626.677083334,
            "unit": "ns",
            "range": "± 1016874.0488062059"
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
          "id": "aa457bead18a4adaf4c37aa71cf3f046e42b5018",
          "message": "Introduce `IActionEvaluator`",
          "timestamp": "2023-04-19T11:45:52+09:00",
          "tree_id": "2727211c7896630626f87c16b9c74bb5696dd742",
          "url": "https://github.com/moreal/libplanet/commit/aa457bead18a4adaf4c37aa71cf3f046e42b5018"
        },
        "date": 1681873223876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7994623.791666667,
            "unit": "ns",
            "range": "± 206675.45823595425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21383565.466666665,
            "unit": "ns",
            "range": "± 184698.92870362476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54994228.666666664,
            "unit": "ns",
            "range": "± 650867.3640327592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107840060.66666667,
            "unit": "ns",
            "range": "± 1253976.8837864064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218021991.13333333,
            "unit": "ns",
            "range": "± 2500938.977462804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50053.28723404255,
            "unit": "ns",
            "range": "± 3067.871005763984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496481.3402061856,
            "unit": "ns",
            "range": "± 95569.72675245705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774473.8157894737,
            "unit": "ns",
            "range": "± 83056.58056681382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413275.5263157897,
            "unit": "ns",
            "range": "± 142044.39020406068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5979658.8125,
            "unit": "ns",
            "range": "± 276308.41316364566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5909690.789620535,
            "unit": "ns",
            "range": "± 23613.979876214064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925808.670703125,
            "unit": "ns",
            "range": "± 4692.608571574361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360918.6761067708,
            "unit": "ns",
            "range": "± 3321.7164749433464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617740.8963341345,
            "unit": "ns",
            "range": "± 2580.6903318653312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834484.1371744792,
            "unit": "ns",
            "range": "± 1130.5151727665846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761546.9165736607,
            "unit": "ns",
            "range": "± 613.5782347750496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339490.3469387755,
            "unit": "ns",
            "range": "± 12367.395954267247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280481,
            "unit": "ns",
            "range": "± 7764.6341981299565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232837.5,
            "unit": "ns",
            "range": "± 3546.669329572935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5765162.066666666,
            "unit": "ns",
            "range": "± 76634.69220777853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4001306.8,
            "unit": "ns",
            "range": "± 66591.2473615822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21927.645833333332,
            "unit": "ns",
            "range": "± 2338.464367819489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93160.36842105263,
            "unit": "ns",
            "range": "± 4732.133717023375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84333.39583333333,
            "unit": "ns",
            "range": "± 7119.193764937101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114263.27835051547,
            "unit": "ns",
            "range": "± 14226.716570229077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6690.648936170212,
            "unit": "ns",
            "range": "± 836.1625183834741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21237.0625,
            "unit": "ns",
            "range": "± 2625.4270622530207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446219.358974359,
            "unit": "ns",
            "range": "± 111783.78842858518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3751845.6041666665,
            "unit": "ns",
            "range": "± 147723.2386422923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207920.5,
            "unit": "ns",
            "range": "± 46828.337636603035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4643398.87037037,
            "unit": "ns",
            "range": "± 195170.03029163947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7575943.4,
            "unit": "ns",
            "range": "± 126746.14458593997"
          }
        ]
      }
    ]
  }
}