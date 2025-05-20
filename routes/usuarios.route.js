const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller")

router.post('/', usuariosController.cadastrarUsuario);
router.post('/login', usuariosController.login);
router.put('/:id', usuariosController.atualizarUsuarios);

module.exports = router;



