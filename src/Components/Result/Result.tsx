import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Result = () => {
  const [value, setValue] = useState({ name: "" });
  useEffect(() => {
    axios
      .get(`https://updates-manange-default-rtdb.firebaseio.com/.json`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = () => {
    axios
      .post(`https://updates-manange-default-rtdb.firebaseio.com/data/.json`, {
        value,
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
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ paddingTop: "30px" }}>
      <h3>Result</h3>
      <textarea
        onChange={(e) => setValue({ name: e.target.value })}
        name="Text1"
        cols={40}
        rows={5}
      />
      <button onClick={handleClick}>Add Blog</button>
    </div>
  );
};
export default Result;
