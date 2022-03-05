import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { setHeaders } from "./api";
import { getMe } from "./api/endpoints/user";
import "./App.css";
import BlockUx from "./context/BlockUx";
import Home from "./components/Home";
import Login from "./components/Login";
import TopNav from "./components/TopNav";
import { UserContext } from "./context/userContext";
import Notfound from "./Routes/404NF";
import About from "./Routes/About";
import Dashboard from "./Routes/Dashboard";
import Accounts from "./Routes/Dashboard/Accounts";
import Events from "./Routes/Dashboard/Events";
import Layout from "./Routes/Dashboard/Layout";
import Profile from "./Routes/Dashboard/Profile";
import Stream from "./Routes/Dashboard/Stream";
import Violations from "./Routes/Dashboard/Violations";
import ViolationType from "./Routes/Dashboard/ViolationType";
import Violators from "./Routes/Dashboard/Violators";
import Private from "./Routes/Private";
import AiConfig from "./Routes/Dashboard/AiConfig";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import VideoStream from "./Routes/VideoStream";

let token = null;

function App() {
  const { user, setUser } = React.useContext(UserContext);

  try {
    token = localStorage.getItem("token");
    setHeaders("Authorization", `Bearer ${token}`);
  } catch (e) {
    localStorage.removeItem("token");
  }

  React.useEffect(() => {
    if (!user && token) {
      getMe().then((res) => res && setUser({ ...res, token }));
    }
  }, []);

  return (
    <BlockUx>
      <Toaster position="top-center" reverseOrder={true} />
      <TopNav />
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={2000}> */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route
          element={
            <Login>
              <div className="overflow-hidden"></div>{" "}
            </Login>
          }
          path="/login"
        />
        {/* <Route path="/stream" element={<Private component={VideoStream} />} /> */}

            <Route path="/dashboard" element={<Private component={Layout} />}>
              <Route index element={<Private component={Dashboard} />} />
              <Route path="profile" element={<Private component={Profile} />} />
              <Route
                path="accounts"
                element={<Private component={Accounts} />}
              />
              <Route path="events" element={<Private component={Events} />} />
              <Route path="stream" element={<Private component={Stream} />} />
              <Route
                path="violators"
                element={<Private component={Violators} />}
              />
              <Route
                path="violation"
                element={<Private component={Violations} />}
              />
              <Route
                path="ai-config"
                element={<Private component={AiConfig} />}
              />
              <Route
                path="violation-type"
                element={<Private component={ViolationType} />}
              />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
        {/* </CSSTransition>
      </TransitionGroup> */}
    </BlockUx>
  );
}

export default App;
