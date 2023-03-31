import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {storage} from '../Firebase/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from "uuid";
import './utils.css';
function RegisterForm() {
  const inputRefs = useRef([]);
  const [image, setImage] = useState(null);
  const [formErrors, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    gender:'',
    password: '',
    roles: '',
    department: '',
    confirmpassword: '',
    profile: null,
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
      const imageRef = ref(storage, `Profile/${selectedImage.name + v4()}`);
      uploadBytes(imageRef,selectedImage).then (()=>{
        console.log('Uploaded')
        getDownloadURL(imageRef).then((url)=>{
          console.log(url)
          setFormData({
            ...formData, [event.target.name]: event.target.value, profile:url
          });
        })
      })
      setImage(URL.createObjectURL(selectedImage));

  };
  const validateFullName = (fullname) => {
    if (!fullname) {
      setFormError(prevState => ({ ...prevState, fullname: 'Full name is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, fullname: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }

  };
  const validateDepartment = (department) => {
    if (!department) {
      setFormError(prevState => ({ ...prevState, department: 'Department is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, department: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }


  };
  const validateRole = (roles) => {

    if (!roles) {
      setFormError(prevState => ({ ...prevState, roles: 'Role is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, roles: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
      return true;
    }

  };

  const validateGender = (gender) => {

    if (!gender) {
      setFormError(prevState => ({ ...prevState, gender: 'Gender is required' }));
      inputRefs.current[0].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, gender: '' }));
      inputRefs.current[0].classList.remove('alert-validate');
      inputRefs.current[0].classList.add('has-valid-input');
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
    }else {
      setFormError(prevState => ({ ...prevState, email: '' }));
      inputRefs.current[3].classList.remove('alert-validate');
      inputRefs.current[3].classList.add('has-valid-input');
      return true;
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setFormError(prevState => ({ ...prevState, password: 'Password is required' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (password.length < 8) {
      setFormError(prevState => ({ ...prevState, password: 'Password should have minimum 8 characters' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (!/\d/.test(password)) {
      setFormError(prevState => ({ ...prevState, password: 'Password should contain at least one digit' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else if (!/[!@#$%^&]/.test(password)) {
      setFormError(prevState => ({ ...prevState, password: 'Password should contain at least one special character: !@#$%^&' }));
      inputRefs.current[4].classList.add('alert-validate');
      return false;
    } else {
      setFormError(prevState => ({ ...prevState, password: '' }));
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
    } else if (confirmpassword !== formData.password) {
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
    const isValidFullName = validateFullName(formData.fullname);
    const isValidGender = validateGender(formData.gender);
    const isValidEmail = validateEmail(formData.email);
    const isValidPassword = validatePassword(formData.password);
    const isValidConfirmPassword = validateConfirmPassword(formData.confirmpassword);
    const isValidRole = validateRole(formData.roles);
    const isValidDepartment = validateDepartment(formData.department);
    if (isValidFullName && isValidGender && isValidEmail && isValidPassword && isValidConfirmPassword && isValidRole && isValidDepartment) {
      // submit login data
      console.log(formData)
      try {
        const response = await fetch("http://localhost:4040/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        // const data = await response.json();
        if (response.ok) {
          window.location.href="/";
          // Login successful
          alert('Registration submitted successfully!');
      // clear form data
      setFormData({
        fullname: '',
        email: '',
        gender: '',
        password: '',
        roles: '',
        department: '',
        confirmpassword: '',
        profile: null
      });
      setImage(null);
     
    }else{
      alert('Error proceeding with registration');
    }
  }catch(error){
    alert(`Registration failed! ${error}`);
  }
    } else {
      console.log(formData)
      alert('Registration not successful, Try again!');
    }

  };

  return (
    <form onSubmit={handleSubmit} className="signup100-form  validate-form signup">
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
      <div className={`wrap-input100 validate-input ${formErrors.fullname ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.fullname}>
        <input className="input100" type="text" name="fullname" value={formData.fullname} onChange={handleInputChange} ref={(el) => (inputRefs.current[0] = el)} onBlur={handleBlur(0)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Full Name</span>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.email ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.email}
      >
        <input className="input100" type="text" name="email" value={formData.email} onChange={handleInputChange} ref={(el) => (inputRefs.current[1] = el)} onBlur={handleBlur(1)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Email</span>
      </div>


      <div className={`wrap-input100 validate-input ${formErrors.gender ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.gender}
      >
         <select className="input100" name="gender" value={formData.gender} onChange={handleInputChange} ref={(el) => (inputRefs.current[3] = el)} onBlur={handleBlur(3)}>
          <option value="">Select Gender....</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.department ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.department}>
        <select className="input100" name="department" value={formData.department} onChange={handleInputChange} ref={(el) => (inputRefs.current[3] = el)} onBlur={handleBlur(3)}>
          <option value="">Select Department....</option>
          <option value="Sales & Marketing">Sales & Marketing</option>
          <option value="Accounting">Accounting</option>
          <option value="IT">IT</option>
          <option value="Production">Production</option>
        </select>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.roles ? 'alert-validate' : 'has-valid-input'}`} data-validate={formErrors.roles}>
        <select className="input100" name="roles" value={formData.roles} onChange={handleInputChange} ref={(el) => (inputRefs.current[4] = el)} onBlur={handleBlur(4)}>
          <option value="">Select Role....</option>
          <option value="SuperAdmin">SuperAdmin</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.password ? 'alert-validate' : 'has-valid-input'}`}
        data-validate={formErrors.password}>
        <input className="input100" type="password" name="password" style={{width:'100%'}} value={formData.password} onChange={handleInputChange} ref={(el) => (inputRefs.current[4] = el)} onBlur={handleBlur(4)} />
        <span className="focus-input100"></span>
        <span className="label-input100">Password</span>
      </div>
      <div className={`wrap-input100 validate-input ${formErrors.confirmpassword ? 'alert-validate' : 'has-valid-input'}`}
        data-validate={formErrors.confirmpassword}>
        <input className="input100" type="password"style={{width:'100%'}}  name="confirmpassword" value={formData.confirmpassword} onChange={handleInputChange} ref={(el) => (inputRefs.current[5] = el)} onBlur={handleBlur(5)} />
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
