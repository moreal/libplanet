window.BENCHMARK_DATA = {
  "lastUpdate": 1689918418674,
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
        "date": 1689917341298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278767.70588235295,
            "unit": "ns",
            "range": "± 7071.275336215555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259611.42857142858,
            "unit": "ns",
            "range": "± 7837.323444997826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228291,
            "unit": "ns",
            "range": "± 3492.781055262411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213723.666666667,
            "unit": "ns",
            "range": "± 44470.574386194916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995308.933333333,
            "unit": "ns",
            "range": "± 45401.401966186444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17337.02105263158,
            "unit": "ns",
            "range": "± 1568.9182272532216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85458,
            "unit": "ns",
            "range": "± 4360.105681360439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72820.73333333334,
            "unit": "ns",
            "range": "± 1020.0897346148852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87513.76288659793,
            "unit": "ns",
            "range": "± 10386.833370880731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4174.5204081632655,
            "unit": "ns",
            "range": "± 516.3240457288134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15902.3125,
            "unit": "ns",
            "range": "± 1366.8446514932814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349214.6666666667,
            "unit": "ns",
            "range": "± 92133.57106718396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2537833.515151515,
            "unit": "ns",
            "range": "± 78243.28614053782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1712877.0957446808,
            "unit": "ns",
            "range": "± 96891.51168899075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4686466.375,
            "unit": "ns",
            "range": "± 121714.86855112846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5975068.859895834,
            "unit": "ns",
            "range": "± 24163.57631336201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998728.92265625,
            "unit": "ns",
            "range": "± 3318.6836648609756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343845.4451622595,
            "unit": "ns",
            "range": "± 2726.638056497839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574762.8810096155,
            "unit": "ns",
            "range": "± 2529.5585208939674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820095.5779157366,
            "unit": "ns",
            "range": "± 501.4136445266647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743379.076171875,
            "unit": "ns",
            "range": "± 2428.7651131682783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225705.3333333335,
            "unit": "ns",
            "range": "± 32478.68588455941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3411145.066666667,
            "unit": "ns",
            "range": "± 52984.80136587239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276028.266666667,
            "unit": "ns",
            "range": "± 43050.750088814064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3725667.510638298,
            "unit": "ns",
            "range": "± 131147.31293155937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6129940.235294118,
            "unit": "ns",
            "range": "± 120622.42630856908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7548049.133333334,
            "unit": "ns",
            "range": "± 35176.90899047001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18955959.785714287,
            "unit": "ns",
            "range": "± 62886.74464974998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49023854.93333333,
            "unit": "ns",
            "range": "± 761149.5715354757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97205965.2,
            "unit": "ns",
            "range": "± 1131198.1699038162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196687047.6,
            "unit": "ns",
            "range": "± 1529674.6844212052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46280.23809523809,
            "unit": "ns",
            "range": "± 2491.491630537276"
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
        "date": 1689917994860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407746.61855670105,
            "unit": "ns",
            "range": "± 43758.99336980231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384881.0967741936,
            "unit": "ns",
            "range": "± 45050.482532054724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339339.2947368421,
            "unit": "ns",
            "range": "± 38410.74588945842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5612783.847826087,
            "unit": "ns",
            "range": "± 366143.29526413244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5169691.657894737,
            "unit": "ns",
            "range": "± 262779.9316007498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32298.82474226804,
            "unit": "ns",
            "range": "± 10422.29045524774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134320.60416666666,
            "unit": "ns",
            "range": "± 18720.56152637306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 149504.27272727274,
            "unit": "ns",
            "range": "± 19177.170939898773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 159665.19791666666,
            "unit": "ns",
            "range": "± 29900.006771208453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8554.53409090909,
            "unit": "ns",
            "range": "± 1501.1952781674565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27052.063829787236,
            "unit": "ns",
            "range": "± 7876.373821532795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1889538.731958763,
            "unit": "ns",
            "range": "± 164658.84347356632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3639635.935483871,
            "unit": "ns",
            "range": "± 207790.13442679247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2392877.9895833335,
            "unit": "ns",
            "range": "± 174037.58818197832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6929481.206185567,
            "unit": "ns",
            "range": "± 552598.719036735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7625347.735054348,
            "unit": "ns",
            "range": "± 191384.6987631613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2350596.3478190103,
            "unit": "ns",
            "range": "± 60174.76087561921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1742809.7857421874,
            "unit": "ns",
            "range": "± 39003.72697097609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3374462.070572917,
            "unit": "ns",
            "range": "± 55288.93454790128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103345.992938702,
            "unit": "ns",
            "range": "± 10707.947406214593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1038226.2587239583,
            "unit": "ns",
            "range": "± 16795.87430882716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4427574.421052632,
            "unit": "ns",
            "range": "± 340908.5812547698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4340257.5154639175,
            "unit": "ns",
            "range": "± 427317.6139527033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6034925.045977011,
            "unit": "ns",
            "range": "± 330170.1082564023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5102042.113402062,
            "unit": "ns",
            "range": "± 423374.48274798336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9110496.556818182,
            "unit": "ns",
            "range": "± 499588.81220949424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976065.793814434,
            "unit": "ns",
            "range": "± 591708.5076206044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28281839.48837209,
            "unit": "ns",
            "range": "± 1026196.3474320704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71691187.42857143,
            "unit": "ns",
            "range": "± 1613339.4777914402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146124565.8125,
            "unit": "ns",
            "range": "± 2774141.2326654936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291398719,
            "unit": "ns",
            "range": "± 4375638.023405615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64345.467391304344,
            "unit": "ns",
            "range": "± 12790.13271327162"
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
        "date": 1689918410554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351475.1666666667,
            "unit": "ns",
            "range": "± 5353.23023152981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326998.0967741936,
            "unit": "ns",
            "range": "± 14640.85320087247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287876.70588235295,
            "unit": "ns",
            "range": "± 13711.644859316646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5299149.85,
            "unit": "ns",
            "range": "± 116821.8149987745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4893374.333333333,
            "unit": "ns",
            "range": "± 83149.72571182891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23022.284210526315,
            "unit": "ns",
            "range": "± 1672.0545436942139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107431.76595744681,
            "unit": "ns",
            "range": "± 6935.629712904774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91772.5306122449,
            "unit": "ns",
            "range": "± 7259.634816869989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116497.76530612246,
            "unit": "ns",
            "range": "± 15711.224919468375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5864.652631578947,
            "unit": "ns",
            "range": "± 721.1290315742193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24383.872340425532,
            "unit": "ns",
            "range": "± 2491.672104431262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742604.626506024,
            "unit": "ns",
            "range": "± 92268.37716454275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335710,
            "unit": "ns",
            "range": "± 99682.54136559446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247017.8571428573,
            "unit": "ns",
            "range": "± 120816.60611527166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6082827.384615385,
            "unit": "ns",
            "range": "± 209238.2428677913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7520708.81875,
            "unit": "ns",
            "range": "± 58299.08573820858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2255221.918229167,
            "unit": "ns",
            "range": "± 13364.50223768659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1650673.5440104166,
            "unit": "ns",
            "range": "± 7688.198854813189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155805.69296875,
            "unit": "ns",
            "range": "± 14829.948400556663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993169.0567708333,
            "unit": "ns",
            "range": "± 4214.633786659357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919841.55546875,
            "unit": "ns",
            "range": "± 3990.1870963628094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4150447.777777778,
            "unit": "ns",
            "range": "± 157463.42431453272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4475114.55,
            "unit": "ns",
            "range": "± 100169.02835049153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5233946.911764706,
            "unit": "ns",
            "range": "± 168646.47404868147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4867114.404761905,
            "unit": "ns",
            "range": "± 175604.8789731471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7882064.052631579,
            "unit": "ns",
            "range": "± 255440.11793933628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9747187.52631579,
            "unit": "ns",
            "range": "± 210426.19217947192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26372589.5625,
            "unit": "ns",
            "range": "± 489219.116530411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64830272.266666666,
            "unit": "ns",
            "range": "± 922235.5809164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131711295.42857143,
            "unit": "ns",
            "range": "± 1142824.3410150886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261487293.33333334,
            "unit": "ns",
            "range": "± 2702487.2843408445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54848.63043478261,
            "unit": "ns",
            "range": "± 3758.06910824698"
          }
        ]
      }
    ]
  }
}