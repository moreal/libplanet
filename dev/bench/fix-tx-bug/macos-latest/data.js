window.BENCHMARK_DATA = {
  "lastUpdate": 1687250176475,
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
      }
    ]
  }
}