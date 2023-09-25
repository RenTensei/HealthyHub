import { axiosAuth } from '@/utils/network';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMonthStatistic = async () => {
//   const { data } = await axios.get('https://healthyhub.onrender.com/api/user/statistics?range=month')

//   return data;
// };

export const getMonthStatistic = createAsyncThunk(
  'statistic/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosAuth.get('user/statistics?range=month');
      console.log(res.data)
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);