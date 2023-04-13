window.BENCHMARK_DATA = {
  "lastUpdate": 1681354111613,
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
          "id": "5f557ae43704ecdbdab693f6354032660b7a8dae",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T16:59:46+09:00",
          "tree_id": "e9ae255659b55e1198e56ed68a9f789d626375b6",
          "url": "https://github.com/moreal/libplanet/commit/5f557ae43704ecdbdab693f6354032660b7a8dae"
        },
        "date": 1681287625481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401002,
            "unit": "ns",
            "range": "± 121265.66709568548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2480030,
            "unit": "ns",
            "range": "± 94701.39160238656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2207636.3636363638,
            "unit": "ns",
            "range": "± 189551.71899615423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310539.583333333,
            "unit": "ns",
            "range": "± 197548.43277900163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43568.085106382976,
            "unit": "ns",
            "range": "± 2894.9051562437694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6932046.666666667,
            "unit": "ns",
            "range": "± 92429.77926641444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17819357.14285714,
            "unit": "ns",
            "range": "± 108704.96212781085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45319636.666666664,
            "unit": "ns",
            "range": "± 227511.7889148562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90889126.66666667,
            "unit": "ns",
            "range": "± 476325.43267132377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181981235.7142857,
            "unit": "ns",
            "range": "± 700892.5385174609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895996.935096154,
            "unit": "ns",
            "range": "± 5821.862633179039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510974.5675223214,
            "unit": "ns",
            "range": "± 1738.9064573391627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169412.3873197115,
            "unit": "ns",
            "range": "± 1063.2603889013951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609189.5647321427,
            "unit": "ns",
            "range": "± 7306.0346547040435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829047.7018229166,
            "unit": "ns",
            "range": "± 6536.4530180711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724333.1510416666,
            "unit": "ns",
            "range": "± 818.3776615084033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3042327.777777778,
            "unit": "ns",
            "range": "± 82494.64939914091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3331360,
            "unit": "ns",
            "range": "± 30243.43612375136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3951242.8571428573,
            "unit": "ns",
            "range": "± 46031.89052227754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088285.714285714,
            "unit": "ns",
            "range": "± 57645.27944036911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6808213.888888889,
            "unit": "ns",
            "range": "± 223235.4198122022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306373.3333333333,
            "unit": "ns",
            "range": "± 4555.760351571665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247556.4516129032,
            "unit": "ns",
            "range": "± 11220.219175670292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230909.75609756098,
            "unit": "ns",
            "range": "± 12177.844786475185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5256473.076923077,
            "unit": "ns",
            "range": "± 15198.911904374047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3708742.8571428573,
            "unit": "ns",
            "range": "± 28112.5885923484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18169.072164948455,
            "unit": "ns",
            "range": "± 1455.26063134912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84692.92929292929,
            "unit": "ns",
            "range": "± 6603.574364910921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80507,
            "unit": "ns",
            "range": "± 9028.55464567275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 169141.66666666666,
            "unit": "ns",
            "range": "± 13695.743992524536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6336.734693877551,
            "unit": "ns",
            "range": "± 1036.9848993424823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19406.382978723403,
            "unit": "ns",
            "range": "± 1722.3270399071523"
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
          "id": "a1d173812adc019c5bbe45d00e9a4feeeeef91d2",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-12T18:52:12+09:00",
          "tree_id": "b68ce7153b7f998450f240b92a407f3ae9b9c0be",
          "url": "https://github.com/moreal/libplanet/commit/a1d173812adc019c5bbe45d00e9a4feeeeef91d2"
        },
        "date": 1681294286781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471719.7916666667,
            "unit": "ns",
            "range": "± 176411.37486883893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770201.052631579,
            "unit": "ns",
            "range": "± 259029.92084409326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319372.1649484537,
            "unit": "ns",
            "range": "± 208608.61766229244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5977839.175257732,
            "unit": "ns",
            "range": "± 506159.7694397617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54211.82795698925,
            "unit": "ns",
            "range": "± 5541.323995423241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7636127.777777778,
            "unit": "ns",
            "range": "± 423769.42215349793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20880032.558139537,
            "unit": "ns",
            "range": "± 772374.6801480331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52057624.3902439,
            "unit": "ns",
            "range": "± 1865946.2264197872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105272524,
            "unit": "ns",
            "range": "± 2740806.971386347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213182691.53846154,
            "unit": "ns",
            "range": "± 9813160.305775166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5140077.083333333,
            "unit": "ns",
            "range": "± 121569.78137468861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668600.4767922794,
            "unit": "ns",
            "range": "± 32308.8012563546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258867.9361979167,
            "unit": "ns",
            "range": "± 19821.446837440955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2829956.4568014704,
            "unit": "ns",
            "range": "± 51003.1356758442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889405.9988839285,
            "unit": "ns",
            "range": "± 14550.053015912294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821358.6576021635,
            "unit": "ns",
            "range": "± 12010.853626974944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284659.793814433,
            "unit": "ns",
            "range": "± 264572.9553055711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506960.2040816327,
            "unit": "ns",
            "range": "± 223690.1103352886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253053.846153846,
            "unit": "ns",
            "range": "± 218003.64329870386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4514813.402061855,
            "unit": "ns",
            "range": "± 316469.1818292589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7703917.708333333,
            "unit": "ns",
            "range": "± 562990.7694849174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338123.65591397847,
            "unit": "ns",
            "range": "± 23251.420703902866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283309.4736842105,
            "unit": "ns",
            "range": "± 19312.150698812955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239222.44897959183,
            "unit": "ns",
            "range": "± 19026.896484107907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5594484.2105263155,
            "unit": "ns",
            "range": "± 347078.0807105837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4036136.4583333335,
            "unit": "ns",
            "range": "± 320545.5901952799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22461.956521739132,
            "unit": "ns",
            "range": "± 2039.2760184456513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97978.26086956522,
            "unit": "ns",
            "range": "± 9575.608046994237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91855.67010309278,
            "unit": "ns",
            "range": "± 10155.950319395737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 203260.41666666666,
            "unit": "ns",
            "range": "± 23909.850333752744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7538.541666666667,
            "unit": "ns",
            "range": "± 1222.3678309065106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21914.583333333332,
            "unit": "ns",
            "range": "± 2603.6807616856427"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "1387f9c9221a6f0fb7dd85a45ffb8bc2ce75c05e",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-13T03:56:40+09:00",
          "tree_id": "dc40cafed37f97514005e03355330bf9bc74a325",
          "url": "https://github.com/moreal/libplanet/commit/1387f9c9221a6f0fb7dd85a45ffb8bc2ce75c05e"
        },
        "date": 1681326600980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057451.5151515151,
            "unit": "ns",
            "range": "± 117134.76920130997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1822322.8070175438,
            "unit": "ns",
            "range": "± 78105.44387818637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672230.303030303,
            "unit": "ns",
            "range": "± 156240.56703251536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3980698.076923077,
            "unit": "ns",
            "range": "± 164357.6593661144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32345.454545454544,
            "unit": "ns",
            "range": "± 1703.1349789522926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4972850,
            "unit": "ns",
            "range": "± 25458.79778417246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13127064.285714285,
            "unit": "ns",
            "range": "± 118755.22082219154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32426335.714285713,
            "unit": "ns",
            "range": "± 278250.3648684949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65441106.666666664,
            "unit": "ns",
            "range": "± 580511.6369778187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130671746.66666667,
            "unit": "ns",
            "range": "± 1926016.19629248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3654078.7760416665,
            "unit": "ns",
            "range": "± 9970.167567585899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1158156.1067708333,
            "unit": "ns",
            "range": "± 2535.194769935365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 793662.2140066965,
            "unit": "ns",
            "range": "± 1913.2334398265843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913371.9791666667,
            "unit": "ns",
            "range": "± 3276.270269872258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635134.0895432692,
            "unit": "ns",
            "range": "± 1030.4711558200677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584905.7096354166,
            "unit": "ns",
            "range": "± 1483.1530637380358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2153416.6666666665,
            "unit": "ns",
            "range": "± 77882.01181420291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2401757.5757575757,
            "unit": "ns",
            "range": "± 74846.62663700612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2886900,
            "unit": "ns",
            "range": "± 58658.13790819772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915904.8192771086,
            "unit": "ns",
            "range": "± 154222.17889880887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4933857.142857143,
            "unit": "ns",
            "range": "± 171086.68919813493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211206.4516129032,
            "unit": "ns",
            "range": "± 9100.655191108845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172584.50704225354,
            "unit": "ns",
            "range": "± 7758.104479230991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153430,
            "unit": "ns",
            "range": "± 4489.232328199525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3743721.4285714286,
            "unit": "ns",
            "range": "± 54396.566330710884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2626976.923076923,
            "unit": "ns",
            "range": "± 34693.20668003449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9513.829787234043,
            "unit": "ns",
            "range": "± 1163.1992464084199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52882.92682926829,
            "unit": "ns",
            "range": "± 2467.20739208677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47103.333333333336,
            "unit": "ns",
            "range": "± 1402.333851080069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115868.36734693877,
            "unit": "ns",
            "range": "± 15598.179889450721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2854.1237113402062,
            "unit": "ns",
            "range": "± 437.53988527075927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8844.086021505376,
            "unit": "ns",
            "range": "± 835.5501137094464"
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
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "ff63a9f3b4789953cc627f05504973a129f17833",
          "message": "Implement `query.stateQuery.states`",
          "timestamp": "2023-04-13T11:31:32+09:00",
          "tree_id": "38e009fe93b87ac7446c3284ed432fbd52c2cef4",
          "url": "https://github.com/moreal/libplanet/commit/ff63a9f3b4789953cc627f05504973a129f17833"
        },
        "date": 1681354098281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335470.4081632653,
            "unit": "ns",
            "range": "± 122048.07165911296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542115.11627907,
            "unit": "ns",
            "range": "± 138003.72417604137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130241.6666666665,
            "unit": "ns",
            "range": "± 124768.12739652338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5447766,
            "unit": "ns",
            "range": "± 395674.9715040711"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46313.04347826087,
            "unit": "ns",
            "range": "± 2680.832140422416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6860335.714285715,
            "unit": "ns",
            "range": "± 41240.15233768135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19161973.684210528,
            "unit": "ns",
            "range": "± 404770.0030636126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46390576.47058824,
            "unit": "ns",
            "range": "± 903194.4755487407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94478946.66666667,
            "unit": "ns",
            "range": "± 1690977.3255498754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190235613.04347825,
            "unit": "ns",
            "range": "± 4689091.880321271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4710514.869791667,
            "unit": "ns",
            "range": "± 21354.9503285629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1466243.4505208333,
            "unit": "ns",
            "range": "± 6208.718940256128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172883.3854166667,
            "unit": "ns",
            "range": "± 13144.343232175152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632790.1432291665,
            "unit": "ns",
            "range": "± 14025.768410686362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807957.4637276785,
            "unit": "ns",
            "range": "± 4535.043357975456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756608.7174479166,
            "unit": "ns",
            "range": "± 2223.659633179948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088760.606060606,
            "unit": "ns",
            "range": "± 97223.45376564862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3221437.037037037,
            "unit": "ns",
            "range": "± 162323.42286654477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3900173.076923077,
            "unit": "ns",
            "range": "± 104756.92457376671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4037888.4615384615,
            "unit": "ns",
            "range": "± 93610.92383658256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6707972.7272727275,
            "unit": "ns",
            "range": "± 151249.18868516973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302700,
            "unit": "ns",
            "range": "± 11059.55055762147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245522.80701754385,
            "unit": "ns",
            "range": "± 9912.150147741831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209906.4516129032,
            "unit": "ns",
            "range": "± 6402.079635236818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5182875,
            "unit": "ns",
            "range": "± 40170.43519351469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3712507.1428571427,
            "unit": "ns",
            "range": "± 47879.50363288939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19856.521739130436,
            "unit": "ns",
            "range": "± 1460.7919234025978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86322.34042553192,
            "unit": "ns",
            "range": "± 6480.2164482521475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81276.31578947368,
            "unit": "ns",
            "range": "± 5901.608336974415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176289.010989011,
            "unit": "ns",
            "range": "± 14353.307404756351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7303.030303030303,
            "unit": "ns",
            "range": "± 1263.0910049665692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19779.166666666668,
            "unit": "ns",
            "range": "± 2412.2458051702365"
          }
        ]
      }
    ]
  }
}