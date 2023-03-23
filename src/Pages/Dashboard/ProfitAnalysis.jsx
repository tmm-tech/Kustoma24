import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const ProfitAnalysis = ({ salesData }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Calculate revenue, total cost, profit, and loss
    const revenue = salesData
      .filter((sale) => sale.status === 'complete')
      .reduce((total, sale) => total + sale.total_price, 0);
    const totalCost = salesData.reduce((total, sale) => total + sale.price, 0);
    const profit = revenue - totalCost;
    const loss = totalCost - revenue;

    // Set chart options
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Revenue,Total Cost Profit and Loss',
      },
      series: [
        {
          name: 'Sales',
          data: [
            {
              name: 'Revenue',
              y: revenue,
              color: '#2A3F54',
            },
            {
              name: 'Total Cost',
              y: totalCost,
              color: '#F0AD4E',
            },
            {
              name: 'Profit',
              y: profit,
              color: '#2A3F54',
            },
            {
              name: 'Loss',
              y: loss,
              color: '#d9534f',
            },
          ],
        },
      ],
    };

    setChartOptions(options);
  }, [salesData]);

  return (
   
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
   
  );
};

export default ProfitAnalysis;
