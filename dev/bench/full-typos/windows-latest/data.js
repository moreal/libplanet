window.BENCHMARK_DATA = {
  "lastUpdate": 1689921515377,
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
          "id": "b5a3c87a039640743dfbf4ba54fe3cecdf4db773",
          "message": "ci(gh-actions): run typos with configuration file",
          "timestamp": "2023-07-21T14:16:07+09:00",
          "tree_id": "99f2268ffee0f90f6148d9fcebf01dd394876f27",
          "url": "https://github.com/moreal/libplanet/commit/b5a3c87a039640743dfbf4ba54fe3cecdf4db773"
        },
        "date": 1689917541257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371074.7474747475,
            "unit": "ns",
            "range": "± 130732.30347595601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2467337.1428571427,
            "unit": "ns",
            "range": "± 118834.55454554147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1834032.558139535,
            "unit": "ns",
            "range": "± 225984.30161087608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4746423.0337078655,
            "unit": "ns",
            "range": "± 355786.17453721893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47338.29787234042,
            "unit": "ns",
            "range": "± 4198.082162821719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6689272,
            "unit": "ns",
            "range": "± 269920.77317582787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18618969.230769232,
            "unit": "ns",
            "range": "± 181794.94118656227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47552435.71428572,
            "unit": "ns",
            "range": "± 618477.1043671493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95591913.33333333,
            "unit": "ns",
            "range": "± 1517763.7670819089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191998464.2857143,
            "unit": "ns",
            "range": "± 2540111.0780094587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4467145.3125,
            "unit": "ns",
            "range": "± 23324.141052906692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391553.8504464286,
            "unit": "ns",
            "range": "± 13009.836937996311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084353.80859375,
            "unit": "ns",
            "range": "± 7347.2142335467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2447095.0520833335,
            "unit": "ns",
            "range": "± 29331.06329498519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761221.1328125,
            "unit": "ns",
            "range": "± 6318.70255837736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 703077.2526041666,
            "unit": "ns",
            "range": "± 7644.974815060809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171978.378378378,
            "unit": "ns",
            "range": "± 107358.9439816397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296081.9444444445,
            "unit": "ns",
            "range": "± 159931.57632570574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3800964.814814815,
            "unit": "ns",
            "range": "± 96551.98163007923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3554238.095238095,
            "unit": "ns",
            "range": "± 84535.53972259523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5790953.125,
            "unit": "ns",
            "range": "± 178650.21145925208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253994.73684210525,
            "unit": "ns",
            "range": "± 10170.570658463419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256720.96774193548,
            "unit": "ns",
            "range": "± 10473.731968272084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234793.75,
            "unit": "ns",
            "range": "± 16262.127862969808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3878660,
            "unit": "ns",
            "range": "± 58431.8626387057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453469.230769231,
            "unit": "ns",
            "range": "± 41146.08901251297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26323.958333333332,
            "unit": "ns",
            "range": "± 3679.46634550709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94503.09278350516,
            "unit": "ns",
            "range": "± 8653.761869945243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79476.28865979382,
            "unit": "ns",
            "range": "± 7685.182891933946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105790.72164948453,
            "unit": "ns",
            "range": "± 17753.67968005874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6721.649484536082,
            "unit": "ns",
            "range": "± 1454.7498928885013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22802,
            "unit": "ns",
            "range": "± 2604.909118405384"
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
          "id": "dc23e6391713f0e538cf9f97a45992c0c7ee0a57",
          "message": "ci(gh-actions): run typos with configuration file",
          "timestamp": "2023-07-21T14:18:09+09:00",
          "tree_id": "22bb3750757562a89af1f3e8c8d2da5c71c57f5b",
          "url": "https://github.com/moreal/libplanet/commit/dc23e6391713f0e538cf9f97a45992c0c7ee0a57"
        },
        "date": 1689917808195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475471.1340206186,
            "unit": "ns",
            "range": "± 147051.8806966063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708118.5185185187,
            "unit": "ns",
            "range": "± 142479.4907268333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1914122.9166666667,
            "unit": "ns",
            "range": "± 170035.13227018804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5243310.416666667,
            "unit": "ns",
            "range": "± 306676.1060069957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50214.444444444445,
            "unit": "ns",
            "range": "± 5029.141171596319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700469.230769231,
            "unit": "ns",
            "range": "± 81120.51101720394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20719690,
            "unit": "ns",
            "range": "± 317885.8438406557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53156578.571428575,
            "unit": "ns",
            "range": "± 557474.2921683219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108449317.85714285,
            "unit": "ns",
            "range": "± 3017176.037419829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214721876.92307693,
            "unit": "ns",
            "range": "± 3440416.5678383205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4938519.53125,
            "unit": "ns",
            "range": "± 21357.635284448017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1573764.921875,
            "unit": "ns",
            "range": "± 5252.908401283625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211514.4270833333,
            "unit": "ns",
            "range": "± 5488.519535940408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2700629.073660714,
            "unit": "ns",
            "range": "± 6144.304835506438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853185.0911458334,
            "unit": "ns",
            "range": "± 3089.56539502963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778268.203125,
            "unit": "ns",
            "range": "± 1853.377154202388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469721.4285714286,
            "unit": "ns",
            "range": "± 98796.75117294112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3656817.3913043477,
            "unit": "ns",
            "range": "± 92444.79262670488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4390483.333333333,
            "unit": "ns",
            "range": "± 135359.34713621685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4000529.0322580645,
            "unit": "ns",
            "range": "± 179922.89914047543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6543428.571428572,
            "unit": "ns",
            "range": "± 165998.4981126678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286935.91549295775,
            "unit": "ns",
            "range": "± 13915.65711989451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277455.69620253163,
            "unit": "ns",
            "range": "± 14367.767940735666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261928.125,
            "unit": "ns",
            "range": "± 18321.06468478867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294480,
            "unit": "ns",
            "range": "± 66627.30242604324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923000,
            "unit": "ns",
            "range": "± 47674.84419723644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23745.454545454544,
            "unit": "ns",
            "range": "± 2917.8994655882425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103677.55102040817,
            "unit": "ns",
            "range": "± 9835.078504943465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89294.73684210527,
            "unit": "ns",
            "range": "± 10428.177544427228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119145.83333333333,
            "unit": "ns",
            "range": "± 17425.40140240929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6607.216494845361,
            "unit": "ns",
            "range": "± 1365.8977071478491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23069.791666666668,
            "unit": "ns",
            "range": "± 2731.034883535491"
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
          "id": "1ff9002d44130ddf44df4b29b1772afaedf1e226",
          "message": "ci(gh-actions): run typos with configuration file\n\n[skip changelog]",
          "timestamp": "2023-07-21T14:29:27+09:00",
          "tree_id": "22bb3750757562a89af1f3e8c8d2da5c71c57f5b",
          "url": "https://github.com/moreal/libplanet/commit/1ff9002d44130ddf44df4b29b1772afaedf1e226"
        },
        "date": 1689918592544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608082.4742268042,
            "unit": "ns",
            "range": "± 244847.93878476453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958863.829787234,
            "unit": "ns",
            "range": "± 347112.5992053739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2053805.2083333333,
            "unit": "ns",
            "range": "± 299015.9398566859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5852428.125,
            "unit": "ns",
            "range": "± 664909.062195825"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58227.17391304348,
            "unit": "ns",
            "range": "± 12524.175332118344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8850665.625,
            "unit": "ns",
            "range": "± 857820.7193173475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24389596.907216493,
            "unit": "ns",
            "range": "± 1727493.594805637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62953666.25,
            "unit": "ns",
            "range": "± 3284400.098353077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123269976.5625,
            "unit": "ns",
            "range": "± 5647966.641632859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251025238,
            "unit": "ns",
            "range": "± 9530553.466483787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5748293.9453125,
            "unit": "ns",
            "range": "± 109480.36739456364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832541.5364583333,
            "unit": "ns",
            "range": "± 40539.38251281668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373693.3823529412,
            "unit": "ns",
            "range": "± 22956.742096269016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3000772.842261905,
            "unit": "ns",
            "range": "± 67804.3936162314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022241.8077256945,
            "unit": "ns",
            "range": "± 21257.512815570943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935386.0785590278,
            "unit": "ns",
            "range": "± 19908.145322257802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3584610.2040816327,
            "unit": "ns",
            "range": "± 371001.9152671812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671643.6170212766,
            "unit": "ns",
            "range": "± 300937.0811989442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4960817.391304348,
            "unit": "ns",
            "range": "± 378239.8243828429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295662.105263158,
            "unit": "ns",
            "range": "± 426009.3701344246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7859651.041666667,
            "unit": "ns",
            "range": "± 712460.7868795368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322884.375,
            "unit": "ns",
            "range": "± 50513.87788076294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293611.3402061856,
            "unit": "ns",
            "range": "± 40659.546532478744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264077.55102040817,
            "unit": "ns",
            "range": "± 49016.11039726379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4463507.608695652,
            "unit": "ns",
            "range": "± 403986.14197581646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4030434.0425531915,
            "unit": "ns",
            "range": "± 359512.6903567773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28329.29292929293,
            "unit": "ns",
            "range": "± 10111.896938706957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102111.82795698925,
            "unit": "ns",
            "range": "± 19315.930851650188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107755.31914893616,
            "unit": "ns",
            "range": "± 24481.35396240438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137860,
            "unit": "ns",
            "range": "± 31098.72543054225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6122.35294117647,
            "unit": "ns",
            "range": "± 1643.9916920329586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27846.39175257732,
            "unit": "ns",
            "range": "± 10389.829380373127"
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
          "id": "a0fe89c22291a9ded8374834fff5cccd2dafab43",
          "message": "ci(gh-actions): run typos with configuration file\n\n[skip changelog]",
          "timestamp": "2023-07-21T15:23:17+09:00",
          "tree_id": "22d9899826d3ba70b0b082f96e5201e81c4efeea",
          "url": "https://github.com/moreal/libplanet/commit/a0fe89c22291a9ded8374834fff5cccd2dafab43"
        },
        "date": 1689921488954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333878.5714285714,
            "unit": "ns",
            "range": "± 103599.57533846014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411917.6470588236,
            "unit": "ns",
            "range": "± 97398.4634496507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716134.3434343433,
            "unit": "ns",
            "range": "± 116309.72914682323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4459991.666666667,
            "unit": "ns",
            "range": "± 123932.09286886569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42826.62337662338,
            "unit": "ns",
            "range": "± 2196.1027744079133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6975006.666666667,
            "unit": "ns",
            "range": "± 66607.50136505076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17466564.285714287,
            "unit": "ns",
            "range": "± 101192.14477831352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44853746.666666664,
            "unit": "ns",
            "range": "± 291499.5929099501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90407413.33333333,
            "unit": "ns",
            "range": "± 720884.8153154434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179814580,
            "unit": "ns",
            "range": "± 1319349.3743941693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4847793.629807692,
            "unit": "ns",
            "range": "± 9355.589556708239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524495.814732143,
            "unit": "ns",
            "range": "± 1513.8822365927965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152688.4347098214,
            "unit": "ns",
            "range": "± 1124.6883754415187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558643.0338541665,
            "unit": "ns",
            "range": "± 4619.822292995366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799590.72265625,
            "unit": "ns",
            "range": "± 1052.0194071368426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730655.4296875,
            "unit": "ns",
            "range": "± 603.3642476317768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2962140,
            "unit": "ns",
            "range": "± 40404.398629003605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3093663.1578947366,
            "unit": "ns",
            "range": "± 62383.49328082012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3846907.1428571427,
            "unit": "ns",
            "range": "± 43239.76916407669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420539.1304347827,
            "unit": "ns",
            "range": "± 131728.01183290238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5890061.111111111,
            "unit": "ns",
            "range": "± 181885.52487410908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254906.97674418605,
            "unit": "ns",
            "range": "± 8405.19667339759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243920.58823529413,
            "unit": "ns",
            "range": "± 7794.550521057129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213323.1884057971,
            "unit": "ns",
            "range": "± 10179.393038179925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3890514.285714286,
            "unit": "ns",
            "range": "± 44497.05015534707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3501716.6666666665,
            "unit": "ns",
            "range": "± 22010.4864814823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18080.85106382979,
            "unit": "ns",
            "range": "± 1277.8742930203646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81757.14285714286,
            "unit": "ns",
            "range": "± 4338.960114003379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69541.17647058824,
            "unit": "ns",
            "range": "± 1399.133134984575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84810.11235955056,
            "unit": "ns",
            "range": "± 10157.308664474744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4035.164835164835,
            "unit": "ns",
            "range": "± 524.8012589698708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16777.319587628866,
            "unit": "ns",
            "range": "± 1675.7775032950606"
          }
        ]
      }
    ]
  }
}