const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear puntucaiones
router.post('ability_scores.create', '/', async(ctx) => {
    try {
        const ability_score = await ctx.orm.AbilityScore.create(ctx.request.body);
        ctx.body = ability_score;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver puntuaciones
router.get('ability_scores.show', '/', async(ctx) => {
    try {
        const ability_scores = await ctx.orm.AbilityScore.findAll();
        if(ability_scores != []){
            ctx.body = ability_scores;
            ctx.status = 200;
        }
        else {
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability scores not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver puntuaciones con habilidades
router.get('ability_scores.abilities', '/abilities', async(ctx) => {
    try {
        const ability_scores = await ctx.orm.AbilityScore.findAll({
            include: {
                model: ctx.orm.Abilities
            }
        });
        if(ability_scores != []){
            ctx.body = ability_scores;
            ctx.status = 200;
        }
        else {
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability scores not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver puntuación específica
router.get('ability_scores.index', '/:id', async(ctx) => {
    try {
        const ability_score = await ctx.orm.AbilityScore.findByPk(ctx.params.id);

        if(ability_score){
            ctx.body = ability_score;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability score not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar puntuación
router.put('ability_scores.update', '/:id', async(ctx) => {
    try {
        const ability_score = await ctx.orm.AbilityScore.findByPk(ctx.params.id);

        if(ability_score){
            await ability_score.update(ctx.request.body);
            ctx.body = ability_score;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability score not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar puntuación
router.delete('ability_scores.delete', '/:id', async(ctx) => {
    try {
        const ability_score = await ctx.orm.AbilityScore.findByPk(ctx.params.id);

        if(ability_score){
            await ability_score.destroy();
            ctx.body = ability_score;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Ability score not found'}
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