import { axiosAuth } from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
