const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear equipo
router.post('gear.create', '/', async(ctx) => {
    try{
        const gear = await ctx.orm.Gear.create(ctx.request.body);
        ctx.body = gear;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver equipo
router.get('gear.show', '/', async(ctx) => {
    try{
        const gears = await ctx.orm.Gear.findAll();
        
        if(gears != []){
            ctx.body = gears;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Gears not found'}
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