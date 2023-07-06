// Importando produto do models
const model = require('../models/pedido')

// CRIAR PEDIDO E ATUALIZAR ESTOQUE
// exports.criar_pedido = (req, res) => {
//     const id_usuario = req.params.id_usuario;
//     const data_pedido = new Date().toISOString().slice(0, 10); // Obtém a data atual

//     let pedidoID; // Variável para armazenar o ID do pedido criado

//     model.criar_pedido(id_usuario, data_pedido)
//         .then((resultado) => {
//             pedidoID = resultado.rows[0].id_pedido;
//             // Após o pedido ser criado com sucesso, buscar os produtos no carrinho
//             return carrinho.buscar_produtos_carrinho(id_usuario, id_carrinho);
//         })
//         .then((resultado) => {
//             const produtosCarrinho = resultado.rows;
//             const promises = produtosCarrinho.map((produto) => {
//                 // Para cada produto, atualizar a quantidade no estoque
//                 return produtoModel.atualizar_quantidade_produto(produto.id_produto, produto.quantidade);
//             });
//             // Aguardar todas as atualizações serem concluídas
//             return Promise.all(promises);
//         })
//         .then(() => {
//             res.status(200).send({ id_pedido: pedidoID, mensagem: 'Pedido criado com sucesso e estoque atualizado' });
//         })
//         .catch((erro) => {
//             res.status(500).send({ erro: erro });
//         });
// };

// BUSCAR TODOS OS PEDIDOS
exports.buscar_pedidos = (req, res) => {
    model.buscar_pedidos()
        .then((resultado) => {
            res.status(200).send({ pedidos: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// CONSULTAR PEDIDOS USUARIO
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