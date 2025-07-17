const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear Proficiencia
router.post('/', async(req, res) => {
    try {
        const proficiency = await req.orm.Proficiency.create(req.body);
        res.status(201).json(proficiency);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

