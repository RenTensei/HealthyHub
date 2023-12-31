import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ModalGoal.module.scss';

import { ReactComponent as CloseSvg } from '@/assets/svg/close-circle.svg';
import { updateUser } from '@/store/features/auth/thunks';
import { goalSrcSets } from '@/utils/goalSrcSet';

const ModalGoal = ({ open, onClose }) => {
  const breakpoint = 834;
  const dispatch = useDispatch();

  const currentGoal = useSelector(state => state.auth.user.goal);
  const gender = useSelector(state => state.auth.user.gender);

  const [width, setWidth] = useState({ width: window.innerWidth });
  const [newGoal, setNewGoal] = useState(currentGoal);

  const setGoalLosefat = () => setNewGoal('Lose fat');
  const setGoalMaintain = () => setNewGoal('Maintain');
  const setGoalGailMuscle = () => setNewGoal('Gain Muscle');

  const handleResize = () => setWidth({ width: window.innerWidth });
  const handleSubmit = () => {
    if (newGoal === currentGoal) return onClose();
    dispatch(updateUser({ goal: newGoal }));
    onClose();
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
      setNewGoal(currentGoal);
    };
  }, [currentGoal, onClose]);

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
                        duration: 0.5,
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Lose fat' ? styles.active : null
                    }`}
                    onClick={setGoalLosefat}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Lose fat'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Lose fat'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Lose fat'][`${gender}`][1]} 2x`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Lose fat</p>
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
                        duration: 0.7,
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Maintain' ? styles.active : null
                    }`}
                    onClick={setGoalMaintain}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Maintain'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Maintain'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Maintain'][`${gender}`][1]} 2x`}
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
                        duration: 0.9,
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Gain Muscle' ? styles.active : null
                    }`}
                    onClick={setGoalGailMuscle}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Gain Muscle'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Gain Muscle'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Gain Muscle'][`${gender}`][1]} 2x`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Gain Muscle</p>
                  </motion.li>
                </ul>
                <div className={styles.header_modal_bnt_group}>
                  <button
                    className={styles.header_modal_bnt}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Confirm
                  </button>
                </div>
                <button
                  className={styles.header_modal_bnt_close}
                  type="button"
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
                    delay: 0.3,
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Lose fat' ? styles.active : null
                    }`}
                    onClick={setGoalLosefat}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Lose fat'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Lose fat'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Lose fat'][`${gender}`][1]} 2x`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Lose fat</p>
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Maintain' ? styles.active : null
                    }`}
                    onClick={setGoalMaintain}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Maintain'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Maintain'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Maintain'][`${gender}`][1]} 2x`}
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
                    className={`${styles.header_modal_list_item} ${
                      newGoal === 'Gain Muscle' ? styles.active : null
                    }`}
                    onClick={setGoalGailMuscle}
                  >
                    <div className={styles.header_modal_frame}>
                      <img
                        className={styles.header_modal_img}
                        src={goalSrcSets['Gain Muscle'][`${gender}`][0]}
                        srcSet={`${
                          goalSrcSets['Gain Muscle'][`${gender}`][0]
                        } 1x, ${goalSrcSets['Gain Muscle'][`${gender}`][1]} 2x`}
                      />
                    </div>
                    <p className={styles.header_modal_text}>Gain Muscle</p>
                  </motion.li>
                </ul>
                <div className={styles.header_modal_bnt_group}>
                  <button
                    className={styles.header_modal_bnt}
                    type="submit"
                    onClick={handleSubmit}
                  >
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
