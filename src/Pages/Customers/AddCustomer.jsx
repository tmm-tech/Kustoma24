import React, { useState } from 'react';
import './addcustomers.css'
import { FaFilter } from 'react-icons/fa';
import { FaPencilAlt} from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
import {storage} from '../../Components/Firebase/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from "uuid";
import {user} from '../../DummyData';
import { useSelector } from 'react-redux';
function AddCustomer() {
  const users= useSelector(state => state.user);
  const [image, setImage] = useState(null);
  const [customer,setcustomers] = useState(user);
  const [formdata, setFormData] = useState({
    email: '',
    fullname: '',
    phonenumber: '',
    passwords: '',
    country: '',
    DOB: '',
    confirmpassword: '',
    profile: null
  });
  const handleImageSelect = (event) => {
    const selectedImage = event.target.files[0];
    console.log(selectedImage)
    const imageRef = ref(storage, `Profile/${selectedImage.name + v4()}`);
    uploadBytes(imageRef,selectedImage).then (()=>{
      console.log('Uploaded')
      getDownloadURL(imageRef).then((url)=>{
        console.log(url)
        setFormData({
          ...formdata, [event.target.name]: event.target.value, profile:url
        });
      })
    })
    setImage(URL.createObjectURL(selectedImage));

  };
  const handleSave = async(event) => {
    event.preventDefault();
    setcustomers([...customer,formdata])
    try {
      const response = await fetch(`http://localhost:4040/customer/customer/${users.roles}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      // const data = await response.json();
      if (response.ok) {
        // Login successful
       
        alert('Registration submitted successfully!');
    // clear form data
    setFormData({
      email: '',
      fullname: '',
      phonenumber: '',
      passwords: '',
      country: '',
      DOB: '',
      confirmpassword: '',
      profile: null
    });
    setImage(null);
    window.location.href="/customers";
  }
}catch(error){
  console.log(error)
}
  }

  const handleCancel = () => {

    setFormData({
      email: '',
      fullname: '',
      phonenumber: '',
      passwords: '',
      country: '',
      DOB: '',
      confirmpassword: '',
      profile: null
    });
    window.location.href = '/profile'
  }
  const handleInputChange = (event) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Navigation>
      <div className="container" style={{ overflowY: 'scroll', height: '700px' }}>
        <div className="products-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Add Customers</p>
              <p className='title'>Dashboard / Add Customers</p>
            </div>
            <div>
              <div>
                <button><FaFilter /></button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSave}>
                <div className="wrap_input">
                  <label htmlFor="name">Profile</label>
                  <div className="profile-image-container signup100">
                    <div className="profile-image">
                      {image ? (
                        <img src={image} alt="profile" />
                      ) : (
                        <i className="fas fa-user-circle fa-7x"></i>
                      )}
                      <div className="camera-icon">
                        <label htmlFor="file-input">
                          <FaPencilAlt />
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

                </div>
                <div className="wrap_input">
                  <label htmlFor="full_name">Name</label>
                  <input type="text" name="fullname" value={formdata.fullname} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={formdata.email} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="phonenumber">Phone</label>
                  <input type="tel" name="phonenumber" value={formdata.phonenumber} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" value={formdata.country} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="gender">Gender</label>
                  <input type="text" name="gender" value={formdata.gender} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="DOB">Date of birth</label>
                  <input type="date" name="DOB" value={formdata.DOB} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="passwords">Default Password</label>
                  <input
                    type="password"
                    name="passwords"
                    value={formdata.passwords}
                    onChange={handleInputChange}
                  />
                </div>   
                <div className="wrap_button">
                  <button type="button" onClick={handleCancel}>Cancel</button>
                  <button type="submit">Save</button>
                </div>
              </form>
        </div>
      </div>
    </Navigation>
  )
}

export default AddCustomer
