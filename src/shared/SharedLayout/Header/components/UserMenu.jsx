import UserProfile from './UserProfile';
import styles from './UserMenu.module.scss';
import goal from '../images/header/goal.png';
import weight from '../images/header/weight.png';
import { useModal } from '@/context/ModalContext';
import EditSvg from '../svg components/EditSvg';
import ArrowDownSvg from '../svg components/ArrowDownSvg';

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
           <ArrowDownSvg />
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
             <EditSvg />
            </div>
          </div>
        </div>
      </button>

      <UserProfile />
    </div>
  );
};

export default UserMenu;
