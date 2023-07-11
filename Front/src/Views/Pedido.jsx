import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../style/pedido.css'
import api from '../../api';

import ListGroup from 'react-bootstrap/ListGroup';
import airm2 from '../assets/airm2.jpg';
import Button from 'react-bootstrap/Button';

function Pedido() {

  const App = () => {
    const finalizar = () => {
      console.log('Botão clicado!');
    };

    return (
      <>
        <Navbar />
        <h1>Veja o que está na sua sacola</h1>
        <h3>Frete grátis em todos os pedidos.</h3>

        <ListGroup className='lista'>
          <hr />
          <ListGroup.Item className='itens'>
            <img src={airm2} className="airm2" />
            <h4>MacBook Air</h4>
            <h4>R$ 13.999</h4>
            <div className="inline-items">
              <ion-icon name="remove-circle-outline"></ion-icon>
              <h4>1</h4>
              <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
          </ListGroup.Item>
          <hr />
        </ListGroup>

        <div className='total-finalizar'>
          <div className='total'></div>
          <h4>Total</h4>
          <div className='finalizar'>
            <h4>R$ 13.999</h4>
            <Button onClick={finalizar} type='text' style={{ width: '200px' }}>Finalizar</Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return <App />;
}

export default Pedido;
