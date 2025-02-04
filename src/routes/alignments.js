const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear alineamiento
router.post('alignments.create', '/', async(ctx) => {
    try{
        const alignment = await ctx.orm.Alignment.create(ctx.request.body);
        ctx.body = alignment;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todos los alineamientos
router.get('alignments.show', '/', async(ctx) => {
    try{
        const alignments = await ctx.orm.Alignment.findAll();

        if(alignments != []){
            ctx.body = alignments;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Alignments not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver alineamiento específico
router.get('alignments.index', '/:id', async(ctx) => {
    try{
        const alignment = await ctx.orm.Alignment.findByPk(ctx.params.id);

        if(alignment){
            ctx.body = alignment;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Alignment not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar alineamiento
router.patch('alignments.update', '/:id', async(ctx) => {
    try{
        const alignment = await ctx.orm.Alignment.findByPk(ctx.params.id);

        if(alignment){
            await alignment.update(ctx.request.body);
            ctx.body = alignment;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Alignment not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar alineamiento
router.delete('alignments.delete', '/:id', async(ctx) => {
    try{
        const alignment = await ctx.orm.Alignment.findByPk(ctx.params.id);

        if(alignment){
            await alignment.destroy();
            ctx.body = alignment;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Alignment not found'}
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