import { createSlice } from '@reduxjs/toolkit';
import { current, signIn, signUp } from './thunks';
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
  status: APP_STATUS.idle,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;

        state.status = APP_STATUS.idle;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;

        state.isLoggedIn = true;
        state.status = APP_STATUS.idle;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;

        state.isLoggedIn = true;
        state.status = APP_STATUS.idle;
      });
  },
});

export default authSlice.reducer;
