const Router = require("koa-router");
const router = new Router();
const { Op, where } = require('sequelize');

// Ver todas las razas
router.get('races.show', '/', async(ctx) => {
    try{
        const races = await ctx.orm.Race.findAll()

        if(races != []){
            ctx.body = races;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Races not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

// Ver raza específica con rasgos
router.get('races.index', '/:id', async(ctx) => {
    try{
        const race = await ctx.orm.Race.findOne({
            where: {
                id: ctx.params.id
            },
            include: {
                model: ctx.orm.Trait,
                attributes: ['id', 'name', 'description']
            }
        });

        if(race){
            let r = {
                id: race.id,
                name: race.name,
                description: race.description,
                type: race.type,
                size: race.size,
                size_range: race.size_range,
                speed: race.speed,
                Traits: race.Traits,
            };
            for(let i = 0; i < race.Traits.length; i++){
                r.Traits[i] = {
                    id: r.Traits[i].id,
                    name: r.Traits[i].name,
                    description: r.Traits[i].description,
                    race_id: r.Traits[i].race_id,
                    item: 'trait'
                }
            }
            ctx.body = r;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Race not found'}
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