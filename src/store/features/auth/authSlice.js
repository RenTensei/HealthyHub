import { createSlice } from '@reduxjs/toolkit';
import { refresh, logOut, signIn, signUp } from './thunks';
import { APP_STATUS } from '@/constants/appStatus';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    physicalActivityRatio: null,
    BMR: null,
  },
  token: null,

  isLoggedIn: false,
  appStatus: APP_STATUS.initialLoading,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;

        state.appStatus = APP_STATUS.idle;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;

        state.isLoggedIn = true;
        state.appStatus = APP_STATUS.idle;
      })

      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;

        state.isLoggedIn = true;
        state.appStatus = APP_STATUS.idle;
      })
      .addCase(logOut.fulfilled, () => {
        return { ...initialState };
      });
  },
});

export default authSlice.reducer;
