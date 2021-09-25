import { useState } from "react";
import { Link } from "react-router-dom";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
import { motion } from "framer-motion";
const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signUp } = useActions();

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
        .createUserWithEmailAndPassword(email, password)
        .then((res: any) => {
          setEmail("");
          setPassword("");
          signUp(res.user.multiFactor.user.accessToken);
        })
        .catch((err) => console.log("error"));
    } catch (error) {
      console.error(error);
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
              boxShadow: "0px 0px 15px 5px orange",
            }}
          >
            <h3 style={{ color: "white", marginBottom: 20 }}>SIGNUP</h3>
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
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              <br />
              Already have an account?
              <hr />
            </Link>
            <Button type="submit">SignUp</Button>
          </motion.div>
        </form>
      </CardLogin>
    </MotionWrapper>
  );
};
export default SignUp;
