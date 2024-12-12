const Koa = require('koa');
const KoaLogger = require('koa-logger');
const {koaBody} = require('koa-body');
const router = require('./router.js');
const orm = require('./models');

const app = new Koa();

app.context.orm = orm;

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

app.use((ctx, next) => {
    ctx.body = "Hola mundo"
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