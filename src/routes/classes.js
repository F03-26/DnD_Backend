const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
// Crear clase
router.post('/', async(req, res) => {
    try{
        const class_ = await req.orm.Class.create(req.body);
        return res.status(201).json(class_);
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Ver clases
router.get('/', async(req, res) => {
    try{
        const classes = await req.orm.Class.findAll({
            order: [['id', 'ASC']]
        });
        
        if(classes != []){
            return res.status(200).json(classes);
        }
        else{
            return res.status(404).json({ error: 'Classes not found' });
        }
    }
    catch(error){
        return res.status(400).json({ error: error.message });
    }
});

// Ver clase específica
router.get('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id, 
            {include: [
                    {
                        model: req.orm.Features
                    },
                    {
                        model: req.orm.ClassFeatureValues
                    },
                    {
                        model: req.orm.ClassesLevelSpells
                    }
                ]}
        );

        if(class_){
            return res.status(200).json(class_);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Ver conjuros por nivel
router.get('/spells/levels/:id', async(req, res) => {
    try{
        const spellsLevels = await req.orm.ClassesLevelSpells.findAll({
            where: {
                class_id: req.params.id,
            }
        });

        console.log("==================================", spellsLevels);

        if(spellsLevels != []){
            return res.status(200).json(spellsLevels);
        }
        else{
            return res.status(404);
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Ver habilidades por clase
router.get('/abilities/:id', async(req, res) => {
    try{
        const abilities = await req.orm.Class.findAll({
            where: {
                id: req.params.id,
            },
            include: {
                model: req.orm.Abilities,
                through: {attributes: []},
            },
            attributes: []
        });

        if(abilities != []){
            return res.status(200).json(abilities);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Ver armaduras por clase
router.get('/armor/:id', async(req, res) => {
    try{
        const armors = await req.orm.Class.findAll({
            where: {
                id: req.params.id,
            },
            include: {
                model: req.orm.Armor,
                through: {attributes: []},
            },
            attributes: []
        });

        if(armors != []){
            return res.status(200).json(armors);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Ver armas por clase
router.get('/weapons/:id', async(req, res) => {
    try{
        const weapons = await req.orm.Class.findAll({
            where: {
                id: req.params.id,
            },
            include: {
                model: req.orm.Weapons,
                through: {attributes: []},
            },
            attributes: []
        });

        if(weapons != []){
            return res.status(200).json(weapons);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

router.get('/spells/all', async (req, res) => {
    try {
        const classesWithSpells = await req.orm.Class.findAll({
            include: {
                model: req.orm.Spell,
                through: { attributes: [] }
            },
            order: [['id', 'ASC']]
        });
        const filtered = classesWithSpells.filter(cls => cls.Spells && cls.Spells.length > 0);

        const result = filtered.map(cls => {
            const obj = cls.toJSON();
            delete obj.Spells;
            return obj;
        });

        if(result.length > 0){
            return res.status(200).json(result);
        }
        else{
            return res.status(404).json({ error: 'No classes with spells found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Actualizar clase
router.put('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id);

        if(class_){
            await class_.update(req.body);
            return res.status(200).json(class_);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

// Eliminar Clase
router.delete('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id);

        if(class_){
            await class_.destroy();
            return res.status(204).json(class_);
        }
        else{
            return res.status(404).json({ error: 'Class not found' });
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;