import styles from './DiaryBlock.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Edit } from '@/assets/svg/Edit.svg';
import { nanoid } from 'nanoid';
// import { useSelector } from 'react-redux';
// import { selectNutrientSums } from '@/store/features/foodIntake/selectors';

const DiaryBlock = ({
  alt,
  title,
  Carbonohidrates = '0',
  Protein = '0',
  fat = '0',
  srcSet,
  typeName,
}) => {
  const meal = [
    {
      _id: '650744a45349ba95e795e4eb',
      mealName: 'toast',
      mealType: 'Dinner',
      carbonohidrates: 45,
      protein: 10,
      fat: 110,
      calories: 460,
      consumer: '6506e67b65a5957c6d9cbd33',
      createdAt: '2023-09-17T18:25:40.001Z',
      updatedAt: '2023-09-17T18:25:40.001Z',
    },
    {
      _id: '650744a45349ba95e795e4eb',
      mealName: 'toast',
      mealType: 'Dinner',
      carbonohidrates: 45,
      protein: 10,
      fat: 110,
      calories: 460,
      consumer: '6506e67b65a5957c6d9cbd33',
      createdAt: '2023-09-17T18:25:40.001Z',
      updatedAt: '2023-09-17T18:25:40.001Z',
    },
    {
      _id: '650744a75349ba95e795e4ee',
      mealName: 'toast',
      mealType: 'Dinner',
      carbonohidrates: 45,
      protein: 10,
      fat: 110,
      calories: 460,
      consumer: '6506e67b65a5957c6d9cbd33',
      createdAt: '2023-09-17T18:25:43.236Z',
      updatedAt: '2023-09-17T18:25:43.236Z',
    },

    // {
    //   _id: '650744ad5349ba95e795e4f4',
    //   mealName: 'toast',
    //   mealType: 'Lunch',
    //   carbonohidrates: 45,
    //   protein: 10,
    //   fat: 110,
    //   calories: 460,
    //   consumer: '6506e67b65a5957c6d9cbd33',
    //   createdAt: '2023-09-17T18:25:49.729Z',
    //   updatedAt: '2023-09-17T18:25:49.729Z',
    // },
  ];
  // const items = useSelector(state => state.foodIntake.items);
  function newFood(foodArray) {
    const newArray =
      foodArray.length <= 3
        ? [
            ...foodArray,
            ...Array(1).fill({
              showButton: true,
            }),
            ...Array(3 - foodArray.length).fill({
              mealName: '',
              carbonohidrates: '',
              protein: '',
              fat: '',
            }),
          ]
        : [
            ...foodArray,
            ...Array(1).fill({
              showButton: true,
            }),
          ];
    return newArray;
  }

  const isMobile = useMediaQuery({ maxWidth: 833 });

  return (
    <div>
      <div className={styles.containerBlockHeader}>
        <div className={styles.blockHeader}>
          <img
            src={srcSet[0]}
            srcSet={`${srcSet[0]} 1x, ${srcSet[1]} 2x`}
            height={32}
            width={32}
            alt={alt}
          />
          <h2 className={styles.titleBlockHeader}>{title}</h2>
        </div>
        <div className={styles.itemCalories}>
          <p className={styles.item_1}>
            Carbonohidrates:{' '}
            <span className={styles.caloriesSum}>{Carbonohidrates}</span>
          </p>
          <p className={styles.item_2}>
            Protein: <span className={styles.caloriesSum}>{Protein}</span>
          </p>
          <p className={styles.item_3}>
            Fat: <span className={styles.caloriesSum}>{fat}</span>
          </p>
        </div>
      </div>
      <ol className={`${styles.blocks}`}>
        {newFood(meal).map(el => {
          return !el.showButton ? (
            <li key={nanoid()} className={styles.listProduct}>
              <div className={styles.foodContainer}>
                <div className={styles.containerFoodName}>
                  <h2 className={styles.foodName}>{el.mealName}</h2>
                  {el.mealName && isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit style={{ marginRight: '6px' }} />
                      Edit
                    </button>
                  )}
                </div>
                <div className={styles.caloriesProduct}>
                  {el.mealName && isMobile ? (
                    <>
                      <p className={styles.calorieas}>
                        Carb:{' '}
                        <span style={{ color: '#ffffff' }}>
                          {el.carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        Prot:{' '}
                        <span style={{ color: '#ffffff' }}>{el.protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        Fat: <span style={{ color: '#ffffff' }}>{el.fat}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>
                          {el.carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{el.protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{el.fat}</span>
                      </p>
                    </>
                  )}
                  {el.mealName && !isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit style={{ marginRight: '6px' }} />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </li>
          ) : (
            <li key={nanoid()} className={styles.listProduct}>
              <button name={typeName} className={styles.button}>
                + Record your meal
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default DiaryBlock;
