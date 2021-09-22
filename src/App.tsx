import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Score from "./Components/Score/Score";
import Result from "./Components/Result/Result";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import { authOne } from "./Firebase";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "./Redux/hooks/useSelect";
import Updates from "./Components/Score/Updates/Updates";
function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const { error, loading, token } = useTypedSelector(
    (state) => state.repositories
  );
  useEffect(() => {
    authOne.onAuthStateChanged((user: any) => {
      console.log(user, "+mogitt");
      if (token) setUserId(user.multiFactor.user.email);
    });
  }, [token]);
  console.log(userId, "==");
  return (
    <div className="Body">
      <Router>
        <div className="Header">
          <div style={{ width: "50%" }}>
            <div className="ContentManage">
              {token ? (
                <>
                  <Link className="Link" to="/">
                    Home
                  </Link>
                  <Link className="Link" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="Link" to="/score">
                    Score
                  </Link>
                  <Link className="Link" to="/create">
                    Create
                  </Link>

                  <Link className="Link" to="/logout">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  
                  <Link className="Link" to="/signup">
                    SignUp
                  </Link>
                  <Link className="Link" to="/login">
                    Login
                  </Link>
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
            {token && <h3 style={{ color: "orange" }}>{userId}</h3>}
          </div>
        </div>
        {/* <div className="Content"> */}
        <div className="ContentManage">
          {token ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route exact path="/score" component={Score} />
              <Route exact path="/score/:id" component={Updates} />

              <Route path="/create" component={Result} />
              <Route path="/logout" component={Logout} />

              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Redirect to="/signup" />
            </Switch>
          )}
        </div>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
