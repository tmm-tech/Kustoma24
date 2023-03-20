import React from 'react'
import {FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import user from '../../Assets/img.jpg';
import './navigation.css';
function TopNav() {
  

  return (
    <nav className='top-nav'>
    <div className='user-info'>
        <FaBell />
        <Link to='/profile'><img className='user-image' src={user} alt='User Avatar' /></Link>
        <div className='user-details'>
            <div className='user-name'>Tony Mwangi</div>
            <div className='user-role'>
                Admin 
            </div>
        </div>
    </div>
</nav>
  )
}

export default TopNav
