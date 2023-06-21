window.BENCHMARK_DATA = {
  "lastUpdate": 1687342206496,
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
          "id": "1fb37864f72f21ed37dffd50ef4508d1ab333e57",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:07:10+09:00",
          "tree_id": "582617ebad48b62bccae5014cb8031065aa34f37",
          "url": "https://github.com/moreal/libplanet/commit/1fb37864f72f21ed37dffd50ef4508d1ab333e57"
        },
        "date": 1687249866869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8784077.461538462,
            "unit": "ns",
            "range": "± 104123.29030658428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21983055.892405063,
            "unit": "ns",
            "range": "± 1685937.0150398859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59116112.71176471,
            "unit": "ns",
            "range": "± 5206276.385665633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123897582.91758242,
            "unit": "ns",
            "range": "± 26711821.82103821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266185752.9742268,
            "unit": "ns",
            "range": "± 74540623.93733208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74790.2191011236,
            "unit": "ns",
            "range": "± 9289.092068350388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375595.5625,
            "unit": "ns",
            "range": "± 55303.6895953535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331201.86666666664,
            "unit": "ns",
            "range": "± 38798.1392161236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306763.12921348313,
            "unit": "ns",
            "range": "± 24186.14040547247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4244633.796875,
            "unit": "ns",
            "range": "± 195586.93709368285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795104.6296296297,
            "unit": "ns",
            "range": "± 96065.42149739902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19495.214285714286,
            "unit": "ns",
            "range": "± 4575.489601992134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92975,
            "unit": "ns",
            "range": "± 15359.581709729999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111192.36842105263,
            "unit": "ns",
            "range": "± 13048.847472586305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120038.57291666667,
            "unit": "ns",
            "range": "± 16428.636533260928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7697.3387096774195,
            "unit": "ns",
            "range": "± 1340.6703246342252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22729.833333333332,
            "unit": "ns",
            "range": "± 4537.950031182279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1908427.311827957,
            "unit": "ns",
            "range": "± 444447.6249942652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3475560.5217391304,
            "unit": "ns",
            "range": "± 526473.5108985814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2978669.7666666666,
            "unit": "ns",
            "range": "± 667667.5536593632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9261311.180851065,
            "unit": "ns",
            "range": "± 2403101.5845278488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3251705.304347826,
            "unit": "ns",
            "range": "± 156381.5258155237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639855.424731183,
            "unit": "ns",
            "range": "± 473159.64481489005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4625853.7191011235,
            "unit": "ns",
            "range": "± 323355.6527623116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402057.384057971,
            "unit": "ns",
            "range": "± 203769.91445583745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8226658.255555555,
            "unit": "ns",
            "range": "± 457995.5420122954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7414465.520647322,
            "unit": "ns",
            "range": "± 619835.4976057982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2355678.7781929346,
            "unit": "ns",
            "range": "± 134211.2733682955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1577703.5676618305,
            "unit": "ns",
            "range": "± 107445.32707226176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3501875.272885101,
            "unit": "ns",
            "range": "± 431903.8998914084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951870.5318048651,
            "unit": "ns",
            "range": "± 34917.89935716459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788295.2170758928,
            "unit": "ns",
            "range": "± 13028.3479897133"
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
          "id": "04c30457cf95a606952fee8daaae44888a6af52f",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:11:16+09:00",
          "tree_id": "49b35c1dbf7c6846c137a2dd9dcf6be71f01db05",
          "url": "https://github.com/moreal/libplanet/commit/04c30457cf95a606952fee8daaae44888a6af52f"
        },
        "date": 1687250166265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9350921.436842104,
            "unit": "ns",
            "range": "± 891134.2963712489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23519640.944444444,
            "unit": "ns",
            "range": "± 1894368.2160543243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56640593.0862069,
            "unit": "ns",
            "range": "± 2464189.088547664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117993624.52941176,
            "unit": "ns",
            "range": "± 5591731.5119702965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238680201.55319148,
            "unit": "ns",
            "range": "± 9207710.278181016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75367.73863636363,
            "unit": "ns",
            "range": "± 9426.186013361401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395606.12903225806,
            "unit": "ns",
            "range": "± 66885.55816633588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362324.55555555556,
            "unit": "ns",
            "range": "± 40602.40971736073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352448.27777777775,
            "unit": "ns",
            "range": "± 40553.4295325877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4642317.956043956,
            "unit": "ns",
            "range": "± 397513.02292508923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4231232.2235294115,
            "unit": "ns",
            "range": "± 372621.09799571574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24825.847826086956,
            "unit": "ns",
            "range": "± 5852.0080059637085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124976.12365591398,
            "unit": "ns",
            "range": "± 24841.271382307197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117520.26086956522,
            "unit": "ns",
            "range": "± 13219.827296314656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118364.72105263158,
            "unit": "ns",
            "range": "± 16230.697008655734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7011.226315789474,
            "unit": "ns",
            "range": "± 1199.2273083390278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19931.808510638297,
            "unit": "ns",
            "range": "± 3608.2832282694576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1949589.3969072164,
            "unit": "ns",
            "range": "± 400500.61754692515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3352782.5795454546,
            "unit": "ns",
            "range": "± 424828.99181150505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2834117.217391304,
            "unit": "ns",
            "range": "± 382450.1130930206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8642646.794736842,
            "unit": "ns",
            "range": "± 2663726.070978227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3752454.9791666665,
            "unit": "ns",
            "range": "± 368110.2145787598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988874.484210526,
            "unit": "ns",
            "range": "± 398622.5312555903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4810252.846153846,
            "unit": "ns",
            "range": "± 389064.4899311087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5695112.825581395,
            "unit": "ns",
            "range": "± 1059778.7161492468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10848027.634408602,
            "unit": "ns",
            "range": "± 3423355.6366070397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6847737.401227678,
            "unit": "ns",
            "range": "± 109971.11413769115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2070995.3852539062,
            "unit": "ns",
            "range": "± 65103.21885465818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1573134.857512718,
            "unit": "ns",
            "range": "± 57945.7025799377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3490501.7530691964,
            "unit": "ns",
            "range": "± 305633.79746587476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949392.8626130756,
            "unit": "ns",
            "range": "± 48233.536904818255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 884031.9481139521,
            "unit": "ns",
            "range": "± 53087.58938498677"
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
          "id": "b6b582f14c4375b0a214cff73e439a4900b129ee",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:25:50+09:00",
          "tree_id": "69558e42b1bc6eb4aede6672b531714a5189f4af",
          "url": "https://github.com/moreal/libplanet/commit/b6b582f14c4375b0a214cff73e439a4900b129ee"
        },
        "date": 1687251052636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10662152.186666667,
            "unit": "ns",
            "range": "± 521913.7869386997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21765089.9,
            "unit": "ns",
            "range": "± 818568.6854924121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55378852.38888889,
            "unit": "ns",
            "range": "± 1703399.582761112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111564808.28571428,
            "unit": "ns",
            "range": "± 1827047.8931910975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232830114.1875,
            "unit": "ns",
            "range": "± 4527794.618922501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89244.81325301205,
            "unit": "ns",
            "range": "± 14572.052047542435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376636.3894736842,
            "unit": "ns",
            "range": "± 48628.103842149416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372888.6979166667,
            "unit": "ns",
            "range": "± 53010.862078817045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346135.375,
            "unit": "ns",
            "range": "± 35073.22751153862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4573288.19072165,
            "unit": "ns",
            "range": "± 340041.3383741429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4318401.708791208,
            "unit": "ns",
            "range": "± 420578.1415189364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27308.954545454544,
            "unit": "ns",
            "range": "± 3319.028447752534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124131.52173913043,
            "unit": "ns",
            "range": "± 15308.810180134526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125201.97126436782,
            "unit": "ns",
            "range": "± 12482.798308108195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126373.0425531915,
            "unit": "ns",
            "range": "± 24920.072243834984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8131.427835051546,
            "unit": "ns",
            "range": "± 1457.1716057101755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25521.34375,
            "unit": "ns",
            "range": "± 4450.581198777065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1877467.5,
            "unit": "ns",
            "range": "± 260108.64506940957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3855656.2978723403,
            "unit": "ns",
            "range": "± 703060.6083531984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3182886.033333333,
            "unit": "ns",
            "range": "± 562220.6964158862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9708334.77173913,
            "unit": "ns",
            "range": "± 2486731.5242128093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3714907.945054945,
            "unit": "ns",
            "range": "± 386755.5711935256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749377.78125,
            "unit": "ns",
            "range": "± 288247.64198952273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5014696.64893617,
            "unit": "ns",
            "range": "± 436378.7395894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4757963.791666667,
            "unit": "ns",
            "range": "± 422939.6975280448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8649068.744680852,
            "unit": "ns",
            "range": "± 723929.0782875911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7213423.893585526,
            "unit": "ns",
            "range": "± 463485.43393631035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2139457.5967881945,
            "unit": "ns",
            "range": "± 41000.74060304075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420293.6609552556,
            "unit": "ns",
            "range": "± 34622.03909366334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2962199.2686631945,
            "unit": "ns",
            "range": "± 233717.3707883629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957673.2168799867,
            "unit": "ns",
            "range": "± 54290.14748519424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920228.607578125,
            "unit": "ns",
            "range": "± 36613.08436060637"
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
          "id": "bb312b1e05f7c31e85656237d69f6b5f68811bec",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:31:38+09:00",
          "tree_id": "3708c432454025c957577e290f20b4d46b44e6a8",
          "url": "https://github.com/moreal/libplanet/commit/bb312b1e05f7c31e85656237d69f6b5f68811bec"
        },
        "date": 1687251110779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9069339.781609196,
            "unit": "ns",
            "range": "± 634594.0859333741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21366216.243243244,
            "unit": "ns",
            "range": "± 716069.8188326876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54582165.71428572,
            "unit": "ns",
            "range": "± 2483771.421289325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110696189.27142857,
            "unit": "ns",
            "range": "± 3164361.5816382496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225761955.08333334,
            "unit": "ns",
            "range": "± 3393910.217016474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70936.71649484536,
            "unit": "ns",
            "range": "± 13630.303569640639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370611.9680851064,
            "unit": "ns",
            "range": "± 25947.074175892998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357334.77173913043,
            "unit": "ns",
            "range": "± 30765.7584415822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325883.8977272727,
            "unit": "ns",
            "range": "± 25103.980289134153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4404181.660714285,
            "unit": "ns",
            "range": "± 187921.04031169112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4038959.2551020407,
            "unit": "ns",
            "range": "± 160657.5934164191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26063.8064516129,
            "unit": "ns",
            "range": "± 4026.891557306423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118323.7258064516,
            "unit": "ns",
            "range": "± 12744.12378154445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120994.70786516854,
            "unit": "ns",
            "range": "± 15009.773977919616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133450.61855670103,
            "unit": "ns",
            "range": "± 21341.587053627685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8821.755319148937,
            "unit": "ns",
            "range": "± 948.6668482401485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25336.07894736842,
            "unit": "ns",
            "range": "± 3759.2432595747846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1754179.5215053763,
            "unit": "ns",
            "range": "± 191799.75684704736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3208928.289473684,
            "unit": "ns",
            "range": "± 161773.98408860972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2807598.0306122447,
            "unit": "ns",
            "range": "± 276865.4108895052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7068104.896103896,
            "unit": "ns",
            "range": "± 360741.0715173909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388448.12295082,
            "unit": "ns",
            "range": "± 142566.22961734474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3855501.6875,
            "unit": "ns",
            "range": "± 299200.8549396142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4835174.922077922,
            "unit": "ns",
            "range": "± 245439.27226107576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4652376.40625,
            "unit": "ns",
            "range": "± 297885.7083834451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8262545.1875,
            "unit": "ns",
            "range": "± 496284.36127781915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7653834.6477272725,
            "unit": "ns",
            "range": "± 239475.47381655444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061617.715244391,
            "unit": "ns",
            "range": "± 103686.38290603655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343664.1857722355,
            "unit": "ns",
            "range": "± 62139.66954328764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740660.972098214,
            "unit": "ns",
            "range": "± 162569.10556766143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 917417.1592548077,
            "unit": "ns",
            "range": "± 8497.975959872001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796611.7880161831,
            "unit": "ns",
            "range": "± 13430.082047122794"
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
          "id": "bcc65cef468f37727c19a8c51582940ce1146465",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-20T17:33:56+09:00",
          "tree_id": "ee283f4e15d60dc1ac6aee6d58f5ffa36f59337b",
          "url": "https://github.com/moreal/libplanet/commit/bcc65cef468f37727c19a8c51582940ce1146465"
        },
        "date": 1687251258306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9162358.157894736,
            "unit": "ns",
            "range": "± 185217.2542971161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24121187.352941178,
            "unit": "ns",
            "range": "± 470179.86021321424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60155002.461538464,
            "unit": "ns",
            "range": "± 583189.7381789817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117068059.94117647,
            "unit": "ns",
            "range": "± 2118733.343533008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287271066.3,
            "unit": "ns",
            "range": "± 7470446.34963334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73130.5744680851,
            "unit": "ns",
            "range": "± 8298.29315717105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383920.93506493507,
            "unit": "ns",
            "range": "± 19048.570350648963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357433.8,
            "unit": "ns",
            "range": "± 15920.389574272678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348172.84210526315,
            "unit": "ns",
            "range": "± 11753.660199380598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5124822.875,
            "unit": "ns",
            "range": "± 158217.51828696814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4463278.333333333,
            "unit": "ns",
            "range": "± 130459.4978303369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19676.242105263158,
            "unit": "ns",
            "range": "± 1781.6090009457296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102173.78571428571,
            "unit": "ns",
            "range": "± 5445.410039262155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108554.25510204081,
            "unit": "ns",
            "range": "± 18040.04110109224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123322.32258064517,
            "unit": "ns",
            "range": "± 16080.438061955148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7195.622448979592,
            "unit": "ns",
            "range": "± 1125.1498275057452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18832.88172043011,
            "unit": "ns",
            "range": "± 1654.4797543629863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797151.311827957,
            "unit": "ns",
            "range": "± 154942.53442626502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3506038.347222222,
            "unit": "ns",
            "range": "± 172286.73281776105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2894997.62,
            "unit": "ns",
            "range": "± 201632.507521605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7588071.2,
            "unit": "ns",
            "range": "± 338197.1881185315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3988639.789473684,
            "unit": "ns",
            "range": "± 75194.56872864255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202625.931034483,
            "unit": "ns",
            "range": "± 119352.95850900478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5495800.363636363,
            "unit": "ns",
            "range": "± 169662.1137538553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5358986.364864865,
            "unit": "ns",
            "range": "± 181824.90142811116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9311000.301886793,
            "unit": "ns",
            "range": "± 345752.0487121896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7343295.367745535,
            "unit": "ns",
            "range": "± 101696.34532041912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330919.707589286,
            "unit": "ns",
            "range": "± 41078.525237364505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493165.5548377405,
            "unit": "ns",
            "range": "± 23088.296705913814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2928510.8708147323,
            "unit": "ns",
            "range": "± 31042.702296310435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945405.3524693081,
            "unit": "ns",
            "range": "± 8918.185854478696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912950.8205729167,
            "unit": "ns",
            "range": "± 10199.343843924353"
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
          "id": "4bbe9f311d53f21ee472987d6fb6b1978e825f0c",
          "message": "fix(@planetarium/tx): correct `Currency` serialization",
          "timestamp": "2023-06-21T11:19:37+09:00",
          "tree_id": "bccfa9983a1dd3842eb6c6b0d65da82c5ab906cb",
          "url": "https://github.com/moreal/libplanet/commit/4bbe9f311d53f21ee472987d6fb6b1978e825f0c"
        },
        "date": 1687314880800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8174047.214285715,
            "unit": "ns",
            "range": "± 118796.88077825468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20678454.1,
            "unit": "ns",
            "range": "± 131630.97520655455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52131479.071428575,
            "unit": "ns",
            "range": "± 1231921.7704903414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101057520.96666667,
            "unit": "ns",
            "range": "± 1288537.641880619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210108878.53333333,
            "unit": "ns",
            "range": "± 2748768.4667994985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71043.5824742268,
            "unit": "ns",
            "range": "± 7861.394932503635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340150.2395833333,
            "unit": "ns",
            "range": "± 20588.541943336393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323266.8548387097,
            "unit": "ns",
            "range": "± 21219.408821440255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315345.0869565217,
            "unit": "ns",
            "range": "± 15101.063347579917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4160608,
            "unit": "ns",
            "range": "± 83063.72451317121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3845487.5,
            "unit": "ns",
            "range": "± 57545.875508154364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21070.319587628866,
            "unit": "ns",
            "range": "± 3887.844787889107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102978.76842105263,
            "unit": "ns",
            "range": "± 11162.800580359059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113535.75252525252,
            "unit": "ns",
            "range": "± 7956.132308674318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122836.125,
            "unit": "ns",
            "range": "± 14985.373337638975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7729.88947368421,
            "unit": "ns",
            "range": "± 831.7499278275949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20578.869565217392,
            "unit": "ns",
            "range": "± 3266.9208634208994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596000.6082474226,
            "unit": "ns",
            "range": "± 147266.86500827593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975312.8103448274,
            "unit": "ns",
            "range": "± 130501.65247692847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2516412.8870967743,
            "unit": "ns",
            "range": "± 164686.36769907142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6477610.066666666,
            "unit": "ns",
            "range": "± 204461.78300639594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3353765.6071428573,
            "unit": "ns",
            "range": "± 93710.701251181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3484955.22,
            "unit": "ns",
            "range": "± 140654.20212681242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4403216.142857143,
            "unit": "ns",
            "range": "± 69415.18233605132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4335742,
            "unit": "ns",
            "range": "± 165246.45555351558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7782052.596774193,
            "unit": "ns",
            "range": "± 265175.59187998495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6374020.689453125,
            "unit": "ns",
            "range": "± 39134.41303792524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925674.9529622395,
            "unit": "ns",
            "range": "± 10883.544413963884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280691.9365885416,
            "unit": "ns",
            "range": "± 6460.988774976038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2741759.640066964,
            "unit": "ns",
            "range": "± 52933.945583495944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870923.5345703125,
            "unit": "ns",
            "range": "± 4721.145409104879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798745.9645833333,
            "unit": "ns",
            "range": "± 8625.971765373815"
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
          "id": "93710afad2c8756be986051d7a03f9a47c9ea2f1",
          "message": "fix(@planetarium/tx): deprecate elements related to system action",
          "timestamp": "2023-06-21T18:53:23+09:00",
          "tree_id": "8cea5e90c0935e829cfdf8d7354089b2b37087c8",
          "url": "https://github.com/moreal/libplanet/commit/93710afad2c8756be986051d7a03f9a47c9ea2f1"
        },
        "date": 1687342196756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8401635.277777778,
            "unit": "ns",
            "range": "± 164150.67391793555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20849215.433333334,
            "unit": "ns",
            "range": "± 370891.1889991585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53759924.696969695,
            "unit": "ns",
            "range": "± 1650027.3265645383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107873433.5,
            "unit": "ns",
            "range": "± 2598136.8191946433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227846453.16666666,
            "unit": "ns",
            "range": "± 5875080.808485376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65698.67391304347,
            "unit": "ns",
            "range": "± 7297.7954907195735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349157.3617021277,
            "unit": "ns",
            "range": "± 29939.76728836988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332395.6354166667,
            "unit": "ns",
            "range": "± 30053.106157046936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337362.9105263158,
            "unit": "ns",
            "range": "± 32042.999072886327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4430525.531914894,
            "unit": "ns",
            "range": "± 170893.99777956065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3943651.205882353,
            "unit": "ns",
            "range": "± 123939.08200127982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19112.467391304348,
            "unit": "ns",
            "range": "± 2163.6583155889693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96965.42929292929,
            "unit": "ns",
            "range": "± 13845.231985772121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107805.4175257732,
            "unit": "ns",
            "range": "± 12361.4617466528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117844.08602150538,
            "unit": "ns",
            "range": "± 12584.420455861731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6788.474226804124,
            "unit": "ns",
            "range": "± 825.9882728786104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18893.392473118278,
            "unit": "ns",
            "range": "± 1975.5238076012276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730817.5729166667,
            "unit": "ns",
            "range": "± 203342.84976647818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3267006.9210526315,
            "unit": "ns",
            "range": "± 165004.15726566914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828066.304347826,
            "unit": "ns",
            "range": "± 248038.72533824804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7316702.458333333,
            "unit": "ns",
            "range": "± 476173.2587209235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3403796.9404761903,
            "unit": "ns",
            "range": "± 181831.6789992745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3707395.788888889,
            "unit": "ns",
            "range": "± 271771.5943311855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4792389.188888889,
            "unit": "ns",
            "range": "± 265859.77305269876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4621573.46875,
            "unit": "ns",
            "range": "± 307185.3925508675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8352874.963414635,
            "unit": "ns",
            "range": "± 439023.8212013973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7225213.419084822,
            "unit": "ns",
            "range": "± 91247.95127762695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2073910.978515625,
            "unit": "ns",
            "range": "± 51795.0995439305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366384.7795410156,
            "unit": "ns",
            "range": "± 26639.402568752208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660735.475167411,
            "unit": "ns",
            "range": "± 31162.84378763202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937183.7816894532,
            "unit": "ns",
            "range": "± 21364.222661402448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781211.1000651042,
            "unit": "ns",
            "range": "± 7821.58405725983"
          }
        ]
      }
    ]
  }
}