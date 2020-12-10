import logo from "../../Logo.jpg";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GamesIndex from "../../components/GamesIndex/GamesIndex";
import ProfleEdit from "../../components/ProfileEdit/ProfileEdit";
import CollectionEdit from "../../components/CollectionEdit/CollectionEdit";
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="https://github.com/BurgersAndSalads/patient-deals" target="_blank">
              <img src={logo} width="30" height="30" alt="my repo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Create</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link" className="mr-2">Account</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={GamesIndex} />
          <Route path="/edit/:id" component={ProfleEdit} />
          <Route path="/create" component={CollectionEdit} />
        </div>
      </Router>
    );
  }
}