const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('charactertrait.create', '/', async(ctx) => {
    try{
        const trait = await ctx.orm.CharacterTrait.create(ctx.request.body);
        ctx.body = trait;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;