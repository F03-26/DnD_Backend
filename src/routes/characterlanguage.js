const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const language = await req.orm.CharacterLanguage.create(req.body);
        res.status(201).json(language);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async(req, res) => {
    try{
        const languages = await req.orm.CharacterLanguage.findAll();
        
        if(languages != []){
            res.status(200).json(languages);
        }
        else{
            res.status(404).json({ error: 'Languages not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;