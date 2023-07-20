window.BENCHMARK_DATA = {
  "lastUpdate": 1689823941729,
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
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "distinct": true,
          "id": "2684d645c3f7733b591bcfd60204306818e24684",
          "message": "docs: fix docfx toc configuration",
          "timestamp": "2023-07-20T11:52:20+09:00",
          "tree_id": "998eb7d8985e43459dd5b7a593f89c471b8127c7",
          "url": "https://github.com/moreal/libplanet/commit/2684d645c3f7733b591bcfd60204306818e24684"
        },
        "date": 1689822601487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9177928.32,
            "unit": "ns",
            "range": "± 628675.5779299632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21807724.602272727,
            "unit": "ns",
            "range": "± 1169664.0370615027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53848333.10869565,
            "unit": "ns",
            "range": "± 2590825.8383697644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109751562.10606061,
            "unit": "ns",
            "range": "± 5116898.968390793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237245501.05,
            "unit": "ns",
            "range": "± 14194797.868739555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74236.81318681319,
            "unit": "ns",
            "range": "± 9870.553566500588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348412.0104166667,
            "unit": "ns",
            "range": "± 36550.54442117246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352986.5,
            "unit": "ns",
            "range": "± 53681.96850697173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344716.8762886598,
            "unit": "ns",
            "range": "± 37764.875204253876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4497265.760416667,
            "unit": "ns",
            "range": "± 334459.7326641798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852645.2466666666,
            "unit": "ns",
            "range": "± 192550.13454500577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22455.215789473685,
            "unit": "ns",
            "range": "± 4058.077971481127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109421.89583333333,
            "unit": "ns",
            "range": "± 18560.482368663168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112590.06976744186,
            "unit": "ns",
            "range": "± 14070.179368220533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117220.39361702128,
            "unit": "ns",
            "range": "± 17102.30221782586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6681.868131868132,
            "unit": "ns",
            "range": "± 818.936087708263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21659.01052631579,
            "unit": "ns",
            "range": "± 4344.330963585142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577503.9591836734,
            "unit": "ns",
            "range": "± 149649.60813227226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937201.510638298,
            "unit": "ns",
            "range": "± 114355.05311602265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2193706.7978723403,
            "unit": "ns",
            "range": "± 220134.1954099636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6578418.1022727275,
            "unit": "ns",
            "range": "± 605711.5950561177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3682285.7551020407,
            "unit": "ns",
            "range": "± 302271.0712357391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3769397.9292929294,
            "unit": "ns",
            "range": "± 330468.2862622791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4576029.869047619,
            "unit": "ns",
            "range": "± 242217.91113464013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4221150.244897959,
            "unit": "ns",
            "range": "± 367625.11636925954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7740198.525252526,
            "unit": "ns",
            "range": "± 579434.6113566108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6990202.001822917,
            "unit": "ns",
            "range": "± 122460.79134397075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127788.308763587,
            "unit": "ns",
            "range": "± 49842.406982227156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297056.030859375,
            "unit": "ns",
            "range": "± 11183.71178416343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3243952.8111979165,
            "unit": "ns",
            "range": "± 66083.73745555135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939840.9240234375,
            "unit": "ns",
            "range": "± 25020.040605498132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774688.1784811581,
            "unit": "ns",
            "range": "± 15006.851747873165"
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
          "id": "59a67f7718ac0b42c8d2c70a7bfa24aa63493350",
          "message": "docs: fix docfx toc configuration\n\n[skip changelog]",
          "timestamp": "2023-07-20T12:15:20+09:00",
          "tree_id": "928aecbdc413f3e401fdf1d048a54b7f234d66eb",
          "url": "https://github.com/moreal/libplanet/commit/59a67f7718ac0b42c8d2c70a7bfa24aa63493350"
        },
        "date": 1689823931947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9605537.5,
            "unit": "ns",
            "range": "± 823551.059797298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24061530.068965517,
            "unit": "ns",
            "range": "± 1042255.1072948024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49523602.368421055,
            "unit": "ns",
            "range": "± 664837.9228478012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101658584.53333333,
            "unit": "ns",
            "range": "± 1573527.0295878013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203136738.5,
            "unit": "ns",
            "range": "± 1763155.6639710355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65533.6129032258,
            "unit": "ns",
            "range": "± 8817.651739343839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307955.71428571426,
            "unit": "ns",
            "range": "± 15632.42474741679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297410.4366197183,
            "unit": "ns",
            "range": "± 14494.010610034155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312018.652173913,
            "unit": "ns",
            "range": "± 21492.26950080587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4109673.375,
            "unit": "ns",
            "range": "± 74507.7432127024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3765713.9444444445,
            "unit": "ns",
            "range": "± 76985.0283416291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22991.030612244896,
            "unit": "ns",
            "range": "± 5393.372401371703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91971.89583333333,
            "unit": "ns",
            "range": "± 11335.979021151305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89715.74468085106,
            "unit": "ns",
            "range": "± 13279.427192381723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97367.47916666667,
            "unit": "ns",
            "range": "± 12096.388456219975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6332.326086956522,
            "unit": "ns",
            "range": "± 1898.8338648615259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16287.011494252874,
            "unit": "ns",
            "range": "± 1148.7275214214192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544489.878787879,
            "unit": "ns",
            "range": "± 144911.7327832017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791037.56,
            "unit": "ns",
            "range": "± 111998.5593949643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2014193.6129032257,
            "unit": "ns",
            "range": "± 149204.00999674707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5893828.472972973,
            "unit": "ns",
            "range": "± 256510.7816562959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344832.8842105265,
            "unit": "ns",
            "range": "± 201803.8557662483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388773.852272727,
            "unit": "ns",
            "range": "± 186062.24188878053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4425727.576923077,
            "unit": "ns",
            "range": "± 180881.29419489848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3867597.8777777776,
            "unit": "ns",
            "range": "± 214155.40319846533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7325160.269662921,
            "unit": "ns",
            "range": "± 379448.77731773816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6548080.0234375,
            "unit": "ns",
            "range": "± 90027.13274103693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084487.68828125,
            "unit": "ns",
            "range": "± 28788.153821784537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308462.8532902645,
            "unit": "ns",
            "range": "± 10075.499065474773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582275.087890625,
            "unit": "ns",
            "range": "± 39185.50094708591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809103.6182391827,
            "unit": "ns",
            "range": "± 7712.585885209062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798441.882436899,
            "unit": "ns",
            "range": "± 4374.995026557375"
          }
        ]
      }
    ]
  }
}