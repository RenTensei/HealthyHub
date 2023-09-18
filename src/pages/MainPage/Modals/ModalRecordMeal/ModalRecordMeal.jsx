import styles from './ModalRecordMeal.module.scss';

const ModalRecordMeal = ({ meal, srcImg, alt, srcSet }) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.content_container}>
        <h2 className={styles.title}>Record your meal</h2>
        <div className={styles.meal_container}>
          <img
            className={styles.meal_img}
            src={srcImg}
            srcSet={srcSet}
            alt={alt}
            width="32px"
            height="32px"
          />
          <h3 className={styles.subtitle}>{meal}</h3>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              The name of the product or dish
            </li>
            <li className={styles.list_item}>Carbonoh </li>
            <li className={styles.list_item}>Protein </li>
            <li className={styles.list_item}>Fat </li>
            <li className={styles.list_item}>Calories </li>
          </ul>
        </div>
        <div className={styles.button_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 8H12"
              stroke="#E3FFA8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12V4"
              stroke="#E3FFA8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button className={styles.button_add}>Add more</button>
        </div>
      </div>
      <div className={styles.buttons_container}>
        <button className={styles.button_cancel}>Cancel</button>
        <button className={styles.button_confirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ModalRecordMeal;
