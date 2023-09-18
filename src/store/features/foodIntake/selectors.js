import { createSelector } from '@reduxjs/toolkit';

export const selectNutrientSums = createSelector(
  state => state.foodIntake.items,
  foodIntakes => {
    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const mealSumsArray = mealTypes.map(mealType => ({
      mealType,
      carbonohidrates: 0,
      protein: 0,
      fat: 0,
    }));

    foodIntakes.forEach(item => {
      const { mealType, carbonohidrates, protein, fat } = item;

      const index = mealTypes.indexOf(mealType);
      if (index !== -1) {
        mealSumsArray[index].carbonohidrates += carbonohidrates;
        mealSumsArray[index].protein += protein;
        mealSumsArray[index].fat += fat;
      }
    });

    console.log('expensive calculation');
    return mealSumsArray;
  }
);
