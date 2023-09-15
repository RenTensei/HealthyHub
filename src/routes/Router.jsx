import { ROUTES } from '@/constants/routes';

import SharedLayout from '@/shared/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('@/pages/WelcomePage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const DiaryPage = lazy(() => import('@/pages/DiaryPage'));


const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path={ROUTES.MainPage} element={<MainPage />} />
        <Route path={ROUTES.SignUpPage} element={<SignUpPage />} />
        <Route path={ROUTES.SignInPage} element={<SignInPage />} />
        <Route path={ROUTES.DiaryPage} element={<DiaryPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
