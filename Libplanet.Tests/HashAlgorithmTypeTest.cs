using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests
{
    public class HashAlgorithmTypeTest
    {
        [Fact]
        public void Of()
        {
            HashAlgorithmType md5 = HashAlgorithmType.Of<MD5>();
            Assert.Same(typeof(MD5), md5.Type);
            Assert.Equal(16, md5.DigestSize);

            HashAlgorithmType sha1 = HashAlgorithmType.Of<SHA1>();
            Assert.Same(typeof(SHA1), sha1.Type);
            Assert.Equal(20, sha1.DigestSize);

            HashAlgorithmType sha256 = HashAlgorithmType.Of(SHA256.Create());
            Assert.Same(typeof(SHA256), sha256.Type);
            Assert.Equal(32, sha256.DigestSize);
        }

        [Fact]
        public void Digest()
        {
            HashAlgorithmType md5 = HashAlgorithmType.Of<MD5>();
            byte[] digest = md5.Digest(Encoding.ASCII.GetBytes("hello"));
            byte[] expected =
            {
                0x5d, 0x41, 0x40, 0x2a, 0xbc, 0x4b, 0x2a, 0x76,
                0xb9, 0x71, 0x9d, 0x91, 0x10, 0x17, 0xc5, 0x92,
            };
            AssertBytesEqual(expected, digest);

            ImmutableArray<byte> immutableDigest =
                md5.Digest(Encoding.ASCII.GetBytes("hello").ToImmutableArray());
            AssertBytesEqual(expected.ToImmutableArray(), immutableDigest);
        }

        [Fact]
        public void DigestMultipleTimes()
        {
            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            byte[] expected =
            {
                0x2c, 0xf2, 0x4d, 0xba, 0x5f, 0xb0, 0xa3, 0x0e, 0x26, 0xe8, 0x3b,
                0x2a, 0xc5, 0xb9, 0xe2, 0x9e, 0x1b, 0x16, 0x1e, 0x5c, 0x1f, 0xa7,
                0x42, 0x5e, 0x73, 0x04, 0x33, 0x62, 0x93, 0x8b, 0x98, 0x24,
            };
            byte[] input = Encoding.ASCII.GetBytes("hello");
            byte[] digest;
            for (int i = 0; i < 50; i++)
            {
                digest = sha256.Digest(input);
                AssertBytesEqual(expected, digest);
            }
        }

        [Fact]
        public void DigestInParallel()
        {
            HashAlgorithmType sha256 = HashAlgorithmType.Of<SHA256>();
            ImmutableArray<byte> expected = new byte[]
            {
                0x2c, 0xf2, 0x4d, 0xba, 0x5f, 0xb0, 0xa3, 0x0e, 0x26, 0xe8, 0x3b,
                0x2a, 0xc5, 0xb9, 0xe2, 0x9e, 0x1b, 0x16, 0x1e, 0x5c, 0x1f, 0xa7,
                0x42, 0x5e, 0x73, 0x04, 0x33, 0x62, 0x93, 0x8b, 0x98, 0x24,
            }.ToImmutableArray();
            ImmutableArray<byte> input = Encoding.ASCII.GetBytes("hello").ToImmutableArray();
            ImmutableArray<byte>[] digests =
                Enumerable.Repeat(input, 100).AsParallel().Select(b => sha256.Digest(b)).ToArray();
            foreach (ImmutableArray<byte> digest in digests)
            {
                AssertBytesEqual(expected, digest);
            }
        }

        [Fact]
        public void Equality()
        {
            HashAlgorithmType md5 = HashAlgorithmType.Of<MD5>();
            HashAlgorithmType md5a = HashAlgorithmType.Of(MD5.Create());
            HashAlgorithmType sha1 = HashAlgorithmType.Of<SHA1>();

            Assert.Equal(md5, md5a);
            Assert.True(((IEquatable<HashAlgorithmType>)md5).Equals(md5a));
            Assert.True(md5.Equals((object)md5a));
            Assert.Equal(md5.GetHashCode(), md5a.GetHashCode());
            Assert.True(md5 == md5a);
            Assert.False(md5 != md5a);

            Assert.NotEqual(md5, sha1);
            Assert.True(!((IEquatable<HashAlgorithmType>)md5).Equals(sha1));
            Assert.True(!md5.Equals((object)sha1));
            Assert.NotEqual(md5.GetHashCode(), sha1.GetHashCode());
            Assert.False(md5 == sha1);
            Assert.True(md5 != sha1);
        }

        [Fact]
        public void String()
        {
            HashAlgorithmType md5 = HashAlgorithmType.Of<MD5>();
            HashAlgorithmType sha1 = HashAlgorithmType.Of<SHA1>();
            Assert.Equal("System.Security.Cryptography.MD5", md5.ToString());
            Assert.Equal("System.Security.Cryptography.SHA1", sha1.ToString());
        }
    }
}
