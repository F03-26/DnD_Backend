const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characterarmor.create', '/', async(ctx) => {
    try{
        const armor = await ctx.orm.CharacterArmor.create(ctx.request.body);
        ctx.body = armor;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;