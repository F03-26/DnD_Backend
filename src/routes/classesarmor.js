const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/:id', async(req, res) => {
    try{
        const armors = await req.orm.ClassesArmor.findAll({
            where: {
                class_id: req.params.id
            },
            include: {
                model: req.orm.Armor,
            }
        })

        if(armors != []){
            let response = []
            for(let i = 0; i < armors.length; i++){
                let armor = {
                    id: armors[i].armor_id,
                    name: armors[i].Armor.name,
                    category: armors[i].Armor.category,
                    armor_class: armors[i].Armor.armor_class,
                    weight: armors[i].Armor.weight,
                    cost: armors[i].Armor.cost,
                    amount: armors[i].amount,
                    option: armors[i].option,
                    item: 'armor'
                }
                response.push(armor);
            }

            res.status(200).json(response);
        }
        else{
            res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;