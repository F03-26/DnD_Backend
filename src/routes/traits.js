const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear rasgo
router.post('traits.create', '/', async(ctx) => {
    try{
        const trait = await ctx.orm.Trait.create(ctx.request.body);
        ctx.body = trait;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todos los rasgos
router.get('traits.show', '/', async(ctx) => {
    try{
        const traits = await ctx.orm.Trait.findAll();

        if(traits != []){
            ctx.body = traits;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Traits not found'}
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