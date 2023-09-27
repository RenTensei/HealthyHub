import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux';

import styles from './ModalMenuTablet.module.scss';
import weight from '../images/header/weight.png';

import { ReactComponent as CloseSvg } from '@/assets/svg/close-circle.svg';
import { useModalContext } from '@/hooks/useModalContext';
import { goalSrcSets } from '@/utils/goalSrcSet';

const ModalMenuTablet = ({ open, onClose }) => {
  const { openModal } = useModalContext();
  const userData = useSelector(state => state.auth.user);

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
              className={styles.header_modal_user_tablet}
            >
              <ul>
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
                      delay: 0.4,
                    },
                  }}
                >
                  <button
                    onClick={() => openModal('ModalGoal')}
                    type="button"
                    className={styles.header_user_bnt}
                  >
                    <div className={styles.header_user_frame}>
                      <img
                        src={
                          goalSrcSets[userData.goal][`${userData.gender}`][0]
                        }
                        srcSet={`${
                          goalSrcSets[userData.goal][`${userData.gender}`][0]
                        } 1x, ${
                          goalSrcSets[userData.goal][`${userData.gender}`][1]
                        } 2x`}
                        alt="your goal"
                        className={styles.header_user_img}
                      />
                    </div>
                    <div className={styles.header_user_discr}>
                      <p className={styles.header_user_text}> Goal</p>
                      <p className={styles.header_user_text}>Lose fat</p>
                    </div>
                  </button>
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
                    x: 100,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                >
                  <button
                    onClick={() => openModal('ModalWeight')}
                    type="button"
                    className={styles.header_user_bnt}
                  >
                    <div className={styles.header_user_frame}>
                      <img
                        src={weight}
                        alt="weight"
                        className={styles.header_user_img}
                      />
                    </div>
                    <div className={styles.header_user_discr}>
                      <p className={styles.header_user_text}> Weight</p>
                      <div className={styles.header_user_weight_descr}>
                        <p className={styles.header_user_text}>
                          {userData.weight}
                        </p>
                        <p className={styles.header_user_measure}>kg</p>
                      </div>
                    </div>
                  </button>
                </motion.li>
              </ul>
              <button
                className={styles.header_modal_bnt_close}
                type="submit"
                onClick={() => {
                  onClose();
                }}
              >
                {' '}
                <CloseSvg width={16} height={16} stroke={'white'} />
              </button>
            </motion.div>
          </OutsideClickHandler>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalMenuTablet;
