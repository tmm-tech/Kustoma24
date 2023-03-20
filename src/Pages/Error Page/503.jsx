import React from 'react'
import './error.css';
import { Link } from 'react-router-dom'; 
function Error503() {
  return (
    <div className="error-container">
        <div className="error-code">503</div>
        <div className="error-message"><i className="fas fa-exclamation-circle"></i>Oops! Service unavailable.</div>
        <div className="error-message">Please try again later.</div>
        <Link to='/'><button className="error-button">Back to home</button></Link>
  </div>
  )
}

export default Error503
