import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Reusable/UI/Button/Button";
const Result = () => {
  const [value, setValue] = useState({ name: "" });
  const history = useHistory();
  // useEffect(() => {
  //   axios
  //     .get(`https://updates-manange-default-rtdb.firebaseio.com/.json`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
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
        setValue({ name: "" });
        history.push("/score");
      })
      .catch((err) => console.log(err));
  };
  return (
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
      <textarea
        onChange={(e) => setValue({ name: e.target.value })}
        name="Text1"
        value={value.name}
        cols={40}
        rows={5}
      />
      <p style={{ whiteSpace: "break-spaces" }}></p>
      <Button onClick={handleClick}>Add Blog</Button>
    </div>
  );
};
export default Result;
