import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
const UsersAnalysis = ({ data }) => {
  const  activeCount = data.filter(user => user.status === 'active').length;
  const inactiveCount = data.filter(user => user.status === 'inactive').length;
    // set up options
    const options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Users Analysis',
      },
      series: [
        {
          name: 'Status',
          colorByPoint:true,
          data: [
            { name: 'Active', y: activeCount,color:'#2A3F54'},
            { name: 'Inactive', y: inactiveCount, color:'#d9534f'},
          ],
        }],
        };
    
 
  return (

      <HighchartsReact highcharts={Highcharts} options={options}/>
  );
}

export default UsersAnalysis;
