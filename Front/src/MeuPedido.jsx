import React from 'react';
import Navbar from './Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import airm2 from './assets/airm2.jpg';
import ultima from './assets/ultima.png';
import escrito from './assets/escrito.png';
import fotof from './assets/fotof.png';
import Button from 'react-bootstrap/Button';

function MeuPedido() {

  const App = () => {
    const finalizar  = () => {
      console.log('Botão clicado!');
    };

    return (
      <>
        <Navbar/>
        <h2>Veja o que está na sua sacola</h2>

        <ListGroup className='lista'>              
          <ListGroup.Item className='grupo'>
            <img src={airm2} className="airm2" />
            MacBook Air
            Chip M2
            R$ 13.999
          </ListGroup.Item>
        </ListGroup>

        <Button onClick={finalizar} type='text' style={{ width: '200px' }}>Finalizar</Button>

        <img src={fotof} className="fotof-palavra" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <img src={escrito} className="escrito-palavra" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <img src={ultima} className="utlima-palavra" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </>
    );
  }

  return <App />;
}

export default MeuPedido;
