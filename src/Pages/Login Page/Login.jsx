import React from 'react';
import background from '../../Assets/customer.jpg';
import logo from '../../Assets/kastoma.png';
import './login.css';
import LoginForm from '../../Components/Authentication/LoginForm';
function Login() {
  return (
    <div className="login-container">
      <div className="left-side" style={{ backgroundImage: `linear-gradient(rgba(48, 73, 123, 0.37), rgba(48,73, 123, 0.37)),url(${background})` }}>
        <img src={logo} alt="" className='image-logo'/>
      </div>
      <div className="right-side">
      <LoginForm/>
      </div>
    </div>
  );
}

export default Login;
