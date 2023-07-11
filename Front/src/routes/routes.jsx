import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Carrinho from '../Views/Carrinho';
import Pedido from '../Views/Pedido';
import App from '../app';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;