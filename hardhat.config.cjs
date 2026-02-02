
 require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Use module.exports for .cjs files
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  }
};
