import React from 'react'
import './error.css';
import { Link } from 'react-router-dom'; 
function Error500() {
    
  return (
    <div className="error-container">
        <div className="error-code">500</div>
        <div className="error-message"><i className="fas fa-exclamation-circle"></i>Oops! Something went wrong on the server.</div>
        <div className="error-message">Please try again later.</div>
        <Link to='/'><button className="error-button">Back to home</button></Link>
  </div>
  )
}

export default Error500
