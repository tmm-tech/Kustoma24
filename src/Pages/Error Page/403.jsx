import React from 'react'
import './error.css';
import { Link } from 'react-router-dom'; 
function Error403() {
  
  return (
    <div className="error-container">
      <div className="error-code">403</div>
      <div className="error-message"><i className="fas fa-exclamation-circle"></i>Access denied!</div>
      <div className="error-message">You do not have permission to access this page.</div>
      <Link t0='/'><button className="error-button">Back to home</button></Link>
    </div>
  )
}

export default Error403
