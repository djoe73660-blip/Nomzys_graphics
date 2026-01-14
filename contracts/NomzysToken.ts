import { expect } from "chai";
import { ethers } from "hardhat";

describe("NomzysToken", function () {
  // Helper to deploy the contract before each test
  async function deployTokenFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    
    // Values matching your deployment logic
    const cap = 1000000n; // 1 Million tokens
    const initialSupply = 500000n; // 500k tokens
    
    const NomzysToken = await ethers.getContractFactory("NomzysToken");
    const token = await NomzysToken.deploy(cap, initialSupply);

    return { token, owner, otherAccount, cap, initialSupply };
  }

  describe("Deployment Logic", function () {
    it("Should set the correct Cap", async function () {
      const { token, cap } = await deployTokenFixture();
      // We use parseEther because your contract multiplies by 10^18
      const expectedCap = ethers.parseEther(cap.toString());
      expect(await token.cap()).to.equal(expectedCap);
    });

    it("Should mint the initial supply to the owner", async function () {
      const { token, owner, initialSupply } = await deployTokenFixture();
      const expectedBalance = ethers.parseEther(initialSupply.toString());
      expect(await token.balanceOf(owner.address)).to.equal(expectedBalance);
    });

    it("Should fail if initial supply exceeds the cap", async function () {
      const NomzysToken = await ethers.getContractFactory("NomzysToken");
      const cap = 100n;
      const initialSupply = 200n; // This is higher than cap
      
      // The constructor should revert based on your 'require' statement
      await expect(NomzysToken.deploy(cap, initialSupply))
        .to.be.revertedWith("Cap must be >= initial supply");
    });
  });
});