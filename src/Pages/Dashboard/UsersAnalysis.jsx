import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './usersanalysis.css';
import {users} from '../../DummyData'
const UserAnalysis = () => {
  // Filter user data for active and inactive users
  const activeUsers = users.filter(user => user.status === 'active');
  const inactiveUsers = users.filter(user => user.status === 'inactive');

  // Create chart data
  const chartData = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        label: 'User Analysis by Status',
        data: [activeUsers.length, inactiveUsers.length],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
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
    <div className="user-analysis-container">
      <h2 className="user-analysis-title">User Analysis by Status</h2>
      <div className="user-analysis-chart">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default UserAnalysis;
