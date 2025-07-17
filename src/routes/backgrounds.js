const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear trasfondo
router.post('/', async(req, res) => {
    try{
        const background = await req.orm.Background.create(req.body);
        res.status(201).json(background);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver trasfondos
router.get('/', async(req, res) => {
    try{
        const backgrounds = await req.orm.Background.findAll();
        
        if(backgrounds != []){
            res.status(200).json(backgrounds);
        }
        else{
            res.status(404).json({ error: 'Backgrounds not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver trasfondo específico
router.get('/:id', async(req, res) => {
    try{
        const background = await req.orm.Background.findByPk(req.params.id);

        if(background){
            res.status(200).json(background);
        }
        else{
            res.status(404).json({ error: 'Background not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar trasfondo
router.put('/:id', async(req, res) => {
    try{
        const background = await req.orm.Background.findByPk(req.params.id);

        if(background){
            await background.update(req.body);
            res.status(200).json(background);
        }
        else{
            res.status(404).json({ error: 'Background not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Eliminar Clase
router.delete('/:id', async(req, res) => {
    try{
        const background = await req.orm.Background.findByPk(req.params.id);

        if(background){
            await background.destroy();
            res.status(204).json(background);
        }
        else{
            res.status(404).json({ error: 'Background not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;