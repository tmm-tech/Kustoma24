import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './profitanalysis.css';
import { sales } from '../../DummyData';
const ProfitAnalysis = () => {
  // Calculate total revenue, cost, profit, and loss
  const totalRevenue = sales.reduce((acc, sale) => acc + sale.total_price, 0);
  const totalCost = sales.reduce((acc, sale) => acc + sale.price * sale.quantity, 0);
  const totalProfit = totalRevenue - totalCost;
  const totalLoss = sales.filter(sale => sale.status === 'refunded').reduce((acc, sale) => acc + sale.total_price, 0);

  // Create chart data
  const chartData = {
    labels: ['Revenue', 'Cost', 'Profit', 'Loss'],
    datasets: [
      {
        label: 'Sales Analysis',
        data: [totalRevenue, totalCost, totalProfit, totalLoss],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Create chart options
  const chartOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="sales-analysis-container">
      <h2 className="sales-analysis-title">Sales Analysis</h2>
      <div className="sales-analysis-chart">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ProfitAnalysis;
