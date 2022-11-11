require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot alone renew noise attitude ice light army general'; 
let testAccounts = [
"0x014a4bd1d4e260070f7abd97c714c50dcfeb8bd4cb9074588b770005e8d9be1f",
"0x4b3cf9a6e8cc89fcab1e284768d5341340aa8802d65fb7a616306ceb4d987df7",
"0x91addaeaafe1910176167bc6b1fd99161079f8055b6f2e6c1e53ce3dfd4dbfee",
"0x060a572b462418d967606534f18b0568d51bb31c849cb725a89bf848930e505c",
"0x8ce09e4e59c5201d7fb2ea1afb3c711f632893151dceac2e2bdd583660e0ff95",
"0x46c459d60ba67d3ad673daa71ab1f0bac4daf30e70b59248cdb82b45304372d5",
"0x5572fad65ce14516b347024a9ec000fdbea74c164cff09bb9092d130508a92c6",
"0xe57d4c5d06122b0aca7c4e8348da050c5e4673c28dc96f23c54cf3303e565d7d",
"0x1fc130beb5ce8a39a8f39c4c8d779f2b5cd20809f30e89cd7636bc3012928a03",
"0x76b0aa6b6f58cf3a5c9a26454832415aeec71ab36cc038a2c638265c0f52764e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


