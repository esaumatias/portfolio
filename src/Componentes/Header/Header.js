import React, { useContext, useState, useEffect } from 'react';
import {Navbar, Container, Nav, Form}  from 'react-bootstrap';
import AppContext from '../../Context/AppContext';

import './Header.css';

function Header() {
  const {lightMode, setLightMode} = useContext(AppContext);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function className() {
    if (offset >= 5) {
      return lightMode ? 'lightHeader' : 'darkHeader';
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg={lightMode ? 'light containerNavbar' : 'dark containerNavbar'} variant={lightMode ? 'light' : 'dark'}>
      <Container className={`containerNavbar ${className()}`}>
        <Navbar.Brand href="#home" className="containerNameNav">
          <span className="nameNav">{`< Esau Matias />`}</span>
          <span className="subTitleNav">Front - end developer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="containerItensMenu">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link eventKey={2} href="#quemSou">QUEM SOU</Nav.Link>
            <Nav.Link eventKey={3} href="#conhecimentos">CONHECIMENTOS</Nav.Link>
            <Nav.Link eventKey={4} href="#portfolio">PORTFÓLIO</Nav.Link>
            <Nav.Link eventKey={5} href="#contato">CONTATO</Nav.Link>
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
