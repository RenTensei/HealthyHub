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
<DiaryMainComponnent srcImg = "/public/Breakfast.png" srcSet="/public/Breakfast.png, /public/Breakfast@2x.png" alt = "Breakfast" name ='Breakfast' buttonName = "+ Record your meal" Carbonohidrates="55" Protein="55" Fat="55"/>
<DiaryMainComponnent srcImg = "/public/Lunch.png" srcSet="/public/Lunch.png, /public/Lunch@2x.png" alt = "Lunch" name ='Lunch' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
<DiaryMainComponnent srcImg = "/public/Dinner.png" srcSet="/public/Dinner.png, /public/Dinner@2x.png" alt = "Dinner" name ='Dinner' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
<DiaryMainComponnent srcImg = "/public/Snack.png" srcSet="/public/Snack.png, /public/Snack@2x.png" alt = "Snack" name ='Snack' buttonName = "+ Record your meal" Carbonohidrates="" Protein="" Fat=""/>
    </section>
  );
};

export default MainDiary