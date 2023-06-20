window.BENCHMARK_DATA = {
  "lastUpdate": 1687249876894,
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
      }
    ]
  }
}