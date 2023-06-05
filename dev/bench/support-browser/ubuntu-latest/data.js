window.BENCHMARK_DATA = {
  "lastUpdate": 1685928750822,
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685700307665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1550019.5208333333,
            "unit": "ns",
            "range": "± 209995.38429157907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103548.9587628865,
            "unit": "ns",
            "range": "± 321058.99360845395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2358857.3673469387,
            "unit": "ns",
            "range": "± 205006.26401887595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6117647.234693877,
            "unit": "ns",
            "range": "± 577960.8320405512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248182.897959184,
            "unit": "ns",
            "range": "± 373224.33999280055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3472372.4516129033,
            "unit": "ns",
            "range": "± 383489.0507733909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460430.591836735,
            "unit": "ns",
            "range": "± 497410.8920740412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4181350.14893617,
            "unit": "ns",
            "range": "± 396952.2820477051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7446792.87,
            "unit": "ns",
            "range": "± 898818.7951136699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7709461.214285715,
            "unit": "ns",
            "range": "± 585748.3559576744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21881927.24,
            "unit": "ns",
            "range": "± 3359657.655105411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52266971.06315789,
            "unit": "ns",
            "range": "± 3550485.6272034827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106233252.03157894,
            "unit": "ns",
            "range": "± 9281847.316163804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206638870.3857143,
            "unit": "ns",
            "range": "± 9967516.055722537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6531562.12360491,
            "unit": "ns",
            "range": "± 181122.85441246777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2078609.0817945076,
            "unit": "ns",
            "range": "± 64058.145585997496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543526.4454848345,
            "unit": "ns",
            "range": "± 48767.605051875384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909548.8830566406,
            "unit": "ns",
            "range": "± 44955.461801494195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009555.9662543403,
            "unit": "ns",
            "range": "± 28071.190749389327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901752.490764509,
            "unit": "ns",
            "range": "± 29260.893786002805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60042.85263157895,
            "unit": "ns",
            "range": "± 14702.663321453325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316465,
            "unit": "ns",
            "range": "± 58164.46465157297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297372.42268041236,
            "unit": "ns",
            "range": "± 49973.47685727797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262631.31313131313,
            "unit": "ns",
            "range": "± 39244.21918735852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242640.234693877,
            "unit": "ns",
            "range": "± 421227.2837497493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788757.8469387754,
            "unit": "ns",
            "range": "± 366927.46423078224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27748.39,
            "unit": "ns",
            "range": "± 10600.632666363452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97994.70967741935,
            "unit": "ns",
            "range": "± 17657.30626495338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89327.88659793814,
            "unit": "ns",
            "range": "± 20865.581183432747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110660.71875,
            "unit": "ns",
            "range": "± 27971.294020723282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4774.247191011236,
            "unit": "ns",
            "range": "± 650.1012382855681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25887.121212121212,
            "unit": "ns",
            "range": "± 9797.576441549962"
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
          "id": "8e56a5085599c575d16bfaebcf0f4da7d262eb63",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-02T19:00:29+09:00",
          "tree_id": "8a8c5bd975f09ec17d079932c35ee74d95ef6297",
          "url": "https://github.com/moreal/libplanet/commit/8e56a5085599c575d16bfaebcf0f4da7d262eb63"
        },
        "date": 1685700743913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294385.8229166667,
            "unit": "ns",
            "range": "± 84374.2243807463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544386.511111111,
            "unit": "ns",
            "range": "± 96401.72310951102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2099727.46875,
            "unit": "ns",
            "range": "± 122377.62177473918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5293354.235294118,
            "unit": "ns",
            "range": "± 211998.8630242708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175960.4,
            "unit": "ns",
            "range": "± 35071.123986631996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3268767.8333333335,
            "unit": "ns",
            "range": "± 119504.59459213309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4114239.3846153845,
            "unit": "ns",
            "range": "± 99238.84747459613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009920.5483870967,
            "unit": "ns",
            "range": "± 120167.71784103492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6478729.384615385,
            "unit": "ns",
            "range": "± 105085.0565173584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7537656.866666666,
            "unit": "ns",
            "range": "± 18125.644216597288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19069207.4,
            "unit": "ns",
            "range": "± 93644.15840434011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49850820.733333334,
            "unit": "ns",
            "range": "± 350661.9231986164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99071685.86666666,
            "unit": "ns",
            "range": "± 422213.0244023519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193368801.93333334,
            "unit": "ns",
            "range": "± 2367630.647813411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5816662.396354167,
            "unit": "ns",
            "range": "± 13310.544615770714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837269.904017857,
            "unit": "ns",
            "range": "± 4031.193896658605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350697.6682692308,
            "unit": "ns",
            "range": "± 2714.6427684448804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554169.505989583,
            "unit": "ns",
            "range": "± 8109.2992370300535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790902.4087239583,
            "unit": "ns",
            "range": "± 1894.3197073312742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741566.5395833333,
            "unit": "ns",
            "range": "± 1782.2975985132255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45138.329113924054,
            "unit": "ns",
            "range": "± 2071.64980533303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267311.037037037,
            "unit": "ns",
            "range": "± 6635.062172808711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253543.21951219512,
            "unit": "ns",
            "range": "± 8773.783318820324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223528.53846153847,
            "unit": "ns",
            "range": "± 1494.558162991358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4123167.3333333335,
            "unit": "ns",
            "range": "± 43218.57306044419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782261.5,
            "unit": "ns",
            "range": "± 24885.94870681971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15237.866666666667,
            "unit": "ns",
            "range": "± 862.3951387159477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79971.39583333333,
            "unit": "ns",
            "range": "± 5594.265021061944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68081.07692307692,
            "unit": "ns",
            "range": "± 988.6206267268267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74816.76744186046,
            "unit": "ns",
            "range": "± 5747.883767449021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4065.316326530612,
            "unit": "ns",
            "range": "± 492.4241654303418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14596.860215053763,
            "unit": "ns",
            "range": "± 844.48396374969"
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
          "id": "f03f27e6d0ef993d58065ea0e782d61e46880510",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-05T10:18:56+09:00",
          "tree_id": "8de438f784d35d1612351fc2ad541d76649ea1d9",
          "url": "https://github.com/moreal/libplanet/commit/f03f27e6d0ef993d58065ea0e782d61e46880510"
        },
        "date": 1685928746607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458053.7142857143,
            "unit": "ns",
            "range": "± 101744.96210938002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775097.696969697,
            "unit": "ns",
            "range": "± 85291.23128232645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305232.595744681,
            "unit": "ns",
            "range": "± 130968.18467383426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5640343.942307692,
            "unit": "ns",
            "range": "± 231229.9716833501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3581126.5625,
            "unit": "ns",
            "range": "± 68010.35372350179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625522.5833333335,
            "unit": "ns",
            "range": "± 110141.99040884193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4442041.2272727275,
            "unit": "ns",
            "range": "± 106080.65065246653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4426429.510204081,
            "unit": "ns",
            "range": "± 174515.29860004663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6956105.875,
            "unit": "ns",
            "range": "± 214915.68761031877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8109958.259259259,
            "unit": "ns",
            "range": "± 225888.54998693365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21748467.42857143,
            "unit": "ns",
            "range": "± 196578.1295330823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55238438.06666667,
            "unit": "ns",
            "range": "± 395636.5943776953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109847505.93333334,
            "unit": "ns",
            "range": "± 1162069.9111104943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220604110.5,
            "unit": "ns",
            "range": "± 2768962.864332663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6022360.368229167,
            "unit": "ns",
            "range": "± 22731.58575446654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862795.1681082589,
            "unit": "ns",
            "range": "± 4128.442745501456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407732.2158203125,
            "unit": "ns",
            "range": "± 2992.271539591327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641765.1002604165,
            "unit": "ns",
            "range": "± 2102.4044331859213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823576.464704241,
            "unit": "ns",
            "range": "± 1102.8526501327046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753775.45390625,
            "unit": "ns",
            "range": "± 507.90851831170806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49692.17283950617,
            "unit": "ns",
            "range": "± 2632.811020516491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285714.0925925926,
            "unit": "ns",
            "range": "± 11875.455859005555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273355.175,
            "unit": "ns",
            "range": "± 9660.968664305474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242690.43181818182,
            "unit": "ns",
            "range": "± 8263.396599905886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426319.6,
            "unit": "ns",
            "range": "± 73962.81715622867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009049.1333333333,
            "unit": "ns",
            "range": "± 61117.93733882371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18878.978723404256,
            "unit": "ns",
            "range": "± 1721.570569378116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86296.4875,
            "unit": "ns",
            "range": "± 4464.882112477639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80190.93617021276,
            "unit": "ns",
            "range": "± 3130.530816249756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101112.0412371134,
            "unit": "ns",
            "range": "± 14620.527610262512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5859.520833333333,
            "unit": "ns",
            "range": "± 898.2269784550904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19862.655913978495,
            "unit": "ns",
            "range": "± 1736.364051530767"
          }
        ]
      }
    ]
  }
}