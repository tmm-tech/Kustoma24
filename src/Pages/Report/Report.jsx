import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import './report.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Report() {
  const [filter, setFilter] = useState('weekly');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.containe(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownRef]);
  const handleFilterClick = (event, filter) => {
    event.preventDefault();
    setFilter(filter);
    setShowDropdown(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  return (
    <Navigation>
      <div className="container">
        <div className="report-page">
          <div className='top-bar'>
            <div>
              <p className='path'>Reports</p>
              <p className='title'>Dashboard / Reports</p>
            </div>
            <div>
              <div>
                <button>< AiFillFilePdf /></button>
                <div className='dropdown' ref={dropdownRef} style={{ display: showDropdown ? 'block' : 'none' }}>
                  <button onClick={(e) => handleFilterClick(e, 'weekly')} className={filter === 'weekly' ? 'active' : ''}>Weekly</button>
                  <button onClick={(e) => handleFilterClick(e, 'monthly')} className={filter === 'monthly' ? 'active' : ''}>Monthly</button>
                  <button onClick={(e) => handleFilterClick(e, 'quarterly')} className={filter === 'quarterly' ? 'active' : ''}>Quarterly</button>
                  <button onClick={(e) => handleFilterClick(e, 'yearly')} className={filter === 'yearly' ? 'active' : ''}>Yearly</button>
                </div>
                <button onClick={toggleDropdown}><FaFilter /></button>
                </div>
            </div>
          </div>
          <div className="chart-container">
            {/* Highcharts component goes here */}
          </div>
          <div className="summary-table-container">
            {/* Summary table component goes here */}
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Report;
