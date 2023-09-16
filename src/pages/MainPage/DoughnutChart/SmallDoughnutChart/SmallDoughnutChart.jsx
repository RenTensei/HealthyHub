/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './SmallDoughnutChart.module.scss';

ChartJS.register(ArcElement);

// eslint-disable-next-line react/prop-types
const SmallDoughnutChart = ({ nutritionValue, arcColor, content, goal }) => {
  const calculatePercentage = nutritionValue => {
    if (nutritionValue >= goal) {
      return 100;
    }
    const prc = (nutritionValue / goal) * 100;
    return prc;
  };

  const calculateLeft = (nutritionValue, goal) => {
    if (nutritionValue >= goal) {
      return 0;
    }
    const left = goal - nutritionValue;
    return left;
  };

  let borderRad = [50];
  if (nutritionValue >= goal) {
    borderRad = [0];
  }

  const data = {
    datasets: [
      {
        data: [
          calculatePercentage(nutritionValue),
          100 - calculatePercentage(nutritionValue),
        ],
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
      ctx.font = ' 14px';
      ctx.fillStyle = '#B6B6B6';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `${Math.round(calculatePercentage(nutritionValue))}%`,
        xCoor,
        yCoor
      );
    },
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      // console.log(chart.ctx);
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
    <div className={styles.container}>
      <div
        className="doughnut_container"
        style={{
          height: 48,
          width: 48,
        }}
      >
        <Doughnut plugins={[textCenter, backgroundCircle]} data={data} />
      </div>
      <div className={styles.goal_container}>
        <p className={styles.content}>{content}</p>
        <div className={styles.goal_subcontainer}>
          <p className={styles.goal}>
            Goal: <span className={styles.goal_value}>{goal}</span>
          </p>
          <p className={styles.left}>
            Left:{' '}
            <span className={styles.left_value}>
              {calculateLeft(nutritionValue, goal)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallDoughnutChart;
