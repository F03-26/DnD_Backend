const Router = require("koa-router");
const router = new Router();
const { Op, where } = require('sequelize');

router.get('backgroundstools.tools', '/:id', async(ctx) => {
    try {
        const tools = await ctx.orm.BackgroundsTools.findAll({
            where: {
                background_id: ctx.params.id
            },
            include: {
                model: ctx.orm.Tool
            }
        });

        if(tools != []){
            let response = []
            for(let i = 0; i < tools.length; i++){
                let tool = {
                    id: tools[i].tool_id,
                    name: tools[i].Tool.name,
                    utilize: tools[i].Tool.utilize,
                    craft: tools[i].Tool.craft,
                    weight: tools[i].Tool.weight,
                    cost: tools[i].Tool.cost,
                    amount: tools[i].amount,
                    option: tools[i].option,
                    item: 'tool'
                }
                response.push(tool);
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
            ctx.body = { error: 'Tools not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
});

router.get('backgroundstools.show', '/', async(ctx) => {
    try {
        const tools = await ctx.orm.BackgroundsTools.findAll();

        if(tools != []){
            ctx.body = tools;
            ctx.status = 200;
        }
        else {
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Tools not found'}
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