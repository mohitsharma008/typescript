import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import { Link, withRouter } from "react-router-dom";
import { warnConditionallyRequiredProps } from "@fluentui/utilities";
const Score = () => {
  const [data, setData] = useState<null | string[]>(null);
  const [keys, setKeys] = useState<null | string[]>(null);
  const location = useLocation();
  console.log(location);
  const getUser = async () => {
    await axios
      .get(`https://updates-manange-default-rtdb.firebaseio.com/data/.json`)
      .then((res) => {
        setKeys(Object.keys(res.data));
        setData(Object.values(res.data));
        console.warn("rerender");
        console.log("hhhh");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleDelete = async (index: any) => {
    await axios
      .delete(
        `https://updates-manange-default-rtdb.firebaseio.com/data/${index}.json`
      )
      .then((res) => getUser())
      .catch((del) => console.log("cat"));
  };

  return (
    <MotionWrapper>
      <div style={{ paddingTop: "30px" }}>
        <p></p>

        {data &&
          keys &&
          data.map((user: any, index: any) => {
            return (
              <motion.div
                initial={{ x: -150, scale: 1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 60 }}
                key={index}
                style={{
                  backgroundColor: "orange",
                  border: "1px solid red",
                  marginBottom: 7,
                  marginRight: 30,
                  marginLeft: 30,
                }}
              >
                <motion.div
                  style={{
                    marginLeft: 5,
                    marginRight: 5,
                    flexWrap: "wrap",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexShrink: 4,
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: 18,
                      border: "1px solid #152833",
                      backgroundColor: "#152833",
                    }}
                    to={{
                      pathname: `/score/${user.id}`,
                      state: {
                        data: keys[index],
                      },
                    }}
                  >
                    Your Update{" "}
                  </Link>
                  {/* <Link to={`/score/${user.id}`}>Link</Link> */}
                  {/* <Updates /> */}
                  <button onClick={() => handleDelete(keys[index])}>
                    Delete
                  </button>
                  <h2>{user.timeStamp}</h2>
                </motion.div>
              </motion.div>
            );
          })}
      </div>
    </MotionWrapper>
  );
};
export default withRouter(Score);
