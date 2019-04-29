const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'tomirp',
    password: 'leviathan27',
    host: 'db4free.net',
    database: 'tommidatabase',
    port: '3306'
})

module.exports = conn