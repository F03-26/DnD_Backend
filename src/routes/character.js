const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

router.post('/', async(req, res) => {
    try{
        const character = await req.orm.Character.create(req.body);
        res.status(201).json(character)
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.get('/', async(req, res) => {
    try{
        const characters = await req.orm.Character.findAll({
            include: [{
                model: req.orm.Armor,
                through: {attributes: []},
            },
            {
                model: req.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: req.orm.Feat,
                through: {attributes: []},
            },
            {
                model: req.orm.Language,
                through: {attributes: []},
            },
            {
                model: req.orm.Gear,
                through: {attributes: []},
            },
            {
                model: req.orm.Spell,
                through: {attributes: []},
            },
            {
                model: req.orm.Tool,
                through: {attributes: []},
            },
            {
                model: req.orm.Trait,
                through: {attributes: []},
            }]
        });
        
        if(characters != []){
            res.status(200).json(characters);
        }
        else{
            res.status(404).json({error: "Characters not found"});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async(req, res) => {
    try{
        const characters = await req.orm.Character.findOne({
            where: {
                id: req.params.id
            },

            include: [
            {
                model: req.orm.Class
            },
            {
                model: req.orm.Race,
            },
            {
                model: req.orm.Armor,
                through: {attributes: []},
            },
            {
                model: req.orm.Weapons,
                through: {attributes: []},
            },
            {
                model: req.orm.Feat,
                through: {attributes: []},
            },
            {
                model: req.orm.Language,
                through: {attributes: []},
            },
            {
                model: req.orm.Gear,
                through: {attributes: []},
            },
            {
                model: req.orm.Spell,
                through: {attributes: []},
            },
            {
                model: req.orm.Tool,
                through: {attributes: ['id']},
            },
            {
                model: req.orm.Trait,
                through: {attributes: []},
            },
            {
                model: req.orm.Proficiency,
                as: 'profs',
            },
            {
                model: req.orm.AbilityScore,
                as: 'strength',
            },
            {
                model: req.orm.AbilityScore,
                as: 'dexterity',
            },
            {
                model: req.orm.AbilityScore,
                as: 'constitution',
            },
            {
                model: req.orm.AbilityScore,
                as: 'inteligence',
            },
            {
                model: req.orm.AbilityScore,
                as: 'wisdom',
            },
            {
                model: req.orm.AbilityScore,
                as: 'charisma',
            },
        ]
        });
        
        if(characters != []){
<<<<<<< Updated upstream
            res.status(200).json(characters);
=======
            const charObj = characters.toJSON ? characters.toJSON() : characters;

            if(Array.isArray(charObj.Weapons)){
                charObj.Weapons = charObj.Weapons.map(w => {
                    const assocId = w.CharacterWeapon && w.CharacterWeapon.id ? w.CharacterWeapon.id : null;

                    if(Array.isArray(w.Properties)){
                        w.Properties = w.Properties.map(p => {
                            const values = p.WeaponsProperties && p.WeaponsProperties.values ? p.WeaponsProperties.values : null;
                            const { WeaponsProperties, ...propWithoutThrough } = p;
                            return { ...propWithoutThrough, values: values };
                        });
                    }

                    const { CharacterWeapon, ...weaponWithoutThrough } = w;
                    return { ...weaponWithoutThrough, association_id: assocId };
                });
            }

            if(Array.isArray(charObj.Gears)){
                charObj.Gears = charObj.Gears.map(g => {
                    const assocId = g.CharacterGear && g.CharacterGear.id ? g.CharacterGear.id : null;
                    const amount = g.CharacterGear && g.CharacterGear.amount ? g.CharacterGear.amount : null;
                    const { CharacterGear, ...gearWithoutThrough } = g;
                    return { ...gearWithoutThrough, association_id: assocId, amount: amount };
                });
            }

            if(Array.isArray(charObj.Armors)){
                charObj.Armors = charObj.Armors.map(a => {
                    const assocId = a.CharacterArmor && a.CharacterArmor.id ? a.CharacterArmor.id : null;
                    const { CharacterArmor, ...armorWithoutThrough } = a;
                    return { ...armorWithoutThrough, association_id: assocId };
                });
            }

            if(Array.isArray(charObj.Feats)){
                charObj.Feats = charObj.Feats.map(f => {
                    const assocId = f.CharacterFeat && f.CharacterFeat.id ? f.CharacterFeat.id : null;
                    const { CharacterFeat, ...featWithoutThrough } = f;
                    return { ...featWithoutThrough, association_id: assocId };
                });
            }

            if(Array.isArray(charObj.Tools)){
                charObj.Tools = charObj.Tools.map(t => {
                    const assocId = t.CharacterTool && t.CharacterTool.id ? t.CharacterTool.id : null;
                    const { CharacterTool, ...toolWithoutThrough } = t;
                    return { ...toolWithoutThrough, association_id: assocId };
                });
            }
            return res.status(200).json(charObj);
>>>>>>> Stashed changes
        }
        else{
            ctx.throw(404);
        }
    }
    catch(error){
        console.log(error.message);
    }
});

    router.get('/user/:id', async(req, res) => {
        try{
            const characters = await req.orm.Character.findAll({
                where: {
                    uid: req.params.id
                },
                include: [{
                    model: req.orm.Class,
                },{
                    model: req.orm.Race,
                }]
            });
            if(characters != []){
                res.status(200).json(characters);
            }
            else{
                res.status(404).json({error: "Characters not found"});
            }
        }
        catch(error){
            console.log(error.message);
            res.status(400).json({error: error.message});
        }

    router.put('/:id/hp', async(req, res) => {
        try{
            const character = req.orm.Character.findByPk(req.params.id);
            if(character){
                await character.update({hit_points: req.body});
                res.status(200).json(character);
            }
            else{
                res.status(404).json({error: 'character not found'});
            }
        }
        catch(error){
            console.log(error.message);
            res.status(400).json({error: error.message});
        }
    })

    router.delete('/:id', async(req, res) => {
        try{
            const character = await req.orm.Character.findByPk(req.params.id);
            if(character){
                await character.destroy();
                res.status(200).json(character);
            }
            else{
                res.status(404).json({error: 'character not found'});
            }
        }
        catch(error){
            console.log(error.message);
            res.status(400).json({error: error.message});
        }
    })
});

module.exports = router;