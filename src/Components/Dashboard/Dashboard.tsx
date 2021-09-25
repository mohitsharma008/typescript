import OtherComponent from "../other/otherComponent";
import MotionWrapper from "../../Reusable/motionWrapper/motionWrapper";
import { useState } from "react";
const Dashboard = () => {
  const [logo, setLogo] = useState([
    {
      name: "Java",
      url: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
    },
    {
      name: "Php",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      name: "Dot Net",
      url: "data:image/jpeg;base64,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",
    },
    {
      name: "Angular",
      url: "data:image/png;base64,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",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "React Native",
      url: "https://miro.medium.com/max/1000/1*ub1DguhAtkCLvhUGuVGr6w.png",
    },
  ]);
  return (
    <MotionWrapper>
      {" "}
      <div style={{ paddingTop: "35px", color: "#bbc5c7" }}>
        <h3>PROGRAMMING LANGUAGES</h3>
        <ul style={{ marginLeft: 15 }}>
          <li>
            <b>Java® </b>- The Java programming language was developed by Sun
            Microsystems in the early 1990s.
          </li>
          <li>
            {" "}
            <b> Php</b> - PHP was conceived sometime in the fall of 1994 by
            Rasmus Lerdorf{" "}
          </li>
          <li>
            {" "}
            <b>Dot Net</b> - The .NET Framework (pronounced as "dot net") is a
            software framework developed by Microsoft that runs primarily on
            Microsoft Windows.
          </li>
          <li>
            {" "}
            <b>Angular</b> - AngularJS is an open-source web application
            framework. It was originally developed in 2009 by Misko Hevery and
            Adam Abrons. It is now maintained by Google. Its latest version is
            1.2.21.{" "}
          </li>
          <li>
            {" "}
            <b>React Js</b> - It was initially developed and maintained by
            Facebook
          </li>
          <li>
            {" "}
            <b>React Native</b> - As already mentioned, React Native was first
            developed in 2013 as an internal Facebook project, and then released
            to the public in 2015.
          </li>
        </ul>
        <div
          style={{
            marginLeft: 50,
            marginRight: 50,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {logo.map((logo, index) => {
            return (
              <div
                style={{
                  width: 150,
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "golden",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    style={{ height: 100, width: 100 }}
                    src={logo.url}
                    alt="react"
                  />
                  <p>{logo.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionWrapper>
  );
};
export default Dashboard;
