window.BENCHMARK_DATA = {
  "lastUpdate": 1702346114240,
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
          "id": "6f5bdd066834ae1fa6cd68631b4f78d5906b8b05",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:14:05+09:00",
          "tree_id": "8ff2cd2db84ebaeec14e71ddbef72ac765e82998",
          "url": "https://github.com/moreal/libplanet/commit/6f5bdd066834ae1fa6cd68631b4f78d5906b8b05"
        },
        "date": 1702337132116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953300,
            "unit": "ns",
            "range": "± 105627.55225753538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744535.4430379746,
            "unit": "ns",
            "range": "± 90374.185158542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528462.6262626264,
            "unit": "ns",
            "range": "± 122810.27310769839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10877606.593406593,
            "unit": "ns",
            "range": "± 989061.4597016482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33418.03278688525,
            "unit": "ns",
            "range": "± 1504.6049533262112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4916923.076923077,
            "unit": "ns",
            "range": "± 17630.142457646878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12858028.57142857,
            "unit": "ns",
            "range": "± 108961.25231243677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32500392.85714286,
            "unit": "ns",
            "range": "± 239870.0656743009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64841935.71428572,
            "unit": "ns",
            "range": "± 456935.1268668619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128284480,
            "unit": "ns",
            "range": "± 788979.3833989399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3290964.296875,
            "unit": "ns",
            "range": "± 15492.077357063125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070282.0052083333,
            "unit": "ns",
            "range": "± 3717.2891599995523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748758.1315104166,
            "unit": "ns",
            "range": "± 4069.288175158972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911887.4479166667,
            "unit": "ns",
            "range": "± 6595.105499208202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629658.8802083334,
            "unit": "ns",
            "range": "± 2435.587451249679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559177.3995535715,
            "unit": "ns",
            "range": "± 1249.864463332916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129891.1764705884,
            "unit": "ns",
            "range": "± 37815.9037116583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2189724.242424242,
            "unit": "ns",
            "range": "± 59278.405797890635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2717000,
            "unit": "ns",
            "range": "± 41529.00747114553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2751048.9795918367,
            "unit": "ns",
            "range": "± 164334.08845341252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12380378.494623655,
            "unit": "ns",
            "range": "± 1548400.4293245636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164836.66666666666,
            "unit": "ns",
            "range": "± 6945.135272606449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156913.9344262295,
            "unit": "ns",
            "range": "± 6153.509372352366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141257.14285714287,
            "unit": "ns",
            "range": "± 2856.3213104571114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809771.4285714286,
            "unit": "ns",
            "range": "± 48799.518102466616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484271.4285714286,
            "unit": "ns",
            "range": "± 36905.814187999174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10231.91489361702,
            "unit": "ns",
            "range": "± 1178.135283134833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53616.666666666664,
            "unit": "ns",
            "range": "± 2994.6863053441393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45745.76271186441,
            "unit": "ns",
            "range": "± 2031.928083330461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69336.84210526316,
            "unit": "ns",
            "range": "± 10986.965707306426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2891.3978494623657,
            "unit": "ns",
            "range": "± 506.83500316188463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11436.559139784946,
            "unit": "ns",
            "range": "± 1728.1420625377689"
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
          "id": "5741cd22fabcd68d385ea4acceab09785dd2bd42",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T08:20:03+09:00",
          "tree_id": "6e883b31e2df2350856f95e4ee822186a69e5fcc",
          "url": "https://github.com/moreal/libplanet/commit/5741cd22fabcd68d385ea4acceab09785dd2bd42"
        },
        "date": 1702337592129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1109352,
            "unit": "ns",
            "range": "± 146576.85299645178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1891965.9574468085,
            "unit": "ns",
            "range": "± 70868.64234684552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737586.7346938776,
            "unit": "ns",
            "range": "± 202593.3312413187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11104853.76344086,
            "unit": "ns",
            "range": "± 945434.7104074883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37622.09302325582,
            "unit": "ns",
            "range": "± 3867.3718439633085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5592114.285714285,
            "unit": "ns",
            "range": "± 70227.45307096907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14302573.333333334,
            "unit": "ns",
            "range": "± 208818.67550124731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35407873.333333336,
            "unit": "ns",
            "range": "± 310307.4546010011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70377053.33333333,
            "unit": "ns",
            "range": "± 795164.2282003912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138590093.33333334,
            "unit": "ns",
            "range": "± 2055020.765090314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342635.1302083335,
            "unit": "ns",
            "range": "± 17578.908938661712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062083.0496651786,
            "unit": "ns",
            "range": "± 1673.9316179285727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755769.9283854166,
            "unit": "ns",
            "range": "± 1789.15683831884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949498.6778846155,
            "unit": "ns",
            "range": "± 6072.814801218243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622445.5143229166,
            "unit": "ns",
            "range": "± 1388.141108615479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556407.03125,
            "unit": "ns",
            "range": "± 858.7290735912386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2242934.4827586208,
            "unit": "ns",
            "range": "± 55158.189884459134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308774,
            "unit": "ns",
            "range": "± 79288.59920105353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2955348.1481481483,
            "unit": "ns",
            "range": "± 78304.56500284579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3087536.9565217393,
            "unit": "ns",
            "range": "± 108087.57428574224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12744761.290322581,
            "unit": "ns",
            "range": "± 1511638.1999004646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188378.48101265822,
            "unit": "ns",
            "range": "± 8934.629702427888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178914,
            "unit": "ns",
            "range": "± 7220.1252179768535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159391.05263157896,
            "unit": "ns",
            "range": "± 10642.892891171326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909178.5714285714,
            "unit": "ns",
            "range": "± 45297.1756390961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552771.4285714286,
            "unit": "ns",
            "range": "± 34620.923610561746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14714.893617021276,
            "unit": "ns",
            "range": "± 2144.0569246379287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65345.16129032258,
            "unit": "ns",
            "range": "± 7074.917669347856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52831.318681318684,
            "unit": "ns",
            "range": "± 5847.390910823429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75554.54545454546,
            "unit": "ns",
            "range": "± 15248.300492301596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4321.428571428572,
            "unit": "ns",
            "range": "± 1148.0373211362294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13724.242424242424,
            "unit": "ns",
            "range": "± 2193.8732363939107"
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
          "id": "f7255bf40a32c63c7de920979f61e6c038e4cc99",
          "message": "Expose `txPriority` parameter for customized transaction selection\n\n- Added `txPriority` as an argument in the public constructor API.\n- This allows external callers to specify the priority for including\n  transactions in the block to propose.",
          "timestamp": "2023-12-12T10:43:35+09:00",
          "tree_id": "5a10ef13db4bd35dfc56e31c3fad4b8b93d593b9",
          "url": "https://github.com/moreal/libplanet/commit/f7255bf40a32c63c7de920979f61e6c038e4cc99"
        },
        "date": 1702346097752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954737.5,
            "unit": "ns",
            "range": "± 86283.40116030125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738925,
            "unit": "ns",
            "range": "± 65295.06803037201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538839.898989899,
            "unit": "ns",
            "range": "± 214061.35135008942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10939821.505376345,
            "unit": "ns",
            "range": "± 1039071.3019901225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33753.333333333336,
            "unit": "ns",
            "range": "± 1498.0740931945136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5046391.666666667,
            "unit": "ns",
            "range": "± 7381.482769660028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13496225,
            "unit": "ns",
            "range": "± 48843.72342667805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32596626.666666668,
            "unit": "ns",
            "range": "± 320525.02346410754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64099192.85714286,
            "unit": "ns",
            "range": "± 349822.22840110725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127460958.33333333,
            "unit": "ns",
            "range": "± 873891.1420228841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296449.70703125,
            "unit": "ns",
            "range": "± 2281.9461544146807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041712.8348214285,
            "unit": "ns",
            "range": "± 1297.4612200427453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742456.25,
            "unit": "ns",
            "range": "± 2440.2708897428506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1894584.5982142857,
            "unit": "ns",
            "range": "± 5605.838301868389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625307.7473958334,
            "unit": "ns",
            "range": "± 3196.0463957003653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558228.6342075893,
            "unit": "ns",
            "range": "± 665.6351913807914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163159.090909091,
            "unit": "ns",
            "range": "± 22728.074920907613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226229.6296296297,
            "unit": "ns",
            "range": "± 93284.89054307682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2808707.407407407,
            "unit": "ns",
            "range": "± 77381.23866200449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2904182.6086956523,
            "unit": "ns",
            "range": "± 48749.57950563558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12515427.956989247,
            "unit": "ns",
            "range": "± 1573117.993540604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 161883.33333333334,
            "unit": "ns",
            "range": "± 7530.605927880281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157948.27586206896,
            "unit": "ns",
            "range": "± 5996.116912454942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142430.30303030304,
            "unit": "ns",
            "range": "± 3876.812870168359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801614.285714286,
            "unit": "ns",
            "range": "± 35382.10884576591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552061.5384615385,
            "unit": "ns",
            "range": "± 26134.668496766848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12394.68085106383,
            "unit": "ns",
            "range": "± 1413.4238930164602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53194.68085106383,
            "unit": "ns",
            "range": "± 4301.827994073811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44536.17021276596,
            "unit": "ns",
            "range": "± 1683.865316817348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47955.208333333336,
            "unit": "ns",
            "range": "± 8559.71433108749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1952.808988764045,
            "unit": "ns",
            "range": "± 256.76744326001295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9083.516483516483,
            "unit": "ns",
            "range": "± 800.0366291980687"
          }
        ]
      }
    ]
  }
}