const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const character = await req.orm.Character.create(req.body);
        return res.status(201).json(character)
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

router.get('/', async(req, res) => {
    try{
        const characters = await req.orm.Character.findAll({
            include: [{
                model: req.orm.Armor,
                through: {attributes: []},
            },
            {
                model: req.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: req.orm.Feat,
                through: {attributes: []},
            },
            {
                model: req.orm.Language,
                through: {attributes: []},
            },
            {
                model: req.orm.Gear,
                through: {attributes: []},
            },
            {
                model: req.orm.Spell,
                through: {attributes: []},
            },
            {
                model: req.orm.Tool,
                through: {attributes: []},
            },
            {
                model: req.orm.Trait,
                through: {attributes: []},
            }]
        });
        
        if(characters != []){
            return res.status(200).json(characters);
        }
        else{
            return res.status(404).json({error: "Characters not found"});
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

router.get('/:id', async(req, res) => {
    try{
        const characters = await req.orm.Character.findOne({
            where: {
                id: req.params.id
            },

            include: [
            {
                model: req.orm.Class
            },
            {
                model: req.orm.Race,
            },
            {
                model: req.orm.Armor,
                through: {attributes: []},
            },
            {
                model: req.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: req.orm.Feat,
                through: {attributes: []},
            },
            {
                model: req.orm.Language,
                through: {attributes: []},
            },
            {
                model: req.orm.Gear,
                through: {attributes: []},
            },
            {
                model: req.orm.Spell,
                through: {attributes: []},
            },
            {
                model: req.orm.Tool,
                through: {attributes: []},
            },
            {
                model: req.orm.Trait,
                through: {attributes: []},
            },
            {
                model: req.orm.Proficiency,
                as: 'profs',
            },
            {
                model: req.orm.AbilityScore,
                as: 'strength',
            },
            {
                model: req.orm.AbilityScore,
                as: 'dexterity',
            },
            {
                model: req.orm.AbilityScore,
                as: 'constitution',
            },
            {
                model: req.orm.AbilityScore,
                as: 'inteligence',
            },
            {
                model: req.orm.AbilityScore,
                as: 'wisdom',
            },
            {
                model: req.orm.AbilityScore,
                as: 'charisma',
            },
        ]
        });
        
        if(characters != []){
            return res.status(200).json(characters);
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json(error);
    }
});

router.get('/user/:id', async(req, res) => {
    try{
        const characters = await req.orm.Character.findAll({
            where: {
                uid: req.params.id
            },
            include: [{
                model: req.orm.Class,
            },{
                model: req.orm.Race,
            }]
        });
        if(characters != []){
            return res.status(200).json(characters);
        }
        else{
            return res.status(404).json({error: "Characters not found"});
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

router.put('/:id/hp', async(req, res) => {
    try{
        const character = req.orm.Character.findByPk(req.params.id);
        if(character){
            await character.update({hit_points: req.body});
            return res.status(200).json(character);
        }
        else{
            return res.status(404).json({error: 'character not found'});
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const character = await req.orm.Character.findByPk(req.params.id);
        if(character){
            await character.destroy();
            return res.status(200).json(character);
        }
        else{
            return res.status(404).json({error: 'character not found'});
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

module.exports = router;