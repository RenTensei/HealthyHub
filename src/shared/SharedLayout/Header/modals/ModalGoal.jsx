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
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/store/features/auth/selectors';
import { updateUser } from '@/store/features/auth/thunks';

const ModalGoal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const [goal, setGoal] = useState(user.goal);
  const [width, setWidth] = useState({ width: window.innerWidth });
  const breakpoint = 834;

  const handleChange = e => {
    const newGoal = e.target.innerText;
    setGoal(newGoal);
    dispatch(updateUser({ goal: goal }));
  };

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
                  <li>
                    <motion.button
                      key={goal}
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
                      className={[
                        user.goal === 'Lose fat'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                      value="Lose fat"
                      type="submit"
                      onClick={handleChange}
                    >
                      {' '}
                      <div className={styles.header_modal_frame}>
                        {user.gender === 'Male' ? (
                          <img
                            className={styles.header_modal_img}
                            src={goalM}
                            srcSet={`${goalM} 1x, ${goalM2} 2x`}
                          />
                        ) : (
                          <img
                            className={styles.header_modal_img}
                            src={goalF}
                            srcSet={`${goalF} 1x, ${goalF2} 2x`}
                          />
                        )}
                      </div>
                      <p className={styles.header_modal_text}> Lose fat</p>
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      key={goal}
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
                      className={[
                        user.goal === 'Maintain'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                      value="Maintain"
                      type="submit"
                      onClick={handleChange}
                    >
                      {' '}
                      <div className={styles.header_modal_frame}>
                        {user.gender === 'Male' ? (
                          <img
                            className={styles.header_modal_img}
                            src={maintainM}
                            srcSet={`${maintainM}, ${maintainM2}`}
                          />
                        ) : (
                          <img
                            className={styles.header_modal_img}
                            src={maintainF}
                            srcSet={`${maintainF}, ${maintainF2}`}
                          />
                        )}
                      </div>
                      <p className={styles.header_modal_text}>Maintain</p>
                    </motion.button>
                  </li>
                  <li>
                    <motion.button
                      key={goal}
                      type="submit"
                      onClick={handleChange}
                      value="Gain Muscle"
                      name="goal"
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
                      className={[
                        user.goal === 'Gain Muscle'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                    >
                      <div className={styles.header_modal_frame}>
                        <img
                          className={styles.header_modal_img}
                          src={muscle}
                          srcSet={`${muscle}, ${muscle2}`}
                        />
                      </div>
                      <p className={styles.header_modal_text}>Gain Muscle</p>
                    </motion.button>
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

                <ul key={goal} className={styles.header_modal_list}>
                  <li>
                    {' '}
                    <motion.button
                      // key={goal}
                      type="submit"
                      onClick={handleChange}
                      value="Lose fat"
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
                      className={[
                        user.goal === 'Lose fat'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                    >
                      <div className={styles.header_modal_frame}>
                        {user.gender === 'Male' ? (
                          <img
                            className={styles.header_modal_img}
                            src={goalM}
                            srcSet={`${goalM} 1x, ${goalM2} 2x`}
                          />
                        ) : (
                          <img
                            className={styles.header_modal_img}
                            src={goalF}
                            srcSet={`${goalF} 1x, ${goalF2} 2x`}
                          />
                        )}
                      </div>
                      <p className={styles.header_modal_text}> Lose fat</p>
                    </motion.button>
                  </li>
                  <li>
                    {' '}
                    <motion.button
                      // key={goal}
                      type="submit"
                      onClick={handleChange}
                      value="Maintain"
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
                      className={[
                        user.goal === 'Maintain'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                    >
                      <div className={styles.header_modal_frame}>
                        {user.gender === 'Male' ? (
                          <img
                            className={styles.header_modal_img}
                            src={maintainM}
                            srcSet={`${maintainM}, ${maintainM2}`}
                          />
                        ) : (
                          <img
                            className={styles.header_modal_img}
                            src={maintainF}
                            srcSet={`${maintainF}, ${maintainF2}`}
                          />
                        )}
                      </div>
                      <p className={styles.header_modal_text}>Maintain</p>
                    </motion.button>
                  </li>
                  <li>
                    {' '}
                    <motion.button
                      // key={goal}
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
                      type="submit"
                      onClick={handleChange}
                      value="Gain Muscle"
                      className={[
                        user.goal === 'Gain Muscle'
                          ? styles.header_modal_list_item_active
                          : styles.header_modal_list_item,
                      ]}
                    >
                      <div className={styles.header_modal_frame}>
                        <img
                          className={styles.header_modal_img}
                          src={muscle}
                          srcSet={`${muscle}, ${muscle2}`}
                        />
                      </div>
                      <p className={styles.header_modal_text}>Gain Muscle</p>
                    </motion.button>
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
              </motion.div>
            </OutsideClickHandler>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalGoal;
