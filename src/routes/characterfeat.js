const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characterfeat.create', '/', async(ctx) => {
    try{
        const feat = await ctx.orm.CharacterFeat.create(ctx.request.body);
        ctx.body = feat;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;