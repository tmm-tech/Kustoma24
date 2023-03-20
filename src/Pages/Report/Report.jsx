import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';
import { Bar } from "react-chartjs-2";
import { sales } from '../../DummyData';
import './report.css';
function Report() {
  const [filter, setFilter] = useState('weekly');

  const filteredSales = () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), 0, 1);
    const lastDay = new Date(today.getFullYear(), 11, 31);

    if (filter === 'monthly') {
      return sales.filter(
        (sale) =>
          sale.date.getMonth() === today.getMonth() &&
          sale.date.getFullYear() === today.getFullYear()
      );
    } else if (filter === 'quarterly') {
      return sales.filter(
        (sale) =>
          sale.date >=
          new Date(today.getFullYear(), today.getMonth() - 3, 1) &&
          sale.date <= today
      );
    } else if (filter === 'yearly') {
      return sales.filter(
        (sale) => sale.date >= firstDay && sale.date <= lastDay
      );
    } else {
      // weekly
      return sales.filter(
        (sale) =>
          sale.date >= new Date(today.getFullYear(), today.getMonth(), 1) &&
          sale.date <= today
      );
    }
  };

  const chartData = {
    labels: ['Complete', 'Refunded', 'Pending'],
    datasets: [
      {
        label: 'Sales',
        data: [
          filteredSales().reduce(
            (sum, sale) => sum + (sale.status === 'complete' ? sale.price : 0),
            0
          ),
          filteredSales().reduce(
            (sum, sale) => sum + (sale.status === 'refunded' ? sale.price : 0),
            0
          ),
          filteredSales().reduce(
            (sum, sale) => sum + (sale.status === 'pending' ? sale.price : 0),
            0
          ),
        ],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
      },
    ],
  };

  const summaryTableData = [
    {
      title: 'Complete Sales',
      value: filteredSales().reduce(
        (sum, sale) => sum + (sale.status === 'complete' ? sale.price : 0),
        0
      ),
    },
    {
      title: 'Refunded Sales',
      value: filteredSales().reduce(
        (sum, sale) => sum + (sale.status === 'refunded' ? sale.price : 0),
        0
      ),
    },
    {
      title: 'Pending Sales',
      value: filteredSales().reduce(
        (sum, sale) => sum + (sale.status === 'pending' ? sale.price : 0),
        0
      ),
    },
    {
      title: 'Total Sales',
      value: filteredSales().reduce((sum, sale) => sum + sale.price, 0),
    },
  ];
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
              <button onClick={()=>setFilter('weekly')}><FaFilter /></button>
              {filter !== 'weekly' && (
                <div className="filter-dropdown">
                  <button onClick={()=> setFilter('monthly')}>Monthly</button>
                  <button onClick={()=> setFilter('quarterly')}>Quarterly</button>
                  <button onClick={()=> setFilter('yearly')}>Yearly</button>
                  </div>
              )}
            </div>
          </div>
        </div>
        <div className='chart-container'>
          <Bar data={chartData}/>
        </div>
        <div className='summary-table-container'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Sales (Ksh.)</th>
              </tr>
            </thead>
            <tbody>
              {summaryTableData.map((data, index) =>(
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>${data.value.toFixed(2)}</td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </Navigation>
  )
}

export default Report
