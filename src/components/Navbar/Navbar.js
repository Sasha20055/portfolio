import React from "react";
import "./Navbar.sass" 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Navigation = (props) => {
  return (
    <div className="navbarBlock">
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand href="/#about" className="navBrand"></Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="/#about">О себе</Nav.Link>
            <Nav.Link href="/#contacts">Контакты</Nav.Link>
            <Nav.Link href="/#projects">Проекты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation