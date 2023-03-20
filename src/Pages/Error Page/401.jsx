import React from 'react'
import './error.css';
import { Link } from 'react-router-dom'; 
function Error401() {
  return (
  <div className="error-container">
    <div className="error-code">401</div>
    <div className="error-message"><i className="fas fa-exclamation-circle"></i>Unauthorized!</div>
    <div className="error-message">You need to log in to access this page.</div>
    <Link to='/'><button className="error-button">Back to home</button></Link>
  </div>
  )
}

export default Error401
