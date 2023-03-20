import React, { useState } from 'react'
import { FaPowerOff, FaExpandArrowsAlt, FaCog, FaBell } from 'react-icons/fa';
import { BsCart4, BsBag, BsPeople, BsClipboardData, BsBasket } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md'
import user from '../../Assets/img.jpg';
import logo from '../../Assets/landscape.png'
import './navigation.css';
function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <nav className={`side-nav ${isExpanded ? 'expanded' : ''}`}>
            {isExpanded ? null
                :
                <div className="image-logo">
                    <img src={logo} alt="" />
                </div>
            }
            <div className='user-info'>
                <img src={user} alt='kastoma24' />
                <span className='info-text' style={{ display: isExpanded ? 'none' : 'inline' }}>
                    Welcome
                    <br />
                    <span className='myname'>Tony Mwangi</span>
                </span>
            </div>
            <ul>
                <li>
                    <Link to='/'>
                        <MdDashboard />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/sales'>
                        <BsCart4 />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Sales</span>
                    </Link>
                </li>
                <li>
                    <Link to='/customers'>
                        <BsPeople />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to='/products'>
                        <BsBag />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Products</span>
                    </Link>
                </li>
                <li>
                    <Link to='/categories'>
                        <BsBasket />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Categories</span>
                    </Link>
                </li>
                <li>
                    <Link to='/report'>
                        <BsClipboardData />
                        <span style={{ display: isExpanded ? 'none' : 'inline' }}>Reports</span>
                    </Link>
                </li>
            </ul>
            <div className={`side-nav-bottom ${isExpanded ? '' : 'expanded'}`}>
                <Link to='/profile'><FaCog /></Link>
                <Link to='#'><FaExpandArrowsAlt /></Link>
                <Link to='#'><FaBell complete /></Link>
                <Link to='/login'><FaPowerOff /></Link>
            </div>
            <div className="toggle-btn" onClick={handleToggle}>
                {isExpanded ? <i className="fa fa-bars"></i> : <i className="fa fa-close"></i>}
            </div>
        </nav>
    )
}

export default Sidebar
