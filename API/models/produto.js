// Importando o banco
const database = require('./../banco')

// CRIAR PRODUTO OK
exports.criar_produto = (nome, preco, cor, tamanho, tipo, foto, quantidade) => {
    const query = "INSERT INTO produto (nome, preco, cor, tamanho, tipo, foto, quantidade) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    return database.query(query, [nome, preco, cor, tamanho, tipo, foto, quantidade]);
}

// BUSCAR TODOS OS PRODUTOS OK
exports.buscar_produtos = () => {
    const query = "SELECT * FROM produto";
    return database.query(query);
  };

// BUSCAR PRODUTO PELO ID OK
exports.buscar_produto = (id_produto) => {
    // Select coleta o produto que for igual ao parâmetro "id_produto"
    const query = "SELECT * FROM produto WHERE id_produto = $1"
    console.log(id_produto)
    // Os valores que são passados como segundo parâmetro no comando database.query devem estar como Array
    // Realizando a query passando os parâmetros
    return database.query(query, [id_produto])
}

// BUSCAR PRODUTO PELO NOME OK
exports.buscar_nome_parcial = (nome) => {
    const query = "SELECT * FROM produto WHERE nome LIKE $1"
    return database.query(query, [nome])
}

// BUSCAR TODOS OS PRODUTOS DE UM TIPO(EX: Macbook, IMac, Mac Mini, Mac Studio, Mac Pro) OK
exports.buscar_produtos_por_tipo = (tipo) => {
    const query = "SELECT * FROM produto WHERE tipo = $1";
    return database.query(query, [tipo]);
};

// ATUALIZAR PRODUTO OK
exports.atualizar_produto = (id_produto, nome, preco, cor, tamanho, tipo, foto, quantidade) => {
    const query = "UPDATE produto SET nome = $1, preco = $2, cor = $3, tamanho = $4, tipo = $5, foto = $6, quantidade = $7 WHERE id_produto = $8";
    return database.query(query, [nome, preco, cor, tamanho, tipo, foto, quantidade, id_produto]);
};

// EXCLUIR PRODUTO PELO ID OK
exports.excluir_produto = (id_produto) => {
    const query = "DELETE FROM produto WHERE id_produto = $1";
    return database.query(query, [id_produto]);
}

// ATUALIZAR ESTOQUE APÓS PAGAMENTO
exports.atualizar_quantidade_produto = (id_produto, quantidade) => {
    const query = "UPDATE produto SET quantidade = quantidade - $1 WHERE id_produto = $2";
    return database.query(query, [quantidade, id_produto]);
};