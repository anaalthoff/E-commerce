const pg = require("pg")
const banco = new pg.Client("")

banco.connect((erro) => {
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL", erro)
    } else {
        return console.log("Conectado ao ElephantSQL")
    }
})
module.exports = banco