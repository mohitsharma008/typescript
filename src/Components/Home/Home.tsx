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
        <div>
          <h1 className={style.homeContent}>!! Welcome !!</h1>
        </div>
      </MotionWrapper>
    </div>
  );
};
export default Home;
