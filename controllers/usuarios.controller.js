const mysql2 = require("../mysql");

exports.aualizarUsuarios = async (eq, res) => {
    try {
    const idUsuarios = Number(req.params);

    const resultado = await mysql2.execute(
        `UPDATE users
            SET name     = ?,
                email    = ?,
                password = ?
        WHERE id = ?;`
        [req.body.name,
         req.body.email,
         req.body.pasword,
         idUsuarios
        ]
    );

    } catch (error) {

    }
}

