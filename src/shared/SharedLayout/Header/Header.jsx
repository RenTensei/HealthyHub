import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import AuthNavigation from '../Header/components/AuthNavigation';
import UserMenu from '../Header/components/UserMenu';
import styles from './Header.module.scss';
import { useModal } from '@/context/ModalContext';
import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile'
import MenuSvg from './svg components/MenuSvg';

const Header = () => {
  const { openModal } = useModal();
  const isLoggedin = false;

  const [width, setWidth] = useState({ width: window.innerWidth });
  const breakpoint = 834;

  // console.log(width);

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

  if (width.width > breakpoint) {
    return (
      <header className={styles.header}>
        <Link to={ROUTES.Home}>
          <p className={styles.header_logo}> HealthyHub</p>
        </Link>
        {isLoggedin ? <AuthNavigation /> : <UserMenu />}
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.header}>
        <Link to={ROUTES.Home}>
          <p className={styles.header_logo}> HealthyHub</p>
        </Link>
        {!isLoggedin && (
          <button
            className={styles.header_tablet_menu}
            onClick={() => openModal('ModalMenuTablet')}
            type="button"
          >
            <MenuSvg />
          </button>
        )}
      </div>
      {isLoggedin ? <AuthNavigation /> : <UserProfile />}
    </header>
  );
};

export default Header;
