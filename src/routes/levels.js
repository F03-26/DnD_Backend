const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/', async(req, res) => {
    try{
        const levels = await req.orm.Levels.findAll();
        
        if(levels != []){
            res.status(200).json(levels);
        }
        else{
            res.status(404).json({ error: 'Levels not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;