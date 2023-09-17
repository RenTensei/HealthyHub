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

      console.log(res);

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

      console.log(res);

      setGlobalAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (token, { rejectWithValue }) => {
    try {
      setGlobalAuthHeader(token);

      const res = await axiosAuth.get('auth/current');

      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('auth/current');
      resetGlobalAuthHeader();

      return res.status;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
