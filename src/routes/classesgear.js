const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
router.get('/:id', async(req, res) => {
    try{
        const gears = await req.orm.ClassesGear.findAll({
            where: {
                class_id: req.params.id
            },
            include: {
                model: req.orm.Gear,
            }
        })

        if(gears != []){
            let response = []
            for(let i = 0; i < gears.length; i++){
                let gear = {
                    id: gears[i].gear_id,
                    name: gears[i].Gear.name,
                    description: gears[i].Gear.description,
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
        else{
            res.status(404).json({ error: 'Gear not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while fetching gear' });
    }
});

module.exports = router;