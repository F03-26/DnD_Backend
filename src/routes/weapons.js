const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

// Crear arma
router.post('weapons.create', '/', async(ctx) => {
    try{
        const weapon = await ctx.orm.Weapons.create(ctx.request.body);
        ctx.body = weapon;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todas las armas
router.get('weapons.show', '/', async(ctx) => {
    try{
        const weapons = await ctx.orm.Weapons.findAll();
        
        if(weapons != []){
            ctx.body = weapons;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Weapons not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver arma específica por id
router.get('weapons.index', '/:id', async(ctx) => {
    try{
        const weapon = await ctx.orm.Weapons.findByPk(ctx.params.id);

        if(weapon){
            ctx.body = weapon;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Weapons not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver armas por nombre
router.get('weapons.name', '/name/:name', async(ctx) => {
    try{
        const weapons = await ctx.orm.Weapons.findOne({
            where:{
                [Op.and]:[{name: ctx.params.name}, {base: true}],
            },
        });

        if(weapons){
            ctx.body = weapons;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Weapon not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar arma
router.put('weapons.update', '/:id', async(ctx) => {
    try{
        const weapon = await ctx.orm.Weapons.findByPk(ctx.params.id);

        if(weapon){
            await weapon.update(ctx.request.body);
            ctx.body = weapon;
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

// Eliminar arma
router.delete('weapons.delete', '/:id', async(ctx) => {
    try{
        const weapon = await ctx.orm.Weapons.findByPk(ctx.params.id);

        if(weapon){
            await weapon.destroy();
            ctx.body = weapon;
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