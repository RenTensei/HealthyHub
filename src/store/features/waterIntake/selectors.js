// import { createSelector } from '@reduxjs/toolkit';

export const selectWater = state => state.waterIntake.volume;

// export const selectWater = createSelector(
//   state => state.waterIntake.volume,
//   volume => {
//     waterIntake.reduce(accumulator, volume)=>{
// accumulator.volumeFact =+ volume
// return accumulator
//     },{volumeFact: 0}

//     return volumeFact;
//   }
// );
