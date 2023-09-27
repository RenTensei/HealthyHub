import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

import styles from './DiaryBlock.module.scss';

import { ReactComponent as Edit } from '@/assets/svg/Edit.svg';
import { useModalContext } from '@/hooks/useModalContext';

const DiaryBlock = ({ alt, title, srcSet, typeName, mealType }) => {
  let toralCarbonohidrates = 0;
  let totalProtein = 0;
  let totalFat = 0;

  function sumTotal(meal) {
    for (let i = 0; i < meal.length; i++) {
      toralCarbonohidrates += meal[i].carbonohidrates;
      totalProtein += meal[i].protein;
      totalFat += meal[i].fat;
    }
    return toralCarbonohidrates, totalProtein, totalFat;
  }
  sumTotal(mealType);

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

  const { openModal } = useModalContext();

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
          <p className={styles.item}>
            Carbonohidrates:{' '}
            <span className={styles.caloriesSum}>{toralCarbonohidrates}</span>
          </p>
          <p className={styles.item}>
            Protein: <span className={styles.caloriesSum}>{totalProtein}</span>
          </p>
          <p className={styles.item}>
            Fat: <span className={styles.caloriesSum}>{totalFat}</span>
          </p>
        </div>
      </div>

      <ol className={styles.blocks}>
        {newFood(mealType).map(el =>
          !el.showButton ? (
            <li key={nanoid()} className={styles.listProduct}>
              <div className={styles.foodContainer}>
                <div className={styles.containerFoodName}>
                  <h2 className={styles.foodName}>{el.mealName}</h2>
                  {el.mealName && isMobile && (
                    <button
                      type="button"
                      className={styles.bettonEdit}
                      onClick={() =>
                        openModal('ModalRecordMeal', title, el._id)
                      }
                    >
                      <Edit style={{ marginRight: '6px' }} />
                      Edit
                    </button>
                  )}
                </div>
                <div className={styles.caloriesProduct}>
                  {el.mealName && isMobile ? (
                    <div className={styles.totalCalories}>
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
                    </div>
                  ) : (
                    <div className={styles.totalCalories}>
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
                    </div>
                  )}
                  {el.mealName && !isMobile && (
                    <button
                      type="button"
                      className={styles.bettonEdit}
                      onClick={() =>
                        openModal('ModalRecordMeal', title, el._id)
                      }
                    >
                      <Edit style={{ marginRight: '6px' }} />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </li>
          ) : (
            <li key={nanoid()} className={styles.listProduct}>
              <button
                name={typeName}
                className={styles.button}
                onClick={() => openModal('ModalRecordMeal', title)}
              >
                + Record your meal
              </button>
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default DiaryBlock;
