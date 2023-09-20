import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Navbar.css'; // Import the CSS file
import performGetAllEvents from '../../App'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">MaEvents</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link onClick={performGetAllEvents}>All Events</Link>
        {/* <Link to="/contact">Contact</Link> */}
        {/* Add more links/buttons as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
