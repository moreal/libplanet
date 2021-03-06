using Bencodex.Types;

namespace Libplanet
{
    public static class BencodexExtension
    {
        public static T GetValue<T>(this Dictionary dictionary, string name)
            where T : IValue
        {
            return (T)dictionary[(Text)name];
        }
    }
}
