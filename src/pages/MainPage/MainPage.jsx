import Diary from './components/Diary';
import Water from './components/Water';
import Food from './components/Food';
import DailyGoal from './DailyGoal';

const MainPage = () => {
  return (
    <>
      <DailyGoal />
      <Water />
      <Food />
      <Diary />
    </>
  );
};

export default MainPage;
