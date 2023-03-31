import React from 'react'
import {FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import user from '../../Assets/img.jpg';
import './navigation.css';
import { useSelector } from 'react-redux';
function TopNav() {
  
  const users= useSelector(state => state.user);
  return (
    <nav className='top-nav'>
    <div className='user-info'>
        <FaBell />
        <Link to='/profile' title='Profile'><img className='user-image' src={user} alt='User Avatar' /></Link>
        <div className='user-details'>
            <div className='user-name'>{users.fullname}</div>
            <div className='user-role'>
                {users.roles} 
            </div>
        </div>
    </div>
</nav>
  )
}

export default TopNav
