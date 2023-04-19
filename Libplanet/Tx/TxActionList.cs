using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex.Json;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;

namespace Libplanet.Tx
{
    /// <summary>
    /// An abstract class to represent a list of <see cref="IAction"/>s.  It can be either
    /// <see cref="TxSystemActionList"/> or <see cref="TxCustomActionList"/>.
    /// </summary>
    /// <remarks>It is a <a href="https://en.wikipedia.org/wiki/Sum_type">sum type</a> as
    /// it cannot be inherited from outside of this assembly.</remarks>
    [JsonConverter(typeof(TxActionListJsonConverter))]
    public abstract class TxActionList : IReadOnlyList<IValue>, IEquatable<TxActionList>
    {
        private protected TxActionList()
        {
            // Avoid external inheritance.
        }

        /// <inheritdoc cref="IReadOnlyCollection{T}.Count"/>
        [Pure]
        public abstract int Count { get; }

        /// <inheritdoc cref="IReadOnlyList{T}.this"/>
        [Pure]
        public abstract IValue this[int index] { get; }

        /// <inheritdoc cref="IEnumerable{T}.GetEnumerator()"/>
        [Pure]
        public abstract IEnumerator<IValue> GetEnumerator();

        /// <inheritdoc cref="IEnumerable.GetEnumerator()"/>
        [Pure]
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        /// <summary>
        /// Encodes the <see cref="TxActionList"/> into a Bencodex dictionary.
        /// </summary>
        /// <returns>A Bencodex dictionary that encodes the <see cref="TxActionList"/>.</returns>
        [Pure]
        public abstract IValue ToBencodex();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        [Pure]
        public bool Equals(TxActionList? other)
        {
            return other is { } && GetType() == other.GetType() && Count == other.Count &&
                this.SequenceEqual(other);
        }

        /// <inheritdoc cref="object.Equals(object?)"/>
        [Pure]
        public override bool Equals(object? obj) => obj is TxActionList other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        [Pure]
        public override int GetHashCode() => this.Aggregate(
            GetType().GetHashCode(),
            (a, b) => a ^ b.GetHashCode()
        );
    }

    [SuppressMessage(
        "StyleCop.CSharp.MaintainabilityRules",
        "SA1402:FileMayOnlyContainASingleClass",
        Justification = "It's okay to have non-public classes together in a single file."
    )]
    internal sealed class TxActionListJsonConverter : JsonConverter<TxActionList>
    {
        private static readonly BencodexJsonConverter BencodexJsonConverter =
            new BencodexJsonConverter();

        private static readonly SysActionJsonConverter SysActionJsonConverter =
            new SysActionJsonConverter();

        public override TxActionList? Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException("Expected a JSON object.");
            }

            bool? isSystemAction = null;
            IAction? systemAction = null;
            IImmutableList<IValue>? customActions = null;
            reader.Read();
            while (reader.TokenType != JsonTokenType.EndObject)
            {
                string key = reader.GetString() ?? throw new JsonException("Expected a key.");
                switch (key)
                {
                    case "type":
                        isSystemAction = reader.GetString() switch
                        {
                            "system" => true,
                            "custom" => throw new JsonException(
                                "Deserialization of custom actions is not supported yet."),
                            _ => throw new JsonException("Unexpected value: " + reader.GetString()),
                        };
                        break;

                    case "systemAction":
                        systemAction =
                            SysActionJsonConverter.Read(ref reader, typeof(IAction), options);
                        break;

                    case "customActions":
                        throw new JsonException(
                            "Deserialization of custom actions is not supported yet.");

                    default:
                        throw new JsonException("Unexpected key: " + key);
                }
            }

            switch (isSystemAction)
            {
                case null:
                    throw new JsonException("Expected a \"Type\" key.");

                case true:
                    if (customActions is { })
                    {
                        throw new JsonException("Unexpected \"CustomActions\" key.");
                    }
                    else if (!(systemAction is { } sysAction))
                    {
                        throw new JsonException("Expected a \"SystemAction\" key.");
                    }
                    else
                    {
                        return new TxSystemActionList(sysAction);
                    }

                case false:
                    throw new JsonException(
                        "Deserialization of custom actions is not supported yet.");
            }
        }

        public override void Write(
            Utf8JsonWriter writer,
            TxActionList value,
            JsonSerializerOptions options)
        {
            writer.WriteStartObject();
            writer.WriteString("type", value is TxSystemActionList ? "system" : "custom");
            if (value is TxSystemActionList sysActionList)
            {
                writer.WritePropertyName("systemAction");
                SysActionJsonConverter.Write(writer, sysActionList.SystemAction, options);
            }
            else if (value is TxCustomActionList customActionList)
            {
                writer.WritePropertyName("customActions");
                writer.WriteStartArray();
                foreach (IValue customAction in customActionList.CustomActions)
                {
                    BencodexJsonConverter.Write(writer, customAction, options);
                }

                writer.WriteEndArray();
            }
            else
            {
                throw new JsonException("Unexpected action list type: " + value.GetType());
            }

            writer.WriteEndObject();
        }
    }
}
