const express = require("express");
const router = new express.Router();
const { Op, where } = require('sequelize');

router.get('/:id', async(req, res) => {
    try {
        const gears = await req.orm.BackgroundsGear.findAll({
            where: {
                background_id: req.params.id
            },
            include: {
                model: req.orm.Gear
            }
        });

        if(gears != []){
            let response = []
            for(let i = 0; i < gears.length; i++){
                let gear = {
                    id: gears[i].gear_id,
                    name: gears[i].Gear.name,
                    type: gears[i].Gear.type,
                    category: gears[i].Gear.category,
                    damage_die: gears[i].Gear.damage_die,
                    damage_type: gears[i].Gear.damage_type,
                    weight: gears[i].Gear.weight,
                    cost: gears[i].Gear.cost,
                    amount: gears[i].amount,
                    option: gears[i].option,
                    item: 'gear'
                }
                response.push(gear);
            }

            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Gears not found' });
        }
    }
    catch(error){
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;