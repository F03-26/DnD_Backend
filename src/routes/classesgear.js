const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

router.get('classesgear.gear', '/:id', async(ctx) => {
    try{
        const gears = await ctx.orm.ClassesGear.findAll({
            where: {
                class_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Gear,
            }
        })

        if(gears != []){
            let response = []
            for(let i = 0; i < gears.length; i++){
                let gear = {
                    id: gears[i].gear_id,
                    name: gears[i].Gear.name,
                    description: gears[i].Gear.description,
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
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Gear not found'}
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