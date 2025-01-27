const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
const { routes } = require("./authentication");

router.get("users.show", "/", async(ctx) => {
    try{
        const users = await ctx.orm.User.findAll();

        if(users != []){
            ctx.body = users;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Users not found'}
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