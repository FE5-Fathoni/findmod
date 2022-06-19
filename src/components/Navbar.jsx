import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <h3>Finmod.id</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className={`${
                  currentPage === "Home" ? "active-nav" : ""
                } my-style`}
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                onClick={() => {
                  setCurrentPage("Home");
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={currentPage === "About" ? "active-nav" : ""}
                onClick={() => {
                  setCurrentPage("About");
                }}
                to="/about"
                style={{ color: "black", textDecoration: "none" }}
              >
                About
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className={`${
                  currentPage === "Pricing" ? "active-nav" : ""
                } my-style`}
                to="/pricing"
                style={{ color: "black", textDecoration: "none" }}
                onClick={() => {
                  setCurrentPage("Pricing");
                }}
              >
                Pricing
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={`${
                  currentPage === "Login" ? "active-nav" : ""
                } my-style`}
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
                onClick={() => {
                  setCurrentPage("Login");
                }}
              >
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={`${
                  currentPage === "SignIn" ? "active-nav" : ""
                } my-style`}
                to="/signin"
                style={{ color: "black", textDecoration: "none" }}
                onClick={() => {
                  setCurrentPage("SignIn");
                }}
              >
                SignIn
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
export default NavbarComponent;
