import React from 'react';
import Home from './Views/Home';
import Produtos from './Views/Produtos'
import Pedido from './Views/Pedido'
import './style/app.css';
import { CompraProvider } from './context/compraProvider';

// Define um componente de função chamado App
function App() {
  return (
    <>
      <CompraProvider>
        <div className="App">
          <Home />
          <Produtos />
          <Pedido />
        </div>
      </CompraProvider>
    </>
  );
}

export default App;

//  como já envolveu o componente App com o CompraProvider no arquivo App.js, não precisa fazer nenhuma modificação específica nas rotas.