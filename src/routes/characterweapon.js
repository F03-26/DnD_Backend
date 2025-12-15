const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const weapon = await req.orm.CharacterWeapon.create(req.body);
        return res.status(201).json(weapon);
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const weapon = await req.orm.CharacterWeapon.findOne({where: {id: req.params.id}});
        if(weapon){
            await weapon.destroy();
            return res.status(204).json(weapon);
        }
        return res.status(404).json({error: "Weapon not found"});        
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({error: error.message});
    }
});

router.delete('/character/:id', async(req, res) => {
    try{
        const weapons = await req.orm.CharacterWeapon.findAll({
            where: {
                character_id: req.params.id,
            }
        });

        if(weapons){
            weapons.map(async (weapon) => await weapon.destroy());
            return res.status(204).json(weapons);
        }
        return res.status(404).json({error: "Weapons not found"});
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;