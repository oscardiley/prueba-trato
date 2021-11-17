import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Inicio from "../../Pages/Inicio/Inicio";
import Plantillas from "../../Pages/Plantillas/Plantillas";
import { Container, ContentDash } from "../../globalStyles";

const Dashboard = () => {
  return (
    <>
      <ContentDash>
        <Router>
          <Navbar />
          <Container>
            <Sidebar />
            <Switch>
              <Route path="/inicio">{Inicio}</Route>
              <Route path="/planillas">{Plantillas}</Route>
            </Switch>
          </Container>
        </Router>
      </ContentDash>
    </>
  );
};

export default Dashboard;
