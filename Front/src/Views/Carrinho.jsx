import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../style/carrinho.css'
import api from '../../api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Imagens
import pcs from '../assets/pcs.jpg';
import air from '../assets/air.jpg';
import airm2 from '../assets/airm2.jpg';
import pro13 from '../assets/pro13.jpg';
import pro14 from '../assets/pro14.jpg';
import imac from '../assets/imac.jpg';
import macmini from '../assets/macmini.jpg';
import macstudio from '../assets/macstudio.jpg';
import macpro from '../assets/macpro.jpg';

function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await axios.get('/api/produtos');
      setProdutos(response.data.produtos);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />

      <div className='folder'>
        <h1>Venha pelo desempenho.</h1>
        <h2>Fique pela diversão.</h2>
        <img src={pcs} alt="Pcs " />
      </div>

      <h1 className='title'>Qual é o Mac ideal para você?</h1>

      <div className='container-card'>
        <div className='card-group'>
          {/* Cards do primeiro grupo */}
          {produtos.map((produto) => (
            <Card key={produto.id_produto}>
              <Card.Img src={getImageByType(produto.tipo)} className="air-jpg" />
              <Card.Body className='body'>
                <Card.Title >{produto.nome}</Card.Title>
                <Card.Text>
                  <span>{produto.descricao}</span>
                  <span>R$ {produto.preco}</span>
                </Card.Text>
                <Button className='botao' variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))}
          <Card>
            <Card.Img src={airm2} className="airm2-jpg" />
            <Card.Body className='body'>
              <Card.Title>MacBook Air</Card.Title>
              <Card.Text>
                <span>Chip M2</span>
                <span>R$ 13.999</span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img src={pro13} className="pro13-jpg" />
            <Card.Body className='body'>
              <Card.Title>MacBook Pro</Card.Title>
              <Card.Text>
                <span>13 pol.</span>
                <span>R$ 15.299</span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img src={pro14} className="pro14-jpg" />
            <Card.Body className='body'>
              <Card.Title>MacBook Pro</Card.Title>
              <Card.Text>
                <span>14 pol.</span>
                <span>R$ 23.999</span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container-card'>
        <div className='card-group'>
          {/* Cards do segundo grupo */}
          <Card>
            <Card.Img src={imac} className="imac-jpg" />
            <Card.Body className='body'>
              <Card.Title >iMac</Card.Title>
              <Card.Text>
                <span>14 pol.</span>
                <span>R$ 14.799</span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img src={macmini} className="macmini-jpg" />
            <Card.Body className='body'>
              <Card.Title>Mac mini</Card.Title>
              <Card.Text>
                <span>14 pol.</span>
                <span>R$ 7.499 </span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img src={macstudio} className="macstudio-jpg" />
            <Card.Body className='body'>
              <Card.Title>Mac Studio</Card.Title>
              <Card.Text>
                <span>14 pol.</span>
                <span>R$ 23.799</span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img src={macpro} className="macpro-jpg" />
            <Card.Body className='body'>
              <Card.Title>Mac Pro</Card.Title>
              <Card.Text>
                <span>14 pol.</span>
                <span>R$ 62.999 </span>
              </Card.Text>
              <Button className='botao' variant="primary">Comprar</Button>
            </Card.Body>
          </Card>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrinho