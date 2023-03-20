import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './utils.css';
function RegisterForm() {
  const inputRefs = useRef([]);
  const [image, setImage] = useState(null);
  const [formErrors, setFormError] = useState('');
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    passwords: '',
    role: '',
    dept: '',
    confirmpassword: '',
    profile: null,
    createdAt: new Date().toISOString()
  });
  const handleBlur = (index) => (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      inputRefs.current[index].classList.add("has-val");
    } else {
      inputRefs.current[index].classList.remove("has-val");
    }
  };
  const handleImageSelect = (event) => {
    const selectedImage = event.target.files[0];
    console.log(selectedImage)
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      setFormData({
        ...formData, [event.target.name]: event.target.value
      });
    }

  };
  const validateFullName = (full_name) => {
    if (!full_name) {
      setFormError(prevState => ({ ...prevState, full_name: 'Full name is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, full_name: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }

  };
  const validateDepartment = (dept) => {
    if (!dept) {
      setFormError(prevState => ({ ...prevState, dept: 'Department is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, dept: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }


  };
  const validateRole = (role) => {

    if (!role) {
      setFormError(prevState => ({ ...prevState, role: 'Role is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, role: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }

  };

  const validatePhoneNumber = (phone_number) => {
    if (!phone_number) {
      setFormError(prevState => ({ ...prevState, phone_number: 'Phone number is required' }));
      inputRefs.current[2].classList.add('alert-validate');
      return false;
    } else if (!/^[0-9]{10}$/.test(phone_number)) {
      setFormError(prevState => ({ ...prevState, phone_number: 'Phone Number should be 10 digits' }));
      inputRefs.current[2].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, phone_number: '' }));
      inputRefs.current[2].classList.remove('alert-validate');
      inputRefs.current[2].classList.add('has-valid-input');
      return true;
    }
  };
  const validateEmail = (email) => {
    if (!email) {
      setFormError(prevState => ({ ...prevState, email: 'Email is required' }));
      inputRefs.current[3].classList.add('alert-validate');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError(prevState => ({ ...prevState, email: 'Valid email is required: ex@abc.xyz' }));
      inputRefs.current[3].classList.add('alert-validate');
      return false;
    } else if(users.find(user=>user.email === email)){
      setFormError(prevState => ({ ...prevState, email: 'Email exists user another email' }));
      inputRefs.current[3].classList.remove('alert-validate');
      inputRefs.current[3].classList.add('has-valid-input');
    }else {
      setFormError(prevState => ({ ...prevState, email: '' }));
      inputRefs.current[3].classList.remove('alert-validate');
      inputRefs.current[3].classList.add('has-valid-input');
      return true;
    }
  };

  const validatePassword = (passwords) => {
    if (!passwords) {
      setFormError(prevState => ({ ...prevState, passwords: 'Password is required' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (passwords.length < 8) {
      setFormError(prevState => ({ ...prevState, passwords: 'Password should have minimum 8 characters' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (!/\d/.test(passwords)) {
      setFormError(prevState => ({ ...prevState, passwords: 'Password should contain at least one digit' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (!/[!@#$%^&]/.test(passwords)) {
      setFormError(prevState => ({ ...prevState, passwords: 'Password should contain at least one special character: !@#$%^&' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, passwords: '' }));
      inputRefs.current[4].classList.remove('alert-validate');
      inputRefs.current[4].classList.add('has-valid-input');
      return true;
    }
  };

  const validateConfirmPassword = (confirmpassword) => {
    if (!confirmpassword) {
      setFormError(prevState => ({ ...prevState, confirmpassword: 'Please confirm your password' }));
      inputRefs.current[5].classList.add('alert-validate');
      return false;
    } else if (confirmpassword !== formData.passwords) {
      setFormError(prevState => ({ ...prevState, confirmpassword: 'Passwords do not match' }));
      inputRefs.current[5].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, confirmpassword: '' }));
      inputRefs.current[5].classList.remove('alert-validate');
      inputRefs.current[5].classList.add('has-valid-input');
      return true;
    }
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidFullName = validateFullName(formData.full_name);
    const isValidPhoneNumber = validatePhoneNumber(formData.phone_number);
    const isValidEmail = validateEmail(formData.email);
    const isValidPassword = validatePassword(formData.passwords);
    const isValidConfirmPassword = validateConfirmPassword(formData.confirmpassword);
    const isValidRole = validateRole(formData.role);
    const isValidDepartment = validateDepartment(formData.dept);
    if (isValidFullName && isValidPhoneNumber && isValidEmail && isValidPassword && isValidConfirmPassword && isValidRole && isValidDepartment) {
      users.push(formData)
      localStorage.setItem('users',JSON.stringify(users));
      alert('Registration submitted successfully!');
      // clear form data
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        passwords: '',
        role: '',
        dept: '',
        confirmpassword: '',
        profile: null,
        createdAt: new Date().toISOString() 
      });
      setImage(null);
      window.location.href="/login";
    } else {
      console.log(formData)
      alert('Registration not successful, Try again!');
    }

  };

  return (
    <form onSubmit={handleSubmit} className="login100-form  validate-form signup">
      <span className="login100-form-title p-b-43">
        Register to Continue
      </span>
      <div className="profile-image-container signup100">
        <div className="profile-image">
          {image ? (
            <img src={image} alt="profile" />
          ) : (
            <i className="fas fa-user-circle fa-7x"></i>
          )}
          <div className="camera-icon">
            <label htmlFor="file-input">
              <i className="fas fa-camera fa-lg"></i>
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              name="profile"
              onChange={handleImageSelect}
            />
          </div>
        </div>
      </div>
      <br />
      <div className={`wrap-input100 validate-input ${formErrors.full_name ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.full_name}>
        <input className="input100" type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} ref={(el) => (inputRefs.current[0] = el)} onBlur={handleBlur(0)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Full Name</span>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.email ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.email}
      >
        <input className="input100" type="text" name="email" value={formData.email} onChange={handleInputChange} ref={(el) => (inputRefs.current[1] = el)} onBlur={handleBlur(1)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Email</span>
      </div>


      <div className={`wrap-input100 validate-input ${formErrors.phone_number ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.phone_number}
      >
        <input className="input100" type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange} ref={(el) => (inputRefs.current[2] = el)} onBlur={handleBlur(2)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Phone Number</span>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.dept ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.dept}>
        <select className="input100" name="dept" value={formData.dept} onChange={handleInputChange} ref={(el) => (inputRefs.current[3] = el)} onBlur={handleBlur(3)}>
          <option value="">Select Department....</option>
          <option value="Sales & Marketing">Sales & Marketing</option>
          <option value="Accounting">Accounting</option>
          <option value="IT">IT</option>
          <option value="Production">Production</option>
        </select>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.role ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.role}>
        <select className="input100" name="role" value={formData.role} onChange={handleInputChange} ref={(el) => (inputRefs.current[4] = el)} onBlur={handleBlur(4)}>
          <option value="">Select Role....</option>
          <option value="SuperAdmin">SuperAdmin</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.passwords ? 'alert-validate' : 'has-valid-input'}`}
        data-validate={formErrors.passwords}>
        <input className="input100" type="password" name="passwords" value={formData.passwords} onChange={handleInputChange} ref={(el) => (inputRefs.current[4] = el)} onBlur={handleBlur(4)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Password</span>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.confirmpassword ? 'alert-validate' : 'has-valid-input'}`}
        data-validate={formErrors.confirmpassword}>
        <input className="input100" type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleInputChange} ref={(el) => (inputRefs.current[5] = el)} onBlur={handleBlur(5)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Confirm Password</span>
      </div>
      <div className="container-login100-form-btn">
        <button className="login100-form-btn">Register</button>
      </div>
      <div className="text-center p-t-46 p-b-20">
        <span className="txt2">or sign in</span>
      </div>
      <p className='create-account-text'>Already have an Account? <Link to='/login'><span className='create-account-btn'>Login </span></Link></p>
    </form>
  )
}

export default RegisterForm
