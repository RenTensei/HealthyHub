import { ROUTES } from '@/constants/routes';

import SharedLayout from '@/shared/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('@/pages/WelcomePage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const ForgotYourPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const DiaryPage = lazy(() => import('@/pages/DiaryPage'));
const RecommendedFoodPage = lazy(() => import('@/pages/RecommendedFoodPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProfileSettingsPage = lazy(() => import('@/pages/ProfileSettingsPage'));

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HomePage} element={<SharedLayout />}>
        {/* public routes */}
        <Route
          index
          element={
            <PublicRoute component={WelcomePage} redirect={ROUTES.MainPage} />
          }
        />
        <Route
          path={ROUTES.SignUpPage}
          element={
            <PublicRoute component={SignUpPage} redirect={ROUTES.MainPage} />
          }
        />
        <Route
          path={ROUTES.SignInPage}
          element={
            <PublicRoute component={SignInPage} redirect={ROUTES.MainPage} />
          }
        />

        {/* private routes */}
        <Route
          path={ROUTES.MainPage}
          element={
            <PrivateRoute component={MainPage} redirect={ROUTES.SignInPage} />
          }
        />
        <Route
          path={ROUTES.ForgotYourPasswordPage}
          element={
            <PrivateRoute
              component={ForgotYourPasswordPage}
              redirect={ROUTES.SignInPage}
            />
          }
        />
        <Route
          path={ROUTES.DiaryPage}
          element={
            <PrivateRoute component={DiaryPage} redirect={ROUTES.SignInPage} />
          }
        />
         <Route
          path={ROUTES.RecommendedFoodPage}
          element={<PrivateRoute component={RecommendedFoodPage} redirect={ROUTES.SignInPage} />}
        />
        <Route
          path={ROUTES.DashboardPage}
          element={
            <PrivateRoute
              component={DashboardPage}
              redirect={ROUTES.SignInPage}
            />
          }
        />
        <Route
          path={ROUTES.ProfileSettingsPage}
          element={
            <PrivateRoute
              component={ProfileSettingsPage}
              redirect={ROUTES.SignInPage}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
