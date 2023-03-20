import React from 'react'
import './register.css';
import background from '../../Assets/customer.jpg'
import logo from '../../Assets/kastoma.png';
import RegisterForm from '../../Components/Authentication/RegisterForm';
function Register() {
  return (
    <div className="register-container">
      <div className="left-side" style={{ backgroundImage: `linear-gradient(rgba(48, 73, 123, 0.37), rgba(48,73, 123, 0.37)),url(${background})` }}>
        <img src={logo} alt="" className='image-logo'/>
      </div>
      <div className="right-side">
      <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
