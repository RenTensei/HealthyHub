import styles from './DiaryBlock.module.scss';
import { nanoid } from 'nanoid';

const DiaryBlock = ({
  alt,
  title,
  Carbonohidrates = '0',
  Protein = '0',
  fat = '0',
  product,
  srcSet,
}) => {

  const imgSrc = srcSet.split(' ')[0];
  // const breakfast = [{
  //   mealName: 'spaghetti',
  //   carbonohidrates: 54,
  //   protein: 30,
  //   fat: 14
  // }]
  
  // const dinner = [
  //   {
  //     mealName: 'spaghetti',
  //     carbonohidrates: 54,
  //     protein: 30,
  //     fat: 14,
  //   },
  // ];
  // const lunch = [
  //   {
  //     mealName: 'spaghetti',
  //     carbonohidrates: 54,
  //     protein: 30,
  //     fat: 14,
  //   },
  // ];
  // const snack = [
  //   {
  //     mealName: 'spaghetti',
  //     carbonohidrates: 54,
  //     protein: 30,
  //     fat: 14,
  //   },
  // ];

  // const mealTypes = [
  //   { type: 'Breakfast', data: breakfast },
  //   { type: 'Dinner', data: dinner },
  //   { type: 'Lunch', data: lunch },
  //   { type: 'Snack', data: snack },
  // ];









  return (
    <div>
      <div className={styles.containerBlockHeader}>
        <div className={styles.blockHeader}>
          <img src={imgSrc} srcSet={srcSet} height={32} width={32} alt={alt} />
          <h2 className={styles.titleBlockHeader}>{title}</h2>
        </div>
        <div className={styles.itemCalories}>
          <p className={styles.item_1}>
            Carbonohidrates:
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
  {!product ?  (
    <button className={styles.button}>+ Record your meal</button>
  ) : <div ><div className={styles.containerFoodName}> <h2 className={styles.foodName}>{product}</h2> <button className={styles.bettonEdit}>Edit</button></div> 
   <div className={styles.caloriesProduct}>
  <p>Carb.</p>
  <p>Prot.</p>
  <p>Fat.</p>
  </div>
  </div> }
</div>
</div>

      </div>
    </div>
  );
};
export default DiaryBlock;


 
