"use client";

import { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SalesGraph = () => {
  const [categories, setCategories] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {

    //  const demoCategories = [
    //   '2025-10-01',
    //   '2025-10-02',
    //   '2025-10-03',
    //   '2025-10-04',
    //   '2025-10-05',
    //   '2025-10-06',
    //   '2025-10-07',
    //   '2025-10-08',
    //   '2025-10-09',
    //   '2025-10-10'
    // ];
    // const demoSeriesData = [
    //   100.50,  // Sales amount for Oct 1
    //   150.75,  // Oct 2
    //   200.00,  // Oct 3
    //   180.25,  // Oct 4
    //   220.00,  // Oct 5
    //   250.30,  // Oct 6
    //   300.10,  // Oct 7
    //   280.90,  // Oct 8
    //   320.40,  // Oct 9
    //   350.00   // Oct 10
    // ];

    // setCategories(demoCategories);
    // setSeriesData(demoSeriesData);

    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-finna-coming-soon.cloudfunctions.net/getSalesGraphData');
        const data = await response.json();
        // Ensure categories and seriesData are arrays, fallback to empty arrays if undefined
        setCategories(data.categories || []);
        setSeriesData(data.seriesData.map(val => parseFloat(val) || 0) || []);
      } catch (error) {
        console.error('Error fetching sales graph data:', error);
      }
    };
    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'line',
      backgroundColor: '#ffffff',
    },
    title: {
      text: 'Sales Growth Over Time',
      style: { color: '#000000', fontSize: '24px' }
    },
    xAxis: {
      categories: categories,
      labels: {
        style: { color: '#000000' },
        enabled: true 
      },
      title: {
        text: 'Date',
        style: { color: '#000000' }
      }
    },
    yAxis: {
      title: {
        text: 'Amount (USD)',
        style: { color: '#000000' }
      },
      labels: {
        style: { color: '#000000' },
        enabled: true 
      },
      visible: true, 
      gridLineWidth: 1, 
      min: 0 
    },
    series: [{
      name: 'Sales',
      data: seriesData,
      color: '#000000',
      lineWidth: 2, 
      connectNulls: false 
    }],
    legend: {
      itemStyle: { color: '#000000' }
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          fillColor: '#000000',
          lineColor: '#ffffff',
          radius: 4 
        }
      }
    },
    credits: {
      enabled: false 
    }
  };

  return (
    <div className="h-[100vh] w-[90vw] flex items-center justify-center">
      <div className="w-[90%] md:w-[80%] mx-auto py-10">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  </div>
  );
};

export default SalesGraph;