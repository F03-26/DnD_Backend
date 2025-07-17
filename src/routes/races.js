const express = require('express');
const router = express.Router();
const { Op, where } = require('sequelize');

// Ver todas las razas
router.get('/', async(req, res) => {
    try{
        const races = await req.orm.Race.findAll()

        if(races != []){
            res.status(200).json(races);
        }
        else{
            res.status(404).json({ error: 'Races not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver raza específica con rasgos
router.get('/:id', async(req, res) => {
    try{
        const race = await req.orm.Race.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: req.orm.Trait,
                attributes: ['id', 'name', 'description']
            }
        });

        if(race){
            let r = {
                id: race.id,
                name: race.name,
                description: race.description,
                type: race.type,
                size: race.size,
                size_range: race.size_range,
                speed: race.speed,
                Traits: race.Traits,
            };
            for(let i = 0; i < race.Traits.length; i++){
                r.Traits[i] = {
                    id: r.Traits[i].id,
                    name: r.Traits[i].name,
                    description: r.Traits[i].description,
                    race_id: r.Traits[i].race_id,
                    item: 'trait'
                }
            }
            res.status(200).json(r);
        }
        else{
            res.status(404).json({ error: 'Race not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;