import foodData from '../../../../RecommendedFoodPage/components/RecommendedFood.json';
import styles from './RecommendedFoodMain.module.scss';

export default function FoodList() {
  return (
    <ul className={styles.item__list}>
      {foodData.map(foodItem => {
        return (
          <li className={styles.item} key={foodItem.name}>
            <img
              src={foodItem.img}
              alt={foodItem.name}
              className={styles.product__image}
            />
            <div className={styles.product__info}>
              <h3 className={styles.product__name}>{foodItem.name}</h3>
              <p className={styles.product__calories}>
                100 g{' '}
                <span className={styles.calories__quantity}>
                  {foodItem.calories} calories
                </span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
