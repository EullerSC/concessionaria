const mysql = require('mysql2')
 
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '354506',
    database: 'concessionaria'
})
 
module.exports = conexao 