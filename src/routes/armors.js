const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

// Crear armadura
router.post('armors.create', '/', async(ctx) => {
    try{
        const armor = await ctx.orm.Armor.create(ctx.request.body);
        ctx.body = armor;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todas las armaduras
router.get('armors.show', '/', async(ctx) => {
    try{
        const armors = await ctx.orm.Armor.findAll();
        
        if(armors != []){
            ctx.body = armors;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Armors not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver armadura específica por id
router.get('armors.index', '/:id', async(ctx) => {
    try{
        const armor = await ctx.orm.Armor.findByPk(ctx.params.id);

        if(armor){
            ctx.body = armor;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Armor not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver armaduras por nombre
router.get('armors.name', '/name/:name', async(ctx) => {
    try{
        const armor = await ctx.orm.Armor.findOne({
            where:{
                [Op.and]:[{name: ctx.params.name}, {base: true}],
            },
        });

        if(armor){
            ctx.body = ability;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar armadura
router.put('armors.update', '/:id', async(ctx) => {
    try{
        const armor = await ctx.orm.Armor.findByPk(ctx.params.id);

        if(armor){
            await armor.update(ctx.request.body);
            ctx.body = armor;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Armor not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar armadura
router.delete('armors.delete', '/:id', async(ctx) => {
    try{
        const armor = await ctx.orm.Armor.findByPk(ctx.params.id);

        if(armor){
            await armor.destroy();
            ctx.body = armor;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Armor not found'}
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