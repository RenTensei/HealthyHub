import styles from './ModalGoal.module.scss';
import { useEffect, useState } from 'react';
import { ReactComponent as CloseSvg } from '@/assets/svg/close-circle.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, AnimatePresence } from 'framer-motion';
import goalM from '../images/header/goal.png';
import goalM2 from '../images/header/goal2x.png';
import goalF from '../images/header/goal_girl.png';
import goalF2 from '../images/header/goal_girl2x.png';
import muscle from '../images/header/muscle.png';
import muscle2 from '../images/header/muscle2x.png';
import maintainM from '../images/header/maintain.png';
import maintainM2 from '../images/header/maitain2x.png';
import maintainF from '../images/header/maintan_girl.png';
import maintainF2 from '../images/header/maintan_girl2x.png';

const ModalGoal = ({ open, onClose }) => {
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
                className={styles.header_modal_goal_overlay}
              >
                <h2 className={styles.header_modal_goal_title}>
                  Target selection
                </h2>
                <p className={styles.header_modal_goal_text}>
                  The service will adjust your calorie intake to your goal
                </p>

                <ul className={styles.header_modal_list}>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.5,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalM}
                        srcSet={`${goalM}, ${goalM2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}> Lose fat</p>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.2,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={maintainM}
                        srcSet={`${maintainM}, ${maintainM2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Maintain</p>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.1,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={muscle}
                        srcSet={`${muscle}, ${muscle2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Gain Muscle</p>
                  </motion.li>
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
    <div className={styles.header_modal_container}>
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
                  y: -100,
                }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                }}
                exit={{
                  y: -1000,
                  transition: {
                    delay: 0.5,
                  },
                }}
                className={styles.header_modal_goal_overlay}
              >
                <h2 className={styles.header_modal_goal_title}>
                  Target selection
                </h2>
                <p className={styles.header_modal_goal_text}>
                  The service will adjust your calorie intake to your goal
                </p>

                <ul className={styles.header_modal_list}>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.3,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalM}
                        srcSet={`${goalM}, ${goalM2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}> Lose fat</p>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.2,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={maintainM}
                        srcSet={`${maintainM}, ${maintainM2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Maintain</p>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 100,
                      transition: {
                        delay: 0.1,
                      },
                    }}
                    className={styles.header_modal_list_item}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={muscle}
                        srcSet={`${muscle}, ${muscle2}`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Gain Muscle</p>
                  </motion.li>
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
              </motion.div>
            </OutsideClickHandler>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalGoal;
