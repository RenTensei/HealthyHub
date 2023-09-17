import { Link } from 'react-router-dom';
import DiaryBlock from './ components/DiaryBlock';
import styles from './DiaryPage.module.scss';

const DiaryPage = () => {
  return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerDiary}>
        <Link to={'/'} className={styles.BeckHome}>
          <img
            src="/public/arrow-right.svg"
            alt="arrow right"
            className={styles.arrowBack}
          />
          Diary
        </Link>
        <div className={styles.containerBloks}>
        <DiaryBlock
        className={styles.containerBloks_1}
          img="/Breakfast.png"
          srcSet="/Breakfast.png, /Breakfast@2x.png"
          title={'Breakfast'}
          product={'kklklk'}
        />
        <DiaryBlock className={styles.containerBloks_2}  img="/Lunch.png" srcSet="/Lunch.png, /Lunch@2x.png" />
        <DiaryBlock className={styles.containerBloks_3} img="/Dinner.png" srcSet="/Dinner.png, /Dinner@2x.png" />
        <DiaryBlock className={styles.containerBloks_4} img="/Snack.png" srcSet="/Snack.png, /Snack@2x.png" />
        </div>
      </div>
    </section>
  );
};
export default DiaryPage;
