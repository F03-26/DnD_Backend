const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
// Crear clase
router.post('/', async(req, res) => {
    try{
        const class_ = await req.orm.Class.create(req.body);
        res.status(201).json(class_);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

// Ver clases
router.get('/', async(req, res) => {
    try{
        const classes = await req.orm.Class.findAll({
            order: [['id', 'ASC']]
        });
        
        if(classes != []){
            res.status(200).json(classes);
        }
        else{
            res.status(404).json({ error: 'Classes not found' });
        }
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
});

// Ver clase específica
router.get('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id);

        if(class_){
            res.status(200).json(class_);
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
            res.status(200).json(abilities);
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
            res.status(200).json(armors);
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
            res.status(200).json(weapons);
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

// Actualizar clase
router.put('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id);

        if(class_){
            await class_.update(req.body);
            res.status(200).json(class_);
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

// Eliminar Clase
router.delete('/:id', async(req, res) => {
    try{
        const class_ = await req.orm.Class.findByPk(req.params.id);

        if(class_){
            await class_.destroy();
            res.status(204).json(class_);
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