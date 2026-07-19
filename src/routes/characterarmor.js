const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const armor = await req.orm.CharacterArmor.create(req.body);
        res.status(201).json(armor);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const armor = await req.orm.CharacterArmor.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!armor){
            return res.status(404).json({error: 'CharacterArmor not found'});
        }
        await armor.destroy();
        return res.status(204).send();
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;