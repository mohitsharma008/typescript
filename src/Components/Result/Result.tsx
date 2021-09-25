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
    console.log(data);
  }, [numberUpdates]);
  const handleClick = () => {
    axios
      .post(`https://updates-manange-default-rtdb.firebaseio.com/data/.json`, {
        data,
        timeStamp:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear() +
          " @ " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds(),
        id: uuidv4(),
      })
      .then((res) => {
        console.log("succes");
        setValue({ name: "" });
        history.push("/score");
      })
      .catch((err) => console.log(err));
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
  console.log(data);
  const handleListUpdates = () => {
    setNumberUpdates((prev) => prev + 1);
  };
  return (
    <MotionWrapper>
      <div
        style={{
          paddingTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
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
            bottom: 50,
            right: 50,
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
  );
};
export default Result;
