const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear puntucaiones
router.post('/', async(req, res) => {
    try {
        const ability_score = await req.orm.AbilityScore.create(req.body);
        res.status(201).json(ability_score);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver puntuaciones
router.get('/', async(req, res) => {
    try {
        const ability_scores = await req.orm.AbilityScore.findAll();
        if(ability_scores != []){
            res.status(200).json(ability_scores);
        }
        else {
            res.status(404).json({ error: 'Ability scores not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver puntuaciones con habilidades
router.get('/abilities', async(req, res) => {
    try {
        const ability_scores = await req.orm.AbilityScore.findAll({
            where: {
                base: true,
            },
            order: [['id', 'ASC']],
            include: {
                model: req.orm.Abilities,
            }
        });
        if(ability_scores != []){
            res.status(200).json(ability_scores);
        }
        else {
            res.status(404).json({ error: 'Ability scores not found'});
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
});

// Ver puntuación específica
router.get('/:id', async(req, res) => {
    try {
        const ability_score = await req.orm.AbilityScore.findByPk(req.params.id);

        if(ability_score){
            res.status(200).json(ability_score);
        }
        else{
            res.status(404).json({ error: 'Ability score not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar puntuación
router.put('/:id', async(req, res) => {
    try {
        const ability_score = await req.orm.AbilityScore.findByPk(req.params.id);

        if(ability_score){
            await ability_score.update(req.body);
            res.status(200).json(ability_score);
        }
        else{
            res.status(404).json({ error: 'Ability score not found'});
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
});

// Eliminar puntuación
router.delete('/:id', async(req, res) => {
    try {
        const ability_score = await ctx.orm.AbilityScore.findByPk(req.params.id);

        if(ability_score){
            await ability_score.destroy();
            res.status(204).json(ability_score);
        }
        else{
            res.status(404).json({ error: 'Ability score not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;