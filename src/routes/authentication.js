const Router = require("koa-router");
const router = new Router();
const { Op } = require('sequelize');
var jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

// Registro
router.post('authentication.signup', '/signup', async(ctx) => {
    const authInfo = ctx.request.body;
    let user = await ctx.orm.User.findOne({
        where: {
            email: authInfo.email
        }
    });

    if(user){
        ctx.body = `The user by mail ${authInfo.email} already exists.`
        ctx.status = 400;
        return;
    }
    
    try{
        user = await ctx.orm.User.create({
            username: authInfo.username,
            password: authInfo.password,
            email: authInfo.email,
            role: authInfo.role
        })
    }
    catch(error){
        ctx.body = error;
        ctx.status = 400;
        return;
    }

    ctx.body = {
        username: user.username,
        email: user.email,
        role: user.role
    };
    ctx.status = 201;
});

// Inicio de Sesión
router.post('authentication.login', '/login', async(ctx) => {
    let user;
    const authInfo = ctx.request.body;
    try{
        user = await ctx.orm.User.findOne({
            where: {
                email: authInfo.email
            }
        });
    }
    catch(error){
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if(!user){
        ctx.body = `The user by email '${authInfo.email}' was not found.`;
        ctx.status = 400;
        return;
    }
    
    if(user.password == authInfo.password){
        ctx.body = {
            username: user.username,
            email: user.email
        };
        ctx.status = 200;
    }
    else{
        ctx.body = 'Incorrect password';
        ctx.status = 400;
        return;
    }

    // JWT
    const expirationSeconds = 1 * 60 * 60 * 24;
    const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
    var token = jwt.sign(
        {scope: ['user']},
        JWT_PRIVATE_KEY,
        {subject: user.id.toString()},
        {expiresIn: expirationSeconds}
    );
    ctx.body = {
        "access_token": token,
        "token_type": "Bearer",
        "expires_in": expirationSeconds,
        id: user.id,
        username: user.username
    }
    ctx.status = 200;
});

module.exports = router;