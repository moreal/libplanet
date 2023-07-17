window.BENCHMARK_DATA = {
  "lastUpdate": 1689605508252,
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
        "date": 1689590173419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567898.969072165,
            "unit": "ns",
            "range": "± 137984.3110759074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2870554.5454545454,
            "unit": "ns",
            "range": "± 154568.00825042566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929884.5360824743,
            "unit": "ns",
            "range": "± 174046.10640347467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5602106.18556701,
            "unit": "ns",
            "range": "± 384219.61081696517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52783.333333333336,
            "unit": "ns",
            "range": "± 3506.8232046631665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8709319.587628866,
            "unit": "ns",
            "range": "± 642987.681588713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23348700,
            "unit": "ns",
            "range": "± 264345.74811306223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55948885.24590164,
            "unit": "ns",
            "range": "± 2521533.5483151297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108993060,
            "unit": "ns",
            "range": "± 3541658.00755389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218648652.17391303,
            "unit": "ns",
            "range": "± 5488726.106953611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5508631.755514706,
            "unit": "ns",
            "range": "± 112568.28319409901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1743011.9140625,
            "unit": "ns",
            "range": "± 29076.892666582542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385825.1432291667,
            "unit": "ns",
            "range": "± 20389.320718239014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3176412.624289773,
            "unit": "ns",
            "range": "± 77741.99391310647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949769.7265625,
            "unit": "ns",
            "range": "± 21617.167091983287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 884307.12890625,
            "unit": "ns",
            "range": "± 10920.197384027242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438712.5,
            "unit": "ns",
            "range": "± 230954.15870049328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4052502.6315789474,
            "unit": "ns",
            "range": "± 308351.87997043086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591306.25,
            "unit": "ns",
            "range": "± 239981.46623782892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3965986.813186813,
            "unit": "ns",
            "range": "± 219820.1351654935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153448.484848484,
            "unit": "ns",
            "range": "± 555432.0734684636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299898.4126984127,
            "unit": "ns",
            "range": "± 13767.604472954152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272912.7659574468,
            "unit": "ns",
            "range": "± 17134.422588126683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257781.914893617,
            "unit": "ns",
            "range": "± 22777.601536984206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534274.226804123,
            "unit": "ns",
            "range": "± 282678.39620846463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252635,
            "unit": "ns",
            "range": "± 220006.05348403542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21593.548387096773,
            "unit": "ns",
            "range": "± 2565.820762472165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96058.42105263157,
            "unit": "ns",
            "range": "± 9290.416741195413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78918.27956989247,
            "unit": "ns",
            "range": "± 7621.835711732659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96495.40229885057,
            "unit": "ns",
            "range": "± 12727.299975322932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5352.577319587629,
            "unit": "ns",
            "range": "± 873.8197735022788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20115.909090909092,
            "unit": "ns",
            "range": "± 1896.3901802578696"
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
        "date": 1689605487370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487092.105263158,
            "unit": "ns",
            "range": "± 75232.83372421538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2797315.3061224488,
            "unit": "ns",
            "range": "± 110324.49023792724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1966902.0833333333,
            "unit": "ns",
            "range": "± 139021.90056864885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5166695.774647887,
            "unit": "ns",
            "range": "± 251404.6547112101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56238.541666666664,
            "unit": "ns",
            "range": "± 4934.377149233446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8188980,
            "unit": "ns",
            "range": "± 123618.60816929741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21578166.666666668,
            "unit": "ns",
            "range": "± 227403.63317447764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53834035.71428572,
            "unit": "ns",
            "range": "± 229343.1585977755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108760393.33333333,
            "unit": "ns",
            "range": "± 1005306.100126912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215689313.33333334,
            "unit": "ns",
            "range": "± 1680755.9654880923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5074504.036458333,
            "unit": "ns",
            "range": "± 19996.255035006863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1595447.7473958333,
            "unit": "ns",
            "range": "± 4782.287310669824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182692.9622395833,
            "unit": "ns",
            "range": "± 4646.6909578953355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684548.6458333335,
            "unit": "ns",
            "range": "± 7665.034226686626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851951.8424479166,
            "unit": "ns",
            "range": "± 2973.8495851786925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799367.1028645834,
            "unit": "ns",
            "range": "± 3481.0654999274343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3519573.6842105263,
            "unit": "ns",
            "range": "± 46548.71811226101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3724918.1818181816,
            "unit": "ns",
            "range": "± 158666.39132902006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4621857.894736842,
            "unit": "ns",
            "range": "± 99974.18175481037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4120609.6774193547,
            "unit": "ns",
            "range": "± 114362.13054689828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6818460.52631579,
            "unit": "ns",
            "range": "± 232549.21425015427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303054.8780487805,
            "unit": "ns",
            "range": "± 10778.820696614082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290422.641509434,
            "unit": "ns",
            "range": "± 12038.138776236805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281975,
            "unit": "ns",
            "range": "± 12034.212592740445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4414373.076923077,
            "unit": "ns",
            "range": "± 37559.53393938202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4041500,
            "unit": "ns",
            "range": "± 55586.68905412518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26942.268041237112,
            "unit": "ns",
            "range": "± 2529.9388600791976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113907.07070707071,
            "unit": "ns",
            "range": "± 10173.748256005852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100425,
            "unit": "ns",
            "range": "± 11313.042218714834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120514.44444444444,
            "unit": "ns",
            "range": "± 11637.864983461672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8802.525252525253,
            "unit": "ns",
            "range": "± 1776.6250643435608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26472.916666666668,
            "unit": "ns",
            "range": "± 2229.9624337957694"
          }
        ]
      }
    ]
  }
}