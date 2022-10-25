using System;
using System.Linq;
using System.Runtime.Serialization;
using Bencodex.Types;
using Libplanet.Serialization;

namespace Libplanet.Tx
{
    [Serializable]
    public sealed class EventLog : ISerializable
    {
        private static Bencodex.Codec codec = new Bencodex.Codec();

        public EventLog(
            string @event,
            IValue[] arguments
        )
        {
            Event = @event;
            Arguments = arguments;
        }

        private EventLog(SerializationInfo info, StreamingContext context)
        {
            Event = info.GetValue<string>(nameof(Event));
            Arguments = ((Bencodex.Types.List)codec.Decode(
                info.GetValue<byte[]>(nameof(Arguments))
            )).ToArray();
        }

        public string Event { get; }

        public IValue[] Arguments { get; }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(Event), Event);
            info.AddValue(nameof(Arguments), codec.Encode(new Bencodex.Types.List(Arguments)));
        }
    }
}
