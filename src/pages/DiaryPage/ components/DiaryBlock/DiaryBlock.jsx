import styles from './DiaryBlock.module.scss';

const DiaryBlock = ({
  img,
  alt,
  title,
  Carbonohidrates = '0',
  Protein = '0',
  fat = '0',
  product,
}) => {
  return (
    <div>
      <div className={styles.containerBlockHeader}>
      <div className={styles.blockHeader}>
        <img src={img} height={32} width={32} alt={alt} />
        <h2 className={styles.titleBlockHeader}>{title}</h2>
      </div>
      <div className={styles.itemCalories}>
        <p className={styles.item_1}>
          Carbonohidrates: <span className={styles.caloriesSum}>{Carbonohidrates}</span>
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
        <ul className={styles.listItems}>
          <li className={styles.listProduct}>
            {!product && (
              <button className={styles.button}>+ Record your meal</button>
            )}
          </li>
          <li className={styles.listProduct}>{product}</li>
        </ul>
      </div>
    </div>
  );
};
export default DiaryBlock;
