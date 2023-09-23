// import UserProfile from './UserProfile';
import styles from './UserMenu.module.scss';
import { useModalContext } from '@/context/ModalContext';
import goalM from '../images/header/goal.png';
import goalM2 from '../images/header/goal2x.png';
import goalF from '../images/header/goal_girl.png';
import goalF2 from '../images/header/goal_girl2x.png';
import weight from '../images/header/weight.png';
import weight2 from '../images/header/weight2x.png';
import { ReactComponent as ArrowDownSvg } from '@/assets/svg/arrow-down.svg';
import { ReactComponent as EditSvg } from '@/assets/svg/edit-2.svg';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const { openModal } = useModalContext();
  const userData = useSelector(state => state.auth.user);

  return (
    <div className={styles.header_user}>
      <button
        onClick={() => openModal('ModalGoal')}
        type="button"
        className={styles.header_user_bnt}
      >
        <div className={styles.header_user_frame}>
          <img
            src={goalM}
            srcSet={`${goalM} 1x, ${goalM2} 2x`}
            alt="your goal"
            className={styles.header_user_img}
          />
        </div>
        <div className={styles.header_user_discr}>
          <p className={styles.header_user_text}> Goal</p>
          <div className={styles.header_user_discr_choose}>
            <p className={styles.header_user_text}>Loose Weight</p>
            <ArrowDownSvg
              width={16}
              height={16}
              stroke={'rgba(227, 255, 168, 1)'}
            />
          </div>
        </div>
      </button>

      <button
        onClick={() => openModal('ModalWeight')}
        type="button"
        className={styles.header_user_bnt}
      >
        <div className={styles.header_user_frame}>
          <img
            src={weight}
            alt="weight"
            srcSet={`${weight} 1x, ${weight2} 2x`}
            className={styles.header_user_img}
          />
        </div>
        <div className={styles.header_user_discr}>
          <p className={styles.header_user_text}> Weight</p>
          <div className={styles.header_user_weight_descr}>
            <p className={styles.header_user_text}>{userData.weight}</p>
            <div className={styles.header_user_discr_choose}>
              <p className={styles.header_user_measure}>kg</p>
              <EditSvg
                width={16}
                height={16}
                stroke={'rgba(227, 255, 168, 1)'}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default UserMenu;
