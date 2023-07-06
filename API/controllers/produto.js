// Importando produto do models
const model = require('../models/produto')

// CRIAR PRODUTO OK
exports.criar_produto = (req, res) => {
    const { nome, preco, cor, tamanho, tipo, foto, quantidade } = req.body;
    model.criar_produto(nome, preco, cor, tamanho, tipo, foto, quantidade)
        .then(() => {
            res.status(200).send({ mensagem: 'Produto criado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// BUSCAR TODOS OS PRODUTOS OK
exports.buscar_produtos = (req, res) => {
    model.buscar_produtos()
      .then((resultado) => {
        res.status(200).send({ produtos: resultado.rows });
      })
      .catch((erro) => {
        res.status(500).send({ erro: erro });
      });
  };

// BUSCAR PRODUTO PELO ID OK
// exportando função para usar no routes
exports.buscar_produto = (req, res) => {
    // pegando o valor passado pela url
    const produto = req.params.id_produto
    // 'resultado' é necessário quando pegar infos, quando envia, não precisa
    // chamando a função buscar_produto do models e passando valores de parâmetro
    model.buscar_produto(produto)
        // então, se der certo, exibir o resultado
        .then((resultado) => {
            res.status(200).send({ produto: resultado.rows[0] })
        },
            // se der errado, dirá qual erro ocorreu 
            (erro) => {
                res.status(500).send({ erro: erro })
            })
};

// BUSCAR PRODUTO PELO NOME OK
exports.buscar_nome_parcial = (req, res) => {
    const nome = "%" + req.params.nome + "%"
    model.buscar_nome_parcial(nome).then((resultado) => {
        res.status(200).send({ produto: resultado.rows })
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
};

// BUSCAR TODOS OS PRODUTOS DE UM TIPO(EX: Macbook, IMac, Mac Mini, Mac Studio, Mac Pro) OK
exports.buscar_produtos_por_tipo = (req, res) => {
    const tipo = req.params.tipo;
    model.buscar_produtos_por_tipo(tipo)
        .then((resultado) => {
            res.status(200).send({ produtos: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// ATUALIZAR PRODUTO OK
exports.atualizar_produto = (req, res) => {
    const id_produto = req.params.id_produto;
    const { nome, preco, cor, tamanho, tipo, foto, quantidade } = req.body;
    model.atualizar_produto(id_produto, nome, preco, cor, tamanho, tipo, foto, quantidade)
        .then(() => {
            res.status(200).send({ mensagem: 'Produto atualizado com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

// EXCLUIR PRODUTO PELO ID OK
exports.excluir_produto = (req, res) => {
    const id_produto = req.params.id_produto;
    model.excluir_produto(id_produto)
        .then(() => {
            res.status(200).send({ mensagem: 'Produto excluído com sucesso' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};