import { motion } from "framer-motion";
const CardLogin = (props: any) => {
  return (
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          paddingBottom: 10,

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.children}
      </div>
    </motion.div>
  );
};
export default CardLogin;
