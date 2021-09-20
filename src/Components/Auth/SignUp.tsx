import { useState, useEffect } from "react";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
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
    // console.log(app);
    console.log("gefe");
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
    <CardLogin>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
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
          <hr />
          <Button type="submit">SignUp</Button>
        </div>
      </form>
    </CardLogin>
  );
};
export default SignUp;
