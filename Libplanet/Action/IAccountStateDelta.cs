#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to manipulate account states with
    /// maintaining the set of <see cref="UpdatedAddresses"/>.
    /// <para>It is like a map which is virtually initialized such
    /// that every possible <see cref="Address"/> exists and
    /// is mapped to <c>null</c>.  That means that:</para>
    /// <list type="bullet">
    /// <item>
    /// <description>it does not have length,</description>
    /// </item>
    /// <item>
    /// <description>its index getter never throws
    /// <see cref="KeyNotFoundException"/>,
    /// but returns <c>null</c> instead, and</description>
    /// </item>
    /// <item>
    /// <description>filling an <see cref="Address"/> with
    /// <c>null</c> state cannot be distinguished from
    /// the <see cref="Address"/> having never been set to
    /// any state.</description>
    /// </item>
    /// </list>
    /// </summary>
    /// <remarks>
    /// This interface is immutable.  <see cref="SetState(Address, IValue)"/>
    /// method does not manipulate the instance, but returns a new
    /// <see cref="IAccountStateDelta"/> instance with updated states.
    /// </remarks>
    public interface IAccountStateDelta
    {
        /// <summary>
        /// <seealso cref="Address"/>es of the accounts that have
        /// been updated since then.
        /// </summary>
        [Pure]
        IImmutableSet<Address> UpdatedAddresses { get; }

        /// <summary>
        /// <see cref="Address"/>es of the accounts whose states have been updated since then.
        /// </summary>
        [Pure]
        IImmutableSet<Address> StateUpdatedAddresses { get; }

        /// <summary>
        /// <see cref="Address"/>es and sets of <see cref="Currency"/> whose fungible assets have
        /// been updated since then.
        /// <para>For example, if A transfers 10 FOO to B and B transfers 20 BAR to C,
        /// <see cref="UpdatedFungibleAssets"/> become likes
        /// <c>{ [A] = { FOO }, [B] = { FOO, BAR }, [C] = { BAR } }</c>.</para>
        /// </summary>
        [Pure]
        IImmutableDictionary<Address, IImmutableSet<Currency>> UpdatedFungibleAssets
        {
            get;
        }

        /// <summary>
        /// Gets the account state of the given <paramref name="address"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to get its state.</param>
        /// <returns>The account state of the given <paramref name="address"/>.
        /// If it has never been set to any state it returns <c>null</c>
        /// instead.</returns>
        [Pure]
        IValue? GetState(Address address);

        /// <summary>
        /// Gets a new instance that the account state of the given
        /// <paramref name="address"/> is set to the given
        /// <paramref name="state"/>.
        /// </summary>
        /// <param name="address">The <see cref="Address"/> referring
        /// the account to set its state.</param>
        /// <param name="state">The new state to fill the account with.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the account state of the given <paramref name="address"/>
        /// is set to the given <paramref name="state"/>.</returns>
        /// <remarks>
        /// This method method does not manipulate the instance,
        /// but returns a new <see cref="IAccountStateDelta"/> instance
        /// with updated states instead.
        /// </remarks>
        [Pure]
        IAccountStateDelta SetState(Address address, IValue state);

        /// <summary>
        /// Queries <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </summary>
        /// <param name="address">The owner address to query.</param>
        /// <param name="currency">The currency type to query.</param>
        /// <returns>
        /// The <paramref name="address"/>'s balance of the <paramref name="currency"/>.
        /// </returns>
        [Pure]
        BigInteger GetBalance(Address address, Currency currency);

        /// <summary>
        /// Mints the <paramref name="amount"/> of a new <paramref name="currency"/>, fungible asset
        /// (i.e., in-game monetary), and give it to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="recipient">The address who receives the minted asset.</param>
        /// <param name="currency">The currency type to mint.</param>
        /// <param name="amount">The amount of the <paramref name="currency"/> to mint.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the given <paramref name="amount"/> of the <paramref name="currency"/> is added to
        /// <paramref name="recipient"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="amount"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of <paramref name="currency"/>'s
        /// <see cref="Currency.Minters"/>.</exception>
        [Pure]
        IAccountStateDelta MintAsset(Address recipient, Currency currency, BigInteger amount);

        /// <summary>
        /// Transfers the <paramref name="amount"/> of a new <paramref name="currency"/>,
        /// fungible asset (i.e., in-game monetary), from the <paramref name="sender"/>
        /// to the <paramref name="recipient"/>.
        /// </summary>
        /// <param name="sender">The address who sends the fungible asset to
        /// the <paramref name="recipient"/>.</param>
        /// <param name="recipient">The address who receives the fungible asset from
        /// the <paramref name="sender"/>.</param>
        /// <param name="currency">The currency type to transfer.</param>
        /// <param name="amount">The amount of the <paramref name="currency"/> to transfer.</param>
        /// <param name="allowNegativeBalance">Turn on to allow <paramref name="sender"/>'s balance
        /// less than zero of the <paramref name="currency"/>.  Turned off by default.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the given <paramref name="amount"/> of the <paramref name="currency"/> is subtracted
        /// from <paramref name="sender"/>'s balance and added to <paramref name="recipient"/>'s
        /// balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="amount"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="sender"/>
        /// has insufficient balance than <paramref name="amount"/> to transfer and
        /// the <paramref name="allowNegativeBalance"/> option is turned off.</exception>
        [Pure]
        IAccountStateDelta TransferAsset(
            Address sender,
            Address recipient,
            Currency currency,
            BigInteger amount,
            bool allowNegativeBalance = false
        );

        /// <summary>
        /// Burns the <paramref name="amount"/> of the <paramref name="currency"/>, fungible asset
        /// (i.e., in-game monetary), from <paramref name="owner"/>'s balance.
        /// </summary>
        /// <param name="owner">The address who owns the fungible asset to burn.</param>
        /// <param name="currency">The currency type to burn.</param>
        /// <param name="amount">The amount of the <paramref name="currency"/> to burn.</param>
        /// <returns>A new <see cref="IAccountStateDelta"/> instance that
        /// the given <paramref name="amount"/> of the <paramref name="currency"/> is subtracted
        /// from <paramref name="owner"/>'s balance.</returns>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the <paramref name="amount"/>
        /// is less than or equal to 0.</exception>
        /// <exception cref="CurrencyPermissionException">Thrown when a transaction signer
        /// (or a miner in case of block actions) is not a member of <paramref name="currency"/>'s
        /// <see cref="Currency.Minters"/>.</exception>
        /// <exception cref="InsufficientBalanceException">Thrown when the <paramref name="owner"/>
        /// has insufficient balance than <paramref name="amount"/> to burn.</exception>
        [Pure]
        IAccountStateDelta BurnAsset(Address owner, Currency currency, BigInteger amount);
    }
}
