// Importando o banco
const database = require('./../banco')

// CRIAR USUARIO OK
exports.criar_usuario = (nome, cpf_cnpj, telefone, email, senha, admin) => {
    const query = "INSERT INTO usuario (nome, cpf_cnpj, telefone, email, senha, admin) VALUES ($1, $2, $3, $4, $5, $6)";
    return database.query(query, [nome, cpf_cnpj, telefone, email, senha, admin]);
};

// BUSCAR TODOS OS USUÁRIOS OK
exports.buscar_usuarios = () => {
    const query = "SELECT * FROM usuario";
    return database.query(query);
  };

// BUSCAR USUARIO PELO ID OK
exports.buscar_usuario = (id_usuario) => {
    const query = "SELECT * FROM usuario WHERE id_usuario = $1";
    return database.query(query, [id_usuario]);
};

// BUSCAR USUARIO PELO NOME OK
exports.buscar_nome_parcial_usuario = (nome) => {
    const query = "SELECT * FROM usuario WHERE nome LIKE $1";
    return database.query(query, [nome]);
};

// ATUALIZAR USUARIO OK
exports.atualizar_usuario = (id_usuario, nome, cpf_cnpj, telefone, email, senha, admin) => {
    const query = "UPDATE usuario SET nome = $1, cpf_cnpj = $2, telefone = $3, email = $4, senha = $5, admin = $6 WHERE id_usuario = $7";
    return database.query(query, [nome, cpf_cnpj, telefone, email, senha, admin, id_usuario]);
};

// EXCLUIR USUARIO OK
exports.excluir_usuario = (id_usuario) => {
    const query = "DELETE FROM usuario WHERE id_usuario = $1";
    return database.query(query, [id_usuario]);
};