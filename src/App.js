import "./App.css";
import React, { useState } from 'react';

// Import ABI implementation
import { createEvent, purchaseTicket, enterEvent, closeEvent, withdrawFunds, updateEventDetails, getAllEvents } from './services/EventTicketingService';

// import Navbar from './components/Header/Navbar'
// import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/Alert/CustomAlerts';

function App() {
  const [alert, setAlert] = useState(null);

  async function performCreateEvent() {
    createEvent("testing", "testing description", "imageUrl", 1696852293000, 2, 10);
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

      {/* <Navbar /> */}
      {/* <div className=""> */}
        {/* DESCRIPTION  */}
        <div className="description">
          <h1>Welcome to Maevents</h1>
          <h3>An event ticketing platform foucsed on preventing ticket fraud.</h3>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={performGetAllEvents} style={{ backgroundColor: "grey" }}>
            Get All Events
          </button>
          <button onClick={performCreateEvent} style={{ backgroundColor: "grey" }}>
            Create Event
          </button>
          <button onClick={performPurchaseTicket} style={{ backgroundColor: "grey" }}>
            Purchase Ticket
          </button>
          <button onClick={performEnterEvent} style={{ backgroundColor: "grey" }}>
            Enter Event
          </button>
          <button onClick={performCloseEvent} style={{ backgroundColor: "grey" }}>
            Close Event
          </button>
          <button onClick={performWithdrawFunds} style={{ backgroundColor: "grey" }}>
            Withdraw Funds
          </button>  
          <button onClick={performUpdateEventDetails} style={{ backgroundColor: "grey" }}>
            Edit Event
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    {/* </div> */}
   </Router>
  );
}

export default App;
