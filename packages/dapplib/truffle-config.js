require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain essay inner problem obscure gift'; 
let testAccounts = [
"0x5d9ab0a628cc55309827c17ad47c3293d1bab5692e818db08a609cf3406924c7",
"0xc98ef28cfebda70b9c5c445787fb37e7a6ee43d26f769a5d18b8795de1c5a6f2",
"0x6fe44478746bc73e0e32eb67bfff18f202270a5857d8c355df3481cbb1c3a493",
"0xddd3f8163fcbafcdf7abe53ea7267eaf935ba5ef3ffe2b8bcfd25efe81d04dfb",
"0xb8c0b59f366627be25b5d61a69cdd68dd1853b1a06a364ca598b22c397b2a376",
"0x99deb7152094761d22d98a7ec19e79123c888c7fac58e1f723f52feb4279f314",
"0xfeda491112b7c32e2af61fb9094de9cdc7b08a603eee2f60127d15d6a1e46e17",
"0x49c130b2a563fd73040e0fff561fc8f07409b89d8897eaa9db413abbd2eaa953",
"0x52bb01e4c22adee88194ed82b4a9165c50d05dcc81fed124c18b31ba25364676",
"0xcca166afb866cf403a0ccd91a65d4d465264e3a596590d05bd609153f8c77c83"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

