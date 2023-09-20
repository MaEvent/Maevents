import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import performGetAllEvents from '../../App.js'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">MaEvents</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="navbar-text">Home</Link>
        <Link onClick={performGetAllEvents} className="navbar-text">All Events</Link>
        {/* <Link to="/contact" className="navbar-text">Contact</Link> */}
        {/* Add more links/buttons as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
