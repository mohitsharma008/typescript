import { useState } from "react";
import { Link } from "react-router-dom";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
import { motion } from "framer-motion";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("gello");
    e.preventDefault();
    console.log(email, password);
    try {
      await authOne
        .signInWithEmailAndPassword(email, password)
        .then((res: any) => {
          console.log(res.user.multiFactor.user.accessToken);
          setEmail("");
          setPassword("");
          signIn(res.user.multiFactor.user.accessToken);
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MotionWrapper>
      <CardLogin>
        <form onSubmit={handleSubmit}>
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
              boxShadow: "0px 0px 6px 15px orange",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ color: "white", marginBottom: 20 }}>LOGIN</h3>

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => handleChange(e)}
            />

            <Input
              label="Password"
              value={password}
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <Link
              to="/signup"
              style={{ color: "white", textDecoration: "none" }}
            >
              <br />
              Create a new account?
              <hr />
            </Link>
            <Button type={"submit"}>SignIn</Button>
          </motion.div>
        </form>
      </CardLogin>
    </MotionWrapper>
  );
};
export default Login;
