import {
  axiosAuth,
  resetGlobalAuthHeader,
  setGlobalAuthHeader,
} from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { authActions } from './authSlice';
// import { APP_STATUS } from '@/constants/appStatus';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getMyFoodIntake } from '../foodIntake/thunks';
import { sleep } from '@/utils/sleep';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/signup', credentials);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/signin', credentials);

      setGlobalAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue();
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (token, { rejectWithValue, dispatch }) => {
    try {
      setGlobalAuthHeader(token);

      const res = await axiosAuth.get('auth/current');

      dispatch(getMyFoodIntake());

      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError && error.response.status === 401) {
        await sleep(500);
        toast.error('Your session has expired. Please log in again.');
        return rejectWithValue(401);
      }
      return rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('auth/logout');
      resetGlobalAuthHeader();

      return res.status;
    } catch (error) {
      toast.error('Something went wrong!');
      return rejectWithValue();
    }
  }
);
