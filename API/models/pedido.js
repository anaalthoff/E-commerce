// Importando o banco
const database = require('./../banco')

// CRIAR UM PEDIDO OK
exports.criar_pedido = (id_produto, valor_total) => {
  const query = "INSERT INTO pedido (id_produto, valor_total) VALUES ($1, $2)";
  return database.query(query, [id_produto, valor_total]);
};

// BUSCAR TODOS OS PEDIDOS OK
exports.buscar_pedidos = () => {
    const query = "SELECT * FROM pedido";
    return database.query(query);
  };

// CONSULTAR PEDIDOS USUARIO OK
exports.consultar_pedidos_usuario = (id_usuario) => {
    const query = "SELECT * FROM pedido WHERE id_usuario = $1";
    return database.query(query, [id_usuario]);
};