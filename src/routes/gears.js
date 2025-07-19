const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear equipo
router.post('/', async(req, res) => {
    try{
        const gear = await req.orm.Gear.create(req.body);
        res.status(201).json(gear);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

// Ver equipo
router.get('/', async(req, res) => {
    try{
        const gears = await req.orm.Gear.findAll();
        
        if(gears != []){
            res.status(200).json(gears);
        }
        else{
            res.status(404).json({ error: 'Gears not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try{
        const gear = await req.orm.Gear.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: req.orm.Gear,
                as: 'bundle',
                through: {
                    attributes: ['amount']
                }
            }]
        });
        
        if(gear){
            res.status(200).json(gear);
        }
        else{
            res.status(404).json({ error: 'Gear not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/search', async(req, res) => {
    try{
        const gears = await req.orm.Gear.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${req.body.name}%`
                }
            }
        });
        
        if(gears.length > 0){
            res.status(200).json(gears);
        }
        else{
            res.status(404).json({ error: 'Gears not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;