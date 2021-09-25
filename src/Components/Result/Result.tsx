import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import Button from "../../Reusable/UI/Button/Button";
const Result = () => {
  const [value, setValue] = useState({ name: "" });
  const [data, setData] = useState([
    { name: "", time: "" },
    { name: "", time: "" },
    { name: "", time: "" },
    { name: "", time: "" },
  ]);
  const [numberUpdates, setNumberUpdates] = useState(5);
  const history = useHistory();
  // useEffect(() => {
  //   axios
  //     .get(`https://updates-manange-default-rtdb.firebaseio.com/.json`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    data.push({ name: "", time: "" });
  }, [numberUpdates]);
  const handleClick = () => {
    for (var i = 0; i <= 4; i++) {
      if (data[i].name === "" && data[i].time === "") {
        console.log("check");
      }
      if (data[i].name !== "" && data[i].time !== "") {
        const hour = ("0" + new Date().getHours()).slice(-2);
        const minute = ("0" + new Date().getMinutes()).slice(-2);
        const second = ("0" + new Date().getSeconds()).slice(-2);

        axios
          .post(
            `https://updates-manange-default-rtdb.firebaseio.com/data/.json`,
            {
              data,
              timeStamp:
                new Date().getDate() +
                "/" +
                (new Date().getMonth() + 1) +
                "/" +
                new Date().getFullYear() +
                " @ " +
                hour +
                ":" +
                minute +
                ":" +
                second,

              id: uuidv4(),
            }
          )
          .then((res) => {
            setValue({ name: "" });
            history.push("/score");
          })
          .catch((err) => console.log(err));
      }
    }
  };
  const handleInputField = (e: any, i: any) => {
    const arr = [...data];
    if (e.target.name === "description") {
      arr[i].name = e.target.value;
      setData(arr);
    }
    if (e.target.name === "time") {
      arr[i].time = e.target.value;
      setData(arr);
    }
  };
  const handleListUpdates = () => {
    setNumberUpdates((prev) => prev + 1);
  };
  return (
    <div
      style={{
        paddingTop: "30px",
      }}
    >
      <MotionWrapper>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            height: "500px",
            flexDirection: "column",
            alignItems: "center",
            color: "#c2daff",
            overflow: "auto",
          }}
        >
          <h3>Result</h3>
          <br />
          {Array(numberUpdates)
            .fill(0)
            .map((n, i) => (
              <div style={{ alignItems: "center", display: "flex" }}>
                Desciption Task:
                <input
                  type="text"
                  style={{ width: 300, height: 30 }}
                  onChange={(e) => handleInputField(e, i)}
                  name="description"
                />
                Time:
                <input
                  type="text"
                  name="time"
                  onChange={(e) => handleInputField(e, i)}
                  style={{ width: 300, height: 30 }}
                />
              </div>
            ))}
          <div
            style={{
              display: "flex",
              right: 50,
              bottom: 50,
              position: "absolute",
            }}
          >
            <div style={{ marginRight: 10 }}>
              <Button onClick={handleListUpdates}>New</Button>
            </div>
            <Button onClick={handleClick}>Save Blog</Button>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};
export default Result;
