import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../style/produtos.css'
import api from '../../api';
import { useCompraContext } from '../hooks/useCompraContext';
// Imagens
import pcs from '../assets/pcs.jpg';
import air from '../assets/air.jpg';

function Produtos() {
  // Desestruturação do objeto retornado pelo hook useCompraContext
  const { adicionarItemAoCarrinho } = useCompraContext();
  // criar um estado chamado produtos. O estado inicial é um array vazio []. A função setProdutos é usada para atualizar o estado.
  console.log(adicionarItemAoCarrinho)
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
    // A dependência [] vazia significa que o efeito só será executado uma vez, quando o componente for montado.
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await api.get('/produto/buscar_produtos');
      setProdutos(response.data.produtos);
    } catch (error) {
      console.error(error);
    }
  };

  const produtosCima = produtos.slice(0, 4);
  const produtosBaixo = produtos.slice(4, 8);

  const handleComprar = (produto) => {
    adicionarItemAoCarrinho(produto);
    localStorage.setItem('carrinho', JSON.stringify(produto));
  };

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
                <Button className='botao' variant="primary" onClick={() => handleComprar(produto)}>Comprar</Button>
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
                <Button className='botao' variant="primary" onClick={() => handleComprar(produto)}>Comprar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Produtos;