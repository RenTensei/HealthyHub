import { axiosAuth } from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMyFoodIntake = createAsyncThunk(
  'foodIntake/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('user/food-intake');

      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const postMyFoodIntake = createAsyncThunk(
  'foodIntake/post',
  async (foodIntake, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('user/food-intake', foodIntake);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
