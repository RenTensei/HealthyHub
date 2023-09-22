import { createContext, useState, useContext } from 'react';

export const MealContext = createContext(' no context');

export const MealProvider = ({ children }) => {
  const mealTypeSrcSets = {
    breakfast: 'src/assets/svg/breakfast.svg',
    lunch: 'src/assets/svg/lunch.svg',
    dinner: 'src/assets/svg/dinner.svg',
    snack: 'src/assets/svg/snack.svg',
  };
  const [typeOfMeal, setTypeOfMeal] = useState(null);

  const chooseMealPhoto = name => {
    console.log(mealTypeSrcSets.lunch);
    setTypeOfMeal(name);
  };

  return (
    <MealContext.Provider
      value={{ typeOfMeal, setTypeOfMeal, chooseMealPhoto }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => useContext(MealContext);
