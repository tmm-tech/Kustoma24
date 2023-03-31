import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import {sales} from '../../DummyData';
import './report.css';
import PieChart from './PieChart';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Report() {
  const [filter, setFilter] = useState('monthly');
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
  const chartRef = useRef(null);
  useEffect(()=>{
    if (chartRef.current){
      chartRef.current.chart.reflow();
    }
  },[]);
  const filteredSalesData = sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    if (filter === 'weekly') {
      const firstDayOfWeek = new Date(currentYear, currentMonth, currentDay - currentDate.getDay());
      const lastDayOfWeek = new Date(currentYear, currentMonth, currentDay + (6 - currentDate.getDay()));
      return saleDate >= firstDayOfWeek && saleDate <= lastDayOfWeek;
    } else if (filter === 'monthly') {
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      return saleDate >= firstDayOfMonth && saleDate <= lastDayOfMonth;
    } else if (filter === 'quarterly') {
      const quarter = Math.floor(currentMonth / 3);
      const firstDayOfQuarter = new Date(currentYear, quarter * 3, 1);
      const lastDayOfQuarter = new Date(currentYear, quarter * 3 + 3, 0);
      return saleDate >= firstDayOfQuarter && saleDate <= lastDayOfQuarter;
    } else if (filter === 'yearly') {
      const firstDayOfYear = new Date(currentYear, 0, 1);
      const lastDayOfYear = new Date(currentYear, 11, 31);
      return saleDate >= firstDayOfYear && saleDate <= lastDayOfYear;
    }
    else{
      return saleDate;    
    }
  });

   const Baroptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: `${filter.charAt(0).toUpperCase()}${filter.slice(1)} Sales Analysis`
  },
  yAxis: {
    title: {
      text: 'Total Price'
    }
  },
  xAxis: {
    categories: filteredSalesData.map((sale) => {
      const date = new Date(sale.date);
      const month = date.toLocaleString('en-US', { month: 'long' });
      return month;
    }),
    title: {
      text: 'Month'
    }
  },
  series: [
    {
      name: 'Complete',
      color: '#2A3F54',
      pointWidth: 10,
      data: filteredSalesData.filter((sale) => sale.status === 'complete').map((sale) => sale.price)
    },
    {
      name: 'Pending',
      color: '#FFB800',
      pointWidth: 10,
      data: filteredSalesData.filter((sale) => sale.status === 'pending').map((sale) => sale.price)
    },
    {
      name: 'Refunded',
      color: '#D9534F',
      pointWidth: 10,
      data: filteredSalesData.filter((sale) => sale.status === 'refunded').map((sale) => sale.price)
    }
  ]
};
// Calculate revenue, total cost, profit, and loss
const revenue = filteredSalesData.reduce((total, sale) => total + sale.total_price, 0);
const totalCost = filteredSalesData.reduce((total, sale) => total + sale.price, 0);
const profit = revenue - totalCost; 
const completeSales = filteredSalesData.filter(sale => sale.status === "complete");
const refundedSales = filteredSalesData.filter(sale => sale.status === "refunded");
const pendingSales = filteredSalesData.filter(sale => sale.status === "pending");
const totalCompleteSales = completeSales.reduce((total, sale) => total + sale.total_price, 0);
const totalRefundedSales = refundedSales.reduce((total, sale) => total + sale.total_price, 0);
const totalPendingSales = pendingSales.reduce((total, sale) => total + sale.total_price, 0);

const color = profit < 0 ? 'red' : 'green';
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
          <HighchartsReact highcharts={Highcharts} options={Baroptions} />
          <PieChart revenue={revenue} totalCost={totalCost} profit={profit} color={color} filter={filter}/>
          </div>
          <div className="summary-table-container">
            <table className='report_table'>
              <thead>
                <tr >
                  <th>Sales Status</th>
                  <th>Number of Sales</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete</td>
                  <td>{filteredSalesData.filter((sale) => sale.status === 'complete').length}</td>
                  <td>Ksh {totalCompleteSales.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Pending</td>
                  <td>{filteredSalesData.filter((sale) => sale.status === 'pending').length}</td>
                  <td>Ksh {totalPendingSales.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Refunded</td>
                  <td>{filteredSalesData.filter((sale) => sale.status === 'refunded').length}</td>
                  <td>Ksh {totalRefundedSales.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <table className='report_table'>
              <thead>
                <tr>
                  <th>Analysis</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue</td>
                  <td>Ksh. {revenue.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td>Ksh. {totalCost.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Profit</td>
                  <td style={{color:color}}>Ksh. {profit.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Report;
