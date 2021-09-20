import { useActions } from "../../Redux/hooks/useAction";
import { authOne } from "../../Firebase";
import Button from "../../Reusable/UI/Button/Button";
import CardLogin from "../../Reusable/UI/CardLogin/CardLogin";
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
      <h1>Are You Sure To Logout?</h1>

      <Button onClick={() => handleClick()}>Logout</Button>
    </CardLogin>
  );
};
export default Logout;
