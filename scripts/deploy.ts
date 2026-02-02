import { ethers } from "hardhat";

async function main() {
  console.log("Deploying NomzysToken...");

  const Token = await ethers.getContractFactory("NomzysToken");
  const token = await Token.deploy();

  await token.waitForDeployment();

  console.log(`NomzysToken deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
