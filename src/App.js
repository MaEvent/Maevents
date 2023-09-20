import "./App.css";
import React, { useState } from 'react';

// Import ABI implementation
import { createEvent, purchaseTicket, enterEvent, closeEvent, withdrawFunds, updateEventDetails, getAllEvents } from './services/EventTicketingService';

import Navbar from './components/Header/Navbar';
// import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import Alert from './components/Alert/CustomAlerts';
import CreateEventForm from './components/Pages/CreateEvent/CreateEvent';

function App() {
  const [alert, setAlert] = useState(null);
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

  async function performCreateEvent(eventData) {
    // Call the createEvent function with dynamic values
    createEvent(
      eventData.name,
      eventData.description,
      eventData.imageUrl,
      eventData.date,
      eventData.totalTickets,
      eventData.ticketPrice
    );

    setIsCreatingEvent(false);
  }

  async function performPurchaseTicket() {
    purchaseTicket(1, 10);
  }

  async function performEnterEvent() {
    enterEvent(1);
  }

  async function performCloseEvent() {
    closeEvent(1);
  }

  async function performWithdrawFunds() {
    withdrawFunds(1);
  }

  async function performUpdateEventDetails() {
    updateEventDetails(1, "testing2", "testing description", "imageUrl", 2696852293000, 2, 20);
  }

  async function performGetAllEvents() {
    getAllEvents();

    function showAlert(message, type) {
      setAlert({ message, type });
    }
  }

  // Return
  return (
    <Router>
      <div className="App">
        {alert && <Alert message={alert.message} type={alert.type} />}
        <Navbar />
        <div className="description">
          <h1>Welcome to Maevents</h1>
          <h3>An event ticketing platform focused on preventing ticket fraud.</h3>
        </div>
        <div className="custom-buttons">
          <button onClick={performGetAllEvents} style={{ backgroundColor: "grey" }}>
            Get All Events
          </button>
          <button onClick={() => setIsCreatingEvent(true)} style={{ backgroundColor: "grey" }}>
            Create Event
          </button>
          <button onClick={performEnterEvent} style={{ backgroundColor: "grey" }}>
            Enter Event
          </button>
        </div>
        {/* Render the CreateEventForm conditionally */}
        {isCreatingEvent && <CreateEventForm onSubmit={performCreateEvent} />}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
