import { useNavigate } from 'react-router-dom';
import DiaryBlock from './ components/DiaryBlock';
import styles from './DiaryPage.module.scss';
import { useSelector } from 'react-redux';
import { selectFoodIntakeByCategory } from '@/store/features/foodIntake/selectors';
import { ReactComponent as ArrowRight } from '@/assets/svg/arrow-right.svg';
import { mealTypeSrcSets } from '@/utils/mealTypeSrcSets';
import { ROUTES } from '@/constants/routes';

const DiaryPage = () => {
  const navigate = useNavigate();
  const foodIntakeByCategory = useSelector(selectFoodIntakeByCategory);

  return (
    
    <div className={styles.containerDiary}>
      <a onClick={() => navigate(ROUTES.HomePage)} className={styles.BeckHome}>
        <ArrowRight
          width={24}
          height={24}
          style={{ marginRight: '12px' }}
          strokeWidth={2}
        />
        <span className={styles.DiaryArrow}>Diary</span>
      </a>
      <div className={styles.containerBloks}>
        {foodIntakeByCategory.map(({ type, data }) => (
          <DiaryBlock
            mealType={data}
            typeName={type}
            key={type}
            data={foodIntakeByCategory}
            title={type}
            srcSet={mealTypeSrcSets[type]}
          />
        ))}
      </div>
    </div>
  );
};
export default DiaryPage;
