const Router = require("koa-router");
const router = new Router();
const { Op, where } = require('sequelize');

router.get('backgroundsgear.gear', '/:id', async(ctx) => {
    try {
        const gears = await ctx.orm.BackgroundsGear.findAll({
            where: {
                background_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Gear
            }
        });

        if(gears != []){
            let response = []
            for(let i = 0; i < gears.length; i++){
                let gear = {
                    id: gears[i].gear_id,
                    name: gears[i].Gear.name,
                    type: gears[i].Gear.type,
                    category: gears[i].Gear.category,
                    damage_die: gears[i].Gear.damage_die,
                    damage_type: gears[i].Gear.damage_type,
                    weight: gears[i].Gear.weight,
                    cost: gears[i].Gear.cost,
                    amount: gears[i].amount,
                    option: gears[i].option,
                    item: 'gear'
                }
                response.push(gear);
            }

            ctx.body = response;
            ctx.status = 200;
        }
        else {
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Gears not found'}
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