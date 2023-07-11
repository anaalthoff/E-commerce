const pg = require("pg")
const banco = new pg.Client("postgres://heufdlwz:aRzIiQX5QHJ6_N0PPYbNzzCguRWss8cz@silly.db.elephantsql.com/heufdlwz")

banco.connect((erro) => {
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL", erro)
    } else {
        return console.log("Conectado ao ElephantSQL")
    }
})
module.exports = banco