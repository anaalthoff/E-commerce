import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Produtos from '../Views/Produtos';
import Pedido from '../Views/Pedido';
// import Pages from '../Views/Pages';
import App from '../App';
import { CompraProvider } from '../context/compraProvider';

function AppRoutes() {
  return (
    <BrowserRouter>
      <CompraProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/pedido" element={<Pedido />} />
          {/* <Route path="/pages" element={<Pages />} /> */}
        </Routes>
      </CompraProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;