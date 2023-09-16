import styles from './ModalUser.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useEffect } from 'react';
import SettingsSvg from '../svg components/SettingsSvg';
import LogOutSvg from '../svg components/LogOutSvg';

const ModalUser = ({ onClose }) => {
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
    <div className={styles.header_modal_user_overlay} onClick={onClose}>
      <ul>
        <li className={styles.header_modal_user_item}>
          {' '}
          <Link to={ROUTES.Home}>
            <div className={styles.header_modal_user_item}>
              <SettingsSvg />
              <p className={styles.header_modal_user_text}>Setting</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.Home}>
            <div className={styles.header_modal_user_item}>
              <LogOutSvg />
              <p className={styles.header_modal_user_text}>Log out</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ModalUser;
