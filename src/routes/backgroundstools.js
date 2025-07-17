const express = require("express");
const router = new express.Router();
const { Op, where } = require('sequelize');

router.get('/:id', async(req, res) => {
    try {
        const tools = await req.orm.BackgroundsTools.findAll({
            where: {
                background_id: req.params.id
            },
            include: {
                model: req.orm.Tool
            }
        });

        if(tools != []){
            let response = []
            for(let i = 0; i < tools.length; i++){
                let tool = {
                    id: tools[i].tool_id,
                    name: tools[i].Tool.name,
                    utilize: tools[i].Tool.utilize,
                    craft: tools[i].Tool.craft,
                    weight: tools[i].Tool.weight,
                    cost: tools[i].Tool.cost,
                    amount: tools[i].amount,
                    option: tools[i].option,
                    item: 'tool'
                }
                response.push(tool);
            }

            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Tools not found' });
        }
    }
    catch(error){
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async(req, res) => {
    try {
        const tools = await req.orm.BackgroundsTools.findAll();

        if(tools != []){
            res.status(200).json(tools);
        }
        else {
            res.status(404).json({ error: 'Tools not found' });
        }
    }
    catch(error){
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;