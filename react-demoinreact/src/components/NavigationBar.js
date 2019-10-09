import React from 'react';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover{
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Contact">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </Styles>
)