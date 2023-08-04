window.BENCHMARK_DATA = {
  "lastUpdate": 1691119946196,
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
          "id": "d3bc3db46db2b94c707d149a2b326d367ededc6a",
          "message": "fix: check block is in chain\n\n[skip changelog]",
          "timestamp": "2023-08-04T12:15:42+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/d3bc3db46db2b94c707d149a2b326d367ededc6a"
        },
        "date": 1691119919762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8296375.071428572,
            "unit": "ns",
            "range": "± 128194.87266865616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19621026.285714287,
            "unit": "ns",
            "range": "± 338655.1695403064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50279395.571428575,
            "unit": "ns",
            "range": "± 2283341.7798178326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107920898.02,
            "unit": "ns",
            "range": "± 6477103.247101286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209809793.7857143,
            "unit": "ns",
            "range": "± 2121630.148443533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74154.61494252873,
            "unit": "ns",
            "range": "± 9609.398513985572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353558.53125,
            "unit": "ns",
            "range": "± 29830.396672364117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301427.2417582418,
            "unit": "ns",
            "range": "± 20902.45142791771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300333.7037037037,
            "unit": "ns",
            "range": "± 12552.421408711261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175854.32,
            "unit": "ns",
            "range": "± 99350.39731245836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775087.6428571427,
            "unit": "ns",
            "range": "± 48411.840798280144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19577.635416666668,
            "unit": "ns",
            "range": "± 2987.8753677233994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89918.2688172043,
            "unit": "ns",
            "range": "± 10258.725697562122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113781.68131868132,
            "unit": "ns",
            "range": "± 10696.884541127043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106687.96739130435,
            "unit": "ns",
            "range": "± 14979.888952955595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5424.074468085107,
            "unit": "ns",
            "range": "± 853.1811848486941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17220.725806451614,
            "unit": "ns",
            "range": "± 2286.600491374231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507790.8152173914,
            "unit": "ns",
            "range": "± 102496.86254924102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917462.084745763,
            "unit": "ns",
            "range": "± 127594.72122570396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030672.948979592,
            "unit": "ns",
            "range": "± 146423.85837017026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5590732.814814814,
            "unit": "ns",
            "range": "± 232150.78375129908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299960.8260869565,
            "unit": "ns",
            "range": "± 127094.86411064146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480161.8181818184,
            "unit": "ns",
            "range": "± 116248.99765734871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467178.466666667,
            "unit": "ns",
            "range": "± 132958.56265866247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3755620.3554216865,
            "unit": "ns",
            "range": "± 200191.68056500814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6968272.44680851,
            "unit": "ns",
            "range": "± 271148.37054323696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6336218.5107421875,
            "unit": "ns",
            "range": "± 124040.34537412015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928118.51796875,
            "unit": "ns",
            "range": "± 30324.40130719021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229819.2639973958,
            "unit": "ns",
            "range": "± 3568.566160230559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594742.5940290177,
            "unit": "ns",
            "range": "± 15381.80697825422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787768.4954427084,
            "unit": "ns",
            "range": "± 2688.9435666439426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789030.3393880208,
            "unit": "ns",
            "range": "± 2527.2143324633184"
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
          "id": "33163dfc2ba19ea2790a48c5ec4768ab14ab21b7",
          "message": "fix: check block is in chain",
          "timestamp": "2023-08-04T12:14:58+09:00",
          "tree_id": "14b7a77edbcf0b067e2af2dde65618a7d8e36d44",
          "url": "https://github.com/moreal/libplanet/commit/33163dfc2ba19ea2790a48c5ec4768ab14ab21b7"
        },
        "date": 1691119934901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8809438.956521738,
            "unit": "ns",
            "range": "± 219956.1206184043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21446873.333333332,
            "unit": "ns",
            "range": "± 768098.8698634732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53151479.26923077,
            "unit": "ns",
            "range": "± 697457.983895942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105976273.07692307,
            "unit": "ns",
            "range": "± 1259659.0572155798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219504363.42857143,
            "unit": "ns",
            "range": "± 3169921.7899330542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70262.35869565218,
            "unit": "ns",
            "range": "± 7171.530508681988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333079.3085106383,
            "unit": "ns",
            "range": "± 23517.72804339638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304138.60493827163,
            "unit": "ns",
            "range": "± 16024.960631526534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312071.875,
            "unit": "ns",
            "range": "± 6050.6165842829605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229880.96875,
            "unit": "ns",
            "range": "± 129876.1546125172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868140.293103448,
            "unit": "ns",
            "range": "± 109451.53474137025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21250.94845360825,
            "unit": "ns",
            "range": "± 4842.469412162762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87497.77835051547,
            "unit": "ns",
            "range": "± 8974.617160755693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93444.63265306123,
            "unit": "ns",
            "range": "± 9052.070766550278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109743.35051546391,
            "unit": "ns",
            "range": "± 12971.31007265107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6143.63829787234,
            "unit": "ns",
            "range": "± 951.3664406126345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.955056179777,
            "unit": "ns",
            "range": "± 2403.2099079342743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639417.7525773195,
            "unit": "ns",
            "range": "± 197029.82730673414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2943533.640625,
            "unit": "ns",
            "range": "± 136162.36543895782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146485.3958333335,
            "unit": "ns",
            "range": "± 218463.17996333912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5854644.483516484,
            "unit": "ns",
            "range": "± 317061.6630808365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421162.305970149,
            "unit": "ns",
            "range": "± 161967.59175668994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3642888.407216495,
            "unit": "ns",
            "range": "± 246576.74334694474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4512973.866666666,
            "unit": "ns",
            "range": "± 167821.18997850062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4012708,
            "unit": "ns",
            "range": "± 121629.77629543442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7352628.352941177,
            "unit": "ns",
            "range": "± 574786.6180322446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6485141.209134615,
            "unit": "ns",
            "range": "± 104977.07362663007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165469.6442871094,
            "unit": "ns",
            "range": "± 39956.047867500165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289590.549579327,
            "unit": "ns",
            "range": "± 12154.993665914102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639378.4333496094,
            "unit": "ns",
            "range": "± 50932.12958094969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878457.4423130581,
            "unit": "ns",
            "range": "± 4909.37899184059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773297.5301757812,
            "unit": "ns",
            "range": "± 22547.079370589894"
          }
        ]
      }
    ]
  }
}