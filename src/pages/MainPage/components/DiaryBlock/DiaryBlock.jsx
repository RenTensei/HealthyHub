import styles from './DiaryBlock.module.scss';
import PropTypes from 'prop-types';

const DiaryMainComponnent = ({
  name,
  srcImg,
  alt,
  buttonName,
  Carbonohidrates,
  Protein,
  Fat,
  srcSet,
}) => {
  return (
    <div className={styles.ContainerDiary}>
      <div className={styles.title}>
        <img
          className={styles.imgTitle}
          src={srcImg}
          srcSet={srcSet}
          alt={alt}
        />
        <h3 className={styles.titleName}>{name}</h3>
      </div>
      {!Carbonohidrates && !Protein && !Fat ? (
        <button className={styles.button}>{buttonName}</button>
      ) : (
        <div className={styles.Calorie}>
          <p className={styles.itetemsCalories}>
            Carbonohidrates:{' '}
            <span className={styles.totalCalorie}>{Carbonohidrates}</span>
          </p>
          <p className={styles.itetemsCalories}>
            Protein: <span className={styles.totalCalorie}>{Protein}</span>
          </p>
          <p className={styles.itetemsCalories}>
            Fat: <span className={styles.totalCalorie}>{Fat}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DiaryMainComponnent;

DiaryMainComponnent.propTypes = {
  name: PropTypes.string,
  srcImg: PropTypes.string,
  alt: PropTypes.string,
  buttonName: PropTypes.string,
  Carbonohidrates: PropTypes.string,
  Protein: PropTypes.string,
  Fat: PropTypes.string,
  srcSet: PropTypes.string,
};
