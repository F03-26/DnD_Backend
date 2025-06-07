const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('charactergear.create', '/', async(ctx) => {
    try{
        const gear = await ctx.orm.CharacterGear.create(ctx.request.body);
        ctx.body = gear;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;