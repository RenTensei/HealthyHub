import UserProfile from './UserProfile';
import styles from './UserMenu.module.scss';
import goal from '../images/header/goal.png';
import weight from '../images/header/weight.png';
import { useModal } from '@/context/ModalContext';

const UserMenu = () => {
  const { openModal } = useModal();

  return (
    <div className={styles.header_user}>
      <button
        onClick={() => openModal('ModalGoal')}
        type="button"
        className={styles.header_user_bnt}
      >
        <div className={styles.header_user_frame}>
          <img src={goal} alt="your goal" className={styles.header_user_img} />
        </div>
        <div className={styles.header_user_discr}>
          <p className={styles.header_user_text}> Goal</p>
          <div className={styles.header_user_discr_choose}>
            <p className={styles.header_user_text}>Lose fat</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="rgba(227, 255, 168, 1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
              />
            </svg>
          </div>
        </div>
      </button>

      <button
        onClick={() => openModal('ModalWeight')}
        type="button"
        className={styles.header_user_bnt}
      >
        <div className={styles.header_user_frame}>
          <img src={weight} alt="weight" className={styles.header_user_img} />
        </div>
        <div className={styles.header_user_discr}>
          <p className={styles.header_user_text}> Weight</p>
          <div className={styles.header_user_weight_descr}>
            <p className={styles.header_user_text}>65</p>
            <div className={styles.header_user_discr_choose}>
              <p className={styles.header_user_measure}>kg</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="rgba(227, 255, 168, 1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
                />
                <path
                  stroke="rgba(227, 255, 168, 1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <UserProfile />
    </div>
  );
};

export default UserMenu;
