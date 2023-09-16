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
        <DiaryBlock />
        <DiaryBlock />
        <DiaryBlock />
        <DiaryBlock />
      </div>
    </section>
  );
};
export default DiaryPage;
