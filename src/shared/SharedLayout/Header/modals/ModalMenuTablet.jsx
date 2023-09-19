import styles from './ModalMenuTablet.module.scss';
import goal from '../images/header/goal.png';
import weight from '../images/header/weight.png';
import { useEffect } from 'react';
import { useModalContext } from '@/context/ModalContext';

const ModalMenuTablet = ({ onClose }) => {
  const { openModal } = useModalContext();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.header_modal_user_tablet}>
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
          <p className={styles.header_user_text}>Lose fat</p>
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
            <p className={styles.header_user_measure}>kg</p>
          </div>
        </div>
      </button>
      <button
        className={styles.header_modal_bnt_close}
        type="submit"
        onClick={onClose}
      >
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModalMenuTablet;
