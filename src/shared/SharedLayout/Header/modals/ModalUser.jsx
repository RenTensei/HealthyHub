import styles from './ModalUser.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useEffect } from 'react';
import { ReactComponent as SettingsSvg } from '@/assets/svg/setting-2.svg';
import { ReactComponent as LogOutSvg } from '@/assets/svg/logout.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { logOut } from '@/store/features/auth/thunks';

const ModalUser = ({ open, onClose }) => {
  const dispatch = useDispatch();

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
          <OutsideClickHandler onOutsideClick={onClose}>
            <motion.div
              initial={{
                opacity: 0,
                // scale: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                // scale: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                // scale: 0,
                y: -100,
                transition: {
                  delay: 0.6,
                },
              }}
              className={styles.header_modal_user_overlay}
              onClick={onClose}
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
                      duration: 0.2,
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
                  className={styles.header_modal_user_item}
                >
                  {' '}
                  <Link to={ROUTES.ProfileSettingsPage}>
                    <div className={styles.header_modal_user_item}>
                      <SettingsSvg
                        width={16}
                        height={16}
                        stroke={'rgba(255, 255, 255, 1)'}
                      />
                      <p className={styles.header_modal_user_text}>Setting</p>
                    </div>
                  </Link>
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
                      duration: 0.4,
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
                >
                  <a onClick={() => dispatch(logOut())}>
                    <div className={styles.header_modal_user_item}>
                      <LogOutSvg
                        width={16}
                        height={16}
                        stroke={'rgba(255, 255, 255, 1)'}
                      />
                      <p className={styles.header_modal_user_text}>Log out</p>
                    </div>
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </OutsideClickHandler>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
