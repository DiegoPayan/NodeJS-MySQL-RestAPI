const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'payan',
    database: 'meSafe',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Conexion BD exitosa");
    }
});

module.exports = mysqlConnection;