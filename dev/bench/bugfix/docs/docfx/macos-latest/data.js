window.BENCHMARK_DATA = {
  "lastUpdate": 1689821789335,
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
          "id": "08b4f59855bee5a03b1da544e4eb9adedead715e",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:38:05+09:00",
          "tree_id": "4cb596b9a792d1fd5a4b53708adfd6f71e0c5a2a",
          "url": "https://github.com/moreal/libplanet/commit/08b4f59855bee5a03b1da544e4eb9adedead715e"
        },
        "date": 1689821777986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8760656.964285715,
            "unit": "ns",
            "range": "± 248305.36792358183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20591055.095238097,
            "unit": "ns",
            "range": "± 473575.3243450196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64250352.25,
            "unit": "ns",
            "range": "± 11265833.940831337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103569702.93333334,
            "unit": "ns",
            "range": "± 1315555.2979549016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239678787.14285713,
            "unit": "ns",
            "range": "± 1829089.2078784248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67717.90425531915,
            "unit": "ns",
            "range": "± 6514.134857962616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336456.3369565217,
            "unit": "ns",
            "range": "± 29310.057452591656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330657.3404255319,
            "unit": "ns",
            "range": "± 31931.822579328338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317610.875,
            "unit": "ns",
            "range": "± 17426.90470192405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426692.031578948,
            "unit": "ns",
            "range": "± 321655.24602402427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853297.178082192,
            "unit": "ns",
            "range": "± 190772.8291773099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24241.052083333332,
            "unit": "ns",
            "range": "± 6698.899973121732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114223.02150537634,
            "unit": "ns",
            "range": "± 18943.314273159976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134385.8956043956,
            "unit": "ns",
            "range": "± 16388.390497801327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132745.7741935484,
            "unit": "ns",
            "range": "± 21387.522655759625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8942.91111111111,
            "unit": "ns",
            "range": "± 1206.1088948213965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19014.57608695652,
            "unit": "ns",
            "range": "± 2470.6293064665388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1593557.4747474748,
            "unit": "ns",
            "range": "± 162577.4442128505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037264.714285714,
            "unit": "ns",
            "range": "± 161975.23823025762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109704.6354166665,
            "unit": "ns",
            "range": "± 161414.36475058252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6060729.742424242,
            "unit": "ns",
            "range": "± 284403.2698200573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3488717.56,
            "unit": "ns",
            "range": "± 242990.40701586087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3592375.9795918367,
            "unit": "ns",
            "range": "± 261149.05469805995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4518626.80952381,
            "unit": "ns",
            "range": "± 206959.82967707314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003663.1276595746,
            "unit": "ns",
            "range": "± 258188.90004668452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7568221.611764706,
            "unit": "ns",
            "range": "± 387767.0024409938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6918209.21484375,
            "unit": "ns",
            "range": "± 63598.02783456577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041732.4102411685,
            "unit": "ns",
            "range": "± 51270.547492655154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338388.0080729167,
            "unit": "ns",
            "range": "± 15896.140788581293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688142.8649553573,
            "unit": "ns",
            "range": "± 33364.97512537311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901084.3630022322,
            "unit": "ns",
            "range": "± 13581.338158532895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769321.9169270833,
            "unit": "ns",
            "range": "± 12070.54058632676"
          }
        ]
      }
    ]
  }
}