import React, { useState } from 'react';
import { updateEventDetails } from './services/EventTicketingService';

function EditEventForm({ eventId }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const [totalTickets, setTotalTickets] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEventDetails(eventId, name, description, imageUrl, date, totalTickets, ticketPrice);
      // Optionally, you can add code to handle successful event editing here.
    } catch (error) {
      console.error("Error editing event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number of Tickets:</label>
        <input
          type="number"
          value={totalTickets}
          onChange={(e) => setTotalTickets(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ticket Price:</label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditEventForm;
