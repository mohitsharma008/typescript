import OtherComponent from "../other/otherComponent";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
const Dashboard = () => {
  return (
    <MotionWrapper>
      {" "}
      <div style={{ paddingTop: "30px" }}>
        <h3>Dashboard</h3>
        <OtherComponent value="read & write" />
      </div>
    </MotionWrapper>
  );
};
export default Dashboard;
