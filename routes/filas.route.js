const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware")
const filaController = require("../controllers/filas.controllers"); 

router.post("/:idRide", 
    login.required,
    filaController.verificarBrinuedo,
    filaController.entrarfila   
);

module.exports = router;