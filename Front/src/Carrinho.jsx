
import Navbar from './Navbar';
import mac from './public/mac.png';
import segunda from "./public/segunda.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import air from './public/air.jpg';
import airm2 from './public/airm2.jpg';
import pro13 from './public/pro13.jpg';
import pro14 from './public/pro14.jpg';
import imac from './public/imac.jpg';
import macmini from './public/macmini.jpg';
import macstudio from './public/macstudio.jpg';
import macpro from './public/macpro.jpg';
import palavra from "./public/palavra.png";



// estrutura basica de um componente

function Carrinho() {
  
  // logica javascript


  return (
    <>
      <Navbar/>
      <div className="App">
        <header className="App-header">
        
        <img src={mac} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          
          </header>
          </div>

          <h2>Qual é o Mac Ideal para você?</h2>
          <h5>Laptop</h5>

          <div className='container-card'>          
          <Card style={{ width: '18rem' }}>
          <Card.Img src={air} className="air-jpg"/>
         <Card.Body className='body'>
          <Card.Title >MacBook Air</Card.Title>
          <Card.Text >
          Chip M1
          <p>R$ 11.599 </p>
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={airm2} className="airm2-jpg"/>
         <Card.Body className='body'>
          <Card.Title >MacBook Air</Card.Title>
          <Card.Text>
          Chip M2
          <p>R$ 13.999 </p>
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={pro13} className="pro13-jpg"/>
         <Card.Body className='body'>
          <Card.Title >MacBook Pro de 13pol.</Card.Title>
          <Card.Text>
          <p>R$ 15.299</p> 
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={pro14} className="pro14-jpg"/>
         <Card.Body className='body'>
          <Card.Title>MacBook Pro de 14 e 16 pol.</Card.Title>
          <Card.Text >
         <p>R$ 23.999 </p>
        </Card.Text>
        <Button className='botao' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>

      
    <h2>Qual é o Mac Ideal para você?</h2>
          <h5>Desktop</h5>

          <div className='container-card'>          
          <Card style={{ width: '18rem' }}>
          <Card.Img src={imac} className="imac-jpg"/>
         <Card.Body className='body'>
          <Card.Title >iMac</Card.Title>
          <Card.Text >
          <p>R$ 14.799</p>
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={macmini} className="macmini-jpg"/>
         <Card.Body className='body'>
          <Card.Title >Mac mini</Card.Title>
          <Card.Text>
          <p>R$ 7.499 </p>
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={macstudio} className="macstudio-jpg"/>
         <Card.Body className='body'>
          <Card.Title >Mac Studio</Card.Title>
          <Card.Text>
          <p>R$ 23.799</p> 
        </Card.Text>
        <Button className='botao'  variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
          <Card.Img src={macpro} className="macpro-jpg"/>
         <Card.Body className='body'>
          <Card.Title>Mac Pro</Card.Title>
          <Card.Text >
         <p>R$ 62.999 </p>
        </Card.Text>
        <Button className='botao' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>

    <img src={palavra} className="App-palavra" alt="logo" />
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

export default Carrinho
