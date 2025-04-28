const express = require("express");
const router = express.Router();

router.post('/usuarios/cadastro', (req, res) => {
    const { nome, email, senha, idade } = req.body;

    if (!nome || !email || !senha || !idade) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const novoUsuario = {
        id: Date.now(), 
        nome,
        email,
        senha,  
        idade,
    };

    return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
});

module.exports = router;
