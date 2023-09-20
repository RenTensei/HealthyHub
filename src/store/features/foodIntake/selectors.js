import { calculateNutrientGoal } from '@/utils/calculateNutrientGoal';
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

    return mealSumsArray;
  }
);

export const selectFoodStatistics = createSelector(
  [
    state => state.foodIntake.items,
    state => state.auth.user.BMR,
    state => state.auth.user.goal,
  ],
  (items, BMR, userGoal) => {
    const { caloriesFact, carbFact, proteinFact, fatFact } = items.reduce(
      (accumulator, { carbonohidrates, protein, fat, calories }) => {
        accumulator.caloriesFact += calories;
        accumulator.carbFact += carbonohidrates;
        accumulator.proteinFact += protein;
        accumulator.fatFact += fat;
        return accumulator;
      },
      { caloriesFact: 0, carbFact: 0, proteinFact: 0, fatFact: 0 }
    );

    const { carbsGoal, proteinGoal, fatGoal } = calculateNutrientGoal(
      BMR,
      userGoal
    );

    console.log('foodStatistics calculation');
    return {
      Calories: {
        fact: caloriesFact,
        goal: BMR,
      },
      Carbonohidrates: {
        fact: carbFact,
        goal: carbsGoal,
      },
      Protein: {
        fact: proteinFact,
        goal: proteinGoal,
      },
      Fat: {
        fact: fatFact,
        goal: fatGoal,
      },
    };
  }
);
