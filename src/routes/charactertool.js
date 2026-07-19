const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const tool = await req.orm.CharacterTool.create(req.body);
        res.status(201).json(tool);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async(req, res) => {
    try{
        const tools = await req.orm.CharacterTool.findAll();
        res.status(200).json(tools);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try{
        const tool = await req.orm.CharacterTool.findByPk(req.params.id);
        if(tool){
            res.status(200).json(tool);
        }
        else{
            res.status(404).json({error: "Tool not found"});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const tool = await req.orm.CharacterTool.findOne({where: {id: req.params.id}});
        if(tool){
            await tool.destroy();
            res.status(204).json(tool);
        }
        else{
            res.status(404).json({error: "Tool not found"});        
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.delete('/character/:id', async(req, res) => {
    try{
        const tools = await req.orm.CharacterTool.findAll({
            where: {
                character_id: req.params.id,
            }
        });
        if(tools.length > 0){
            for(const tool of tools){
                await tool.destroy();
            }
            res.status(204).json(tools);
        }
        else{
            res.status(404).json({error: "Tools not found"});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;