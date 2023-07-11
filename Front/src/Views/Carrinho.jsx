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

function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await api.get('/produto/buscar_produtos');
      setProdutos(response.data.produtos);
      console.log(produtos)
    } catch (error) {
      console.error(error);
    }
  };

  const produtosCima = produtos.slice(0, 4);
  const produtosBaixo = produtos.slice(4, 8);

  return (
    <>
      <Navbar />

      <div className='folder'>
        <h1>Venha pelo desempenho.</h1>
        <h2>Fique pela diversão.</h2>
        <img src={pcs} alt="Pcs" />
      </div>

      <h1 className='title'>Qual é o Mac ideal para você?</h1>

      <div className='container-card'>
        <div className='card-group'>
          {/* Cards do primeiro grupo */}
          {produtosCima.map((produto) => (
            <Card key={produto.id_produto}>
              <Card.Img src={air} className="air-jpg" />
              <Card.Body className='body'>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>
                  <span>{produto.tamanho} pol.</span>
                  <span>{produto.cor}</span>
                  <span>R$ {produto.preco}</span>
                </Card.Text>
                <Button className='botao' variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className='container-card'>
        <div className='card-group'>
          {/* Cards do segundo grupo */}
          {produtosBaixo.map((produto) => (
            <Card key={produto.id_produto}>
              <Card.Img src={air} className="air-jpg" />
              <Card.Body className='body'>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>
                  <span>{produto.tamanho} pol.</span>
                  <span>{produto.cor}</span>
                  <span>R$ {produto.preco}</span>
                </Card.Text>
                <Button className='botao' variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

// Função auxiliar para obter a imagem de acordo com o tipo de produto
// const getImageByType = (tipo) => {
//   switch (tipo) {
//     case 'MacBook Air':
//       return air;
//     case 'MacBook Air M2':
//       return airm2;
//     case 'MacBook Pro 13':
//       return pro13;
//     case 'MacBook Pro 14':
//       return pro14;
//     case 'iMac':
//       return imac;
//     case 'Mac Mini':
//       return macmini;
//     case 'Mac Studio':
//       return macstudio;
//     case 'Mac Pro':
//       return macpro;
//     default:
//       return '';
//   }
// }

export default Carrinho;