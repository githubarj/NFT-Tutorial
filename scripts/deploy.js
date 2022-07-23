//ethers.js comes built into hardhat
//ethers.js is a really nice JavaScript library for interacting with ethereum

//import ethers
const { ethers } = require("hardhat")

async function main () {

  //tell the script we want to deploy the "NFTee.sol contract"
  const contract = await ethers.getContractFactory("NFTee");
  //deploy it
  const deployedContract = await contract.deploy()
  //wait for the contract to deploy
  await deployedContract.deployed()

  //print the address of the deployed contract
  console.log("NFT Contract deployed to: ", deployedContract.address)



}

main().then(() => process.exit(0).catch((error)=>{
  console.error(error);
  process.exit(1)
  
})

)