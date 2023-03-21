import React from 'react'
import moment from 'moment';
import { Bar } from 'react-chartjs-2';
import './salesanalysis.css'
import {sales} from '../../DummyData.js';
function SalesAnalysis() {
  // Filter sales data for this week
  const thisWeekSalesData = sales.filter(sale => moment(sale.date).isoWeek() === moment().isoWeek());

  // Calculate total sales, refunds, and pending sales for this week
  const totalSales = thisWeekSalesData.reduce((acc, sale) => sale.status === 'completed' ? acc + sale.total_price : acc, 0);
  const totalRefunds = thisWeekSalesData.reduce((acc, sale) => sale.status === 'refunded' ? acc + sale.total_price : acc, 0);
  const totalPendingSales = thisWeekSalesData.reduce((acc, sale) => sale.status === 'pending' ? acc + sale.total_price : acc, 0);

  // Create chart data
  const chartData = {
    labels: ['Total Sales', 'Total Refunds', 'Total Pending Sales'],
    datasets: [
      {
        label: 'Sales Analysis for this Week',
        data: [totalSales, totalRefunds, totalPendingSales],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Create chart options
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="sales-analysis-container">
      <h2 className="sales-analysis-title">Sales Analysis for this Week</h2>
      <div className="sales-analysis-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

export default SalesAnalysis
