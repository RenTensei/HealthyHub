import {
  axiosAuth,
  resetGlobalAuthHeader,
  setGlobalAuthHeader,
} from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (token, { rejectWithValue }) => {
    try {
      setGlobalAuthHeader(token);

      const res = await axiosAuth.get('auth/current');
      // console.log(res.data);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
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
      rejectWithValue(error);
    }
  }
);
