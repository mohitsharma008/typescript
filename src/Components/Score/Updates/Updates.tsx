import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface UpdateProps {
  value: string;
}
const Updates = (props: any) => {
  const [update, setUpdate] = useState<any>(null);
  const { data } = props.location.state;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const bookmarks = await axios.get(
      `https://updates-manange-default-rtdb.firebaseio.com/data/${data}/.json`
    );
    setUpdate(bookmarks.data);
  };

  return (
    <div style={{ color: "#bbc5c7", paddingTop: "35px" }}>
      {update === null && null}
      {update !== null &&
        update.data.map((val: any, i: number) => {
          return (
            <div key={i}>
              {val.name !== "" && val.time !== "" ? (
                <h3
                  style={{
                    borderRadius: 5,
                    boxShadow: "0px 2px 6px orange",
                    marginLeft: 20,
                    // backgroundColor: "rgb(14, 48, 71)",
                    marginRight: 20,
                    height: 30,
                    // borderBottom: "1px double red",
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  >
                    {val.name}
                  </div>

                  <div
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    {val.time}
                  </div>
                </h3>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};
export default withRouter(Updates);
