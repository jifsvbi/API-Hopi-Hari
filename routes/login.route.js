const express = require("express");
const router = express.Router();

router.post('/login', ()=>{console.log("Rota de Login")});
router.put('/usuariosAtualizar', ()=>{console.log("Rota de Usuarios")});
router.post('/cadastrar', ()=>{console.log("Rota de Cadastro")});

module.exports = router;



