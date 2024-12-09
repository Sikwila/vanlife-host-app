import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ReviewsGraph = () => {
  // Data for the bar chart
  const data = {
    labels: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'],
    datasets: [
      {
        label: 'Percentage',
        data: [70, 15, 13.4, 2, 0.6], 
        backgroundColor: ['#FF8C38', '#FFB573', '#FF8C38', '#FF8C38', '#FF8C38'],
        borderRadius: 5,
      },
    ],
  };

  // Chart options with animation
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'black', 
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          callback: (value) => `${value}%`,
          color: 'black', 
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1000, // 1-second animation duration
      easing: 'easeOutBounce', // Bounce effect
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReviewsGraph;
