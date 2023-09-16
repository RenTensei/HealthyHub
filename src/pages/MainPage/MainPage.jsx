import Diary from './components/Diary';
import Water from './Water';
import Food from './Food';
import DailyGoal from './DailyGoal';

const MainPage = () => {
  return (
    <>
      <DailyGoal />
      <Water />
      <Food />
      <Diary/>
    </>
  );
};

export default MainPage;
