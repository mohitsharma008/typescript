import { withRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface UpdateProps {
  value: string;
}
const Updates = (props: any) => {
  const [update, setUpdate] = useState<any>(null);
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
    setUpdate(bookmarks.data);
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      {update === null && null}
      {update !== null &&
        update.data.map((val: any, i: number) => {
          return (
            <>
              {val.name !== "" && val.time !== "" ? (
                <h3>
                  {val.name}:{val.time}
                </h3>
              ) : null}
            </>
          );
        })}
    </div>
  );
};
export default withRouter(Updates);
