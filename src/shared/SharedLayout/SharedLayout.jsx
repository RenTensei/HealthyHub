import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './SharedLayout.module.scss';
import { ROUTES } from '@/constants/routes';
import Modal from '@/pages/MainPage/components/Modal/ModalCreator';
import useModal from '@/pages/MainPage/components/Modal/useModal';
import ModalRecordMeal from '@/pages/MainPage/Modals/ModalRecordMeal/ModalRecordMeal';
import ModalWaterIntake from '@/pages/MainPage/Modals/ModalWaterIntake/ModalWaterIntake';

const SharedLayout = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
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
        </div>
      </main>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle}>
        <ModalRecordMeal />
      </Modal>
      <Modal isShowing={isShowing} hide={toggle}>
        <ModalWaterIntake />
      </Modal>
    </>
  );
};

export default SharedLayout;

// TODO: add loading suspense
