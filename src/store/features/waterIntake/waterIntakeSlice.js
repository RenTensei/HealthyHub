import { createSlice } from '@reduxjs/toolkit';
import { getMyWaterIntake, postMyWaterIntake } from './thunks';

// const initialState = {
//   volume: 0,
// };

const waterIntakeSlice = createSlice({
  name: 'water',
  initialState: { volume: 0 },
  extraReducers: builder => {
    builder
      .addCase(getMyWaterIntake.fulfilled, (state, { payload }) => {
        state.volume = payload;
      })
      .addCase(postMyWaterIntake.fulfilled, (state, { payload }) => {
        state.volume += payload.volume;
      });
  },
});

export default waterIntakeSlice.reducer;
