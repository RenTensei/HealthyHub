import { createSlice } from '@reduxjs/toolkit';
import { getMyFoodIntake } from './thunks';

const initialState = {
  items: [],
  error: null,
};

const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  extraReducers: builder => {
    builder.addCase(getMyFoodIntake.fulfilled, (state, { payload }) => {
      state.items = payload;
    });
  },
});

export default foodIntakeSlice.reducer;
