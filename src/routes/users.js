const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mysqlConnection = require('../database');
const config = require('../api/config');

router.post('/', (req, res) => {
    const { username, pass } = req.body;
    if (username, pass) {
        const estatus = 1;
        const query = `SELECT id FROM usuarios WHERE username = ? AND password = ? AND estatus = ?`;
        mysqlConnection.query(query, [username, pass, estatus], (error, result, fields) => {
            if (!error) {
                let idUsuario;
                typeof result[0] !== 'undefined' ? idUsuario = result[0]['id'] : idUsuario = 0;
                if (idUsuario !== 0) {
                    const token = jwt.sign({ idUsuario, username }, config.secret, { expiresIn: '1h' });
                    res.json({
                        success: true,
                        token: token
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Credenciales incorrectas!'
                    });
                }
            } else {
                res.json({
                    success: false,
                    message: 'Error al generar la peticion!'
                });
            }
        });
    } else {
        res.json({
            success: false,
            message: "Error en la peticion!"
        });
    }
});

module.exports = router;