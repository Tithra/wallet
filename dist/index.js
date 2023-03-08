"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var wallet = tslib_1.__importStar(require("@stellar/wallet-sdk"));
var keyManager = new wallet.KeyManager({
    keyStore: new wallet.KeyManagerPlugins.MemoryKeyStore(),
});
keyManager.registerEncrypter(wallet.KeyManagerPlugins.ScryptEncrypter);
keyManager
    .storeKey({
    key: {
        type: wallet.KeyType.plaintextKey,
        publicKey: '<<Insert public key>>',
        privateKey: '<<Insert private key>>',
    },
    password: 'hunter2',
    encrypterName: wallet.KeyManagerPlugins.ScryptEncrypter.name,
})
    .then(function (keyMetadata) {
    console.log('Successfully encrypted and stored key: ', keyMetadata);
})
    .catch(function (e) {
    console.log('Error saving key: ', e.toString());
});
console.log('hello world');
//# sourceMappingURL=index.js.map