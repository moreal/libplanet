using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tx
{
    /// <summary>
    /// A list of application-defined custom <see cref="IAction"/>s to be executed in a transaction.
    /// </summary>
    public sealed class TxCustomActionList : TxActionList
    {
        /// <summary>
        /// An empty <see cref="TxCustomActionList"/>.
        /// </summary>
        public static readonly TxCustomActionList Empty =
            new TxCustomActionList(ImmutableList<IAction>.Empty);

        /// <summary>
        /// Creates a new <see cref="TxCustomActionList"/> instance with the given
        /// <paramref name="customActions"/>.
        /// </summary>
        /// <param name="customActions">The list of <see cref="IAction"/>s to be executed in a
        /// transaction.</param>
        public TxCustomActionList(IEnumerable<IAction> customActions)
            : this(customActions.Select(a => a.PlainValue))
        {
        }

        /// <summary>
        /// Creates a new <see cref="TxCustomActionList"/> instance with the given
        /// <paramref name="customActions"/>.
        /// </summary>
        /// <param name="customActions">The list of <see cref="IValue"/>-typed actions to be
        /// executed in a transaction.</param>
        public TxCustomActionList(IEnumerable<IValue> customActions)
        {
            CustomActions = customActions is IImmutableList<IValue> actions
                ? actions
                : customActions.ToImmutableList();
        }

        /// <summary>
        /// The list of application-defined custom <see cref="IAction"/>s to be executed in a
        /// transaction.
        /// </summary>
        [Pure]
        public IImmutableList<IValue> CustomActions { get; }

        /// <inheritdoc cref="TxActionList.Count"/>
        [Pure]
        public override int Count => CustomActions.Count;

        /// <inheritdoc cref="TxActionList.this"/>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is less than zero.</exception>
        /// <exception cref="IndexOutOfRangeException">Thrown when the given
        /// <paramref name="index"/> is greater than or equal to <see cref="Count"/>.</exception>
        [Pure]
        public override IValue this[int index]
        {
            get
            {
                if (index < 0)
                {
                    throw new ArgumentOutOfRangeException(
                        "Only non-negative index is valid for subscription of a " +
                        $"{nameof(TxCustomActionList)} instance.");
                }
                else if (index >= Count)
                {
                    throw new IndexOutOfRangeException(
                        $"The given index {index} is greater than the number of actions " +
                        $"in this {nameof(TxCustomActionList)} instance ({Count}).");
                }

                return CustomActions[index];
            }
        }

        /// <inheritdoc cref="TxActionList.GetEnumerator"/>
        [Pure]
        public override IEnumerator<IValue> GetEnumerator() =>
            CustomActions.GetEnumerator();

        /// <inheritdoc cref="TxActionList.ToBencodex()"/>
        [Pure]
        public override IValue ToBencodex() =>
            new List(CustomActions);

        /// <summary>
        /// Decodes a <see cref="TxCustomActionList"/> from a Bencodex dictionary.
        /// </summary>
        /// <param name="value">A Bencodex list to decode.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type to decode.  It must be a concrete
        /// type, not an interface or an abstract class.</typeparam>
        /// <returns>A decoded <see cref="TxCustomActionList"/>.</returns>
        /// <exception cref="DecodingException">Thrown when the given <paramref name="value"/>
        /// is not a <see cref="List"/>.</exception>
        /// <seealso cref="ToBencodex()"/>
        [Pure]
        internal static TxCustomActionList FromBencodex<T>(IValue value)
            where T : IAction, new()
        {
            if (value is List list)
            {
                return new TxCustomActionList(
                    list.Select(ToAction<T>).ToImmutableList());
            }
            else
            {
                throw new DecodingException(
                    $"Given value must be a {nameof(List)}: {value.GetType()}");
            }
        }

        [Pure]
        private static IAction ToAction<T>(IValue value)
            where T : IAction, new()
        {
            var action = new T();
            action.LoadPlainValue(value);
            return action;
        }
    }
}
