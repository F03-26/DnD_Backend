const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characterspell.create', '/', async(ctx) => {
    try{
        const spell = await ctx.orm.CharacterSpell.create(ctx.request.body);
        ctx.body = spell;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;