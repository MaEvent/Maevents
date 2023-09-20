import React, { useState } from 'react';
import { purchaseTicket } from './services/EventTicketingService';

function PurchaseTicketForm({ eventId }) {
  const [ticketAmount, setTicketAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await purchaseTicket(eventId, ticketAmount);
      // Optionally, you can add code to handle successful ticket purchase here.
    } catch (error) {
      console.error("Error purchasing ticket:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Number of Tickets:</label>
        <input
          type="number"
          value={ticketAmount}
          onChange={(e) => setTicketAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Purchase Tickets</button>
    </form>
  );
}

export default PurchaseTicketForm;
