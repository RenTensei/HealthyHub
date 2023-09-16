import CloseSvg from '../svg components/CloseSvg';
import styles from './ModalWeight.module.scss';
import { useEffect, useState } from 'react';

const ModalWeight = ({ onClose }) => {
  const today = '14.09.2022';

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
      <div className={styles.header_modal_weight_overlay}>
        <h2 className={styles.header_modal_weight_title}>
          Enter your current weight
        </h2>
        <p className={styles.header_modal_weight_text}>
          You can record your weight once a day
        </p>
        <p className={styles.header_modal_date_text}>
          Today <span className={styles.header_modal_date}>{today}</span>{' '}
        </p>
        <form className={styles.header_weight_form}>
          <input
            placeholder="Enter your weight"
            className={styles.header_modal_input}
          />
          <button
            type="submit"
            className={styles.header_modal_bnt}
            onClick={onClose}
          >
            {' '}
            Confirm
          </button>
        </form>
        <button
          className={styles.header_modal_bnt_close}
          type="submit"
          onClick={onClose}
        >
          <CloseSvg />
        </button>
      </div>
    );
  }
  return (
    <div className={styles.header_modal_weight_overlay}>
      <h2 className={styles.header_modal_weight_title}>
        Enter your current weight
      </h2>
      <p className={styles.header_modal_weight_text}>
        You can record your weight once a day
      </p>
      <p className={styles.header_modal_date_text}>
        Today <span className={styles.header_modal_date}>{today}</span>{' '}
      </p>
      <div className={styles.header_modal_bnt_group}>
        <form className={styles.header_weight_form}>
          <input
            placeholder="Enter your weight"
            className={styles.header_modal_input}
          />
          <button
            type="submit"
            className={styles.header_modal_bnt}
            onClick={onClose}
          >
            {' '}
            Confirm
          </button>
        </form>
        <button
          className={styles.header_modal_bnt_cancel}
          type="submit"
          onClick={onClose}
        >
          <p>Cancel</p>
        </button>
      </div>
    </div>
  );
};

export default ModalWeight;
