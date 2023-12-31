import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { getMyFoodIntake } from '../foodIntake/thunks';

import {
  axiosAuth,
  resetGlobalAuthHeader,
  setGlobalAuthHeader,
} from '@/utils/network';
import { sleep } from '@/utils/sleep';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/signup', credentials);

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.details) {
        toast.error(error.response.data.details);
      }
      return rejectWithValue();
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
      if (error instanceof AxiosError && error.response.status === 401) {
        await sleep(500);
        toast.error('Your session has expired. Please log in again.');
        return rejectWithValue(401);
      }
      console.log('backend might be sleeping');
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

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (resetData, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/reset-password', resetData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || 'An error occurred during password reset.'
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (fieldsToUpdate, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      for (const field in fieldsToUpdate) {
        formData.append(field, fieldsToUpdate[field]);
      }

      const res = await axiosAuth.patch('user/info', formData);
      toast.success('Profile updated!');

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue();
    }
  }
);

export const checkEmail = createAsyncThunk(
  'auth/checkEmail',
  async (email, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('auth/email', { email });

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response.data.message) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue();
    }
  }
);
