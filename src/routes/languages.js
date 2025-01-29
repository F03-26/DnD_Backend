const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const language = require("../models/language");

// Crear lenguaje
router.post('languages.create', '/', async(ctx) => {
    try{
        const language = await ctx.orm.Language.create(ctx.request.body);
        ctx.body = language;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

// Ver todos los lenguajes
router.get('languages.show', '/', async(ctx) => {
    try{
        const languages = await ctx.orm.Language.findAll();
        
        if(languages != []){
            ctx.body = languages;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Languages not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver todos los lenguajes comunes
router.get('languages.common', '/common', async(ctx) => {
    try{
        const languages = await ctx.orm.Language.findAll({
            where: {
                rare: false
            }
        });
        
        if(languages != []){
            ctx.body = languages;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Languages not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver todos los lenguajes exóticos
router.get('languages.rare', '/rare', async(ctx) => {
    try{
        const languages = await ctx.orm.Language.findAll({
            where: {
                rare: true
            }
        });
        
        if(languages != []){
            ctx.body = languages;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Languages not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver lenguaje específico
router.get('languages.index', '/:id', async(ctx) => {
    try{
        const language = await ctx.orm.Language.findByPk(ctx.params.id);

        if(language){
            ctx.body = language;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Languages not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Actualizar lenguaje
router.patch('language.update', '/:id', async(ctx) => {
    try{
        const language = await ctx.orm.Language.findByPk(ctx.params.id);

        if(language){
            await language.update(ctx.request.body);
            ctx.body = language;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Language not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Eliminar lenguaje
router.delete('language.delete', '/:id', async(ctx) => {
    try{
        const language = await ctx.orm.Language.findByPk(ctx.params.id);

        if(language){
            await language.destroy();
            ctx.body = language;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Language not found'}
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