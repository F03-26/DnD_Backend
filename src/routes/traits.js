const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear rasgo
router.post('/', async(req, res) => {
    try{
        const trait = await req.orm.Trait.create(req.body);
        res.status(201).json(trait);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todos los rasgos
router.get('/', async(req, res) => {
    try{
        const traits = await req.orm.Trait.findAll();

        if(traits != []){
            res.status(200).json(traits);
        }
        else{
            res.status(404).json({ error: 'Traits not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;