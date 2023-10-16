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
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contacts">Contacts</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation