import React, { useContext } from 'react';
import {Navbar, Container, Nav, Form}  from 'react-bootstrap';
import AppContext from '../../Context/AppContext';

import './Header.css';

function Header() {
  const {lightMode, setLightMode} = useContext(AppContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg={lightMode ? 'light' : 'dark'} variant={lightMode ? 'light' : 'dark'}>
      <Container className="containerNavbar">
        <Navbar.Brand href="#home" className="containerNameNav">
          <span className="nameNav">{`< Esau Matias />`}</span>
          <span className="subTitleNav">Front - end developer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="containerItensMenu">
            <Nav.Link href="#deets">HOME</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">QUEM SOU</Nav.Link>
            <Nav.Link eventKey={3} href="#memes">PORTFÓLIO</Nav.Link>
            <Nav.Link eventKey={4} href="#memes">CONHECIMENTOS</Nav.Link>
            <Nav.Link eventKey={5} href="#memes">CONTATO</Nav.Link>
              <Form.Check 
                type="switch"
                id={lightMode ? 'sol' : 'lua'}
                onClick={() => setLightMode(!lightMode)}
                className="containerModeTeme"
              />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
