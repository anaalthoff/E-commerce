const express = require('express')
const router = express.Router()
const controllers = require('../controllers/pedido')

// Endpoints

router.post('/criar_pedido', controllers.criar_pedido);
router.get('/buscar_pedidos', controllers.buscar_pedidos);
router.get('/consultar_pedidos_usuario/:id_usuario', controllers.consultar_pedidos_usuario);

module.exports = router