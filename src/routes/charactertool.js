const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('charactertool.create', '/', async(ctx) => {
    try{
        const tool = await ctx.orm.CharacterTool.create(ctx.request.body);
        ctx.body = tool;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;