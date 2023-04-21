window.BENCHMARK_DATA = {
  "lastUpdate": 1682059917765,
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
          "id": "7375a965f2fe34f84c2ce388253a15f1ff091db2",
          "message": "WIP: Do not instantiate custom actions",
          "timestamp": "2023-04-19T16:41:30+09:00",
          "tree_id": "a8101dde6caefcb4042801ab4d0c778d070040db",
          "url": "https://github.com/moreal/libplanet/commit/7375a965f2fe34f84c2ce388253a15f1ff091db2"
        },
        "date": 1682059906582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8640723.6875,
            "unit": "ns",
            "range": "± 158464.7888685764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24433067.315789472,
            "unit": "ns",
            "range": "± 472297.0368649906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55769622.166666664,
            "unit": "ns",
            "range": "± 879230.9906707976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112865312.05882353,
            "unit": "ns",
            "range": "± 2206239.2936284547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224802138.06666666,
            "unit": "ns",
            "range": "± 3047694.255810318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64030.26344086022,
            "unit": "ns",
            "range": "± 6865.135309154272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422559.988372093,
            "unit": "ns",
            "range": "± 33638.739847522156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349288.05555555556,
            "unit": "ns",
            "range": "± 30345.294317504653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312565.56666666665,
            "unit": "ns",
            "range": "± 22449.30271785691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6176471.16,
            "unit": "ns",
            "range": "± 249470.98184894765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4415216.333333333,
            "unit": "ns",
            "range": "± 79555.34644121006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19555.32608695652,
            "unit": "ns",
            "range": "± 2133.650331861491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96044.28125,
            "unit": "ns",
            "range": "± 9591.468497085945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89741.74731182796,
            "unit": "ns",
            "range": "± 13468.668175706996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110667.74725274726,
            "unit": "ns",
            "range": "± 18231.588577456198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5363.7191011235955,
            "unit": "ns",
            "range": "± 588.4338031195424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17884.182926829268,
            "unit": "ns",
            "range": "± 2312.3187329853085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657336.5947368422,
            "unit": "ns",
            "range": "± 131330.14323290766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3253764.2711864407,
            "unit": "ns",
            "range": "± 140935.69401752367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718627.3585858585,
            "unit": "ns",
            "range": "± 158515.6685983562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3380448.813186813,
            "unit": "ns",
            "range": "± 242883.7226229828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3788328,
            "unit": "ns",
            "range": "± 101599.69887378231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4052506.7391304346,
            "unit": "ns",
            "range": "± 154298.08537955713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5257891.5813953485,
            "unit": "ns",
            "range": "± 193300.56359083613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4123757.9,
            "unit": "ns",
            "range": "± 122555.82931291299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5458805.230769231,
            "unit": "ns",
            "range": "± 190299.98644349063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6699865.389802632,
            "unit": "ns",
            "range": "± 148929.61821149776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2091783.9705729166,
            "unit": "ns",
            "range": "± 37710.23248866449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383795.4373972039,
            "unit": "ns",
            "range": "± 24917.0539897626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2728586.251220703,
            "unit": "ns",
            "range": "± 52570.812330137414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867559.1615513393,
            "unit": "ns",
            "range": "± 11853.61569214175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832594.4100260417,
            "unit": "ns",
            "range": "± 13465.230052512588"
          }
        ]
      }
    ]
  }
}