const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/:id', async(req, res) => {
    try{
        const weapons = await req.orm.ClassesWeapons.findAll({
            where: {
                class_id: req.params.id
            },
            include: {
                model: req.orm.Weapons,
            }
        })

        if(weapons != []){
            let response = []
            for(let i = 0; i < weapons.length; i++){
                let weapon = {
                    id: weapons[i].weapon_id,
                    name: weapons[i].Weapon.name,
                    type: weapons[i].Weapon.type,
                    category: weapons[i].Weapon.category,
                    damage_die: weapons[i].Weapon.damage_die,
                    damage_type: weapons[i].Weapon.damage_type,
                    weight: weapons[i].Weapon.weight,
                    cost: weapons[i].Weapon.cost,
                    amount: weapons[i].amount,
                    option: weapons[i].option,
                    item: 'weapon'
                }
                response.push(weapon);
            }

            res.status(200).json(response);
        }
        else{
            res.status(404).json({ error: 'Weapons not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while fetching weapons' });
    }
});

module.exports = router;