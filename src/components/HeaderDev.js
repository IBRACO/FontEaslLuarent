import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Switcher from ".";
// import { NavDropdown } from 'react-bootstrap';

function HeadrDev() {
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">EASLille</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
              </Nav>
              <Nav>
                {/* <Nav.Link href="#deets">More deets</Nav.Link>
                 <Nav.Link eventKey={2} href="#memes">
                Dank memes
                 </Nav.Link> */}
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="actualite">Actualité</Nav.Link>
                <Nav.Link href="chat">chat</Nav.Link>
                <Nav.Link href="contactUs">Contact</Nav.Link>
                <Nav.Link href="training">Entrainement</Nav.Link>
                <Nav.Link href="don">Don</Nav.Link>
                <Nav.Link href="inscription">Inscription</Nav.Link>
                <Nav.Link href="quiSommesNous">Qui Sommes Nous</Nav.Link>
                <Nav.Link href="services">Services</Nav.Link>
                <Nav.Link href="cotisation">Cotisation</Nav.Link>
                <Nav.Link href="singIn">Connexion</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default HeadrDev;
