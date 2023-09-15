import { Link } from "react-router-dom";
import  DiaryMainComponnent  from "../component/DiaryMain";
import styles from "./mainDiary.module.scss"


 const MainDiary = () => {
    return (
    <section className={styles.sectionDiary}>
      <div className={styles.containerTitle}>
        <h2 className={styles.titleDiary}>Diary</h2>
        <Link className={styles.SeeMore} to={"/diary"}>See more</Link>
      </div>
<DiaryMainComponnent srcImg = "/public/Breakfast.png" alt = "Breakfast" name ='Breakfast' buttonName = "+ Record your meal" Carbonohidrates="55" Protein="55" Fat="55"/>
<DiaryMainComponnent srcImg = "/public/Lunch.png" alt = "Lunch" name ='Lunch' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
<DiaryMainComponnent srcImg = "/public/Dinner.png" alt = "Dinner" name ='Dinner' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
<DiaryMainComponnent srcImg = "/public/Snack.png" alt = "Snack" name ='Snack' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
    </section>
  );
};

export default MainDiary