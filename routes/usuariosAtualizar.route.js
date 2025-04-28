const express = require("express");
const router = express.Router();

router.put('/usuarios/atualizar/:id', (req, res) => {
    const { id } = req.params;  
    const { nome, email, senha, idade } = req.body;  

    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;
    usuario.senha = senha || usuario.senha;
    usuario.idade = idade || usuario.idade;


    return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso', usuario });
});

module.exports = router;
