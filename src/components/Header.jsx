import React, { useState, useEffect} from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";
import { NavHashLink } from "react-router-hash-link";
import {
  useLocation
} from "react-router-dom";


const Header = () => {
  let location = useLocation();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${sticky ? "sticky" : ""}`}
        >
          <Container>
            <Navbar.Brand>
              <Nav.Link href="/">
                {" "}
                <img src={logo} alt="logo" width="35"/>{" "}
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-responsive" />
            <Navbar.Collapse id="navbar-responsive">
                <Nav className="flex-grow-1 pe-3 ">
                  <NavHashLink to="/#" className={`${location.pathname}${location.hash}` === "/" ? "active-link" : ""}>
                    Home
                  </NavHashLink>
                  <NavHashLink smooth="true" to="/#services" className={`${location.pathname}${location.hash}` === "/#services" ? "active-link" : ""}>
                    Services
                  </NavHashLink>
                  <NavHashLink snooth="true" to="/#resume" className={`${location.pathname}${location.hash}` === "/#resume" ? "active-link" : ""}>
                    Resume
                  </NavHashLink>
                  <NavHashLink smooth="true" to="/#projects" className={`${location.pathname}${location.hash}` === "/#projects" ? "active-link" : ""}>
                    Projects
                  </NavHashLink>
                </Nav>
                <Nav className="ml-auto">
                    <NavHashLink smooth to="/#blogs" className={`${location.pathname}${location.hash}` === "/#blogs" ? "active-link" : ""}>
                    Blogs
                    </NavHashLink>
                    <NavHashLink to="/#contact" className={`${location.pathname}${location.hash}` === "/#contact" ? "active-link" : ""}>
                    Contact Me
                    </NavHashLink>
                  </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
