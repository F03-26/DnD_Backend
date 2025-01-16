const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

router.get('classescoins.coins', '/:id', async(ctx) => {
    try{
        const coins = await ctx.orm.ClassesCoins.findAll({
            where: {
                class_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Coin,
            }
        })

        if(coins != []){
            let response = []
            for(let i = 0; i < coins.length; i++){
                let coin = {
                    id: coins[i].coin_id,
                    name: coins[i].Coin.name,
                    value: coins[i].Coin.value,
                    value_string: coins[i].Coin.value_string,
                    amount: coins[i].amount,
                    option: coins[i].option,
                    item: 'coin'
                }
                response.push(coin);
            }

            ctx.body = response;
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