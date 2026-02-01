  require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Dummy key prevents HHE3 crash if secrets are missing during compilation
const DUMMY_KEY = "0000000000000000000000000000000000000000000000000000000000000000";
const PRIVATE_KEY = process.env.PRIVATE_KEY || DUMMY_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  }
};
