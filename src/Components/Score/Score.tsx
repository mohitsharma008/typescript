import { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Updates from "./Updates/Updates";
const Score = () => {
  const [data, setData] = useState<null | string[]>(null);
  const [keys, setKeys] = useState<null | string[]>(null);
  useEffect(() => {
    axios
      .get(`https://updates-manange-default-rtdb.firebaseio.com/data/.json`)
      .then((res) => {
        setKeys(Object.keys(res.data));
        setData(Object.values(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ paddingTop: "30px" }}>
      <p>Updates</p>

      {data &&
        keys &&
        data.map((user: any, index: any) => {
          console.log(user.value.name);
          return (
            <div
              style={{
                backgroundColor: "orange",
                border: "1px solid red",
                marginBottom: 7,
              }}
            >
              <div
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "space-between",
                  flexShrink: 4,
                }}
              >
                <Link
                  to={{
                    pathname: `/score/${user.id}`,
                    state: {
                      data: keys[index],
                    },
                  }}
                >
                  Link
                </Link>
                {/* <Link to={`/score/${user.id}`}>Link</Link> */}
                {/* <Updates /> */}
                <h2>{user.timeStamp}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default withRouter(Score);
