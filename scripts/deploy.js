const hre = require("hardhat");

async function main() {
  deployGreeter();
  deployEventTicketingContract();
}

async function deployEventTicketingContract() {
  const contractName = "EventTicketing";
  const EventTicketing = await hre.ethers.getContractFactory(contractName);
  const eventTicketing = await EventTicketing.deploy();

  await eventTicketing.deployed();

  console.log(`${contractName} deployed to ${eventTicketing.address}`);
}


async function deployGreeter() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}


main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
