const express = require('express')
const router = express.Router()
const controllers = require('../controllers/produto')

// Endpoints

// CRUD PRODUTO
router.post('/criar_produto', controllers.criar_produto);
router.get('/buscar_produtos', controllers.buscar_produtos);
router.get('/buscar_produto/:id_produto', controllers.buscar_produto);
router.get('/buscar_nome_parcial/:nome', controllers.buscar_nome_parcial);
router.get('/buscar_produtos_por_tipo/:tipo', controllers.buscar_produtos_por_tipo);
router.put('/atualizar_produto/:id_produto', controllers.atualizar_produto);
router.delete('/excluir_produto/:id_produto', controllers.excluir_produto);

module.exports = router;