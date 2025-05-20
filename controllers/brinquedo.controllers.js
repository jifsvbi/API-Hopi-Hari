const mysql = require("../mysql");

exports.cadastrarBrinquedo = async () => {
    try {
        const resultados = await mysql.execute(`
            INSERT INTO rides (name, tempo_espera, status, area)
            VALUES (?, ?, ?, ?)
            `,[
                req.boy.name,
                req.boy.tempo_espera,
                req.boy.status,
                req.boy.area
            ]);
            return res.status(201).send({
                "Mensagem": "Brinquedo cadastrado com Sucesso!",
                "Resultados": resultados
            })
    } catch (error) {
        return res.status(500).send(error);
    }
}