// Importando produto do models
const model = require('../models/pedido')

// CRIAR UM PEDIDO OK
exports.criar_pedido = (req, res) => {
    const { id_produto, valor_total } = req.body;

    model.criar_pedido(id_produto, valor_total)
        .then(() => {
            res.status(200).send({ mensagem: 'Pedido criado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// BUSCAR TODOS OS PEDIDOS OK
exports.buscar_pedidos = (req, res) => {
    model.buscar_pedidos()
        .then((resultado) => {
            res.status(200).send({ pedidos: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// CONSULTAR PEDIDOS USUARIO OK
exports.consultar_pedidos_usuario = (req, res) => {
    const id_usuario = req.params.id_usuario;
    model.consultar_pedidos_usuario(id_usuario)
        .then((resultado) => {
            res.status(200).send({ pedidos: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};