import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        {/* Add more links as needed */}
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} MaEvents
      </div>
    </footer>
  );
}

export default Footer;
