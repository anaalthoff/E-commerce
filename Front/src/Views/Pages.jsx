import React, { useState, useEffect } from 'react';
import api from '../../api';
import '../style/AdminPanel.css';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productType, setProductType] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editProductCode, setEditProductCode] = useState('');

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await api.get('produto/buscar_produtos');
      if (response.data && response.data.produtos) {
        setProducts(response.data.produtos);
      } else {
        console.error('Dados de produtos ausentes na resposta:', response.data);
      }
    } catch (error) {
      console.error('Erro ao obter a lista de produtos:', error);
    }
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductColorChange = (event) => {
    setProductColor(event.target.value);
  };

  const handleProductSizeChange = (event) => {
    setProductSize(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editMode) {
      // Editar produto existente
      try {
        await api.put(`produto/atualizar_produto/${editProductCode}`, {
          nome: productName,
          preco: productPrice,
          cor: productColor,
          tamanho: productSize,
          tipo: productType,
          quantidade: productQuantity,
        });
        buscarProdutos(); // Atualizar a lista de produtos
      } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
      }
    } else {
      // Cadastrar novo produto
      try {
        await api.post('produto/criar_produto', {
          nome: productName,
          preco: productPrice,
          cor: productColor,
          tamanho: productSize,
          tipo: productType,
          quantidade: productQuantity,
        });
        buscarProdutos(); // Atualizar a lista de produtos
      } catch (error) {
        console.error('Erro ao cadastrar o produto:', error);
      }
    }
    setProductName('');
    setProductCode('');
    setProductPrice(0);
    setProductColor('');
    setProductSize('');
    setProductType('');
    setProductQuantity(0);
    setEditMode(false);
    setEditProductCode('');
  };

  const handleDeleteProduct = async (idProduto) => {
    try {
      await api.delete(`produto/excluir_produto/${idProduto}`);
      buscarProdutos(); // Atualizar a lista de produtos
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  const handleEditProduct = (idProduto) => {
    const productToEdit = products.find((product) => product.id_produto === idProduto);
    if (productToEdit) {
      setProductName(productToEdit.nome);
      setProductCode(productToEdit.id_produto.toString());
      setProductPrice(productToEdit.preco);
      setProductColor(productToEdit.cor);
      setProductSize(productToEdit.tamanho);
      setProductType(productToEdit.tipo);
      setProductQuantity(productToEdit.quantidade);
      setEditMode(true);
      setEditProductCode(idProduto);
    }
  };

  const handleViewProduct = (idProduto) => {
    const product = products.find((product) => product.id_produto === idProduto);
    if (product) {
      alert(`Código: ${product.id_produto}\nNome: ${product.nome}`);
    }
  };

  return (
    <div>
      <h1>Painel de Administração</h1>
      <form onSubmit={handleSubmit}>
        <h2>{editMode ? 'Editar Produto' : 'Cadastrar Produto'}</h2>
        <label htmlFor="productName">Nome do Produto:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
          required
        />
        <label htmlFor="productCode">Código do Produto:</label>
        <input
          type="text"
          id="productCode"
          value={productCode}
          onChange={handleProductCodeChange}
          required
        />
        <label htmlFor="productPrice">Preço do Produto:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={handleProductPriceChange}
          required
        />
        <label htmlFor="productColor">Cor do Produto:</label>
        <input
          type="text"
          id="productColor"
          value={productColor}
          onChange={handleProductColorChange}
          required
        />
        <label htmlFor="productSize">Tamanho do Produto:</label>
        <input
          type="text"
          id="productSize"
          value={productSize}
          onChange={handleProductSizeChange}
          required
        />
        <label htmlFor="productType">Tipo do Produto:</label>
        <input
          type="text"
          id="productType"
          value={productType}
          onChange={handleProductTypeChange}
          required
        />
        <label htmlFor="productQuantity">Quantidade do Produto:</label>
        <input
          type="number"
          id="productQuantity"
          value={productQuantity}
          onChange={handleProductQuantityChange}
          required
        />
        <button type="submit">{editMode ? 'Salvar' : 'Cadastrar'}</button>
      </form>

      <hr />

      <h2>Produtos Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Cor</th>
            <th>Tamanho</th>
            <th>Tipo</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id_produto}>
              <td>{product.id_produto}</td>
              <td>{product.nome}</td>
              <td>{product.preco}</td>
              <td>{product.cor}</td>
              <td>{product.tamanho}</td>
              <td>{product.tipo}</td>
              <td>{product.quantidade}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id_produto)}>Editar</button>
                <button onClick={() => handleDeleteProduct(product.id_produto)}>Excluir</button>
                <button onClick={() => handleViewProduct(product.id_produto)}>Visualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/home"><button>Voltar</button></Link>
    </div>
  );
}

export default AdminPanel;