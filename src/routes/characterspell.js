const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const spell = await req.orm.CharacterSpell.create(req.body);
        return res.status(201).json(spell);
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const spell = await req.orm.CharacterSpell.findByPk(req.params.id);
        if(!spell){
            await spell.destroy();
            return res.status(204).json(spell);
        }
        return res.status(404).json({error: "Spell not found."});
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

router.delete('/character/:id', async(req, res) => {
    try{
        const spells = await req.orm.CharacterSpell.findAll({
            where: {
                character_id: req.params.id,
            }
        });

        if(spells){
            spells.map(async (spell) => await spell.destroy());
            return res.status(204).json(spells);
        }
        return res.status(404).json({error: "Spells not found."});
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;