import { ReactComponent as CloseSvg } from '@/assets/svg/close-circle.svg';
import styles from './ModalWeight.module.scss';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, AnimatePresence } from 'framer-motion';

const ModalWeight = ({ open, onClose }) => {
  const today = '14.09.2022';

  // const [weight, setWeight] = useState(user.weight);
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
      <AnimatePresence>
        {open && (
          <>
            <OutsideClickHandler
              onOutsideClick={() => {
                onClose();
              }}
            >
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
                  Today{' '}
                  <span className={styles.header_modal_date}>{today}</span>{' '}
                </p>
                <form className={styles.header_weight_form}>
                  <input
                    // value={weight}
                    // onChange={event => setWeight(event.target.value)}
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
          <OutsideClickHandler
            onOutsideClick={() => {
              onClose();
            }}
          >
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
                    // value={ weight}
                    // onChange={event => setWeight(event.target.value)}
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
            </motion.div>
          </OutsideClickHandler>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalWeight;
