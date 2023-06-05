window.BENCHMARK_DATA = {
  "lastUpdate": 1685931998236,
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
      }
    ]
  }
}