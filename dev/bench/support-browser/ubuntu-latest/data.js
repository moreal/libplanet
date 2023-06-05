window.BENCHMARK_DATA = {
  "lastUpdate": 1685943646995,
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
          "id": "bdbadf16e97afca55cc60c5f2a16466750c2ed16",
          "message": "Configure rootDir in tsconfig.json",
          "timestamp": "2023-06-05T10:29:24+09:00",
          "tree_id": "6f599bca23e3baf111d0e42737d91aa2c37ead46",
          "url": "https://github.com/moreal/libplanet/commit/bdbadf16e97afca55cc60c5f2a16466750c2ed16"
        },
        "date": 1685929372798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463868.55,
            "unit": "ns",
            "range": "± 117736.17620090948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2826141.972222222,
            "unit": "ns",
            "range": "± 94423.7206912047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2323443.4578313255,
            "unit": "ns",
            "range": "± 118556.98294751388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5639296.613636363,
            "unit": "ns",
            "range": "± 210612.00842938945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538288.7741935486,
            "unit": "ns",
            "range": "± 103646.88419941679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3696485.7741935486,
            "unit": "ns",
            "range": "± 103268.06966296009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4455565.85,
            "unit": "ns",
            "range": "± 102062.03493865102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4562855.388888889,
            "unit": "ns",
            "range": "± 151881.4389250995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7162076.75,
            "unit": "ns",
            "range": "± 222020.94180896977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7829458,
            "unit": "ns",
            "range": "± 123981.2678898366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21715066.214285713,
            "unit": "ns",
            "range": "± 136028.58305980492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54621836.21428572,
            "unit": "ns",
            "range": "± 409546.66265258915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109317497.8,
            "unit": "ns",
            "range": "± 941445.0782545643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218941381.33333334,
            "unit": "ns",
            "range": "± 1833433.2130695083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5974375.254464285,
            "unit": "ns",
            "range": "± 23493.174735663073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910811.194921875,
            "unit": "ns",
            "range": "± 2536.9885334196542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382232.8768229166,
            "unit": "ns",
            "range": "± 2996.942372662846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585044.7739583333,
            "unit": "ns",
            "range": "± 2084.9435497115305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825776.35703125,
            "unit": "ns",
            "range": "± 590.0379283477523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761275.7274693081,
            "unit": "ns",
            "range": "± 615.9028338429977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49196.02247191011,
            "unit": "ns",
            "range": "± 2676.337469283213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286244.0689655172,
            "unit": "ns",
            "range": "± 8129.309177867429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279106.57692307694,
            "unit": "ns",
            "range": "± 7602.752854976029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244083,
            "unit": "ns",
            "range": "± 6693.589520329631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4453370.133333334,
            "unit": "ns",
            "range": "± 42415.32469666842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961684.933333333,
            "unit": "ns",
            "range": "± 50257.64075735388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20534.936842105264,
            "unit": "ns",
            "range": "± 1916.9530999630656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92116.40625,
            "unit": "ns",
            "range": "± 5820.969384955748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78300.72972972973,
            "unit": "ns",
            "range": "± 3940.7297401442615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96052.9693877551,
            "unit": "ns",
            "range": "± 14284.694906299665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5892.78125,
            "unit": "ns",
            "range": "± 863.4362464274574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18754.915789473685,
            "unit": "ns",
            "range": "± 1439.784711027917"
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
          "id": "343c0273ef936f1d6c04f2f40221897fd10a333b",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T10:47:21+09:00",
          "tree_id": "7b4a51301048797660335c54ce06a3a38b5d9f8a",
          "url": "https://github.com/moreal/libplanet/commit/343c0273ef936f1d6c04f2f40221897fd10a333b"
        },
        "date": 1685930456903,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446787.6836734693,
            "unit": "ns",
            "range": "± 101262.0003085389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2779454.434782609,
            "unit": "ns",
            "range": "± 101871.04223033969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2306552.727272727,
            "unit": "ns",
            "range": "± 112951.25692383702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5623386.833333333,
            "unit": "ns",
            "range": "± 251315.43119477527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3465235.6,
            "unit": "ns",
            "range": "± 62798.527593976505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3648149.3125,
            "unit": "ns",
            "range": "± 69140.93917375701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4367121.315789473,
            "unit": "ns",
            "range": "± 88241.13431580072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4515351.630434782,
            "unit": "ns",
            "range": "± 170828.84274922125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6929378.769230769,
            "unit": "ns",
            "range": "± 189144.79713813073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608974.666666667,
            "unit": "ns",
            "range": "± 59343.34355458997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21337155.92857143,
            "unit": "ns",
            "range": "± 246045.08975528614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53636098.2,
            "unit": "ns",
            "range": "± 908912.4082689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106139498.6,
            "unit": "ns",
            "range": "± 1367127.5496364003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216201298.33333334,
            "unit": "ns",
            "range": "± 2632631.6528352564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5946063.280133928,
            "unit": "ns",
            "range": "± 24651.1259999515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894237.6690848214,
            "unit": "ns",
            "range": "± 2459.575656996447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358094.6731770833,
            "unit": "ns",
            "range": "± 3232.7627664197344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620855.64765625,
            "unit": "ns",
            "range": "± 4115.522122803634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829948.4795572917,
            "unit": "ns",
            "range": "± 2821.750832868441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761625.6797688802,
            "unit": "ns",
            "range": "± 770.2169190207434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49578.90909090909,
            "unit": "ns",
            "range": "± 2431.9867930882115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286584.625,
            "unit": "ns",
            "range": "± 12304.704880746744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277211.7272727273,
            "unit": "ns",
            "range": "± 8665.73045562493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247636.89655172414,
            "unit": "ns",
            "range": "± 10884.006448687707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4395009.133333334,
            "unit": "ns",
            "range": "± 59986.72372386918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010034.2,
            "unit": "ns",
            "range": "± 62175.243469222885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19580.136842105265,
            "unit": "ns",
            "range": "± 1272.3789547455126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88360.71578947369,
            "unit": "ns",
            "range": "± 5049.667209728119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76759.20689655172,
            "unit": "ns",
            "range": "± 2206.443152278448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93582.42857142857,
            "unit": "ns",
            "range": "± 13813.793801699674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5487.520833333333,
            "unit": "ns",
            "range": "± 644.5484095031052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18862.614583333332,
            "unit": "ns",
            "range": "± 1239.5815709113228"
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
          "id": "e2f7b554eb7c494d9694f87bfbc2fd40f161e163",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T10:54:57+09:00",
          "tree_id": "bb38724cd7c3aeed7e8399e331813e95036c949e",
          "url": "https://github.com/moreal/libplanet/commit/e2f7b554eb7c494d9694f87bfbc2fd40f161e163"
        },
        "date": 1685931389961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626134.2395833333,
            "unit": "ns",
            "range": "± 171573.96641987166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198732.5,
            "unit": "ns",
            "range": "± 416082.38451562944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2690172.4646464647,
            "unit": "ns",
            "range": "± 310427.6568984397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7059081.87628866,
            "unit": "ns",
            "range": "± 557798.6139258777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865996.1157894735,
            "unit": "ns",
            "range": "± 291272.277550407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4137188.0412371135,
            "unit": "ns",
            "range": "± 439903.537630077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5638648.623655914,
            "unit": "ns",
            "range": "± 501863.76060525223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5392319.663157894,
            "unit": "ns",
            "range": "± 419325.86325344525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8850148.520408163,
            "unit": "ns",
            "range": "± 528224.110546327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8817207.020618556,
            "unit": "ns",
            "range": "± 600131.8748009679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24217052.97,
            "unit": "ns",
            "range": "± 2820459.9713186603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64554351.40206186,
            "unit": "ns",
            "range": "± 3837633.803827465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128359177.09,
            "unit": "ns",
            "range": "± 9431087.382980306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283577144.9,
            "unit": "ns",
            "range": "± 11300766.532421902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6398411.260625,
            "unit": "ns",
            "range": "± 561175.3400188984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018677.4228019067,
            "unit": "ns",
            "range": "± 88923.53064553533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1516155.1217912945,
            "unit": "ns",
            "range": "± 42633.43823030226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730763.9808467743,
            "unit": "ns",
            "range": "± 82845.48276190684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939883.7958984375,
            "unit": "ns",
            "range": "± 26324.606992542576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912082.833041487,
            "unit": "ns",
            "range": "± 25753.559589593497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67374.5376344086,
            "unit": "ns",
            "range": "± 11737.551565436705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366216.1836734694,
            "unit": "ns",
            "range": "± 45049.10293793105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360774.1157894737,
            "unit": "ns",
            "range": "± 40286.54912658819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339123.05376344087,
            "unit": "ns",
            "range": "± 32582.937655935137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5040807.25,
            "unit": "ns",
            "range": "± 473717.1676732636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4528600.824742268,
            "unit": "ns",
            "range": "± 413114.82503392774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32562.2,
            "unit": "ns",
            "range": "± 11189.481503770958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118823.36082474227,
            "unit": "ns",
            "range": "± 15929.506927126336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119644.16161616161,
            "unit": "ns",
            "range": "± 23976.922918228578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135112.56382978722,
            "unit": "ns",
            "range": "± 32281.870815449096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6348.310344827586,
            "unit": "ns",
            "range": "± 1296.3964125143636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30675.909090909092,
            "unit": "ns",
            "range": "± 8476.105284726804"
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
          "id": "c57dc46d5cbbf97aaf69d4ddd0ef59648ac0c4da",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:05:41+09:00",
          "tree_id": "64d704b67d2435f9805369fd82df8f2240f1d30f",
          "url": "https://github.com/moreal/libplanet/commit/c57dc46d5cbbf97aaf69d4ddd0ef59648ac0c4da"
        },
        "date": 1685931592942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433475.861111111,
            "unit": "ns",
            "range": "± 68399.05423720287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2733298.029411765,
            "unit": "ns",
            "range": "± 88270.04286794133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312538.5411764705,
            "unit": "ns",
            "range": "± 121207.95352670639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5512791.952380952,
            "unit": "ns",
            "range": "± 125488.05238168141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570037.0476190476,
            "unit": "ns",
            "range": "± 81653.90941925328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3746696.911764706,
            "unit": "ns",
            "range": "± 120912.69598811032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4504067,
            "unit": "ns",
            "range": "± 86848.68715455974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4607352.787878788,
            "unit": "ns",
            "range": "± 145234.37094932917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7239062.130434782,
            "unit": "ns",
            "range": "± 147658.50556860902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8049487.214285715,
            "unit": "ns",
            "range": "± 112884.69716837931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22119178.64285714,
            "unit": "ns",
            "range": "± 228184.99693032715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56425239,
            "unit": "ns",
            "range": "± 393706.6245429457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110033689.91666667,
            "unit": "ns",
            "range": "± 646494.702724337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273683671.59183675,
            "unit": "ns",
            "range": "± 49219393.556261815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926792.394831731,
            "unit": "ns",
            "range": "± 23102.325401836213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895796.2997395834,
            "unit": "ns",
            "range": "± 1643.27744831576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370436.0109375,
            "unit": "ns",
            "range": "± 2511.6096425094606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606834.9405048075,
            "unit": "ns",
            "range": "± 3667.153628246616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836128.4810965402,
            "unit": "ns",
            "range": "± 487.68166881836567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767988.771623884,
            "unit": "ns",
            "range": "± 543.5425608304262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50924.80487804878,
            "unit": "ns",
            "range": "± 2718.718341102571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293441.78,
            "unit": "ns",
            "range": "± 11724.943834842199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274471.4186046512,
            "unit": "ns",
            "range": "± 10157.836056188717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254067.19736842104,
            "unit": "ns",
            "range": "± 12858.987047736677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4481385,
            "unit": "ns",
            "range": "± 42524.94729987496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046920.1428571427,
            "unit": "ns",
            "range": "± 32050.378374958724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23241.708333333332,
            "unit": "ns",
            "range": "± 1871.892399722898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96081.77319587629,
            "unit": "ns",
            "range": "± 5784.709376712374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100834.26,
            "unit": "ns",
            "range": "± 11650.38563164587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116318,
            "unit": "ns",
            "range": "± 16372.516319080481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6922.979166666667,
            "unit": "ns",
            "range": "± 850.7836261404964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20657.927835051545,
            "unit": "ns",
            "range": "± 2085.5667757202054"
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
          "id": "18fa0f488c6104fb68e81908f921449c32997978",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:08:42+09:00",
          "tree_id": "9ab7b2e1c7d00a2db743845dc8e94f02b49b6b24",
          "url": "https://github.com/moreal/libplanet/commit/18fa0f488c6104fb68e81908f921449c32997978"
        },
        "date": 1685931759000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477761.4597701149,
            "unit": "ns",
            "range": "± 80624.79115153113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922443.8571428573,
            "unit": "ns",
            "range": "± 104981.99807390242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2425402.76,
            "unit": "ns",
            "range": "± 121912.32719301726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5846478.444444444,
            "unit": "ns",
            "range": "± 267875.88581123564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3622889.7333333334,
            "unit": "ns",
            "range": "± 67321.0093183257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3674559.5535714286,
            "unit": "ns",
            "range": "± 152021.00329588668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4645757.25,
            "unit": "ns",
            "range": "± 105550.6812637891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4754715.740740741,
            "unit": "ns",
            "range": "± 94336.62369922224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7264658.5,
            "unit": "ns",
            "range": "± 128578.2269312712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8603846.5,
            "unit": "ns",
            "range": "± 145206.2374831054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22142926.2,
            "unit": "ns",
            "range": "± 317804.46711645107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55721678.6,
            "unit": "ns",
            "range": "± 504854.4142304506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110648746.86666666,
            "unit": "ns",
            "range": "± 859271.4966146669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226110978.73333332,
            "unit": "ns",
            "range": "± 1538414.8397793593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143610.715104166,
            "unit": "ns",
            "range": "± 25092.82527371183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836440.5859375,
            "unit": "ns",
            "range": "± 1807.0876659397552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372867.0764322917,
            "unit": "ns",
            "range": "± 3537.9639445618373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672514.7916666665,
            "unit": "ns",
            "range": "± 4603.963958190719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824345.462890625,
            "unit": "ns",
            "range": "± 874.5743495051449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757040.8686523438,
            "unit": "ns",
            "range": "± 495.6852999342663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49376.1875,
            "unit": "ns",
            "range": "± 2481.9052914628187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300970.2916666667,
            "unit": "ns",
            "range": "± 7669.965531803776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291410.71186440677,
            "unit": "ns",
            "range": "± 12848.727814458101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282269.0595238095,
            "unit": "ns",
            "range": "± 15099.581705170283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4491742.2,
            "unit": "ns",
            "range": "± 54149.24139054423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4166729.5714285714,
            "unit": "ns",
            "range": "± 36788.67331062707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22856.40625,
            "unit": "ns",
            "range": "± 2475.4499328537813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98614.95918367348,
            "unit": "ns",
            "range": "± 8757.867706308623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82698.42268041238,
            "unit": "ns",
            "range": "± 7270.366655751522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107396.87368421053,
            "unit": "ns",
            "range": "± 15045.243513753105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6339.604166666667,
            "unit": "ns",
            "range": "± 1077.2695843920133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21554.333333333332,
            "unit": "ns",
            "range": "± 2166.5903684271752"
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
          "id": "e912b75e868787fd9a4f9c3d14261844af37c817",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T11:12:54+09:00",
          "tree_id": "5b035b200afc8070499b53bc27992081ee8d90f4",
          "url": "https://github.com/moreal/libplanet/commit/e912b75e868787fd9a4f9c3d14261844af37c817"
        },
        "date": 1685931994297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380109.4948453608,
            "unit": "ns",
            "range": "± 78128.70718312664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2611710.891891892,
            "unit": "ns",
            "range": "± 86919.9361266779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2206178.518072289,
            "unit": "ns",
            "range": "± 112403.18882285058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5335695.875,
            "unit": "ns",
            "range": "± 188736.74875667534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250059.3225806453,
            "unit": "ns",
            "range": "± 85972.2687903439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469736.8163265307,
            "unit": "ns",
            "range": "± 125508.44583759984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4154660.933333333,
            "unit": "ns",
            "range": "± 72259.40073638137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4180590.5853658537,
            "unit": "ns",
            "range": "± 132335.155400214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6698108.5,
            "unit": "ns",
            "range": "± 200789.59323566034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7647716.666666667,
            "unit": "ns",
            "range": "± 52551.09581794339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20432702.6,
            "unit": "ns",
            "range": "± 270358.4286185919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52416660.46666667,
            "unit": "ns",
            "range": "± 774598.7928247451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103039104.15384616,
            "unit": "ns",
            "range": "± 836218.6918948342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206772855.6,
            "unit": "ns",
            "range": "± 3592803.7574619274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5973838.03125,
            "unit": "ns",
            "range": "± 35042.54652366666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850520.0856770833,
            "unit": "ns",
            "range": "± 6406.163321540993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355919.191796875,
            "unit": "ns",
            "range": "± 4287.5905541641405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586010.900260417,
            "unit": "ns",
            "range": "± 5701.751997229252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829739.3036458333,
            "unit": "ns",
            "range": "± 2694.7441643727707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752739.2769252232,
            "unit": "ns",
            "range": "± 1113.406674067515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48165.4125,
            "unit": "ns",
            "range": "± 2148.6446401662583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273347.225,
            "unit": "ns",
            "range": "± 9013.798250282445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266948.89361702127,
            "unit": "ns",
            "range": "± 9718.516896232146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236004.26829268291,
            "unit": "ns",
            "range": "± 8385.355383119997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544186.466666667,
            "unit": "ns",
            "range": "± 65918.95179674016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915882.066666667,
            "unit": "ns",
            "range": "± 63412.380184299145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17284.073529411766,
            "unit": "ns",
            "range": "± 829.4249818295082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84579.18681318681,
            "unit": "ns",
            "range": "± 5111.144863948645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70321.37931034483,
            "unit": "ns",
            "range": "± 2036.6987015720372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80352.53333333334,
            "unit": "ns",
            "range": "± 3343.1423530553993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5341.967741935484,
            "unit": "ns",
            "range": "± 948.0277175778842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17640.347826086956,
            "unit": "ns",
            "range": "± 1524.6698106585843"
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
          "id": "8e9322b423b93d0df7ddada4ab5f9df0502c8e3f",
          "message": "Build `@planetarium/account` first",
          "timestamp": "2023-06-05T11:10:54+09:00",
          "tree_id": "5b035b200afc8070499b53bc27992081ee8d90f4",
          "url": "https://github.com/moreal/libplanet/commit/8e9322b423b93d0df7ddada4ab5f9df0502c8e3f"
        },
        "date": 1685932011810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560872.5102040817,
            "unit": "ns",
            "range": "± 141992.87583212482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906107.8383838385,
            "unit": "ns",
            "range": "± 207657.15098026098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2378610.26,
            "unit": "ns",
            "range": "± 218724.58159948807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6238486.32,
            "unit": "ns",
            "range": "± 488788.9648199881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3524286.78,
            "unit": "ns",
            "range": "± 315918.84731247684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3709993.87,
            "unit": "ns",
            "range": "± 309287.71308780415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4517549.18,
            "unit": "ns",
            "range": "± 393658.7584659551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4577871.59,
            "unit": "ns",
            "range": "± 277469.34943070175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7566472.54,
            "unit": "ns",
            "range": "± 581668.6333554388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8365556.87,
            "unit": "ns",
            "range": "± 545052.6273958177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22964430.134831462,
            "unit": "ns",
            "range": "± 1271904.998318442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56966375.425,
            "unit": "ns",
            "range": "± 2005828.7556653728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109557208.08,
            "unit": "ns",
            "range": "± 4396343.239432651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230050462.7888889,
            "unit": "ns",
            "range": "± 12708579.176937517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6427946.680803572,
            "unit": "ns",
            "range": "± 88008.23445919086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945458.29609375,
            "unit": "ns",
            "range": "± 27536.283386701754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1460277.9928681345,
            "unit": "ns",
            "range": "± 45249.21096987237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2794290.334375,
            "unit": "ns",
            "range": "± 61857.19752531206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875713.3534458706,
            "unit": "ns",
            "range": "± 14359.268251864338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802752.4723958333,
            "unit": "ns",
            "range": "± 13265.869537218305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52672.073684210525,
            "unit": "ns",
            "range": "± 5849.306224076794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304170.42,
            "unit": "ns",
            "range": "± 32195.43716846043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284696.89,
            "unit": "ns",
            "range": "± 26659.63953619587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258066.17,
            "unit": "ns",
            "range": "± 28867.32678440938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4601975.28,
            "unit": "ns",
            "range": "± 327623.357573416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4201704.26,
            "unit": "ns",
            "range": "± 318090.4723375278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18822.153846153848,
            "unit": "ns",
            "range": "± 1700.0460903757014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92406.92708333333,
            "unit": "ns",
            "range": "± 8295.55375677051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83385.793814433,
            "unit": "ns",
            "range": "± 10983.159027705917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102121.42105263157,
            "unit": "ns",
            "range": "± 13521.03142985814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5356.8494623655915,
            "unit": "ns",
            "range": "± 642.1590102797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18731.57608695652,
            "unit": "ns",
            "range": "± 1328.946961738575"
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
          "id": "a86d2daf017aa65a7a0b32d237beffdc12395d8f",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T11:28:30+09:00",
          "tree_id": "e176512838743dea1d18aafeb02e7d79a4bee501",
          "url": "https://github.com/moreal/libplanet/commit/a86d2daf017aa65a7a0b32d237beffdc12395d8f"
        },
        "date": 1685932954095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505310.5274725275,
            "unit": "ns",
            "range": "± 91851.42646050629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2896314.870967742,
            "unit": "ns",
            "range": "± 84254.8972692357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2427794.972972973,
            "unit": "ns",
            "range": "± 114982.24023985011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5833094.166666667,
            "unit": "ns",
            "range": "± 210841.66956341578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3660043.933333333,
            "unit": "ns",
            "range": "± 30063.26943171367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3853187.533333333,
            "unit": "ns",
            "range": "± 67360.74317738428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4609604.928571428,
            "unit": "ns",
            "range": "± 50790.192936559775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4758062.19047619,
            "unit": "ns",
            "range": "± 112207.64367841394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7204325.958333333,
            "unit": "ns",
            "range": "± 186445.36456851146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8457041.066666666,
            "unit": "ns",
            "range": "± 118722.69459089871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22218768.333333332,
            "unit": "ns",
            "range": "± 264362.31170326687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55810058.46666667,
            "unit": "ns",
            "range": "± 244860.18547993194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112527494.06666666,
            "unit": "ns",
            "range": "± 584638.4670929385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223049498.86666667,
            "unit": "ns",
            "range": "± 622264.8776957408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029148.794270833,
            "unit": "ns",
            "range": "± 67808.44967513315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877321.8119419643,
            "unit": "ns",
            "range": "± 1638.4158766765934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372748.4321614583,
            "unit": "ns",
            "range": "± 2847.219846098227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638387.3588541667,
            "unit": "ns",
            "range": "± 4055.609293273839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835727.214453125,
            "unit": "ns",
            "range": "± 981.905871642481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764568.379296875,
            "unit": "ns",
            "range": "± 210.84651516457257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50804.20652173913,
            "unit": "ns",
            "range": "± 3474.2300326140526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294993.97777777776,
            "unit": "ns",
            "range": "± 11182.55595374268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285301.4074074074,
            "unit": "ns",
            "range": "± 7920.2220601117915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252084.5,
            "unit": "ns",
            "range": "± 8961.665953753614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462313.142857143,
            "unit": "ns",
            "range": "± 25438.27509832422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4103864.4285714286,
            "unit": "ns",
            "range": "± 30494.371495066443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22458.42105263158,
            "unit": "ns",
            "range": "± 1644.9413530187696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95832.60824742269,
            "unit": "ns",
            "range": "± 8070.3470567110435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82138.23684210527,
            "unit": "ns",
            "range": "± 2841.703547257853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92104.91489361702,
            "unit": "ns",
            "range": "± 13599.228803766599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5562.136842105263,
            "unit": "ns",
            "range": "± 811.5168960436928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25579.23232323232,
            "unit": "ns",
            "range": "± 4127.9655334650215"
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
          "id": "7b3bfc625bd29d55d16821003cce00de9280d659",
          "message": "Build workspaces in order by dependecies",
          "timestamp": "2023-06-05T13:24:09+09:00",
          "tree_id": "7b038ef64c75fcdece5696fdd446259c03136ccd",
          "url": "https://github.com/moreal/libplanet/commit/7b3bfc625bd29d55d16821003cce00de9280d659"
        },
        "date": 1685939771983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325356.8645833333,
            "unit": "ns",
            "range": "± 100774.09443822666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553932.095238095,
            "unit": "ns",
            "range": "± 93214.42084544474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117852.2209302327,
            "unit": "ns",
            "range": "± 113393.27068833349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5048095.038461538,
            "unit": "ns",
            "range": "± 134601.82146746182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3122621.6,
            "unit": "ns",
            "range": "± 38096.04201751148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3303372.411764706,
            "unit": "ns",
            "range": "± 48213.46746509063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193372.3333333335,
            "unit": "ns",
            "range": "± 61645.10466216701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4032435.4,
            "unit": "ns",
            "range": "± 58775.60090693611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828534.166666667,
            "unit": "ns",
            "range": "± 208061.66242953762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7478930.6,
            "unit": "ns",
            "range": "± 11219.607160171492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19006383.333333332,
            "unit": "ns",
            "range": "± 67812.1614321151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48853105.53333333,
            "unit": "ns",
            "range": "± 297574.6985360787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97626852,
            "unit": "ns",
            "range": "± 882221.0565225215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194417310.4,
            "unit": "ns",
            "range": "± 1230382.0061670626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6312891.817708333,
            "unit": "ns",
            "range": "± 22179.75168259664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831361.2286783855,
            "unit": "ns",
            "range": "± 1074.0606862766413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368955.69375,
            "unit": "ns",
            "range": "± 1706.0333971774369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576879.8177083335,
            "unit": "ns",
            "range": "± 2606.0748205574196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803379.7538364956,
            "unit": "ns",
            "range": "± 468.8874594450036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728980.8494001116,
            "unit": "ns",
            "range": "± 458.5752895644195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45127.28571428572,
            "unit": "ns",
            "range": "± 2311.9064635578575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272429.97872340423,
            "unit": "ns",
            "range": "± 9762.182989317951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260877,
            "unit": "ns",
            "range": "± 7150.293554812977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225114.2857142857,
            "unit": "ns",
            "range": "± 2770.1311112700737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142842.1333333333,
            "unit": "ns",
            "range": "± 33849.30875189259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3847323.4285714286,
            "unit": "ns",
            "range": "± 34575.16179552618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15487.364583333334,
            "unit": "ns",
            "range": "± 1090.9304876286662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81328.96511627907,
            "unit": "ns",
            "range": "± 3874.844754226554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69522.68181818182,
            "unit": "ns",
            "range": "± 1628.238644798601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84858.08163265306,
            "unit": "ns",
            "range": "± 11627.926749344131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4265.2959183673465,
            "unit": "ns",
            "range": "± 535.9505710626156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15443.478260869566,
            "unit": "ns",
            "range": "± 921.9311251510154"
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
          "id": "76dfce8a3425e29decdf8c885c24a490591ddfb0",
          "message": "Correct fs.listFiles in browser",
          "timestamp": "2023-06-02T17:13:13+09:00",
          "tree_id": "f3818e5c4c4cb1f7ef00638761aa388695bc819a",
          "url": "https://github.com/moreal/libplanet/commit/76dfce8a3425e29decdf8c885c24a490591ddfb0"
        },
        "date": 1685940453525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697628.9239130435,
            "unit": "ns",
            "range": "± 132903.57185917994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3283983.6631578947,
            "unit": "ns",
            "range": "± 263286.8076798514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738486.2604166665,
            "unit": "ns",
            "range": "± 239784.84738607454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7068906.136842106,
            "unit": "ns",
            "range": "± 456859.81632077397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4093473.4683544305,
            "unit": "ns",
            "range": "± 210861.73423255314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4301993.681318682,
            "unit": "ns",
            "range": "± 263605.3134568117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5140073.339622642,
            "unit": "ns",
            "range": "± 211393.16305942123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5318763.14,
            "unit": "ns",
            "range": "± 211413.57632607227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8808050.54054054,
            "unit": "ns",
            "range": "± 437299.0559767647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9823524.551020408,
            "unit": "ns",
            "range": "± 385872.95525330515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26474586.523809522,
            "unit": "ns",
            "range": "± 953238.4519841474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66813853.03030303,
            "unit": "ns",
            "range": "± 2106307.0228974735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132440465.13333334,
            "unit": "ns",
            "range": "± 2371989.3509231824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270979944.84210527,
            "unit": "ns",
            "range": "± 8516188.422818601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7218967.7875,
            "unit": "ns",
            "range": "± 103972.20471352193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2190775.97421875,
            "unit": "ns",
            "range": "± 29024.48748263099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1597387.251953125,
            "unit": "ns",
            "range": "± 18420.447713351383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3052251.52734375,
            "unit": "ns",
            "range": "± 39003.77741857708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998087.44375,
            "unit": "ns",
            "range": "± 18557.17438901808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925617.3845703125,
            "unit": "ns",
            "range": "± 14691.514881922878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70705.79787234042,
            "unit": "ns",
            "range": "± 9780.020276799998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338058.0857142857,
            "unit": "ns",
            "range": "± 16412.53640391813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324593.14285714284,
            "unit": "ns",
            "range": "± 13860.350520857652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307386.60869565216,
            "unit": "ns",
            "range": "± 23236.455826645768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5287316.342857143,
            "unit": "ns",
            "range": "± 254389.66073163447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4788232.981481481,
            "unit": "ns",
            "range": "± 199265.80365814894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26296.18,
            "unit": "ns",
            "range": "± 6157.658743353353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106801.61458333333,
            "unit": "ns",
            "range": "± 10280.0713722382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123170.08421052631,
            "unit": "ns",
            "range": "± 17471.64299394097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132203.23913043478,
            "unit": "ns",
            "range": "± 18014.725041970323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14130.373737373737,
            "unit": "ns",
            "range": "± 5621.199371958199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27367.448979591838,
            "unit": "ns",
            "range": "± 6426.476301365257"
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
          "id": "4a3b31654e8675aec57d36e6b754d8227524f113",
          "message": "Configure rootDir",
          "timestamp": "2023-06-05T13:41:23+09:00",
          "tree_id": "3e5143ce4915e059a1229a3f503b857ab005f75d",
          "url": "https://github.com/moreal/libplanet/commit/4a3b31654e8675aec57d36e6b754d8227524f113"
        },
        "date": 1685941238725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846932.6914893617,
            "unit": "ns",
            "range": "± 174157.581159147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3759700.606741573,
            "unit": "ns",
            "range": "± 207165.70652272427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2823137.355555556,
            "unit": "ns",
            "range": "± 309290.21871579683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7392404.53125,
            "unit": "ns",
            "range": "± 579446.9728428435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3961526.7395833335,
            "unit": "ns",
            "range": "± 428265.03060295794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4219639.927835052,
            "unit": "ns",
            "range": "± 350127.41512249404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5642098.376344086,
            "unit": "ns",
            "range": "± 554393.2224142803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5820453.22,
            "unit": "ns",
            "range": "± 574881.5405771481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9505023.708333334,
            "unit": "ns",
            "range": "± 917272.955368247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10603991.761904761,
            "unit": "ns",
            "range": "± 383744.2657427972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28779963.76470588,
            "unit": "ns",
            "range": "± 924714.0156201303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74767193.75,
            "unit": "ns",
            "range": "± 3353255.0008988967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149053862.76363635,
            "unit": "ns",
            "range": "± 6307145.305994704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287188000.82857144,
            "unit": "ns",
            "range": "± 9278119.19952307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7444177.295833333,
            "unit": "ns",
            "range": "± 91077.09886468777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2439536.571875,
            "unit": "ns",
            "range": "± 34053.336152258016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1758674.4831194195,
            "unit": "ns",
            "range": "± 48793.03263908832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3329484.24453125,
            "unit": "ns",
            "range": "± 57114.678493181906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1084252.9918870192,
            "unit": "ns",
            "range": "± 9930.520153839478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1005645.796875,
            "unit": "ns",
            "range": "± 17649.227946794275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70461.3894736842,
            "unit": "ns",
            "range": "± 19453.153443043917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386904.94736842107,
            "unit": "ns",
            "range": "± 45073.44450942272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373717.8064516129,
            "unit": "ns",
            "range": "± 51833.585573838056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330341.64130434784,
            "unit": "ns",
            "range": "± 42738.33586535925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5573108.4,
            "unit": "ns",
            "range": "± 309241.75139266043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5229182.617021277,
            "unit": "ns",
            "range": "± 416840.29996579286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26688.939393939392,
            "unit": "ns",
            "range": "± 9926.885516490755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117117.07291666667,
            "unit": "ns",
            "range": "± 22075.125023545243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119936.55913978495,
            "unit": "ns",
            "range": "± 27166.313748937373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139409.73913043478,
            "unit": "ns",
            "range": "± 28943.698742907927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6968.674418604651,
            "unit": "ns",
            "range": "± 1775.1951504444305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26783.17,
            "unit": "ns",
            "range": "± 10639.70479393678"
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
          "id": "189e1b8200b8f33eaa8c7d965a59cf2d7fea6770",
          "message": "Use test.alias to bypass import-map error",
          "timestamp": "2023-06-05T14:07:14+09:00",
          "tree_id": "557fe4e48fec937f55cdcf6ed227382edb31ed5b",
          "url": "https://github.com/moreal/libplanet/commit/189e1b8200b8f33eaa8c7d965a59cf2d7fea6770"
        },
        "date": 1685942357556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338288.27,
            "unit": "ns",
            "range": "± 103716.4517364779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2524862.304347826,
            "unit": "ns",
            "range": "± 61521.30051781384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110611.5263157897,
            "unit": "ns",
            "range": "± 100442.37425435857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5195752.37037037,
            "unit": "ns",
            "range": "± 138691.85179996592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3143616.48,
            "unit": "ns",
            "range": "± 35761.976986878115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3288154.2978723403,
            "unit": "ns",
            "range": "± 98714.93785267339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224006.733333333,
            "unit": "ns",
            "range": "± 43044.527293534185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4120810,
            "unit": "ns",
            "range": "± 71304.29382248876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6675037.620689655,
            "unit": "ns",
            "range": "± 137590.94792495144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644958.4,
            "unit": "ns",
            "range": "± 48702.23535028229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19570206.733333334,
            "unit": "ns",
            "range": "± 98052.46528004912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49327753.8,
            "unit": "ns",
            "range": "± 305610.32847593917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98728463,
            "unit": "ns",
            "range": "± 787460.0063172369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198294940.93333334,
            "unit": "ns",
            "range": "± 1058688.821466539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056787.200334822,
            "unit": "ns",
            "range": "± 11632.597454058821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960409.1307291666,
            "unit": "ns",
            "range": "± 1888.5117287238538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351473.080357143,
            "unit": "ns",
            "range": "± 2542.808035682407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616899.9441964286,
            "unit": "ns",
            "range": "± 1647.907313613165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799842.5580357143,
            "unit": "ns",
            "range": "± 937.7227457801955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742380.76328125,
            "unit": "ns",
            "range": "± 472.20907942393404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43919.653333333335,
            "unit": "ns",
            "range": "± 1929.8335490002362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276135.8,
            "unit": "ns",
            "range": "± 10536.566229961607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264507.11627906974,
            "unit": "ns",
            "range": "± 9505.40902957314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227531.38888888888,
            "unit": "ns",
            "range": "± 4843.39899048651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206286.928571428,
            "unit": "ns",
            "range": "± 20934.437720818136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3831684.214285714,
            "unit": "ns",
            "range": "± 26395.76681439242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16864.46875,
            "unit": "ns",
            "range": "± 1310.9346360767913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82189.54166666667,
            "unit": "ns",
            "range": "± 4035.848127830815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69122.46153846153,
            "unit": "ns",
            "range": "± 821.779027008337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80377.48192771085,
            "unit": "ns",
            "range": "± 5658.401677629568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4026.2736842105264,
            "unit": "ns",
            "range": "± 488.8460672763988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16244.031578947368,
            "unit": "ns",
            "range": "± 1268.508224653446"
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
          "id": "49ec6717198ed3fbbf82b764e3d52e27f4891a80",
          "message": "Remove unused code",
          "timestamp": "2023-06-05T14:27:39+09:00",
          "tree_id": "958f707149dd7dcff470db86afd7ba5f3ab62a53",
          "url": "https://github.com/moreal/libplanet/commit/49ec6717198ed3fbbf82b764e3d52e27f4891a80"
        },
        "date": 1685943643027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416491.5154639175,
            "unit": "ns",
            "range": "± 97752.80364565353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717922.117647059,
            "unit": "ns",
            "range": "± 86389.56003661017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288248.5212765955,
            "unit": "ns",
            "range": "± 130331.51668112655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5723707.194029851,
            "unit": "ns",
            "range": "± 270750.26640834357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3642742.6,
            "unit": "ns",
            "range": "± 62977.120683172376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3757470.6,
            "unit": "ns",
            "range": "± 85093.61510304555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4612116.466666667,
            "unit": "ns",
            "range": "± 84531.28387497958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4742683.095238095,
            "unit": "ns",
            "range": "± 111758.333885176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7314755.466666667,
            "unit": "ns",
            "range": "± 216647.13094143206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207253.692307692,
            "unit": "ns",
            "range": "± 115310.1910604498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22434035.533333335,
            "unit": "ns",
            "range": "± 246509.20811484818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55979672.615384616,
            "unit": "ns",
            "range": "± 365374.4060051138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110921197.86666666,
            "unit": "ns",
            "range": "± 563637.6117833498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223040196.73333332,
            "unit": "ns",
            "range": "± 755491.8696523352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008871.670758928,
            "unit": "ns",
            "range": "± 22740.970890344644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932207.590234375,
            "unit": "ns",
            "range": "± 3956.7490221102425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376520.958203125,
            "unit": "ns",
            "range": "± 3500.79631718644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608473.831770833,
            "unit": "ns",
            "range": "± 4171.620992998426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821520.3321814904,
            "unit": "ns",
            "range": "± 360.2353112960483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767613.2167271206,
            "unit": "ns",
            "range": "± 774.7766096687558"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50874.47826086957,
            "unit": "ns",
            "range": "± 2461.5098642947705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296669.86666666664,
            "unit": "ns",
            "range": "± 7967.726434393523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280549.62790697673,
            "unit": "ns",
            "range": "± 10098.717641419005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259904.46296296295,
            "unit": "ns",
            "range": "± 10839.824933685137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4498164.733333333,
            "unit": "ns",
            "range": "± 53568.08946493994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4135682.8,
            "unit": "ns",
            "range": "± 26194.92811922622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21058.73404255319,
            "unit": "ns",
            "range": "± 1606.002016466094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98932.60638297872,
            "unit": "ns",
            "range": "± 6563.573579516136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86787.62222222223,
            "unit": "ns",
            "range": "± 4853.037849897147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97302.66176470589,
            "unit": "ns",
            "range": "± 4367.863689751271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6168.8125,
            "unit": "ns",
            "range": "± 668.5477633214439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20962.655913978495,
            "unit": "ns",
            "range": "± 1664.6305602316195"
          }
        ]
      }
    ]
  }
}