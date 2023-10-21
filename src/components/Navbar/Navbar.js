import React from "react";
import "./Navbar.sass" 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";


const Navigation = (props) => {
  return (
    <div className="navbarBlock">
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand className="navBrand"><NavLink className="navBrandLink" to={"/about"}></NavLink></Navbar.Brand>
          <Nav className="m-auto d-flex gap-3">
            <NavLink to={"/about"} className="text-secondary">О себе</NavLink>
            <NavLink to={"/contacts"} className="text-secondary">Контакты</NavLink>
            <NavLink to={"/projects"} className="text-secondary">Проекты</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation