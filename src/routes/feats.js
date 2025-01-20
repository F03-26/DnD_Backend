const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear dote
router.post('feat.create', '/', async(ctx) => {
    try{
        const feat = await ctx.orm.Feat.create(ctx.request.body);
        ctx.body = feat;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todos los dotes
router.get('feat.show', '/', async(ctx) => {
    try{
        const feats = await ctx.orm.Feat.findAll();

        if(feats != []){
            ctx.body = feats;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Feats not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver dote específico por id
router.get('feat.index', '/:id', async(ctx) => {
    try{
        const feat = await ctx.orm.Feat.findByPk(ctx.params.id);

        if(feat){
            ctx.body = {
                id: feat.id,
                name: feat.name,
                category: feat.category,
                prerequisite: feat.prerequisite,
                benefits: feat.benefits,
                repeatable: feat.repeatable,
                item: 'feat'
            };
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Feats not found'}
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