import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './Events.css';

const EVENT_TICKETING_ADDRESS = '<your_event_ticketing_address_here>'; // Replace with your contract address
const EventTicketing = require('<path_to_EventTicketing_abi_json_file>'); // Replace with the correct import

function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchAllEvents() {
      // If MetaMask exists
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(EVENT_TICKETING_ADDRESS, EventTicketing.abi, provider);
        try {
          const data = await contract.getAllEvents();
          setEvents(data); // Update the state with the fetched events
        } catch (error) {
          console.log('Error:', error);
        }
      }
    }

    fetchAllEvents();
  }, []);

  return (
    <div className="all-events">
    <h2>All Events</h2>
    <ul className="event-list">
      {events.map((event, index) => (
        <li key={index} className="event-item">
          <strong>Name:</strong> {event.name}
          <br />
          <strong>Description:</strong> {event.description}
          <br />
          {/* Include additional event details here */}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default AllEvents;
