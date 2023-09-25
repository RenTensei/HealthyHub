/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './SmallDoughnutChart.module.scss';
import { useMemo } from 'react';

ChartJS.register(ArcElement);

// eslint-disable-next-line react/prop-types
const SmallDoughnutChart = ({ nutritionValue, arcColor, content, goal }) => {
  const calculatedPercentage = useMemo(() => {
    if (nutritionValue >= goal) return 100;
    return Math.round((nutritionValue / goal) * 100);
  }, [goal, nutritionValue]);

  // console.log(content, ':', calculatedPercentage);

  const borderRad = nutritionValue >= goal ? [0] : [50];

  const data = {
    datasets: [
      {
        data: [calculatedPercentage, 100 - calculatedPercentage],
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
      ctx.font = '14px';
      ctx.fillStyle = '#B6B6B6';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${calculatedPercentage}%`, xCoor, yCoor);
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
              {nutritionValue >= goal ? 0 : goal - nutritionValue}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallDoughnutChart;
