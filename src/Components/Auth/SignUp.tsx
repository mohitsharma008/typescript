import { useState } from "react";
import { Link } from "react-router-dom";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
import { motion } from "framer-motion";
import style from "./Login.module.css";
const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useActions();
  const regexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (regexPassword.test(password)) {
      try {
        await authOne
          .createUserWithEmailAndPassword(email, password)
          .then((res: any) => {
            setEmail("");
            setPassword("");
            signUp(res.user.multiFactor.user.accessToken);
            setError(null);
          })
          .catch((err) => console.log("error"));
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("6 digit long a number, a special character");
    }
    // createAccount(email, password);
  };
  return (
    <MotionWrapper>
      <CardLogin>
        <form onSubmit={(e) => handleSubmit(e)}>
          <motion.div
            initial={{ x: 150, scale: 1 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ stiffness: 100, type: "spring" }}
            className={style.loginCardHandle}
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   backgroundColor: "#0e3047",
            //   paddingBottom: 40,
            //   paddingRight: 20,
            //   paddingLeft: 20,
            //   paddingTop: 40,
            //   borderRadius: "5px",
            //   boxShadow: "0px 0px 15px 5px orange",
            // }}
          >
            <h3
              className={style.textWrapper}
              // style={{ color: "white", marginBottom: 20 }}
            >
              SIGNUP
            </h3>
            <Input
              label="Email"
              onChange={(e) => handleChange(e)}
              value={email}
              type="email"
            />
            <Input
              label="Password"
              onChange={(e) => handleChange(e)}
              value={password}
              type="password"
            />
            <div
              className={style.errorWrapper}
              // style={{ marginBottom: 2, marginTop: 5, color: "#ff0a0a" }}
            >
              {error}
            </div>

            <Link
              to="/login"
              className={style.createLink}
              // style={{
              //   marginTop: 8,
              //   marginBottom: 8,
              //   display: "flex",
              //   justifyContent: "flex-end",
              //   alignItems: "end",

              //   width: 300,
              //   color: "white",
              //   textDecoration: "none",
              // }}
            >
              <br />
              Already have an account?
            </Link>
            <Button type="submit">SignUp</Button>
          </motion.div>
        </form>
      </CardLogin>
    </MotionWrapper>
  );
};
export default SignUp;
