const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { context } = require("../app");

router.get('classesarmor.armor', '/:id', async(ctx) => {
    try{
        const armors = await ctx.orm.ClassesArmor.findAll({
            where: {
                class_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Armor,
            }
        })

        if(armors != []){
            let response = []
            for(let i = 0; i < armors.length; i++){
                let armor = {
                    id: armors[i].armor_id,
                    name: armors[i].Armor.name,
                    category: armors[i].Armor.category,
                    armor_class: armors[i].Armor.armor_class,
                    weight: armors[i].Armor.weight,
                    cost: armors[i].Armor.cost,
                    amount: armors[i].amount,
                    option: armors[i].option,
                    item: 'armor'
                }
                response.push(armor);
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