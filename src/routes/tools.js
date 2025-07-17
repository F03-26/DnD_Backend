const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear herramienta
router.post('/', async(req, res) => {
    try{
        const tool = await req.orm.Tool.create(req.body);
        res.status(201).json(tool);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todas las herramientas
router.get('/', async(req, res) => {
    try{
        const tools = await req.orm.Tool.findAll();
        
        if(tools != []){
            res.status(200).json(tools);
        }
        else{
            res.status(404).json({ error: 'Tools not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver herramienta específica
router.get('/:id', async(req, res) => {
    try{
        const tool = await req.orm.Tool.findByPk(req.params.id);

        if(tool){
            res.status(200).json(tool);
        }
        else{
            res.status(404).json({ error: 'Tool not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver herramientas de una profesión específica
router.get('/profesion/:profesion', async(req, res) => {
    try{
        const tools = await req.orm.Tool.findAll({
            where: {
                profesion: req.params.profesion
            }
        });
        
        if(tools != []){
            res.status(200).json(tools);
        }
        else{
            res.status(404).json({ error: 'Tools not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver herramientas por nombre
router.get('/name/:name', async(req, res) => {
    try{
        const tool = await req.orm.Tool.findOne({
            where: {
                name: req.params.name
            }
        });
        
        if(tool){
            res.status(200).json(tool);
        }
        else{
            res.status(404).json({ error: 'Tool not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar herramienta
router.put('/:id', async(req, res) => {
    try{
        const tool = await req.orm.Tool.findByPk(req.params.id);

        if(tool){
            await tool.update(req.body);
            res.status(200).json(tool);
        }
        else{
            res.status(404).json({ error: 'Tool not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Eliminar Herramienta
router.delete('/:id', async(req, res) => {
    try{
        const tool = await ctx.orm.Tool.findByPk(req.params.id);

        if(tool){
            await tool.destroy();
            res.status(204).json(tool);
        }
        else{
            res.status(404).json({ error: 'Tool not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;