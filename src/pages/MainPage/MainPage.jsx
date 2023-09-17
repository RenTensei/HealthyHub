import Diary from './components/Diary';
import Water from './components/Water';
import Food from './components/Food';
import DailyGoal from './DailyGoal';
import ModalWaterIntake from './Modals/ModalWaterIntake/ModalWaterIntake';
import ModalRecordMeal from './Modals/ModalRecordMeal/ModalRecordMeal';

const MainPage = () => {
  return (
    <>
      <ModalRecordMeal
        meal="Breakfast"
        srcImg="/Breakfast.png"
        srcSet="/Breakfast.png, /Breakfast@2x.png"
        alt="Breakfast"
      />
      <ModalWaterIntake />
      <DailyGoal />
      <Water />
      <Food />
      <Diary />
    </>
  );
};

export default MainPage;
