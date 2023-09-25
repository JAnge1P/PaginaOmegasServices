// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario_mysql',
    password: 'tu_contraseña_mysql',
    database: 'tu_base_de_datos'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conexión a MySQL exitosa');
});

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    const sql = `SELECT * FROM usuarios WHERE usuario='${usuario}' AND password='${password}'`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send('Inicio de sesión exitoso');
        } else {
            res.send('Credenciales incorrectas');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
