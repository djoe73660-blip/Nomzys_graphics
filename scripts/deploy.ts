import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Define your token parameters
  // 1,000,000 Cap and 100,000 Initial Supply
  const cap = ethers.parseEther("1000000"); 
  const initialSupply = ethers.parseEther("1000000");

  const Token = await ethers.getContractFactory("NomzysToken");
  
  // PASSING THE ARGUMENTS HERE:
  const token = await Token.deploy(cap, initialSupply);

  await token.waitForDeployment();

  console.log(`NomzysToken deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
