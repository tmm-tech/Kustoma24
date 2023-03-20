/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import './main.css';
import './utils.css';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function LoginForm() {
  const inputRefs = useRef([]);
  let valid;
  const handleBlur = (index) => (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      inputRefs.current[index].classList.add("has-val");
    } else {
      inputRefs.current[index].classList.remove("has-val");
    }
  };
  const [formData, setFormData] = useState({
    email: '',
    passwords: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const validateEmail = (email) => {
    if (!email) {
      setEmailError('Email is required');
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Valid email is required: ex@abc.xyz"');
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setEmailError('');
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }
  };

  const validatePassword = (passwords) => {
    if (!passwords) {
      setPasswordError('Password is required');
      inputRefs.current[1].classList.add('alert-validate');
      return false;
    } else if (passwords.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      inputRefs.current[1].classList.add('alert-validate');
      return false;
    } else if (!/\d/.test(passwords)) {
      setPasswordError('Password must contain at least one number');
      inputRefs.current[1].classList.add('alert-validate');
      return false;
    } else if (!/[a-zA-Z]/.test(passwords)) {
      setPasswordError('Password must contain at least one letter');
      inputRefs.current[1].classList.add('alert-validate');
      return false;
    } else {
      setPasswordError('');
      inputRefs.current[1].classList.remove('alert-validate');
      inputRefs.current[1].classList.add('has-valid-input');
      return true;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.passwords);
    if (isEmailValid && isPasswordValid) {
          // submit registration data
          let users = JSON.parse(localStorage.getItem('users')) || [];
          const user=users.find(user=>user.email === formData.email && user.passwords === formData.passwords);
          if (user){
            
            alert('Login successfully');
            window.location.href="/";
          }else{
            alert('Invalid email or password');
          }
         
        } else {
          alert('Login not successful, Try again!');
        }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value, }))
  }


  return (
    <form className="login100-form validate-form" id='login' onSubmit={handleSubmit}>
      <span className="login100-form-title p-b-43">
        Login to continue
      </span>
      <div className={`wrap-input100 validate-input ${emailError ? 'alert-validate' : 'has-valid-input'}`} data-validate={emailError}>
        <input type="text" name="email" className="input100" onChange={handleChange} value={formData.email} ref={(el) => (inputRefs.current[0] = el)} onBlur={handleBlur(0)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Email</span>
      </div>
      <div className={`wrap-input100 validate-input ${passwordError ? 'alert-validate' : 'has-valid-input'}`} data-validate={passwordError}>
        <input type="password" name="passwords" style={{width:'100%'}} className="input100" onChange={handleChange} value={formData.passwords} ref={(el) => (inputRefs.current[1] = el)} onBlur={handleBlur(1)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Password</span>
      </div>
      <div className="flex-sb-m w-full p-t-3 p-b-32">
        <div className="contact100-form-checkbox">
          <input type="checkbox" name="remember-me" id="ckb1" className='input-checkbox100' />
          <label htmlFor="ckb1" className="label-checkbox100">Remember me</label>
        </div>
        <div>
        <a href=" " className="txt1">Forgot Password?</a>
        </div>
      </div>
      <div className="container-login100-form-btn">
        <button className='login100-form-btn'>Login</button>
      </div>
      <div className="text-center p-t-46 p-b-20">
        <span className="txt2">or signup using</span>
      </div>
      <div className="login100-form-social flex-c-m">
        <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
          <FaGoogle className="icon" />
        </a>

        <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
          <FaFacebook className="icon" />
        </a>

        <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
          <FaTwitter className="icon" />
        </a>
      </div>
      <p className='create-account-text'>Don't have an account? <Link to='/register'><span className='create-account-btn'>Create an Account </span></Link></p>
    </form>
  )
}

export default LoginForm
