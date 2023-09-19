import styles from './DiaryBlock.module.scss';
// import PropTypes from 'prop-types';

const DiaryBlock = ({
  intakeInfo: { mealType, carbonohidrates, protein, fat },
  srcSet,
}) => {
  const imgSrc = srcSet.split(' ')[0];

  return (
    <div className={styles.ContainerDiary}>
      <div className={styles.title}>
        <img
          className={styles.imgTitle}
          src={imgSrc}
          srcSet={srcSet}
          alt={mealType}
        />
        <p className={styles.titleName}>{mealType}</p>
      </div>
      {!carbonohidrates && !protein && !fat ? (
        <button className={styles.button}>+ Record your meal</button>
      ) : (
        <div className={styles.Calorie}>
          <p className={styles.itetemsCalories}>
            carbonohidrates:{' '}
            <span className={styles.totalCalorie}>{carbonohidrates}</span>
          </p>
          <p className={styles.itetemsCalories}>
            protein: <span className={styles.totalCalorie}>{protein}</span>
          </p>
          <p className={styles.itetemsCalories}>
            fat: <span className={styles.totalCalorie}>{fat}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DiaryBlock;

// DiaryBlock.propTypes = {
//   name: PropTypes.string,
//   srcImg: PropTypes.string,
//   alt: PropTypes.string,
//   buttonName: PropTypes.string,
//   carbonohidrates: PropTypes.string,
//   protein: PropTypes.string,
//   fat: PropTypes.string,
//   srcSet: PropTypes.string,
// };
