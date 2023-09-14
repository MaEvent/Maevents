import { ethers } from 'ethers';

// Import ABI Code to interact with smart contract
import EventTicketing from '../artifacts/contracts/EventTicketing.sol/EventTicketing.json';

// The contract address
const EVENT_TICKETING_ADDRESS = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

// Requests access to the user's MetaMask Account
async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

async function createEvent(name, description, imageUrl, date, totalTickets, ticketPrice) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);
    const formattedTicketPrice = ethers.utils.parseEther(`${ticketPrice}`);

    try {
      const transaction = await contract.createEvent(name, description, imageUrl, date, totalTickets, formattedTicketPrice);
      await transaction.wait();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function purchaseTicket(eventId, ticketPrice) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);
    const formattedTicketPrice = ethers.utils.parseEther(`${ticketPrice}`);

    try {
      const transaction = await contract.purchaseTicket(eventId, { value: formattedTicketPrice });
      await transaction.wait();
      console.log({transaction});
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function enterEvent(ticketId) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);

    try {
      const transaction = await contract.enterEvent(ticketId);
      await transaction.wait();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function closeEvent(eventId) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);

    try {
      const transaction = await contract.closeEvent(eventId);
      await transaction.wait();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function withdrawFunds(eventId) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);

    try {
      const transaction = await contract.withdrawFunds(eventId);
      await transaction.wait();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function updateEventDetails(eventId, name, description, imageUrl, date, totalTickets, ticketPrice) {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, signer);
    const formattedTicketPrice = ethers.utils.parseEther(`${ticketPrice}`);

    try {
      const transaction = await contract.updateEventDetails(eventId, name, description, imageUrl, date, totalTickets, formattedTicketPrice);
      await transaction.wait();
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

async function getAllEvents() {
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, provider);
    try {
      const data = await contract.getAllEvents();
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

export { createEvent, purchaseTicket, enterEvent, closeEvent, withdrawFunds, updateEventDetails, getAllEvents };
