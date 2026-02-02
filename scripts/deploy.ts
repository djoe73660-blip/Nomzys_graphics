import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Starting deployment of NomzysToken...");

  const Token = await ethers.getContractFactory("NomzysToken");

  // We must provide 'cap' and 'initialSupply' as required by your .sol file
  // Using 18 decimals (10^18)
  const cap = ethers.parseEther("1000000"); // 1 million max
  const initialSupply = ethers.parseEther("100000"); // 100k starting

  console.log("Deploying with Cap:", cap.toString());

  const token = await Token.deploy(cap, initialSupply);
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log(`✅ NomzysToken deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
