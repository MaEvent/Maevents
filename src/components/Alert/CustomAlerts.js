import React from 'react';
import './CustomAlerts.css'
function Alert({ message, type }) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

export default Alert;
