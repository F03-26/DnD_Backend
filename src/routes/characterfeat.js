const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const feat = await req.orm.CharacterFeat.create(req.body);
        res.status(201).json(feat);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const feat = await req.orm.CharacterFeat.findOne({where: {id: req.params.id}});
        if(!feat){
            return res.status(404).json({error: "CharacterFeat not found"});
        }
        await feat.destroy();
        res.status(204).json({message: "CharacterFeat deleted successfully"});
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;