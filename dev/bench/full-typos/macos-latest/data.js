window.BENCHMARK_DATA = {
  "lastUpdate": 1689917936562,
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
        "date": 1689917666694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8033130.666666667,
            "unit": "ns",
            "range": "± 117068.20845232959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651867.055555556,
            "unit": "ns",
            "range": "± 399811.27084567293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48621001.6,
            "unit": "ns",
            "range": "± 553797.3688939201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101913035.3219178,
            "unit": "ns",
            "range": "± 5038007.367391228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209486772.92857143,
            "unit": "ns",
            "range": "± 2614682.5946865673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56597.59550561798,
            "unit": "ns",
            "range": "± 4191.055401683396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315273.36734693876,
            "unit": "ns",
            "range": "± 23549.040464785794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303564.06666666665,
            "unit": "ns",
            "range": "± 19882.15790675684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295764.734375,
            "unit": "ns",
            "range": "± 13697.317984771415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4182324.7333333334,
            "unit": "ns",
            "range": "± 77134.84610312243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891307.095238095,
            "unit": "ns",
            "range": "± 87065.47168074423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18871.82978723404,
            "unit": "ns",
            "range": "± 2150.5982145425264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103234.23404255319,
            "unit": "ns",
            "range": "± 16953.699470785436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97041.57731958762,
            "unit": "ns",
            "range": "± 12240.23150127876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108637.01041666667,
            "unit": "ns",
            "range": "± 17315.043914709295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5951.863157894737,
            "unit": "ns",
            "range": "± 854.1262128385986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16525.662921348314,
            "unit": "ns",
            "range": "± 975.4730430996524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1803703.2127659575,
            "unit": "ns",
            "range": "± 253410.3922435493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237026.2916666665,
            "unit": "ns",
            "range": "± 362508.9377842883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495103.9693877553,
            "unit": "ns",
            "range": "± 381968.76913583314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6531511.71875,
            "unit": "ns",
            "range": "± 497087.61204593495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418962.214285714,
            "unit": "ns",
            "range": "± 60246.55570165059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394086.1,
            "unit": "ns",
            "range": "± 146527.55459867537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4510560.101449275,
            "unit": "ns",
            "range": "± 217231.4768996525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960267.25,
            "unit": "ns",
            "range": "± 229122.9276227984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7284022.134328358,
            "unit": "ns",
            "range": "± 334694.62767401175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6792138.458705357,
            "unit": "ns",
            "range": "± 39569.192867304395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2187622.9830280175,
            "unit": "ns",
            "range": "± 52448.59462949913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399614.306227022,
            "unit": "ns",
            "range": "± 75357.61469424213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3181646.2351953126,
            "unit": "ns",
            "range": "± 253921.55467922115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858489.5826526989,
            "unit": "ns",
            "range": "± 26722.830721682873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858642.3707682291,
            "unit": "ns",
            "range": "± 12600.765867300292"
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
        "date": 1689917920671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8720914.064516129,
            "unit": "ns",
            "range": "± 492073.91698554374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21317583.90909091,
            "unit": "ns",
            "range": "± 1052593.9257437487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51677006.791666664,
            "unit": "ns",
            "range": "± 1270877.6399328546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117795544.14035088,
            "unit": "ns",
            "range": "± 5048697.71406749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231954771.92857143,
            "unit": "ns",
            "range": "± 6390741.250462225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70390.64772727272,
            "unit": "ns",
            "range": "± 8533.4743022746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353827.83157894737,
            "unit": "ns",
            "range": "± 40935.080684829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341752.9381443299,
            "unit": "ns",
            "range": "± 41674.005515732475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319156.7363636364,
            "unit": "ns",
            "range": "± 12224.085394801275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245432.264705882,
            "unit": "ns",
            "range": "± 84130.27329648452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857670.9583333335,
            "unit": "ns",
            "range": "± 96674.86638435541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21899.239130434784,
            "unit": "ns",
            "range": "± 3109.9076092052387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104394.9,
            "unit": "ns",
            "range": "± 14510.438875864946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110494.61578947368,
            "unit": "ns",
            "range": "± 15023.649370287625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142360.70652173914,
            "unit": "ns",
            "range": "± 20006.234989407316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9078.295454545454,
            "unit": "ns",
            "range": "± 1500.2528764553108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24698.020408163266,
            "unit": "ns",
            "range": "± 6098.408698945408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558519.8144329898,
            "unit": "ns",
            "range": "± 150318.15128068987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2929736.0384615385,
            "unit": "ns",
            "range": "± 120576.38137955013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274809.484848485,
            "unit": "ns",
            "range": "± 311181.3093866321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5575460.8,
            "unit": "ns",
            "range": "± 222312.16433168188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559453.2268041237,
            "unit": "ns",
            "range": "± 300389.93394175405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3842174.5918367347,
            "unit": "ns",
            "range": "± 397394.9415644948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4679108.736842105,
            "unit": "ns",
            "range": "± 390369.17027448735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229801.663157894,
            "unit": "ns",
            "range": "± 324241.9147410278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8023219.304347826,
            "unit": "ns",
            "range": "± 917171.1245989209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7626708.378348215,
            "unit": "ns",
            "range": "± 97132.1100366438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2215148.833731192,
            "unit": "ns",
            "range": "± 92398.89447687099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457062.57578125,
            "unit": "ns",
            "range": "± 26931.158786524866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3447359.8265053355,
            "unit": "ns",
            "range": "± 122183.60888362685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 959725.8353515625,
            "unit": "ns",
            "range": "± 17484.34059247784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806640.2222005208,
            "unit": "ns",
            "range": "± 14396.82471397035"
          }
        ]
      }
    ]
  }
}