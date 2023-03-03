namespace Libplanet.Abstractions.Crypto
{
    public interface IPublicKey
    {
        byte[] Format(bool compress);
    }
}
