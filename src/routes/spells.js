const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

//Ver todos los conjuros
router.get('/', async (req, res) => {
    try {
        const spells = await req.orm.Spell.findAll({
            order: [['id', 'ASC']]
        });
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

router.get('/search', async (req, res) => {
    try{
        const spells = await req.orm.Spell.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${req.body.name}%`
                }
            }
        });
        if (spells.length > 0) {
            res.status(200).json(spells);
        } else {
            res.status(404).json({ error: 'Spells not found' });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/class/:classId', async (req, res) => {
    try {
        const spellsClass = await req.orm.ClassesSpells.findAll({
            where: { class_id: req.params.classId },
            include: [{ model: req.orm.Spell }]
        });
        if (spellsClass.length > 0) {
            const spells = spellsClass.map(cs => cs.Spell);
            res.status(200).json(spells);
        } else {
            res.status(404).json({ error: 'Spells not found for this class' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;