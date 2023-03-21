import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';

import './report.css';
function Report() {
  
  return (
    <Navigation>
  <div className="sales-page">
    <div className='top-bar'>
      <div>
        <p className='path'>Reports</p>
        <p className='title'>Dashboard / Reports</p>
      </div>
      <div>
        <div>
          <button>< AiFillFilePdf /></button>
          <button><FaFilter /></button>          
        </div>
      </div>
    </div>

    <div className="chart-container">
      {/* Chart component goes here */}
    </div>

    <div className="summary-table-container">
      <div className="table-header">
        <p>Summary Table</p>
        <button>Export CSV</button>
      </div>

      {/* Summary table component goes here */}
    </div>
  </div>
</Navigation>
  )
}

export default Report
