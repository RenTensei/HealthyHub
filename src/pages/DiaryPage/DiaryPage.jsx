import DiaryBlock from '../MainPage/components/DiaryBlock';

const DiaryPage = () => {
  return (
    <>
      <div>Hello Diary Page</div>
      <div>
        всего будет 4 блока, Breakfast, Dinner, Lunch, Snack. Под каждый из них
        используй DiaryBlock /pages/DiaryPage/components/DiaryBlock
        <DiaryBlock />
        <DiaryBlock />
        <DiaryBlock />
        <DiaryBlock />
      </div>
    </>
  );
};

export default DiaryPage;
