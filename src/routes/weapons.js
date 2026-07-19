const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear arma
router.post('/', async(req, res) => {
    try{
        const weapon = await req.orm.Weapons.create(req.body);
        res.status(201).json(weapon);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver todas las armas
router.get('/', async(req, res) => {
    try{
        const weapons = await req.orm.Weapons.findAll({
            include: [
                {
                    model: req.orm.Properties,
                    through: { attributes: ['values'] }
                }
            ]
        });

        if (weapons && weapons.length > 0) {
            let weaponsObj = weapons.map(w => (typeof w.toJSON === 'function' ? w.toJSON() : w));

            weaponsObj = weaponsObj.map(w => {
                if (Array.isArray(w.Properties)) {
                    w.Properties = w.Properties.map(p => {
                        const values = p.WeaponsProperties && p.WeaponsProperties.values ? p.WeaponsProperties.values : null;
                        const { WeaponsProperties, through, parent, ...propWithoutThrough } = p;
                        return { ...propWithoutThrough, values };
                    });
                }

                const { through, ...weaponWithoutThrough } = w;
                return { ...weaponWithoutThrough };
            });

            return res.status(200).json(weaponsObj);
        } else {
            return res.status(404).json({ error: 'Weapons not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver arma específica por id
router.get('/:id', async(req, res) => {
    try{
        const weapon = await req.orm.Weapons.findByPk(req.params.id, {
            include: [
                {
                    model: req.orm.Properties,
                    through: { attributes: [] }
                }
            ]
        });

        if(weapon){
            res.status(200).json(weapon);
        }
        else{
            res.status(404).json({ error: 'Weapon not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Ver armas por nombre
router.get('/name/:name', async(req, res) => {
    try{
        const weapons = await req.orm.Weapons.findOne({
            where:{
                [Op.and]:[{name: req.params.name}, {base: true}],
            },
        });

        if(weapons){
            res.status(200).json(weapons);
        }
        else{
            res.status(404).json({ error: 'Weapon not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Actualizar arma
router.put('/:id', async(req, res) => {
    try{
        const weapon = await req.orm.Weapons.findByPk(req.params.id);

        if(weapon){
            await weapon.update(req.body);
            res.status(200).json(weapon);
        }
        else{
            res.status(404).json({ error: 'Weapon not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Eliminar arma
router.delete('/:id', async(req, res) => {
    try{
        const weapon = await req.orm.Weapons.findByPk(req.params.id);

        if(weapon){
            await weapon.destroy();
            res.status(204).json(weapon);
        }
        else{
            res.status(404).json({ error: 'Weapon not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;