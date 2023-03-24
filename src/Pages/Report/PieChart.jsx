import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const PieChart = ({ revenue, totalCost, profit,color,filter}) => {
  useEffect(() => {
    Highcharts.chart('chart-container', {
      chart: {
        type: 'pie',
      },
      title: {
        text: `${filter.charAt(0).toUpperCase()}${filter.slice(1)} Revenue, Total Cost Profit and Loss Analysis`,
      },
      series: [
        {
          name: 'Sales',
          data: [
            {
              name: 'Revenue',
              y: revenue,
            },
            {
              name: 'Total Cost',
              y: totalCost,
            },
            {
              name: 'Profit',
              y: profit,
              color:color,
            },
            
          ],
        },
      ],
    });
  }, [revenue, totalCost, profit,color,filter]);

  return <div id="chart-container" />;
};

export default PieChart;
