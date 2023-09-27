import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import styles from './SharedLayout.module.scss';

import { Fetcher } from '@/components/Loaders/Fetcher';

const SharedLayout = () => {
  return (
    <div className={styles.resize_wrapper}>
      <Header />

      <main>
        <Suspense fallback={<Fetcher />}>
          <div className={styles.container}>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
