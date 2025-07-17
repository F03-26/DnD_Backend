const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const gear = await req.orm.CharacterGear.create(req.body);
        res.status(201).json(gear);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;