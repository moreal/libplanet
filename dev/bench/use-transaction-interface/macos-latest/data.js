window.BENCHMARK_DATA = {
  "lastUpdate": 1681100176425,
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
          "id": "268a2d064f86e8a6f2605cb5d7109b33d00dc625",
          "message": "Move `Transaction<T>.Serialize()` to `TransactionExtensions<T>.Serialize(ITransaction)`",
          "timestamp": "2023-04-10T12:56:42+09:00",
          "tree_id": "a86f6dec8cac90fa33a6fbd3735e61aa1aac0e69",
          "url": "https://github.com/moreal/libplanet/commit/268a2d064f86e8a6f2605cb5d7109b33d00dc625"
        },
        "date": 1681100170364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8802359.801886793,
            "unit": "ns",
            "range": "± 350645.10806180706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21977074.45959596,
            "unit": "ns",
            "range": "± 1292154.9001771081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57621376.38888889,
            "unit": "ns",
            "range": "± 4296813.943025113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114509189.57216495,
            "unit": "ns",
            "range": "± 7821781.924706891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239952938.13043478,
            "unit": "ns",
            "range": "± 13502199.879589379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65211.58888888889,
            "unit": "ns",
            "range": "± 9180.380934906105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 454771.1612903226,
            "unit": "ns",
            "range": "± 53361.37995357494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372655.670212766,
            "unit": "ns",
            "range": "± 40616.50135889825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358799.85869565216,
            "unit": "ns",
            "range": "± 46846.864581438975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6580336.010416667,
            "unit": "ns",
            "range": "± 568212.2901571392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4725837.343434343,
            "unit": "ns",
            "range": "± 391587.8069962155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29002.659574468085,
            "unit": "ns",
            "range": "± 6450.309554217529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138500.97777777776,
            "unit": "ns",
            "range": "± 25468.7433225922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132916.67777777778,
            "unit": "ns",
            "range": "± 17892.615914555165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 295448.7,
            "unit": "ns",
            "range": "± 48780.44518600338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10245.467032967033,
            "unit": "ns",
            "range": "± 1390.561648723673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25475.18181818182,
            "unit": "ns",
            "range": "± 5270.736624444758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1690124.73,
            "unit": "ns",
            "range": "± 183486.2308911035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3118393.673469388,
            "unit": "ns",
            "range": "± 194097.3572610594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2756745.7040816327,
            "unit": "ns",
            "range": "± 268262.0037797027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7394492.357894737,
            "unit": "ns",
            "range": "± 625075.029516473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3715010.89,
            "unit": "ns",
            "range": "± 319257.0113468127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3927192.93814433,
            "unit": "ns",
            "range": "± 352176.9248306055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5327228.664948453,
            "unit": "ns",
            "range": "± 538187.4745159032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4931177.418367347,
            "unit": "ns",
            "range": "± 424949.91293642926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9404764.763157895,
            "unit": "ns",
            "range": "± 831838.309566512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7407457.995703125,
            "unit": "ns",
            "range": "± 579487.4572842213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1975116.8296274038,
            "unit": "ns",
            "range": "± 26228.42341035409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297918.4253305288,
            "unit": "ns",
            "range": "± 12541.545947615294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3036327.970703125,
            "unit": "ns",
            "range": "± 68481.16515107901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809863.6495535715,
            "unit": "ns",
            "range": "± 11769.40604039365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730170.2369791666,
            "unit": "ns",
            "range": "± 6063.7289057006465"
          }
        ]
      }
    ]
  }
}