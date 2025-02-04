const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear moneda
router.post('coins.create', '/', async(ctx) => {
    try{
        const coin = await ctx.orm.Coin.create(ctx.request.body);
        ctx.body = coin;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver monedas
router.get('coins.show', '/', async(ctx) => {
    try{
        const coins = await ctx.orm.Coin.findAll();
        
        if(coins != []){
            ctx.body = coins;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Coins not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

module.exports = router;