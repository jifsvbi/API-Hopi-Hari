const mysql2 = require("../mysql");

exports.atualizarUsuarios = async (req, res) => {
    try {
        const idUsuarios = Number(req.params.id);

        const resultado = await mysql2.execute(
            `UPDATE users
                SET name     = ?,
                    email    = ?,
                    password = ?
            WHERE id = ?;`,
            [ // ← Este colchete estava faltando na sua versão original
                req.body.name,
                req.body.email,
                req.body.password, // ← Corrigido "pasword" para "password"
                idUsuarios
            ]
        );

        return res.status(200).send({
            "Mensagem": "Usuário atualizado com sucesso",
            "Resultado": resultado
        });

    } catch (error) {
        return res.status(500).send({ "Mensagem": error.message });
    }
};
