import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import AuthNavigation from '../Header/components/AuthNavigation';
import UserMenu from '../Header/components/UserMenu';
import styles from './Header.module.scss';
import { useModal } from '@/context/ModalContext';
import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile';

import arrowDownSvg from '@/assets/svg/arrow-down.svg';
import menuSvg from '@/assets/svg/menu.svg';
import ModalMenuTablet from './modals/ModalMenuTablet';

const Header = () => {
  const { openModal } = useModal();
  const isLoggedin = false;

  const [width, setWidth] = useState({ width: window.innerWidth });
  const breakpoint = 834;

  // console.log(width);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(s => !s);

  const handleResize = () => {
    setWidth({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', e =>
      e.key === 'o' ? toggleMenu() : null
    );

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  if (width.width > breakpoint) {
    console.log('bla');
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
        {/* {!isLoggedin && (
          <button
            className={styles.header_tablet_menu}
            onClick={() => openModal('ModalMenuTablet')}
            type="button"
          >
            <img src={menuSvg} alt="arrow down" />
          </button>
        )} */}
        {isMenuOpen && <ModalMenuTablet />}
      </div>
      {isLoggedin ? <AuthNavigation /> : <UserProfile />}
    </header>
  );
};

export default Header;
