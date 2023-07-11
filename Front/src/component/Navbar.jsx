import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarApp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo da empresa" />
      </div>
      <div className="links-container">
        <Link to="/home">Home</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/pedido">Pedido</Link>
      </div>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="cart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </Navbar>
  );
}
export default NavbarApp;