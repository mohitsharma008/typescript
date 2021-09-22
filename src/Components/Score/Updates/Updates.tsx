import { withRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface UpdateProps {
  value: string;
}
const Updates = (props: any) => {
  const [update, setUpdate] = useState<string | null>(null);
  const { data } = props.location.state;
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const bookmarks = await axios.get(
      `https://updates-manange-default-rtdb.firebaseio.com/data/${data}/.json`
    );
    console.log(typeof bookmarks.data.value.name);
    setUpdate(bookmarks.data.value.name);
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      {update === null && null}
      {update !== null && <h1>{update}</h1>}
    </div>
  );
};
export default withRouter(Updates);
