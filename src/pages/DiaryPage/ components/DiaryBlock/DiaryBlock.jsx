import styles from './DiaryBlock.module.scss';

const DiaryBlock = () => {
  return (
    <div>
      <div className={styles.blockHeader}>
        <img
          src="/public/Breakfast.png"
          height={32}
          width={32}
          alt="Breakfast"
        />
        <h2 className={styles.titleBlockHeader}>Breakfast</h2>
      </div>
      <div className={styles.itemCalories}>
        <p className={styles.item_1}>
          Carbonohidrates: <span>11.2</span>
        </p>
        <p className={styles.item_2}>
          Protein: <span>23.1</span>
        </p>
        <p className={styles.item_3}>
          Fat: <span>14</span>
        </p>
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
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
          <li className={styles.listProduct}>s</li>
        
        </ul>
      </div>
    </div>
  );
};
export default DiaryBlock;
