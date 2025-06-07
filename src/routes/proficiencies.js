const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');

// Crear Proficiencia
router.post('proficiencies.create', '/', async(ctx) => {
    try {
        const proficiency = await ctx.orm.Proficiency.create(ctx.request.body);
        ctx.body = proficiency;
        ctx.status = 201;
    } catch (error) {
        console.log(error.message);
        ctx.body = { error: error.message };
        ctx.status = 400;
    }
});

module.exports = router;

