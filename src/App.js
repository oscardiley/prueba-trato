import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Pages/Signup/SignUp";
import Home from "./Pages/Home/Home";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"}>
          {Home}
        </Route>
        <Route path={"/sign-up"}>
          {SignUp}
        </Route>
        <Route path={"/dashboard"}>
          {DashboardPage}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
