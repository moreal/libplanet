using System;
using System.Linq;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public abstract class KeyValueStoreTest
    {
        private const int PreStoredDataCount = 10;

        private const int PreStoredDataKeySize = 16;

        private const int PreStoredDataValueSize = 32;

        protected IKeyValueStore KeyValueStore { get; set; }

        private byte[][] PreStoredDataKeys { get; set; }

        private byte[][] PreStoredDataValues { get; set; }

        [Fact]
        public void Get()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }

            var randomKey = NewRandomKey();
            Assert.Null(KeyValueStore.Get(randomKey));
        }

        // This test will cover DefaultKeyValueStore.Set
        [Fact]
        public void Overwrite()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var randomValue = TestUtils.GetRandomBytes(PreStoredDataValueSize);
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);

                KeyValueStore.Set(key, randomValue);
                actual = KeyValueStore.Get(key);
                Assert.Equal(randomValue, actual);
                Assert.NotEqual(expectedValue, actual);
            }
        }

        [Fact]
        public void Delete()
        {
            foreach (var (key, expectedValue) in PreStoredDataKeys.Zip(
                PreStoredDataValues, ValueTuple.Create))
            {
                var actual = KeyValueStore.Get(key);
                Assert.Equal(expectedValue, actual);
            }
        }

        [Fact]
        public void Exists()
        {
            foreach (var (key, _) in PreStoredDataKeys.Zip(PreStoredDataValues, ValueTuple.Create))
            {
                Assert.True(KeyValueStore.Exists(key));
            }

            var randomKey = NewRandomKey();
            Assert.False(KeyValueStore.Exists(randomKey));
        }

        public byte[] NewRandomKey()
        {
            byte[] randomKey;
            do
            {
                randomKey = TestUtils.GetRandomBytes(PreStoredDataKeySize);
            }
            while (KeyValueStore.Exists(randomKey));

            return randomKey;
        }

        protected void InitializePreStoredData()
        {
            PreStoredDataKeys = new byte[PreStoredDataCount][];
            PreStoredDataValues = new byte[PreStoredDataCount][];

            for (int i = 0; i < PreStoredDataCount; ++i)
            {
                PreStoredDataKeys[i] = TestUtils.GetRandomBytes(PreStoredDataKeySize);
                PreStoredDataValues[i] = TestUtils.GetRandomBytes(PreStoredDataValueSize);
                KeyValueStore.Set(PreStoredDataKeys[i], PreStoredDataValues[i]);
            }
        }
    }
}