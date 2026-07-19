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

router.delete('/:id', async(req, res) => {
    try{
        const gear = await req.orm.CharacterGear.findOne({where: {id: req.params.id}});
        if(!gear){
            return res.status(404).json({error: "CharacterGear not found"});
        }
        await gear.destroy();
        res.status(204).json(gear);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.get('/', async(req, res) => {
    try{
        const gears = await req.orm.CharacterGear.findAll();
        res.status(200).json(gears);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async(req, res) => {
    try{
        const gear = await req.orm.CharacterGear.findByPk(req.params.id);
        if(!gear){
            return res.status(404).json({error: "CharacterGear not found"});
        }
        res.status(200).json(gear);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.patch('/:id', async(req, res) => {
    try{
        const gear = await req.orm.CharacterGear.findOne({where: {id: req.params.id}});
        if(!gear){
            return res.status(404).json({error: "CharacterGear not found"});
        }
        await gear.update(req.body);
        res.status(200).json(gear);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;