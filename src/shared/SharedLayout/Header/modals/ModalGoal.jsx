import styles from './ModalGoal.module.scss';
import goal from '../images/header/goal.png';
import maitain from '../images/header/maintain.png';
import muscle from '../images/header/muscle.png';
import { useEffect, useState } from 'react';
import CloseSvg from '../svg components/CloseSvg';
import OutsideClickHandler from 'react-outside-click-handler';

const ModalGoal = ({ onClose }) => {
  const [width, setWidth] = useState({ width: window.innerWidth });
  const breakpoint = 834;

  const handleResize = () => {
    setWidth({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

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

  if (width.width > breakpoint) {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          onClose();
        }}
      >
        <div className={styles.header_modal_goal_overlay}>
          <h2 className={styles.header_modal_goal_title}>Target selection</h2>
          <p className={styles.header_modal_goal_text}>
            The service will adjust your calorie intake to your goal
          </p>

          <ul className={styles.header_modal_list}>
            <li className={styles.header_modal_list_item}>
              <div className={styles.header_modal_frame}>
                <img className={styles.header_modal_img} src={goal} />
              </div>
              <p className={styles.header_modal_text}> Lose fat</p>
            </li>
            <li className={styles.header_modal_list_item}>
              <div className={styles.header_modal_frame}>
                <img className={styles.header_modal_img} src={maitain} />
              </div>
              <p className={styles.header_modal_text}>Maintain</p>
            </li>
            <li className={styles.header_modal_list_item}>
              <div className={styles.header_modal_frame}>
                <img className={styles.header_modal_img} src={muscle} />
              </div>
              <p className={styles.header_modal_text}>Gain Muscle</p>
            </li>
          </ul>
          <div className={styles.header_modal_bnt_group}>
            <button
              className={styles.header_modal_bnt}
              type="submit"
              onClick={onClose}
            >
              {' '}
              Confirm
            </button>
          </div>
          <button
            className={styles.header_modal_bnt_close}
            type="submit"
            onClick={onClose}
          >
            <CloseSvg />
          </button>
        </div>
      </OutsideClickHandler>
    );
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        onClose();
      }}
    >
      <div className={styles.header_modal_goal_overlay}>
        <h2 className={styles.header_modal_goal_title}>Target selection</h2>
        <p className={styles.header_modal_goal_text}>
          The service will adjust your calorie intake to your goal
        </p>

        <ul className={styles.header_modal_list}>
          <li className={styles.header_modal_list_item}>
            <div className={styles.header_modal_frame}>
              <img className={styles.header_modal_img} src={goal} />
            </div>
            <p className={styles.header_modal_text}> Lose fat</p>
          </li>
          <li className={styles.header_modal_list_item}>
            <div className={styles.header_modal_frame}>
              <img className={styles.header_modal_img} src={maitain} />
            </div>
            <p className={styles.header_modal_text}>Maintain</p>
          </li>
          <li className={styles.header_modal_list_item}>
            <div className={styles.header_modal_frame}>
              <img className={styles.header_modal_img} src={muscle} />
            </div>
            <p className={styles.header_modal_text}>Gain Muscle</p>
          </li>
        </ul>
        <div className={styles.header_modal_bnt_group}>
          <button
            className={styles.header_modal_bnt}
            type="submit"
            onClick={onClose}
          >
            {' '}
            Confirm
          </button>

          <button
            className={styles.header_modal_bnt_cancel}
            type="submit"
            onClick={onClose}
          >
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ModalGoal;
