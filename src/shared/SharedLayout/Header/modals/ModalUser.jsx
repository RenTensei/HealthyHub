import styles from './ModalUser.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useEffect } from 'react';
import SettingsSvg from '../svg components/SettingsSvg';
import LogOutSvg from '../svg components/LogOutSvg';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';
import { logOut } from '@/store/features/auth/thunks';

const ModalUser = ({ onClose }) => {
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
    <OutsideClickHandler
      onOutsideClick={() => {
        onClose();
      }}
    >
      <div className={styles.header_modal_user_overlay} onClick={onClose}>
        <ul>
          <li className={styles.header_modal_user_item}>
            {' '}
            <Link to={ROUTES.ProfileSettingsPage}>
              <div className={styles.header_modal_user_item}>
                <SettingsSvg />
                <p className={styles.header_modal_user_text}>Setting</p>
              </div>
            </Link>
          </li>
          <li>
            <div>
              <a
                onClick={() => {
                  dispatch(logOut());
                }}
                className={styles.header_modal_user_item}
              >
                <LogOutSvg />
                <p className={styles.header_modal_user_text}>Log out</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default ModalUser;
