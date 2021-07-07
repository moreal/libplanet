using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Tx
{
    public class TransactionTest
    {
        private readonly TxFixture _fx;

        public TransactionTest()
        {
            _fx = new TxFixture(null);
        }

        [Fact]
        public void Create()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp =
                new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            Address stateStore = new Address(
                new byte[]
                {
                    0xe6, 0x95, 0x1c, 0x43, 0x02, 0xdf, 0x13, 0xf9, 0x29, 0xfc,
                    0xdb, 0xc5, 0x56, 0xd9, 0xac, 0x20, 0x41, 0xfe, 0xf9, 0x5f,
                }
            );
            DumbAction.RehearsalRecords.Value =
                ImmutableList<(Address, string)>.Empty;
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                privateKey,
                null,
                new[] { new DumbAction(stateStore, "RecordRehearsal", true) },
                ImmutableHashSet<Address>.Empty,
                timestamp
            );

            Assert.Equal(
                new Address(privateKey.PublicKey),
                tx.Signer
            );
            Assert.Equal(
                new[] { stateStore }.ToImmutableHashSet(),
                tx.UpdatedAddresses
            );
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x7f, 0x13, 0x86, 0x33, 0xb1, 0x2a, 0xff, 0x5c, 0xa0,
                    0xb4, 0x03, 0xf7, 0x3f, 0xf4, 0x7b, 0xb0, 0x0c, 0x82, 0x16, 0x12, 0x95, 0x6c,
                    0xc5, 0x45, 0xc9, 0x3d, 0x13, 0x73, 0x9e, 0xb8, 0xb9, 0x2a, 0x02, 0x20, 0x5a,
                    0xb9, 0x78, 0x3e, 0xc6, 0x63, 0x17, 0x9c, 0x23, 0xce, 0xa5, 0x2e, 0x4f, 0x81,
                    0x9e, 0xec, 0xca, 0x30, 0xaf, 0x98, 0x1f, 0x65, 0x86, 0xf9, 0x64, 0xe9, 0xe0,
                    0x54, 0xb3, 0xa2, 0x3c, 0x6d,
                },
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0xec, 0x3c, 0x4c, 0x03, 0xdd, 0x79, 0x8f, 0xb2, 0x9d, 0x77, 0xca, 0x4e,
                        0xb1, 0x4a, 0x58, 0x40, 0x88, 0x22, 0x3a, 0x20, 0xc1, 0x67, 0xea, 0xe2,
                        0xa1, 0xda, 0x25, 0x73, 0x2f, 0x61, 0x23, 0x25,
                    }
                ),
                tx.Id
            );
            Assert.Contains(
                (stateStore, "RecordRehearsal"),
                DumbAction.RehearsalRecords.Value
            );
            Assert.Equal(338, tx.BytesLength);
        }

        [Fact]
        public void CreateWithDefaultUpdatedAddresses()
        {
            Transaction<DumbAction> emptyTx = Transaction<DumbAction>.Create(
                0,
                _fx.PrivateKey1,
                null,
                new DumbAction[0]
            );
            Assert.Empty(emptyTx.UpdatedAddresses);

            var tx = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                _fx.PrivateKey1,
                null,
                _fx.TxWithActions.Actions
            );
            Assert.Equal(
                new[] { _fx.Address1 }.ToImmutableHashSet(),
                tx.UpdatedAddresses
            );

            Address additionalAddr = new PrivateKey().ToAddress();
            var txWithAddr = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                _fx.PrivateKey1,
                null,
                _fx.TxWithActions.Actions,
                new[] { additionalAddr }.ToImmutableHashSet()
            );
            Assert.Equal(
                new[] { _fx.Address1, additionalAddr }.ToHashSet(),
                txWithAddr.UpdatedAddresses.ToHashSet()
            );
        }

        [Fact]
        public void CreateWithDefaultTimestamp()
        {
            DateTimeOffset rightBefore = DateTimeOffset.UtcNow;
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                _fx.PrivateKey1,
                null,
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty
            );
            DateTimeOffset rightAfter = DateTimeOffset.UtcNow;

            Assert.InRange(tx.Timestamp, rightBefore, rightAfter);
        }

        [Fact]
        public void CreateWithMissingRequiredArguments()
        {
            // The privateKey parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                Transaction<DumbAction>.Create(
                    0,
                    (PrivateKey)null,
                    null,
                    new DumbAction[0],
                    ImmutableHashSet<Address>.Empty,
                    DateTimeOffset.UtcNow
                )
            );

            // The actions parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                Transaction<DumbAction>.Create(
                    0,
                    _fx.PrivateKey1,
                    null,
                    null,
                    ImmutableHashSet<Address>.Empty,
                    DateTimeOffset.UtcNow
                )
            );
        }

        [Fact]
        public void MakeWithSignature()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            var signature = new byte[]
            {
                0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb, 0xe8,
                0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e, 0x97, 0x44,
                0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c, 0x06, 0x02, 0x1f,
                0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96, 0xa8, 0x63, 0x04, 0xb0,
                0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9, 0x7d, 0x37, 0x67, 0xe1, 0xe9,
            };
            var tx = new Transaction<DumbAction>(
                0,
                privateKey.ToAddress(),
                privateKey.PublicKey,
                null,
                ImmutableHashSet<Address>.Empty,
                timestamp,
                new DumbAction[0],
                signature
            );

            Assert.Equal(
                new Address(privateKey.PublicKey),
                tx.Signer
            );
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(privateKey.PublicKey, tx.PublicKey);
            Assert.Equal(timestamp, tx.Timestamp);
            AssertBytesEqual(
                signature,
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0xb0, 0x69, 0xfd, 0xe2, 0x53, 0x88, 0x53, 0xbe, 0x81, 0xb3, 0xea, 0xac,
                        0xc2, 0x38, 0x55, 0x42, 0x0e, 0x03, 0xe5, 0x62, 0x6f, 0x75, 0x7f, 0xa1,
                        0x9b, 0x37, 0x92, 0x60, 0x1a, 0x94, 0x88, 0x81,
                    }
                ),
                tx.Id
            );

            var invalidSignature = new byte[]
            {
                0x30, 0x45, 0x02, 0x21, 0x00, 0x9b, 0x8e, 0xb8, 0xb8, 0x6b,
                0x31, 0x8d, 0xb4, 0x86, 0xb5, 0x9a, 0x4f, 0x8e, 0x54, 0xea,
                0xa6, 0x8f, 0x88, 0x73, 0x94, 0x63, 0xa9, 0x19, 0x36, 0x1a,
                0x4b, 0x1a, 0x32, 0xcf, 0x22, 0xf2, 0x1e, 0x02, 0x20, 0x76,
                0xbe, 0x7f, 0xbf, 0x76, 0xa2, 0x09, 0x71, 0xfe, 0xf9, 0x28,
                0xc6, 0x44, 0x0e, 0xdf, 0xda, 0xf3, 0x82, 0x29, 0x7b, 0x0f,
                0x09, 0xf4, 0x50, 0x9f, 0xb1, 0xb1, 0x1e, 0xab, 0x11, 0x4b,
                0x3f,
            };

            // The publicKey parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                new Transaction<DumbAction>(
                    0,
                    privateKey.ToAddress(),
                    null,
                    null,
                    ImmutableHashSet<Address>.Empty,
                    timestamp,
                    new DumbAction[0],
                    signature
                )
            );

            // The actions parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                new Transaction<DumbAction>(
                    0,
                    privateKey.ToAddress(),
                    privateKey.PublicKey,
                    null,
                    ImmutableHashSet<Address>.Empty,
                    timestamp,
                    null,
                    signature
                )
            );

            // The signature parameter cannot be null.
            Assert.Throws<ArgumentNullException>(() =>
                new Transaction<DumbAction>(
                    0,
                    privateKey.ToAddress(),
                    privateKey.PublicKey,
                    null,
                    ImmutableHashSet<Address>.Empty,
                    timestamp,
                    new DumbAction[0],
                    null
                )
            );
        }

        [Fact]
        public void ToBencodex()
        {
            byte[] expected =
            {
                0x64, 0x31, 0x3a, 0x53, 0x37, 0x30, 0x3a, 0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe,
                0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb, 0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29,
                0x4d, 0x4f, 0x40, 0xea, 0x1e, 0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e,
                0x23, 0x02, 0x20, 0x3c, 0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07,
                0x59, 0x67, 0x96, 0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58,
                0x58, 0xe9, 0x7d, 0x37, 0x67, 0xe1, 0xe9, 0x31, 0x3a, 0x61, 0x6c, 0x65, 0x31, 0x3a,
                0x6e, 0x69, 0x30, 0x65, 0x31, 0x3a, 0x70, 0x36, 0x35, 0x3a, 0x04, 0x46, 0x11, 0x5b,
                0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f,
                0x3d, 0x35, 0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7, 0x32,
                0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1,
                0xbd, 0xb8, 0x1f, 0x5a, 0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                0xae, 0xd3, 0xaa, 0xa2, 0x96, 0x31, 0x3a, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60,
                0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa,
                0x4f, 0x5c, 0xbc, 0x31, 0x3a, 0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38,
                0x2d, 0x31, 0x31, 0x2d, 0x32, 0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30,
                0x30, 0x2e, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x75, 0x6c, 0x65,
                0x65,
            };

            AssertBytesEqual(expected, _fx.Tx.Serialize());
            Assert.Equal(expected.Length, _fx.Tx.BytesLength);
        }

        [Fact]
        public void ToBencodexWithActions()
        {
            var expected = new byte[]
            {
                0x64, 0x31, 0x3a, 0x53, 0x37, 0x30, 0x3a, 0x30, 0x44, 0x02, 0x20, 0x4c, 0xf2, 0xd4,
                0xd9, 0x22, 0x97, 0xa6, 0x7f, 0xd0, 0x47, 0x69, 0xf2, 0x53, 0xe2, 0x0e, 0x62, 0x13,
                0xf0, 0x63, 0xb8, 0x14, 0x2f, 0xff, 0x4c, 0xb9, 0xe9, 0xc0, 0x47, 0x33, 0xed, 0xbc,
                0x16, 0x02, 0x20, 0x0e, 0xfe, 0xbb, 0x0e, 0x2a, 0x7b, 0xcf, 0x4d, 0x5c, 0x7a, 0x62,
                0x8e, 0xd2, 0xe7, 0xa9, 0x1f, 0x44, 0x0a, 0xfa, 0x31, 0x19, 0x7f, 0xf6, 0x16, 0xfb,
                0x32, 0xd8, 0xba, 0xda, 0xd3, 0xe9, 0xcc, 0x31, 0x3a, 0x61, 0x6c, 0x64, 0x75, 0x37,
                0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x75, 0x36, 0x3a, 0x61, 0x74, 0x74,
                0x61, 0x63, 0x6b, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x64, 0x75,
                0x36, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x75, 0x33, 0x3a, 0x6f, 0x72, 0x63,
                0x75, 0x31, 0x34, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x61, 0x64, 0x64,
                0x72, 0x65, 0x73, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66,
                0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x75,
                0x36, 0x3a, 0x77, 0x65, 0x61, 0x70, 0x6f, 0x6e, 0x75, 0x34, 0x3a, 0x77, 0x61, 0x6e,
                0x64, 0x65, 0x65, 0x64, 0x75, 0x37, 0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64,
                0x75, 0x35, 0x3a, 0x73, 0x6c, 0x65, 0x65, 0x70, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c,
                0x75, 0x65, 0x73, 0x64, 0x75, 0x37, 0x3a, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x69, 0x64,
                0x69, 0x31, 0x30, 0x65, 0x65, 0x65, 0x65, 0x31, 0x3a, 0x6e, 0x69, 0x30, 0x65, 0x31,
                0x3a, 0x70, 0x36, 0x35, 0x3a, 0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9,
                0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35, 0x2e, 0x68, 0x47,
                0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97,
                0xaf, 0x6e, 0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a, 0xe3,
                0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91, 0xae, 0xd3, 0xaa, 0xa2, 0x96,
                0x31, 0x3a, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a,
                0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x31, 0x3a,
                0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32,
                0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e, 0x30, 0x30, 0x30,
                0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x75, 0x6c, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60,
                0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa,
                0x4f, 0x5c, 0xbc, 0x65, 0x65,
            };

            AssertBytesEqual(expected, _fx.TxWithActions.Serialize());
            Assert.Equal(expected.Length, _fx.TxWithActions.BytesLength);
        }

        [Fact]
        public void FromBencodex()
        {
            var bytes = new byte[]
            {
                0x64, 0x31, 0x3a, 0x53, 0x37, 0x30, 0x3a, 0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe,
                0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb, 0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29,
                0x4d, 0x4f, 0x40, 0xea, 0x1e, 0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e,
                0x23, 0x02, 0x20, 0x3c, 0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07,
                0x59, 0x67, 0x96, 0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58,
                0x58, 0xe9, 0x7d, 0x37, 0x67, 0xe1, 0xe9, 0x31, 0x3a, 0x61, 0x6c, 0x65, 0x31, 0x3a,
                0x6e, 0x69, 0x30, 0x65, 0x31, 0x3a, 0x70, 0x36, 0x35, 0x3a, 0x04, 0x46, 0x11, 0x5b,
                0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f,
                0x3d, 0x35, 0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7, 0x32,
                0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1,
                0xbd, 0xb8, 0x1f, 0x5a, 0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                0xae, 0xd3, 0xaa, 0xa2, 0x96, 0x31, 0x3a, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60,
                0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa,
                0x4f, 0x5c, 0xbc, 0x31, 0x3a, 0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38,
                0x2d, 0x31, 0x31, 0x2d, 0x32, 0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30,
                0x30, 0x2e, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x75, 0x6c, 0x65,
                0x65,
            };
            PublicKey publicKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            ).PublicKey;
            Transaction<DumbAction> tx = Transaction<DumbAction>.Deserialize(bytes);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(ImmutableHashSet<Address>.Empty, tx.UpdatedAddresses);
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb,
                    0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e,
                    0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c,
                    0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96,
                    0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9,
                    0x7d, 0x37, 0x67, 0xe1, 0xe9,
                },
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0xb0, 0x69, 0xfd, 0xe2, 0x53, 0x88, 0x53, 0xbe, 0x81, 0xb3, 0xea, 0xac,
                        0xc2, 0x38, 0x55, 0x42, 0x0e, 0x03, 0xe5, 0x62, 0x6f, 0x75, 0x7f, 0xa1,
                        0x9b, 0x37, 0x92, 0x60, 0x1a, 0x94, 0x88, 0x81,
                    }
                ),
                tx.Id
            );
            Assert.Equal(tx.BytesLength, bytes.Length);
        }

        [Fact]
        public void FromBencodexWithActions()
        {
            var bytes = new byte[]
            {
                0x64, 0x31, 0x3a, 0x53, 0x37, 0x30, 0x3a, 0x30, 0x44, 0x02, 0x20, 0x4c, 0xf2, 0xd4,
                0xd9, 0x22, 0x97, 0xa6, 0x7f, 0xd0, 0x47, 0x69, 0xf2, 0x53, 0xe2, 0x0e, 0x62, 0x13,
                0xf0, 0x63, 0xb8, 0x14, 0x2f, 0xff, 0x4c, 0xb9, 0xe9, 0xc0, 0x47, 0x33, 0xed, 0xbc,
                0x16, 0x02, 0x20, 0x0e, 0xfe, 0xbb, 0x0e, 0x2a, 0x7b, 0xcf, 0x4d, 0x5c, 0x7a, 0x62,
                0x8e, 0xd2, 0xe7, 0xa9, 0x1f, 0x44, 0x0a, 0xfa, 0x31, 0x19, 0x7f, 0xf6, 0x16, 0xfb,
                0x32, 0xd8, 0xba, 0xda, 0xd3, 0xe9, 0xcc, 0x31, 0x3a, 0x61, 0x6c, 0x64, 0x75, 0x37,
                0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x75, 0x36, 0x3a, 0x61, 0x74, 0x74,
                0x61, 0x63, 0x6b, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x64, 0x75,
                0x36, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x75, 0x33, 0x3a, 0x6f, 0x72, 0x63,
                0x75, 0x31, 0x34, 0x3a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x61, 0x64, 0x64,
                0x72, 0x65, 0x73, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66,
                0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x75,
                0x36, 0x3a, 0x77, 0x65, 0x61, 0x70, 0x6f, 0x6e, 0x75, 0x34, 0x3a, 0x77, 0x61, 0x6e,
                0x64, 0x65, 0x65, 0x64, 0x75, 0x37, 0x3a, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x69, 0x64,
                0x75, 0x35, 0x3a, 0x73, 0x6c, 0x65, 0x65, 0x70, 0x75, 0x36, 0x3a, 0x76, 0x61, 0x6c,
                0x75, 0x65, 0x73, 0x64, 0x75, 0x37, 0x3a, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x69, 0x64,
                0x69, 0x31, 0x30, 0x65, 0x65, 0x65, 0x65, 0x31, 0x3a, 0x6e, 0x69, 0x30, 0x65, 0x31,
                0x3a, 0x70, 0x36, 0x35, 0x3a, 0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9,
                0x4a, 0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35, 0x2e, 0x68, 0x47,
                0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09, 0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97,
                0xaf, 0x6e, 0x34, 0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a, 0xe3,
                0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91, 0xae, 0xd3, 0xaa, 0xa2, 0x96,
                0x31, 0x3a, 0x73, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a,
                0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc, 0x31, 0x3a,
                0x74, 0x75, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x31, 0x31, 0x2d, 0x32,
                0x31, 0x54, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x3a, 0x30, 0x30, 0x2e, 0x30, 0x30, 0x30,
                0x30, 0x30, 0x30, 0x5a, 0x31, 0x3a, 0x75, 0x6c, 0x32, 0x30, 0x3a, 0xc2, 0xa8, 0x60,
                0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b, 0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa,
                0x4f, 0x5c, 0xbc, 0x65, 0x65,
            };
            PublicKey publicKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            ).PublicKey;
            Transaction<PolymorphicAction<BaseAction>> tx =
                Transaction<PolymorphicAction<BaseAction>>.Deserialize(bytes);

            Assert.Equal(publicKey, tx.PublicKey);
            Assert.Equal(
                ImmutableHashSet.Create(new Address(publicKey)),
                tx.UpdatedAddresses
            );
            Assert.Equal(new Address(publicKey), tx.Signer);
            Assert.Equal(new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero), tx.Timestamp);
            AssertBytesEqual(
                new byte[]
                {
                    0x30, 0x44, 0x02, 0x20, 0x4c, 0xf2, 0xd4, 0xd9, 0x22, 0x97, 0xa6, 0x7f, 0xd0,
                    0x47, 0x69, 0xf2, 0x53, 0xe2, 0x0e, 0x62, 0x13, 0xf0, 0x63, 0xb8, 0x14, 0x2f,
                    0xff, 0x4c, 0xb9, 0xe9, 0xc0, 0x47, 0x33, 0xed, 0xbc, 0x16, 0x02, 0x20, 0x0e,
                    0xfe, 0xbb, 0x0e, 0x2a, 0x7b, 0xcf, 0x4d, 0x5c, 0x7a, 0x62, 0x8e, 0xd2, 0xe7,
                    0xa9, 0x1f, 0x44, 0x0a, 0xfa, 0x31, 0x19, 0x7f, 0xf6, 0x16, 0xfb, 0x32, 0xd8,
                    0xba, 0xda, 0xd3, 0xe9, 0xcc,
                },
                tx.Signature
            );
            AssertBytesEqual(
                new TxId(
                    new byte[]
                    {
                        0x2c, 0x7d, 0x15, 0xf4, 0xc1, 0xd5, 0x36, 0xce, 0x4c, 0xa2, 0xa3, 0x59,
                        0xbc, 0xd8, 0x73, 0xa9, 0x4f, 0x3c, 0x65, 0x18, 0x10, 0x9f, 0xfa, 0xbc,
                        0xf8, 0x7e, 0x34, 0x85, 0xf3, 0x63, 0xa5, 0x34,
                    }
                ),
                tx.Id
            );

            Assert.Equal(2, tx.Actions.Count);
            Assert.IsType<Attack>(tx.Actions[0].InnerAction);

            var targetAddress =
                ((Bencodex.Types.Dictionary)tx.Actions[0].InnerAction.PlainValue)
                    .GetValue<Binary>("target_address").ByteArray;
            AssertBytesEqual(
                new Address(publicKey).ByteArray,
                targetAddress
            );
            Assert.Equal(
                new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
                {
                    { (Text)"weapon", (Text)"wand" },
                    { (Text)"target", (Text)"orc" },
                    { (Text)"target_address", (Binary)new Address(publicKey).ToByteArray() },
                }),
                tx.Actions[0].InnerAction.PlainValue
            );
            Assert.IsType<Sleep>(tx.Actions[1].InnerAction);
            Assert.Equal(
                new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
                {
                    { (Text)"zone_id", (Integer)10 },
                }),
                tx.Actions[1].InnerAction.PlainValue
            );
            Assert.Equal(bytes.Length, tx.BytesLength);
        }

        [Fact]
        public void Validate()
        {
            PrivateKey privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                privateKey,
                null,
                new DumbAction[0],
                timestamp: timestamp
            );

            tx.Validate();
        }

        [Fact]
        public void DetectBadSignature()
        {
            var rawTx = _fx.Tx.ToRawTransaction();
            Transaction<DumbAction> tx = new Transaction<DumbAction>(
                new RawTransaction(
                    0,
                    rawTx.Signer,
                    rawTx.GenesisHash,
                    rawTx.UpdatedAddresses,
                    rawTx.PublicKey,
                    rawTx.Timestamp,
                    rawTx.Actions,
                    new byte[rawTx.Signature.Length].ToImmutableArray()
                )
            );

            Assert.Throws<InvalidTxSignatureException>(() => tx.Validate());
        }

        [Fact]
        public void DetectAddressMismatch()
        {
            var privKey = new PrivateKey();
            var mismatchedPrivKey = new PrivateKey();
            var unsignedTx = new UnsignedTransaction<DumbAction>(
                0,
                new Address(mismatchedPrivKey.PublicKey),
                privKey.PublicKey,
                null,
                ImmutableHashSet<Address>.Empty,
                new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero),
                ImmutableArray<DumbAction>.Empty
            );
            var invalidTx = new Transaction<DumbAction>(
                unsignedTx.Nonce,
                unsignedTx.Signer,
                unsignedTx.PublicKey,
                unsignedTx.GenesisHash,
                unsignedTx.UpdatedAddresses,
                unsignedTx.Timestamp,
                unsignedTx.Actions,
                privKey.Sign(unsignedTx.Serialize())
            );

            Assert.Throws<InvalidTxPublicKeyException>(() => invalidTx.Validate());
        }

        [Fact]
        public void ConvertToRaw()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                }
            );
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                privateKey,
                null,
                new DumbAction[0],
                timestamp: timestamp
            );

            Assert.Equal(
                GetExpectedRawTransaction(true),
                tx.ToRawTransaction()
            );
        }

        [Fact]
        public void ConvertFromRawTransaction()
        {
            RawTransaction rawTx = GetExpectedRawTransaction(true);
            var tx = new Transaction<DumbAction>(rawTx);
            tx.Validate();
        }

        [Fact]
        public void SignatureBufferIsIsolated()
        {
            Transaction<PolymorphicAction<BaseAction>> tx = _fx.Tx;
            byte[] sig = tx.Signature;
            for (int i = 0; i < sig.Length; i++)
            {
                sig[i] = 0;
            }

            Assert.NotEqual(new byte[sig.Length], tx.Signature);

            var sig2 = new byte[tx.Signature.Length];
            Array.Copy(tx.Signature, sig2, sig2.Length);
            var tx2 = new Transaction<PolymorphicAction<BaseAction>>(
                0,
                tx.Signer,
                tx.PublicKey,
                tx.GenesisHash,
                tx.UpdatedAddresses,
                tx.Timestamp,
                tx.Actions,
                sig2
            );
            for (int i = 0; i < sig2.Length; i++)
            {
                sig2[i] = 0;
            }

            Assert.NotEqual(new byte[sig.Length], tx2.Signature);
            AssertBytesEqual(tx.Signature, tx2.Signature);
        }

        [Fact]
        public void ActionsAreIsolatedFromOutside()
        {
            var actions = new List<DumbAction>();
            Transaction<DumbAction> t1 = Transaction<DumbAction>.Create(
                0,
                _fx.PrivateKey1,
                null,
                actions
            );
            var t2 = new Transaction<DumbAction>(
                0,
                _fx.PrivateKey1.ToAddress(),
                _fx.PrivateKey1.PublicKey,
                null,
                ImmutableHashSet<Address>.Empty,
                t1.Timestamp,
                actions,
                t1.Signature
            );
            actions.Add(new DumbAction());
            Assert.Empty(t1.Actions);
            Assert.Empty(t2.Actions);
        }

        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "Long array literals should be multiline.")]
        internal RawTransaction GetExpectedRawTransaction(bool includeSingature)
        {
            var privateKey = new PrivateKey(new byte[]
                {
                    0xcf, 0x36, 0xec, 0xf9, 0xe4, 0x7c, 0x87, 0x9a, 0x0d, 0xbf,
                    0x46, 0xb2, 0xec, 0xd8, 0x3f, 0xd2, 0x76, 0x18, 0x2a, 0xde,
                    0x02, 0x65, 0x82, 0x5e, 0x3b, 0x8c, 0x6b, 0xa2, 0x14, 0x46,
                    0x7b, 0x76,
                });
            var tx = new RawTransaction(
                nonce: 0,
                signer: new byte[]
                {
                    0xc2, 0xa8, 0x60, 0x14, 0x07, 0x3d, 0x66, 0x2a, 0x4a, 0x9b,
                    0xfc, 0xf9, 0xcb, 0x54, 0x26, 0x3d, 0xfa, 0x4f, 0x5c, 0xbc,
                }.ToImmutableArray(),
                updatedAddresses: ImmutableArray<ImmutableArray<byte>>.Empty,
                publicKey: new byte[]
                {
                    0x04, 0x46, 0x11, 0x5b, 0x01, 0x31, 0xba, 0xcc, 0xf9, 0x4a,
                    0x58, 0x56, 0xed, 0xe8, 0x71, 0x29, 0x5f, 0x6f, 0x3d, 0x35,
                    0x2e, 0x68, 0x47, 0xcd, 0xa9, 0xc0, 0x3e, 0x89, 0xfe, 0x09,
                    0xf7, 0x32, 0x80, 0x87, 0x11, 0xec, 0x97, 0xaf, 0x6e, 0x34,
                    0x1f, 0x11, 0x0a, 0x32, 0x6d, 0xa1, 0xbd, 0xb8, 0x1f, 0x5a,
                    0xe3, 0xba, 0xdf, 0x76, 0xa9, 0x0b, 0x22, 0xc8, 0xc4, 0x91,
                    0xae, 0xd3, 0xaa, 0xa2, 0x96,
                }.ToImmutableArray(),
                genesisHash: ImmutableArray<byte>.Empty,
                timestamp: "2018-11-21T00:00:00.000000Z",
                actions: ImmutableArray<IValue>.Empty
            );
            if (!includeSingature)
            {
                return tx;
            }

            byte[] signature =
            {
                0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb, 0xe8,
                0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e, 0x97, 0x44,
                0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c, 0x06, 0x02, 0x1f,
                0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96, 0xa8, 0x63, 0x04, 0xb0,
                0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9, 0x7d, 0x37, 0x67, 0xe1, 0xe9,
            };
            return tx.AddSignature(signature);
        }
    }
}
