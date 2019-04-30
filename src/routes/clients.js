const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

//query('Query', [Params], (error, results, fields))

//findAll
router.get('/', (req, res) => {
    const query = `SELECT * FROM cliente`;
    mysqlConnection.query(query, (error, result, fields) => {
        if (!error) {
            res.json(result)
        } else {
            console.log(error);
        }
    });
});

//findAllById
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM cliente WHERE id_cliente = ?`;
    mysqlConnection.query(query, [id], (error, result, fields) => {
        if (!error) {
            res.json(result[0]);
        } else {
            console.log(error);
        }
    });
});

//Save
router.post('/', (req, res) => {
    const { nombre, appPat, appMat, rfc } = req.body;
    const query = `INSERT INTO cliente(nombre,apellido_paterno,apellido_materno,rfc) VALUES
                    (?,?,?,?)`;
    mysqlConnection.query(query, [nombre, appPat, appMat, rfc], (error, result, fields) => {
        if (!error) {
            res.json({ result: 'Cliente almacenado con exito' });
        } else {
            console.log(error);
        }
    });
});

module.exports = router;