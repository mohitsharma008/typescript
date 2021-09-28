import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";
import {
  FaRegShareSquare,
  FaExpeditedssl,
  FaPlus,
  FaHome,
  FaWhmcs,
  FaHistory,
  FaDoorOpen,
  FaRegPlusSquare,
  FaUserCheck,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Score from "./Components/Score/Score";
import Result from "./Components/Result/Result";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
// import { useLocation } from "react-router-dom";
import { authOne } from "./Firebase";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "./Redux/hooks/useSelect";
import Updates from "./Components/Score/Updates/Updates";
import { AnimatePresence } from "framer-motion";
function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const location = useLocation();
  const { error, loading, token } = useTypedSelector(
    (state) => state.repositories
  );
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  useEffect(() => {
    authOne.onAuthStateChanged((user: any) => {
      console.log(user, "+mogitt");
      if (token) setUserId(user.multiFactor.user.email);
    });
  }, [token]);
  console.log(userId, "==");
  return (
    <div className="Body">
      {/* <Router> */}
      <div className="Header">
        <div style={{ width: "50%" }}>
          <div className="ContentManage">
            {token ? (
              <>
                <div style={{ display: "flex" }}>
                  <Link
                    className={`Link ${
                      splitLocation[1] === "" ? "active" : ""
                    }`}
                    to="/"
                  >
                    <div style={{ display: "flex" }}>
                      <>Home</>
                      <FaHome
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>
                  <Link
                    className={`Link ${
                      splitLocation[1] === "dashboard" ? "active" : ""
                    }`}
                    to="/dashboard"
                  >
                    <div style={{ display: "flex" }}>
                      <>Dashboard</>
                      <FaWhmcs
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>
                  <Link
                    className={`Link ${
                      splitLocation[1] === "result" ? "active" : ""
                    }`}
                    to="/result"
                  >
                    <div style={{ display: "flex" }}>
                      <>Result</>
                      <FaHistory
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>
                  <Link
                    className={`Link ${
                      splitLocation[1] === "create" ? "active" : ""
                    }`}
                    to="/create"
                  >
                    <div style={{ display: "flex" }}>
                      <>Create</>
                      <FaRegPlusSquare
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>

                  <Link
                    className={`Link ${
                      splitLocation[1] === "logout" ? "active" : ""
                    }`}
                    to="/logout"
                  >
                    <div style={{ display: "flex" }}>
                      <>Logout</>
                      <FaRegShareSquare
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex" }}>
                  <Link
                    to="/signup"
                    className={`Link ${
                      splitLocation[1] === "signup" ? "active" : ""
                    }`}
                  >
                    <div style={{ display: "flex" }}>
                      <>SignUp</>
                      <FaExpeditedssl
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>

                  <Link
                    className={`Link ${
                      splitLocation[1] === "login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    <div style={{ display: "flex" }}>
                      <>Login</>
                      <FaDoorOpen
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "30px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            fontSize: "18px",
            marginRight: 5,
          }}
        >
          {token && (
            <h3 style={{ color: "orange", display: "flex" }}>
              <FaUserCheck style={{ marginRight: 3, marginTop: 3 }} />
              {userId}
            </h3>
          )}
        </div>
      </div>
      {/* <div className="Content"> */}
      <div className="ContentManage">
        {token ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/result" component={Score} />
            <Route exact path="/result/:id" component={Updates} />

            <Route path="/create" component={Result} />
            <Route path="/logout" component={Logout} />

            <Redirect to="/" />
          </Switch>
        ) : (
          <AnimatePresence>
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Redirect to="/signup" />
            </Switch>
          </AnimatePresence>
        )}
      </div>
      {/* </div> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
