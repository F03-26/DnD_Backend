const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const language = require("../models/language");

// Crear lenguaje
router.post('/', async(req, res) => {
    try{
        const language = await req.orm.Language.create(req.body);
        res.status(201).json(language);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todos los lenguajes
router.get('/', async(req, res) => {
    try{
        const languages = await req.orm.Language.findAll();
        
        if(languages != []){
            res.status(200).json(languages);
        }
        else{
            res.status(404).json({ error: 'Languages not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todos los lenguajes comunes
router.get('/common', async(req, res) => {
    try{
        const languages = await req.orm.Language.findAll({
            where: {
                rare: false
            }
        });
        
        if(languages != []){
            res.status(200).json(languages);
        }
        else{
            res.status(404).json({ error: 'Languages not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todos los lenguajes exóticos
router.get('/rare', async(req, res) => {
    try{
        const languages = await req.orm.Language.findAll({
            where: {
                rare: true
            }
        });
        
        if(languages != []){
            res.status(200).json(languages);
        }
        else{
            res.status(404).json({ error: 'Languages not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver lenguaje específico
router.get('/:id', async(req, res) => {
    try{
        const language = await req.orm.Language.findByPk(req.params.id);

        if(language){
            res.status(200).json(language);
        }
        else{
            res.status(404).json({ error: 'Language not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar lenguaje
router.patch('/:id', async(req, res) => {
    try{
        const language = await req.orm.Language.findByPk(req.params.id);

        if(language){
            await language.update(req.body);
            res.status(200).json(language);
        }
        else{
            res.status(404).json({ error: 'Language not found' });
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
});

// Eliminar lenguaje
router.delete('/:id', async(req, res) => {
    try{
        const language = await req.orm.Language.findByPk(req.params.id);

        if(language){
            await language.destroy();
            res.status(204).json(language);
        }
        else{
            res.status(404).json({ error: 'Language not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;