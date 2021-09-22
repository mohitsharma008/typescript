import { useActions } from "../../Redux/hooks/useAction";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
import { motion } from "framer-motion";
const Logout = () => {
  const { logout } = useActions();

  const handleClick = async () => {
    try {
      await authOne
        .signOut()
        .then((res) => {
          console.log(res);
          logout();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CardLogin>
      <motion.div
        initial={{ x: 150, scale: 1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ stiffness: 100, type: "spring" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#0e3047",
          paddingBottom: 40,
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 40,
          borderRadius: "5px",
          boxShadow: "0px 0px 6px 15px orange",
        }}
      >
        <h1 style={{ color: "white" }}>Are You Sure To Logout?</h1>

        <Button onClick={() => handleClick()}>Logout</Button>
      </motion.div>
    </CardLogin>
  );
};
export default Logout;
