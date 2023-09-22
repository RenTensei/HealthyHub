import { createContext, useState, useContext } from 'react';

export const MealContext = createContext(' no context');

export const MealProvider = ({ children }) => {
  const [typeOfMeal, setTypeOfMeal] = useState(null);

  return (
    <MealContext.Provider value={{ typeOfMeal, setTypeOfMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => useContext(MealContext);
