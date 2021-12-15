import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar bg="dark"  fixed="bottom" variant="dark">
        <Container>
          <Navbar.Brand href="/">Copy writed by BUYOYA Ibrahim</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
