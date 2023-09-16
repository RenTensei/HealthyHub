import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './SharedLayout.module.scss';
import { ROUTES } from '@/constants/routes';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <div className={styles.temptext}>
            временная навигация, для удобства
          </div>
          <div className={styles.temp}>
            <Link to={ROUTES.HomePage}>Home</Link>
            <Link to={ROUTES.MainPage}>Main</Link>
            <Link to={ROUTES.SignUpPage}>Signup</Link>
            <Link to={ROUTES.SignInPage}>Signin</Link>
            <Link to={ROUTES.DiaryPage}>Diary</Link>
            <Link to={ROUTES.DashboardPage}>Dashboard</Link>
            <Link to={ROUTES.ProfileSettingsPage}>Settings</Link>
          </div>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

// TODO: add loading suspense
