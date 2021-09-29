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
              boxShadow: "0px 0px 15px 5px orange",
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
                color: "red",
                marginBottom: 10,
              }}
            >
              {error}
            </div>
            <Link
              to="/signup"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
                color: "white",
                width: 300,
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
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
