/**
 * Truffle config file
 */
 
const path = require("path");
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider2 = require("@truffle/hdwallet-provider");
// read from .env file
const {
  MNEMONIC, 
  ALCHEMY_APIKEY,
  ALCHEMY_GOERLI_APIKEY,
  ALCHEMY_MUNBAI_APIKEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  BSCSCAN_API_KEY,
  SNOWTRACE_API_KEY
} = process.env;

module.exports = {
  // bulid path for ABI json files
  contracts_build_directory: path.join(__dirname, "./../client/src/contracts"),
  //  plugin
  plugins: [
    'truffle-plugin-verify'
  ],
  // config for API
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
    polygonscan: POLYGONSCAN_API_KEY,
    bscscan: BSCSCAN_API_KEY,
    snowtrace: SNOWTRACE_API_KEY,
  },
  // config for networks
  networks: {
    develop: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_APIKEY}`
        );
      },
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    goreli: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_APIKEY}`
        );
      },
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    shibuya: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://shibuya.public.blastapi.io`
        );
      },
      network_id: 81,
      gas: 500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    munbai: {
      provider: new HDWalletProvider2(MNEMONIC,`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_MUNBAI_APIKEY}`),
      network_id: 80001,
      // gas: 500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsctestnet: {
      provider: () => new HDWalletProvider2(MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    fuji: {
      provider: () => new HDWalletProvider2(MNEMONIC, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      //  evmVersion: "byzantium"
      }
    }
  },
};
