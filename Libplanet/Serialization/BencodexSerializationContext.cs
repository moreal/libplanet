using System.Collections.Immutable;

namespace Libplanet.Serialization
{
    public struct BencodexSerializationContext : IBencodexSerializationContext
    {
        public ImmutableHashSet<string> ExceptedProperties { get; }

        public bool SelfExcepted { get; internal set; }
    }
}
