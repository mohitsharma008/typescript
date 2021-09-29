import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Score.css";
import { FaRegTrashAlt } from "react-icons/fa";
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
      <div style={{ paddingTop: "35px" }}>
        <p></p>

        {data &&
          keys &&
          data.map((user: any, index: any) => {
            return (
              <div>
                <motion.div
                  initial={{ x: -150, scale: 1 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 60 }}
                  key={index}
                  style={{
                    backgroundColor: "#00303F",
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
                      className="scoreOpnBtn"
                      to={{
                        pathname: `/result/${user.id}`,
                        state: {
                          data: keys[index],
                        },
                      }}
                    >
                      Open Your Update{" "}
                    </Link>

                    {/* <Link to={`/score/${user.id}`}>Link</Link> */}
                    {/* <Updates /> */}
                    <h2>{user.timeStamp}</h2>

                    <button onClick={() => handleDelete(keys[index])}>
                      <FaRegTrashAlt size={20} />
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
      </div>
    </MotionWrapper>
  );
};
export default withRouter(Score);
