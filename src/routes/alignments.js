const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear alineamiento
router.post('/', async(req, res) => {
    try{
        const alignment = await req.orm.Alignment.create(req.body);
        res.status(201).json(alignment);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todos los alineamientos
router.get('/', async(req, res) => {
    try{
        const alignments = await req.orm.Alignment.findAll();

        if(alignments != []){
            res.status(200).json(alignments);
        }
        else{
            res.status(404).json({ error: 'Alignments not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver alineamiento específico
router.get('/:id', async(req, res) => {
    try{
        const alignment = await req.orm.Alignment.findByPk(req.params.id);

        if(alignment){
            res.status(200).json(alignment);
        }
        else{
            res.status(404).json({ error: 'Alignment not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar alineamiento
router.patch('/:id', async(req, res) => {
    try{
        const alignment = await req.orm.Alignment.findByPk(res.params.id);

        if(alignment){
            await alignment.update(req.body);
            res.status(200).json(alignment);
        }
        else{
            res.status(404).json({ error: 'Alignment not found'});
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
});

// Eliminar alineamiento
router.delete('/:id', async(req, res) => {
    try{
        const alignment = await req.orm.Alignment.findByPk(req.params.id);

        if(alignment){
            await alignment.destroy();
            res.status(204).json(alignment);
        }
        else{
            res.status(404).json({ error: 'Alignment not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;