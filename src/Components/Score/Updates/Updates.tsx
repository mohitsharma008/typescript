import { withRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
interface UpdateProps {
  value: string;
}
const Updates = (props: any) => {
  const { data } = props.location.state;
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const bookmarks = await axios.get(
      `https://updates-manange-default-rtdb.firebaseio.com/data/${data}/.json`
    );
    console.log(bookmarks);
  };

  return <div style={{ paddingTop: "30px" }}>{props.value} e</div>;
};
export default withRouter(Updates);
