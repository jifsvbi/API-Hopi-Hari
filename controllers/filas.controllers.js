const mysql2 = require("../mysql")

exports.verificarBrinuedo = async (req, res, next) => {
    try{
        const resultado = await mysql2.execute(`
            SELECT * FROM rides WHERE id = ?;
            `,[req.params.idRide]);

            if (resultado.length == 0) {
                return res.status(404).send({"Mensagem": "Brinquedo não Encontrado "});
            }
            next();
    } catch (error) {
        return res.status(500).send(error);
    }
}


exports.entrarfila = async (req, res, next) => {
    try {
        const resultados = await mysql2.execute(`
            INSERT INTO hopi_hari_db.line (id_users, id_rides) VALUES(?, ?)
            `, [res.locals.idUsuario, Number(req.params.idRide)]);
            return res.send(201).send({"Mensagens": resultados});
    } catch (error) {
        return res.status(500).send(error)
    }
}