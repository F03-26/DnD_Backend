const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

// Crear moneda
router.post('/', async(req, res) => {
    try{
        const coin = await req.orm.Coin.create(req.body);
        res.status(201).json(coin);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while creating the coin' });
    }
});

// Ver monedas
router.get('/', async(req, res) => {
    try{
        const coins = await req.orm.Coin.findAll();
        
        if(coins != []){
            res.status(200).json(coins);
        }
        else{
            res.status(404).json({ error: 'Coins not found' });
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({ error: 'An error occurred while fetching coins' });
    }
});

module.exports = router;