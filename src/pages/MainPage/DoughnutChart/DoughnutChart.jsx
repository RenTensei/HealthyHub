import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

const data = {
  labels: ['Red'],
  datasets: [
    {
      label: '# of Votes',
      data: [77, 23],
      backgroundColor: ['rgba(69, 255, 188, 1)', 'rgba(41, 41, 40, 1)'],
      borderColor: ['rgba(69, 255, 188, 1)'],
      borderRadius: [50, 0],
      borderWidth: 1,
      responsive: false,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};

const DoughnutChart = () => {
  return (
    <div
      className="doughnut"
      style={{
        height: 168,
        width: 168,
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
