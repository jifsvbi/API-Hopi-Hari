const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet")
const bodyParser = require("body-parser");

const usuariosRoute = require("./routes/usuarios.route");
const filasRoute = require("./routes/filas.route")
const brinquedosRoute = require("./routes/brinquedo.route"); 
const notificationRoutes = require('./routes/notificação.route');

app.use(express.json());
app.use('/notificacoes', notificationRoutes);

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origins", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Contente-type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    }
    next();
});

app.use("/usuarios", usuariosRoute);
app.use("/filas", filasRoute);
app.use("/notificacoes", notificationRoutes);
app.use("/brinquedos", brinquedosRoute);

module.exports = app;