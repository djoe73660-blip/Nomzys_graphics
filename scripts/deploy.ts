import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Starting deployment of NomzysToken...");

  const Token = await ethers.getContractFactory("NomzysToken");

  // These numbers must be sent because of your 'constructor' in the .sol file
  // We use 18 decimals for typical ERC20 tokens
  const cap = ethers.parseUnits("1000000", 18); // 1 Million Max
  const initialSupply = ethers.parseUnits("100000", 18); // 100k Created at start

  console.log("Deploying with a Cap of 1,000,000 NMZY...");

  // We pass (cap, initialSupply) directly into the deploy function
  const token = await Token.deploy(cap, initialSupply);

  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log(`✅ NomzysToken deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
