import React,{useRef,useEffect} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const SalesAnalysis = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.reflow();
    }
  }, [data]);

  const Baroptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Sales Analysis'
    },
    yAxis: {
      categories: data.map((sale) => sale.total_price),
      title: {
        text: 'Total Price'
      }
    },
    xAxis: {
      categories: data.map((sale) => {
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
        pointWidth:10,
        data: data.filter((sale) => sale.status === 'complete').map((sale) => sale.price)
      },
      {
        name: 'Pending',
        color: '#FFB800',
        pointWidth:10,
        data: data.filter((sale) => sale.status === 'pending').map((sale) => sale.price)
      },
      {
        name: 'Refunded',
        color: '#D9534F',
        pointWidth:10,
        data: data.filter((sale) => sale.status === 'refunded').map((sale) => sale.price)
      }
    ]
  };

  return (
    <>
    <HighchartsReact highcharts={Highcharts} options={Baroptions} />
    </>

  );
};
export default SalesAnalysis;