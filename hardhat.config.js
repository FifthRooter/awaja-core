require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PK = process.env.PK;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const MUMBAI_POLYGON_RPC_URL = proce.env.MUMBAI_POLYGON_RPC_URL;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // forking: {
      //     enabled: false,
      //     url: MAINNET_RPC_URL,
      // },
    },
    goerli: {
      chainId: 5,
      blockConfirmations: 6,
      url: GOERLI_RPC_URL,
      accounts: [PK],
    },
    localhost: {
      chainId: 31337,
    },
    mumbai: {
      chainId: 80001,
      url: MUMBAI_POLYGON_RPC_URL,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.6.12" },
      { version: "0.4.24" },
      { version: "0.4.19" },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 600000,
  }, // 200sec
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
    customChains: [],
  },
};
