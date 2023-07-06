const express = require('express')
const router = express.Router()
const controllers = require('../controllers/usuario')

// Endpoints

// CRUD USUARIO
router.post('/criar_usuario', controllers.criar_usuario);
router.get('/buscar_usuarios', controllers.buscar_usuarios);
router.get('/buscar_usuario/:id_usuario', controllers.buscar_usuario);
router.get('/buscar_nome_parcial_usuario/:nome', controllers.buscar_nome_parcial_usuario);
router.put('/atualizar_usuario/:id_usuario', controllers.atualizar_usuario);
router.delete('/excluir_usuario/:id_usuario', controllers.excluir_usuario);

module.exports = router;