/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './profile.css';
import {Link} from 'react-router-dom'
import userprofile from '../../Assets/kasper-rasmussen-ecryPq45-_g-unsplash.jpg'
import { activities } from '../../DummyData';
import user from '../../Assets/img.jpg';
import LoadingPage from '../../Components/Loading/LoadingPage';
import { useSelector } from 'react-redux';
function Profile() {
 
   const users= useSelector(state => state.user);
if(!users){
  return <LoadingPage/>; 
}
  return (
<Navigation>
<div className="container" style={{maxHeight:'700px', padding:'0px 30px 30px 55px', overflowY:'auto'}}>
        <p className='path'>Profile</p>
        <p className='title'>Dashboard / Profile</p>
        <div className="profile-container">
          <div className="cover-container">
            <img src={userprofile} alt='kastoma24' className='cover-image' />
            <button className='update-cover-button'>
              <i className='fa fa-camera'></i> Update Cover
            </button>
          </div>

          <div className="profile-details">
            <div className="profile-picture"><img src={user} alt='My Image'/></div>
            <div className="profile-name">{users.fullname}</div>
            <div className="profile-email">{users.email}</div>
            <div className="profile-info">
              <div className='profile-information'>
                <div className="topbar">
                  <h6>Profile</h6>
                  <Link to='/profile setting'><button className='btn-edit'>Edit</button></Link>
                </div>
                <div className="content">
                  <ul>
                    <h6>About</h6>
                    <li>{users.fullname}</li>
                    <li>{users.roles}</li>
                  </ul>
                  <ul>
                    <h6>Contacts</h6>
                    <li>{users.email}</li>
                    <li>+254 700748956</li>
                  </ul>
                  <ul>
                    <h6>Department</h6>
                    <li>{users.department}</li>
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
