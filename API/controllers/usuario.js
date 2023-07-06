// Importando produto do models
const model = require('../models/usuario')

// CRIAR USUARIO OK
exports.criar_usuario = (req, res) => {
    const { nome, cpf_cnpj, telefone, email, senha, admin } = req.body;
    model.criar_usuario(nome, cpf_cnpj, telefone, email, senha, admin)
        .then(() => {
            res.status(200).send({ mensagem: 'Usuário criado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// BUSCAR TODOS OS USUÁRIOS OK
exports.buscar_usuarios = (req, res) => {
    model.buscar_usuarios()
      .then((resultado) => {
        res.status(200).send({ usuarios: resultado.rows });
      })
      .catch((erro) => {
        res.status(500).send({ erro: erro });
      });
  };

// BUSCAR USUARIO PELO ID OK
exports.buscar_usuario = (req, res) => {
    const id_usuario = req.params.id_usuario;
    model.buscar_usuario(id_usuario)
        .then((resultado) => {
            res.status(200).send({ usuario: resultado.rows[0] });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// BUSCAR USUARIO PELO NOME OK
exports.buscar_nome_parcial_usuario = (req, res) => {
    const nome = "%" + req.params.nome + "%";
    model.buscar_nome_parcial_usuario(nome)
        .then((resultado) => {
            res.status(200).send({ usuarios: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// ATUALIZAR USUARIO OK
exports.atualizar_usuario = (req, res) => {
    const id_usuario = req.params.id_usuario;
    const { nome, cpf_cnpj, telefone, email, senha, admin } = req.body;
    model.atualizar_usuario(id_usuario, nome, cpf_cnpj, telefone, email, senha, admin)
        .then(() => {
            res.status(200).send({ mensagem: 'Usuário atualizado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// DELETAR USUARIO OK
exports.excluir_usuario = (req, res) => {
    const id_usuario = req.params.id_usuario;
    model.excluir_usuario(id_usuario)
        .then(() => {
            res.status(200).send({ mensagem: 'Usuário excluído com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};