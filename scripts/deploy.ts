import { ethers } from "hardhat";

async function main() {
  console.log("Starting deployment of NomzysToken...");

  // Get the contract factory (Matches your contracts/NomzysToken.sol)
  const Token = await ethers.getContractFactory("NomzysToken");
  
  // Deploy the contract
  const token = await Token.deploy();
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log(`NomzysToken deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
