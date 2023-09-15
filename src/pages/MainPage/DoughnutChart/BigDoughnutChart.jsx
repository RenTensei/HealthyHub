import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

// eslint-disable-next-line react/prop-types
const DoughnutChart = ({ calories }) => {
  const data = {
    datasets: [
      {
        data: [77, 23],
        backgroundColor: ['rgba(69, 255, 188, 1)', 'rgba(41, 41, 40, 1)'],
        borderColor: ['rgba(69, 255, 188, 0)'],
        borderRadius: [50, -50],
        cutout: '80%',
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = 'bolder 32px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(calories, xCoor, yCoor - 18);

      ctx.font = 'bolder 14px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('calories', xCoor, yCoor + 10);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      console.log(chart.ctx);
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <div
      className="doughnut"
      style={{
        height: 168,
        width: 168,
      }}
    >
      <Doughnut plugins={[textCenter, backgroundCircle]} data={data} />
    </div>
  );
};

export default DoughnutChart;
