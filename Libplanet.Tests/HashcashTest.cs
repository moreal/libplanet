using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Xunit;

namespace Libplanet.Tests
{
    public class HashcashTest
    {
        [Theory]
        [ClassData(typeof(HashcashTestData))]
        public void AnswerSatisfiesDifficulty(byte[] challenge, long difficulty)
        {
            byte[] Stamp(Nonce nonce) => challenge.Concat(nonce.ToByteArray()).ToArray();
            (Nonce answer, HashDigest<SHA256> digest) =
                Hashcash.Answer(Stamp, difficulty, 0);
            Assert.True(Satisfies(digest.ToByteArray(), difficulty));
            TestUtils.AssertBytesEqual(
                digest.ToByteArray(),
                SHA256.Create().ComputeHash(Stamp(answer).ToArray()));
        }

        [Fact]
        public void TestBytesWithDifficulty()
        {
            Assert.True(Satisfies(new byte[1] { 0x80 }, 0));
            Assert.False(Satisfies(new byte[1] { 0x80 }, 2));
            long[] difficulties = Enumerable.Range(1, 8)
                .Select(x => (long)Math.Pow(2, x)).ToArray();

            foreach (long difficulty in difficulties)
            {
                Assert.True(Satisfies(new byte[2] { 0x00, 0x80 }, difficulty));
            }

            Assert.False(Satisfies(new byte[2] { 0x00, 0x80 }, 512));
            Assert.True(Satisfies(new byte[2] { 0x00, 0x7f },  512));
            Assert.False(Satisfies(new byte[2] { 0x00, 0x7f }, 1024));
            Assert.True(Satisfies(new byte[2] { 0x00, 0x20 }, 1024));
        }

        private bool Satisfies(byte[] bytes, long difficulty)
        {
            byte[] digest;
            if (bytes.Length < HashDigest<SHA256>.Size)
            {
                digest = new byte[HashDigest<SHA256>.Size];
                for (int i = 0; i < bytes.Length; i++)
                {
                    digest[digest.Length - 1 - i] = bytes[i];
                }
            }
            else
            {
                digest = bytes;
            }

            return ByteUtil.Satisfies(digest, difficulty);
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    internal class HashcashTestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            int[] difficulties = Enumerable.Range(1, 10)
                .Select(x => (int)Math.Pow(2, x * 2)).ToArray();

            foreach (var difficulty in difficulties)
            {
                for (int i = 0; i < 2; i++)
                {
                    var challenge = TestUtils.GetRandomBytes(40);
                    yield return new object[] { challenge, difficulty };
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
#pragma warning restore SA1402 // File may only contain a single class
}
