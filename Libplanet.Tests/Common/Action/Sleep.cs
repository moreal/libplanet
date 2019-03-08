using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    [ActionType("sleep")]
    public class Sleep : BaseAction
    {
        public int ZoneId { get; set; }

        public override IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "zone_id", ZoneId },
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            // No-op.
            return context.PreviousStates;
        }

        public override void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue)
        {
            ZoneId = (int)(BigInteger)plainValue["zone_id"];
        }
    }
}
