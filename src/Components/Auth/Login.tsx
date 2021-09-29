import { useState } from "react";
import { Link } from "react-router-dom";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
import { motion } from "framer-motion";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
import style from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authOne
        .signInWithEmailAndPassword(email, password)
        .then((res: any) => {
          setEmail("");
          setPassword("");
          signIn(res.user.multiFactor.user.accessToken);
          setError(null);
        })
        .catch((err) => setError("please enter correct details"));
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
            className={style.loginCardHandle}
          >
            <h3 className={style.textWrapper}>LOGIN</h3>

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
            <div className={style.errorWrapper}>{error}</div>
            <Link to="/signup" className={style.createLink}>
              Create a new account?
            </Link>
            <Button type={"submit"}>SignIn</Button>
          </motion.div>
        </form>
      </CardLogin>
    </MotionWrapper>
  );
};
export default Login;
