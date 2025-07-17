const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const trait = await req.orm.CharacterTrait.create(req.body);
        res.status(201).json(trait);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;