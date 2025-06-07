const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characterlanguage.create', '/', async(ctx) => {
    try{
        const language = await ctx.orm.CharacterLanguage.create(ctx.request.body);
        ctx.body = language;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

router.get('characterlanguage.show', '/', async(ctx) => {
    try{
        const languages = await ctx.orm.CharacterLanguage.findAll();
        
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

module.exports = router;