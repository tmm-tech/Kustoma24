/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './profile.css';
import {Link} from 'react-router-dom'
import user from '../../Assets/kasper-rasmussen-ecryPq45-_g-unsplash.jpg'
import profile from '../../Assets/img.jpg';
import { activities } from '../../DummyData';
function Profile() {
  
  return (
<Navigation>
<div className="container" style={{maxHeight:'700px', padding:'0px 30px 30px 55px', overflowY:'auto'}}>
        <p className='path'>Profile</p>
        <p className='title'>Dashboard / Profile</p>
        <div className="profile-container">
          <div className="cover-container">
            <img src={user} alt='kastoma24' className='cover-image' />
            <button className='update-cover-button'>
              <i className='fa fa-camera'></i> Update Cover
            </button>
          </div>

          <div className="profile-details">
            <div className="profile-picture"><img src={profile} alt='My Image'/></div>
            <div className="profile-name">Tony Mwangi Mugi</div>
            <div className="profile-email">tonymugi074@gmail.com</div>
            <div className="profile-info">
              <div className='profile-information'>
                <div className="topbar">
                  <h6>Profile</h6>
                  <Link to='/profile setting'><button className='btn-edit'>Edit</button></Link>
                </div>
                <div className="content">
                  <ul>
                    <h6>About</h6>
                    <li>Tony Mwangi Mugi</li>
                    <li>Kustoma24 Admin</li>
                  </ul>
                  <ul>
                    <h6>Contacts</h6>
                    <li>tonymugi074@gmail.com</li>
                    <li>+254 700748919</li>
                  </ul>
                  <ul>
                    <h6>Address</h6>
                    <li>Thika, <address>2106-01000</address></li>
                  </ul>
                </div>
              </div>
              <div className='profile-activity'>
                <h6>Activity</h6>
                <div className='activity-list'>
                  {activities.map((activity)=> (
                    <div key={activity.id} className="activity-item">
                    <div className='circle'></div>
                    <div className='line'></div>
                    <div className="activity-date">
                      <div className="activity-month">{activity.month}</div>
                      <div className="activity-day">{activity.day}</div>
                    </div>
                    <div className='activity-info'>
                      <div className="activity-title">{activity.title}</div>
                      <div className="activity-description">{activity.description}</div>
                    </div>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Navigation>
  )
}

export default Profile