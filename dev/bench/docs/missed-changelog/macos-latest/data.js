window.BENCHMARK_DATA = {
  "lastUpdate": 1681889827198,
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
          "id": "6d62e2c44ac4112e3090cbb9addbc49cc3b7834e",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T15:00:22+09:00",
          "tree_id": "9c0608e088bb72c8b7296be5f4fa365727e82700",
          "url": "https://github.com/moreal/libplanet/commit/6d62e2c44ac4112e3090cbb9addbc49cc3b7834e"
        },
        "date": 1681884987988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8467310.053191489,
            "unit": "ns",
            "range": "± 306815.00494674296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21379967.416666668,
            "unit": "ns",
            "range": "± 547760.3567618834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53546614.41304348,
            "unit": "ns",
            "range": "± 1344088.5203217193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105052262.35714285,
            "unit": "ns",
            "range": "± 1464649.4270230206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212764157.85714287,
            "unit": "ns",
            "range": "± 3736467.613559463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75995.79787234042,
            "unit": "ns",
            "range": "± 7775.797448064652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 415896.8116883117,
            "unit": "ns",
            "range": "± 21284.292148671353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331768.36842105264,
            "unit": "ns",
            "range": "± 11452.42478083124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332258.75,
            "unit": "ns",
            "range": "± 11517.26835657813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5567566.153846154,
            "unit": "ns",
            "range": "± 70405.3536314843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860712.3125,
            "unit": "ns",
            "range": "± 75227.03124650408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24232.41052631579,
            "unit": "ns",
            "range": "± 3449.1663886341817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117636.10638297872,
            "unit": "ns",
            "range": "± 15112.288872005016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123452.54166666667,
            "unit": "ns",
            "range": "± 8021.238965746754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144779.5157894737,
            "unit": "ns",
            "range": "± 16623.433774800367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9303.577319587628,
            "unit": "ns",
            "range": "± 1018.7455095509579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23657.2,
            "unit": "ns",
            "range": "± 2973.355102566366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682242.425531915,
            "unit": "ns",
            "range": "± 228096.92020838018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096785.945945946,
            "unit": "ns",
            "range": "± 153849.7887486489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2725080.68556701,
            "unit": "ns",
            "range": "± 310828.75189621863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6837121.303030303,
            "unit": "ns",
            "range": "± 207844.13013624607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407409.223404255,
            "unit": "ns",
            "range": "± 130136.99803980856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542905.2613636362,
            "unit": "ns",
            "range": "± 207669.38103588467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600583.928571428,
            "unit": "ns",
            "range": "± 78102.65906309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4516209.359550562,
            "unit": "ns",
            "range": "± 245024.35248419916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8301194.275862069,
            "unit": "ns",
            "range": "± 160377.35133982706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6826656.97109375,
            "unit": "ns",
            "range": "± 57788.19000429168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015061.7958333334,
            "unit": "ns",
            "range": "± 13985.055114684288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315083.0076622595,
            "unit": "ns",
            "range": "± 7984.228031514208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755504.1896158853,
            "unit": "ns",
            "range": "± 70813.53122672117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798374.9365885417,
            "unit": "ns",
            "range": "± 4032.525451926479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812799.8610491072,
            "unit": "ns",
            "range": "± 2749.296440594934"
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
          "id": "4077a2a6d68026318d1e9054a4eac4da82767914",
          "message": "Complement missed deletion record in CHANGES",
          "timestamp": "2023-04-19T16:17:58+09:00",
          "tree_id": "ce1dd1a1ae96561528196536bc85094c31f74aee",
          "url": "https://github.com/moreal/libplanet/commit/4077a2a6d68026318d1e9054a4eac4da82767914"
        },
        "date": 1681889817272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8254194.543010753,
            "unit": "ns",
            "range": "± 568164.4006583625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19910588.91891892,
            "unit": "ns",
            "range": "± 652991.9563836899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49214587.808823526,
            "unit": "ns",
            "range": "± 2355278.979534476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96261953.94,
            "unit": "ns",
            "range": "± 2540119.246395286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207739647.18421054,
            "unit": "ns",
            "range": "± 8825013.603515768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61191.63157894737,
            "unit": "ns",
            "range": "± 11863.391562399935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373002.59550561797,
            "unit": "ns",
            "range": "± 20600.203009656736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321175.4367816092,
            "unit": "ns",
            "range": "± 19290.104753776086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315350.2804878049,
            "unit": "ns",
            "range": "± 19401.872564121983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6001335.927835052,
            "unit": "ns",
            "range": "± 645806.1954022766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4205178.597826087,
            "unit": "ns",
            "range": "± 621272.209158429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22182.22680412371,
            "unit": "ns",
            "range": "± 3860.366316019425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108900.33333333333,
            "unit": "ns",
            "range": "± 16206.2365587619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122486.14516129032,
            "unit": "ns",
            "range": "± 12729.880544066356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136574.7,
            "unit": "ns",
            "range": "± 15630.798485214798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9038.922680412372,
            "unit": "ns",
            "range": "± 1307.3149314135853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20927.510638297874,
            "unit": "ns",
            "range": "± 2942.749357226249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609643.8723404256,
            "unit": "ns",
            "range": "± 201156.67740919293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104992.419354839,
            "unit": "ns",
            "range": "± 310983.8871997657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2697289.101010101,
            "unit": "ns",
            "range": "± 386368.0955851713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7519753.531914894,
            "unit": "ns",
            "range": "± 1024386.4693346253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3350744.714285714,
            "unit": "ns",
            "range": "± 314490.2900040393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3364062.032608696,
            "unit": "ns",
            "range": "± 297990.80017300224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4703059.6875,
            "unit": "ns",
            "range": "± 397184.0696127072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4427464.64893617,
            "unit": "ns",
            "range": "± 363451.3947928083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8335677.87628866,
            "unit": "ns",
            "range": "± 518473.4605589008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6444163.0498046875,
            "unit": "ns",
            "range": "± 125947.06788047358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112676.3120117188,
            "unit": "ns",
            "range": "± 131751.19337192547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328284.1175655243,
            "unit": "ns",
            "range": "± 32633.20618326803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518570.9079241073,
            "unit": "ns",
            "range": "± 38557.347462816055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846299.2939453125,
            "unit": "ns",
            "range": "± 10166.991911791434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744505.4473958333,
            "unit": "ns",
            "range": "± 12466.17010859522"
          }
        ]
      }
    ]
  }
}