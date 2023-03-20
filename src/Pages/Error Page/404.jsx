import React from 'react'
import { Link } from 'react-router-dom'; 
import './error.css';
function Error404() {
  return (
<div className="error-container">
      <div className="error-code">404</div>
      <div className="error-message"><i className="fas fa-exclamation-circle"></i>Oops! Page not found!.</div>
      <div className="error-message">The page you requested was not found.</div>
      <Link to='/'><button className="error-button">Back to home</button></Link>
</div>
  )
}

export default Error404
