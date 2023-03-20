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
        <div className='chart-container'>
          {/* <Bar data={chartData} /> */}
        </div>
        <div className='summary-table-container'>
          {/* <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Sales (Ksh.)</th>
              </tr>
            </thead>
            <tbody>
              {/* {summaryTableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>${data.value.toFixed(2)}</td>
                </tr>
              ))} 
            </tbody>
          </table> */}
        </div>
      </div>
    </Navigation>
  )
}

export default Report
