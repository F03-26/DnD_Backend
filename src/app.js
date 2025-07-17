const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');
const orm = require('./models');

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    req.orm = orm;
    next();
});

app.use(router);

app.use((err, req, res, next) => {
    res.status(404).send('ruta no encontrada');
});

/*
app.listen(PORT, () => {
    console.log(`Iniciando app. Escuchando en el puerto ${PORT}.`);
}).on('error', (err) => {
    if(err.code === 'EADDRINUSE'){
        console.error(`Port ${PORT} is already in use.`);
        process.exit(1);
    }
    else{
        throw err;
    } 
});
*/

module.exports = app