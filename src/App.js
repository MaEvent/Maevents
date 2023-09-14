import "./App.css";

// Import ABI implementation
import { createEvent, purchaseTicket, enterEvent, closeEvent, withdrawFunds, updateEventDetails, getAllEvents } from './services/EventTicketingService';
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

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
  }

  // Return
  return (
   <Router>
     <div className="App">
      <Navbar />
      <div className="App-header">
        {/* DESCRIPTION  */}
        <div className="description">
          <h1>Welcome to Maevents</h1>
          <h3>An event ticketing platform that turns regular tickets to NFTs so as to prevent ticket fraud.</h3>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={performGetAllEvents} style={{ backgroundColor: "green" }}>
            Get All Events
          </button>
          <button onClick={performCreateEvent} style={{ backgroundColor: "red" }}>
            Create Event
          </button>
          <button onClick={performPurchaseTicket} style={{ backgroundColor: "blue" }}>
            Purchase Ticket
          </button>
          <button onClick={performEnterEvent} style={{ backgroundColor: "yellow" }}>
            Enter Event
          </button>
          <button onClick={performCloseEvent} style={{ backgroundColor: "orange" }}>
            Close Event
          </button>
          <button onClick={performWithdrawFunds} style={{ backgroundColor: "purple" }}>
            Withdraw Funds
          </button>
          <button onClick={performUpdateEventDetails} style={{ backgroundColor: "grey" }}>
            Edit Event
          </button>
        </div>
      </div>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
