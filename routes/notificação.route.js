const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');
const login = require('../middleware/usuarios.middleware'); // Supondo que você tenha esse middleware

router.get('/notification', login.required, notificationController.getNotificacoes);

module.exports = router;
