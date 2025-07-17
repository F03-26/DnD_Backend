const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear armadura
router.post('/', async(req, res) => {
    try{
        const armor = await req.orm.Armor.create(req.body);
        res.status(201).json(armor);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todas las armaduras
router.get('/', async(req, res) => {
    try{
        const armors = await req.orm.Armor.findAll();
        
        if(armors != []){
            res.status(200).json(armors);
        }
        else{
            res.status(404).json({ error: 'Armors not found'});
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
        console.log(error.message);
    }
});

// Ver armadura específica por id
router.get('/:id', async(req, res) => {
    try{
        const armor = await req.orm.Armor.findByPk(req.params.id);

        if(armor){
            res.status(200).json(armor);
        }
        else{
            res.status(404).json({ error: 'Armor not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver armaduras por nombre
router.get('/name/:name', async(req, res) => {
    try{
        const armor = await req.orm.Armor.findOne({
            where:{
                [Op.and]:[{name: req.params.name}, {base: true}],
            },
        });

        if(armor){
            res.status(200).json(armor);
        }
        else{
            res.status(404).json({ error: 'Armor not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar armadura
router.put('/:id', async(req, res) => {
    try{
        const armor = await req.orm.Armor.findByPk(req.params.id);

        if(armor){
            await armor.update(req.body);
            res.status(200).json(armor);
        }
        else{
            res.status(404).json({ error: 'Armor not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Eliminar armadura
router.delete('/:id', async(req, res) => {
    try{
        const armor = await req.orm.Armor.findByPk(req.params.id);

        if(armor){
            await armor.destroy();
            res.status(204).json(armor);
        }
        else{
            res.status(404).json({ error: 'Armor not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;