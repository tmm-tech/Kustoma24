import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './profile_settings.css';
import user from '../../Assets/img.jpg';
import { FaPencilAlt, FaUsers, FaTrashAlt } from 'react-icons/fa';
function ProfileSettings() {

  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [image, setImage] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  function handleClick(tab) {
    setActiveTab(tab);
  }
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

  const handleNewPasswordBlur = (event) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(event.target.value);
    setPasswordError(
      isValidPassword
        ? ""
        : "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number"
    );
  };

  const handlePasswordStrength = (event) => {
    const password = event.target.value;
    let strength = 0;

    // Check password length
    if (password.length >= 8) {
      strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength += 1;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      strength += 1;
    }

    setPasswordStrength(strength);
  };
  return (
    <Navigation>
      <div className="container">
        <p className='path'>Profile Settings</p>
        <p className='title'>Dashboard / Profile Settings</p>
        <div className="profile-settings-container">
          <div className="navigation">
            <ul>
              <li className={activeTab === 'profile' ? 'active' : ''}
                onClick={() => handleClick('profile')}><FaUsers /> Profile Settings</li>
              <li className={activeTab === 'delete' ? 'active' : ''}
                onClick={() => handleClick('delete')}><FaTrashAlt /> Delete Account</li>
            </ul>
          </div>
          {activeTab === 'profile' && (
            <div className="profile-settings">
              <h4>Basic Information</h4>
              <form onSubmit={handleSave}>
                <div className="wrap_input">
                  <label htmlFor="name">Profile</label>
                  <div className="profile-image-container signup100">
                    <div className="profile-image">
                      {image ? (
                        <img src={image} alt="profile" />
                      ) : (
                        <img src={user} alt="profile" />
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
                  <label htmlFor="oldPassword">Current Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    value={formdata.oldPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="wrap_input">
                  <label htmlFor="passwords">New Password</label>
                  <div className='wrap_password'>
                    <input
                      type="password"
                      name="passwords"
                      value={formdata.passwords}
                      onChange={handleInputChange}
                      onBlur={handleNewPasswordBlur}
                      onKeyUp={handlePasswordStrength}
                    />
                    {passwordStrength !== null && (
                      <div className="password-strength">
                        <p>Password strength: {passwordStrength}</p>
                        <div className="progress-bar">
                          <div
                            className="progress"
                            style={{ width: `${passwordStrength}%`,backgroundColor:'#2A3F54' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="wrap_input">
                  <label htmlFor="confirmpassword">Confirm New Password</label>
                  <div className='display-confirm'>
                    <input
                      type="password"
                      name="confirmpassword"
                      value={formdata.confirmpassword}
                      onChange={handleInputChange}
                    />
                    <div className="password-requirements">
                      <p>Password requirements:</p>
                      <ul>
                        <li>Minimum 8 characters long - the more, the better</li>
                        <li>At least one lowercase character</li>
                        <li>At least one uppercase character</li>
                        <li>At least one number or symbol</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {passwordError && (
                  <div className="password-error">{passwordError}</div>
                )}

                <div className="wrap_button">
                  <button type="button" onClick={handleCancel}>Cancel</button>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          )}
          {activeTab === 'delete' && (
            <div className="delete-container">
              <h2>Delete your account</h2>
              <p>When you delete your account, you lose access to Kustoma24 account services, and we permanently delete your personal data.</p>
              <p>Are you sure you want to close your account?</p>
              <button id="delete-btn">Delete Account</button>
              <div class="confirmation">
                <p>Confirm that you want to delete your account:</p>
                <button id="confirm-btn">Yes, I'm sure</button>
              </div>
            </div>
          )}
        </div>
      </div >
    </Navigation >
  )
}

export default ProfileSettings
