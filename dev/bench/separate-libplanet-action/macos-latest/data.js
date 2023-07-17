window.BENCHMARK_DATA = {
  "lastUpdate": 1689605290942,
  "repoUrl": "https://github.com/moreal/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/moreal/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589959077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9890474.836734693,
            "unit": "ns",
            "range": "± 982398.8911427314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23410246.90526316,
            "unit": "ns",
            "range": "± 1788614.3348981733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56286074.91304348,
            "unit": "ns",
            "range": "± 2143454.3341645678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114150357.52,
            "unit": "ns",
            "range": "± 2995639.8571743835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230813166.53333333,
            "unit": "ns",
            "range": "± 4023298.7011261024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80682.41954022988,
            "unit": "ns",
            "range": "± 7142.989093588579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375076.73913043475,
            "unit": "ns",
            "range": "± 32181.96844605791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359329.94329896907,
            "unit": "ns",
            "range": "± 39155.08210388348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334406.55555555556,
            "unit": "ns",
            "range": "± 13986.351312762925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4696483.93298969,
            "unit": "ns",
            "range": "± 386655.33561622817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4008536.510526316,
            "unit": "ns",
            "range": "± 244835.0998092083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28868.386597938144,
            "unit": "ns",
            "range": "± 5834.495686354508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132772.01041666666,
            "unit": "ns",
            "range": "± 33802.30822607263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124190.60204081633,
            "unit": "ns",
            "range": "± 31314.24602243199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119618.1237113402,
            "unit": "ns",
            "range": "± 18767.02164328523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5846.097826086957,
            "unit": "ns",
            "range": "± 1013.96127827515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18676.978260869564,
            "unit": "ns",
            "range": "± 2223.3660699131165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689059.57,
            "unit": "ns",
            "range": "± 199947.5387797658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3068885.727272727,
            "unit": "ns",
            "range": "± 168687.46936563557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265932.154639175,
            "unit": "ns",
            "range": "± 235143.1124743655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6454571.290697674,
            "unit": "ns",
            "range": "± 354560.6726079595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3608949.3924731184,
            "unit": "ns",
            "range": "± 234853.550425693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3785960.425531915,
            "unit": "ns",
            "range": "± 389415.1613394114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4780527.197916667,
            "unit": "ns",
            "range": "± 282864.02326078195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4530011.9845360825,
            "unit": "ns",
            "range": "± 348030.8114271312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8310787.723404256,
            "unit": "ns",
            "range": "± 531994.0316243432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6635000.426432292,
            "unit": "ns",
            "range": "± 148891.38847529035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987896.2006138393,
            "unit": "ns",
            "range": "± 19475.549440304476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342299.0584542411,
            "unit": "ns",
            "range": "± 15895.739103982205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632849.795479911,
            "unit": "ns",
            "range": "± 25800.937459373967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806469.387094351,
            "unit": "ns",
            "range": "± 8406.499405990287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808452.3618164062,
            "unit": "ns",
            "range": "± 9032.416108650961"
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
          "id": "d4106e67ce0b55a645cd1f1b3caf8985403196cc",
          "message": "chore: perform additional project post-processing",
          "timestamp": "2023-07-17T23:33:35+09:00",
          "tree_id": "440fc247a63d10539bb5663c3d23af80d7fe83d4",
          "url": "https://github.com/moreal/libplanet/commit/d4106e67ce0b55a645cd1f1b3caf8985403196cc"
        },
        "date": 1689605276515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7622240.611111111,
            "unit": "ns",
            "range": "± 161679.48169654488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18985048.727272727,
            "unit": "ns",
            "range": "± 445555.05217469845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46575934.36666667,
            "unit": "ns",
            "range": "± 807962.6734911589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92385511.83333333,
            "unit": "ns",
            "range": "± 587799.1804607533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190676178.85714287,
            "unit": "ns",
            "range": "± 1043799.9286000725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52267.03409090909,
            "unit": "ns",
            "range": "± 3778.418926618824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298112.1529411765,
            "unit": "ns",
            "range": "± 16064.878687688246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288226.2395833333,
            "unit": "ns",
            "range": "± 16686.463796013817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284520.74025974027,
            "unit": "ns",
            "range": "± 14520.52035043637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4077893.111111111,
            "unit": "ns",
            "range": "± 86199.5323747988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3602922.9411764704,
            "unit": "ns",
            "range": "± 70108.82514836363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17073.6511627907,
            "unit": "ns",
            "range": "± 1448.572057680511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82661.55681818182,
            "unit": "ns",
            "range": "± 5267.2993535106025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76578.91935483871,
            "unit": "ns",
            "range": "± 6665.99402275163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97468,
            "unit": "ns",
            "range": "± 12728.16305016474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5031.023255813953,
            "unit": "ns",
            "range": "± 650.0673807020348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16819.8,
            "unit": "ns",
            "range": "± 1956.5832302967979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550808.3854166667,
            "unit": "ns",
            "range": "± 175241.55729064345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767576.6,
            "unit": "ns",
            "range": "± 132721.53600813783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1982563.0520833333,
            "unit": "ns",
            "range": "± 175755.05873766897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5739877.253164557,
            "unit": "ns",
            "range": "± 287408.6220275161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3049156.0535714286,
            "unit": "ns",
            "range": "± 128974.72843657389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374728.4833333334,
            "unit": "ns",
            "range": "± 150739.95142420806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4106592.375,
            "unit": "ns",
            "range": "± 78857.06863169168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3728140.102272727,
            "unit": "ns",
            "range": "± 205151.69208498928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6969491.053571428,
            "unit": "ns",
            "range": "± 289769.08286774706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6097124.778125,
            "unit": "ns",
            "range": "± 48341.38343387035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959195.3290364584,
            "unit": "ns",
            "range": "± 14894.108521801289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1218760.622767857,
            "unit": "ns",
            "range": "± 10613.10034873456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535137.8284040177,
            "unit": "ns",
            "range": "± 106985.64587443913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782132.7076822916,
            "unit": "ns",
            "range": "± 9051.694836116238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774264.6498697917,
            "unit": "ns",
            "range": "± 9808.81910221951"
          }
        ]
      }
    ]
  }
}