const mysql2 = require("../mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        return res.status(500).send(error);
    }
};


exports.cadastrarUsuario = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const resultado = await mysql2.execute(`
            INSERT INTO users ( 
            first_name, 
            last_name, 
            email, 
            password, 
            birth_date, 
            phone
            )
            VALUES (?, ?, ?, ?, ?, ?);`, [
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            hash,
            req.body.birth_date,
            req.body.phone
        ]);
        
        return res.status(201).send({
            "Mensagem": "Usuario cadastrado com Sucesso",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.login = async (req, res) => {
    try {
        const usuario = await mysql2.execute(
            `SELECT * FROM users WHERE email = ?`,
            [req.body.email]);

        if (usuario.length == 0) {
            return res.status(401).send({ "Mensagem": "Usuario não cadastrado" });
        }

        const match = await bcrypt.compare(req.body.password, usuario[0].password);
        if (!match) {
            return res.status(401).send({ "Mensagem": "Senha incorreta!" })
        }

        const token = jwt.sign({
            id: usuario[0].id,
            first_name: usuario[0].first_name,
            last_name: usuario[0].last_name,
            email: usuario[0].email,
            birth_date: usuario[0].birth_date,
            phone: usuario[0].phone,
            admin: usuario[0].admin
        }, "senhadojwt");

        return res.status(200).send({
            "Mensagem": "Usuario autenticado com Sucesso",
            "token": token,
            "user":{
            "firstname": usuario[0].first_name,
            "lastname": usuario[0].last_name,
            "email": usuario[0].email,
            "birthdate": usuario[0].birth_date,
            "phone": usuario[0].phone
            }
        });


    } catch (error) {
        return res.status(500).send(error)
    }
}