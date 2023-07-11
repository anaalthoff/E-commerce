import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import marca from "./assets/marca.png";
import { Link } from "react-router-dom"
import './Navbar.css'

function NavbarApp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={marca} className="marca" alt="Logo da minha aplicação" />
        <Nav className="me-auto">
          <Link to="/app">HOME</Link>
          <Link to="/carrinho">CARRINHO</Link>
          <Link to="/meupedido">MEU PEDIDO</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}



export default NavbarApp;
