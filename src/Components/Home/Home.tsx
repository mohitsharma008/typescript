import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import style from "./Home.module.css";
const Home = () => {
  const handleSome = () => {
    const date = new Date().getSeconds();
    const date1 = ("0" + new Date().getSeconds()).slice(-2);
    console.log(date1);
  };
  return (
    <div className={style.homeImage}>
      <MotionWrapper>
        <div className={style.textContentWrpper}>
          <h1 className={style.homeContent}>
            !! Greetings, I Think You All Doing Well !!
          </h1>
        </div>
      </MotionWrapper>
    </div>
  );
};
export default Home;
