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

exports.getBrinquedosByAreaName = async (req, res) => {
    try {
        resultados = await mysql.execute(`
            SELECT * FROM rides WHERE id_areas = (
             SELECT id FROM areas WHERE name = ?
            );
            `,[req.params.areaName]);

            if (resultados.leght == 0) {
                return res.status(404).send({"Mensgem": "Area do parque não Encontrada"});
            }
            
            return res.status(200).send({
                "Mensagem": "Consulta realizada com Sucesso",
                "resultados": resultados
            })
    } catch (error) {
        return res.status(500).send(error);
    }
}