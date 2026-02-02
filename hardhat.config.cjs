require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Use a dummy key if the secret isn't loaded yet to prevent HHE3 crash
const P_KEY = process.env.PRIVATE_KEY || "0000000000000000000000000000000000000000000000000000000000000000";

 module.exports = {
  solidity: "0.8.20",
   // ... the rest of your config
};
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: [P_KEY],
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL || "",
      accounts: [P_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  }
};
