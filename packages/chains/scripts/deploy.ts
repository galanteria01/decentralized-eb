import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Bill = await ethers.getContractFactory("Bill");
  const bill = await Bill.deploy(unlockTime, { value: lockedAmount });

  await bill.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${bill.address}`);

  const Transaction = await ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy(unlockTime, { value: lockedAmount });

  await transaction.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${transaction.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
