const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const spell = await req.orm.CharacterSpell.create(req.body);
        res.status(201).json(spell);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;