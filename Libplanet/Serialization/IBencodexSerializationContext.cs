using System.Collections.Immutable;

namespace Libplanet.Serialization
{
    public interface IBencodexSerializationContext
    {
        ImmutableHashSet<string> ExceptedProperties { get; }

        bool SelfExcepted { get; }
    }
}
