const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { routes } = require("./authentication");

router.get("/", async(req, res) => {
    try{
        const users = await req.orm.User.findAll();

        if(users != []){
            res.status(200).json(users);
        }
        else{
            res.status(404).json({ error: 'Users not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;