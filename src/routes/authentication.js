const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

// Registro
router.post('/signup', async(req, res) => {
    const authInfo = req.body;
    let user = await req.orm.User.findOne({
        where: {
            email: authInfo.email
        }
    });

    if(user){
        res.status(400).json({error: `The user by email '${authInfo.email}' already exists.`});
        return;
    }
    
    try{
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(authInfo.password, saltRounds);

        user = await req.orm.User.create({
            username: authInfo.username,
            password: hashPassword,
            email: authInfo.email,
            role: authInfo.role
        })
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
        return;
    }

    res.status(201).json({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    });
});

// Inicio de Sesión
router.post('/login', async(req, res) => {
    let user;
    const authInfo = req.body;
    try{
        user = await req.orm.User.findOne({
            where: {
                email: authInfo.email
            }
        });
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
        return;
    }
    if(!user){
        res.status(404).json({error: `User with email '${authInfo.email}' not found.`});
        return;
    }

    const isValidPassword = await bcrypt.compare(authInfo.password, user.password)
    
    if(isValidPassword){
        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        });
    }
    else{
        res.status(401).json({error: 'Invalid password.'});
        console.log(`Invalid password for user with email '${authInfo.email}'.`);
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
    res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: token
    });
});

module.exports = router;