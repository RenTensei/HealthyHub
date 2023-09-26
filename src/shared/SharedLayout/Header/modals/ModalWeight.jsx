import { ReactComponent as CloseSvg } from '@/assets/svg/close-circle.svg';
import styles from './ModalWeight.module.scss';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/store/features/auth/selectors';
import { updateUser } from '@/store/features/auth/thunks';
import { formatDate } from '@/utils/formatDate';
import { toast } from 'react-toastify';

const ModalWeight = ({ open, onClose }) => {
  const now = new Date();
  const today = formatDate(now);

  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  const [weight, setWeight] = useState(user.weight);
  const [width, setWidth] = useState({ width: window.innerWidth });
  const breakpoint = 834;

  const handleSubmit = e => {
    e.preventDefault();

    if (!weight || weight > 170 || weight < 40) {
      return toast.warn('Weight should be a number between 40 and 170!');
    }
    if (weight === user.weight) return onClose();

    dispatch(updateUser({ weight }));
    onClose();
  };

  const handleResize = () => setWidth({ width: window.innerWidth });

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
      <AnimatePresence>
        {open && (
          <>
            <OutsideClickHandler onOutsideClick={onClose}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -100,
                  transition: {
                    delay: 0.3,
                  },
                }}
                className={styles.header_modal_weight_overlay}
              >
                <h2 className={styles.header_modal_weight_title}>
                  Enter your current weight
                </h2>
                <p className={styles.header_modal_weight_text}>
                  You can record your weight once a day
                </p>
                <p className={styles.header_modal_date_text}>
                  Today{' '}
                  <span className={styles.header_modal_date}>{today}</span>{' '}
                </p>
                <form className={styles.header_weight_form}>
                  <input
                    type="number"
                    onChange={event => setWeight(Number(event.target.value))}
                    placeholder="Enter your weight"
                    className={styles.header_modal_input}
                  />
                  <button
                    className={styles.header_modal_bnt}
                    onClick={handleSubmit}
                  >
                    {' '}
                    Confirm
                  </button>
                </form>
                <button
                  className={styles.header_modal_bnt_close}
                  onClick={onClose}
                >
                  <CloseSvg width={16} height={16} stroke={'white'} />
                </button>
              </motion.div>
            </OutsideClickHandler>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <OutsideClickHandler onOutsideClick={onClose}>
            <motion.div
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                y: -100,
                transition: {
                  delay: 0.6,
                },
              }}
              className={styles.header_modal_weight_overlay}
            >
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
                    type="number"
                    onChange={event => setWeight(Number(event.target.value))}
                    placeholder="Enter your weight"
                    className={styles.header_modal_input}
                  />
                  <button
                    className={styles.header_modal_bnt}
                    onClick={handleSubmit}
                  >
                    {' '}
                    Confirm
                  </button>
                </form>
                <button
                  className={styles.header_modal_bnt_cancel}
                  onClick={onClose}
                >
                  <p>Cancel</p>
                </button>
              </div>
            </motion.div>
          </OutsideClickHandler>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalWeight;
