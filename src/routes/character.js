const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

router.post('characters.create', '/', async(ctx) => {
    try{
        const character = await ctx.orm.Character.create(ctx.request.body);
        ctx.body = character;
        ctx.status = 201;
    }
    catch(error){
        console.log(error.message);
        ctx.body = {error: error.message};
        ctx.status = 400;
    }
});

module.exports = router;

router.get('characters.show', '/', async(ctx) => {
    try{
        const characters = await ctx.orm.Character.findAll({
            include: [{
                model: ctx.orm.Armor,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Feat,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Language,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Gear,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Spell,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Tool,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Trait,
                through: {attributes: []},
            }]
        });
        
        if(characters != []){
            ctx.body = characters;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Characters not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

router.get('characters.index', '/:id', async(ctx) => {
    try{
        const characters = await ctx.orm.Character.findOne({
            where: {
                id: ctx.params.id
            },

            include: [
            {
                model: ctx.orm.Class,
            },
            {
                model: ctx.orm.Race,
            },
            {
                model: ctx.orm.Armor,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Feat,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Language,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Gear,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Spell,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Tool,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Trait,
                through: {attributes: []},
            },
            {
                model: ctx.orm.Proficiency,
                as: 'profs',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'strength',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'dexterity',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'constitution',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'inteligence',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'wisdom',
            },
            {
                model: ctx.orm.AbilityScore,
                as: 'charisma',
            }
        ]
        });
        
        if(characters != []){
            ctx.body = characters;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Characters not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }

    router.put('characters.hp', '/:id/hp', async(ctx) => {
        try{
            const character = ctx.orm.Character.findByPk(ctx.params.id);
            if(character){
                await character.update({hit_points: ctx.request.body});
            }
            else{
                ctx.throw(404);
            }
        }
        catch(error){
            if(error.message == 'Not Found'){
                ctx.body = { error: 'Character not found'}
                ctx.status = 404;
            }
            else{
                console.log(error.message);
                ctx.body = {error: error.message};
                ctx.status = 400;
            }
        }
    })
});