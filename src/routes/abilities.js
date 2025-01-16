const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

// Crear habilidad
router.post('abilities.create', '/', async(ctx) => {
    try{
        const ability = await ctx.orm.Abilities.create(ctx.request.body);
        ctx.body = ability;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todas las habilidades
router.get('abilities.show', '/', async(ctx) => {
    try{
        const abilities = await ctx.orm.Abilities.findAll();
        
        if(abilities != []){
            ctx.body = abilities;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Abilities not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver habilidad específica por id
router.get('abilities.index', '/:id', async(ctx) => {
    try{
        const ability = await ctx.orm.Abilities.findByPk(ctx.params.id);

        if(ability){
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

// Ver habilidad base por nombre
router.get('abilities.name', '/name/:name', async(ctx) => {
    try{
        const ability = await ctx.orm.Abilities.findOne({
            where:{
                [Op.and]:[{name: ctx.params.name}, {base: true}],
            },
        });

        if(ability){
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

// Ver habilidades de una clase
/*
router.get('abilities.class', '/class/:id', async(ctx) => {
    try{
        const abilities = await ctx.orm.Abilities.findAll({
            include: {
                model: ctx.orm.Class,
                attributes: [],
                where: {class_id: ctx.params.id},
                through: {attributes: []}
            }
        });

        if(abilities != []){
            ctx.body = abilities;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Abilities not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
})
    */

// Actualizar habilidad
router.put('abilities.update', '/:id', async(ctx) => {
    try{
        const ability = await ctx.orm.Abilities.findByPk(ctx.params.id);

        if(ability){
            await ability.update(ctx.request.body);
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

// Eliminar habilidad
router.delete('abilities.delete', '/:id', async(ctx) => {
    try{
        const ability = await ctx.orm.Abilities.findByPk(ctx.params.id);

        if(ability){
            await ability.destroy();
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

module.exports = router;