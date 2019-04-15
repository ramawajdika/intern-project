import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link>
            <Image src={logo} className="header-brand" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Products</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
            <Nav.Link href="">Customers</Nav.Link>
            <Nav.Link href="">Partners</Nav.Link>
            <Nav.Link href="">Job Search</Nav.Link>
            <div class="vl" />
            <div id="login">
              <Nav.Link href="">Login</Nav.Link>
            </div>

            <Nav.Link href="" />
            <Button id="try-button" variant="success">
              Try for free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
