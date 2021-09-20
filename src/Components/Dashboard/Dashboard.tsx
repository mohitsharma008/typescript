import OtherComponent from "../other/otherComponent";

const Dashboard = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <h3>Dashboard</h3>
      <OtherComponent value="read & write" />
    </div>
  );
};
export default Dashboard;
