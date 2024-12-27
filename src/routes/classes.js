const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

// Crear clase
router.post('classes.create', '/', async(ctx) => {
    try{
        const class_ = await ctx.orm.Class.create(ctx.request.body);
        ctx.body = class_;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver clases
router.get('classes.show', '/', async(ctx) => {
    try{
        const classes = await ctx.orm.Class.findAll();
        
        if(classes != []){
            ctx.body = classes;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Classes not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver clase específica
router.get('classes.index', '/:id', async(ctx) => {
    try{
        const class_ = await ctx.orm.Class.findByPk(ctx.params.id);

        if(class_){
            ctx.body = class_;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Class not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar clase
router.put('classes.update', '/:id', async(ctx) => {
    try{
        const class_ = await ctx.orm.Class.findByPk(ctx.params.id);

        if(class_){
            await class_.update(ctx.request.body);
            ctx.body = class_;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Class not found'}
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
router.delete('classes.delete', '/:id', async(ctx) => {
    try{
        const class_ = await ctx.orm.Class.findByPk(ctx.params.id);

        if(class_){
            await class_.destroy();
            ctx.body = class_;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Class not found'}
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