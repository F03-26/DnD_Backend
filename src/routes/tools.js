const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear herramienta
router.post('tools.create', '/', async(ctx) => {
    try{
        const tool = await ctx.orm.Tool.create(ctx.request.body);
        ctx.body = tool;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todas las herramientas
router.get('tools.show', '/', async(ctx) => {
    try{
        const tools = await ctx.orm.Tool.findAll();
        
        if(tools != []){
            ctx.body = tools;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tools not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver herramienta específica
router.get('tools.index', '/:id', async(ctx) => {
    try{
        const tool = await ctx.orm.Tool.findByPk(ctx.params.id);

        if(tool){
            ctx.body = tool;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tool not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver herramientas de una profesión específica
router.get('tools.profesion', '/profesion/:profesion', async(ctx) => {
    try{
        const tools = await ctx.orm.Tool.findAll({
            where: {
                profesion: ctx.params.profesion
            }
        });
        
        if(tools != []){
            ctx.body = tools;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tools not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver herramientas por nombre
router.get('tools.name', '/name/:name', async(ctx) => {
    try{
        const tool = await ctx.orm.Tool.findOne({
            where: {
                name: ctx.params.name
            }
        });
        
        if(tool){
            ctx.body = tool;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tool not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar herramienta
router.put('tools.update', '/:id', async(ctx) => {
    try{
        const tool = await ctx.orm.Tool.findByPk(ctx.params.id);

        if(tool){
            await tool.update(ctx.request.body);
            ctx.body = tool;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tool not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar Herramienta
router.delete('tools.delete', '/:id', async(ctx) => {
    try{
        const tool = await ctx.orm.Tool.findByPk(ctx.params.id);

        if(tool){
            await tool.destroy();
            ctx.body = tool;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tool not found'}
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