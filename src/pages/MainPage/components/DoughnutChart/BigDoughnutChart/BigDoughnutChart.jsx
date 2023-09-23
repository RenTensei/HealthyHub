import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import styles from "./BigDoughnutChart"
ChartJS.register(ArcElement);

// eslint-disable-next-line react/prop-types
const BigDoughnutChart = ({ calories }) => {
  let arcColor = 'rgba(69, 255, 188, 1)';
  const calculateColories = calories => {
    if (calories >= 1700) {
      arcColor = 'red';
      return 100;
    }
    const prc = (calories / 1700) * 100;
    return prc;
  };

  let borderRad = [50];
  if (calories >= 1700) {
    borderRad = [0];
    arcColor = 'red';
  }

  const data = {
    datasets: [
      {
        data: [calculateColories(calories), 100 - calculateColories(calories)],
        backgroundColor: [arcColor, 'rgba(41, 41, 40, 1)'],
        borderColor: ['rgba(69, 255, 188, 0)'],
        borderRadius: borderRad,
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
      ctx.font = '32px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(calories, xCoor, yCoor - 12);

      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#B6B6B6';
      ctx.fillText('calories', xCoor, yCoor + 15);
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
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

export default BigDoughnutChart;
