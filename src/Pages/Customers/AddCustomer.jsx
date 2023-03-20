import React, { useState } from 'react';
import './addcustomers.css'
import { FaFilter } from 'react-icons/fa';
import { FaPencilAlt} from 'react-icons/fa';
import Navigation from '../../Components/Navigation/Navigation';
function AddCustomer({onAddCustomer}) {
  const [image, setImage] = useState(null);
  const [formdata, setFormData] = useState({
    email: '',
    full_name: '',
    phone_number: '',
    passwords: '',
    location: '',
    address1: '',
    address2: '',
    zipCode: '',
    oldPassword: '',
    confirmpassword: '',
    profile: null
  });
  const handleImageSelect = (event) => {
    const selectedImage = event.target.files[0];
    console.log(selectedImage)
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      setFormData({
        ...formdata, [event.target.name]: event.target.value
      });
    }

  };
  const handleSave = () => {

  }

  const handleCancel = () => {

    setFormData({
      email: '',
      full_name: '',
      phone_number: '',
      passwords: '',
      location: '',
      address1: '',
      address2: '',
      zipCode: '',
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
                  <input type="text" name="full_name" value={formdata.full_name} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={formdata.email} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="phone_number">Phone</label>
                  <input type="tel" id="phone_number" value={formdata.phone_number} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" value={formdata.location} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="address1">Address line 1</label>
                  <input type="text" id="address1" value={formdata.address1} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="address2">Address line 2 (Optional)</label>
                  <input type="text" id="address2" value={formdata.address2} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="zipCode">Zip code</label>
                  <input type="text" id="zipCode" value={formdata.zipCode} onChange={handleInputChange} />
                </div>
                <div className="wrap_input">
                  <label htmlFor="oldPassword">Default Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formdata.oldPassword}
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
