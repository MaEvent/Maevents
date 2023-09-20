import React, { useState } from "react";
import './CreateEvent.css'; // Import your CSS file

function EventCreationForm({ createEvent }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the createEvent function with the form data
    await createEvent(
      name,
      description,
      imageUrl,
      date,
      totalTickets,
      ticketPrice
    );
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="totalTickets">Total Tickets:</label>
        <input
          type="number"
          id="totalTickets"
          value={totalTickets}
          onChange={(e) => setTotalTickets(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ticketPrice">Ticket Price:</label>
        <input
          type="number"
          id="ticketPrice"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Create Event
      </button>
    </form>
  );
}

export default EventCreationForm;
