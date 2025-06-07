const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characterweapon.create', '/', async(ctx) => {
    try{
        const weapon = await ctx.orm.CharacterWeapon.create(ctx.request.body);
        ctx.body = weapon;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;