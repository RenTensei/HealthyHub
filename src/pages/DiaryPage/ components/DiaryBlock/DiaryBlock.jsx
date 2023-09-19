import styles from './DiaryBlock.module.scss';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Edit } from '@/assets/svg/Edit.svg';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const DiaryBlock = ({
  alt,
  title,
  Carbonohidrates = '0',
  Protein = '0',
  fat = '0',
  product,
  srcSet,
}) => {
const items = useSelector(state => state.foodIntake.items);
console.log("items", items)
  const imgSrc = srcSet.split(' ')[0];
  const isMobile = useMediaQuery({ maxWidth: 833 });
  return (
    <div>
      <div className={styles.containerBlockHeader}>
        <div className={styles.blockHeader}>
          <img src={imgSrc} srcSet={srcSet} height={32} width={32} alt={alt} />
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
      <div className={styles.blocks}>
        <div className={styles.blockItems}>
          <ul className={styles.blockItemsGrup}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className={styles.listItems}>
          <div className={styles.listProduct}>
          {!product ? (
              <button className={styles.button}>+ Record your meal</button>
            ) : (
              <div className={styles.foodContainer}>
                <div className={styles.containerFoodName}>
                  <h2 className={styles.foodName}>{product}</h2>
                  {product && isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit
                        style={{ marginRight: '6px' }}
                      />
                      Edit
                    </button>
                  )}
                </div>
                <div className={styles.caloriesProduct}>
                  {product && isMobile ? (
                    <>
                      <p className={styles.calorieas}>
                        Carb:{' '}
                        <span style={{ color: '#ffffff' }}>
                          {Carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        Prot:{' '}
                        <span style={{ color: '#ffffff' }}>{Protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        Fat: <span style={{ color: '#ffffff' }}>{fat}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>
                          {Carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{Protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{fat}</span>
                      </p>
                    </>
                  )}

                  {product && !isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit
                        style={{ marginRight: '6px' }}
                      />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            )}
             {/* {!product ? (
              <button className={styles.button}>+ Record your meal</button>
            ) : (
              <div className={styles.foodContainer}>
                <div className={styles.containerFoodName}>
                  <h2 className={styles.foodName}>{product}</h2>
                  {product && isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit
                        style={{ marginRight: '6px' }}
                      />
                      Edit
                    </button>
                  )}
                </div>
                <div className={styles.caloriesProduct}>
                  {product && isMobile ? (
                    <>
                      <p className={styles.calorieas}>
                        Carb:{' '}
                        <span style={{ color: '#ffffff' }}>
                          {Carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        Prot:{' '}
                        <span style={{ color: '#ffffff' }}>{Protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        Fat: <span style={{ color: '#ffffff' }}>{fat}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>
                          {Carbonohidrates}
                        </span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{Protein}</span>
                      </p>
                      <p className={styles.calorieas}>
                        <span style={{ color: '#ffffff' }}>{fat}</span>
                      </p>
                    </>
                  )}

                  {product && !isMobile && (
                    <button className={styles.bettonEdit}>
                      <Edit
                        style={{ marginRight: '6px' }}
                      />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            )} */}
            {product && <button className={styles.buttonLast}>+ Record your meal</button>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiaryBlock;
