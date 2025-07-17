const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear dote
router.post('/', async(req, res) => {
    try{
        const feat = await req.orm.Feat.create(req.body);
        res.status(201).json(feat);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while creating the feat' });
    }
});

// Ver todos los dotes
router.get('/', async(req, res) => {
    try{
        const feats = await req.orm.Feat.findAll();

        if(feats != []){
            res.status(200).json(feats);
        }
        else{
            res.status(404).json({ error: 'Feats not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while fetching feats' });
    }
});

// Ver dote específico por id
router.get('/:id', async(req, res) => {
    try{
        const feat = await req.orm.Feat.findByPk(req.params.id);

        if(feat){
            res.status(200).json({
                id: feat.id,
                name: feat.name,
                category: feat.category,
                prerequisite: feat.prerequisite,
                benefits: feat.benefits,
                repeatable: feat.repeatable,
                item: 'feat'
            });
        }
        else{
            res.status(404).json({ error: 'Feat not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while fetching the feat' });
    }
});

module.exports = router;