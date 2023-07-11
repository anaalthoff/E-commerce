const express = require("express")
const bodyParser = require('body-parser')
const port = 3000
const cors = require('cors');

const app = express()
app.use(bodyParser.json())
app.use(cors());

// Importando as rotas dos controllers
const pedidoRoutes = require("./routes/pedido");
const produtoRoutes = require("./routes/produto");
const usuarioRoutes = require("./routes/usuario");

// Registrando as rotas dos controllers
app.use("/pedido", pedidoRoutes);
app.use("/produto", produtoRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(port, () => {
    console.log("Servidor express rodando na porta 3000")
})