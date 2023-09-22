import { useState } from 'react';

const useModal = () => {
  const [isRecordMealShowing, setisRecordMealShowing] = useState(false);
  const [isWaterIntakeShowing, setisWaterIntakeShowing] = useState(false);

  function mealModalToggle() {
    setisRecordMealShowing(!isRecordMealShowing);
  }

  function waterModalToggle() {
    setisWaterIntakeShowing(!isWaterIntakeShowing);
  }

  return {
    isRecordMealShowing,
    mealModalToggle,
    isWaterIntakeShowing,
    waterModalToggle,
  };
};

export default useModal;
