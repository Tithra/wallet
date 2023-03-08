import * as wallet from '@stellar/wallet-sdk';

// To instantiate a keyManager instance, pass it an object that conforms to
// the KeyStore interface.
const keyManager = new wallet.KeyManager({
  // The library comes with a sample KeyStore that stores keys in memory.
  keyStore: new wallet.KeyManagerPlugins.MemoryKeyStore(),
});

// Then, you need to register an encrypter to handle encrypting / decrypting keys.
// The library comes with two samples. (Don't use the Identity Encrypter in prod!)
keyManager.registerEncrypter(wallet.KeyManagerPlugins.ScryptEncrypter);

// If you're writing a production wallet, you'll probably want to write your own
// KeyStore and/or Encrypter. Make sure they conform to the `KeyStore` and
// `Encrypter` interfaces defined in these docs. You can use the `PluginTesting`
// functions to make sure that your plugins meet spec!

keyManager
  .storeKey({
    // The KeyManager takes keys that conform to our Key interface.
    key: {
      type: wallet.KeyType.plaintextKey,
      publicKey: '<<Insert public key>>',
      privateKey: '<<Insert private key>>',
    },

    password: 'hunter2',
    encrypterName: wallet.KeyManagerPlugins.ScryptEncrypter.name,
  })
  .then((keyMetadata) => {
    console.log('Successfully encrypted and stored key: ', keyMetadata);
  })
  .catch((e) => {
    console.log('Error saving key: ', e.toString());
  });
console.log('hello world');
