const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

//Ver todos los conjuros
router.get('/', async (req, res) => {
    try {
        const spells = await req.orm.Spell.findAll();
        if (spells.length > 0) {
            res.status(200).json(spells);
        } else {
            res.status(404).json({ error: 'Spells not found' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;