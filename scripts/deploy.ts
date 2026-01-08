import { ethers } from "hardhat";

async function main() {
  const cap = ethers.parseUnits("2000000", 18);
  const initialSupply = ethers.parseUnits("1000000", 18);
  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("NomzysToken");
  const token = await Token.deploy(cap, initialSupply);
  await token.waitForDeployment();
  console.log("NomzysToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
