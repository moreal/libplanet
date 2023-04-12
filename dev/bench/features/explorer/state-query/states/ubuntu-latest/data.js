window.BENCHMARK_DATA = {
  "lastUpdate": 1681294036441,
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
          "id": "5f557ae43704ecdbdab693f6354032660b7a8dae",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T16:59:46+09:00",
          "tree_id": "e9ae255659b55e1198e56ed68a9f789d626375b6",
          "url": "https://github.com/moreal/libplanet/commit/5f557ae43704ecdbdab693f6354032660b7a8dae"
        },
        "date": 1681287386825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10539093.8,
            "unit": "ns",
            "range": "± 137495.8032233296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27659489.35714286,
            "unit": "ns",
            "range": "± 238623.33601518627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70726604.76470588,
            "unit": "ns",
            "range": "± 1421533.8491134993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138735286.06666666,
            "unit": "ns",
            "range": "± 942249.2212121609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286966672.9285714,
            "unit": "ns",
            "range": "± 3790117.4723384837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58236.593406593405,
            "unit": "ns",
            "range": "± 3806.9912120203912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775033.757894737,
            "unit": "ns",
            "range": "± 146440.56249955285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3326116.462686567,
            "unit": "ns",
            "range": "± 157305.24399543868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3137252.5714285714,
            "unit": "ns",
            "range": "± 51551.63895882128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6950214.58,
            "unit": "ns",
            "range": "± 279214.02795040474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7059706.574739584,
            "unit": "ns",
            "range": "± 65284.284696526665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2230619.1440104167,
            "unit": "ns",
            "range": "± 14684.306996056383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1604663.2165364583,
            "unit": "ns",
            "range": "± 11410.678653830793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155297.40703125,
            "unit": "ns",
            "range": "± 7557.8922385621345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981840.1783854166,
            "unit": "ns",
            "range": "± 9008.107940725331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916692.0391927083,
            "unit": "ns",
            "range": "± 992.3071545927138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408142.20930232556,
            "unit": "ns",
            "range": "± 14786.050289696543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342313.6582278481,
            "unit": "ns",
            "range": "± 16475.082430738945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286068.45901639346,
            "unit": "ns",
            "range": "± 12757.083093421434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6850707.5,
            "unit": "ns",
            "range": "± 157087.37064499455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4952691.666666667,
            "unit": "ns",
            "range": "± 89051.96598268313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25312.021505376346,
            "unit": "ns",
            "range": "± 2060.5727569025594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117852.3469387755,
            "unit": "ns",
            "range": "± 9141.924195819169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103576.9494949495,
            "unit": "ns",
            "range": "± 8531.513432950034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232892.56701030929,
            "unit": "ns",
            "range": "± 19786.40374248355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8326.865979381444,
            "unit": "ns",
            "range": "± 960.0550291179708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23874.322916666668,
            "unit": "ns",
            "range": "± 2589.950048267713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4317590.8125,
            "unit": "ns",
            "range": "± 130167.21578166603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4439397.266666667,
            "unit": "ns",
            "range": "± 77987.48686576645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5343069.4,
            "unit": "ns",
            "range": "± 158949.3868800966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5454371.042553191,
            "unit": "ns",
            "range": "± 211866.66491153647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9288227.192307692,
            "unit": "ns",
            "range": "± 252177.84941838475"
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
          "id": "a1d173812adc019c5bbe45d00e9a4feeeeef91d2",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T18:52:12+09:00",
          "tree_id": "b68ce7153b7f998450f240b92a407f3ae9b9c0be",
          "url": "https://github.com/moreal/libplanet/commit/a1d173812adc019c5bbe45d00e9a4feeeeef91d2"
        },
        "date": 1681294033905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8250897.875,
            "unit": "ns",
            "range": "± 291099.8692089998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22005167.866666667,
            "unit": "ns",
            "range": "± 342229.74228221655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54591079.952380955,
            "unit": "ns",
            "range": "± 1253589.0267386865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109949316.46666667,
            "unit": "ns",
            "range": "± 1938407.7839129008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215858611.73333332,
            "unit": "ns",
            "range": "± 3976420.895020429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48963.17582417582,
            "unit": "ns",
            "range": "± 3061.90944634737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1448400.6075949366,
            "unit": "ns",
            "range": "± 58259.57149609107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2746462.3529411764,
            "unit": "ns",
            "range": "± 87995.84009654036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2346393.6666666665,
            "unit": "ns",
            "range": "± 111263.52843571594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6120312,
            "unit": "ns",
            "range": "± 387863.342783241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6075885.232142857,
            "unit": "ns",
            "range": "± 30413.388706263715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857518.3790364584,
            "unit": "ns",
            "range": "± 5865.86058531659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366002.467936198,
            "unit": "ns",
            "range": "± 1213.4553721094353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637726.6222098214,
            "unit": "ns",
            "range": "± 11162.84138166955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826900.0902622768,
            "unit": "ns",
            "range": "± 1234.0776497551897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763507.0561848958,
            "unit": "ns",
            "range": "± 523.8729273561845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351589.2631578947,
            "unit": "ns",
            "range": "± 11568.177108107911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300403.2888888889,
            "unit": "ns",
            "range": "± 10974.626530448691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240070.38235294117,
            "unit": "ns",
            "range": "± 7105.981338898242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5851558.4,
            "unit": "ns",
            "range": "± 65697.78358927231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4033089.066666667,
            "unit": "ns",
            "range": "± 56154.928790759215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21547.483870967742,
            "unit": "ns",
            "range": "± 3137.012091329912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99821.86458333333,
            "unit": "ns",
            "range": "± 6231.87072803528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89040.62244897959,
            "unit": "ns",
            "range": "± 8641.360480796902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219544.0752688172,
            "unit": "ns",
            "range": "± 19918.928449350882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6466.092783505154,
            "unit": "ns",
            "range": "± 1195.606062164658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21073.968421052632,
            "unit": "ns",
            "range": "± 2203.4017484221094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4091280.238095238,
            "unit": "ns",
            "range": "± 83463.18584016833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610521.5833333335,
            "unit": "ns",
            "range": "± 117981.09367482208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262342.411764706,
            "unit": "ns",
            "range": "± 84905.99503352135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4569827.125,
            "unit": "ns",
            "range": "± 138489.70575479025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7469520.926829268,
            "unit": "ns",
            "range": "± 267020.8914617347"
          }
        ]
      }
    ]
  }
}