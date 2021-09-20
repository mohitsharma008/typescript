import { useState } from "react";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import { useActions } from "../../Redux/hooks/useAction";
import Input from "../../Reusable/UI/Input/Input";
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
    <CardLogin>
      <form onSubmit={handleSubmit}>
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
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          <Button type={"submit"}>SignIn</Button>
        </div>
      </form>
    </CardLogin>
  );
};
export default Login;
