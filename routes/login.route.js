const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller")

router.post('/login', ()=>{console.log("Rota de Login")});
router.put('/:id', usuariosController.atualizarUsuarios);
router.post('/', ()=>{console.log("Rota de Cadastro")});

module.exports = router;



