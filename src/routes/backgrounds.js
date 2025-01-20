const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear trasfondo
router.post('backgrounds.create', '/', async(ctx) => {
    try{
        const background = await ctx.orm.Background.create(ctx.request.body);
        ctx.body = background;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver trasfondos
router.get('backgrounds.show', '/', async(ctx) => {
    try{
        const backgrounds = await ctx.orm.Background.findAll();
        
        if(backgrounds != []){
            ctx.body = backgrounds;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Backgrounds not found'}
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

// Ver trasfondo específico
router.get('backgrounds.index', '/:id', async(ctx) => {
    try{
        const background = await ctx.orm.Background.findByPk(ctx.params.id);

        if(background){
            ctx.body = background;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Background not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar trasfondo
router.put('backgrounds.update', '/:id', async(ctx) => {
    try{
        const background = await ctx.orm.Background.findByPk(ctx.params.id);

        if(background){
            await background.update(ctx.request.body);
            ctx.body = background;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Background not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar Clase
router.delete('backgrounds.delete', '/:id', async(ctx) => {
    try{
        const background = await ctx.orm.Background.findByPk(ctx.params.id);

        if(background){
            await background.destroy();
            ctx.body = background;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Background not found'}
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