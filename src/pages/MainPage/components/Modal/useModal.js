import { useState } from 'react';

const useModal = () => {
  const [isRecordMealShowing, setIsRecordMealShowing] = useState(false);
  const [isWaterIntakeShowing, setIsWaterIntakeShowing] = useState(false);

  function mealModalToggle() {
    setIsRecordMealShowing(!isRecordMealShowing);
  }

  function waterModalToggle() {
    setIsWaterIntakeShowing(!isWaterIntakeShowing);
  }

  return {
    isRecordMealShowing,
    mealModalToggle,
    isWaterIntakeShowing,
    waterModalToggle,
  };
};

export default useModal;
