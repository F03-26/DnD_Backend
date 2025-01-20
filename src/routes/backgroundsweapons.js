const Router = require("koa-router");
const router = new Router();
const { Op, where } = require('sequelize');

router.get('backgroundsweapons.show', '/', async(ctx) => {
    try {
        const weapons = await ctx.orm.BackgroundsWeapons.findAll()

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
})

router.get('backgroundsweapons.weapons', '/:id', async(ctx) => {
    try {
        const weapons = await ctx.orm.BackgroundsWeapons.findAll({
            where: {
                background_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Weapons
            }
        });

        if(weapons != []){
            let response = []
            for(let i = 0; i < weapons.length; i++){
                let weapon = {
                    id: weapons[i].weapon_id,
                    name: weapons[i].Weapon.name,
                    type: weapons[i].Weapon.type,
                    category: weapons[i].Weapon.category,
                    damage_die: weapons[i].Weapon.damage_die,
                    damage_type: weapons[i].Weapon.damage_type,
                    weight: weapons[i].Weapon.weight,
                    cost: weapons[i].Weapon.cost,
                    amount: weapons[i].amount,
                    option: weapons[i].option,
                    item: 'weapon'
                }
                response.push(weapon);
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
            ctx.body = { error: 'Weapons not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
})

module.exports = router;