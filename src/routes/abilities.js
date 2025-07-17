const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear habilidad
router.post('/', async(req, res) => {
    try{
        const ability = await req.orm.Abilities.create(req.body);
        res.status(201).json(ability);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todas las habilidades
router.get('/', async(req, res) => {
    try{
        const abilities = await req.orm.Abilities.findAll();
        
        if(abilities != []){
            res.status(201).json(abilities);
        }
        else{
            res.status(404).json({ error: 'Abilities not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver habilidad específica por id
router.get('/:id', async(req, res) => {
    try{
        const ability = await req.orm.Abilities.findByPk(req.params.id);

        if(ability){
            res.status(200).json(ability);
        }
        else{
            res.status(404).json({ error: 'Ability not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver habilidad base por nombre
router.get('/name/:name', async(req, res) => {
    try{
        const ability = await req.orm.Abilities.findOne({
            where:{
                [Op.and]:[{name: req.params.name}, {base: true}],
            },
        });

        if(ability){
            res.status(200).json(ability);
        }
        else{
            res.status(404).json({ error: 'Ability not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver habilidades de una clase
/*
router.get('abilities.class', '/class/:id', async(ctx) => {
    try{
        const abilities = await ctx.orm.Abilities.findAll({
            include: {
                model: ctx.orm.Class,
                attributes: [],
                where: {class_id: ctx.params.id},
                through: {attributes: []}
            }
        });

        if(abilities != []){
            ctx.body = abilities;
            ctx.status = 200;
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        if(error.message == 'Not Found'){
            ctx.body = { error: 'Abilities not found'}
            ctx.status = 404;
        }
        else{
            console.log(error.message);
            ctx.body = {error: error.message};
            ctx.status = 400;
        }
    }
})
    */

// Actualizar habilidad
router.put('/:id', async(req, res) => {
    try{
        const ability = await req.orm.Abilities.findByPk(req.params.id);

        if(ability){
            await ability.update(req.body);
            res.status(200).json(ability);
        }
        else{
            res.status(404).json({ error: 'Ability not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Eliminar habilidad
router.delete('/:id', async(req, res) => {
    try{
        const ability = await req.orm.Abilities.findByPk(req.params.id);

        if(ability){
            await ability.destroy();
            res.status(204).json(ability);
        }
        else{
            res.status(404).json({ error: 'Ability not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;