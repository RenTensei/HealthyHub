import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { axiosAuth } from '@/utils/network';

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

      toast.success('Food intake saved!');
      return res.data;
    } catch (error) {
      toast.error('Something went wrong...');
      return rejectWithValue();
    }
  }
);

export const updateMyFoodIntake = createAsyncThunk(
  'foodIntake/update',
  async ({ id, updatedFoodIntake }, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.put(
        `user/food-intake/${id}`,
        updatedFoodIntake
      );

      toast.success('Food intake updated!');
      return res.data;
    } catch (error) {
      toast.error('Something went wrong...');
      return rejectWithValue();
    }
  }
);

export const postMyWaterIntake = createAsyncThunk(
  'waterIntake/post',
  async (waterIntake, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.post('user/water-intake', waterIntake);

      toast.success('Water intake saved!');
      return res.data.volume;
    } catch (error) {
      toast.error('Something went wrong...');
      return rejectWithValue();
    }
  }
);
