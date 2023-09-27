import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import UserProfile from './components/UserProfile';
import AuthNavigation from '../Header/components/AuthNavigation';
import UserMenu from '../Header/components/UserMenu';

import { ReactComponent as MenuSvg } from '@/assets/svg/menu.svg';
import { ROUTES } from '@/constants/routes';
import { useModalContext } from '@/hooks/useModalContext';
import { selectIsLoggedIn } from '@/store/features/auth/selectors';

const Header = () => {
  const { modal, openModal, open } = useModalContext();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isMobileMenuOpen = open && modal.name !== 'ModalUser';

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_wrapper}>
          <Link className={styles.header_logo} to={ROUTES.HomePage}>
            HealthyHub
          </Link>

          {isLoggedIn && (
            <button
              className={styles.header_tablet_menu}
              onClick={() => openModal('ModalMenuTablet')}
              type="button"
            >
              <MenuSvg
                className={styles.menuBtn}
                width={24}
                height={24}
                stroke={isMobileMenuOpen ? '#E3FFA8' : '#B6B6B6'}
              />
            </button>
          )}
        </div>

        {isLoggedIn && <UserMenu />}

        <div className={styles.header_user_info}>
          {isLoggedIn ? <UserProfile /> : <AuthNavigation />}
        </div>
      </div>
    </header>
  );
};

export default Header;
