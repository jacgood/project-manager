import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// -- Components --
import MyProjects from "./components/myProjects"
import MyTasks from "./components/myTasks"
import MyGoals from "./components/myGoals"
import MyStats from "./components/myStats"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </Navbar.Brand>

              <Nav>
                <Nav className="justify-content-start">
                  <Link to={"/my-projects"} className="nav-link">
                    My Projects
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/my-tasks"} className="nav-link">
                    My Tasks
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/my-goals"} className="nav-link">
                    My Goals
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/my-stats"} className="nav-link">
                    My Stats
                  </Link>
                </Nav>
              </Nav>

              <Nav>
                <NavDropdown title="Jacob T. Good" id="my-account">
                  <NavDropdown.Item href={'/my-account'}>My Account</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={MyProjects} />
                  <Route exact path='/my-projects' component={MyProjects} />
                  <Route exact path='/my-tasks' component={MyTasks} />
                  <Route exact path='/my-goals' component={MyGoals} />
                  <Route exact path='/my-stats' component={MyStats} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
