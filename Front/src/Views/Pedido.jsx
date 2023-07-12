import React from 'react';
import { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../style/pedido.css'
import api from '../../api';
import { useCompraContext } from '../hooks/useCompraContext';
import swal from 'sweetalert';

import ListGroup from 'react-bootstrap/ListGroup';
import airm2 from '../assets/airm2.jpg';
import Button from 'react-bootstrap/Button';

function Pedido() {
  const { itens, adicionarItemAoCarrinho, removerItemDoCarrinho, setItens, finalizarPedido } = useCompraContext();

  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const calcularTotal = () => {
    const total = itens.reduce((accumulator, item) => accumulator + item.preco * item.quantidade, 0);
    return total.toFixed(2);
  };

  const decrementarQuantidade = (item) => {
    if (item.quantidade > 1) {
      const novosItens = itens.map((produto) => {
        if (produto.id_produto === item.id_produto) {
          return { ...produto, quantidade: produto.quantidade - 1 };
        }
        return produto;
      });
      setItens(novosItens);
    } else if (item.quantidade === 1) {
      removerItem(item);
    }
  };

  const incrementarQuantidade = (item) => {
    adicionarItemAoCarrinho({ ...item, quantidade: item.quantidade + 1 });
  };

  const removerItem = (item) => {
    removerItemDoCarrinho(item);
  };

  const finalizar = async () => {
    const id_produtos = itens.map((item) => item.id_produto);
    const valor_total = calcularTotal();

    try {
      await api.post('/pedido/criar_pedido', {
        id_produto: id_produtos,
        valor_total: valor_total,
      });
      swal("Pronto!", "Pedido criado! O frete é por nossa conta. Aproveite :)", "success");
      setPedidoFinalizado(true); // Define o estado como true para indicar que o pedido foi finalizado
      finalizarPedido(); // Limpa o carrinho
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Veja o que está na sua sacola</h1>
      <h3>Frete grátis em todos os pedidos.</h3>

      {itens.length === 0 && !pedidoFinalizado ? (
        <h1 className="empty-cart">Seu carrinho está vazio</h1>
      ) : (
        <>
          {itens.length === 0 && pedidoFinalizado && (
            <h1 className="empty-cart">Seu carrinho está vazio</h1>
          )}
          <ListGroup className='lista'>
            {itens.map((item) => (
              <ListGroup.Item key={item.id_produto} className='itens'>
                <img src={airm2} className="airm2" />
                <h4>{item.nome}</h4>
                <h4>R$ {item.preco}</h4>
                <div className="inline-items">
                  <ion-icon name="remove-circle-outline" onClick={() => decrementarQuantidade(item)}></ion-icon>
                  <h4>{item.quantidade}</h4>
                  <ion-icon name="add-circle-outline" onClick={() => incrementarQuantidade(item)}></ion-icon>
                </div>
                <ion-icon name="trash-outline" onClick={() => removerItem(item)}></ion-icon>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}

      {itens.length > 0 && (
        <div className='total-finalizar'>
          <div className='total'></div>
          <h4>Total</h4>
          <div className='finalizar'>
            <h4>R$ {calcularTotal()}</h4>
            <Button onClick={finalizar} type='text' style={{ width: '200px' }}>
              Finalizar
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Pedido;