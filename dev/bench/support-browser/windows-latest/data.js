window.BENCHMARK_DATA = {
  "lastUpdate": 1685700211267,
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
        "date": 1685700193524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365597.93814433,
            "unit": "ns",
            "range": "± 111027.52472114502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2474693.1818181816,
            "unit": "ns",
            "range": "± 92078.66555345873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110447.8723404254,
            "unit": "ns",
            "range": "± 122531.03598831859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970310.256410256,
            "unit": "ns",
            "range": "± 172776.1295569193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43184.931506849316,
            "unit": "ns",
            "range": "± 2159.0681653124693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6900135.714285715,
            "unit": "ns",
            "range": "± 88275.43091538384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17710973.333333332,
            "unit": "ns",
            "range": "± 119265.7085590625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45147113.333333336,
            "unit": "ns",
            "range": "± 322616.9530278165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89941113.33333333,
            "unit": "ns",
            "range": "± 470476.5894686953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178827650,
            "unit": "ns",
            "range": "± 728482.0527328358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773803.671875,
            "unit": "ns",
            "range": "± 12991.51420290105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518195.3575721155,
            "unit": "ns",
            "range": "± 2470.0433286012576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146918.0814302885,
            "unit": "ns",
            "range": "± 1126.189295428071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624175.1116071427,
            "unit": "ns",
            "range": "± 20386.186901559686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837398.7565104166,
            "unit": "ns",
            "range": "± 4462.019042492021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743523.1515066965,
            "unit": "ns",
            "range": "± 1860.7503596570484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2975835.714285714,
            "unit": "ns",
            "range": "± 36727.978376224244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3144262.5,
            "unit": "ns",
            "range": "± 95998.5811387083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3973731.5789473685,
            "unit": "ns",
            "range": "± 85694.52888429783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006650,
            "unit": "ns",
            "range": "± 93773.14438950873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6368841.176470588,
            "unit": "ns",
            "range": "± 127529.00679268781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264840,
            "unit": "ns",
            "range": "± 11116.714142827157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246509.52380952382,
            "unit": "ns",
            "range": "± 8946.754678647845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220279,
            "unit": "ns",
            "range": "± 13523.016630466695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3856060,
            "unit": "ns",
            "range": "± 29018.95439683715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477150,
            "unit": "ns",
            "range": "± 23975.396042289176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18427.835051546394,
            "unit": "ns",
            "range": "± 1703.045205656206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81311.62790697675,
            "unit": "ns",
            "range": "± 4409.89311874352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67739.2156862745,
            "unit": "ns",
            "range": "± 2748.0231754024603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90566.32653061225,
            "unit": "ns",
            "range": "± 13773.6484088355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4495.876288659794,
            "unit": "ns",
            "range": "± 555.4498037951606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17180.645161290322,
            "unit": "ns",
            "range": "± 1864.3834547107413"
          }
        ]
      }
    ]
  }
}