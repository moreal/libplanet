using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class TrieTest
    {
        [Theory]
        [InlineData(2)]
        [InlineData(4)]
        [InlineData(8)]
        [InlineData(16)]
        [InlineData(128)]
        [InlineData(1024)]
        public void GetAndSet(int addressCount)
        {
            ITrie trie = new MerkleTrie(new MemoryKeyValueStore());

            var addresses = Enumerable
                .Range(0, addressCount)
                .Select(_ => new PrivateKey().ToAddress())
                .ToImmutableArray();
            var states = new Dictionary<Address, IValue>();

            void CheckAddressStates()
            {
                foreach (var address in addresses)
                {
                    Assert.Equal(
                        states.ContainsKey(address),
                        trie.TryGet(address.ToByteArray(), out IValue state));
                    IValue expectedState = states.ContainsKey(address) ? states[address] : null;
                    Assert.Equal(expectedState, state);
                }
            }

            foreach (var address in addresses)
            {
                states[address] = (Text)address.ToHex();
                trie.Set(address.ToByteArray(), states[address]);
                CheckAddressStates();
            }
        }

        [Theory]
        [InlineData(2)]
        [InlineData(4)]
        [InlineData(8)]
        [InlineData(16)]
        [InlineData(128)]
        [InlineData(1024)]
        public void Commit(int addressCount)
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            var codec = new Codec();

            ITrie trieA = new MerkleTrie(keyValueStore);

            var addresses = new Address[addressCount];
            var states = new IValue[addressCount];
            for (int i = 0; i < addressCount; ++i)
            {
                addresses[i] = new PrivateKey().ToAddress();
                states[i] = (Binary)TestUtils.GetRandomBytes(128);

                trieA.Set(addresses[i].ToByteArray(), states[i]);
            }

            byte[] path = TestUtils.GetRandomBytes(32);
            trieA.Set(path, (Text)"foo");
            HashDigest<SHA256> rootHash = trieA.Hash;
            Assert.True(trieA.TryGet(path, out IValue stateA));
            Assert.Equal((Text)"foo", stateA);

            ITrie trieB = trieA.Commit();

            Assert.True(trieB.TryGet(path, out IValue stateB));
            Assert.Equal((Text)"foo", stateB);

            trieB.Set(path, (Text)"bar");

            Assert.True(trieA.TryGet(path, out stateA));
            Assert.Equal((Text)"foo", stateA);
            Assert.True(trieB.TryGet(path, out stateB));
            Assert.Equal((Text)"bar", stateB);

            ITrie trieC = trieB.Commit();
            ITrie trieD = trieC.Commit();

            Assert.NotEqual(trieA.Hash, trieB.Hash);
            Assert.NotEqual(trieA.Hash, trieC.Hash);
            Assert.NotEqual(trieB.Hash, trieC.Hash);
            Assert.Equal(trieC.Hash, trieD.Hash);
        }

        [Fact]
        public void EmptyRootHash()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            ITrie trie = new MerkleTrie(keyValueStore);
            Assert.Equal(MerkleTrie.EmptyRootHash, trie.Hash);

            var committedTrie = trie.Commit();
            Assert.Equal(MerkleTrie.EmptyRootHash, committedTrie.Hash);

            trie.Set(default(Address).ToByteArray(), Dictionary.Empty);
            committedTrie = trie.Commit();
            Assert.NotEqual(MerkleTrie.EmptyRootHash, committedTrie.Hash);
        }

        [Fact]
        public void InsertSamePrefixNode()
        {
            IKeyValueStore keyValueStore = new MemoryKeyValueStore();
            ITrie trie = new MerkleTrie(keyValueStore);

            byte[] shortKey = { 0x01 },
                longKey = { 0x01, 0x02 };
            trie.Set(shortKey, default(Null));
            trie.Set(longKey, Dictionary.Empty);

            Assert.True(trie.TryGet(shortKey, out IValue shortKeyValue));
            Assert.True(trie.TryGet(longKey, out IValue longKeyValue));
            Assert.Equal(default(Null), shortKeyValue);
            Assert.Equal(Dictionary.Empty, longKeyValue);

            ITrie committedTrie = trie.Commit();
            Assert.True(committedTrie.TryGet(shortKey, out shortKeyValue));
            Assert.True(committedTrie.TryGet(longKey, out longKeyValue));
            Assert.Equal(default(Null), shortKeyValue);
            Assert.Equal(Dictionary.Empty, longKeyValue);
        }
    }
}
