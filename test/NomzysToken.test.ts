import { expect } from "chai";
import { ethers } from "hardhat";

describe("NomzysToken", function () {
  it("should deploy, mint initial supply, enforce cap, only owner can mint, and burn should work", async function () {
    const [deployer, other] = await ethers.getSigners();
    const cap = ethers.parseUnits("2000000", 18);
    const initialSupply = ethers.parseUnits("1000000", 18);
    const Token = await ethers.getContractFactory("NomzysToken");
    const token = await Token.deploy(cap, initialSupply);
    await token.waitForDeployment();
    expect(await token.totalSupply()).to.equal(initialSupply);
    expect(await token.cap()).to.equal(cap);
    await expect(token.connect(deployer).mint(deployer.address, ethers.parseUnits("2000000", 18))).to.be.revertedWith("ERC20Capped: cap exceeded");
    await token.connect(deployer).mint(deployer.address, ethers.parseUnits("1000000", 18));
    expect(await token.totalSupply()).to.equal(cap);
    await expect(token.connect(other).mint(other.address, 1)).to.be.revertedWith("Ownable: caller is not the owner");
    await token.connect(deployer).burn(ethers.parseUnits("500", 18));
    expect(await token.totalSupply()).to.equal(cap.sub(ethers.parseUnits("500", 18)));
  });
});
